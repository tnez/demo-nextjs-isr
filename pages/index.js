import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo 2021-06-03 ISG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg">
        <div className="text-4xl font-bold">
          Here are some pages to demonstrate how{' '}
          <a
            className="text-blue-400 underline"
            href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration"
            target="_blank"
          >
            Incremental Static RegenerationGeneration
          </a>{' '}
          works.
        </div>
        <ul className="flex flex-col mt-8 text-2xl text-blue-400 underline">
          <li className="mb-2">
            <a href="/animals-static" target="_blank">
              Example of <strong>Static Generation</strong>
            </a>
          </li>
          <li className="mb-2">
            <a href="/animals-isr" target="_blank">
              Example of <strong>Incremental Static Regeneration</strong>
            </a>
          </li>
          <li className="mb-2">
            <a href="/animals-isr-with-errors" target="_blank">
              Example of{' '}
              <strong>
                Incremental Static Regeneration with error-prone service
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
