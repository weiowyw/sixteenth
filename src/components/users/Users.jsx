import React, {useEffect, useState} from 'react';
import './users.css'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    useEffect(() => {

        const getUsers = async() =>{

            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                throw new Error('Failed to fetch')
            }

            const data = await response.json();
            setUsers(data);

            }catch(e){
                console.log(e.message)
            }
        }
        getUsers();
    }, []);


    return (
        <div>
            <button onClick={toggleVisibility}>Кнопка</button>
            { visibility && <div className='users_container'>
                <ul>
                    {users.map((user) =>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div> }
        </div>
    );
};

export default Users;