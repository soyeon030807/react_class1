import React from 'react';
import {useParams} from "react-router-dom";
import Comments from "../Comments";
import posts from "../../data/posts.json";

export default function PostDetail() {
    const params = useParams();
    const post = posts.find(item => item.id === +params.id);
    const {title, date, content} = post
    console.log(post)

    return (
        <main>
            <section>
                <h2>{title}</h2>
                <div>작성일: {date}</div>
            </section>
            <section>
                <h3>{content.intro.title}</h3>
                <article>
                    {content.intro.text}
                </article>
            </section>
            {content.travel.map(item => (
                <section key={item.title}>
                    <h3>{item.title}</h3>
                    <article>
                        {item.items}
                    </article>
                </section>
            ))}
            <section>
                <Comments/>
            </section>
        </main>
    );
}