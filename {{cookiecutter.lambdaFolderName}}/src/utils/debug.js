const { handler } = require('../handlers/awsHandler');
/**
 * Starts the application
 */
(async function start() {
    console.log('Starting debbuger')

    const event = {
        httpMethod: 'GET',
        queryStringParameters: {
            TableName: 'MyTable',
        },
        body: '{}',
    };
    const result = await handler(event)

    console.log(result)
})();
