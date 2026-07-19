import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

    const currentFloatingCard = floatingCards[activeTab];

    return <section className="relative min-h-screen flex justify-center items-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
            style={{
            background : `radial-gradient(600px circle ${mousePosition.x}px 
            ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}/>

        {/* Glows */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center relative w-full ">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 text-center lg:text-left lg:gap-12 sm:gap-8 items-center relative">
                <div className="mt-5">
                    <div className="inline-flex space-x-2 items-center px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-2 sm:mb-6 animate-in slide-in-from-bottom duration-800">
                        <Sparkles className="w-4 h-4 text-blue-400"/>
                        <span className="text-sm sm:text-xs text-blue-300">Introducing ByteFlow AI</span>
                    </div>

                    <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-800 delay-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Create Faster</span>
                        <span className="bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Code Better</span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">With ByteFlow AI</span>
                    </h1>

                    <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-300 leading-relaxed">
                        Build modern applications with AI code completion, automated testing, and smart debugging. Everything you need to move from idea to deployment.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 hover:cursor-pointer ">
                            <span>Start Coding Free</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                        </button>

                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2 hover:cursor-pointer hover:scale-105 active:scale-95">
                            <div className="px-1 py-0.5 flex flex-col bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                            </div>
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>
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
                                    ? "bg-purple-500/30 text-white border-blue-400/20"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                }  transition-all duration-200 whitespace-nowrap`}
                                >
                                Hero.jsx
                                </button>
                                <button
                                onClick={() => setActiveTab("Navbar.jsx")}
                                className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${
                                    activeTab === "Navbar.jsx"
                                    ? "bg-green-400/30 text-white border-blue-400/20"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                }  transition-all duration-200 whitespace-nowrap`}
                                >
                                Navbar.jsx
                                </button>
                            </div>

                                {/* Code Content */}
                                <div className="relative overflow-hidden flex-grow">
                                    <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={
                                        {margin : 0,
                                         borderRadius : "8px",
                                         fontSize : "11px",
                                         lineHeight: "1.4",
                                         height: "100%",
                                         border : "1px solid #3c3c3c",
                                         wordWrap : "break-word",
                                         whiteSpace : "pre-wrap",
                                         textAlign : "left",
                                         }}>
                                        {codeExamples[activeTab]}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}>{currentFloatingCard.icon}</div>

                                <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>{currentFloatingCard.title}</span>
                            </div>
                            <div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>{currentFloatingCard.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}