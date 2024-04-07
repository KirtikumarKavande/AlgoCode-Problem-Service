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
}

module.exports = ProblemRepository;
