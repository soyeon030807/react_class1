import React from 'react';
import LikeButton from "./LikeButton";
import {Link} from "react-router-dom";

export default function PostList({...rest}) {
    const {posts, like, setLike} = rest;

    const handleToggleLike = (index) => {
        const newLikes = [...like];
        newLikes[index] = !newLikes[index];
        setLike(newLikes);
    };

    return (
        <ul className="post-list grid">
            {posts.map((post, index) => (
                <li
                    key={post.id}
                    className="post-item col-4 row-12"
                >
                    <Link to={`/posts/${post.id}/${post.title}`}>
                        <div className="img-wrap">
                            <img src={post.img} alt="블로그 타이틀 이미지"/>
                        </div>
                        <h4>{post.title}</h4>
                        <div className="info-wrap flex item-center">
                            <p className="date">{post.date}</p>
                            <LikeButton like={like[index]} onToggle={() => handleToggleLike(index)}/>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}