import React from 'react';
import YouTube from 'react-youtube';
import styles from './lpag.module.css';
import { Link } from 'react-router-dom';

function Pag() {
  // Opções do Player
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className={styles.headerStyle}>
      <h3 className={styles.logoStyle}>GAMIFICAÇÃO</h3>
        <nav className={styles.navStyle}>
          <Link to="/video"><button className={styles.buttonStyle}>Video</button></Link>
          <Link to="/sobre"><button className={styles.buttonStyle}>Sobre</button></Link>
          <Link to="/contato"><button className={styles.buttonStyle}>Contato</button></Link>
        </nav>
      </header>

      <div className={styles.contents}>

              {/* Conteúdo */}
      <div className={styles.contentStyle}>
        {/* Seu conteúdo criativo aqui */}
        <h1>Bem-vindo à Gamificação</h1>
        <p>Nesta plataforma, você aprenderá de forma fácil e divertida as dinâmicas do dia a dia da empresa</p>
      </div>

      {/* Vídeo do YouTube */}
      <div className={styles.VidGami}>
        <YouTube
          videoId="XzLUcTLMqks"  // Substitua pelo ID do vídeo desejado
          opts={opts}
        />
      </div>

      </div>

    </div>
  );
}

export default Pag;
