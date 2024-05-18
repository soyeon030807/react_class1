import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

export default function PageLayout({children}) {
    return (
        <div className="container flex flex-col">
            <Header title="💜소연이의 블로그💜"/>
            {children}
            <Footer/>
        </div>
    );
}