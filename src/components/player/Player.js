import React , { useRef } from 'react';
import { useParams , useLocation } from 'react-router-dom';
import './Player.css';
import { UseVideoPlayer } from './UseVideoPlayer';

export const Player = () => {

  const {movieId} = useParams();

  const location = useLocation();

  const fullPath = `http://75.46.245.204:10913${location.state.videoURL}?X-Plex-Token=1rYWat5i52WxjT9aZ82s`;

  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
  } = UseVideoPlayer(videoElement);

  return (
    <div className='container'>
      <div className='video-wrapper'>
        <video
          src={fullPath}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className='controls'>
          <div className='actions'>
            <button onClick={togglePlay}>
              { !playerState.isPlaying ? (
                <i className='bx bx-play'><img className='bx-icon play-icon' src='./images/playicon.png' /></i>
              ) : (
                <i className='bx bx-pause'><img className='bx-icon pause-icon' src='./images/pauseicon.png' /></i>
              )}
            </button>
          </div>
          <input
            id='player-progress-bar'
            type='range'
            min='0'
            max='100'
            value={playerState.progress}
            onChange={(e) => {handleVideoProgress(e)}}
          />
          <button className='mute-btn' onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className='bx bxs-volume-full'><img className='bx-icon unmuted-icon' src='./images/unmutedicon.png' /></i>
            ) : (
              <i className='bx bxs-volume-mute'><img className='bx-icon muted-icon' src='./images/mutedicon.png' /></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};