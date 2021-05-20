import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Navbar from "./components/layout/Navbar"
const useStyles=makeStyles((theme)=>({
    root:{
        display:"flex",
        flexDirection:"column"
    },
    page:{
        width:"100%",
        margin:20 
    },
   appbar:theme.mixins.toolbar
    
}))
const Layout = ({children}) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
        <Navbar/>
     
            <Container className={classes.page}>
                <div className={classes.appbar}></div>
        {children}
            </Container>

      

        </div>
    )
}

export default Layout
