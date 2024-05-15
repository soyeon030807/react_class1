import React from 'react';
import {Link} from "react-router-dom";

export default function Header({title}) {
    return (
        <div className="header-wrap col-12">
            <header className="header">
                <h2>
                    <Link to="/">{title}</Link>
                </h2>
                <div className="writing">
                    <Link to='/'>글쓰기</Link>
                </div>
            </header>
        </div>
    );
}