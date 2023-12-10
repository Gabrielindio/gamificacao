import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './video.module.css';
import Header from './header';
import BotaoQuizz from './BotaoQuizz';

function Video () {
  const [youtubeID, setYoutubeID] = useState('MSo-tNNul7M');

  const mainVideoOpts = {
    height: '500',
    width: '98%',
    playerVars: {
      autoplay: 0,
    },
  };

  const nextVideoData = [
    { id: "7pAK60ckbRY", description: "Descrição do Vídeo 1" },
    { id: "y4ryfXGUi7w", description: "Descrição do Vídeo 2" },
    { id: "-wrsG0IGc-M", description: "Descrição do Vídeo 3" },
  ];

  const onVideoEnd = (event) => {
    // Callback quando o vídeo principal terminar, você pode adicionar lógica aqui.
  };

  const onVideoClick = (videoId) => {
    setYoutubeID(videoId);
  };

  const onStartQuiz = () => {
    // Adicione a lógica para iniciar o quiz aqui
    console.log("Quiz iniciado!");
    // Por enquanto, apenas exibe uma mensagem no console
  };

  return (
    <>
      <Header />
      <div className={styles.video_container}>
        <div className={styles.main_video}>
          <YouTube videoId={youtubeID} opts={mainVideoOpts} onEnd={onVideoEnd} />
        </div>

        <div>

          <div className={styles.next_videos}>
            {nextVideoData.map((video, index) => (
              <div key={index} className={styles.next_video} onClick={() => onVideoClick(video.id)}>
                <div className={styles.text_box}>
                  <p>{video.description}</p>
                  <button className={styles.botueta} onClick={() => onVideoClick(video.id)}>Assistir Agora</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BotaoQuizz />
    </>
  );
}

export default Video;

