import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import {Link} from 'react-router-dom';

import './blogpreview.styles.css';

class BlogPreview extends React.Component{
    render(){
        const {blogspreview}=this.props;
        if(blogspreview){
            document.querySelector('.load').style.display='none';
        }
        return(
            <div className="blog-preview">
                <h1>Blog</h1>
                <h2>Read Our Latest News</h2>
                <div className="blogpreviewlist">
                    {blogspreview && blogspreview.map(blogpreview=>{
                        return(
                            <Link to={'/blogs/'+blogpreview.id} key={blogpreview.id}>
                                <div className="blog-preview-item">
                                    <div className="blog-preview-item-image">
                                        <img src={blogpreview.previewurl} />
                                    </div>
                                    <h3>{blogpreview.blogTopic}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <a className="see-more" href="/blog">
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
        blogspreview:state.firestore.ordered.blogs
    }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
       {collection:'blogs',orderBy:['createdAt','asc'],limit:3},
   ])
)(BlogPreview);