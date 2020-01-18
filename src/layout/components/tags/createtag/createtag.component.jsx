import React from 'react';
import {connect} from 'react-redux';
import {createTag} from '../../../../redux/tags/tags.actions';

import './createtag.styles.css';

class CreateTag extends React.Component{
    state={
        tagName:'',
    }
    handleChange=(e)=>{
        var tag=e.target.value.replace(" ","");
        this.setState({
            [e.target.id]:tag
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createTag(this.state);
    }
    render()
    {
        const {tagError}=this.props;
        return(
            <div>
            <div className="crete-tag-form-container">
              <div className="create-tag-form">
                    <h1>Create Tag</h1>
                  <form onSubmit={this.handleSubmit}>
                          <div className="input-field">
                              <label htmlFor="tagName">Name</label>
                              <input type="text" id="tagName" onChange={this.handleChange} required/>
                          </div>
                      <div className="submit-button">
                          <button type="submit">Create</button>
                      </div>
                  </form>
                  <div className="tag-alert">{tagError ? <p>{tagError}</p>:null}</div>
                </div>
              </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
        tagError:state.tag.tagError
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
      createTag:(tag)=>dispatch(createTag(tag))
  }
}
export default connect(mapStateToProps,mapDispathToProps)(CreateTag);