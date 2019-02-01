const React = require('react');
const Header = require('components/header');
const renderer = require('react-test-renderer');

jest.mock('react-router-dom', () => ({
  NavLink: 'NavLink'
}))

test('Header is rendered correctly', () => {
  const component = renderer.create(
    <Header view="/" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const componentPost = renderer.create(
    <Header view="/something" />
  );

  const postTree = componentPost.toJSON();
  expect(postTree).toMatchSnapshot();
});
