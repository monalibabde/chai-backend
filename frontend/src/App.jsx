/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios, { AxiosError } from "axios";

import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

useEffect(() => {
  axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data)
  }
)
}
)

  return (
   <>
   <h1>Chai and full stack | Youtube</h1>
   <p>Jokes: {jokes.length}</p>

   {
    jokes.map((joke) => (
      <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
      </div>

    )
  )

}
   </>
  )
}

export default App
