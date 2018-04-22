const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Seed the DB with data
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MERN-Authentication"
);

const UserSeed = [
  {
    emailAddress: "fernando.corbato@gmail.com",
    firstName: "Fernando",
    lastName: "Corbato",
    password: "MERNAuthPassword%1"
  },
  {
    emailAddress: "levi.crouch@gmail.com",
    firstName: "Levi",
    lastName: "Crouch",
    password: "MERNAuthPassword%2"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });