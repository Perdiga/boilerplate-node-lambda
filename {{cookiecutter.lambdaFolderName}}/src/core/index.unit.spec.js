const index = require('./index');

// Factory a system under test
const makeSut = () => {
  const deps = {
    useCases: {
      getUseCase: () => () => 'success',
      postUseCase: () => () => 'success',
    },
  };

  const event = {
    httpMethod: 'GET',
    queryStringParameters: {
      TableName: 'MyTable',
    },
    body: '{}',
  };

  // SUT= System Under Test
  const sut = index(deps);
  return { sut, deps, event };
};

describe('index', () => {
  it('Should call getUseCase in case of HTTP GET and return the result', async () => {
    // Arange
    const { sut, event } = makeSut();

    // Act
    const { headers, statusCode, body } = await sut(event);

    // Assert
    expect(headers['Content-Type']).toBe('application/json');
    expect(statusCode).toBe('200');
    expect(body).toBe('"success"');
  });

  it('Should call postUseCase in case of HTTP POST and return the result', async () => {
    // Arange
    const { sut, event } = makeSut();
    event.httpMethod = 'POST';

    // Act
    const { headers, statusCode, body } = await sut(event);

    // Assert
    expect(headers['Content-Type']).toBe('application/json');
    expect(statusCode).toBe('204');
    expect(JSON.parse(body)).toBe('success');
  });

  it('should reject unsupported HTTP methods', async () => {
    // Arange
    const { sut, event } = makeSut();
    event.httpMethod = 'DELETE';

    // Act
    const { headers, statusCode, body } = await sut(event);

    // Assert
    expect(headers['Content-Type']).toBe('application/json');
    expect(headers.Allow).toBe('GET, POST');
    expect(statusCode).toBe('405');
    expect(JSON.parse(body).message).toBe('Unsupported method: DELETE');
  });

  it('should reject if any use case throw an error', async () => {
    // Arange
    const { sut, deps, event } = makeSut();
    deps.useCases.getUseCase = () => () => { throw Error('Any Error'); };

    // Act
    const { headers, statusCode, body } = await sut(event);

    // Assert
    expect(headers['Content-Type']).toBe('application/json');
    expect(statusCode).toBe('400');
    expect(JSON.parse(body).message).toBe('Any Error');
  });
});
