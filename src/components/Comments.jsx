import React, {useState} from 'react';

export default function Comments({comment, setComment}) {
    const [input, setInput] = useState('');
    const handleChange = (e) => setInput(e.target.value);

    const handleClick = (e) => {
        e.preventDefault(); // 폼 전송 막기
        comment.push(input)
        setComment([...comment])
    }

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                placeholder="댓글을 작성하세요"
            />
            <button onClick={handleClick}>
                등록하기
            </button>
        </form>
    );
}