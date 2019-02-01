const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

class Subreddit extends React.Component {

  render() {

    return (
      <div className="card" style={{display: "inline-block", margin: 10}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <NavLink
              className="btn btn-primary"
              to={this.props.display_name}>
            {this.props.display_name}
          </NavLink>
        </div>
      </div>
    );
  }
}

Subreddit.propTypes = {
  display_name: PropTypes.string,
  title: PropTypes.string
};

module.exports = Subreddit;
