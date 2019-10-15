import React, { useState } from "react";
import { axiosWithAuth } from "./LoginForm";
import uuid from 'uuid';

const FriendForm = () => {

  const [newFriend, setNewFriend] = useState({ id: uuid(), name: "", age: "", email: "" })

  const sendFriendData = event => {
      event.preventDefault();
      axiosWithAuth().post("http://localhost:5000/api/friends", newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
      setNewFriend({ ...newFriend, name: "", age: "", email: "" })
  }

  const handleChange = event => {
    setNewFriend({
        ...newFriend,
        [event.target.name]: event.target.value
    })
  }

  return (
    <div className="friend-form">
      <h1>Add New Friend</h1>
      <form onSubmit={sendFriendData}>
        <input value={newFriend.name} onChange={handleChange} name="name" type="text" placeholder="Name" />
        <input value={newFriend.age} onChange={handleChange} name="age" type="number" placeholder="Age" />
        <input value={newFriend.email} onChange={handleChange} name="email" type="text" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
