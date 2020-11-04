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
    padding: '.5vw 1vw',
    fontSize: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '90%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '80%'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '70%'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '100%'
    }
    
  },
  brand:{
      display: 'inline-block',
      paddingTop: '.3125rem',
      paddingBottom: '.3125rem',
      // marginRight: '1rem',
      lineHeight: 'inherit',
      whiteSpace: 'nowrap',
      color: 'rgba(0,0,0,.9)',
      fontSize: '120%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '110%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '100%'
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '90%'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '120%'
      }
      }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{background:'#f8f9fa', display:'flex',justifyContent:'space-between'}}>
        <span className={classes.brand}>#SIFII</span>
        <div style={{ display:'flex' }}>
         <Typography variant="span" className={classes.title}>              About Me                </Typography>
                  <Typography variant="span" className={classes.title}>      Skills               </Typography>
                     <Typography variant="span" className={classes.title}>        Projects           </Typography>
           <Typography variant="span" className={classes.title}>     Resume                 </Typography>
        </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
