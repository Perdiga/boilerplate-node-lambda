/**
 * Model for responses
 * @param {number} statusCode 
 * @param {object} body 
 * @param {object} additionalHeaders 
 */
module.exports.response = (statusCode, body, additionalHeaders) => ({
    statusCode,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', ...additionalHeaders },
});
