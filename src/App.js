// import { Component } from "react";
import { useState } from "react";
import Failure from "./Failure";
import Success from "./Success";

export default function LoginPage() {

    const [login] = useState({ userName: 'user123', passWord: 'pass123' })
    const [input, setInput] = useState({ userNameInput: '', passWordInput: '' })
    const [results, setResults] = useState('')

    const checkLogin = (obj) => {
        
        if (login.userName === obj.userNameInput && login.passWord === obj.passWordInput) {
            console.log('success')
            setResults(<Success />)
        } else {
            setResults(<Failure/>)

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const handleChange = (event) => {

        setInput({ ...input, [event.target.id]: event.target.value })
        // console.log(input.userNameInput)
        // console.log(input.passWordInput)
        // console.log({ ...input, [event.target.id]: event.target.value })
        // console.log({ input, [event.target.id]: event.target.value })
    }
    // console.log(input)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} id="userNameInput" placeholder="enter username"></input>
                <br />
                <input onChange={handleChange} id="passWordInput" placeholder="enter password"></input>
                <br />
                <br />
                <button onClick={checkLogin(input)}>Login</button>
            </form>
            {/* <Success username={input.userNameInput} /> */}
        </div>
    )
}
