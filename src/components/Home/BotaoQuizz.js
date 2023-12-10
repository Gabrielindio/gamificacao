import React from 'react';
import styles from './BotaoQuizz.module.css';
import { Link } from 'react-router-dom';

export default function BotaoQuizz() {
  return (

        <div className={styles.BotaoQuizz}>
            <div>
              <Link to="/quizz"><button>Iniciar Quiz</button></Link>
            </div>
        </div>

  );
}
