import React from 'react';

export default function Modal(props) {
    const closeModal = () => {
        props.onClose();
    };

    return (
        <div className="modal" style={{background: props.color}}>
            <button className="close-btn" onClick={closeModal}>x</button>
            <h4> {props.postName[props.title]} </h4>
            <p className="date"> {props.date[props.title]} </p>
            {props.상세내용[props.title] && (
                <div>
                    <p> {props.상세내용[props.title].내용} </p>
                    <p> {props.상세내용[props.title].추가설명} </p>
                    <p> {props.상세내용[props.title].추가설명1} </p>
                </div>
            )}
            <button> 수정</button>
        </div>
    );
}