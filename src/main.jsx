import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Post from './Post/Post.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <App />,
  },
  {
    path: '/posts/:postId',
    element: <Post />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
