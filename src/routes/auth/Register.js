import React from "react";
import Input from "./../../components/general/Input";
import Button from "../../components/general/Button";

const Register = ({ username, password, setUsername, setPassword }) => {
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Username"
                type="text"
                className="register-input"
                value={username}
                setValue={handleUsernameChange}
            />
            <Input
                label="Password"
                type="password"
                className="register-input"
                value={password}
                setValue={handlePasswordChange}
            />
            <Button label="Submit" type="submit" />
        </form>
    );
};

export default Register;
