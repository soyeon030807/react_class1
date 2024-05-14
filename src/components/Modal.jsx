import React from 'react';

export default function Modal({...rest}) {
    // 프롭스 받아오기
    const {title, details, postTitle, date, color, onClose} = rest;

    // Modal Close
    const closeModal = () => onClose();

    return (
        <div className="modal" style={{background: color}}>
            <button className="close-btn" onClick={closeModal}>x</button>
            <h4>{postTitle[title]} </h4>
            <p className="date">{date[title]}</p>
            {details[title] && (
                <div>
                    <p>{details[title].content} </p>
                    <p>{details[title].furtherClarification} </p>
                    <p>{details[title].furtherClarification} </p>
                </div>
            )}
        </div>
    );
}