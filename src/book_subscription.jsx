import React ,{useState ,useEffect} from "react";
import styles from "./css/book_subscription.module.css";
import BookComponent from "./book_component";
import BookSS from "./Booksss";
import NavBar from "./navbar";
import { db } from "./sinup.js";
import { collection, addDoc, updateDoc, query, where } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { onSnapshot } from "firebase/firestore";
import { doc, setDoc } from 'firebase/firestore';
import Footer from "./footer.jsx"

function BookSubscription( uId , isSubscribed) {
  const [selectedTier, setSelectedTier] = useState(null);

  useEffect(() => {
    const userDoc = doc(db, 'subscriptions', uId.toString());

    const unsubscribe = onSnapshot(userDoc, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const tierName = data.tier;
        if (tierName !== undefined) {
          const tierIndex = BookSS.findIndex(book => book.head1 === tierName);
          if (tierIndex !== -1) {
            setSelectedTier(tierIndex);
            console.log('Selected tier:', tierName);
          } else {
            console.log('Tier stored in Firebase does not match any tier in BookSS array');
          }
        } else {
          console.log('No tier is stored in Firebase');
        }
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [db, uId]);

  const handleSelect = (tier) => {
    if (tier || isSubscribed) {
      setSelectedTier(tier);
    }
  };

const handlePayNow = async () => {
  if (selectedTier !== null) {
    const tierName = BookSS[selectedTier].head1; // Get the tier name
    console.log(`Selected tier: ${tierName}`); // Log the selected tier

    const userDoc = doc(db, 'subscriptions', uId.toString());
    console.log(`Updating tier for user: ${uId}`); // Log the user ID

    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      // If the document does not exist, create it
      await setDoc(userDoc, { tier: tierName });
    } else {
      // If the document exists, update it
      await updateDoc(userDoc, {
        tier: tierName, // Update the tier name
      });
    }

    console.log('Tier updated successfully'); // Log the success message
  } else {
    console.log('No tier selected'); // Log the message if no tier is selected
  }
};

  return(
    <>
    <NavBar/>
    <div className={styles.container}>
      {BookSS.map((book, index) => (
        <BookComponent
          key={index}
          isSelected={selectedTier === index}
          onSelect={() => handleSelect(index)}
          head1={book.head1}
          head2={book.head2}
          l1={book.l1}
          l2={book.l2}
          l3={book.l3}
        />
      ))}
    </div>
    <div className={styles.payment}>
      <button className={styles.paybtn} onClick ={handlePayNow}>Pay Now</button>
    </div>
    <Footer/>
    </>
  )
}

export default BookSubscription;