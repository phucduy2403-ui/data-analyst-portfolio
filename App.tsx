import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { Scene } from "./components/Scene";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ChatWidget } from "./components/ChatWidget";

import { Loader } from "lucide-react";

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fake loading (tránh trắng màn hình)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen
  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <Loader className="animate-spin w-10 h-10 text-blue-500" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      
      {/* ================= 3D BACKGROUND ================= */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ pointerEvents: "none" }} // ⭐ quan trọng (không chặn click UI)
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* ================= UI CONTENT ================= */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* AI Chat Assistant */}
        <ChatWidget />

        <footer className="text-center py-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Phuc Duy Analyst. Powered by React,
          Three.js & Gemini.
        </footer>
      </div>
    </div>
  );
};

export default App;