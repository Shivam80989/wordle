"use client"
import { useEffect, useState } from 'react'

import Wordle from './Components/Wordle'
// import Popup from './Components/Popup'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('https://wordle-api.cyclic.app/words')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution)
      })
  }, [setSolution])

  return (
    
    <div className="App">
      <h1>Wordle</h1>
      {/* <Popup/> */}
  
      {solution && <Wordle solution={solution} />}
    </div>
  )
}
export default App
