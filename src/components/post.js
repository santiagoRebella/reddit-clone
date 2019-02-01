const React = require('react');
const PropTypes = require('prop-types');
const moment = require('moment');

class Post extends React.Component {
  render() {

    return (
      <div className="card" style={{display: "inline-block", margin: 10, width: 240 }}>
        <img className="card-img-top" src={this.props.image} alt="Post image cap" />
        <div className="card-body">
          <h6 className="card-title">author: {this.props.author}</h6>
          <p className="card-text">
            created: { moment.unix(this.props.time).utc().format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={`https://reddit.com${this.props.url}`} className="btn btn-primary">Comments</a>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  author: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.number,
  description: PropTypes.string,
};

module.exports = Post;
