import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../../Comments/Comments';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    text:{
        textDecoration :'none',
    }
  });

const Post = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [seePost, setSeePost] = useState({});
    const [comments, setComments] = useState([])
    const [seeComment, setSeeComment] = useState(false)

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
        .then(res => res.json())
        .then(data => setPhoto(data))
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSeePost(data))
    }, [id])

    const handleSeeComment =() => {
        setSeeComment(true)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Post Detail {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {seePost.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                
                </Typography>
                <Typography variant="body2" component="p">
                    {seePost.body}
                </Typography>
            </CardContent>
            <CardContent>
                { seeComment ? null : <Button size="small" onClick={handleSeeComment}>See Comment</Button> }
                { seeComment ? comments.map(comment => <Comments comment={comment}></Comments>) : null }
            </CardContent>
            
        </Card>
    );
};

export default Post;