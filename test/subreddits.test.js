const React = require('react');
const immutable = require('immutable');
const Subreddits = require('components/subreddits');
const renderer = require('react-test-renderer');

jest.mock('react-router-dom', () => ({
  NavLink: 'NavLink'
}))

test('Subreddits is rendered correctly', () => {
  const component = renderer.create(
    <Subreddits
        list={immutable.List([{
          data: {
            id: "someid",
            title: "Test title",
            description: "Test Description",
            url: "Test Url",
            image: "Test image",
            display_name: "display_name"
          }}, {
          data: {
            id: "someotherid",
            title: "other Test title",
            description: "other Test Description",
            url: "other Test Url",
            image: "other Test image",
            display_name: "display_name2"
          }}, {
          data: {
            id: "anid",
            title: "A Test title",
            description: "A Test Description",
            url: "A Test Url",
            image: "A Test image",
            display_name: "display_name3"
          }}
        ])}
        subreddit="someSubreddit"
        onViewChange={jest.fn()}
        fetchSubreddits={jest.fn()}

    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

