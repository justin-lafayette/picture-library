import React, { useState } from 'react';

export default function Home() {

    const [signinShow, setSignin] = useState(false);
    const [signupShow, setSignup] = useState(false);
    const [badSignin, setBadsignin] = useState(false);
    const [badSignup, setBadsignup] = useState(false);
    const [showScanner, setShowscanner] = useState(false);
    const [loading, setLoading] = useState(false);

}

// state = {
//     email: this.props.email || "",
//     isAuth: this.props.isAuth,
//     password: "",
//     firstname: "",
//     lastname: "",
//     signinShow: false,
//     signupShow: false,
//     badSignin: false,
//     badSignup: false,
//     loading: false,
//     showScanner: false
// }