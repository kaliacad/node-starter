const express = require("express");
const router = express.Router();
const PeopleSchema = require("./models/people.model");

router.get("/", async (req, res) => {
  let peopleResult;
  try {
    peopleResult = await PeopleSchema.findOne({});
    console.log("people found success");
  } catch (err) {
    console.log("unable to find people", err);
  }

  res.json(peopleResult);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const people = await PeopleSchema.create(req.body);
  res.json(people);
});

module.exports = router;
