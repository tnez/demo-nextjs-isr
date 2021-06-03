const URL = 'https://demo-nextjs-isr.vercel.app/api/get-psuedo-counter'
const TIMEOUT_THRESHOLD = 5000

export default async function (_, res) {
  res.setHeader('Cache-Control', 's-maxage=2, stale-while-revalidate')
  setTimeout(sendDefaultResponse(res), TIMEOUT_THRESHOLD)
  try {
    const previousResponse = await (await fetch(URL)).json()
    console.log('previousResponse', previousResponse)
    res.status(200).json({ counter: previousResponse.counter + 1 })
  } catch (err) {
    res.status(200).json({ counter: 0, error: err.message })
  }
}

function sendDefaultResponse(res) {
  res.status(200).json({ counter: 0, error: 'Timed Out' })
}
