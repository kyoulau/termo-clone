import { useState, useEffect } from "react"
import { Grid } from "../components/Grid";
import { Keyboard } from "../components/Keyboard";
import { checkGuess, type GameFeedback } from "../logic/game-logic";
import { isValidWord } from "../logic/words";

const TARGET_WORD = "NEWSY";

export function Home(){
  const [attempts, setAttempts] = useState(0); 
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<GameFeedback[][]>([]); 
  const [isGameOver, setIsGameOver] = useState(false);

  const handleInput = (key: string) => {
    if (isGameOver) return;

    if (key === 'ENTER') {
      if (currentGuess.length !== 5) return;

      if (!isValidWord(currentGuess)) {
        alert("Esta palavra não consta no nosso dicionário matinal. ☕");
        return;
      }

      const feedback = checkGuess(currentGuess, TARGET_WORD);
      const newGuesses = [...guesses, feedback];

      setGuesses(newGuesses);
      setAttempts(prev => prev + 1);
      setCurrentGuess("");

      if (currentGuess === TARGET_WORD) {
        setIsGameOver(true);
        setTimeout(() => {
                alert("☕ Bom dia! Você acertou a manchete.");
        }, 500);
      } else if (attempts === 5) {
        setIsGameOver(true);
        alert(`Fim de jogo. A palavra era ${TARGET_WORD}`);
      }
    } else if (key === 'DEL') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'ENTER') handleInput('ENTER');
      else if (key === 'BACKSPACE') handleInput('DEL');
      else if (/^[A-Z]$/.test(key)) handleInput(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, isGameOver, attempts]);

  return (
    <div className="min-h-screen bg-news-beige flex flex-col items-center py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-news-black tracking-tighter">
          the news <span className="text-news-yellow">termo</span>
        </h1>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          ☕ sua dose matinal de lógica.
        </p>
      </header>

      <Grid guesses={guesses} currentGuess={currentGuess} attempts={attempts} />
      
      <div className="mt-auto w-full flex justify-center">
        <Keyboard onKeyPress={handleInput} />
      </div>
    </div>
  );
}