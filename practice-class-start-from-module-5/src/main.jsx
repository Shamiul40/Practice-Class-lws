import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Error from './Error'
import Contact from './Contact'
import { getContactLoader, getContactsLoader } from './loaders/contactLoaders'
import { createContactAction } from './actions/contactsAction'
import EditContact from './actions/EditContact'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root></Root>,
    errorElement: <Error />,
    loader : getContactsLoader,
    action: createContactAction,
    children : [
      {
        path : "/contacts/:contactId",
        loader :getContactLoader,
        element : <Contact></Contact>,
      },
      {
        path : "/contacts/:contactId/edit",
        loader :getContactLoader,
        element : <EditContact></EditContact>,
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
