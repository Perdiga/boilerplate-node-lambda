const { response } = require('../models/response');

/**
 * The main function for the lambda
 * Tip: 
 *   This is you write the recipe to solve your problem
 *   Side functions should be written under utils folder and added as dependencies
 *   Keep function simple to be easy to test
 */
module.exports = deps => async (event) => {
    try {
        switch (event.httpMethod) {
            case 'GET': return response('200', await deps.dynamo.scan(
                { TableName: event.queryStringParameters.TableName }).promise());

            case 'POST': return response('204', await deps.dynamo.putItem(
                JSON.parse(event.body)).promise());

            default: return response('405',
                { message: `Unsupported method: ${event.httpMethod}` },
                { Allow: 'GET, POST' });
        }
    } catch (err) {
        console.error(err);
        return response('400', { message: err.message });
    }
};
