import Head from 'next/head'
import Link from 'next/link'
import { DownArrow } from '../public/DownArrow'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  const titleProps = useSpring({ 
    to: { filter: 'blur(0)' }, 
    from: { filter: 'blur(0.75rem)' },
    config: { duration: 1000 }, 
  })

  const arrowProps = useSpring({
    to: { opacity: '1' }, 
    from: { opacity: '0' },
    delay: 1500,
    config: { duration: 2000 },  
  })

  const bounceProps = useSpring({
    loop: { reverse: true },
    to: { y: 10 },
    from: { y: 0 },
    delay: 0,
    config: { friction: 20, mass: 2 },
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
          <main className='main landing'>
            <animated.h1 className='title' style={titleProps}>
              Gavin Grant Consulting
            </animated.h1>
            <animated.p className='description' style={titleProps}>
              Web Design and Development Services
            </animated.p>
            <animated.div className='down-arrow' style={arrowProps}>
              <animated.div style={bounceProps}>
                <DownArrow />
              </animated.div>
            </animated.div>
          </main>
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
            <button>View Projects</button>
          </Link>
        </ParallaxLayer>  
      </Parallax>
    </div>
  )
}
