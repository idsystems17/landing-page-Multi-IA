import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 42, seconds: 19 });

  useEffect(() => {
    const targetKey = "multi_ia_countdown_target";
    let targetTime = localStorage.getItem(targetKey);

    if (!targetTime) {
      const future = new Date(Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000);
      targetTime = future.toString();
      localStorage.setItem(targetKey, targetTime);
    }

    const interval = setInterval(() => {
      const diff = new Date(targetTime!).getTime() - Date.now();
      if (diff <= 0) {
        const newFuture = new Date(Date.now() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000);
        localStorage.setItem(targetKey, newFuture.toString());
        return;
      }
      setTimeLeft({
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-md mx-auto text-center shadow-sm">
      <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-1">
        Apenas hoje · Oferta com 40% OFF
      </div>
      <div className="text-sm text-gray-500 mb-4">O preço original retorna em:</div>
      <div className="flex items-center justify-center gap-3">
        {[{ val: timeLeft.hours, label: "Horas" }, { val: timeLeft.minutes, label: "Min" }, { val: timeLeft.seconds, label: "Seg" }].map(({ val, label }, i) => (
          <>
            {i > 0 && <span key={`sep-${i}`} className="text-2xl font-bold text-[#2563EB] animate-pulse">:</span>}
            <div key={label} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#1F2937] bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-2 min-w-[60px]">
                {fmt(val)}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 uppercase">{label}</span>
            </div>
          </>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#2563EB] font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
        </span>
        87% dos acessos já preenchidos
      </div>
    </div>
  );
}
