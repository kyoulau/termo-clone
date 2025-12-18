
const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
];

export const Keyboard = ({ onKeyPress }: { onKeyPress: (key: string) => void }) => {
  return (
    <div className="w-full max-w-full sm:max-w-2xl px-1 sm:px-4 pb-4">
      {ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 mb-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`
                flex items-center justify-center rounded font-bold transition-all active:scale-95
                ${key.length > 1 
                  ? 'px-2 sm:px-4 text-[10px] sm:text-base w-16 sm:w-20' 
                  : 'flex-1 text-sm sm:text-xl h-12 sm:h-14'}
                bg-gray-300 text-news-black hover:bg-gray-400
              `}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};