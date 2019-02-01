const React = require('react');
const Post = require('components/post');
const renderer = require('react-test-renderer');

test('Post is rendered correctly', () => {
  const component = renderer.create(
    <Post
        key="someid"
        title="Test title"
        description="Test Description"
        url="Test Url"
        image="Test image"
        author="Test author"
        time={1234567} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
