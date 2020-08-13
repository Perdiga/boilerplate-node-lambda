const doc = require('dynamodb-doc');
const { getUseCase } = require('../core/usecases/getUseCase');
const { postUseCase } = require('../core/usecases/postUseCase');

/**
 * Dependecies that need to be created before calling the handlers
 */
const deps = {
  dynamo: doc.DynamoDB(), // should have new here?
  useCases: {
    getUseCase,
    postUseCase,
  },
};
module.exports.deps = deps;

/**
 * AWS handler
 */
module.exports.handler = require('../core/index')(deps);
