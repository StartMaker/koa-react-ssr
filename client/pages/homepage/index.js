import React,{lazy} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import {Layout,Button, Icon, Drawer} from "antd";

const {Header, Sider, Content, Footer} = Layout;

import '../../static/styles/reset.less';
import './styles.less';
import MenuDrawer from '../../components/menuDrawer'
import HeaderTitle from './header_title';
import HeaderBody from './header_body';

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout className={'home'}>
                <Header>
                    <MenuDrawer active={'Home'}/>
                    <HeaderTitle/>
                    <HeaderBody/>
                </Header>
                <Layout>
                    <Content></Content>
                </Layout>
            </Layout>
        )
    }
}

export default Homepage;