import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import renderHTML from 'react-render-html';
import moment from 'moment';
import firebase from '../../../../firebase/firebase.utils';
import './blogdetail.styles.css';
import BlogComment from '../blog-comment/blogcomment.component';
import Loader from '../../loader/loader.component';
var c=1;
class BlogDetail extends React.Component{
    constructor(){
        super();
        this.state={
            comment:'',
        }
    }
    componentDidMount(){
        $(document).scrollTop(0);
    }
    handleChange=(e)=>{
        const {auth}=this.props;
        if(auth.uid){
            this.setState({
                [e.target.id]:e.target.value
            });
        }
        else{
            window.location="/login"
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {blog,id,auth}=this.props;
        console.log(id,auth);
        console.log(this.state);
        var comments=blog.commentCount+1;
        var commentLine='comment'+comments;
        var today=new Date();
        var responseDate=moment(today).format('ll');
        var x=this.state.comment;
        var x2=x.replace(/(\r\n|\n|\r)/gm, '<br/>');
        if(auth.uid){
            firebase.firestore().collection("blogs").doc(id).update({
                ['comments.'+commentLine]:{
                    comment:x2,
                    userName:auth.displayName,
                    userEmail:auth.email,
                    userPhoto:auth.photoURL,
                    commentTime:responseDate,
                },
                'commentCount':comments
            });
            
        }
        else{
            window.location="/login"
        }
    }
    render()
    {
        const {blog,id,auth}=this.props;
        console.log(auth);
        if(blog){
        document.querySelector('.load').style.display='none';
        if(c>=1)
        {
            var viewRef = firebase.firestore().collection('blogs').doc(id);
            viewRef.update({
                viewCount: firebase.firestore.FieldValue.increment(1)
            });
            c--;
        }
        return(
            <>
            <div className='load'>
                <Loader/>
            </div>
            <div className="blogExpand">
                <div className="blog-detail">
                    <h1>{blog.blogTopic}</h1>
                    <h2>{blog.blogCategory} | {blog.createdAt}</h2>
                    
                    <img src={blog.previewurl} className="featured-image"/>
                    <div className="blog-body">
                        {renderHTML(blog.blogBody)}
                    </div>
                    <h4>Thank You for your valuable time, have a great day, from <span>FLAPPIFY</span></h4>
                    <BlogComment blog={blog}/>
                    <div className="create-comment">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <textarea type="text" id="comment" onChange={this.handleChange} placeholder="Write a response" required/>
                            </div>
                            <div className="submit-button">
                                <button type="submit">Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='sidebar'>
                        <h1><i className="fas fa-glasses"></i><br/>{blog.blogReadTime} mins</h1>
                        <h2><i className="fas fa-binoculars"></i><br/>{blog.viewCount} views</h2>
                        <div className="social-share">
                            <a href="https://www.facebook.com/flappify/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={"https://twitter.com/intent/tweet?text="+blog.blogTopic+"  https://flappify.com/blog/"+id} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href={"https://www.linkedin.com/sharing/share-offsite/?url="+"https://flappify.com/blog/"+id} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                </div>
            </div>
            </>
          )
        }
        else{
            return(
            <div className='load'>
                <Loader/>
            </div>
            )
        }
    }
}
const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    const blogs=state.firestore.data.blogs;
    const blog=blogs? blogs[id] : null;
    return {
        blog:blog,
        id:id,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'blogs'
        }
    ])
)(BlogDetail);