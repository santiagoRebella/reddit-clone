const React = require('react');
const Subreddit = require('components/subreddit');
const renderer = require('react-test-renderer');

jest.mock('react-router-dom', () => ({
  NavLink: 'NavLink'
}))

test('Subreddit is rendered correctly', () => {
  const component = renderer.create(
    <Subreddit
        key="someid"
        title="Test title"
        description="Test Description"
        url="Test Url"
        image="Test image"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
