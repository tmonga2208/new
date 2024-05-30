import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, addDoc } from 'firebase/firestore';
import  firestore  from './sinup2.js'; // Assuming firebase is initialized in this file
import css from './css/community.module.css';

function GroupList({ setSelectedGroup }) {
  const groupsRef = collection(firestore, 'groups');
  const [groups] = useCollectionData(groupsRef, { idField: 'id' });
  const [groupName, setGroupName] = useState('');

  const createGroup = async () => {
    if (groupName.trim()) {
      await addDoc(groupsRef, { name: groupName });
      setGroupName('');
    }
  };
  console.log(groups);

  return (
    <div className={css.groupList}>
      <h2>Groups</h2>
      <ul>
        {groups && groups.map(group => (
          <li key={group.id} onClick={() => setSelectedGroup(group.id)}>{group.name}</li>
        ))}
      </ul>
      <input 
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)} 
        placeholder="New group name" 
      />
      <button onClick={createGroup}>Create Group</button>
    </div>
  );
}

export default GroupList;
