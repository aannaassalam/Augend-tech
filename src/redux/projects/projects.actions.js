export const createProject=(project)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            createdAt:new Date()
        })
        .then(()=>{
            dispath({type:'CREATE_PROJECT_SUCCESS',project})
            }).catch((err)=>{
                dispath({type:'CREATE_PROJECT_ERROR',err});
            })
    }
};