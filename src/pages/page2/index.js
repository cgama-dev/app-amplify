import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
export default function Page2() {
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
                            <Link href="/page1" passHref >
                                <a target="_blank">Page 1</a>
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
                <h1>Page2</h1>
            </div>
        </div>
    )
}