import React, { useContext } from 'react';
import Usercontext from "./usercontext";

const Profile = () => {
    const { user } = useContext(Usercontext);

    return (
        <div>
            {!user ? (
                <h2>Please log in</h2>
            ) : (
                <h2>Welcome, {user.username}</h2>  // Assuming `user` has a `username` property
            )}
        </div>
    );
}

export default Profile;
