const { get } = require('core/api');

const {actionTypes} = require('core/constants');

const fetchSucceed = (data) => {
  return {
    type: actionTypes.FETCH_SUCCEED,
    payload: data
  };
};

const fetchFailed = (err) => {
  return {
    type: actionTypes.FETCH_FAILED,
    payload: err
  };
};

const fetchRequest = () => {
  return {
    type: actionTypes.FETCH_REQUEST,
  };
};

const fetchSubreddits = (opts = {}) => (dispatch, getState) => {

  const query = {
    limit: 25
  };
  if (opts.after) { query.after = opts.after; }
  if (opts.before) { query.before = opts.before; }
  dispatch(fetchRequest());

  return get('subreddits/default/.json', {
      header: {},
      query
    })
    .then((res) => dispatch(fetchSucceed(res)),
          (err) => dispatch(fetchFailed(err)));
};

const fetchPostsSucceed = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCEED,
    payload: data
  };
};

const fetchPosts = (subreddit, opts = {}) => (dispatch, getState) => {

  const query = { limit: 25 };
  if (opts.after) { query.after = opts.after; }
  if (opts.before) { query.before = opts.before; }

  dispatch(fetchRequest());

  return get(`r/${subreddit}/.json`, {
      header: {},
      query
    })
    .then((res) => dispatch(fetchPostsSucceed(res)),
          (err) => dispatch(fetchFailed(err)));
};

const onViewChange = (view) => {
  return {
    type: actionTypes.VIEW_CHANGE,
    payload: view
  };
};

module.exports = {
  fetchSubreddits,
  fetchPosts,
  onViewChange
};
