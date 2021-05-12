
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url);

function Users({ users }) {
    const initialData = users;
    const { data, error } = useSWR(`http://localhost:3131/users`, fetcher, { initialData });

    console.log(data)
    if (error) return <div>failed to load</div>;
    if (!data) return <div>Carregando ...</div>;
    return (
        <main>
            <h1 align="center">Lista de usuários -- SSG (Static Server Generation)</h1>
            <div>
                {
                    data.data.map((user) => <span key={user.id}><p>{user.name}</p></span>)
                }
            </div>
        </main>
    );
}

// function Users({ users = [] }) {

//     const fetcher = (url) => axios.get(url);
//     console.log(fetcher)
//     const { data, error } = useSWR(`http://localhost:3131/users`, fetcher);

//     console.log(data)
//     // const [data2, setData2] = useState(users)

//     // setData2(data2 || data);

//     // const getUsers = async () => {
//     //     // const { data } = await axios.get('http://3c88216bc8b5.ngrok.io/users');
//     //     setData(data);
//     // }
//     // useEffect(() => {
//     //     getUsers()
//     // }, [])

//     // if (!data.length) return <h1>Carregando...</h1>;

//     return (
//         <main>
//             <h1 align="center">Lista de usuários -- SSG (Static Server Generation)</h1>
//             <div>
//                 {
//                     data.map((user) => <span key={user.id}><p>{user.name}</p></span>)
//                 }
//             </div>
//         </main>
//     )
// }
// SSG (Static Server Generation)
export async function getInitialProps(context) {
    // const { data, loading } = useSWR(`http://localhost:3131/users`, fetcher);
    const { data } = await axios.get('http://localhost:3131/users')
    // await loading
    return {
        props: { users: data }
    }
}
export default Users