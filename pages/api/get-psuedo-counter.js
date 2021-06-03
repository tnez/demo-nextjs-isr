const URL = 'https://demo-nextjs-isr.vercel.app/api/get-psuedo-counter'

export default async function (_, res) {
  res.setHeader('Cache-Control', 's-maxage=2, stale-while-revalidate')
  try {
    const previousResponse = await (await fetch(URL)).json()
    console.log('previousResponse', previousResponse)
    res.status(200).json({ counter: previousResponse.counter + 1 })
  } catch (err) {
    res.status(200).json({ counter: 0, error: err.message })
  }
}
