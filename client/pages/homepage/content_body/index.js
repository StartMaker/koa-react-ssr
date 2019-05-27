import React from 'react';
import {Row, Col} from 'antd';

import bg from '../../../static/image/2.jpg';

class ContentBody extends React.Component {
    constructor(props){
        super(props);
    }
    static defaultProps = {
        sections: [
            {
                category: 'html',
                title: '',
                content: ''
            },
            {
                category: 'css',
                title: '',
                content: ''
            },
            {
                category: 'javascript',
                title: '',
                content: ''
            },
            {
                category: 'nodeJS',
                title: '',
                content: ''
            }
        ]
    };
    componentDidMount() {
        console.log(this);
    }

    render() {
        const {sections} = this.props;
        return (
            sections.map((item,index) => {
                if(index%2 === 0 ){
                    return (
                        <section key={index}>
                            <Row>
                                <Col md={8} push={4}>
                                    {111}
                                </Col>
                                <Col md={12} push={4}>
                                    <img src={bg}/>
                                </Col>
                            </Row>
                        </section>
                    )
                }
                else {
                    return (
                        <section key={index}>
                            <Row>
                                <Col md={12}></Col>
                                <Col md={8}></Col>
                                <Col md={4}></Col>
                            </Row>
                        </section>
                    )
                }
            })
        );
    }
}

export default ContentBody;