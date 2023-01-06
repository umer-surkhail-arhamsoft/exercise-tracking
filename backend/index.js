const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
mongoose.connect("mongodb://localhost:27017/exercise")

const server = express();
server.use(express.urlencoded())
server.use(express.json())
server.use(cors({origin: "*"}))
server.post("/", async (req, res)=> {
    console.log(req.body)
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !email || !password) {
        return res.status(400).send({status: false, message: "Please submit all required fields!"})
    }
    if(password.length < 8) {
        return res.status(400).send({status: false, message: "Password should be at least 8 characters!"})
    }
    if(!validateEmail(email)) {
        return res.status(400).send({status: false, message: "Please enter valid email"})
    }
    let user = await User.create({firstName, lastName, email, password});
    res.send({status: true, message: "User created successfully!", user})
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

server.listen(8081)