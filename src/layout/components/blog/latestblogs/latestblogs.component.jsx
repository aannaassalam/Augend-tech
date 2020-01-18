import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import {Link} from 'react-router-dom';
import bgblog from "../../../../assets/blog.jpg";
import './latestblogs.styles.css';

const LatestBlogs=({blogs,para,type})=>{
        return(
            <div className="latestblog">
                    
                    <h1>Latest Blogs</h1>
                    <div className="latestblog-list">
                        {
                            blogs && blogs.map(blog=>{
                                if(para==='home')
                                {
                                    const date=blog.createdAt.value;
                                    return(
                                        <Link to={'/blogs/'+blog.id} key={blog.id}>
                                            <div className="latestblog-card">
                                                <img id="bgblog" src={bgblog} />
                                                <h1>{blog.blogTopic}</h1>
                                                <h2>{blog.blogSubHead}</h2>
                                                <h3>{blog.blogCategory}</h3>
                                                <h4><i className="fas fa-glasses"></i>{blog.blogReadTime} mins</h4>
                                                <h5>{moment(date).calendar()}<i className="fas fa-eye"></i>{blog.viewCount} views</h5>
                                            </div>
                                        </Link>
                                    )
                                }
                                else if(para===blog.blogCategory){
                                    const date=blog.createdAt.value;
                                    return(
                                        <Link to={'/blogs/'+blog.id} key={blog.id}>
                                            <div className="latestblog-card">
                                                <img id="bgblog" src={bgblog} />
                                                <h1>{blog.blogTopic} Top</h1>
                                                <h2>{blog.blogSubHead}</h2>
                                                <h3>{blog.blogCategory}</h3>
                                                <h4><i className="fas fa-glasses"></i>{blog.blogReadTime} mins</h4>
                                                <h5>{moment(date).calendar()} <i className="fas fa-eye"></i>{blog.viewCount} views</h5>
                                            </div>
                                        </Link>
                                    )
                                }
                                else{
                                    return null;
                                }
                            })}
                    </div>
            </div>
        )
    }

const mapStateToProps=(state)=>{
    return{
        blogs:state.firestore.ordered.blogs
    }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
       {collection:'blogs',limit:15,orderBy:['createdAt','desc']},
   ])
)(LatestBlogs)