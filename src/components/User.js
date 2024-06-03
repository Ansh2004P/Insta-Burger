import React from "react";

const User =(props)=>{
    const {name, location, contact} = props;

    return (
        <div className="user-card">
        <h2>Name: {name}</h2>
        <h1>Location: {location}</h1>
        <h4>Contact: {contact}</h4>
      </div>
    );

}

export default User;