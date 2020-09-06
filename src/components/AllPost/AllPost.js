import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '500px',
      margin: '0 auto',
      textAlign: 'center',
      marginBottom : '10px'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    text:{
        textDecoration :'none',
        margin: '0 auto',
    }
  });


const AllPost = (props) => {
    const classes = useStyles();
    const {title, id} = props.post;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Post No {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'/post/'+id} className={classes.text}><Button variant="contained">See Post</Button></Link>
            </CardActions>
        </Card>
    );
};

export default AllPost;