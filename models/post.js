var posts = [];

function GetAllPost() {
  return posts;
}

function GetPostIndexById(postId) {
  return posts.findIndex((value) => value.id === postId);
}

function UpdatePostById(index, post) {
  posts[index].title = post.title;
  posts[index].content = post.content;
  posts[index].comments = post.comments;
}

function GetPostById(id) {
  return posts.find((value) => value.id === id);
}

function AddPost(newPost) {
  posts.push(newPost);
}

function DeletePostById(id) {
  posts.splice(id, 1);
}

module.exports = {
  GetAllPost,
  GetPostById,
  GetPostIndexById,
  UpdatePostById,
  AddPost,
  DeletePostById,
};
