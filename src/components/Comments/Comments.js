import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Comments = () => {
    const {id} = useParams();
    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h1>Name: {comment.name}</h1>
            <p>Emails: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comments;