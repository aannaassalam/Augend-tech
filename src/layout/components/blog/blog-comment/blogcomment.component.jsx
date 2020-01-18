import React from 'react';
import renderHTML from 'react-render-html';
import './blogcomment.styles.css'

const BlogComment=({blog})=>{
    var blogcomments = [];
    for(var key in blog.comments) {
        blogcomments.push(blog.comments[key]);
    }
    blogcomments.sort((a,b)=>(a.id>b.id?1:-1));
    console.log(blogcomments);
    return(
        <div className="comment-box">
                {blogcomments && blogcomments.map(blogcomment=>{
                    return(
                        <div className="comment">
                            <div className="top">
                                <div className="left">
                                    <img src={blogcomment.userPhoto} alt={'profile'} />
                                </div>
                                <div className="right">
                                    <h2>{blogcomment.userName}</h2>
                                    <h3>{blogcomment.commentTime}</h3>
                                </div>
                            </div>
                            <div className="bottom">
                                <h4>{renderHTML(blogcomment.comment)}</h4>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default BlogComment;