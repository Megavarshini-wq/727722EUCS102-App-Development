import React from 'react';
import './Modal.css';

const Modal = ({ showModal, onClose, pdfUrl }) => {
    if (!showModal) return null;

    return (
        <div className="pdf-modal-overlay">
            <div className="pdf-modal-content">
                <button className="pdf-modal-close" onClick={onClose} aria-label="Close modal">X</button>
                <div className="pdf-viewer">
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="100%"
                        title="PDF Viewer"
                        frameBorder="0"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
