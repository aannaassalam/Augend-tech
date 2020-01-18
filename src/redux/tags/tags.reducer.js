const initState={
    tags:""
}

const tagReducers=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_TAG_SUCCESS':
            return{
                ...state,
                tagError:'Tag Created'
            }
        case 'CREATE_TAG_ERROR':
            return{
                ...state,
                tagError:'Tag Creation Failed'
            }
        default:
            return state;
    }
}

export default tagReducers;