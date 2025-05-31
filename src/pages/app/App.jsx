import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/header/header.jsx';
import Card from '../../components/card/card.jsx';
import Profile from '../profile/profile.jsx'; 

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

  // Componente da página inicial (feed)
  const HomePage = () => (
    <main className="grid lg:grid-cols-[2fr_6fr_2fr] md:grid-cols-[1fr_8fr_1fr] gap-2 p-4 sm:grid-cols-1">
      {blabs.map((blab) => (
        <Card key={blab.id} blabData={blab}/>
      ))}
    </main>
  );

  // Componentes temporários para as outras páginas
  const NotificationsPage = () => (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notificações</h1>
      <p>Suas notificações aparecerão aqui.</p>
    </main>
  );

  const MessagesPage = () => (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mensagens</h1>
      <p>Suas mensagens aparecerão aqui.</p>
    </main>
  );

  const NewBlabPage = () => (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Novo Blab</h1>
      <p>Formulário para criar um novo blab.</p>
    </main>
  );

  return (
    <BrowserRouter>
      <div className="bg-[#F5F3FF] min-h-screen text-[#1F2937]">
        <Header/>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/new-blab" element={<NewBlabPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;