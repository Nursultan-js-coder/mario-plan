import React from 'react'
import {Container,Typography,Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux"
import { Redirect } from 'react-router';
const ProjectDetail = (props) => {
    if(!props.auth.uid){
        return <Redirect to="/signin"></Redirect>
        }
    let id=props.match.params.id;
    const {project}=props;
    return (
        <Container>
           {project && <Paper>
                <Typography align = "center">
                    Project Detail :  {id}
                </Typography>
                <Typography>
                    {project.title}
                </Typography>
                <Typography>
                    {project.content}
                </Typography>
                <Typography variant="body2">
                  posted by:  {project.authorFirstName},{project.authorLastName}
                </Typography>
            </Paper>}
        </Container>
    )
}

const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project= projects ? projects[id]: null;
    return {
        project:project,
        auth:state.firebase.auth
    }

     
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:"projects" }
    ])
)(ProjectDetail)

