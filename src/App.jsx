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
        
      <Post content="This is a test post!" />
      <Post content="This is another test post!" />
      
    </div>
  )
}

export default App
