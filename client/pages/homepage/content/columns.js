import React from 'react';
import {Card} from "antd";
import {connect} from "react-redux";

//styles引入
import withStyle from 'isomorphic-style-loader/withStyles';
import antdCardStyle from 'antd/lib/card/style/index.css';
import antdIconStyle from 'antd/lib/icon/style/index.css';

const categories = [
    '文章'
];

import IconFont from '../../../static/icons';
import Loading from '../../../components/loading';
import {blog_more} from "../../../actions/blogs";

class Columns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        const {scroll} = this;
        window.addEventListener('scroll', scroll);
    }
    componentWillUnmount() {
        const {scroll} = this;
        window.removeEventListener('scroll',scroll);
    }

    scroll = (ev) => {
        const clientHeight = ev.target.scrollingElement.clientHeight;
        const scrollHeight = ev.target.scrollingElement.scrollHeight;
        const scrollTop = ev.target.scrollingElement.scrollTop;
        if(scrollHeight === scrollTop + clientHeight){
            const {blog_more} = this.props;
            this.setState({
                visible: true
            },function () {
                blog_more();
            });
        }
    };

    render() {
        const {content} = this.props;
        const {visible} = this.state;
        return (
            <div id={'article_column'} key={1}>
                {
                    content.map((item) => {
                        return (
                            <a href={'#'} key={item.id}>
                                <Card>
                                    <h5>
                                        <span>{categories[item.category]}</span>
                                        {item.title}
                                    </h5>
                                    <p>
                                        <IconFont type={'icon-man'}/>
                                        <span>{item.username}</span>
                                        <span>
                                            {item.time}
                                        </span>
                                    </p>
                                    <p>{item.content}</p>
                                </Card>
                            </a>
                        )
                    })
                }
                <Loading visible={visible}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {content} = state.get('blog');
    return {content};
};

const mapDispatchToProps = (dispatch) => {
    return {
        blog_more: () => {
            dispatch(blog_more())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyle(antdCardStyle, antdIconStyle)(Columns));