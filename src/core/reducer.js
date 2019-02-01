const Immutable = require('immutable');
const { actionTypes } = require('core/constants');

const initialState = () => Immutable.fromJS({
  view: '/',
  fetching: false,
  subreddits: [],
  posts: [],
  error: false,
  after: '',
  before: ''

});

module.exports = (state = initialState(), action) => {

  switch (action.type) {

    case actionTypes.FETCH_REQUEST:
      return state.mergeDeep({
        fetching: true,
        error: false
      });

    case actionTypes.FETCH_SUCCEED: {
      const {payload:{ body: {data: {children, after, before, dist}}}} = action
      return state.mergeDeep({
        fetching: false,
        subreddits: children,
        after,
        before,
        dist
      });
    }
    case actionTypes.FETCH_FAILED:
      return state.mergeDeep({
        fetching: false,
        error: true
      });

    case actionTypes.FETCH_POSTS_REQUEST:
      return state.mergeDeep({
        fetching: true,
        error: false
      });

    case actionTypes.FETCH_POSTS_SUCCEED:
      return state.mergeDeep({
        fetching: false,
        posts: action.payload.body.data.children,
        after: action.payload.body.data.after,
        before: action.payload.body.data.before,
        dist: action.payload.body.data.dist
      });

    case actionTypes.FETCH_POSTS_FAILED:
      return state.mergeDeep({
        fetching: false,
        error: true,
        posts: []
      });

    case actionTypes.VIEW_CHANGE:
      return state.mergeDeep({
        view: action.payload
      }).set('posts', Immutable.fromJS([]));

    default:
      return state;
  }
};
