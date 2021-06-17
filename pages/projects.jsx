import React, { useEffect, createRef } from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link'
import ScrollSnap from 'scroll-snap'

const fetcher = (url) => fetch(url).then((res) => res.json())

const callback = () => console.log('snapped!')

export default function Projects() {
  const ref = createRef()
  console.log(ref)

  const bindScrollSnap = () => {
    const element = ref.current
    const snapElement = () => new ScrollSnap(element, {
      snapDestinationY: '90%',
    })

    snapElement(callback)
  }

  useEffect(() => {
    bindScrollSnap()
  }, [])

  const { data, error } = useSWR('/api/projects', fetcher)

  if (error) return <div className='container'>Failed to load projects.</div>
  if (!data) return <div className='container'>Loading projects...</div>

  return (
    <div className='container'>
      <Head>
        <title>Gavin Grant Consulting | Projects</title>
        <meta name="description" content="Projects" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.gif" />
      </Head>

      <main className='main'>
        <div className='card-container' ref={ref}>
          {data.map((project, i) => {
            return (
              <div className='card' key={i}>
                <Link href={`/projects/${encodeURIComponent(project.slug)}`}>
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
