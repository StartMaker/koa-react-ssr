import React from 'react';
import {Layout} from 'antd';

const {Header, Content} = Layout;

import './styles.less';
import Nav from '&components/nav/writeArticleNav';
import Editor from '&components/editor';

class WriteArticle extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(ReactQuill);
    }

    render() {
        return (
            <Layout id={'writeArticle'}>
                <Header className={'clearfix'}>
                    <Nav/>
                </Header>
                <Layout>
                    <Content>

                        <Editor/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default WriteArticle;