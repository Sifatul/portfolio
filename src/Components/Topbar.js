import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
  background:'#f8f9fa',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: '#007bff',
    padding: '.5rem 1rem'
  },
  brand:{
      display: 'inline-block',
      paddingTop: '.3125rem',
      paddingBottom: '.3125rem',
      marginRight: '1rem',
      fontSize: '1.25rem',
      lineHeight: 'inherit',
      whiteSpace: 'nowrap',
      color: 'rgba(0,0,0,.9)'
      }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{background:'#f8f9fa', display:'flex',justifyContent:'space-between'}}>
        <span className={classes.brand}>#SIFII</span>
        <div>
         <Typography variant="span" className={classes.title}>              About Me                </Typography>
                  <Typography variant="span" className={classes.title}>      Skills               </Typography>
                     <Typography variant="span" className={classes.title}>        Projects           </Typography>
           <Typography variant="span" className={classes.title}>     CV/Resume                 </Typography>
        </div>



        </Toolbar>
      </AppBar>
    </div>
  );
}
