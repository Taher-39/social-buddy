import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {setPost(data)})
    }, [])
    return (
        <div>
            <h2>This is ReadyMate Post Loaded {post.length}</h2>
            <div>
                {
                    post.map(pst => <Posts post={pst}></Posts>)
                }
            </div>
        </div>
    );
};

export default Home;