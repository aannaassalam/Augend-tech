import React from 'react';

import construction from '../../../assets/construction.jpg'

import './build.styles.css';

class Build extends React.Component{
    render()
    {
        return(
            <div className="build">
                <img src={construction} alt='construction'/>
            </div>
            
        )
    }
}

export default Build;