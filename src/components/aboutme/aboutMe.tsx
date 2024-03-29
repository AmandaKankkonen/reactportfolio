import React from 'react';
import styles from './aboutMe.module.scss';
import photo from './photos/image1.jpg';
import gif from './photos/hiwave.gif'


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo} alt='myphoto'/>
      </div>
      <div className={styles.content}>
        <p>Hello, my name is</p>
        <h1>Amanda Kankkonen</h1>
        <p>Originally from the US, I am a recent graduate of Varia ammattikoulu in 
        Vantaa, Finland. During my programming studies at Varia I have been efficiently 
        taught how to create unique, engaging games using C# and Unity - both independently 
        and in collaboration with my colleagues utilizing Agile/Scrum methods. I've learned 
        to make websites that are not only attractive, but functional on both the front and 
        back end. Most of my framework experience is with React, and I prefer VScode. In addition
        to software development, I also have experience with hardware, building computers and 
        networking. I received a 5 in all my core classes, and performed exceptionally well 
        in leadership positions during my internship. I am available for full-time work. Native 
        English, Fluent Finnish.
        <br></br>Currently learning: C++, Python
        </p>
          <h2>My language experience includes:</h2>
        <p>Java, Javascript, Typescript, React, C#, C, HTML & CSS/SASS, Lua. Light experience 
        with SQL/NoSQL.</p>
          <h2>Some backend framework experience including:</h2>
        <p>Node.js/Express, REST, MongoDB</p>
      </div>
      <div className={styles.gif}>
        <img src={gif} alt='wavegif'/>
      </div>
    </div>
  )
}

export default AboutMe