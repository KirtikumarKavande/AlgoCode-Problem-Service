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

  async getAllProblem() {
    const allProblems = await this.problemRepository.getAllProblems();
    return allProblems;
  }
  async getProblemById(id) {
  
    const problem = await this.problemRepository.getProblemById(id);
    return problem;
  }

  async deleteProblemById(id){
    const deletedProblem = await this.problemRepository.deleteProblemById(id);
    return deletedProblem;
  }

  async updateProblem(problemId,data) {
    const problem = await this.problemRepository.updateProblem(problemId,data);
    return problem;
}
}

module.exports = ProblemService;
