import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";

export default function LikeButton({like, onToggle}) {
    const handleClick = () => onToggle()

    return (
        <div className="like-btn">
            {like ? <FaHeart className="image"/> : <FaRegHeart/>}
            <span className="btn-label" onClick={handleClick}>
                좋아요
            </span>
        </div>
    );
}