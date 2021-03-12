import React from 'react';

import Loader from 'react-loader-spinner';
export default class App extends React.Component {
  render() {
    return (
      <Loader
        className="Loader"
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        // timeout={3000} //3 secs
      />
    );
  }
}
