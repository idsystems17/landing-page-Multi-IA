import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    // Generate a beautiful, stable target time (e.g. end of current day or standard 2h 45m loop)
    const targetKey = "multi_ia_countdown_target";
    let targetTime = localStorage.getItem(targetKey);

    if (!targetTime) {
      const now = new Date();
      // Use standard 3 hours from now for genuine visitor-level urgency
      const future = new Date(now.getTime() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000);
      targetTime = future.toString();
      localStorage.setItem(targetKey, targetTime);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = new Date(targetTime!).getTime() - now;

      if (difference <= 0) {
        // Reset to next 2.5 hours
        const newFuture = new Date(new Date().getTime() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000);
        localStorage.setItem(targetKey, newFuture.toString());
        return;
      }

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] backdrop-blur-md rounded-sm border border-orange-500/30 p-6 md:p-8 max-w-md mx-auto text-center shadow-[0_0_30px_rgba(234,88,12,0.15)]">
      <div className="text-xs uppercase tracking-widest text-orange-500 font-mono font-bold mb-2">
         Apenas Hoje • Oferta Exclusiva com 70% OFF
      </div>
      <div className="text-sm font-medium text-gray-300 mb-4 uppercase">
        As inscrições encerram e o preço original retorna em:
      </div>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-extrabold font-mono text-white bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 min-w-[70px] shadow-inner font-sans">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[10px] uppercase font-mono text-gray-400 mt-2">Horas</span>
        </div>
        <div className="text-3xl font-bold text-orange-500 animate-pulse font-mono">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-extrabold font-mono text-white bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 min-w-[70px] shadow-inner font-sans">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[10px] uppercase font-mono text-gray-400 mt-2">Minutos</span>
        </div>
        <div className="text-3xl font-bold text-orange-500 animate-pulse font-mono">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-extrabold font-mono text-white bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 min-w-[70px] shadow-inner border-orange-500/35 font-sans">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[10px] uppercase font-mono text-gray-400 mt-2">Segundos</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-orange-400 font-medium font-mono uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        Vagas preenchendo rápido — 87% completadas
      </div>
    </div>
  );
}
