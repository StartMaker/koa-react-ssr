import React from 'react';
import {Modal} from "antd";
import {connect} from "react-redux";

import IconFont from '../../../static/icons';

class Count extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <IconFont type={'icon-unlogin'} key={1}/>,
                <Modal visible={false} key={2}>

                </Modal>
            ]

        )
    }
}

export default connect(
    
)(Count);