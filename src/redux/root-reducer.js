import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase';
import authReducers from './auth/auth.reducer';
import userReducer from './user/user.reducer';
import tagReducers from './tags/tags.reducer';
import blogReducers from './blogs/blogs.reducer';
import projectReducers from './projects/projects.reducer';

const rootReducers=combineReducers({
    auth:authReducers,
    user:userReducer,
    tag:tagReducers,
    blog:blogReducers,
    project:projectReducers,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducers;