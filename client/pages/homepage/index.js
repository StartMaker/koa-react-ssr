import React,{lazy} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import {Layout,Button, Icon, Drawer} from "antd";

const {Header, Content, Footer} = Layout;

import '../../static/styles/reset.less';
import './styles.less';
import Nav from './nav';
import ArticleContent from './content';

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout className={'home'}>
                <Header>
                    <Nav/>
                </Header>
                <Layout>
                    <Content>
                        <ArticleContent/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Homepage;