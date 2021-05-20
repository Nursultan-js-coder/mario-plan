import React,{useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField"
import Radio from "@material-ui/core/Radio"
import Container from "@material-ui/core/Container"
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {createProject} from "../../store/actions/projectActions"
import {connect} from "react-redux";
import { Redirect } from 'react-router';
const useStyles=makeStyles({
field:{
  margin:10,
  display:"block"
},input:{

}
})


 function CreateProject(props) {
  const [note,setNote]=useState("")
  const [detail,setDetail]=useState("")
  const classes=useStyles();
  const [noteError,setNoteErr]=useState(false)
  const [detailError,setDetailErr]=useState(false)
  const [category,setCategory]=useState("male")
  if(!props.auth.uid){
  return <Redirect to="/signin"></Redirect>
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    setNoteErr(false);
    setDetailErr(false);
    if(detail === ""){
      setDetailErr(true);
    }
    if(note === ""){
      setNoteErr(true);
    }
   
   if(!noteError && !detailError ){
       console.log(note,detail);
       props.createProject({
         title:note,
         content:detail
       }); 
       props.history.push('/');
   }
  }
  
  return (
  <Container style={{width:"80%"}}>
    <Typography  className={classes.field} variant="h3" guutebottom color="textSecondary">Create a new post</Typography>
<form onSubmit={submitHandler}>
  <TextField
  label="Post Title"
  variant="outlined"
  color="primary"
  fullWidth
  className={classes.field}
  value={note}
  onChange={(e)=>setNote(e.target.value)}
  error={noteError}
  />
  <TextField
  label="Post Content"
  variant="outlined"
  color="primary"
  fullWidth
  error={detailError}
  onChange={(e)=>setDetail(e.target.value)}
value={detail}

className={classes.field }multiline
rows={4}

/>
<label class="file">
  <input type="file" id="file" aria-label="File browser example"/>
  <span class="file-custom"></span>
</label>
<FormControl component="fieldset" className={classes.field}>
  <FormLabel component="legend">post categories</FormLabel>
  <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
    <FormControlLabel value="programming" control={<Radio/> }label="programming"/>
    <FormControlLabel value="money" control={<Radio/> }label="money"/>
    <FormControlLabel value="technology" control={<Radio/> }label="technology"/>
    <FormControlLabel value="university"  control={<Radio/> }label="university"/>
 
  </RadioGroup>

</FormControl>
  <Button className={classes.field}variant="contained" color="primary" type="submit">submit</Button>
</form>

</Container>
   
  )
}
const mapStateToProps=(state)=>{
  return {
    auth:state.firebase.auth,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    createProject: (project)=>dispatch(createProject(project))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)