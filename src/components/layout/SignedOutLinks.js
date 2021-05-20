import React from 'react'
import {makeStyles,Typography} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { NavLink}  from "react-router-dom"
const useStyle=makeStyles({

        navs:{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr 1fr",
            listStyle:"none",
          },
          li:{
              display:"flex",
              flexDirection:"column"
          }
    
})

const SignedOutLinks = () => {
    const classes=useStyle();
    return (
    <ul className={classes.navs} >
<li className={classes.li}> <NavLink to="/signin"><VpnKeyIcon/><Typography>Sign In</Typography></NavLink></li>
<li className={classes.li}><NavLink to="/signup"><PersonAddIcon/><Typography>Sign Up</Typography></NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
