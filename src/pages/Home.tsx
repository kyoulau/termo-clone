import { useEffect } from "react"
import { checkGuess } from "../logic/game-logic"

export function Home(){
  useEffect(() => {
    // Caso de Teste 1: Palavra alvo "TERMO" e palpite "TORTA"
    // 'T' (0): Correto
    // 'O' (1): Deslocado (existe no final de TERMO)
    // 'R' (2): Correto
    // 'T' (3): Incorreto (o primeiro T já foi usado como correto)
    // 'A' (4): Incorreto
    const target = "TERMO";
    const guess = "TORTA";
    
    const feedback = checkGuess(guess, target);
    
    console.log(`--- TESTE DE LÓGICA: ${guess} vs ${target} ---`);
    feedback.forEach((f, i) => {
      console.log(`Letra: ${f.letter} | Status: ${f.status} | Posição: ${i}`);
    });
  }, []);
  return (
    <div className="min-h-screen bg-news-beige flex items-center justify-center">
      <h1 className="text-3xl font-bold text-news-black">
        The News - Termo Clone
      </h1>
    </div>
  )
}