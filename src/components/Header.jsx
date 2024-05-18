import React from 'react';
import {Link} from "react-router-dom";

/**
 * 페이지 헤더 컴포넌트
 * @param {string} title - 페이지 제목
 */
export default function Header({title}) {
    return (
        <div className="header-wrap col-12">
            <header className="header">
                <h2>
                    <Link to="/">{title}</Link>
                </h2>
                <div className="writing">
                    <Link to='/writing'>글쓰기</Link>
                </div>
            </header>
        </div>
    );
}