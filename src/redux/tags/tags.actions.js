export const createTag=(tag)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('tags').add({
            ...tag,
            createdAt:new Date()
        }).then(()=>{
            dispath({type:'CREATE_TAG_SUCCESS',tag})
            }).catch((err)=>{
                dispath({type:'CREATE_TAG_ERROR',err});
            })
    }
};