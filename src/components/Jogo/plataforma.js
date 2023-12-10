import React from 'react';
import { Link } from 'react-router-dom';
import styles from './plataforma.module.css';

export default function Voltarcurso() {
  return (  
        <div>
            <div>
              <Link to="/"><button  className={styles.plataforma}>Voltar curso</button></Link>
            </div>
        </div>

  );
}
