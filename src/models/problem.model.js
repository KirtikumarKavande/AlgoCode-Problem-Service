const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title can not be empty"],
  },
  description: {
    type: String,
    required: [true, "title can not be empty"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: [true, "difficulty must be provided"],
    default:"Easy"
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  article: {
    type: String,
  },
  solution: {
    type: Object,
  },
  initialCodeStub: {
    type: Object,
  },

});
const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
