const React = require('react');
const Footer = require('components/footer');
const renderer = require('react-test-renderer');

test('Footer is rendered correctly', () => {
  const component = renderer.create(
    <Footer />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
