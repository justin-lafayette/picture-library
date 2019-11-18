import React, { useState } from 'react';

export const useSignUpForm = (callback) => {
    const [newInputs, setNewInputs] = useState({});

    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        callback(console.log("Submit SignIn"));
    }

    const handleSignUpInputChange = (event) => {
        event.persist();
        console.log(name, value)
    
        const { name, value } = event.target
        setNewInputs(newInputs => ({...newInputs, [name]: [value]}));
        console.log(newInputs)
    }
    return handleSignUpSubmit, handleSignUpInputChange, newInputs;
}

export const useSignInForm = (callback) => {
    const [rtnInputs, setRtnInputs] = useState({});

    const handleSignInSubmit = (event) => {
        event.preventDefault();

        callback(console.log("Submit SignIn"));
    }

    const handleSignInInputChange = (event) => {
        event.persist();
    
        const { name, value } = event.target
        setRtnInputs(rtnInputs => ({...rtnInputs, [name]: [value]}));
    }
    return handleSignInSubmit, handleSignInInputChange, rtnInputs;
}
