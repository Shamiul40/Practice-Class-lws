
import { useState } from 'react'
import './App.css'
import Posts from './Components/Posts'
import initialValue from "../src//db/Data"

function App() {
  const [posts, setPosts] = useState(initialValue)


  return (
  
      <div className='w-11/12 text-xl  mx-auto my-5 h-screen '>
           <h1 className='text-4xl font-bold py-4'>Api Request with Axios</h1>
           <hr />
        <Posts posts={posts}></Posts>
        <hr />
      </div>
  )
}

export default App
