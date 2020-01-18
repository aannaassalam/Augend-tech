import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import {Link} from 'react-router-dom';

import './projectpreview.styles.css';

class ProjectPreview extends React.Component{
    render(){
        const {projectspreview}=this.props;
        return(
            <div className="project-preview">
                <h1>Project Gallery</h1>
                <h2>We've Done Lot's Of Work,<br/>
                    Let's Check Some From Here
                </h2>
                <div className="projectpreviewlist">
                    {projectspreview && projectspreview.map(projectpreview=>{
                        return(
                            <a key={projectpreview.projectlink} href={projectpreview.projectlink} target="_blank">
                                <div className="project-preview-item">
                                    <div className="project-preview-item-image">
                                        <img src={projectpreview.projectimageurl} />
                                        <img src={projectpreview.projectimageurl} />
                                        <img src={projectpreview.projectimageurl} />
                                    </div>
                                    <h3>{projectpreview.projecttitle}</h3>
                                    <h4>{projectpreview.projectdesc}</h4>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <a className="see-more" href="/works">
                    <div>
                        <h6>See More</h6>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                </a>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        projectspreview:state.firestore.ordered.projects
    }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
       {collection:'projects',where:['projectstate','==','public'],limit:3},
   ])
)(ProjectPreview);