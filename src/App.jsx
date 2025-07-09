import { useState } from 'react'
import Flashcard from './Flashcard.jsx'
import FLASH_CARDS from './FLASH_CARDS.jsx'
import './App.css'

function App() {
  const [flashcards] = useState(FLASH_CARDS)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [userAnswers, setUserAnswers] = useState('')
  const [answerStatus, setAnswerStatus] = useState(null)


  const isAtFirstCard = currentCardIndex === 0;
  const isAtLastCard = currentCardIndex === flashcards.length - 1;
  
  const getRandomCardIndex = () => {

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    
    return newIndex;
  }
  
  const handleNextCard = () => {

    if (isAtLastCard) {return; }

    if (isFlipped) {
      setIsFlipped(false);
      // Use setTimeout to wait for the flip animation to complete
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 100);
      setUserAnswers('');
      setAnswerStatus(null);
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
      setUserAnswers('');
      setAnswerStatus(null);
    }
  }

  const handlePrevCard = () => {
    if (isAtFirstCard) return;
    
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex - 1);
      }, 100);
      setUserAnswers('');
      setAnswerStatus(null);
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
      setUserAnswers('');
      setAnswerStatus(null);
    }
  }

  const handleShuffle = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex(getRandomCardIndex());
      }, 100);
      setUserAnswers('');
      setAnswerStatus(null);
    } else {
      setCurrentCardIndex(getRandomCardIndex());
      setUserAnswers('');
      setAnswerStatus(null);
    }
  }

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleSubmitAnswer = () => {
    const currentAnswer = flashcards[currentCardIndex].answer.toLowerCase();
    const userInput = userAnswers.toLowerCase().trim();
    
    if (userInput && (currentAnswer.includes(userInput) || userInput.includes(currentAnswer))) {
      setAnswerStatus('correct');
      setTimeout(() => {
        setIsFlipped(true);
      }, 500);
    } else {
      setAnswerStatus('incorrect');
    }
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

          <div className="userAnswers">
            <div className={`answer-input-container ${answerStatus ? `answer-${answerStatus}` : ''}`}>
              <input 
                className="answers-input" 
                type="text" 
                value={userAnswers} 
                onChange={(e) => {setUserAnswers(e.target.value); if(answerStatus) setAnswerStatus(null);}}
                placeholder="Type your answer here..."
                onKeyDown={(e) => {if(e.key === 'Enter') handleSubmitAnswer()}}
              />
              <button 
                className="submit-answer-button"
                onClick={handleSubmitAnswer}
              >
                Submit
              </button>
            </div>
            {answerStatus && (
              <div className={`answer-feedback ${answerStatus}`}>
                {answerStatus === 'correct' 
                  ? 'Correct!' 
                  : 'Incorrect'}
              </div>
            )}
          </div>

          <div className="navigation-container">
            <button className={`nav-button prev-button ${isAtFirstCard ? 'disabled' : ''}`} onClick={handlePrevCard} disabled={isAtFirstCard}>
              Previous
            </button>
            <button className="nav-button" onClick={handleShuffle}>
              Shuffle
            </button>
            <button className={`nav-button next-button ${isAtLastCard ? 'disabled' : ''}`} onClick={handleNextCard} disabled={isAtLastCard}>
              Next
            </button>
          </div>  
        </div>
      </main>
    </>
  )
}

export default App
