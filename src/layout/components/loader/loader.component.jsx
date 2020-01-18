import React from 'react';

import './loader.styles.css';

class Loader extends React.Component{
    componentDidMount(){
        var fixed = document.getElementById('loader');

        fixed.addEventListener('scroll', function(e) {

        e.preventDefault();

}, false);
    }
    render(){
        return(
            <div className='loader' id='loader'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        )
    }
}

export default Loader;