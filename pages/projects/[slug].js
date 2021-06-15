import { useRouter } from 'next/router'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Projects() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.slug && `/api/projects/${query.slug}`,
    fetcher
  )

  if (error) return <div className='container'>{error.message}</div>
  if (!data) return <div className='container'>Loading project...</div>

  return (
    <div className='container'>
      <a href={data.url} target='_blank'>
        <div className='projectimage'>
          <Image
            src={data.imgsrc}
            alt='Screenshot'
            width={900}
            height={600}
            quality={100}
            layout='intrinsic'
            placeholder='blur'
          />
        </div>
        <div className='projectimagemobile'>
          <Image
            src={data.mobilesrc}
            alt='Screenshot'
            width={600}
            height={858}
            quality={100}
            layout='intrinsic'
            placeholder='blur'
          />
        </div>
      </a>
      <div className='details'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <ul>
          {data.bullets.map(bullet => {
            return <li>{bullet}</li>
          })}
        </ul>
        <h3>Technology</h3>
        <ul>
          {data.technologies.map(tech => {
            return <li>{tech}</li>
          })}
        </ul>
        {data.github !== null && (
          <div className='details-button'>
            <button>
              <a href={data.github} target='_blank'>
                GitHub Repo
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}