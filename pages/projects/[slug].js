import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import Head from "next/head";
import { LinkIcon } from "../../public/LinkIcon";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Projects() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.slug && `/api/projects/${query.slug}`,
    fetcher
  );

  if (error)
    return (
      <div className="loading">
        <p>{error.message}</p>
      </div>
    );
  if (!data)
    return (
      <div className="loading">
        <p>Loading project...</p>
      </div>
    );

  return (
    <div className="project-container">
      <Head>
        <title>Gavin Grant Consulting | {data.name}</title>
        <meta name="description" content={data.description} />
      </Head>

      <div className="project-image">
        <Image
          src={data.imgsrc}
          alt="Screenshot"
          width={900}
          height={600}
          quality={100}
          layout="intrinsic"
        />
      </div>
      <div className="project-image-mobile">
        <Image
          src={data.mobilesrc}
          alt="Screenshot"
          width={600}
          height={858}
          quality={100}
          layout="intrinsic"
        />
      </div>
      <div className="details">
        <div className="project-title">
          <h1>{data.name}</h1>
          <a href={data.url} target="_blank">
            <LinkIcon />
          </a>
        </div>
        <p>{data.description}</p>
        <ul>
          {data.bullets.map((bullet, i) => {
            return <li key={i}>{bullet}</li>;
          })}
        </ul>
        <h3>Technology</h3>
        <ul>
          {data.technologies.map((tech, i) => {
            return <li key={i}>{tech}</li>;
          })}
        </ul>
        {data.github !== null && (
          <div className="details-button">
            <button>
              <a href={data.github} target="_blank">
                GitHub Repo
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
