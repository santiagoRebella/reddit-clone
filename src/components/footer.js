const React = require('react');

class Footer extends React.Component {
  render() {

    return (
      <footer className="row" style={{position: 'fixed', bottom: 10, right: 10}}>

        <div className="col-sm-12 float-right text-sm-right">
          <a href="">go up</a>
        </div>

      </footer>
    );
  }
}

module.exports = Footer;

