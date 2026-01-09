
import { useState } from 'react'
import './App.css'
import Posts from './Components/Posts'
import initialValue from "../src//db/Data"
import AddPost from './Components/AddPost'

function App() {
  const [posts, setPosts] = useState(initialValue)

  const onAddPost =(newPost)=>{
    const id = posts.length ? (Number(posts[posts.length - 1].id)) : 1
    
    setPosts([
      ...posts,
      {
        id,
        ...newPost
      }
    ])
  }

  return (
  
      <div className='w-11/12 text-xl  mx-auto my-5 h-screen '>
           <h1 className='text-4xl font-bold py-4'>Api Request with Axios</h1>
           <hr />
        <Posts posts={posts}></Posts>
        <hr />
        <AddPost onAddPost={onAddPost}></AddPost>
      </div>
  )
}

export default App
