import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './LoginForm';
import FriendForm from './FriendForm';

const FriendsList = () => {

    const [friendsData, updateFriendsData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => updateFriendsData(res.data))
    }, [])

    console.log(friendsData);

    return (
        <>
        <h1>Friends:</h1>
        <div className="friends-list">
            {friendsData.map(friend => <h3>{friend.name}</h3>)}
        </div>
        <FriendForm />
        </>
    );
}
 
export default FriendsList;