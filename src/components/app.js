const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { Route, Switch, Redirect } = require('react-router-dom');

const { fetchSubreddits, fetchPosts } = require('core/actions');

const Filters = require('components/filters');
const Header = require('components/header');
const SubReddits = require('components/subreddits');
const Posts = require('components/posts');
const Footer = require('components/footer');

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSubreddits();
  }
  render() {
    const { store } = this.props;

    return (
      <BrowserRouter>
        <div className="reddit-lite">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Filters />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Switch>
                  <Route exact path="/"
                      render={() => (
                        <SubReddits
                            fetchSubreddits={this.props.fetchSubreddits}
                            list={store.get('subreddits')}
                        />
                      )}
                  />
                  <Route exact path="/:subreddit"
                      render={(props) => (
                        <Posts
                            fetchPosts={this.props.fetchPosts}
                            subreddit={props.match.params.subreddit}
                            list={store.get('posts')}
                        />
                      )}
                  />
                  <Redirect to="/"/>
                </Switch>
              </div>

            </div>
            <div className="row">
              <div className="col-sm-12">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  fetchSubreddits: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired
};

module.exports = connect(
  state => {
    return { store: state }
  },
  {
    fetchSubreddits,
    fetchPosts
  }
)(App);

