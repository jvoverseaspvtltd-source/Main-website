'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import api from '../services/api';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Initial Welcome Message
    const [messages, setMessages] = useState([
        { id: 1, text: "👋 Hi there! I'm the JV Overseas virtual assistant. How can I help you regarding your study abroad journey today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState(["Tell me about JV Overseas", "Which countries do you assist?", "Admission process"]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e, suggestionText = null) => {
        if (e) e.preventDefault();

        const messageToSend = suggestionText || inputText;
        if (!messageToSend.trim()) return;

        // Add User Message
        const userMsg = { id: Date.now(), text: messageToSend, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        try {
            // Call Backend API
            const response = await api.post('/public/chat-conversation', { message: userMsg.text });

            // Clear suggestions while typing
            setSuggestions([]);

            // Artificial Delay for realism
            setTimeout(() => {
                const botMsg = { id: Date.now() + 1, text: response.data.reply, sender: 'bot' };
                setMessages(prev => [...prev, botMsg]);
                setSuggestions(response.data.suggestions || []);
                setIsTyping(false);
            }, 600);

        } catch (err) {
            console.error("Chat Error:", err);
            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now(), text: "I'm having trouble connecting to the server. Please try again later.", sender: 'bot', isError: true }]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 animate-bounce-slow flex items-center justify-center relative group"
                >
                    <MessageSquare size={28} />
                    <span className="absolute -top-10 right-0 bg-white text-gray-800 text-xs py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Chat with us!
                    </span>
                </button>
            )}

            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-100 flex flex-col h-[500px] transition-all duration-300 ease-in-out">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-md">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-600 animate-pulse"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-base leading-tight">JV Assistant</h3>
                                <p className="text-[10px] opacity-80">Counselor Mode • Always here to help!</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto custom-scrollbar">
                        <div className="space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                            ? 'bg-indigo-600 text-white rounded-br-none'
                                            : msg.isError
                                                ? 'bg-red-50 text-red-600 border border-red-100 rounded-bl-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        {/* Suggestions */}
                        {suggestions.length > 0 && !isTyping && (
                            <div className="flex flex-wrap gap-2 mb-3 max-h-24 overflow-y-auto custom-scrollbar px-1">
                                {suggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setInputText(suggestion);
                                            // Add to messages and trigger send logic immediately
                                            const fakeEvent = { preventDefault: () => { } };
                                            handleSendMessage(fakeEvent, suggestion);
                                        }}
                                        className="text-[11px] bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all whitespace-nowrap"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        <form onSubmit={handleSendMessage} className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Type your question..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim() || isTyping}
                                className="absolute right-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-gray-400">Powered by JV Overseas • Expert Counselor Mode</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
