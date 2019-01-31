'use strict';

const request = require('superagent');

const defaultParams = {
  header: {},
  query: {}
};

const apiBase = 'https://www.reddit.com/';

function get(url, params = defaultParams) {

  let finalRequest = request
    .get(apiBase + url)
    //.timeout(5000)
    .query(params.query)

  if (params.header.responseType) {
    finalRequest = finalRequest.responseType('arraybuffer');
    delete params.header.responseType;
  }
  return finalRequest
    .set(params.header);
}

function post(url, params = defaultParams, contentType = 'application/json') {
  return request
    .post(`${apiBase}${url}`)
    .send(params.query)
    .set(params.header)
    .set('Accept', 'application/json')
    .type(contentType);
}

module.exports = {
  get,
  post
}
