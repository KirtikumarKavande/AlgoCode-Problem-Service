const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    const problem = await Problem.create({
      title: problemData.title,
      description: problemData.description,
      testCases: problemData.testCases ? problemData.testCases : [],
      difficulty: problemData.difficulty,
      article: problemData.article ? problemData.article : "",
      solution: problemData.solution,
      initialCodeStub: problemData.initialCodeStub

    });
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find().select('-solution');;
    return problems;
  }

  async getProblemById(id) {
    const problem = await Problem.findById(id);
    if (!problem) {
      throw new NotFound("problem", id);
    }

    return problem;
  }

  async deleteProblemById(id) {
    const deleteProblem = await Problem.findByIdAndDelete(id);
    if (!deleteProblem) {
      throw new NotFound("problem", id);
    }

    return deleteProblem;
  }

  async updateProblem(id,updatedData) {
    const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedProblem) {
      throw new NotFound("Problem", id);
    }
    return updatedProblem;
  }
}

module.exports = ProblemRepository;
