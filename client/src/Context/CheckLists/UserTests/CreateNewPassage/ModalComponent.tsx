import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
interface ModalComponentProps {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}
const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;