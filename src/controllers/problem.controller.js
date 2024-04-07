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

async function addProblem(req, res) {
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

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

async function getProblems(req, res) {
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

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};

/**
 *
 * res
 *
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 *
 */
