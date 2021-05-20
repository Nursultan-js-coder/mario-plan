import { Container,makeStyles } from '@material-ui/core';
import React from 'react';
import Notification from "./Notification"
import ProjectList from "../projects/ProjectList"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import {connect} from "react-redux"
import { Redirect } from 'react-router';
const useStyles=makeStyles({
  container:{
   
    display:"grid",
    alignItems:"start",
    justifyContent:"center",
    gridTemplateColumns:"8fr 7fr ",
    "& > *":{
      margin:10
    },
    gridGap:20
  },
  sidebar:{
   
    
  },
  articles:{
   maxWidth:"100%",
   margin:0,
   padding:0
  }
})

 function Dashboard(props) {
   const {projects,auth}=props;
 const classes=useStyles()
 if(!auth.uid){
return <Redirect to="/signin"/>
 }
  return (
    <Container className={classes.container}>
      <ProjectList projects={projects}/> 
      <Notification/>
    </Container>
  );
}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
  ])
)(Dashboard)
