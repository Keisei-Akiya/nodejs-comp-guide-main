import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/test')
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className='App'>
      <h1>MERN Stack App</h1>
      <p>Message from server: {message}</p>
    </div>
  )
}

export default App
