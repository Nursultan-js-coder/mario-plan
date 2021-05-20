const  initState={
    projects:[
        {
            id:"1",
            title:"AlgoLAB for course work",
            content:"This summer bring all algorithms to single project and visualize all algotihms you are tought"
        },
        {
            id:"2",
            title:"Learn latest tech",
            content:"For example animation techs"
        },
        {
            id:"3",
            title:"That is about graphs and trees"
        },
    ]
}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("created project:",action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
                console.log("create project error ",action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;