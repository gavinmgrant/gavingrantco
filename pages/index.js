import Head from 'next/head'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: { duration: 1500 }, 
  })

  return (
    <div>
      <Head>
        <title>Gavin Grant Consulting</title>
        <meta name="description" content="Web Design and Development Services" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.gif" />
      </Head>

      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <animated.main className='main' style={props}>
              <h1 className='title'>
                Gavin Grant Consulting
              </h1>
              <p className='description'>
                Web Design and Development Services
              </p>
            </animated.main>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#202020' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Link href='/projects'>
            <button className='button-home'>View Projects</button>
          </Link>
        </ParallaxLayer>  
      </Parallax>
    </div>
  )
}
