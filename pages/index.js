import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Gavin Grant Consulting</title>
        <meta name="description" content="Web Design and Development Services" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.gif" />
      </Head>

      <main className='main'>
        <h1 className='title'>
          Gavin Grant Consulting
        </h1>

        <p className='description'>
          Web Design and Development Services
        </p>
        <Link href='/projects'>
          <button>View Projects</button>
        </Link>
      </main>
    </div>
  )
}
