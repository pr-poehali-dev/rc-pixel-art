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

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500/10"
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

      <header className="relative z-10 border-b-4 border-purple-600 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="Gamepad2" className="text-purple-500" size={32} />
            <h1 className="text-2xl font-bold text-purple-400 tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              РЕТРО ПЛАТФОРМА
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
            <Card className="bg-black/70 border-4 border-purple-600 p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/a0e2c03e-3911-49a7-bb8a-ea90c37faa11/files/a64b0f6f-b761-434c-8d5d-17da9c74f88b.jpg"
                    alt="R&C Logo"
                    className="w-64 h-64 object-contain pixelated"
                    style={{
                      imageRendering: "pixelated",
                      filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))",
                    }}
                  />
                  <div className="absolute -inset-4 bg-purple-600/20 blur-2xl -z-10 animate-pulse"></div>
                </div>

                <h2
                  className="text-4xl text-center text-purple-400 tracking-widest animate-pulse"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    textShadow: "0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.5)",
                    lineHeight: "1.5",
                  }}
                >
                  RETRO & CYBER
                </h2>

                <p
                  className="text-center text-purple-300 max-w-md"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Игровая платформа в стиле классического 8-bit. Прыгай, собирай монеты, побеждай врагов!
                </p>

                <Button
                  onClick={handleJump}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white border-4 border-purple-400 px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all hover:scale-105"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  <Icon name="Rocket" className="mr-2" size={24} />
                  ИГРАТЬ
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-purple-400 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 border-4 border-purple-400 flex items-center justify-center">
                    <Icon name="Blocks" className="text-purple-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    ПЛАТФОРМЫ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Блочные уровни как в классических играх
                  </p>
                </div>
              </Card>

              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-purple-400 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 border-4 border-purple-400 flex items-center justify-center">
                    <Icon name="Ghost" className="text-purple-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    ВРАГИ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Пиксельные противники в стиле 8-bit
                  </p>
                </div>
              </Card>

              <Card className="bg-black/70 border-4 border-purple-600 p-6 backdrop-blur-sm hover:border-purple-400 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 border-4 border-purple-400 flex items-center justify-center">
                    <Icon name="Trophy" className="text-purple-100" size={32} />
                  </div>
                  <h3
                    className="text-lg text-purple-300"
                    style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700" }}
                  >
                    ОЧКИ
                  </h3>
                  <p className="text-center text-purple-400 text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    Собирай бонусы и побеждай рекорды
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-purple-700 border-2 border-purple-500 hover:bg-purple-600 transition-colors cursor-pointer hover:scale-110 transform"
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
            © 2025 R&C Platform • Pixel Art Edition
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
