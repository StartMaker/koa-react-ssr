import React from 'react';
import {Card} from "antd";

class Blogs_Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {sourse} = this.props;
        return (
            <div className={'blog_column'}>
                {
                    sourse.map((item, index) => {
                        return (
                            <Card title={item.title} key={item.id}>
                                <h5>作者：{item.username} -- 日期：{item.time}</h5>
                                <p>{item.content}</p>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Blogs_Column;