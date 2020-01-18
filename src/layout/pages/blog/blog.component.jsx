import React from 'react';
import $ from 'jquery';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';

import LatestBlogs from '../../components/blog/latestblogs/latestblogs.component';
import TopBlogs from '../../components/blog/topblogs/topblogs.component';
import Loader from '../../components/loader/loader.component';
import './blog.styles.css';


class Blog extends React.Component{
    constructor(){
        super()
        this.state={
            active:"home",
            type:'blog.blogCategory'
        }
    }
    componentDidMount(){
        document.title="Flappify | Blog";
        $(document).scrollTop(0);
    }
    handleClickTag=(e)=>{
        var click=e.target.id;
        console.log(click);
        this.setState(() => ({active:click}));
        var x, i;
        x = document.querySelectorAll(".active");
        for (i = 0; i < x.length; i++) {
            document.querySelector('.active').classList.remove('active');
        }
        document.querySelector('#'+click).classList.add('active');
    }
    render(){
        const {tags,blogs}=this.props;
        if(tags){
            document.querySelector('.load').style.display='none';
        }
        var i=0;
        return(
            <div>
                <div className='load'>
                    <Loader/>
                </div>
            <div className="blog">
                
                <div className="top">
                    <div className="tag-list">
                    {
                        tags && tags.map(tag=>{
                            i++;
                            if(tag.tagName==='home'){
                                return(
                                    <a key={i} className="tagname active" onClick={this.handleClickTag} id={tag.tagName}>{tag.tagName}</a>
                                    )
                            }
                            else{
                                return(
                                    <a key={i} className="tagname" onClick={this.handleClickTag} id={tag.tagName}>{tag.tagName}</a>
                                    )
                            }
                        })}
                        
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <LatestBlogs para={this.state.active} type={this.state.type}/>
                    </div>
                    <div className="right">
                        <TopBlogs para={this.state.active} type={this.state.type}/>
                    </div>
                </div>
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
)(Blog);