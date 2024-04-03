import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'
import PagesToRead from './Pages/PagesToRead.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import BookDetails from './Components/BookDetails.jsx'
import { Toaster } from 'react-hot-toast'
import Read from './Components/Read.jsx'
import Wishlish from './Components/Wishlish.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
// import PropTypes from 'prop-types';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader : () => fetch('/Jsondata.json')
        
      },
      {
        path: '/ListedBooks',
        element : <ListedBooks></ListedBooks>,
        loader : () => fetch('/Jsondata.json'),
        children:[
          {
            index : true,
            element : <Read></Read>,
            loader : () => fetch('/Jsondata.json'),
          },
          {
            path:'wishlist',
            element: <Wishlish></Wishlish>,
            loader : () => fetch('/Jsondata.json'),
          }
        ]
      },
      
      {
        path: '/PagesToRead',
        element : <PagesToRead></PagesToRead>,
        loader : () => fetch('./Jsondata.json')
      },
      {
        path: '/bookdetails/:id',
        element: <BookDetails></BookDetails>,
        loader : () => fetch('/Jsondata.json')
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
 
)
