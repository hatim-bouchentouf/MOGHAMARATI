const { validationResult } = require("express-validator");

const USERS = [
  {
    id: "u1",
    name: "chanko",
    email: "chanko@gmail.com",
    password: "hatim",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: USERS });
};

const signUp = (req, res, next) => {
  const { id, name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Invalid inputs passed, please check your data." });
  }
  const hasUser = USERS.find((u) => u.email === email);

  if (hasUser) {
    return res
      .status(401)
      .send({ message: "Could not create user, email already exists." });
  }
  const createUser = {
    id,
    name,
    email,
    password,
  };
  USERS.push(createUser);
  res.status(201).json({ user: createUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    return res.status(401).send({
      message: "Could not identify user, credentials seem to be wrong.",
    });
  }
  res.json({ message: "Logged in!" });
};
exports.getUsers = getUsers;
exports.signup = signUp;
exports.login = login;
