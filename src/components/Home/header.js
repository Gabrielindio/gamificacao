import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <img className={styles.logo}></img>
        <h6 className={styles.curso}>CURSO GAMIFICADO - MODULO 01 VERSÃO 2023</h6>
        <p className={styles.suporte}>Suporte</p>
        <button className={styles.compartilhar}>Compartilhar</button>
      </nav>
    </div>
  );
};

export default Header;
  