import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

/**
 * PageLayout 컴포넌트는 웹 페이지의 기본 레이아웃을 제공.
 * 레이아웃에는 상단에 헤더, 하단에 푸터가 포함되며, 중간 영역에는 자식 컴포넌트가 위치.
 *
 * @param {React.ReactNode} children - 페이지의 주 내용을 나타내는 자식 요소 또는 컴포넌트.
 * @returns {React.Element} 헤더와 푸터를 포함하는 페이지 레이아웃 컴포넌트를 렌더링.
 */
export default function PageLayout({children}) {
    return (
        <div className="container flex flex-col">
            <Header title="💜소연이의 블로그💜"/>
            {children}
            <Footer/>
        </div>
    );
}