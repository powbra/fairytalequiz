import React, { useState, useEffect } from 'react';


const quizData = [
  {
    question: "Wer wohnt im Pfefferkuchenhaus im Wald?",
    options: ["Der Wolf", "Die Hexe", "Die sieben Zwerge", "Rotkäppchens Großmutter"],
    correctAnswer: 1,
    explanation: "In 'Hänsel und Gretel' wohnt die böse Hexe im Pfefferkuchenhaus im Wald.",
    link: "https://de.wikipedia.org/wiki/H%C3%A4nsel_und_Gretel"
  },
  {
    question: "Welches Tier hilft dem gestiefelten Kater?",
    options: ["Ein Pferd", "Ein Hund", "Eine Maus", "Es gibt kein Tier, der Kater arbeitet allein"],
    correctAnswer: 3,
    explanation: "Im Märchen 'Der gestiefelte Kater' arbeitet der Kater allein und benutzt nur seine List.",
    link: "https://de.wikipedia.org/wiki/Der_gestiefelte_Kater"
  },
  {
    question: "Was verliert Aschenputtel auf der Treppe des Schlosses?",
    options: ["Einen goldenen Ring", "Einen Handschuh", "Einen Glasschuh", "Ein Halstuch"],
    correctAnswer: 2,
    explanation: "Aschenputtel verliert einen Glasschuh auf der Treppe, als sie vom Ball flieht.",
    link: "https://de.wikipedia.org/wiki/Aschenputtel"
  },
  {
    question: "Wie heißt das Mädchen mit den sehr langen Haaren, das in einem Turm eingesperrt ist?",
    options: ["Goldlöckchen", "Rapunzel", "Schneewittchen", "Gretel"],
    correctAnswer: 1,
    explanation: "Rapunzel ist das Mädchen mit den langen Haaren, das in einem Turm eingesperrt ist.",
    link: "https://de.wikipedia.org/wiki/Rapunzel"
  },
  {
    question: "Welches Tier verwandelt sich im Märchen in einen Prinzen?",
    options: ["Eine Katze", "Ein Frosch", "Ein Schwan", "Ein Bär"],
    correctAnswer: 1,
    explanation: "Im Märchen 'Der Froschkönig' verwandelt sich ein Frosch in einen Prinzen.",
    link: "https://de.wikipedia.org/wiki/Der_Froschk%C3%B6nig_oder_der_eiserne_Heinrich"
  },
  {
    question: "Was muss Rumpelstilzchen spinnen?",
    options: ["Wolle", "Seide", "Stroh zu Gold", "Baumwolle"],
    correctAnswer: 2,
    explanation: "Rumpelstilzchen muss für die Müllerstochter Stroh zu Gold spinnen.",
    link: "https://de.wikipedia.org/wiki/Rumpelstilzchen"
  },
  {
    question: "Wer isst von den Tellern der sieben Zwerge und schläft in ihren Betten?",
    options: ["Rotkäppchen", "Goldlöckchen", "Schneewittchen", "Dornröschen"],
    correctAnswer: 2,
    explanation: "Schneewittchen isst von den Tellern der Zwerge und schläft in ihren Betten.",
    link: "https://de.wikipedia.org/wiki/Schneewittchen"
  },
  {
    question: "Womit lockt die böse Hexe Hänsel und Gretel?",
    options: ["Mit einem Schatz", "Mit Spielzeug", "Mit einem Lebkuchenhaus", "Mit Zaubertricks"],
    correctAnswer: 2,
    explanation: "Die böse Hexe lockt Hänsel und Gretel mit einem Lebkuchenhaus.",
    link: "https://de.wikipedia.org/wiki/H%C3%A4nsel_und_Gretel"
  },
  {
    question: "Was geschieht mit Pinocchio, wenn er lügt?",
    options: ["Seine Ohren werden rot", "Seine Nase wächst", "Seine Haare fallen aus", "Seine Füße werden schwer"],
    correctAnswer: 1,
    explanation: "Wenn Pinocchio lügt, wächst seine Nase.",
    link: "https://de.wikipedia.org/wiki/Pinocchio"
  },
  {
    question: "Welches Tier hilft dem Aschenputtel beim Sortieren der Linsen?",
    options: ["Mäuse", "Vögel", "Ameisen", "Eichhörnchen"],
    correctAnswer: 1,
    explanation: "In vielen Versionen des Märchens helfen Vögel Aschenputtel beim Sortieren der Linsen.",
    link: "https://de.wikipedia.org/wiki/Aschenputtel"
  },
  {
    question: "Wie viele Kinder hat der Rattenfänger von Hameln aus der Stadt geführt?",
    options: ["50", "100", "130", "Alle Kinder der Stadt"],
    correctAnswer: 3,
    explanation: "Der Rattenfänger führte alle Kinder der Stadt Hameln weg.",
    link: "https://de.wikipedia.org/wiki/Rattenfänger_von_Hameln"
  },
  {
    question: "Was ist das Besondere an den Kleidern, die der Kaiser in 'Des Kaisers neue Kleider' trägt?",
    options: ["Sie sind aus Gold", "Sie sind unsichtbar", "Sie leuchten im Dunkeln", "Sie ändern ständig die Farbe"],
    correctAnswer: 1,
    explanation: "In 'Des Kaisers neue Kleider' sind die Kleider angeblich unsichtbar für Dumme und Unfähige.",
    link: "https://de.wikipedia.org/wiki/Des_Kaisers_neue_Kleider"
  },
  {
    question: "Welches Tier hilft dem gestiefelten Kater, seinen Herrn reich zu machen?",
    options: ["Ein Löwe", "Ein Riese", "Ein Drache", "Ein Oger"],
    correctAnswer: 3,
    explanation: "Der gestiefelte Kater überlistet einen Oger, um seinen Herrn reich zu machen.",
    link: "https://de.wikipedia.org/wiki/Der_gestiefelte_Kater"
  },
  {
    question: "Wie viele Jahre schläft Dornröschen?",
    options: ["50 Jahre", "100 Jahre", "500 Jahre", "1000 Jahre"],
    correctAnswer: 1,
    explanation: "Dornröschen schläft 100 Jahre lang, bevor sie von einem Prinzen geweckt wird.",
    link: "https://de.wikipedia.org/wiki/Dornr%C3%B6schen"
  },
  {
    question: "Was muss der Prinz in 'Die Prinzessin auf der Erbse' unter die Matratzen legen?",
    options: ["Eine Münze", "Eine Erbse", "Eine Feder", "Einen Stein"],
    correctAnswer: 1,
    explanation: "In 'Die Prinzessin auf der Erbse' wird eine Erbse unter viele Matratzen gelegt.",
    link: "https://de.wikipedia.org/wiki/Die_Prinzessin_auf_der_Erbse"
  },
  {
    question: "Welches Material verwendet das dritte Schweinchen für sein Haus in 'Die drei kleinen Schweinchen'?",
    options: ["Stroh", "Holz", "Stein", "Metall"],
    correctAnswer: 2,
    explanation: "Das dritte Schweinchen baut sein Haus aus Stein, welches dem Wolf standhält.",
    link: "https://de.wikipedia.org/wiki/Die_drei_kleinen_Schweinchen"
  },
  {
    question: "Was findet Jack am Ende der Bohnenstange in 'Jack und die Bohnenranke'?",
    options: ["Ein Schloss", "Eine Schatzkiste", "Ein Drachennest", "Ein Riese"],
    correctAnswer: 0,
    explanation: "Jack findet ein Schloss am Ende der Bohnenstange, in dem ein Riese lebt.",
    link: "https://de.wikipedia.org/wiki/Hans_und_die_Bohnenranke"
  },
  {
    question: "Welches Geschenk gibt die böse Fee Dornröschen zur Geburt?",
    options: ["Schönheit", "Klugheit", "Tod durch eine Spindel", "Ewiges Leben"],
    correctAnswer: 2,
    explanation: "Die böse Fee prophezeit, dass Dornröschen sich an einer Spindel stechen und sterben wird.",
    link: "https://de.wikipedia.org/wiki/Dornr%C3%B6schen"
  },
  {
    question: "Was ist das Besondere an den Stiefeln des gestiefelten Katers?",
    options: ["Sie machen unsichtbar", "Sie ermöglichen Zeitreisen", "Sie geben ihm menschliche Fähigkeiten", "Sie machen ihn unbesiegbar"],
    correctAnswer: 2,
    explanation: "Die Stiefel geben dem Kater menschliche Fähigkeiten wie Sprechen und aufrecht Gehen.",
    link: "https://de.wikipedia.org/wiki/Der_gestiefelte_Kater"
  }// ... Fügen Sie hier die restlichen Fragen hinzu
];

const Fairytalequiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answerLocked, setAnswerLocked] = useState(false);
  const [correctAnimation, setCorrectAnimation] = useState(false);

  useEffect(() => {
    if (correctAnimation) {
      const timer = setTimeout(() => setCorrectAnimation(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [correctAnimation]);

  const handleAnswerSelection = (index) => {
    if (!answerLocked) {
      setSelectedAnswer(index);
      setShowExplanation(true);
      setAnswerLocked(true);
      if (index === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setCorrectAnimation(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAnswerLocked(false);
    } else {
      setQuizEnd(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizEnd(false);
    setShowExplanation(false);
    setAnswerLocked(false);
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    animation: correctAnimation ? 'pulse 1s' : 'none',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#8a2be2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  if (quizEnd) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{textAlign: 'center', color: '#8a2be2', marginBottom: '1rem'}}>Märchenquiz beendet!</h2>
          <p style={{textAlign: 'center', fontSize: '1.25rem', marginBottom: '1rem'}}>
            Dein Ergebnis: <span style={{fontWeight: 'bold', color: '#8a2be2'}}>{score}</span> von {quizData.length}
          </p>
          <button onClick={restartQuiz} style={buttonStyle}>Quiz neu starten</button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{textAlign: 'center', color: '#8a2be2', marginBottom: '1rem'}}>Märchenquiz für Kinder</h2>
        <p style={{textAlign: 'center', marginBottom: '1rem'}}>Frage {currentQuestion + 1} von {quizData.length}</p>
        <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '1.5rem'}}>{quizData[currentQuestion].question}</p>
        <div>
          {quizData[currentQuestion].options.map((option, index) => (
            <div 
              key={index} 
              style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: selectedAnswer === index 
                  ? (index === quizData[currentQuestion].correctAnswer ? '#90EE90' : '#FFB6C1')
                  : 'white',
                transition: 'background-color 0.3s',
              }}
              onClick={() => handleAnswerSelection(index)}
            >
              <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <input 
                  type="radio" 
                  checked={selectedAnswer === index}
                  onChange={() => {}}
                  style={{marginRight: '0.5rem'}}
                  disabled={answerLocked}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        {showExplanation && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#E6F3FF',
            borderRadius: '5px',
            borderLeft: '4px solid #4A90E2',
          }}>
            <p>{quizData[currentQuestion].explanation}{' '}
              <a href={quizData[currentQuestion].link} target="_blank" rel="noopener noreferrer" style={{color: '#4A90E2'}}>Mehr erfahren</a>
            </p>
          </div>
        )}
        <button 
          onClick={handleNextQuestion} 
          style={{...buttonStyle, marginTop: '1rem'}}
          disabled={!answerLocked}
        >
          {currentQuestion === quizData.length - 1 ? "Quiz beenden" : "Nächste Frage"}
        </button>
      </div>
    </div>
  );
};

export default Fairytalequiz;