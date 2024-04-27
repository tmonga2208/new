import React from 'react';
import styles from './css/book_component.module.css';

function BookComponent({ isSelected, onSelect, head1,head2, l1, l2, l3 }) {
  const text = isSelected ? 'Selected' : 'Select';

  return(
    <div className={styles.card}>
      <h1 className={styles.head1}>{head1}</h1>
      <h2 className={styles.head2}>{head2}</h2>
      <ul className={styles.list}>
        <li>{l1}</li>
        <li>{l2}</li>
        <li>{l3}</li>
      </ul>
      <button className={`${styles.btn} ${isSelected ? styles.selected : ''}`} onClick={onSelect}>
        {text}
      </button>
    </div>
  );
}

export default BookComponent;