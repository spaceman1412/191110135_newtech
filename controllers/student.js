var studentModel = require("../models/student");

const GetStudentById = (req, res) => {
  studentId = req.params.id;
  console.log(studentId);
  if (studentId === "") {
    res.status(404).json({ errr: "Not valid" });
  }

  user = studentModel.FindStudentById(studentId);
  if (!user) {
    res.json({ errr: "User not found" });
  }

  res.json(user);
};

const GetAllStudent = (_, res) => {
  res.json(studentModel.GetGroup());
};

const CreateNewStudent = (req, res) => {
  console.log(`${req.body}`);
  if (!req.body.id) {
    return res.status(400).json({
      error: "Must have id",
    });
  }

  var studentId = req.body.id;
  if (studentModel.FindStudentById(studentId)) {
    res.status(401).json({ err: "This user already exist" });
  }

  const newStudent = {
    id: studentId,
    name: req.body.name,
  };
  studentModel.AddToGroup(newStudent);
  res.status(200).json(newStudent);
};

const GeStudentMessage = (req, res) => {
  studentId = req.params.id;
  console.log(studentId);
  if (studentId === "") {
    res.status(404).json({ errr: "Not valid" });
  }

  user = studentModel.FindStudentById(studentId);
  if (!user) {
    res.json({ errr: "Not valid" });
  }

  res.set("content-type", "text/html");
  var resMesg =
    " <html><body><ul><li> <" + user.name + "> </li></ul></body></html>.";
  res.send(Buffer.from(resMesg));
};

module.exports = {
  GetStudentById,
  GetAllStudent,
  CreateNewStudent,
  GeStudentMessage,
};
