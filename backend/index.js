const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const registrationModel = require ("./models/registration")
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://asadbrohi025:msJLBnqizV5DOa5g@soulmatedb.at0oxqu.mongodb.net/soulmate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


  // Login API
app.post("/login", (req, res) => {  
  const { name, password } = req.body;
  console.log("Received login request:", req.body); 
  UserModel.findOne({ name: name })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Username or Password is incorrect");
        }
      } else {
        res.json("This User does not exist");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});


// SignUp API
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});

// API for Storing the Profiles info
app.post("/userinfo", (req, res) => { 
  registrationModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});

app.post("/profiles", (req, res) => {
  console.log("Profiles API Fetched");
  const { agefrom, ageto, gender, religion } = req.body;
  console.log("Received the Show Profiles request:", req.body);

  // Create the query object based on the provided criteria
  const query = {
    age: { $gte: agefrom, $lte: ageto },
    gender: gender,
    religion: religion,
  };

  registrationModel.find(query)
    .then((users) => {
      if (users.length > 0) {
        console.log(users);
        return res.json(users); // Return the list of users that match the criteria
      } else {
        return res.json("No profiles found matching the criteria");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
