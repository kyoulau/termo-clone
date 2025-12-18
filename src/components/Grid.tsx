import { type LetterStatus } from "../logic/game-logic";
interface CellProps {
  letter?: string;
  status?: LetterStatus;
}

const Cell = ({ letter = '', status = 'empty' }: CellProps) => {
  const statusStyles = {
    correct: 'bg-yellow-400 text-black border-yellow',
    misplaced: 'bg-black text-white border-black',
    incorrect: 'bg-gray-400 text-white border-gray-400',
    empty: 'bg-white border-gray-300 text-black',
  };

  return (
    <div className={`w-14 h-14 sm:w-16 sm:h-16 border-2 flex items-center justify-center text-3xl font-bold uppercase transition-all duration-500 ${statusStyles[status]}`}>
      {letter}
    </div>
  );
}

export const Grid = ({ guesses, currentGuess, attempts }: { guesses: any[][], currentGuess: string, attempts: number }) => {
  return (
    <div className="grid grid-rows-6 gap-2 mb-8">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            if (rowIndex < attempts) {
              return <Cell key={colIndex} letter={guesses[rowIndex][colIndex].letter} status={guesses[rowIndex][colIndex].status} />;
            }
            if (rowIndex === attempts) {
              return <Cell key={colIndex} letter={currentGuess[colIndex] || ''} status="empty" />;
            }
            return <Cell key={colIndex} status="empty" />;
          })}
        </div>
      ))}
    </div>
  );
};