export type LetterStatus = 'correct' | 'misplaced' | 'incorrect' | 'empty';

export interface GameFeedback {
  letter: string;
  status: LetterStatus;
}

/**
 *  O coração do Termo.
 * Responsabilidade Única (SOLID): Validar o palpite contra a palavra alvo.
 */
export const checkGuess = (guess: string, target: string): GameFeedback[] => {
  const guessUpper = guess.toUpperCase();
  const targetUpper = target.toUpperCase();
  
  const result: GameFeedback[] = Array(5).fill(null).map((_, i) => ({
    letter: guessUpper[i],
    status: 'incorrect'
  }));

  const targetLetterCount: Record<string, number> = {};

  for (let i = 0; i < 5; i++) {
    const char = targetUpper[i];
    targetLetterCount[char] = (targetLetterCount[char] || 0) + 1;
    
    if (guessUpper[i] === char) {
      result[i].status = 'correct';
      targetLetterCount[char]--;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i].status !== 'correct') {
      const char = guessUpper[i];
      if (targetLetterCount[char] > 0) {
        result[i].status = 'misplaced';
        targetLetterCount[char]--;
      }
    }
  }

  return result;
};