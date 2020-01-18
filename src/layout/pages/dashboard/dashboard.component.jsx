import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect } from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

import SignOut from '../../components/navbar/signOut';

import CreateBlog from '../../components/blog/create-blog/createblog.component';
import CreateProject from '../../components/project/create-project/createproject.component';
import './dashboard.styles.css';

class Dashboard extends React.Component{
    componentDidMount(){
      document.querySelector("nav").style.display="none";
      document.querySelector(".footer").style.display="none";
    }
      state={
        tab:"tab",
        activetab:"tab-selected",
        hide:"none",
        show:"flex",
        tab1:"tab-selected",
        tab2:"tab",
        tab3:"tab",
        tab4:"tab",
        tab5:"tab",
        tab6:"tab",
        sidebar:"show-tab-name",
        }

        handleShow=()=>{
          if(this.state.sidebar==="show-tab-name")
          {
              this.setState(() => ({
                sidebar:"hide-tab-name",
              }));
              document.querySelector(".tab-text-1").style.display="none";
              document.querySelector(".tab-text-2").style.display="none";
              document.querySelector(".tab-text-3").style.display="none";
              document.querySelector(".tab-text-4").style.display="none";
              document.querySelector(".tab-text-5").style.display="none";
              document.querySelector(".tab-text-6").style.display="none";
              document.querySelector(".dashboard-sidebar").style.width="6vw";
              document.querySelector(".dashboard-content").style.width="93vw";
          }
          else{
            this.setState(() => ({
              sidebar:"show-tab-name",
            }));
            document.querySelector(".tab-text-1").style.display="block";
            document.querySelector(".tab-text-2").style.display="block";
            document.querySelector(".tab-text-3").style.display="block";
            document.querySelector(".tab-text-4").style.display="block";
            document.querySelector(".tab-text-5").style.display="block";
            document.querySelector(".tab-text-6").style.display="block";
            document.querySelector(".dashboard-sidebar").style.width="20vw";
            document.querySelector(".dashboard-content").style.width="80vw";
          }
          console.log(this.state);
        }
        
        handleShow1=()=>{
          if(this.state.tab1==="tab")
          {
              this.setState(() => ({
                  tab1:"tab-selected",
                  tab2:"tab",
                  tab3:"tab",
                  tab4:"tab",
                  tab5:"tab",
              }));
          }
          console.log(this.state);
      }
      handleShow2=()=>{
          if(this.state.tab2==="tab")
          {
              this.setState(() => ({
                  tab1:"tab",
                  tab2:"tab-selected",
                  tab3:"tab",
                  tab4:"tab",
                  tab5:"tab",
              }));
          }
          console.log(this.state);
      }
      handleShow3=()=>{
          if(this.state.tab3==="tab")
          {
              this.setState(() => ({
                  tab1:"tab",
                  tab2:"tab",
                  tab4:"tab",
                  tab3:"tab-selected",
                  tab5:"tab",
              }));
          }
          console.log(this.state);
      }
      handleShow4=()=>{
        if(this.state.tab4==="tab")
        {
            this.setState(() => ({
                tab1:"tab",
                tab2:"tab",
                tab4:"tab-selected",
                tab3:"tab",
                tab5:"tab",
            }));
        }
        console.log(this.state);
    }
    handleShow5=()=>{
      if(this.state.tab5==="tab")
      {
          this.setState(() => ({
              tab1:"tab",
              tab2:"tab",
              tab5:"tab-selected",
              tab3:"tab",
              tab4:"tab",
          }));
      }
      console.log(this.state);
  }
    render()
    {
      const {auth,profile,users}=this.props;
      var pos;
      var adminper=false;
        for(var key in users) {
            if(users[key]===auth.email)
            {
              console.log(users[key]);
            }
        }
      if(!auth.uid) return <Redirect to='/login' />
      else{
        return(
          <div className="dashboard">
          {users && users.map(user=>{
            for(var key in users) {
              if(user.email===auth.email)
              {
                if(user.adminStatus)
                {
                  return(
                    <div className="dashboard-container">
                      <div className="dashboard-sidebar">
                        <div className={this.state.sidebar} onClick={this.handleShow}><h1><i className="fas fa-caret-square-left"></i></h1></div>
                        <div className={this.state.tab1} onClick={this.handleShow1}><h1><i className="fas fa-border-all"></i><span className="tab-text-1">Dashboard</span></h1></div>
                        <div className={this.state.tab2} onClick={this.handleShow2}><h1><i className="fas fa-hand-holding-usd"></i><span className="tab-text-2">Donations</span></h1></div>
                        <div className={this.state.tab3} onClick={this.handleShow3}><h1><i className="fab fa-wpforms"></i><span className="tab-text-3">Applicants</span></h1></div>
                        <div className={this.state.tab4} onClick={this.handleShow4}><h1><i className="far fa-comments"></i><span className="tab-text-4">HelpDesk</span></h1></div>
                        <div className={this.state.tab5} onClick={this.handleShow5}><h1><i className="fab fa-elementor"></i><span className="tab-text-5">EventCreation</span></h1></div>
                        <div className={this.state.tab6} onClick={this.handleShow6}><a href="/" style={{textDecoration:"none"}}><h1><i className="fas fa-globe-asia"></i><span className="tab-text-6">Home</span></h1></a></div>
                        <div className="sign-out"><SignOut profile={profile}/></div>
                      </div>
                      <div className="dashboard-content">
                        {this.state.tab1==="tab-selected" && <CreateBlog />}
                        {this.state.tab2==="tab-selected" && <CreateProject />}
                        {this.state.tab3==="tab-selected" && <CreateBlog />}
                        {this.state.tab4==="tab-selected" && <CreateBlog />}
                        {this.state.tab5==="tab-selected" && <CreateBlog />}
                      </div>
                    </div>
                  )
                }
                else{
                  return <Redirect to='/' />
                }
              }
              
            }
          })}
          </div>
        )
      }
    }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    users:state.firestore.ordered.users,
    profile:state.firebase.profile
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection:'users'},
  ])
)(Dashboard);