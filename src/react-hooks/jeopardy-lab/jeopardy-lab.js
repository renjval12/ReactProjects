// import { Component } from "react";
import { useState } from "react";

export default function Jeopardy(props) {
    const [score, setScore] = useState(0)
    const [category, setCategory] = useState('')
    const [points, setPoints] = useState(0)
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    function getQuestion() {
        fetch(`https://jservice.io/api/random`)
            .then((response) => response.json())
            .then((data) => {
                setCategory(data[0].category.title)
                setPoints(data[0].value)
                setQuestion(data[0].question)
                setAnswer(data[0].answer)
            })

    }

    function decreaseScore() {
        return setScore(score - points)
    }
    function increaseScore() {
        return setScore(score + points)
    }
    function resetScore() {
        return setScore(0)
    }

    return (
        <div id="jeopardy">
            <h1 class="info-section" id="game-heading">Welcome to Jeopardy</h1>
            <h2 class="info-section" id="score">Score: <span class="subheading-value">{score}</span></h2>
            <section id="score-btns">
                <button class="change-score-btn" id="decrease" onClick={decreaseScore}>Decrease</button>
                <button class="change-score-btn" id="increase" onClick={increaseScore}>Increase</button>
                <button class="change-score-btn" id="reset" onClick={resetScore}>Reset</button>
            </section>
            <h2 class="info-section" id="lets-play">Let's play!</h2>
            <button id="get-q-btn" onClick={getQuestion}>Get Question</button>
            <section id="question-info">
                <h2 class="info-section" id="category">Category: <span class="subheading-value">{category}</span></h2>
                <h2 class="info-section" id="points">Points: <span class="subheading-value">{points}</span></h2>
                <h3 class="info-section" id="question">Question: <p class="subheading-value">{question}</p></h3>
                <button class="info-section" id="reveal-answer-btn">Click to Reveal Answer</button>
                <p class="info-section" id="answer">{answer}</p>
            </section>
        </div>
    )
}

// const [count, setCount] = useState(0)

//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}