import React, { useEffect, useRef } from 'react';

const FormUncontrolFunction = () => {

    let userNameRef = useRef()
    let passwordRef = useRef()
    let emailRef = useRef()

    useEffect(() => {
        userNameRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        
        let formData = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }

        console.log(formData)
    }

    return (  
        <form onSubmit={handleSubmit}>

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    ref={userNameRef}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    ref={passwordRef}
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    ref={emailRef}
                    type="email"
                />

                <button>Submit</button>
            </form>
    );
}
 
export default FormUncontrolFunction;