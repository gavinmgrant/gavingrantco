import { projects } from '../../../data'

export default function projectHandler({ query: { slug } }, res) {
  const filtered = projects.filter((p) => p.slug === slug)

  // Project with slug exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with slug: ${slug} not found.` })
  }
}