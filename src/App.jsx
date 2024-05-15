import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Header title="💜소연이의 블로그💜"/>
            <Outlet/>
            <Footer/>
        </>
    )
}