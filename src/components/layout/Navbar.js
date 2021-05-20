import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import{Link} from "react-router-dom"
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import {connect} from "react-redux"
const useStyles=makeStyles({
  root:{
 width:"100%",
 borderBottom:"1px solid rgb(180, 180, 180)",
 background:"rgb(97, 17, 73)",
 color:"#fff"

  },
  input:{
    width:200,
    height:40,
    outline:0,
    padding:4,
    margin:5,
    border:"1px solid rgb(180, 180, 180)"
  },
  toolbar:{
    display:"grid",
    gridTemplateColumns:"1fr 10fr",
    width:"80%",
    justifyItems:"end",
    alignItems:"center"
  },
 
 
})
const Navbar = (props) => {
  const classes=useStyles()
  const {auth,profile}=props;
  console.log("auth",auth)
  const link = auth.uid ? <SignedInLinks profile={profile}/> :<SignedOutLinks  profile={profile}/>;
  return (
     <AppBar  className={classes.root}  elevation={0}>
       <Toolbar style={{display:"flex",justifyContent:"center"}} >
         <div className={classes.toolbar}>

        <Link to="/" style={{justifySelf:"start"}}> <Typography >Morio Plan</Typography></Link>
          {link}
         </div>
       </Toolbar>
     </AppBar>
  )
}

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile

  }
}

export default connect(mapStateToProps)(Navbar)
