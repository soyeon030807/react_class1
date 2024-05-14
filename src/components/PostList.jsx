import React from 'react';

export default function PostList({...rest}) {
    const {postName, like, setLike, date, toggleModal} = rest;
    return (
        <ul>
            {postName.map((a, i) => (
                <li className="list" key={i}>
                    <h4 onClick={() => toggleModal(i)}>
                        {postName[i]}
                        <span onClick={(e) => {
                            e.stopPropagation();
                            let new하트 = [...like];
                            new하트[i]++;
                            setLike(new하트);
                        }}> 🤍 {like[i]} </span>
                    </h4>
                    <p className="date">{date[i]}</p>
                </li>
            ))}
        </ul>
    );
}