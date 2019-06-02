import React from 'react';
import {Icon} from "antd";
import {connect} from "react-redux";

import IconFont from '../../static/icons';
import Login from '../login';

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render(){
        const {account} = this.props;
        switch (account.login_status) {
            case true:
                return (
                    <span><IconFont type={'icon-unlogin'}/>{account.username}</span>
                );
            case false:
                return (
                    <Login/>
                )
        }
    }
}

const mapStateToProps = (state) => {
    const {account}  = state;
    return {account};
};

export default connect(
    mapStateToProps
)(Index);