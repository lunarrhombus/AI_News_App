import React, { useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef();

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={playAudio}>Play</button>
    </div>
  );
};

export default AudioPlayer;
