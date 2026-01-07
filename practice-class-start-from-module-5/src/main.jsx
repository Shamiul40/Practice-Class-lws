import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Error from './Error'
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root></Root>,
    errorElement: <Error />,
    children : [
      {
        path : "/contacts/:contactId",
        element : <Contact></Contact>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
