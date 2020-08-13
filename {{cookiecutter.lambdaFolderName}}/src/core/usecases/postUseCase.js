/**
 * PostUseCase workflow
 * Tip:
 *   This is where you solve your use case.
 *   It´s kind of a recipe to solve your problem.
 * @param {Object} deps dependencies
 */
module.exports.postUseCase = (deps) => async (event) => {
  // Recipe
  const result = await deps.dynamo.putItem(
    JSON.parse(event.body),
  ).promise();

  return result;
};
