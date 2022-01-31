import { GrNext, GrPrevious, GrTrash } from "react-icons/gr";
import { useState } from "react";

const Card = ({ card, prevIndex, nextIndex, checkAnswer, checkAttempt, correctAnswer, deleteCard }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please insert an answer')
            return
        }

        checkAnswer(card.id, text)
        setText('')
    }

    const showSolution = () => {
        document.getElementById("solution").innerHTML = card.answer
        setInterval(() => {
            document.getElementById("solution").innerHTML = ' '
        }, 3000)
    }

    return (
        <div className={`single-card ${!checkAttempt && 'wrong'} ${correctAnswer && 'correct'}`}>
            <GrPrevious size={25} style={{ cursor: 'pointer'}} onClick={() => prevIndex()} />
            <div className="card-details">
                <h2 className="word">{card.description} {' '}</h2>
                <p id="solution"> </p>
                <form className="card-answer" onSubmit={onSubmit}>
                    <div className="answer-textbox">
                        <input
                            type="text"
                            placeholder="Answer"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="answer-button"/>
                    </div>
                </form>
                {
                    card.attempt > 2 &&
                    <button className="solution-button" onClick={showSolution}>
                        Solution
                    </button>
                }
            </div>
            <div className="right-card">
                <div className="trash">
                    <GrTrash size={25} style={{ cursor: 'pointer' }} onClick={() => deleteCard(card.id)}/>
                </div>
                <GrNext size={25} style={{ cursor: 'pointer' }} onClick={() => nextIndex()}/>
            </div>
        </div>
    )
}

export default Card