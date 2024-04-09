import React from "react";
import styles from './css/aboutus.module.css';
import NavBar from './navbar';
import profimg from './img/profimg.png';
import Footer from "./footer";

function AboutUs(){
    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
              <h1 className={styles.title}>About Us</h1>
              <p>Our mission is to provide the best experience for our customers. We have a wide range of books and we are sure you will find something you like. We have books for all ages and all genres. We have a team of experts who are always ready to help you. We are always looking for ways to improve our services and we welcome your feedback. We hope you enjoy your experience with us.</p>
              <h1 className={styles.team}>Our Team</h1>
              <p>Get to know the book lover behind The StoryTime</p>
              <div className={styles.teamin}>
                <img className={styles.teamimg} src={profimg}/>
                <div className={styles.teamtext}>
                <h3 className={styles.name}>Tarun Monga</h3>
                <h6 className={styles.role}>Founder</h6>
                <p className={styles.bio}>In the bustling heart of the city, nestled amidst towering skyscrapers and busy streets, a cozy haven emerged: StoryTime. It began as a simple idea, born from a passion for literature and a desire to ignite the joy of reading in others. With shelves lined with books of every genre and cozy nooks inviting exploration, StoryTime beckoned book lovers from far and wide. From timeless classics to contemporary bestsellers, there was a story waiting for every reader. Guided by a love for storytelling, this side project blossomed into a sanctuary where imaginations soared, friendships formed, and the magic of books came alive, one page at a time.</p>
                </div>
              </div>
           </div>
              <Footer/>
       </div>
    );
}

export default AboutUs;