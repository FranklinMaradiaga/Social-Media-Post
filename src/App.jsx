import { useState } from 'react'
import './App.css'
import Post from './Components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> Facebook! </h1>

      {/* CreatePostForm */}
        
      {/* Feed */}
        
      <Post />

      
    </div>
  )
}

export default App
