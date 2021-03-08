import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {title, body, id} = props.post;
    let history = useHistory();

    function commentsHandler(id) {
        history.push(`post/${id}`);
    } 
    const stylePost = {
        border: '2px solid lightblue',
        margin: "20px",
        padding: '20px',
        borderRadius: "10px",
        textAlign: 'center'
    }
    return (
        <div style={stylePost}>
            <h1>Id{id}: {title}</h1>
            <p>{body}</p>
            <button onClick={() => commentsHandler(id)}>See Comments</button>
        </div>
    );
};

export default Posts;