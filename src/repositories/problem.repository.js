const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    const problem = await Problem.create({
      title: problemData.title,
      description: problemData.description,
      testCases: problemData.testCases ? problemData.testCases : [],
    });
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find();
    return problems;
  }

  async getProblemById(id) {
    console.log(id);
    const problem = await Problem.findById(id);
    if (!problem) {
      throw new NotFound("problem", id);
    }

    return problem;
  }
}

module.exports = ProblemRepository;
