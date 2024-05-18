import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";

/**
 * ikeButton 컴포넌트는 "좋아요" 상태를 표시하고, 클릭 이벤트에 따라 토글 동작을 수행
 *
 * @param {boolean} like - 현재 "좋아요"가 활성화되었는지 여부를 나타내는 boolean 값.
 * @param {Function} onToggle - "좋아요" 버튼을 클릭했을 때 실행되는 함수.
 * @returns {React.Element} "좋아요" 버튼 컴포넌트를 렌더링.
 */
export default function LikeButton({like, onToggle}) {
    const handleClick = () => onToggle()

    return (
        <div className="like-btn">
            {like ? <FaHeart className="image"/> : <FaRegHeart/>}
            <span className="btn-label" onClick={handleClick}>
                좋아요
            </span>
        </div>
    );
}