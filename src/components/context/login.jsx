import React, { useState, useContext } from 'react';
import Usercontext from "./usercontext";

const Login = () => {
    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');
    const { setuser } = useContext(Usercontext);

    const handlesubmit = (e) => {
        e.preventDefault();
        setuser({ username, password });  // This sets the user data in context
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}  // Corrected the `onChange` event
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}  // Corrected the `onChange` event and input type
            />
            <button type="button" onClick={handlesubmit}>Submit</button>
        </div>
    );
}

export default Login;
