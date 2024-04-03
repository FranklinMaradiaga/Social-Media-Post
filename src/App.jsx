import { useEffect, useState } from 'react'
import './App.css'
import Post from './Components/Post'
import CreatePostForm from './Components/CreatePostForm'
import Feed from './Components/Feed'

function App() {

  const [formData, setFormData] = useState([])

  const handleSubmitForm = (data) => {
    setFormData([...formData, data])
    console.log("Im here: ", formData)
  }

  return (
    <div>
      <h1> Facebook! </h1>
      
      <CreatePostForm onNewSubmit={handleSubmitForm} />

      <Feed data={formData}/>
      
    </div>
  )
}

export default App
