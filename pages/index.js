import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { EmailIcon } from '../public/EmailIcon'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gavin Grant Consulting</title>
        <meta name="description" content="Web Design and Development Services" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.gif" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gavin Grant Consulting
        </h1>

        <p className={styles.description}>
          Web Design and Development Services
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:gavin@gavingrant.co">
          <EmailIcon />
        </a>
        <p>
          © 2021 Gavin Grant Consulting
        </p>
      </footer>
    </div>
  )
}
