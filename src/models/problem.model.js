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
    enum: ["easy", "medium", "hard"],
    required: [true, "difficulty must be provided"],
    default:"easy"
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
  codeStub: {
    type: String,
  },

});
const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
