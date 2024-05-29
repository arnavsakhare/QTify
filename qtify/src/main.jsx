import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import AlbumPage from './pages/AlbumPage/AlbumPage.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<HomePage />}/>
      <Route path="/album/:albumId" element={<AlbumPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
