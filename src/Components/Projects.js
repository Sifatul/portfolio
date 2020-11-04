import React from 'react';
import Card from "./Card";
import { getProjects } from "../Firebase"

import {
    makeStyles, Grid
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center'
    },
    photo: {
        backgroundColor: '#4E5158'
    }
}));

export default function Projects() {
    const classes = useStyles();
    const [state, setstate] = React.useState([])
    React.useEffect(() => {

        try {
            getProjects().then(projects => {
                console.log(projects);
                setstate(projects)
            })
        } catch (e) {
            console.error(e)
        }
    }, [])
    return (
        <div id="projects" className={classes.root} >

            <Grid
                container
                direction="row"
                justify="start"
                alignItems="center"
                spacing={2}
                xl={10}
                sm={10}
                md={10}
            >
                {(state || []).map((item,key) => {
                    return <Grid item key={'project'+key}  >
                        <Card item={item}></Card>
                    </Grid>
                })}

            </Grid>


        </div>)
} 