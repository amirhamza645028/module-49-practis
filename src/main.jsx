import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Main from './Layout/Main.jsx'
// import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Regisster/Register.jsx';
import Authprovider from './components/Provider/Authprovider.jsx';
import Mainn from './Layout/Mainn.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainn></Mainn>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
       {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      }
    ]
  },
]);
// ReactDOM.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
    
  </StrictMode>,
)
