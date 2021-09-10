import React, { Component } from "react"

let greetings = {
    greet: 'Hello World',
    question1: 'How are you?',
    question2: "How's your day going?",
    question3: "What's your name?",

}

export default class GreetingQ extends Component {
    render() {
        return (
            <section className="test">
                <h1>{greetings.greet}</h1>
                <Questions greetingOption1={greetings.question1} />
                <Questions greetingOption1={greetings.question2} />
                <Questions greetingOption1={greetings.question3} />
            </section>
        )
    }
}

let num1 = 0


function Questions(props) {
    return (
        <section className="test">
            <h2 id={'q' + (num1 += 1)}>Question {(num1)}</h2>
            <p>{props.greetingOption1}</p>
        </section>
    )
}

