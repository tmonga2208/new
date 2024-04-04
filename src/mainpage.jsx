import React, { useState, useEffect } from "react";
import styles from "./css/mainpage.module.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function More1(props){
    const [username, setUsername] = useState('');
    const db = getFirestore();
    useEffect(() => {
        const fetchUsername = async () => {
            if (props.userId) {
                const docRef = doc(db, 'users', props.userId);
                const docSnap = await getDoc(docRef);
    
                if (docSnap.exists()) {
                    setUsername(docSnap.data().username);
                } else {
                    console.log("No such document!");
                }
            }
        };
        fetchUsername();
    }, [db, props.userId]);
    return (
        <div className={styles.max_con}>
            <div className={styles.imgcon}>
                <img className={styles.book_img} src={props.img} />
            </div>
                <div className={styles.book_info}>
                     <h1 className={styles.book_title}>{props.title}</h1>
                     <h3 className={styles.book_author}>{props.author}</h3>
                    <div className={styles.book_in}>
                     <h3>Summary</h3>
                     <p className={styles.book_summary}>{props.summary}</p>
                    </div>
                    <div className={styles.rev}>
                       <h1>Reviews</h1>
                       <h2 className={styles.usname}>{username}</h2>
                       <p className={styles.com_rev}>{props.comreview}</p>
                    </div>
                </div>
                <div className={styles.bout}>
                    <div className={styles.bigbout}>
                    <a href={props.read} target="_blank"><button className={styles.btn_1}>Read</button></a>
                    </div>
                    <div className={styles.smallbout}>
                    <a href={props.bu_y} target="_blank"><button className={styles.btn_2}>Buy</button></a>
                    <a href={props.review} target="_blank"><button className={styles.btn_3}>Review</button></a>
                    </div>
                </div>
        </div>
    );
}

export default More1;