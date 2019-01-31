const React = require('react');
const PropTypes = require('prop-types');
const { NavLink } = require('react-router-dom');

class Filters extends React.Component {
  render() {
    return (
      <nav className="col-sm-12">
        <NavLink key={'all'}
            className={'customClass'}
            to={'all'}>
          all
        </NavLink>
      </nav>
    );
  }
}

Filters.propTypes = {
  className: PropTypes.string
};

module.exports = Filters;

