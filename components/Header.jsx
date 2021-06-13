import Link from 'next/link'

export const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <h3>Gavin Grant</h3>
      </Link>
    </header>
  )
}