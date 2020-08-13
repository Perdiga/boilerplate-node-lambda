const doc = require('dynamodb-doc');

/**
 * Dependecies that need to be created before calling the handlers
 */
const deps = {
    dynamo: new doc.DynamoDB(),
}

/**
 * AWS handler 
 */
module.exports.handler = require('../core/index')(deps);
