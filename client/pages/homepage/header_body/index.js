import React from 'react';
import {Link} from 'react-router-dom';

import IconFont from '../../../static/icons';

class HeaderBody extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'header_body'}>
                <h2>Discover The Most Beautiful Places</h2>
                <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                <Link to={'##'} className={'read_more'}>Read More</Link>
                <ul className={'contract_list'}>
                    <li key={'1'}>
                        <Link to={'##'}>
                            <IconFont type="icon-github"/>
                        </Link>
                    </li>
                    <li key={'2'}>
                        <Link to={'##'}>
                            <IconFont type="icon-qq"/>
                        </Link>
                    </li>
                    <li key={'3'}>
                        <Link to={'##'}>
                            <IconFont type="icon-github"/>
                        </Link>
                    </li>
                    <li key={'4'}>
                        <Link to={'##'}>
                            <IconFont type="icon-github"/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderBody;