const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header className="col-sm-12" style={{
        height: 50,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="row">
          <div className="col-sm-3" >
            <img src="assets/logo-wide.svg" style={{height: 40}} />
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Header;

