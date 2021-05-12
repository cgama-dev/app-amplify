import axios from 'axios'

function Users({ users = [] }) {

    if (!users.length) return <h1>Carregando...</h1>;

    return (
        <main>
            <h1 align="center">Lista de usuários -- ISG (Incremental Static Generation)</h1>
            <div>
                {
                    users.map((user) => <span key={user.id}><p>{user.name}</p></span>)
                }
            </div>
        </main>
    )
}
// SSG (Static Server Generation)
// export async function getStaticProps(context) {
//     const { data } = await axios.get('http://3c88216bc8b5.ngrok.io/users')
//     return {
//         props: { users: data },
//         revalidate: 30
//     }
// }
export default Users