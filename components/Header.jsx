import Link from 'next/link'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-links'>
        <Link href='/'>
          <h3>Gavin Grant</h3>
        </Link>
        <Link href='/projects'>
          <p>Projects</p>
        </Link>
      </div>
    </header>
  )
}