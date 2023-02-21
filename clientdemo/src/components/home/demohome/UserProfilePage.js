import React, { useState, useEffect } from 'react';

function UserProfilePage() {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState({});

    function handleUserIdChange(event) {
        setUserId(event.target.value);
    }

    useEffect(() => {
        // Fetch user data from the backend
        fetch(`/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUserData(data));
    }, [userId]);

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <label>User ID:</label>
                <input type="text" value={userId} onChange={handleUserIdChange} />
            </div>
            <div>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
            </div>
        </div>
    );
}

export default UserProfilePage;
