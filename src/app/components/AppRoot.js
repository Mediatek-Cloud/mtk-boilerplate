import React from 'react/addons';

import config from '../../../config/app';

class AppRoot extends React.Component {
  render () {
    return (
      <div>
        <h1>{config.title}</h1>
      </div>
    );
  }
}

AppRoot.propTypes = {};

export default AppRoot;
