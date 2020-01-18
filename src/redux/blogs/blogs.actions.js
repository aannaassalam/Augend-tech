import moment from 'moment';

export const createBlog=(blog)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('blogs').add({
            ...blog,
            createdAt:moment(new Date()).format('MMMM Do YYYY')
        })
        .then(()=>{
            dispath({type:'CREATE_BLOG_SUCCESS',blog})
            }).catch((err)=>{
                dispath({type:'CREATE_BLOG_ERROR',err});
            })
    }
};