jest.dontMock('../AppRoot');

import React from 'react/addons';
const {TestUtils} = React.addons;
var AppRoot = require('../AppRoot');

describe('AppRoot', () => {

  it('renders properly', () => {
    const appRoot = TestUtils.renderIntoDocument(
      <AppRoot />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(appRoot, 'h1');

    expect(title.getDOMNode().textContent).toEqual('My React App');
  });
});
