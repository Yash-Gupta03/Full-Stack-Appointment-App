const User = require("../models/user");
const Person = require("../models/user");

exports.addUser = async (req, res, next) => {
  // res.send("It is working");
  try {
    const name = req.body.uname;
    const email = req.body.email;
    const phone = req.body.phone;

    const data = await Person.create({
      name: name,
      email: email,
      phone: phone,
    });
    res.json({ newUserDetail: data });
  } catch (err) {
    res.status(500).json({ err: err });
  }

  // console.log(email);
  // console.log(name);
  // console.log(phone);
  // res.send(`${email}`);
};

exports.fetchUsers = async (req, res, next) => {
  try {
    const data = await Person.findAll();
    res.status(200).json({ allUsers: data });
    console.log(data);
  } catch (err) {
    res.status(500).json({ err: err });
  }

  // res.redirect("/");
};

exports.deleteUser = async (req, res, next) => {
  // const userid = ;
  const data = await Person.destroy({
    where: {
      id: req.params.userId,
    },
  });
  res.status(200).json({ data: data });
};
