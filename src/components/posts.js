const React = require('react');
const PropTypes = require('prop-types');
const Post = require('components/post');

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.subreddit);
    this.props.onViewChange(this.props.subreddit);
  }

  postsList(list) {
    return list.map((item) => {
      return (
        <Post
            key={item.data.id}
            title={item.data.title}
            description={item.data.description}
            url={item.data.permalink}
            image={item.data.thumbnail}
            author={item.data.author}
            time={item.data.created_utc} />
      );
    });
  }

  render() {
    return (
      <section className="posts">
        {this.postsList(this.props.list)}
      </section>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired, // immutable list
  subreddit: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired
};

module.exports = Posts;
