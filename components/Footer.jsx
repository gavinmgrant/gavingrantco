import { EmailIcon } from '../public/EmailIcon'

export const Footer = () => {
  return (
    <footer className='footer'>
      <a href="mailto:gavin@gavingrant.co">
        <EmailIcon />
      </a>
      <p>
        © 2021 Gavin Grant
      </p>
    </footer>
  )
}