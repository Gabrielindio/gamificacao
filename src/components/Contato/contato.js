import React from "react";
import styles from './contato.module.css';

function Sobre(){
    return (
        <div>
            <h4 className={styles.sobre}>Contato</h4>
            <div className={styles.text}>
            <p className={styles.frase}>Empresa: NexusTech Solutions</p>
            <p className={styles.frase}>E-mail: alexia.ventura@nexustech.com</p>
            <p className={styles.frase}>Telefone: +55 123 456 7890</p>
            <p className={styles.frase}>LinkedIn: linkedin.com/in/alexia-ventura</p>
            <p className={styles.frase}>Bio: Alexia é uma visionária no mundo da inovação digital, liderando a equipe na NexusTech Solutions. Com uma mente criativa e uma abordagem estratégica, ela está sempre em busca de parcerias inovadoras. Se você está pronto para levar sua plataforma de gamificação a novos patamares, Alexia é a pessoa com quem você quer conversar. Conecte-se e vamos transformar ideias em realidade! 🚀✨</p>
 
            </div>
        </div>
    )

}

export default Sobre