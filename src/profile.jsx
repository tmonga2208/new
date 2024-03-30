import React, { useState, useEffect } from 'react';
import { getCurrentUser, updateUser } from './api.js'; // replace with your actual API functions

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getCurrentUser();
            setName(user.name);
            setEmail(user.email);
            setImageUrl(user.imageUrl);
        };
        fetchUser();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImageUrl('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateUser({ name, email, imageUrl });
    };

    return (
        <div>
            <h1>Profile</h1>
            <img src={imageUrl} alt="Profile" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Profile Image:
                    <input type="file" onChange={handleImageUpload} />
                </label>
                <input type="submit" value="Update Profile" />
            </form>
        </div>
    );
}

export default Profile;