
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagestoRead from './pages/PagestoRead.jsx'
import MainLayout from './layouts/MainLayout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        // loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/pagestoread',
        element: <PagestoRead></PagestoRead>,
      },
      // {
      //   path: '/listedbooks',
      //   element: <PagestoRead></PagestoRead>,
      // }

    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <RouterProvider router={router} />
  </>
)
