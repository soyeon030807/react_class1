import React from 'react';

export default function PageLayout({children}) {
    return (
        <div className="container flex flex-col">
            {children}
        </div>
    );
}