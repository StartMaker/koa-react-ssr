import React from 'react';
import {Icon, Drawer, Button} from "antd";

class NavMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            drawer: {
                visible: false
            }
        }
    }
    open_drawer = () => {
        this.setState({
            drawer: {
                visible: true
            }
        })
    };
    close_drawer = () => {
        this.setState({
            drawer: {
                visible: false
            }
        })
    };
    render(){
        const {drawer} = this.state;
        const {open_drawer, close_drawer} = this;
        return (
            [
                <Button onClick={open_drawer} key={1}>
                    <Icon type="menu" className={'menu'}/>
                </Button>,
                <Drawer visible={drawer.visible} key={2} closable={true} placement={'left'} onClose={close_drawer}>
                    <p>技术文档</p>
                </Drawer>
            ]

        )
    }
}

export default NavMenu;