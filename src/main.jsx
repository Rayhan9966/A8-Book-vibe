
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagestoRead from './pages/PagestoRead.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/listedbooks',
    element: <ListedBooks></ListedBooks>,
  },
  {
    path: '/pagestoread',
    element: <PagestoRead></PagestoRead>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <RouterProvider router={router} />
  </>
)
