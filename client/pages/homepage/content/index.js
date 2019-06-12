import React from 'react';
import {connect} from "react-redux";
import {Icon, Menu} from "antd";

import {blog_display} from "../../../actions/blogs";
import Article from './article';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: ["all_user"]
        }
    }
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(blog_display(1,''));
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let {current_page} = this.state;
        return (
            <div className={'container clearfix'}>
                <Menu mode="horizontal" selectedKeys={current_page}>
                    <Menu.Item key={'all_user'}>
                        <Icon type={'user'}/>
                    </Menu.Item>
                    <Menu.Item key={'wode'}>
                        <Icon type={'lock'}/>
                    </Menu.Item>
                    <Menu.Item key={'lll'}>
                        <Icon type={'lock'}/>
                    </Menu.Item>
                    <Menu.Item key={'uuu'}>
                        <Icon type={'lock'}/>
                    </Menu.Item>
                </Menu>
                <Article/>
            </div>
        )
    }
}

export default connect()(Content);