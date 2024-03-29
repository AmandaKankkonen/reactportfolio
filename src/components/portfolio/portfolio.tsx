import React from 'react';
import styles from './portfolio.module.scss';

const Port: React.FC = () => {
  return (
    <div className={styles.container}>

      <h2>Portfolio:</h2>
      <div className={styles.links}>
        <a className={styles.link1} href=
        "https://github.com/varia-ict/varia-agile-20C-ryhma-1" 
        target='_blank' rel="noreferrer">
          Wolf Adventure Game - Collab
        </a>
        <a className={styles.link2} href=
        "https://github.com/AmandaKankkonen/ThePhantomFields" 
        target='_blank' rel="noreferrer">
          Phantom Fields(Java) - Co-project
        </a>
        <a className={styles.link3} href=
        "https://play.unity.com/u/AmandaKankkonen" 
        target='_blank' rel="noreferrer">
          WebGL Unity Play Games(C#)
        </a>
        <a className={styles.link4} href=
        "https://play.unity.com/mg/other/animal-playground-rescue" 
        target='_blank' rel="noreferrer">
          Animal Playground Rescue Game
        </a>
      </div>
    </div>
)};

export default Port