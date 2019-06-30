import React from 'react';

import Columns from './columns';
import Recommend_Column from './recommend_column';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div id={'article'}>
          <Columns/>
          <Recommend_Column/>
        </div>
      )
    }
}

export default Index;