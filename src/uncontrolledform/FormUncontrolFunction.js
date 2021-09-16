import React, { useEffect, useRef, useState,  } from 'react';

export default function FormUncontrolFunction() {

    const [formData, setFormData] = useState('')

    let userNameRef = useRef()
    let passwordRef = useRef()
    let emailRef = useRef()

    useEffect(() => {
        userNameRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        let data = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }

        setFormData(data)
    }

    return (
        <>
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

        <section>
            <h1>Form Data</h1>
            <ul>
                <li>{formData.username}</li>
                <li>{formData.email}</li>
            </ul>
        </section>
        </>
    );
}

