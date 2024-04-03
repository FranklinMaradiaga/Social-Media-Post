import React, { useState } from 'react'

const Message = ({content, author, date, delivered}) => {

  const [replies, setReplies] = useState([])

  const [likes, setLikes] = useState(0);

  const handleClick = (event) => {
    setLikes(likes + 1)
  }
  
  const handleReplies = (reply) => {
    setReplies([...replies, reply])
  }

  return (
    <div className='message-container'>
        <h3> {content} </h3>
        <h3> {author} </h3>
        <h4> {date} </h4>
        <h5> {delivered} </h5>

        <h5> Likes: {likes} </h5>

        <div>
            <button onClick={handleClick}> Likes </button>
        </div>

        <div>
          <h4> Replies </h4>
          <ReplyForm onNewReply={ (reply) => {
            setReplies([...replies, reply])
          } } />
          <ReplyList data={replies} />
        </div>
    </div>
  )
}

export default Message