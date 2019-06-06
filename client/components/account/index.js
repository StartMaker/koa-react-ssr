import React from 'react';
import {Button, Icon} from "antd";
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

                    <Button>
                        <IconFont type="icon-unlogin"/>
                        <span>{account.username}</span>
                    </Button>
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