import React from 'react';
import ReactDOM from 'react-dom';

// Style
import './styles/index.css';

// Report Web Vitals
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Page Components
import App from './App';
import About from "./components/page/About";
import Posts from "./components/page/Posts";
import PostDetail from "./components/page/PostDetail";
import Home from "./components/page/Home";

const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/about', element: <About/>},
            {path: '/posts', element: <Posts/>},
            {path: '/posts/:id', element: <PostDetail/>},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('blog'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();