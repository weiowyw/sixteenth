import React, {useEffect, useState} from 'react';
import './posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    useEffect(() => {

        const getPosts = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }
        getPosts();
    })

    return (
        <div >
            <button onClick={toggleVisibility}>Posts</button>
            { visibility && <div className='posts_container'>
                <ul>
                    {posts.map((post) =>
                        (<li key={post.id}>{post.id}</li>))}
                </ul>
            </div> }
        </div>
    );
};

export default Posts;