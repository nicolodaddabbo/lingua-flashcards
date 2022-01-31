import Header from './components/Header'
import {useEffect, useState} from "react";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";

function App() {
    const url = 'https://lingua-flashcards-backend.herokuapp.com'
    const [cards, setCards] = useState([])
    const [addCard, showAddCard] = useState(false)

    useEffect(() => {
        const getCards = async () => {
            const cardsFromServer = await fetchCards()
            setCards(cardsFromServer)
        }

        getCards()
    }, [])


    const fetchCards = async () => {
        const res = await fetch(`${url}/api/flashcards`)
        const data = await res.json()
        return data.map((cards) => {
            return {
                ...cards, attempt: 0, isCorrect: false
            }
        })
    }

    const addNewCard = async (card) => {
        console.log(card)
        const res = await fetch(`${url}/api/flashcards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(card),
        })

        const data = await res.json();
        data.attempt = 0
        data.isCorrect = false

        setCards([...cards, data])
    }

    const deleteCard = async (id) => {
        const res = await fetch(`${url}/api/flashcards/${id}`, {
            method: 'DELETE',
        })

        res.status === 200
            ? setCards(cards.filter((card) => card.id !== id))
            : alert('Error deleting this flashcard')
    }

    /*
    const tmpAdd = (card) => {
        console.log('Adding: ', card)
    }*/

    const setNewCards = (cards) => {
        setCards(cards)
    }

    return (
        <div>
            <Header
                title="Lingua Flashcard"
                onClick={() => showAddCard(!addCard)}
                showAdd={addCard}
            />
            {addCard && <AddCard onAdd={addNewCard} />}
            <Cards cards={cards} setNewCards={setNewCards} deleteCard={deleteCard} url={url}/>
        </div>
    );
}

export default App;
