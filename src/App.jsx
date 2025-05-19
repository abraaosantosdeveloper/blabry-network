import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import Card from './components/card/card.jsx'

function App() {

  const blabs = [
    {
      id: 1,
      title: "Bem-vindo ao Blabry!",
      content: "O lugar perfeito para compartilhar seus pensamentos em blabs rápidos.",
      userId: "user123",
      userName: "João Silva",
      timestamp: "2h"
    },
    {
      id: 2,
      title: "Primeira experiência com React",
      content: "Estou aprendendo React e adorando! A sintaxe do JSX é bem intuitiva.",
      userId: "user456",
      userName: "Maria Santos",
      timestamp: "4h"
    },
    {
      id: 3,
      title: "Dica sobre Firebase",
      content: "Para quem está começando com Firebase, recomendo começar pela autenticação. É bem simples!",
      userId: "user789",
      userName: "Carlos Oliveira",
      timestamp: "6h"
    },
    {
      id: 4,
      title: "Tailwind CSS é incrível",
      content: "Depois que comecei a usar Tailwind, minha produtividade aumentou muito. Classes utilitárias são o futuro!",
      userId: "user101",
      userName: "Ana Costa",
      timestamp: "8h"
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tempus est. Nullam leo ipsum, dignissim non quam et, posuere fringilla felis. Vivamus laoreet, neque eu interdum auctor, arcu turpis efficitur tortor, nec scelerisque augue massa vitae ante. Mauris tincidunt dictum pulvinar. Vivamus consectetur tortor massa, non ultrices libero ornare in.",
      userId: "user101",
      userName: "Ana Costa",
      timestamp: "8h"
    }
  ];

  
    return (
    <div className = "bg-[#F5F3FF] min-h-screen text-[#1F2937]">
      <Header/>

            {/* Conteúdo principal (área do feed) */}
      <main className="grid lg:grid-cols-[2fr_6fr_2fr] md:grid-cols-[1fr_8fr_1fr] gap-2 p-4 sm:grid-cols-1">
        {/* Aqui viriam os componentes dos blabs */}
        {blabs.map((blab) => (
          <Card key={blab.id} blabData={blab}/>
        ))}
      </main>

    </div>
  )
}

export default App;
