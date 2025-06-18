function Flashcard({ flashcard, isFlipped, onFlip }) {
    const getLayout = () => {
        if (flashcard.layout === 'left') {
            return 'layout-left'
        }
        if (flashcard.layout === 'right') {
            return 'layout-right'
        }
        if (flashcard.layout === 'top') {
            return 'layout-top'
        }
        return ''
    }

  return (
    <div className={`card ${isFlipped ? 'isFlipped' : ''}`} onClick={onFlip}>
        <div className="front">
            <div className="front-left">
                <div className="front-header">
                    <div className="question-label">
                        <h3>Question</h3>
                    </div>
                    <div className="question-number">
                        {flashcard.id}
                    </div>
                </div>
                <div 
                    className="left-image" 
                    style={{ backgroundImage: `url(/src/assets/statue_of_liberty.webp)` }}
                ></div>
                <div className="front-footer">
                    <h4>Civics Flash Cards</h4>
                    <p>for the Naturalization Test</p>
                </div>
            </div>
            <div className="front-right">
                <h2 className="question-text">{flashcard.question}</h2>
                <img className="logo" src="/src/assets/USCIS_Signature.webp" alt="USCIS Logo" />
            </div>
        </div>
        <div className={`back ${getLayout()}`}>
            {flashcard.image ? (
                <div className="back-content">
                    <div 
                        className="back-image" 
                        style={{ backgroundImage: `url(${flashcard.image})` }}
                    ></div>
                    <div className="back-text">
                        <h2>{flashcard.answer}</h2>
                    </div>
                </div>
                ) : (
                    <h2>{flashcard.answer}</h2>
                )}
        </div>
    </div>
  )
}

export default Flashcard