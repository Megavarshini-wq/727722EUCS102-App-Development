import React from 'react';
import './VideoModal.css';

const VideoModal = ({ showModal, onClose, children }) => {
    if (!showModal) return null;

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="video-modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default VideoModal;
