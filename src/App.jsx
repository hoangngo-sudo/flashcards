import { useState } from 'react'
import Flashcard from './Flashcard.jsx'
import FLASH_CARDS from './FLASH_CARDS.jsx'
import './App.css'

function App() {
  const [flashcards, _setFlashcards] = useState(FLASH_CARDS)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  
  const getRandomCardIndex = () => {

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    
    return newIndex;
  }
  
  const handleNextCard = () => {
    if (isFlipped) {
      setIsFlipped(false);
      // Use setTimeout to wait for the flip animation to complete
      setTimeout(() => {
        setCurrentCardIndex(getRandomCardIndex());
      }, 100);
    } else {
      setCurrentCardIndex(getRandomCardIndex());
    }
  }

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <header className={"header-container"}>
        <div className="header-content">
          <h1> U.S. Naturalization Test Flashcards</h1>
          <h3>Pass the test with ease by studying with these interactive flashcards.</h3>
        </div>
      </header>
      <main>
        <div className="card-counter">
          <h4>
            Card {currentCardIndex + 1} of {flashcards.length}
          </h4>
        </div>
        <div className="single-card-container">
          <Flashcard flashcard={flashcards[currentCardIndex]} isFlipped={isFlipped} onFlip={handleCardFlip} />
          
          <div className="navigation-container">
            <button className="nav-button" onClick={handleNextCard}>
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
