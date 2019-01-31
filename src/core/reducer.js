const Immutable = require('immutable');
const { actionTypes } = require('core/constants');

const initialState = () => Immutable.fromJS({
  fetching: false,
  subreddits: [],
  posts: [],
  error: false
});

module.exports = (state = initialState(), action) => {

  switch (action.type) {

    case actionTypes.FETCH_REQUEST:
      return state.merge({
        fetching: true,
        error: false
      });

    case actionTypes.FETCH_SUCCEED:
      return state.merge({
        fetching: false,
        subreddits: action.payload.body.data.children,
        after: action.payload.body.data.after,
        before: action.payload.body.data.before,
        dist: action.payload.body.data.dist
      });

    case actionTypes.FETCH_FAILED:
      return state.merge({
        fetching: false,
        error: true
      });

    case actionTypes.FETCH_POSTS_REQUEST:
      return state.merge({
        fetching: true,
        error: false
      });

    case actionTypes.FETCH_POSTS_SUCCEED:
      return state.merge({
        fetching: false,
        posts: action.payload.body.data.children,
        afterPosts: action.payload.body.data.after,
        beforePosts: action.payload.body.data.before,
        distPosts: action.payload.body.data.dist
      });

    case actionTypes.FETCH_POSTS_FAILED:
      return state.merge({
        fetching: false,
        error: true,
        posts: []
      });

    default:
      return state;
  }
};
