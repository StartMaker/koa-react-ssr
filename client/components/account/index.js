import React from 'react';
// import {Button, Icon, } from "antd";
import {connect} from "react-redux";
import {Dropdown, Menu} from "antd";

import withStyle from 'isomorphic-style-loader/withStyles';
import antdIconStyle from 'antd/lib/icon/style/index.css';
import antdDropdownStyle from 'antd/lib/dropdown/style/index.css';
import antdMenuStyle from 'antd/lib/menu/style/index.css';

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
        switch (account.loginStatus) {
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
    return {account: state.get('account')};
};

export default connect(
    mapStateToProps
)(withStyle(antdMenuStyle, antdDropdownStyle, antdIconStyle)(Index));