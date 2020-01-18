import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import {Link} from 'react-router-dom';

import './topblogs.styles.css';

const TopBlogs =({topblogs,para,type})=>{
        var blogs = [];
        for(var key in topblogs) {
            blogs.push(topblogs[key]);
        }
        blogs.sort((a,b)=>(a.viewCount>b.viewCount?-1:1));
        console.log(para);
        return(
            <div className="topblog">
                    <h1>Top Blogs</h1>
                    <div className="topblog-list">
                        {
                            blogs && blogs.map(blog=>{
                                const date=blog.createdAt.value;
                                if(blog.viewCount>=1)
                                {
                                    if(para==='home')
                                {
                                    const date=blog.createdAt.value;
                                    return(
                                        <Link to={'/blogs/'+blog.id} key={blog.id}>
                                            <div className="topblog-card">
                                                <div className="top">
                                                    <img src={blog.previewurl} />
                                                </div>
                                                <div className="bottom">
                                                    <h1>{blog.blogTopic} Top</h1>
                                                    <h2>{blog.blogSubHead}</h2>
                                                    <h3>{blog.blogCategory} | <span><i className="fas fa-glasses"></i>{blog.blogReadTime} mins</span></h3>
                                                    <h5>{moment(date).calendar()} <i className="fas fa-eye"></i>{blog.viewCount} views</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                else if(para===blog.blogCategory){
                                    const date=blog.createdAt.value;
                                    return(
                                        <Link to={'/blogs/'+blog.id} key={blog.id}>
                                            <div className="topblog-card">
                                                <div className="top">
                                                    <img src={blog.previewurl} />
                                                </div>
                                                <div className="bottom">
                                                    <h1>{blog.blogTopic} Top</h1>
                                                    <h2>{blog.blogSubHead}</h2>
                                                    <h3>{blog.blogCategory}</h3>
                                                    <h4><i className="fas fa-glasses"></i>{blog.blogReadTime} mins</h4>
                                                    <h5>{moment(date).calendar()} <i className="fas fa-eye"></i>{blog.viewCount} views</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                else{
                                    return null;
                                }
                                }
                                else{
                                    return null;
                                }
                            })
                        }
                    </div>
            </div>
        )
    }
const mapStateToProps=(state)=>{
    return{
        topblogs:state.firestore.ordered.blogs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'blogs',limit:10,orderBy:['createdAt','desc']},
    ])
)(TopBlogs)