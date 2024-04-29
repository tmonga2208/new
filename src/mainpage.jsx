import React, { useState, useEffect } from "react";
import styles from "./css/mainpage.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { doc, collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./sinup";
import { auth } from "./sinup";

function More1(props){
    const [displayName, setDisplayName] = useState('');
    const [review, setReview] = useState('');
    const [submittedReviews, setSubmittedReviews] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setDisplayName(user.displayName);
                console.log(user.displayName);
            }
        });
        if (props.id) {
            const unsubscribe = onSnapshot(collection(doc(db, "books", props.id), "reviews"), 
                (snapshot) => {
                    const newReviews = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setSubmittedReviews(newReviews);
                    console.log(newReviews);  
                },
                (error) => {
                    console.error("Error fetching reviews: ", error);
                }
            );

            return () => unsubscribe();
        }
    }, [auth, db, props.id]);

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const submitReview = async () => {
        console.log('submitReview function called');
        const newReview = `${review}`;
        setReview('');
    
        if (props.id) {
            try {
                await addDoc(collection(doc(db, "books", props.id), "reviews"), {
                    displayName: displayName,
                    review: newReview
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    return (
        <div className={styles.max_con}>
            <div className={styles.imgcon}>
                <img className={styles.book_img} src={props.img} alt="pic" />
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
    {submittedReviews.map((review) => {
    console.log(review);
    return (
        <p key={review.id} className={styles.com_rev}>@{review.displayName}: {review.review}</p>
    );
})}
</div>
            <div>
                <h1>Add A Review!</h1>
                <textarea
                    className={styles.texta}
                    placeholder="Write your review here..."
                    value={review}
                    onChange={handleReviewChange}
                />
                <button className={styles.sub} onClick={submitReview}>Submit</button>
            </div>
            </div>
            <div className={styles.bout}>
                <div className={styles.bigbout}>
                    <a href={props.read} target="_blank" rel="noreferrer"><button className={styles.btn_1}>Read</button></a>
                </div>
                <div className={styles.smallbout}>
                    <a href={props.bu_y} target="_blank" rel="noreferrer"><button className={styles.btn_2}>Buy</button></a>
                    <a href={props.review} target="_blank" rel="noreferrer"><button className={styles.btn_3}>Review</button></a>
                </div>
            </div>
        </div>
    );
}

export default More1;