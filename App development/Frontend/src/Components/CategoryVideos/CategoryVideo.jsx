import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';
import videoData from '../../video.json'; // Import the JSON file
import './CategoryVideo.css';

const CategoryVideos = ({ age }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(`Fetching videos for age ${age}`);
    
    // Filter videos based on the age category
    const filteredVideos = videoData.video.filter(video => video.category === age);
    setVideos(filteredVideos);
  }, [age]);

  const handleVideoClick = (videoUrl) => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page if not authenticated
      return;
    }
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  return (
    <div className="videos-container">
      <div className="videos-grid">
        {videos.map(video => (
          <div key={video.id} className="video-item" onClick={() => handleVideoClick(video.url)}>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <VideoModal showModal={showModal} onClose={() => setShowModal(false)}>
          <iframe
            src={selectedVideo}
            title="Video"
            className="video-frame"
            frameBorder="0"
            allowFullScreen
          />
        </VideoModal>
      )}
    </div>
  );
};

export default CategoryVideos;
