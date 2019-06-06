import React from 'react';
import {Card} from "antd";

class Blogs_Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {sourse} = this.props;
        return (
            <div id={'article'}>
                <div id={'article_column'} key={1}>
                    {
                        sourse.map((item, index) => {
                            return (
                                <Card key={item.id}>
                                    <h5>{item.title}</h5>
                                    <p>{item.time}</p>
                                    <p>{item.content}</p>
                                </Card>
                            )
                        })
                    }
                </div>
                <div id={'recommend_column'}>

                </div>
            </div>
        )
    }
}

export default Blogs_Column;