import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Hero(){
    const [mousePosition, setMousePosition] = useState({x:0,y:0});
    const [activeTab, setActiveTab] = useState("App.jsx");
    useEffect(()=>{
        function handleMouseMove(e){
            setMousePosition({x : e.ClientX, y : e.ClientY})
        }
        window.addEventListener("mousemove", handleMouseMove);
        return ()=> window.addEventListener("mousemove", handleMouseMove);
    }, []);
    return <section className="relative min-h-screen flex justify-center items-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
            style={{
            background : `radial-gradient(600px circle ${mousePosition.x}px 
            ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}/>

        {/* Glows */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                    {/* IDE header */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300">ByteFlow AI</span>
                        </div>
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    </div>

                    <div className="p-3 sm:p-4 relative h-full">
                        {/* File tabs */}
                        <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                        <button
                        onClick={() => setActiveTab("App.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${
                            activeTab === "App.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transition-all duration-200 whitespace-nowrap`}
                        >
                        App.jsx
                        </button>
                        <button
                        onClick={() => setActiveTab("Hero.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${
                            activeTab === "Hero.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transition-all duration-200 whitespace-nowrap`}
                        >
                        Hero.jsx
                        </button>
                        <button
                        onClick={() => setActiveTab("Navbar.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${
                            activeTab === "Navbar.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transition-all duration-200 whitespace-nowrap`}
                        >
                        Navbar.jsx
                        </button>
                    </div>

                        {/* Code Content */}
                        <div className="relative overflow-hidden flex-grow">
                            <SyntaxHighlighter>
                                
                            </SyntaxHighlighter>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
}