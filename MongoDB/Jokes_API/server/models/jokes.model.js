const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    joke: {
      type: String,
      required: [true, "Joke is required"],
      minlength: [5, "Joke must be longer than 5 characters"],
    },
    jokepunchline: {
      type: String,
      required: [true, "Joke must have a punchline"],
      minlength: [4, "Joke punchline must be 4 character long"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jokes", JokesSchema);
