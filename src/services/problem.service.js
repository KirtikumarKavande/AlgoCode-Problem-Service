const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = markdownSanitizer(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);

    return problem;
  }

  async getAllProblem(){
    const allProblems=await this.problemRepository.getAllProblems()
    return allProblems
  }
}

module.exports = ProblemService;
