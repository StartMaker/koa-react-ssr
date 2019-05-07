import React from 'react';
import {Link} from 'react-router-dom';

class HeaderBody extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'header_body'}>
                <h2>Discover The Most Beautiful Places</h2>
                <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                <Link to={'##'}>Read More</Link>
            </div>
        )
    }
}

export default HeaderBody;