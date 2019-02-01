const React = require('react');
const immutable = require('immutable');
const Posts = require('components/posts');
const renderer = require('react-test-renderer');

test('Posts is rendered correctly', () => {
  const component = renderer.create(
    <Posts
        list={immutable.List([{
          data: {
            id: "someid",
            title: "Test title",
            description: "Test Description",
            url: "Test Url",
            image: "Test image",
            author: "Test author",
            time: 1234567
          }}, {
          data: {
            id: "someotherid",
            title: "other Test title",
            description: "other Test Description",
            url: "other Test Url",
            image: "other Test image",
            author: "other Test author",
            time: 1111123
          }}, {
          data: {
            id: "anid",
            title: "A Test title",
            description: "A Test Description",
            url: "A Test Url",
            image: "A Test image",
            author: "A Test author",
            time: 123452367
          }}
        ])}
        subreddit="someSubreddit"
        onViewChange={jest.fn()}
        fetchPosts={jest.fn()}

    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

