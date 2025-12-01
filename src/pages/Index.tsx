import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const handleJump = () => {
    setScore(score + 10);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black"></div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full"></div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={i % 3 === 0 ? "absolute bg-green-500/20" : "absolute bg-purple-500/10"}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <header className="relative z-10 border-b-4 border-purple-600 bg-black/50 backdrop-blur-sm shadow-[0_4px_20px_rgba(16,185,129,0.2)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="Gamepad2" className="text-green-500" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              MINECRAFT EDITION
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-purple-950/50 px-4 py-2 border-2 border-purple-600">
              <Icon name="Star" className="text-yellow-400" size={20} />
              <span className="text-xl text-yellow-400 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px" }}>
                {score}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-purple-950/50 px-4 py-2 border-2 border-purple-600">
              <Icon name="Heart" className="text-red-500" size={20} />
              <span className="text-xl text-red-500 font-bold" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px" }}>
                x{lives}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                src="https://cdn.poehali.dev/projects/a0e2c03e-3911-49a7-bb8a-ea90c37faa11/files/58dcddc8-5a84-4995-bfb6-1626ae61000b.jpg"
                alt="R&C Logo with Minecraft T-Rex"
                className="w-full h-auto object-contain pixelated rounded-lg shadow-[0_0_40px_rgba(139,92,246,0.6),0_0_30px_rgba(16,185,129,0.4)]"
                style={{
                  imageRendering: "pixelated",
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-green-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-green-600 border-4 border-green-400 flex items-center justify-center">
                    <Icon name="Blocks" className="text-green-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    БЛОКИ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Кубические блоки для строительства миров
                  </p>
                </div>
              </Card>

              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-green-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-purple-600 border-4 border-green-400 flex items-center justify-center">
                    <Icon name="Ghost" className="text-green-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    КРАФТ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Создавай инструменты и предметы
                  </p>
                </div>
              </Card>

              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-green-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-green-600 border-4 border-green-400 flex items-center justify-center">
                    <Icon name="Trophy" className="text-green-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    РЕСУРСЫ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Добывай редкие материалы и руды
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 ${i % 2 === 0 ? 'bg-purple-700 border-2 border-purple-500 hover:bg-purple-600' : 'bg-green-700 border-2 border-green-500 hover:bg-green-600'} transition-colors cursor-pointer hover:scale-110 transform`}
                  style={{
                    boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t-4 border-purple-600 bg-black/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-purple-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            © 2025 R&C Platform • Minecraft Edition
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
};

export default Index;