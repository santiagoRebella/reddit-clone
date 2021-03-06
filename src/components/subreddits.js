const React = require('react');
const PropTypes = require('prop-types');
const SubReddit = require('components/subreddit');

class SubReddits extends React.Component {
  componentDidMount() {
    this.props.onViewChange('/');
  }

  subredditsList(list) {
    return list.map((item) => {
      return (
        <SubReddit
            key={item.data.id}
            title={item.data.title}
            description={item.data.description}
            url={item.data.url}
            image={item.data.banner_img}
            display_name={item.data.display_name} />
      );
    });
  }

  render() {
    const subreddits = this.subredditsList(this.props.list);
    return (
      <section className="subreddits">
        {subreddits}
      </section>
    );
  }
}

SubReddits.propTypes = {
  fetchSubreddits: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  onViewChange: PropTypes.func.isRequired
};

module.exports = SubReddits;
