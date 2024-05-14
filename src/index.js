import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./components/page/About";
import Posts from "./components/page/Posts";
import PostDetail from "./components/page/PostDetail";
import {RouterProvider} from "react-router-dom";

const router = {
    path: '/', element: <App/>,
    children: [
        {path: '/about', element: <About/>},
        {path: '/posts', element: <Posts/>},
        {path: '/posts/:id', element: <PostDetail/>},
    ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();