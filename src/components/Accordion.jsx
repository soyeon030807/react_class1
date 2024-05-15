import React from 'react';
import {Link} from "react-router-dom";
import {MdCloseFullscreen} from "react-icons/md";
import {FaPen} from "react-icons/fa";

export default function Accordion({...rest}) {
    // 프롭스 받아오기
    const {title, details, posts, date, color, onClose} = rest;

    // Modal Close
    const closeModal = () => onClose();

    return (
        <div className="modal" style={{background: color}}>
            <div className="btn-wrap flex justify-between item-center">
                <Link to="/"><FaPen/></Link>
                <button className="close-btn" onClick={closeModal}>
                    <MdCloseFullscreen/>
                </button>
            </div>
            <p className="date">{date[title]}</p>
            <h4>{posts[title]} </h4>
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