import { Container,Paper, Typography,FormControl, makeStyles, Button, TextField, Avatar} from '@material-ui/core'
import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {signUp} from "../../store/actions/authActions"
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
    margin:10
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
const SignUp = (props) => {
    if(props.auth.uid){
        return <Redirect to="/"></Redirect>
    }
    const [firstName,setFirstName]=useState("");
    const [firstNameErr,setFirstNameErr]=useState(false);
    const [lastName,setLastName]=useState("");
    const [lastNameErr,setLastNameErr]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState('');
    
    const [emailErr,setEmailErr]=useState(false);
    const [passwordErr,setPasswordErr]=useState(false);
    const classes=useStyles();
    const {authError}=props;
    const submitHandler =(e)=>{
     e.preventDefault();
     if(firstName === ""){
        setFirstNameErr(true)
      }
      if(lastName === ""){
        setLastNameErr(true)
      }
      if(email === ""){
        setEmailErr(true)
      }
      if(password === ""){
        setPasswordErr(true)
      }
      if(!passwordErr && !emailErr && !lastNameErr && !firstNameErr)
    props.signUp({email,password,firstName,lastName})
    }
    return (
        <Container className={classes.root}>
              
        <Paper className={classes.box}>
            <div className={classes.title}>
                <Avatar src="/avatar.jpeg"/>
                    
              
        <Typography align="center" >Welcome To Morio Plan </Typography>
        </div>
            
        <FormControl>

    <form className={classes.form} onSubmit={submitHandler}>

  <TextField  fullWidth 
  id="standard-basic" label="firstName"
  onChange={(e)=>setFirstName(e.target.value)}
  value={firstName}
   variant="outlined"error={firstNameErr} />
  <TextField  fullWidth 
  id="standard-basic" label="lastName"
  onChange={(e)=>setLastName(e.target.value)}
  value={lastName}
   variant="outlined" error={lastNameErr} />
  <TextField fullWidth id="standard-basic" 
  label="Email" variant="outlined" 
  error={emailErr} 
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
  <TextField  fullWidth id="standard-basic"
   label="Password" variant="outlined"
  onChange={(e)=>setPassword(e.target.value)}
   type="password"
   value={password}
   error={passwordErr} />
<Button variant="contained" type="submit" fullWidth color="primary">Sign UP</Button>
{authError && <Typography align = "center"color="secondary">{authError}</Typography>}

or have already one ? <Link to="/signin">sign in</Link>
    </form>


</FormControl>

        </Paper>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
