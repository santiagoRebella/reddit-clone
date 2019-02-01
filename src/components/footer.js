const React = require('react');

class Footer extends React.Component {
  handleClick() {
    window.scrollTo(0,0);
  }
  render() {

    return (
      <footer className="row" style={{position: 'fixed', bottom: 10, right: 10}}>

        <div className="col-sm-12 float-right text-sm-right">
          <button type="button" className="btn btn-link" onClick={this.handleClick}>go up</button>
        </div>

      </footer>
    );
  }
}

module.exports = Footer;

