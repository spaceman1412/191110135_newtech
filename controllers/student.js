const studentModel = require("../models/student");

const GetStudentById = (req, res) => {
  const studentId = req.params.id;
  console.log(studentId);

  if (studentId === "") {
    res.status(404).json({ error: "Not valid" });
    return;
  }

  const user = studentModel.FindStudentById(studentId);
  if (!user) {
    res.json({ error: "User not found" });
    return;
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

  const studentId = req.body.id;
  if (studentModel.FindStudentById(studentId)) {
    res.status(401).json({ error: "This user already exists" });
    return;
  }

  const newStudent = {
    id: studentId,
    name: req.body.name,
  };
  studentModel.AddToGroup(newStudent);
  res.status(200).json(newStudent);
};

const GetStudentMessage = (req, res) => {
  const studentId = req.params.id;
  console.log(studentId);
  if (studentId === "") {
    res.status(404).json({ error: "Not valid" });
    return;
  }

  const user = studentModel.FindStudentById(studentId);
  if (!user) {
    res.json({ error: "Not valid" });
    return;
  }

  res.set("content-type", "text/html");
  const resMesg = `<html><body><ul><li>${user.name}</li></ul></body></html>`;
  res.send(Buffer.from(resMesg));
};

module.exports = {
  GetStudentById,
  GetAllStudent,
  CreateNewStudent,
  GetStudentMessage,
};
