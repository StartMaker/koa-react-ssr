import React from 'react';
import {Card} from "antd";
import {connect} from "react-redux";

const categories = [
    '文章'
];

import IconFont from '../../../static/icons'

class Blogs_Column extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render() {
        const {content} = this.props;
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {blog: {content}} = state;
    return {content};
};

export default connect(
    mapStateToProps
)(Blogs_Column);