import React from 'react';
import LikeButton from "./LikeButton";

export default function PostList({...rest}) {
    const {postTitle, date, like, setLike, toggleModal} = rest;
    const handleToggleLike = (index) => {
        const newLikes = [...like];
        newLikes[index] = !newLikes[index];
        setLike(newLikes);
    };

    return (
        <ul className="post-list">
            {postTitle.map((post, index) => (
                <li className="post-item" key={index}>
                    <h4 onClick={() => toggleModal(index)}>{post}</h4>
                    <p className="date">{date[index]}</p>
                    <LikeButton like={like[index]} onToggle={() => handleToggleLike(index)}/>
                </li>
            ))}
        </ul>
    );
}