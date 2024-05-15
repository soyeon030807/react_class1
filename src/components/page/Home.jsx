import {useState} from 'react';

// Components
import PostList from "../PostList";
import PageLayout from "./PageLayout";

// data (dummy)
import posts from "../../data/posts.json";

export default function Home() {
    const [like, setLike] = useState(new Array(posts.length).fill(false));
    console.log(posts)

    return (
        <PageLayout>
            <div className="contents-wrap">
                <main className="contents">
                    <PostList
                        posts={posts}
                        like={like}
                        setLike={setLike}
                    />
                </main>
            </div>
        </PageLayout>
    );
}