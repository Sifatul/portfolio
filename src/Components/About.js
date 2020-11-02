import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
 }));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <img src="assets/img/me.jpg" class="profile-image mt-4 ml-2"/>
            <div class="row photo pt-5 d-flex align-content-center">

                <h1 class="title d-inline">MD SIFATUL ISLAM | </h1>
                <span class="px-2 sub_title pt-1">Web and Android Developer</span>


            </div>


            <div class="introduction d-flex d-row flex-wrap" id="about_me">


                <div class="intro-container  pr-4">

                    <div class="py-3 hello">
                        <span>HELLO</span>
                        <span>World</span>
                    </div>
                    <div class="row">
                            <span class="py-2">I am <strong>SIFATUL </strong>. I have worked as a <i>web</i> developer for
                                almost two years and six months as an <i>android </i>developer. </span>
                        <br/><strong class="py-1"> I would love to be a part of your projects, learn more and
                        grow.</strong>
                    </div>

                    <div class="row social intro mt-2">
                        <a href="https://www.linkedin.com/in/mdsifatulislam?trk=nav_responsive_tab_profile"
                           target="_blank"><i class="fab fa-linkedin-in"></i></a>

                        <a href="https://www.facebook.com/md.sifatulislam" target="_blank"> <i
                                class="fab fa-facebook-f"></i></a>

                        <a href="https://twitter.com/sifii2013" target="_blank"> <i class="fab fa-twitter"></i></a>


                        <a href="https://github.com/Sifatul" target="_blank"> <i class="fab fa-linkedin-in"></i></a>

                        <a href="http://codepen.io/sifii2013/" target="_blank"><i class="fab fa-codepen"
                                                                                  aria-hidden="true"></i></a>
                    </div>


                </div>


            </div>


    </div>
  );
}
