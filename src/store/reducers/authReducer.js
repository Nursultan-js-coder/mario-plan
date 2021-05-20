const  initState={
    authError:null
}
const authReducer=(state=initState,action)=>{
    switch(action.type){
        case "LOGIN_ERROR":
            return {...state,authError:"Login failed"};
        case 'LOGIN_SUCCESS':
           
            return {...state,authError:null};
        case  "LOGOUT_SUCCES": 
        console.log("logout success");
            return state;
        case  "LOGOUT_ERROR": 
        console.log("logout error");
            return state;
        case "SIGNUP_SUCCESS":
            console.log("sign up success");
            return {
                ...state,authError:null
            }
        case "SIGNUP_ERROR":
            console.log("signup error");
            console.log(action.err.message)
            return {
                ...state,authError: action.err.message

            }
        default:
            return state;    
    }
 
}

export default authReducer;