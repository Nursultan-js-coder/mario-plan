import React from 'react'
import {makeStyles,Typography} from "@material-ui/core";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {NavLink} from "react-router-dom"
import {Avatar} from "@material-ui/core"
import { red } from '@material-ui/core/colors';
import {connect} from "react-redux";
import CreateIcon from '@material-ui/icons/Create';
import {signOut} from "../../store/actions/authActions";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const useStyle=makeStyles({

        navs:{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
            listStyle:"none",
            align:"right",
            gridGap:20
          },
    avatar: {
        backgroundColor: red[500],
      },
      li:{
              display:"flex",
              flexDirection:"column"
          }
})

const SignedInLinks = (props) => {
   
    const classes=useStyle();
  
    return (
<ul className={classes.navs} >
<li><NavLink to="/create"><CreateIcon/><Typography>New Project</Typography></NavLink></li>
<li><a onClick={props.signOut}> <ExitToAppIcon/><Typography>Sign out</Typography></a></li>
<li > <Avatar aria-label="recipe" className={classes.avatar}> {props.profile.initials} </Avatar> </li>
        </ul>
    )
}
const mapDispatchToProps=(dispatch)=>{
return{
    signOut:()=>dispatch(signOut())
}
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
