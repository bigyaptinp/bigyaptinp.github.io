function parseFrontmatter(markdown) {
  const normalized = markdown.replace(/\r\n/g, '\n')

  if (!normalized.startsWith('---\n')) {
    return { data: {}, content: normalized.trim() }
  }

  const endIndex = normalized.indexOf('\n---\n', 4)

  if (endIndex === -1) {
    return { data: {}, content: normalized.trim() }
  }

  const frontmatter = normalized.slice(4, endIndex)
  const content = normalized.slice(endIndex + 5).trim()
  const data = {}

  for (const line of frontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')

    if (separatorIndex === -1) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    data[key] = value
  }

  return { data, content }
}

function createSlug(filePath) {
  return filePath
    .split('/')
    .pop()
    .replace(/\.md$/, '')
}

const publicationFiles = import.meta.glob('./publications/[0-9]*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export const publications = Object.entries(publicationFiles)
  .map(([filePath, markdown]) => {
    const { data, content } = parseFrontmatter(markdown)

    return {
      slug: createSlug(filePath),
      title: data.title ?? '',
      venue: data.venue ?? '',
      year: data.year ?? '',
      summary: content,
      recommendedCitation: data.recommended_citation ?? '',
      paperLink: data.paper_link ?? '',
    }
  })
  .sort((left, right) => {
    const yearDifference = Number(right.year) - Number(left.year)

    if (yearDifference !== 0) {
      return yearDifference
    }

    return left.slug.localeCompare(right.slug)
  })
