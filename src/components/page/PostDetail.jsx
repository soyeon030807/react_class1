import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Comments from "../Comments";
import posts from "../../data/posts.json";
import PageLayout from "./PageLayout";

export default function PostDetail() {
    const params = useParams();
    const post = posts.find(item => item.id === +params.id);
    const {title, date, content} = post

    const [comment, setComment] = useState([]);
    console.log(`PostDetail`)
    console.log(comment)
    console.log(`PostDetail`)

    return (
        <PageLayout>
            <main className="main-details flex flex-col">
                <section className="section-post">
                    <h2>{title}</h2>
                    <div>작성일: {date}</div>
                </section>
                <section className="section-post">
                    <h3>{content.intro.title}</h3>
                    <article>
                        {content.intro.text}
                    </article>
                </section>
                {content.travel.map(item => (
                    <section key={item.title} className="section-post">
                        <h3>{item.title}</h3>
                        <article>
                            {item.items}
                        </article>
                    </section>
                ))}
            </main>
            <section className="section-commnet">
                <Comments comment={comment} setComment={setComment}/>
                <ul>
                    {comment.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </PageLayout>
    );
}