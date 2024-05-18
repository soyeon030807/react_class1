import React, { useState } from 'react';

const useModal = () => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(null);

    const toggleModal = (index) => {
        if (modal && index === title) {
            setModal(false);
            setTitle(null);
        } else {
            setModal(true);
            setTitle(index);
        }
    };

    const closeModal = () => {
        setModal(false);
        setTitle(null);
    };

    return {
        modal,
        title,
        toggleModal,
        closeModal,
    };
};

export default useModal;