import React, {useState} from 'react';

/**
 * Comments 컴포넌트는 사용자가 댓글을 입력하고 등록할 수 있는 입력 필드와 버튼을 제공.
 * @param {Array} comment - 댓글 목록을 나타내는 배열.
 * @param {Function} setComment - 댓글 상태를 업데이트하는 함수.
 * @returns {React.Element} 댓글 입력 폼.
 */
export default function Comments({comment, setComment}) {
    // 입력 상태를 관리
    const [input, setInput] = useState('');

    /**
     * handleChange 함수는 입력 필드의 값이 변경될 때 호출되어,
     * 입력 필드의 최신 값을 input state에 저장.
     * @param {React.ChangeEvent<HTMLInputElement>} e - 입력 필드의 이벤트 객체.
     */
    const handleChange = (e) => setInput(e.target.value);

    /**
     * handleClick 함수는 "등록하기" 버튼 클릭 시 호출되어,
     * 현재 input 값을 댓글 배열에 추가하고, comment 상태를 업데이트.
     * @param {React.MouseEvent<HTMLButtonElement>} e - 버튼 클릭 이벤트 객체.
     */
    const handleClick = (e) => {
        e.preventDefault();      // 폼 전송 막기
        comment.push(input)      // 현재 입력된 값을 댓글 목록에 추가
        setComment([...comment]) // 댓글 목록을 새 배열로 복사하여 상태를 업데이트
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