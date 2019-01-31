const React = require('react');
const PropTypes = require('prop-types');
const Post = require('components/post');

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.subreddit);
  }

  postsList(list) {
    return list.map((item) => {
      return (
        <Post
            key={item.data.title+item.data.permalink}
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
  list: PropTypes.array.isRequired,
  subreddit: PropTypes.string.isRequired
};

module.exports = Posts;
