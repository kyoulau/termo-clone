
const BASE_WORDS = [
  "NEWSY", "MUNDO", "GERAL", "TECHY", "MIDIA", 
  "FATOS", "POVOO", "LIDER", "DADOS", "TEMPO",
  "VALOR", "VIVER", "IDEIA", "FORTE", "PONTO"
];

const getCleanedWords = (): string[] => {
  return BASE_WORDS.map(word => 
    word.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
  );
};

export const VALID_WORDS = getCleanedWords();

export const getRandomWord = (): string => {
  const index = Math.floor(Math.random() * VALID_WORDS.length);
  return VALID_WORDS[index];
};

export const isValidWord = (word: string): boolean => {
  return VALID_WORDS.includes(word.toUpperCase());
};