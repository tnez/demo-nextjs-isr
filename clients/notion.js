import dotenv from 'dotenv'
dotenv.config()

const env = Object.freeze({
  DATABASE_ID: process.env.DATABASE_ID,
  NOTION_TOKEN: process.env.NOTION_TOKEN,
})
const URL = `https://api.notion.com/v1/databases/${env.DATABASE_ID}/query`

export async function fetchAnimals({ errorRate = 0 } = {}) {
  try {
    // simulate an error if desired
    const errorThreshold = 1.0 - errorRate
    const rando = Math.random()
    if (rando > errorThreshold) {
      throw new Error(
        `Request failed: triggered simulated error (${rando} > ${errorThreshold})`,
      )
    }

    // fetch data
    const response = await fetch(URL, {
      headers: {
        authorization: `Bearer ${env.NOTION_TOKEN}`,
        'notion-version': '2021-05-13',
        'content-type': 'application/json',
      },
      method: 'POST',
    })
    if (!response.ok) throw new Error(`Request failed: ${response.statusText}`)
    const data = await response.json()
    return {
      ok: true,
      data: data.results.map(transform).sort(sorter),
    }
  } catch (err) {
    console.error(err)
    return { ok: false, error: err.message }
  }
}

function transform(item) {
  const { Name, Tags } = item.properties
  return {
    createdAt: item.created_time,
    name: Name.title[0].text.content,
    tags: Tags.multi_select.map((i) => i.name),
  }
}

function sorter(a, b) {
  if (a.createdAt < b.createdAt) return -1
  if (a.createdAt > b.createdAt) return 1
  return 0
}
