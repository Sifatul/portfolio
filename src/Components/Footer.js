import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
    footer :{
        display:'flex',
        minHeight:'50px',
        fontWeight: 'bold',
        fontSize: '100%',
        background: 'black',
        color: 'white',
        margin:'auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position:'absolute',
        bottom:0,
        right:0,
        left:0
    },
    text:{
        display:'flex',
        margin:'auto'
    }
    
}));


const Footer = () => {
    const classes = useStyles();
    return (<     div className= {classes.footer} >
        <    Typography className={classes.text} > <CopyrightIcon/>devsifat@gmail.com < /Typography>
        < /        div > 
        )}
export default Footer