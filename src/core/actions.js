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

const fetchSubreddits = (after) => (dispatch, getState) => {
  dispatch(fetchRequest());

  return get('subreddits/default/.json', {
      header: {},
      query: {
        after,
        limit: 25,
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


const fetchPosts = (subreddit, after) => (dispatch, getState) => {

  dispatch(fetchPostsRequest());

  return get(`r/${subreddit}/.json`, {
      header: {},
      query: {
        after,
        limit: 25
      }
    })
    .then((res) => dispatch(fetchPostsSucceed(res)),
          (err) => dispatch(fetchPostsFailed(err)));
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
