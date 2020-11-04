import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    photo: {
        backgroundColor: '#4E5158'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (<
        div className={
            classes.root
        } >

        <
        div class="row photo pt-5 d-flex align-content-center" >

            <
        h1 class="title d-inline" > MD SIFATUL ISLAM | < /h1> <
        span class="px-2 sub_title pt-1" > Web and Android Developer < /span>


        <
        /div>

        <
        /div>
    );
}