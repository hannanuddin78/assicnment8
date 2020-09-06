import React, { useState, useEffect } from 'react';
import AllPost from '../AllPost/AllPost';

const PostContainer = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setAllPosts(data))
    }, [])

    return (
        <div>
            <h1>All Post {allPosts.length}</h1>
            {allPosts.map(allPost => <AllPost post={allPost}></AllPost>)}
        </div>
    );
};

export default PostContainer;