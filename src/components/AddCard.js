import { useState } from "react";

const AddCard = ({ onAdd }) => {
    const [description, setDescription] = useState('')
    const [answer, setAnswer] = useState('')
    const [fromLanguage, setFromLanguage] = useState('EN')
    const [toLanguage, setToLanguage] = useState('IT')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!description) {
            alert('Please insert a Word')
            return
        }

        if (!answer){
            alert('Please insert an Answer')
            return
        }

        onAdd({ description, answer, fromLanguage, toLanguage })

        setDescription('')
        setAnswer('')
    }

    return(
        <div className="single-card">
            <form className="add-form" onSubmit={onSubmit}>
                <div className="word-add">
                    <input
                        type="text"
                        placeholder="Word"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="answer-textbox">
                    <input
                        type="text"
                        placeholder="Answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>
                <div>
                    <input type="text" placeholder="From Language" style={{display: 'none'}} value={fromLanguage}/>
                </div>
                <div>
                    <input type="text" placeholder="To Language" style={{display: 'none'}} value={toLanguage} />
                </div>
                <input className="add-card-button" type="submit" value="Add Flashcard"/>
            </form>
        </div>
    )
}

export default AddCard