export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore })=>{
        // make async call;
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        const userId=getState().firebase.auth.uid;
        firestore.collection("projects").add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            auhtorId:userId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project})
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERR",err})
        })

    }
}