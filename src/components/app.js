const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { Route, Switch, Redirect } = require('react-router-dom');
const { debounce } = require('lodash');

const { fetchSubreddits, fetchPosts, onViewChange } = require('core/actions');

const Filters = require('components/filters');
const Header = require('components/header');
const SubReddits = require('components/subreddits');
const Posts = require('components/posts');
const Footer = require('components/footer');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchScroll = debounce(this.fetchScroll.bind(this), 1000);
  }
  componentDidMount() {
    if(!this.props.store.get('subreddits').size) {
      this.props.fetchSubreddits();
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchScroll() {
    const { store, fetchSubreddits, fetchPosts} = this.props;
    const after = store.get('after');
    const view = store.get('view');

    if(view === '/' && after) {
      fetchSubreddits({after});
    } else if (after) {
      fetchPosts(view, {after})
    } else {
      console.warn('no after to fetch');
    }
  }

  handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      this.fetchScroll();
    }
  }

  render() {
    const { store } = this.props;
    const isLoading = store.get('fetching');

    return (
      <BrowserRouter onScroll={this.handleScroll}>
        <div className="reddit-lite">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <Header view={store.get('view')}/>
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
                            onViewChange={this.props.onViewChange}
                        />
                      )}
                  />
                  <Route exact path="/:subreddit"
                      render={(props) => (
                        <Posts
                            fetchPosts={this.props.fetchPosts}
                            subreddit={props.match.params.subreddit}
                            list={store.get('posts')}
                            onViewChange={this.props.onViewChange}
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
              <div className="col-sm-12">
                {isLoading && <img src="assets/loading.gif" style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: 50
                }} />}
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
  fetchPosts: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired
};

module.exports = connect(
  state => {
    return { store: state }
  },
  {
    fetchSubreddits: fetchSubreddits,
    fetchPosts: fetchPosts,
    onViewChange
  }
)(App);

