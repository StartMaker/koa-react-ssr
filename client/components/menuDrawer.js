import React from 'react';
import {Drawer, Button, Icon} from "antd";
import {Link} from 'react-router-dom';

import menu_img from '../static/image/menu.png';

class MyDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    open = () => {
        this.setState({
            visible: true
        })
    };
    close = () => {
        this.setState({
            visible: false
        })
    };
    render(){
        const menu = [
            {
                icon: 'home',
                text: 'Home'
            },
            {
                icon: 'contacts',
                text: 'Contact'
            },
            {
                icon: 'setting',
                text: 'Service'
            },
            {
                icon: 'picture',
                text: 'Lifestyle'
            },
            {
                icon: 'file',
                text: 'File'
            },
            {
                icon: 'facebook',
                text: 'Facebook'
            }
        ];
        let {visible} = this.state;
        let {open,close} = this;
        const {active} = this.props;
        return (
            [
                <Button onClick={open} key={1}>
                    <img src={menu_img} alt={'导航'} title={'导航'}/>
                </Button>,
                <Drawer title={'Menu'} visible={visible} key={2} closable={false} onClose={close} className={'home-drawer'}>
                    {
                        menu.map((item,index) => {
                            let className = item.text === active ? 'active':'';
                            return (
                                <div className={className} key={index}>
                                    <Icon type={item.icon}/>
                                    <Link to={"##"}>{item.text}</Link>
                                </div>
                            )
                        })
                    }
                </Drawer>
            ]
        )
    }
}

export default MyDrawer;