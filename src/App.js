import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import {auth,createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import NavBar from './layout/components/navbar/navbar.component';
import HomePage from './layout/pages/homepage/homepage.component';
import Blog from './layout/pages/blog/blog.component';
import Footer from './layout/components/footer/footer.component';
import SignIn from './layout/pages/sign-in/sign-in.component';
import NotFound from './layout/pages/NOT-FOUND/notfound.component';
import CreateTag from './layout/components/tags/createtag/createtag.component';
import BlogDetail from './layout/components/blog/blog-detail/blogdetail.component';
import Build from './layout/pages/build/build.component';
import CreateProject from './layout/components/project/create-project/createproject.component';
import CreateBlog from './layout/components/blog/create-blog/createblog.component';
import SmoothScroll from './layout/components/smooth.component';
import OurWorks from './layout/pages/ourworks/ourworks.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div className="App">
          <BrowserRouter>
          <SmoothScroll>
            {/* <NavBar /> */}
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/services/web-development" component={Build} />
                <Route exact path="/services/app-development" component={Build} />
                <Route exact path="/services/digital-marketing" component={Build} />
                <Route exact path="/services/content-writing" component={Build} />
                <Route exact path="/works" component={OurWorks} />
                <Route exact path="/build" component={Build} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blogs/:id" component={BlogDetail} />
                <Route exact path="/tag" component={CreateTag} />
                <Route exact path="/project" component={CreateProject} />
                <Route exact path="/cb" component={CreateBlog} />
                <Route path='*' exact component={NotFound} />
              </Switch>
              <Footer />
            </SmoothScroll>
          </BrowserRouter>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);

