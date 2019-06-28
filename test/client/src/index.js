//modules
import React, {Component} from 'react';
import {StaticRouter} from 'react-router-dom';

//components

class Index extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>sss</div>
    )
  }
}



export default (url,context) => {
  return (
    <StaticRouter url={url} context={{}}>
      <Index>sss</Index>
    </StaticRouter>
  )
}