import axios from 'axios'
import { useEffect, useState } from 'react'

function Users({ users = [] }) {

    if (!users.length) return <h1>Carregando.. SSR.</h1>;

    return (
        <main>
            <h1 align="center">Lista de usuários -- SSR (Server Side Render)</h1>
            <div>
                {
                    users.map((user) => <span key={user.id}><p>{user.name}</p></span>)
                }
            </div>
        </main>
    )
}

// SSR (Server Side Redering)
// export async function getServerSideProps(context) {
//     const { data } = await axios.get('http://3c88216bc8b5.ngrok.io/users')
//     return {
//         props: { users: data }
//     }
// }
export default Users