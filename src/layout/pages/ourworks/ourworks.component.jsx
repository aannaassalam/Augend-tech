import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';

import './ourworks.styles.css';

class OurWorks extends React.Component{
    render(){
        return(
            <div className='our-works'>
                <div className='worksbg'></div>
                <div className="project-slider">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tags:state.firestore.ordered.tags,
        blogs:state.firestore.ordered.blogs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'tags',orderBy:['createdAt','asc']},
    ])
 )(OurWorks);