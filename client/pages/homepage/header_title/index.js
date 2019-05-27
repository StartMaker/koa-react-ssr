import React from 'react';

class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'header_title'}>
                <h2>Travel</h2>
                <h5>Where To Go This Summer ?</h5>
            </div>
        )
    }
}

export default Title;