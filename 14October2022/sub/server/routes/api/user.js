const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const gravatar = require("gravatar");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check } = require("express-validator");
const { validationResult } = require("express-validator");

// router.post("/",(req,res)=>
// {
//    console.log(req.body)
//     res.send("heloo ...")
// })

const Users = require("../../models/Users");

//@routeb POST api/user
//@desc register route
//@access public
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //if user already register
    const { name, email, password } = req.body;
    try {
      let user = await Users.findOne({ email });
      if (user) {
        return res.json({ email: [{ msg: "user already exist" }] });
      }

      //create new user in db
      user = new Users({
        name,
        email,
        password,
      });

      //encrypt password using salt nd hash and save to database
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      //res.send("user registerd")

      //jsonwebtoken..create a payload and sign for token
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("key"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.send("server err");
    }
  }
);

module.exports = router;
