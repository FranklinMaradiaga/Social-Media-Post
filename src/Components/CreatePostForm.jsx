import React, { useState } from 'react'

const CreatePostForm = ({onNewSubmit}) => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmitForm = (event) => {

    event.preventDefault()

    if (!title || !content) {
      alert("Name and URL Required!")
    }
    else {
      onNewSubmit({ title: title, content: content })
    }
  }

  return (
    <form onSubmit={ handleSubmitForm }>

        <label for="title"> Title </label>
        <input type="text" id="content" name="title" onChange={ handleTitleChange }/>

        <br></br>

        <label for="content">Last name: </label>
        <input type="text" id="content" name="content" onChange={ handleContentChange }/>

        <br></br>

        <input type="submit" value="Submit"></input>

        <br></br><br></br>
    </form>
  )
}

export default CreatePostForm