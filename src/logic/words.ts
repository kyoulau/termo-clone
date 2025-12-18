import words from 'dictionary-pt';

const getCleanedWords = (): string[] => {
  const wordsArray = Array.isArray(words) ? words : Object.keys(words);

  const filtered = wordsArray
    .filter((word: string) => word.length === 5) // Tipagem explícita 
    .map((word: string) => 
      word.normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase()
    );

  return Array.from(new Set(filtered));
};

export const VALID_WORDS = getCleanedWords();

export const getRandomWord = () => {
  const index = Math.floor(Math.random() * VALID_WORDS.length);
  return VALID_WORDS[index];
};

export const isValidWord = (word: string) => {
  return VALID_WORDS.includes(word.toUpperCase());
};