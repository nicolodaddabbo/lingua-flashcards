import Card from "./Card";
import { useState } from "react";

const Cards = ({ cards, setNewCards, deleteCard, url }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [checkAttempt, setCheckAttempt] = useState(true) // Rossso se sbagliato
    const [correctAnswer, setCorrectAnswer] = useState(false) // Verde se indovinato

    const fetchCard = async (id) => {
        const res = await fetch(`${url}/api/flashcards/${id}`)
        const data = await res.json()
        data.attempt = 0
        data.isCorrect = false

        return data
    }

    const checkAnswer = async (id, attemptAnswer) => {
        const answerToCheck = await fetchCard(id)
        answerToCheck.attempt = 0
        answerToCheck.isCorrect = false
        if (attemptAnswer.toLowerCase() === answerToCheck.answer.toLowerCase()) {
            let newCards = cards
            newCards[currentIndex].isCorrect = true
            newCards[currentIndex].attempt = 0
            setNewCards(newCards)
            setCheckAttempt(true)
            setCorrectAnswer(true)
            //nextIndex()
        } else {
            let newCards = cards
            newCards[currentIndex].isCorrect = false
            newCards[currentIndex].attempt = newCards[currentIndex].attempt + 1
            setNewCards(newCards)
            setCheckAttempt(false)
            setCorrectAnswer(false)
        }
    }

    const nextIndex = () => {
        if ((cards.length - 1) > currentIndex) {
            setCurrentIndex(() => currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
        setCheckAttempt(true)
        setCorrectAnswer(false)
        // console.log(currentIndex)
    }

    const prevIndex = () => {
        if (currentIndex > 0) {
            setCurrentIndex(() => currentIndex - 1)
        } else {
            setCurrentIndex(cards.length - 1)
        }
        setCheckAttempt(true)
        setCorrectAnswer(false)
        // console.log(currentIndex)
    }

    return (
        <div className="card-list">

            {cards.length > 0 ? (
                    <Card
                        card={cards[currentIndex]}
                        prevIndex={prevIndex}
                        nextIndex={nextIndex}
                        checkAnswer={checkAnswer}
                        checkAttempt={checkAttempt}
                        correctAnswer={correctAnswer}
                        deleteCard={deleteCard}
                    />
                ) : (
                    'No flashcards'
            )}
        </div>
    )
}

export default Cards