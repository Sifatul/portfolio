import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 345,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        
          },
    },
    media: {
        height: 140,
    },
    productName: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        [theme.breakpoints.down('sm')]: {
            whiteSpace: 'break-spaces',
        
          },
    }
}));

export default function MediaCard(props) {
    const classes = useStyles();
    console.log("project: ", props)
    const { company, companyWebsite, productName, productSummary, productThumbnailUrl, productUrl, productWebsite, tags = [] } = props.item;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={productThumbnailUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.productName}>
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {productSummary}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                               
                <Button variant="contained" color="primary" href={productUrl || productWebsite} target="_blank">         Live</Button>
            </CardActions>
        </Card>
    );
}
