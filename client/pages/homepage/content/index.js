import React from 'react';
import {connect} from "react-redux";
import {Icon, Menu} from "antd";

import {blog_display} from "../../../actions/blogs";
import Article from './article';
import IconFont from '../../../static/icons';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: ["all_blog"]
        }
    }
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(blog_display());
    }
    selectMenu = (selectItem) => {
        console.log(selectItem);
        this.setState({
            current_page: selectItem.keyPath
        })
    };

    render() {
        let {current_page} = this.state;
        const {selectMenu} = this;
        return (
            <div className={'container clearfix'}>
                <Menu mode="horizontal" selectedKeys={current_page} onSelect={selectMenu}>
                    <Menu.Item key={'all_blog'}>
                        <Icon type={'user'}/>
                    </Menu.Item>
                    <Menu.Item key={'my_blog'}>
                        <Icon type={'home'}/>
                    </Menu.Item>
                    <Menu.Item key={'my_documents'}>
                        <Icon type="file-text" />
                    </Menu.Item>
                    <Menu.Item key={'my_diary'}>
                        <IconFont type={'icon-diary'}/>
                    </Menu.Item>
                </Menu>
                <Article/>
            </div>
        )
    }
}

export default connect()(Content);