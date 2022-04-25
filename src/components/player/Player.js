import React , { useRef } from 'react';
import './Player.css';
import { UseVideoPlayer } from './UseVideoPlayer';
import video from '../assets/video.mp4';

export const Player = () => {

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
          src={video}
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