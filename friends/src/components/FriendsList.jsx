import React from 'react';
import { axiosWithAuth } from './LoginForm';



const FriendsList = () => {
    console.log(axiosWithAuth)
    axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div>List of friends will go here</div>
    );
}
 
export default FriendsList;