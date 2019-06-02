import React from 'react';
import {connect} from "react-redux";
import {Icon, Menu} from "antd";

import {blog_display} from "../../../actions/blogs";
import Blogs_Column from './blogs_column';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: ["all_user"]
        }
    }
    componentWillMount() {
        console.log(this);
        const {init} = this.props;
        init();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let {current_page} = this.state;
        console.log('sss');
        let {blog} = this.props;
        console.log(blog);
        return (
            <div className={'container'}>
                <Menu mode="horizontal" selectedKeys={current_page}>
                    <Menu.Item key={'all_user'}>
                        <Icon type={'user'}/>
                        动态
                    </Menu.Item>
                    <Menu.Item key={'wode'}>
                        <Icon type={'lock'}/>
                        option
                    </Menu.Item>
                    <Menu.Item key={'lll'}>
                        <Icon type={'lock'}/>
                        option
                    </Menu.Item>
                    <Menu.Item key={'uuu'}>
                        <Icon type={'lock'}/>
                        option
                    </Menu.Item>
                </Menu>
                <Blogs_Column sourse={blog.content}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        init: function () {
            dispatch(blog_display(1,''));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);