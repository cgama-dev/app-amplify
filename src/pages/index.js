import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import axios from 'axios'

function Home({ users = [] }) {
  return (
    <div>
      <main className={styles.main}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/page1" >
                <a>Page1</a>
              </Link>
            </li>
            <li>
              <Link href="/page2" passHref >
                <a target="_blank">Page 2</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <div className={styles.main}>
        <h1>Move Money NEXTJS + S3 + CloudFront</h1>
      </div>

      <main>
        <h1 align="center">Lista de usuários -- SSG (Static Server Generation)</h1>
        <div>
          {
            users.map((user) => <span key={user.id}><p>{user.name}</p></span>)
          }
        </div>
      </main>
    </div>
  )
}

// SSG (Static Server Generation)
export async function getStaticProps(context) {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    props: { users: data }
  }
}

export default Home