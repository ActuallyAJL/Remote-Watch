import React, { useState, useEffect } from "react";

export const UseVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    volume: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause(); console.log(videoElement)
    }, [playerState.isPlaying, videoElement]);
    
    useEffect(() => {
      playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }, [playerState.isMuted, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleChangeVolume = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.volume = manualChange;
    console.log(videoElement.current.volume)
    setPlayerState({
      ...playerState,
      volume: manualChange
    });
  }

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    handleChangeVolume
  };
};
