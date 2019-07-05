import React from 'react';
import { Layout } from 'antd';
const {Header, Content} = Layout;

import style from './styles.less';
import andLayoutStyle from 'antd/lib/layout/style/index.css';
import withStyles from 'isomorphic-style-loader/withStyles';

import Nav from '../../components/nav/homepageNav';
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

export default withStyles(andLayoutStyle,style)(Homepage);