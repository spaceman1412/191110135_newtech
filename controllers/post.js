var postModel = require("../models/post");

const getIndexPage = (_, res) => {
  const posts = postModel.GetAllPost();
  res.render("index", { posts });
};

const getPostApi = (req, res) => {
  if (req.params.id === undefined) {
    return res.status(404).json("id not found");
  }
  const id = parseInt(req.params.id);

  var post = postModel.GetPostById(id);
  return res.render("post", { post });
};

const getPostEditPage = (req, res) => {
  const id = parseInt(req.params.id);
  post = postModel.GetPostById(id);
  res.render("edit", { post });
};

const getPostUpdateApi = (req, res) => {
  const id = parseInt(req.params.id);
  updatePost = postModel.GetPostById(id);
  const { title, content, comments } = req.body;

  if (updatePost === undefined) {
    return res.status(404).json("id not found");
  }

  const newPost = {
    id: id,
    title: title,
    content: content,
    comments: comments,
  };

  const postIndex = postModel.GetPostIndexById(id);
  if (postIndex >= 0) {
    postModel.UpdatePostById(postIndex, newPost);
    return res.redirect("/");
  }

  return res.redirect("/");
};

const postUpdateCommentApi = (req, res) => {
  const id = parseInt(req.params.id);
  const { content } = req.body;

  postIndex = postModel.GetPostIndexById(id);
  if (content === "") {
    return res.redirect(`/post/${id}`);
  }
  if (postIndex >= 0) {
    var post = postModel.GetPostById(id);
    var newComment = {
      id: post.comments.length ? post.comments.length + 1 : 0,
      content: content,
    };

    post.comments = [...post.comments, newComment];
    postModel.UpdatePostById(postIndex, post);
    return res.redirect(`/post/${id}`);
  }

  return res.status(404).json("id not found");
};

const deletePostApi = (req, res) => {
  const id = parseInt(req.params.id);
  if (id === "") {
    return res.status(404).json("id not found");
  }
  var postIndex = postModel.GetPostIndexById(id);

  if (postIndex < 0) {
    return res.status(404).json("id not found");
  }

  postModel.DeletePostById(postIndex);
  let posts = postModel.GetAllPost();
  console.log(posts);
  return res.redirect("/");
};

const addPostApi = (req, res) => {
  const posts = postModel.GetAllPost();
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    comments: [],
  };

  postModel.AddPost(newPost);
  res.redirect("/");
};

const addPostPage = (_, res) => {
  res.render("newpost");
};

module.exports = {
  getIndexPage,
  getPostApi,
  getPostEditPage,
  getPostUpdateApi,
  postUpdateCommentApi,
  deletePostApi,
  addPostApi,
  addPostPage,
};
