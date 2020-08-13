const { response } = require('../models/response');

/**
 * The Controller function
 * Tip:
 *   Keep it simples!
 *   Just validate the event, call a usecase and return a response *
 */
module.exports = (deps) => async (event) => {
  try {
    let result;
    switch (event.httpMethod) {
      case 'GET':
        result = await deps.useCases.getUseCase(deps)(event);
        return response('200', result);

      case 'POST':
        result = await deps.useCases.postUseCase(deps)(event);
        return response('204', result);

      default:
        return response(
          '405',
          { message: `Unsupported method: ${event.httpMethod}` },
          { Allow: 'GET, POST' },
        );
    }
  } catch (err) {
    // console.error(err);
    return response('400', { message: err.message });
  }
};
