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
        <ul className="post-list grid">
            {postTitle.map((post, index) => (
                <li className="post-item col-4 row-12" key={index}>
                    <div>이미지 섹션</div>
                    <h4 onClick={() => toggleModal(index)}>{post}</h4>
                    <div className="info-wrap flex item-center">
                        <p className="date">{date[index]}</p>
                        <LikeButton like={like[index]} onToggle={() => handleToggleLike(index)}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}