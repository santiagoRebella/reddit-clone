const React = require('react');
const { NavLink } = require('react-router-dom');

class Header extends React.Component {
  render() {
    return (
      <header style={{
        height: 50,
        display: 'flex',
        alignItems: 'center'
      }}>
        <img src="assets/logo-wide.svg" style={{height: 40, marginRight: 5}} />
        <nav style={{textAlign: 'center'}}>
          <NavLink to="/" style={{
              fontWeight: this.props.view !== '/' ? 300 : 600
            }}>
              Subreddits
          </NavLink>

          { this.props.view !== '/' && (
            <NavLink to={this.props.view} style={{fontWeight: 600}}>
                &nbsp;> {this.props.view}

            </NavLink>
          )}

        </nav>

      </header>
    );
  }
}

module.exports = Header;

