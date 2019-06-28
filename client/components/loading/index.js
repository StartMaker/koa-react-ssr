import React from 'react';
import {Icon, Spin} from "antd";

import './styles.less';

const loading = <Icon type="loading" style={{ fontSize: 24, color: '#1890ff' }} spin />;

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {visible} = this.props;
        return (
            visible === false? null:
                <div className={'loading'}>
                    <Spin indicator={loading}/>
                </div>
        )
    }
}

export default Loading;