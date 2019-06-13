import React from 'react';
// import {Button, Icon, } from "antd";
import {connect} from "react-redux";
import {Dropdown, Menu} from "antd";

import IconFont from '../../static/icons';
import Login from '../login';

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {account} = this.props;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="#">
                        写文章
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="#">
                        登出
                    </a>
                </Menu.Item>
            </Menu>
        );
        switch (account.login_status) {
            case true:
                return (
                    <Dropdown overlay={menu} placement={'bottomRight'}>
                        <a href={'#'}>
                            <span>{account.username}</span>
                        </a>
                    </Dropdown>
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