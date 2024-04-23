import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home/Home.jsx';
import Allnotes from './layouts/allnotes/Allnotes.jsx';
import Viewnote from './pages/Notes/Viewnote.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/notes',
    element: <Allnotes></Allnotes>,
    loader: () => fetch('http://localhost:5000/notes')
  },
  {
    path: '/notes/:id',
    element: <Viewnote></Viewnote>,
    loader: ({ params }) => fetch(`http://localhost:5000/notes/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
