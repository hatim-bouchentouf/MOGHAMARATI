const { validationResult } = require("express-validator");
const User = require("../models/userSchema");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (error) {
    return res.status(422).json({ message: "Fetching users failed !!!" });
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Invalid inputs passed, please check your data." });
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return res
      .status(422)
      .json({ message: "Signing up failed, please try again later" });
  }

  if (existingUser) {
    return res.status(422).json({ message: "User already exists !!!" });
  }

  const createdUser = new User({
    name,
    email,
    image: "hello",
    password,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return res
      .status(422)
      .json({ message: "login failed, please try again later" });
  }

  if (!existingUser || existingUser.password !== password) {
    return res
      .status(401)
      .json({ message: "Invalid credentials, could not log you in!!!" });
  }
  res.json({
    message: "Logged in!",
    user: existingUser.toObject({ getters: true }),
  });
};
exports.getUsers = getUsers;
exports.signup = signUp;
exports.login = login;
