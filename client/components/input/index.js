import React from 'react';
import {Icon, Input} from "antd";

class ControlInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    change_value = (ev) => {
        this.setState({
            value: ev.target.value
        })
    };
    render() {
        const {change_value} = this;
        const {value} = this.state;
        const {placeholder, icon, type} = this.props;
        return (
            <Input
                prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={change_value}
            />
        )
    }
}

export {ControlInput};