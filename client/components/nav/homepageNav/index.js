import React from 'react';
import {Divider} from 'antd';

import withStyle from 'isomorphic-style-loader/withStyles';
import style from './styles.less';
import antdDividerStyle from 'antd/lib/divider/style/index.css';

import NavMenu from '&components/menus/drawer_nav';
import Account from '&components/account';

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <div key={1}>
                    <NavMenu/>
                    <Divider type={'vertical'}/>
                    <span>logo</span>
                </div>,
                <div key={2}>
                    <Account/>
                    <Divider type={'vertical'}/>
                    <span>首页</span>
                </div>
            ]
        )
    }
}

export default withStyle(style, antdDividerStyle)(Nav);