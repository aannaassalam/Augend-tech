const initState={
    projects:""
}

const projectReducers=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT_SUCCESS':
            return{
                ...state,
                projectError:'Project Created'
            }
        case 'CREATE_PROJECT_ERROR':
            return{
                ...state,
                projectError:'Project Creation Failed'
            }
        default:
            return state;
    }
}

export default projectReducers;