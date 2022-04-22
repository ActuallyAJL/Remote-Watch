import React , { useRef } from 'react';
import './RemoteWatch.css';
import { UseVideoPlayer } from './modules/player/UseVideoPlayer';
import video from './modules/assets/video.mp4';

export const RemoteWatch = () => {

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
                <i className='bx bx-play'></i>
              ) : (
                <i className='bx bx-pause'></i>
              )}
            </button>
          </div>
          <input
            type='range'
            min='0'
            max='100'
            value={playerState.progress}
            onChange={(e) => {handleVideoProgress(e)}}
          />
          <button className='mute-btn' onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className='bx bxs-volume-full'></i>
            ) : (
              <i className='bx bxs-volume-mute'></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};