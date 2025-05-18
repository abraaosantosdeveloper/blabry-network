import { useState } from 'react';
import { Menu, X, Home, Bell, MessageSquare, User, Edit } from 'lucide-react';
import LogoTextLight from '../../assets/icons/LogoTextLight.svg';


function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
    <>
      {/* Header */}
      <header className="grid grid-cols-3 items-center p-4 sticky top-0 bg-[#7C3AED] text-white shadow-md z-10">

        {/* Logo */}
        <img src={LogoTextLight} alt="Blabry Logo" className="w-[100px] h-[40px]" />

        {/* Center column */}
        <div></div>

        {/* Third Column - Menu */}

        <div className="flex justify-end">
          <button 
            className="text-white hover:bg-[#8B5CF6] p-2 rounded-full transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
      </header>

      {/* Menu dropdown (aparece quando menuOpen é true) */}
      {menuOpen && (
        <div className="bg-white shadow-lg absolute right-4 mt-2 w-64 rounded-lg overflow-hidden border border-[#DDD6FE] z-20">
          <nav className="py-2">
            <a href="#" className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082]">
              <Home size={20} className="mr-3" />
              <span>Início</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082]">
              <Bell size={20} className="mr-3" />
              <span>Notificações</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082]">
              <MessageSquare size={20} className="mr-3" />
              <span>Mensagens</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082]">
              <User size={20} className="mr-3" />
              <span>Perfil</span>
            </a>
            <hr className="my-1 border-[#DDD6FE]" />
            <a href="#" className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#7C3AED] font-medium">
              <Edit size={20} className="mr-3" />
              <span>Novo Blab</span>
            </a>
          </nav>
        </div>
      )}</>
    )}

export default Header;