import React,{lazy} from 'react';
import {Layout} from "antd";

const {Header, Content} = Layout;

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
            <Layout id={'home'}>
                <Header className={'clearfix'}>
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