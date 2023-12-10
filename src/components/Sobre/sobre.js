import React from "react";
import styles from './sobre.module.css';

function Sobre(){
    return (
        <div>
            <h4 className={styles.sobre}>SOBRE</h4>
            <div className={styles.text}>
            <p className={styles.frase}>Somos uma trinca imparável de mentes inovadoras do Centro Universitário Una, unidos por uma paixão ardente por games e uma missão épica: transformar o aprendizado em uma jornada emocionante!</p>
            <p className={styles.frase}>👨‍💻 Gabriel, o Estrategista Digital: Com um cérebro afiado e habilidades de programação que desafiam a lógica, Gabriel é o mestre por trás dos códigos que tornam nossa plataforma única. Sempre um passo à frente, ele transforma desafios em conquistas digitais.</p>
            <p className={styles.frase}>🎨 Paulo, o Arquiteto da Experiência: Paulo é o artista visionário que dá vida à nossa plataforma. Seja através de designs intuitivos ou personagens cativantes, ele transforma conceitos abstratos em realidade visual, proporcionando uma experiência imersiva aos usuários.</p>
            <p className={styles.frase}>🤓 Leandro, o Guru do Conhecimento: Leandro é o cérebro por trás do conteúdo educacional gamificado. Com uma paixão insaciável pelo aprendizado, ele traduz conceitos complexos em desafios envolventes, transformando cada lição em uma conquista no mundo dos jogos.</p>
            <p className={styles.frase}>Juntos, formamos uma aliança imbatível, criando uma plataforma de gamificação que redefine o modo como aprendemos. Preparados para embarcar nessa jornada conosco? 🚀🎮 #MentesLúdicas #EducaçãoInovadora</p>
            </div>
        </div>
    )

}

export default Sobre