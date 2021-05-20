import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import MoodIcon from '@material-ui/icons/Mood';
import moment from "moment "
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      minWidth:600,
      border:"1px solid #f6f6f6",
      borderBottom:"2px solid #f6f6f6",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    action:{
      height:100,
      display:" flex",
      alignItems:"start",
      justifyItems:"start"
    },
    favorite:{
      display:"flex",
      flexDirection:"column",
      
    },
    comment:{
display:"grid",
gridTemplateColumns:"1fr 10fr 1fr",
borderTop:"1px solid #f1f1f1",
borderBottom:"1px solid #f1f1f1",
alignItems:"center",
justifyItems:"center"
    },
    input:{
    border:"2px solid #f1f1f1",
    outline:"none",
    height:60,
    width:"100%",
    border:0,
 
    padding:10
    },
    a:{
      color:"black"
    }
  }));
const ProjectSummary = ({project}) => {
    const classes = useStyles();
    console.log(project)
  
   
  
    return (
        
           <Card className={classes.root} elevation={0}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {project.authorFirstName[0]+project.authorLastName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<a href="/hello" className={classes.a} ><Typography>{project.title}</Typography></a>}
        subheader="September 14, 2016"
      />
     
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" component="p">
            {project.content}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
           posted by: {project.authorFirstName},{project.authorLastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           created at: {moment(project.createdAt.toDate(), "YYYYMMDD").fromNow()}
        </Typography>
      </CardContent>
  
      
      <div className={classes.comment}>
      <MoodIcon/>
      <input className={classes.input}/>
      <Typography variant="body2" color="primary">send</Typography>
      </div>
      
    </Card>   
        
    )
}
// const mapStateToProps=(state)=>{
//   return{
//     auth:
//   }
// }

export default ProjectSummary
