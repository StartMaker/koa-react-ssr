import React from 'react';
import {Divider} from 'antd';

import NavMenu from '../../../components/menus/drawer_nav';
import Account from '../../../components/account';

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <div className={'left_nav'} key={1}>
                    <NavMenu/>
                    <Divider type={'vertical'}/>
                    <span>logo</span>
                </div>,
                <div className={'right_nav'} key={2}>
                    <Account/>
                    <Divider type={'vertical'}/>
                    <span>首页</span>
                </div>
            ]
        )
    }
}

export default Nav;