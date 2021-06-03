import * as React from 'react'
import { Animal } from '../components'

export default function AnimalPage({ animals, renderedAt }) {
  return (
    <div>
      <ol className="">
        {animals.map((animal) => (
          <Animal key={animal.name} {...animal} />
        ))}
      </ol>
      <div className="text-gray-400">Rendered at: {renderedAt}</div>
    </div>
  )
}
export async function getStaticProps() {
  const { fetchAnimals } = require('../clients/notion')
  const result = await fetchAnimals()
  const animals = result.ok ? result.data : []

  return {
    props: {
      animals,
      renderedAt: new Date().toISOString(),
    },
  }
}
