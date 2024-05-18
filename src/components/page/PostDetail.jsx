import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Comments from "../Comments";
import posts from "../../data/posts.json";
import PageLayout from "./PageLayout";

export default function PostDetail() {
    /* url 에서 값 읽어와 변수에 저장 */
    const params = useParams();
    
    /*
     * json 데이터에서 item.id, url 파라미터의 id가 일치한것을 찾아 변수에 저장
     * 구조분해 할당을 사용해 post 객체에서 제목, 날짜, 컨텐츠를 가져옴
     **/
    const post = posts.find(item => item.id === +params.id);
    const {title, date, content} = post

    /* 코멘트 상태를 저장하는 상태 - 기본값 배열 */
    const [comment, setComment] = useState([]);

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