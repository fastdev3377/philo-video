import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import App from './components/app/app';

export default function Root(props) {
  const { store } = props;

  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
