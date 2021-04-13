import React from 'react';
import { useSelector } from 'react-redux';

function User({ submitted }) {
    const userData = useSelector(state => state.userReducer);
    const name = submitted ? userData.user.name : null;
    const email = submitted ? userData.user.email : null;
    const password = submitted ? userData.user.password : null;


    return console.log(userData) || (
        <div className="user-slide" style={{
            backgroundColor: "white",
            width: 400,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",



        }}
        >
            <span>{name}</span>
            <span>{email}</span>
            <span>{password}</span>


        </div>
    );
}

export default User;