import { useState } from 'react';
import { Menu, X, Home, Bell, MessageSquare, User, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            className="text-white hover:bg-[#8B5CF6] p-2 rounded-2xl transition-colors cursor-pointer"
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
            <Link 
              to="/" 
              className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082] transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              <Home size={20} className="mr-3" />
              <span>Início</span>
            </Link>
            
            <Link 
              to="/notifications" 
              className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082] transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              <Bell size={20} className="mr-3" />
              <span>Notificações</span>
            </Link>
            
            <Link 
              to="/messages" 
              className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082] transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              <MessageSquare size={20} className="mr-3" />
              <span>Mensagens</span>
            </Link>
            
            <Link 
              to="/profile" 
              className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#4B0082] transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              <User size={20} className="mr-3" />
              <span>Perfil</span>
            </Link>
            
            <hr className="my-1 border-[#DDD6FE]" />
            
            <Link 
              to="/new-blab" 
              className="flex items-center px-4 py-3 hover:bg-[#EDE9FE] text-[#7C3AED] font-medium transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              <Edit size={20} className="mr-3" />
              <span>Novo Blab</span>
            </Link>
          </nav>
        </div>
      )}
    </>
    );
}

export default Header;