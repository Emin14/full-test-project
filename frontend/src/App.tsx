import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const API_URL = import.meta.env.VITE_API_URL || ''
import './App.css'

type Tour =  {
    id: number,
    name: string,
    location: string,
    price: number,
    rating: number,
    description: string,
    image: string,
    category: string,
  }

function App() {
  const [count, setCount] = useState(0)
  const [tours, setTours] = useState<Tour[]>([])

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/api/tours`)
    const {data} = await res.json()
    setTours(data)
  }

  useEffect(() => {
   fetchData()
  }, [])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          New6
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {tours.map(tour => (
          <p>
            <span>{tour.name}</span> 
            <span> в </span> 
            <span>{tour.location}</span> 
          </p>
        ))}
      </div>
    </>
  )
}

export default App
