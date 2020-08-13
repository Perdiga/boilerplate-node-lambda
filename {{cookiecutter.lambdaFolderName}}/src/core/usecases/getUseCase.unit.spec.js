const doc = require('dynamodb-doc');
const { getUseCase } = require('./getUseCase');

jest.mock('dynamodb-doc', () => ({
  DynamoDB: () => ({
    scan: () => ({ promise: async () => 'some content' }),
  }),
}));

// Factory a system under test
const makeSut = () => {
  const deps = {
    dynamo: doc.DynamoDB(),
  };

  const event = {
    httpMethod: 'GET',
    queryStringParameters: {
      TableName: 'MyTable',
    },
    body: '{}',
  };

  // SUT= System Under Test
  const sut = getUseCase(deps);
  return { sut, deps, event };
};

describe('getUseCase', () => {
  it('Should call dynamo db scan(...) and return the result', async () => {
    // Arange
    const { sut, deps, event } = makeSut();
    const spy = jest.spyOn(deps.dynamo, 'scan');

    // Act
    const result = await sut(event);

    // Assert
    expect(spy).toBeCalledWith({ TableName: 'MyTable' });
    expect(result).toBe('some content');
  });

  it('Should return an error message if a dynamo db call fails', async () => {
    // Arange
    const { sut, deps, event } = makeSut();
    deps.dynamo.scan = () => { throw Error('Any Error'); };

    // Act
    try {
      await sut(event);
    } catch (error) {
      // Assert
      expect(error).toStrictEqual(Error('Any Error'));
    }
  });
});
