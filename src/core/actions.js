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

const fetchSubreddits = () => (dispatch, getState) => {
  dispatch(fetchRequest());

  return get('subreddits/default/.json', {
      header: {},
      query: {
        show: 'all',
        sr_detail: true
      }
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

const fetchPostsFailed = (err) => {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
    payload: err.response
  };
};

const fetchPostsRequest = () => {
  return {
    type: actionTypes.FETCH_POSTS_REQUEST,
  };
};


const fetchPosts = (subreddit) => (dispatch, getState) => {

  dispatch(fetchPostsRequest());

  return get(`r/${subreddit}/.json`, {
      header: {},
      query: {}
    })
    .then((res) => dispatch(fetchPostsSucceed(res)),
          (err) => dispatch(fetchPostsFailed(err)));
};

module.exports = {
  fetchSubreddits,
  fetchPosts
};
