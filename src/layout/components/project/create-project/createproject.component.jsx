import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import {createProject} from '../../../../redux/projects/projects.actions';
import FormInput from '../../form-input/form-input.component';

import './createproject.styles.css';

class CreateProject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projecttitle:'',
            projectlink:'',
            projectstate:'',
            projectexpense:'',
            projectamount:'',
            projectdesc:'',
            projectimageurl:'',
            projectdoa:'',
            projectdod:'',
            clientname:'',
            clientphone:'',
            clientemail:'',
            clientloc:'',
            clientreview:'',
            extrainfo:'',
        };
        // bind
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleImageChange = this.onHandleImageChange.bind(this);
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
                        projectimageurl: reader.result
                    });
                  }
                  reader.readAsDataURL(image)
            }
            else{
                console.log("Too Big");
                this.setState({
                    projectimageurl:''
                  });
            }
          }
    }
    onHandleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
    }
    render(){
        const {projectError}=this.props;
        return(
            <div className="create-project">
                <h1>Add a Project</h1>
                <form onSubmit={this.onHandleSubmit} className="create-project-form" id="createproject">
                            <div className="input-group">
                                <div className="part1">
                                    <FormInput
                                        name='projecttitle'
                                        type='text'
                                        value={this.state.projecttitle}
                                        label='Project Title'
                                        onChange={e => {
                                            this.setState({ projecttitle: e.target.value });
                                        }}
                                        required
                                    />
                                    <FormInput
                                        name='projectlink'
                                        type='text'
                                        value={this.state.projectlink}
                                        label='Project Link'
                                        onChange={e => {
                                            this.setState({ projectlink: e.target.value });
                                        }}
                                        required
                                    />
                                    <select
                                        onChange={e => {
                                            this.setState({ projectstate: e.target.value });
                                        }}
                                        required
                                        >
                                        <option value=''>Choose project state</option>
                                        <option value='ongoing'>Ongoing</option>
                                        <option value='public'>Done: Show To Public</option>
                                        <option value='hidden'>Done: Hide From Public</option>
                                    </select>
                                    <FormInput
                                        name='projectexpense'
                                        type='number'
                                        value={this.state.projectexpense}
                                        label='Project Expense'
                                        onChange={e => {
                                            this.setState({ projectexpense: e.target.value });
                                        }}
                                        required
                                    />
                                    <FormInput
                                        name='projectamount'
                                        type='number'
                                        value={this.state.projectamount}
                                        label='Project Amount'
                                        onChange={e => {
                                            this.setState({ projectamount: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="image-container">
                                    <label htmlFor="blog-featured-photo">Choose a featured image</label>
                                    <div className="blog-featured-picture">
                                    <img src={this.state.projectimageurl || 'https://img.icons8.com/pastel-glyph/2x/plus.png'} alt="Uploaded images"/>
                                    <input type="file" id="blog-featured-photo" onChange={this.onHandleImageChange} required/>
                                </div>
                            </div>
                            </div>
                            <div className="input-group">
                                <div className="project-desc">
                                    <h1>Project description:-</h1>
                                    <textarea
                                        placeholder="Project description"
                                        onChange={e=>{
                                        this.setState({ projectdesc: e.target.value });
                                        }}
                                        required
                                    ></textarea>
                                </div>
                                <div className="part2">
                                    <FormInput
                                        name='projectdoa'
                                        type='text'
                                        value={this.state.projectdoa}
                                        label='Project Date of Arrival'
                                        onChange={e => {
                                            this.setState({ projectdoa: e.target.value });
                                        }}
                                        required
                                    />
                                    <FormInput
                                        name='projectdod'
                                        type='text'
                                        value={this.state.projectdod}
                                        label='Project Date of Delivery'
                                        onChange={e => {
                                            this.setState({ projectdod: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="part3">
                                    <FormInput
                                    name='clientname'
                                    type='text'
                                    value={this.state.clientname}
                                    label='Client Name'
                                    onChange={e => {
                                        this.setState({ clientname: e.target.value });
                                    }}
                                    required
                                    />
                                    <FormInput
                                        name='clientphone'
                                        type='text'
                                        value={this.state.clientphone}
                                        label='Client Contact No.'
                                        onChange={e => {
                                            this.setState({ clientphone: e.target.value });
                                        }}
                                        required
                                    />
                                    <FormInput
                                        name='clientemail'
                                        type='text'
                                        value={this.state.clientemail}
                                        label='Client Email'
                                        onChange={e => {
                                            this.setState({ clientemail: e.target.value });
                                        }}
                                        required
                                    />
                                    <FormInput
                                        name='clientlocation'
                                        type='text'
                                        value={this.state.clientloc}
                                        label='Client Location'
                                        onChange={e => {
                                            this.setState({ clientloc: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="project-rev">
                                    <h1>Client review:-</h1>
                                    <textarea
                                        placeholder="Client review...."
                                        onChange={e=>{
                                        this.setState({ clientreview: e.target.value });
                                        }}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="project-exinfo">
                                    <h1>Extra Informations:-</h1>
                                    <textarea
                                        placeholder="Extra infos...."
                                        onChange={e=>{
                                        this.setState({ extrainfo: e.target.value });
                                        }}
                                        required
                                    ></textarea>
                                </div>
                          <button type="submit">Add<div>Project</div></button>
                  </form>
                  <div className="project-alert">{projectError ? <p>{projectError}</p>:null}</div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
          projectError:state.project.projectError,
    }
  }
  const mapDispathToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project)),
    }
  }
  export default compose(connect(mapStateToProps,mapDispathToProps),firestoreConnect([
      {collection:'projects',orderBy:['createdAt','desc']},
  ]))(CreateProject);