import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";

export default function LikeButton({like, onToggle}) {
    const handleClick = () => onToggle()

    return (
        <span className="like-btn" onClick={handleClick}>
            {like ? <FaHeart/> : <FaRegHeart/>} 좋아요
        </span>
    );
}