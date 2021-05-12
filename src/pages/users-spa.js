import axios from 'axios'
import { useEffect, useState } from 'react'

function Users() {
    // SPA (Single Page Apps)
    const [users, setUsers] = useState([])

    // const getUsers = async () => {
    //     const { data } = await axios.get('http://3c88216bc8b5.ngrok.io/users');
    //     setUsers(data);
    // }
    // useEffect(() => {
    //     getUsers()
    // }, [])

    if (!users.length) return <h1>Carregando...</h1>;

    return (
        <main>
            <h1 align="center">Lista de usuários -- SPA (Single page app)</h1>
            <div>
                {
                    users.map((user) => <span key={user.id}><p>{user.name}</p></span>)
                }
            </div>
        </main>
    )
}

export default Users