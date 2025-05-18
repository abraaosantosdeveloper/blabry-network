import React, { useState } from 'react';
import {Heart, MessageSquareText, Flag, Forward, CircleUserRound } from 'lucide-react';

function Card({blabData}){

    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (iconName, event) => {
        setHoveredIcon(iconName);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    const [isLiked, setIsLiked] = useState(false);

    const tooltips = {
        like: 'Curtir',
        comment: 'Comentar',
        share: 'Compartilhar',
        report: 'Denunciar'
    };

    return (
        <>
            <div className="bg-white p-5 rounded-xl shadow-sm mb-4 col-start-2">

                <h2 className="text-2xl text-gray-700 font-inter font-bold">{blabData.title}</h2>
                <p className="mt-2 text-gray-700">{blabData.content}</p>

                <div className='w-full flex justify-end gap-1'>
                    <CircleUserRound className='rounded-full p-1 h-[30px] mt-auto w-auto text-gray-700'/>
                    <p className="mt-2 text-gray-700 mr-auto sm:truncate max-w-[100px]">{blabData.userName}</p>
                    <small className="mt-2 text-gray-500 text-italic">{blabData.timestamp}</small>
                    <Heart onClick={() => setIsLiked(!isLiked)} fill={isLiked ? "currentColor" : "none"} onMouseEnter={(e) => handleMouseEnter('like', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='h-[35px] w-auto text-red-600 p-2 cursor-pointer rounded-2xl hover:bg-[#DDD6FE] transition-all duration-200 ease'/>
                    <MessageSquareText onMouseEnter={(e) => handleMouseEnter('comment', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='h-[35px] w-auto text-gray-700 p-2 cursor-pointer rounded-2xl hover:bg-[#DDD6FE] hover:text-[#4B0082] transition-all duration-200 ease'/>
                    <Forward onMouseEnter={(e) => handleMouseEnter('share', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='h-[35px] w-auto text-gray-700 p-2 cursor-pointer rounded-2xl hover:bg-[#DDD6FE] hover:text-[#4B0082] transition-all duration-200 ease'/>
                    <Flag onMouseEnter={(e) => handleMouseEnter('report', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='h-[35px] w-auto text-gray-700 p-2 cursor-pointer rounded-2xl hover:bg-red-400 hover:text-red-900 transition-all duration-200 ease'/>
                </div>
            </div>

            {/* Tooltip */}
            {hoveredIcon && (
                <div 
                    className="fixed pointer-events-none z-50 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg"
                    style={{
                        left: mousePosition.x + 15,
                        top: mousePosition.y + 45,
                        transform: 'translate(0, -100%)'
                    }}
                >
                    {tooltips[hoveredIcon]}
                </div>
            )}
        </> 
    )
}

export default Card;