import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import {createBlog} from '../../../../redux/blogs/blogs.actions';
import ReactQuill from 'react-quill';
import FormInput from '../../form-input/form-input.component';

import 'react-quill/dist/quill.snow.css';
import './createblog.styles.css';

class CreateBlog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            blogTopic:'',
            blogCategory:'',
            blogSubHead:'',
            blogBody:'',
            blogReadTime:'',
            previewurl:'',
            viewCount:0,
            commentCount:0,
        };
        // bind
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleImageChange = this.onHandleImageChange.bind(this);
      }
    onHandleChange=(e)=>{
        this.setState({ blogBody: e });
        console.log(this.state.blogBody);
      }
    onHandleImageChange=(e)=>{
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const imageSize=image.size/1000000;
            let reader = new FileReader();
            console.log(image);
            if(image.type ==="image/jpeg" || image.type==="image/png" && imageSize<5)
            {
                reader.onloadend = () => {
                    this.setState({
                      previewurl: reader.result
                    });
                  }
                  reader.readAsDataURL(image)
            }
            else{
                console.log("Too Big");
                this.setState({
                    previewurl:''
                  });
            }
          }
    }
    onHandleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.createBlog(this.state);
        console.log(this.state);
    }
    render()
    {
        const {blogError,tags}=this.props;
        return(
            <div className="crete-blog-form-container">
                    <h1>Create A Blog</h1>
                  <form onSubmit={this.onHandleSubmit} className="create-blog-form" id="createBlog">
                        <div className="create-blog-form-group">
                            <div>
                                <FormInput
                                    name='blogTopic'
                                    type='text'
                                    value={this.state.blogTopic}
                                    label='Blog Topic'
                                    onChange={e => {
                                        this.setState({ blogTopic: e.target.value });
                                    }}
                                    required
                                />
                                <FormInput
                                    name='blogSubHead'
                                    type='text'
                                    value={this.state.blogSubHead}
                                    label='Blog Sub Heading'
                                    onChange={e => {
                                        this.setState({ blogSubHead: e.target.value });
                                    }}
                                    required
                                />
                                
                                    <select
                                        onChange={e => {
                                            if(e.target.value!="home")
                                            {
                                            this.setState({ blogCategory: e.target.value });
                                            }
                                            console.log(this.state.blogCategory)
                                        }}
                                        required
                                    >
                                        <option value="">Choose a Category</option>
                                    {
                                        tags && tags.map(tag=>{
                                            if(tag.tagName!="home")
                                            {
                                            return(
                                                <option key={tag.tagName} value={tag.tagName}>{tag.tagName}</option>
                                            )
                                            }
                                        })}
                                    </select>
                            </div>
                            <div className="image-container">
                                <div className="blog-featured-picture">
                                <img src={this.state.previewurl || 'https://img.icons8.com/pastel-glyph/2x/plus.png'} alt="Uploaded images"/>
                                <input type="file" id="blog-featured-photo" onChange={this.onHandleImageChange} required/>
                                </div>
                                <label htmlFor="blog-featured-photo">Choose a featured blog image</label>
                            </div>
                        </div>
                          <div className="blogBody">
                            <ReactQuill
                                modules={CreateBlog.modules}
                                formats={CreateBlog.formats}
                                value={this.state.body}
                                placeholder="Body"
                                onChange={this.onHandleChange}
                                id="blogBody"
                                value={this.state.blogBody}
                                />
                          </div>
                          <FormInput
                                name='blogReadTime'
                                type='number'
                                value={this.state.blogReadTime}
                                label='Blog Read Time in mins'
                                onChange={e => {
                                    this.setState({ blogReadTime: e.target.value });
                                }}
                                required
                            />
                      <div className="submit-button">
                          <button type="submit">Create</button>
                      </div>
                  </form>
                  <div className="blog-alert">{blogError ? <p>{blogError}</p>:null}</div>
                </div>
        )
    }
}

CreateBlog.modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  };
  
  CreateBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
  ];

const mapStateToProps=(state)=>{
  return{
        blogError:state.blog.blogError,
        tags:state.firestore.ordered.tags
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
      createBlog:(blog)=>dispatch(createBlog(blog)),
  }
}
export default compose(connect(mapStateToProps,mapDispathToProps),firestoreConnect([
    {collection:'tags',orderBy:['createdAt','asc']},
    {collection:'blogs',orderBy:['createdAt','desc']},
]))(CreateBlog);