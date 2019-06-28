//modules
import React, {Component} from 'react';

//components

//static
// import logo from '../../../static/';

import './styles.less';

class Index extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            [
                <div key={1}>
                    <img src={''} title={'logo'} alt={'logo'} />
                </div>,
                <div key={2}>

                </div>
            ]
        )
    }
}

export default Index;