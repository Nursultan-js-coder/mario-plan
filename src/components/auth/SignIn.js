import { Container,Paper, Typography,FormControl, makeStyles, Button, TextField, Avatar} from '@material-ui/core'
import React, { useState } from 'react'
import {signIn} from "../../store/actions/authActions";
import {connect} from "react-redux";
import { Redirect } from 'react-router';
const useStyles=makeStyles({
    root:{
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     width:"700px",
     height:"100%",
     backgroundColor:"#f1f1f1",
     padding:20,
     borderRadius:9
     
    },
    box:{
        display:"grid",
        width:"100%"
    },
    form:{
    width:"95%",
    display:"flex",
     alignItems:"center",
     justifyContent:"center",
     flexDirection:"column",
     "& > *":{
    marginBottom:10
     },
     padding:10

    },
    title:{
        display:"grid",
        gridTemplateColumns:"1fr 11fr",
        "& > *":{
            margin:10
        } ,
        alignItems:"center"       

    }
    
})
const SignIn = (props) => {
    if(props.auth.uid){
        return <Redirect to="/"></Redirect>
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState('');

    const [emailErr,setEmailErr]=useState(false);
    const [passwordErr,setPasswordError]=useState(false);
    const classes=useStyles();

    const submitHandler =(e)=>{
     e.preventDefault();
 
     console.log(password)
     console.log(email)
     props.signIn({email,password});
   
    }
    return (
        <Container className={classes.root}>
              
        <Paper className={classes.box}>
            <div className={classes.title}>
                <Avatar src="/avatar.jpeg"/>
                    
              
        <Typography align="center" >Welcome To Algo  Morio Plan /(Sign In) </Typography>
        </div>
            
        <FormControl>

    <form className={classes.form} onSubmit={submitHandler}>

  <TextField  fullWidth 
  id="standard-basic" label="Username"
  onChange={(e)=>setEmail(e.target.value)}
  value={email}
   variant="outlined"error={emailErr} />
 
  <TextField  fullWidth id="standard-basic"
   label="Password" variant="outlined"
  onChange={(e)=>setPassword(e.target.value)}
   type="password"
   value={password}
   error={passwordErr} />
<Button variant="contained" type="submit" fullWidth color="primary">Sign In</Button>
   {props.authError &&  <Typography color="secondary">{props.authError}</Typography>}
   {!props.authError &&  <Typography color="primary">Login Success</Typography>}
    </form>


</FormControl>

        </Paper>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return {
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
