const doc = require('dynamodb-doc');
const { postUseCase } = require('./postUseCase');

jest.mock('dynamodb-doc', () => ({
  DynamoDB: () => ({
    putItem: () => ({ promise: async () => 'success' }),
  }),
}));

// Factory a system under test
const makeSut = () => {
  const deps = {
    dynamo: doc.DynamoDB(),
  };

  const event = {
    httpMethod: 'POST',
    queryStringParameters: {},
    body: '{}',
  };

  // SUT= System Under Test
  const sut = postUseCase(deps);
  return { sut, deps, event };
};

describe('postUseCase', () => {
  it('Should call dynamo db putItem(...)', async () => {
    // Arange
    const { sut, deps, event } = makeSut();
    const spy = jest.spyOn(deps.dynamo, 'putItem');

    // Act
    const result = await sut(event);

    // Assert
    expect(spy).toBeCalledWith({});
    expect(result).toBe('success');
  });
  it('Should return an error message if a dynamo db call fails', async () => {
    // Arange
    const { sut, deps, event } = makeSut();
    deps.dynamo.putItem = () => { throw Error('Any Error'); };

    // Act
    try {
      await sut(event);
    } catch (error) {
      // Assert
      expect(error).toStrictEqual(Error('Any Error'));
    }
  });
});
