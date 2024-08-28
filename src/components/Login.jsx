import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    useEffect(() => {
        const updateCursorPosition = () => {
            setCursorPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.15,
                y: prev.y + (mousePosition.y - prev.y) * 0.15
            }));
        };

        const intervalId = setInterval(updateCursorPosition, 16);

        return () => clearInterval(intervalId);
    }, [mousePosition]);

    if (isAuthenticated) {
        navigate("/alltodos");
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
            <div 
                className="fixed pointer-events-none w-12 h-12 border border-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference transition-transform duration-300 ease-out"
                style={{ 
                    left: `${cursorPosition.x}px`, 
                    top: `${cursorPosition.y}px`,
                }}
            >
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="z-10 text-center flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
                <h1 className="text-6xl font-bold mb-6">Todo99x</h1>
                <p className="text-xl mb-8">Elevate your productivity to the next level</p>
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Manage Your Tasks with Ease:</h2>
                    <ul className="list-disc list-inside space-y-2 text-left mx-auto">
                        <li>Create personalized todos tailored to your needs</li>
                        <li>Delete tasks that are no longer relevant</li>
                        <li>Mark todos as completed when you've conquered them</li>
                        <li>Access separate views for completed and pending tasks</li>
                        <li>Stay organized with our intuitive interface</li>
                    </ul>
                </div>
                <p className="mb-8 text-lg">Join Todo99x today and transform the way you manage your daily tasks!</p>
                <button 
                    className="px-8 py-3 bg-yellow-300 text-black rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
                    onClick={() => loginWithRedirect()}
                >
                    Get Started
                </button>
            </div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}

export default Login;
