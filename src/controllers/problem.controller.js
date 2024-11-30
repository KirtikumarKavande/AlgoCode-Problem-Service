const { StatusCodes } = require("http-status-codes");
const BadRequest = require("../errors/badRequest.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res, next) {
  try {
    throw new BadRequest("ping", "I am kirtikumar");
  } catch (error) {
    next(error);
  }
}

async function addProblem(req, res,next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const id = req.params.id;
    const problem = await problemService.getProblemById(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "successfully fetched problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const allProblems = await problemService.getAllProblem();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "successfully fetched all problems",
      error: {},
      data: allProblems,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const id = req.params.id;
    const deletedProblem =await problemService.deleteProblemById(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "problem deleted successfully",
      error:{},
      data: deletedProblem,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
}

async function updateProblem(req, res,next) {
  try {
    const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully updated the problem',
        error: {},
        data: updatedProblem
    });
} catch(error) {
    next(error);
}

}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
