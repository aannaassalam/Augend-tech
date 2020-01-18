const initState={
    blogs:""
}

const blogReducers=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_BLOG_SUCCESS':
            return{
                ...state,
                blogError:'Blog Created'
            }
        case 'CREATE_BLOG_ERROR':
            return{
                ...state,
                blogError:'Blog Creation Failed'
            }
        default:
            return state;
    }
}

export default blogReducers;