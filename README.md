# ☕ THE NEWS - TERMO CLONE

> **"Sua dose matinal de lógica com a cara do the news."**

https://termo-clone-smoky.vercel.app/

Este projeto é uma aplicação web de alta performance, desenvolvida como um case técnico para o **The News**. A aplicação recria a mecânica clássica do jogo *Termo/Wordle*, totalmente integrada à identidade visual e ao tom de voz da marca.

---

## 🚀 Tecnologias de Elite

Para garantir **performance** e **escalabilidade**, escolhi ferramentas que refletem as melhores práticas do mercado:

* **React + TypeScript**: Tipagem forte para evitar erros em tempo de execução e garantir um código autêntico.
* **Vite**: Build tool de próxima geração para um desenvolvimento ultra-rápido.
* **Tailwind CSS**: Estilização baseada em utilitários para garantir **fidelidade visual** absoluta e **responsividade mobile-first**.
* **Vercel**: Infraestrutura de deploy otimizada para aplicações modernas.

---

## 🛠️ Features Desenvolvidas

* **Mecânica Core**: 6 tentativas para adivinhar uma palavra de 5 letras com feedback em tempo real.
* **Design System The News**: Cores (`news-yellow`, `news-black`, `news-beige`) e tipografia alinhadas à newsletter.
* **Validação Inteligente**: Sistema que impede o envio de palavras que não constam no dicionário português.
* **Teclado Virtual Responsivo**: Totalmente adaptado para dispositivos móveis, garantindo que o usuário esteja presente e focado.
* **Feedback Humanizado**: Modais personalizados que substituem alertas genéricos, mantendo o tom de voz da marca ("☕ Bom dia!").

---

## 📂 Arquitetura e Estrutura de Pastas

Utilizei uma estrutura organizada por responsabilidades (Clean Architecture), facilitando a manutenção e o entendimento do fluxo de dados:

```text
src/
├── components/   # Componentes atômicos (Grid, Keyboard, Modal)
├── logic/        # Regras de negócio puras (CheckGuess, Dicionário)
├── pages/        # Componentes de página (Home, ErrorPage)
├── App.tsx       # Orquestração de estado e eventos
└── main.tsx      # Ponto de entrada da aplicação
```

## 🧼 Técnicas de Clean Code e SOLID

Como uma desenvolvedora que busca a excelência e evita o "analfabetismo" técnico, apliquei princípios fundamentais de engenharia de software:

* Single Responsibility Principle (SRP): Cada componente e função possui uma única razão para mudar. A lógica de verificação de palavras é isolada da interface.

* Imutabilidade: Estados gerenciados de forma previsível no React, evitando efeitos colaterais indesejados.

* Nomes Significativos: Variáveis e funções nomeadas para serem autoexplicativas (ex: checkGuess, isGameOver).

* Separação de Preocupações: O dicionário foi filtrado e higienizado em um módulo específico para garantir a Alta Performance exigida.

## 🧠 Decisões Técnicas (Atenção aos Detalhes)

* Lista Estática vs API: Optei por uma lista estática de palavras de 5 letras para garantir que o jogo rode perfeitamente em ambientes serverless, eliminando acessos desnecessários ao sistema de arquivos durante a execução no cliente.

* UX de Feedback: Implementei um leve atraso (delay) na exibição dos modais de vitória. Isso permite que o usuário tenha a experiência visual de ver o grid se tornar amarelo antes de receber o parabéns, reforçando a sensação de conquista e sucesso.

## 🏁 Como Executar

    Clone o repositório.

    Instale as dependências: npm install.

    Inicie o servidor de desenvolvimento: npm run dev.

Desenvolvido com foco em habilidades essenciais para desbloquear o potencial máximo.


**Laura**
