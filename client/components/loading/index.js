import React from 'react';
import {Icon, Spin} from "antd";

const loading = <Icon type="loading" style={{ fontSize: 24, color: '#1890ff' }} spin />;

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'loading'}>
                <Spin indicator={loading}/>
            </div>

        )
    }
}

export default Loading;