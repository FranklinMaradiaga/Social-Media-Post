import React from 'react'
import Message from './Message'
import Post from './Post'


const Feed = ( {data} ) => {

  const renderPosts = () => {
    return (
      data.map(d => (
        <Message content={d.content} author={d.author} date={d.date} delivered={d.delivered} />
      ))
    )
  }

  const renderNewPost = () => {
    console.log("HERE", data)
     return (
      data.map(d => (
        <Post title={d.title} content={d.content} />
      ))
    )
  }

  return (
    <div>
        <h2> POSTS: </h2>
        {renderNewPost()}
    </div>
  )
}

export default Feed