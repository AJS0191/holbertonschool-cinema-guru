import React, { useState } from 'react';
import Button from './Button';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [switchBoolean, setSwitchBoolean] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        setSwitchBoolean(true);
    };

    const handleSignUp = () => {
        setSwitchBoolean(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle authentication logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button label={switchBoolean ? 'Sign In' : 'Sign Up'} onClick={handleSubmit} />
            <Button label={switchBoolean ? 'Sign Up' : 'Sign In'} onClick={switchBoolean ? handleSignUp : handleSignIn} />
        </form>
    );
};

export default Authentication;
