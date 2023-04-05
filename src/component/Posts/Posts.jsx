import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Posts.css'

const Posts = ({posts}) => {
    const {id, title,body} = posts;

    const navigate =useNavigate()
    const handleNAvigation = ()=>{
        navigate(`/posts/${id}`);
}

    return (
        <div className='posts'>
            <h5>Id : {id}</h5>
            <p>title: {title}</p>
            <p>Body : {body}</p>
            <Link to={`/posts/${id}`}>Details </Link>
            <Link to={`/posts/${id}`}><button>Show post details</button></Link>
            <button onClick={handleNAvigation}>With buttonHandler</button>
            
        </div>
    );
};

export default Posts;