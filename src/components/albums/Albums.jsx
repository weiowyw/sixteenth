import React, {useEffect, useState} from 'react';
import './albums.css'

const Albums = () => {
    const [albums, setAlbums] = useState([])
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    useEffect(() => {

        const getAlbums = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            const data = await response.json();
            setAlbums(data);
        }
        getAlbums();
    })

    return (
        <div >
            <button onClick={toggleVisibility}>Albums</button>
            { visibility && <div className='albums_container'>
                <ul>
                    {albums.map((album) =>
                        (<li key={album.id}>{album.id}</li>))}
                </ul>
            </div> }

        </div>
    );
};

export default Albums;