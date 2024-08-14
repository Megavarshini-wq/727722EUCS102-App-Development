import React, { useState, useEffect } from 'react';
import videoData from '../../video.json'; // Import the JSON file
import VideoModal from '../VideoModal/VideoModal'; // Import the existing VideoModal component
import './Portal.css'; // Ensure this CSS file is correctly linked

const Portal = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Filter videos that should be shown on the Portal page
    const portalVideos = videoData.video.filter(video => video.showOnPortal);
    setVideos(portalVideos);
  }, []);

  const openVideo = (url) => {
    setSelectedVideoUrl(url);
    setShowModal(true);
  };

  const closeVideo = () => {
    setSelectedVideoUrl(null);
    setShowModal(false);
  };

  return (
    <div className="portal-container">
      <h1 className="portal-title">LEARN WITH FUN</h1>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-item" onClick={() => openVideo(video.url)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
      {/* Render the VideoModal */}
      <VideoModal showModal={showModal} onClose={closeVideo}>
        {selectedVideoUrl && (
          <video src={selectedVideoUrl} controls autoPlay className="video-frame" />
        )}
      </VideoModal>
    </div>
  );
};

export default Portal;
