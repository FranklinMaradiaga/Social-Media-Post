import React, { useState } from 'react'

const ReplyForm = ({handleComments}) => {
  const [reply, setReply] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    handleComments(reply)
  }

  return (
    <form onSubmit={onSubmit}>
      
      <textarea placeholder='Add Your Reply!' onChange={(event) => {
        setReply(event.target.value)
      }} value={reply}/>

      <br></br>

      <input type='submit' />

      <br></br>
      <br></br>

    </form>
  )
}

const ReplyList = ({data}) => {

  console.log("Whats the data?", data)
  
  const renderComments = () => {
    return (
      data.map(d => (
        <p key={d}> {d} </p>
      ))
    )
  }

  return (
    <div>
       {renderComments()}
    </div>
  )

}

const Post = ( {title, content} ) => {

  const [likes, setLikes] = useState(0);

  const handleLike = (event) => {
    console.log("Liked!!!!")
    setLikes(likes + 1)
  }

  const [comments, setComments] = useState([])

  const handleComments = (comment) => {
    setComments([...comments, comment])
  }

  return (
    <div className='Post'>
        <h3> {title} </h3>
        <p> {content} </p>

        <p> Likes: {likes} </p>
        <button onClick={handleLike}> Like </button>

        <p> Comments: </p>
        <ReplyForm handleComments={handleComments}/>
        <ReplyList data={comments} />
    </div>
  )
}

export default Post