import React from 'react'
import { Container,Grid,makeStyles } from '@material-ui/core';
import ProjectSummary from "../projects/ProjectSummary"
import {Link} from "react-router-dom"
const useStyles=makeStyles({
  container:{
    display:"grid",
    alignItems:"start",
    justifyContent:"center",
    gridTemplateColumns:"8fr 7fr ",
    "& > *":{
      margin:10
    }
  },
  sidebar:{
    margin:0
  },
  articles:{
   maxWidth:"100%",
   margin:0,
   padding:0
  }
})

const ProjectList = (props) => {
  const classes=useStyles()
  const {projects}=props;
    return (
        <Container className={classes.articles} id="target">
        <Grid container spacing={2}>
          { projects && projects.map(project=>{
          return <Grid item >
           <Link to={"/project/"+project.id}><ProjectSummary  key={project.id } project={project} /></Link> 
          </Grid>
           })}
        </Grid>
      </Container>
    )
}



export default ProjectList
