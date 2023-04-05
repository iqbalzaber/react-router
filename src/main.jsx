import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Fast from './component/Fast/Fast';
import Friends from './component/friends/Friends';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Post from './component/Post/Post';
import PostDetail from './component/PostDetail/PostDetail';


// const router = createBrowserRouter([
//   {
//      path: '/',
//      element: <App></App>
// },
// {
//   path:'/about',
//   element: <About></About>
// },
// {
//   path:'/contact',
//   element: <Contact></Contact>
// }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:<Fast></Fast> 
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:frienId',
        element: <FriendDetail></FriendDetail>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'post',
        element: <Post></Post>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'posts/:PostId',
        element: <PostDetail></PostDetail>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'Contact',
        element: <Contact></Contact>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
