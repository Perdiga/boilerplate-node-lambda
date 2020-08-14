/**
 * GetUseCase workflow
 * Tip:
 *   This is where you solve your use case.
 *   It´s kind of a recipe to solve your problem.
 * @param {Object} deps dependencies
 */
module.exports.getUseCase = (deps) => async (event) => {
  const result = await deps.dynamo.scan(
    { TableName: event.queryStringParameters.TableName },
  ).promise();

  return result;
};
