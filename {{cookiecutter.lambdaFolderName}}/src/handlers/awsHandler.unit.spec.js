require('dynamodb-doc');
const awsHandler = require('./awsHandler');

jest.mock('dynamodb-doc', () => ({
  DynamoDB: () => ({
    putItem: () => ({ promise: async () => 'success' }),
  }),
}));

describe('awsHandler', () => {
  it('Should export a handler function', async () => {
    expect(awsHandler.handler).toBeInstanceOf(Function);
  });
  it('Should create the dependencies', async () => {
    expect(awsHandler.deps).toBeInstanceOf(Object);
    expect(awsHandler.deps.dynamo).toBeInstanceOf(Object);
    expect(awsHandler.deps.useCases).toBeInstanceOf(Object);
    expect(awsHandler.deps.useCases.getUseCase).toBeInstanceOf(Function);
    expect(awsHandler.deps.useCases.postUseCase).toBeInstanceOf(Function);
  });
});
