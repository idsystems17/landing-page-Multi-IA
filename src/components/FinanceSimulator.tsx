import { useState } from "react";
import { TrendingUp, Target, Sparkles, Check, Info, Award, ShieldCheck, Zap } from "lucide-react";

export default function FinanceSimulator() {
  const [ticketPrice, setTicketPrice] = useState<number>(29.90);
  const [traffic, setTraffic] = useState<number>(500); // Daily visits
  const [conversionRate, setConversionRate] = useState<number>(1.5); // Conversion percentage

  // Checklist items state
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Definir um nicho vencedor que combine paixão e demanda alta", completed: true },
    { id: 2, text: "Escolher e configurar 2 IAs gratuitas complementares", completed: false },
    { id: 3, text: "Gerar um Roadmap Personalizado usando o gerador de roadmap", completed: false },
    { id: 4, text: "Criar uma conta gratuita na Kiwify ou Hotmart", completed: false },
    { id: 5, text: "Gerar um mega-prompt de vendas da aula de E-books e rodar no Claude.ai", completed: false },
    { id: 6, text: "Criar criativo estético no Canva em menos de 10 minutos", completed: false },
    { id: 7, text: "Publicar seu link de afiliado ou infoproduto nas redes e acompanhar métricas", completed: false }
  ]);

  const toggleChecklist = (id: number) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  // Calculations
  const totalVisitsMonthly = traffic * 30;
  const salesCountMonthly = Math.round(totalVisitsMonthly * (conversionRate / 100));
  const totalMonthlyCalculated = salesCountMonthly * ticketPrice;

  // Format currencies in BRL nicely
  const formatBRL = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div id="simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Simulador de Ganhos Digitais */}
        <div className="lg:col-span-7 bg-[#050510]/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 relative overflow-hidden backdrop-blur-md">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 blur-3xl pointer-events-none rounded-full"></div>
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded">
              Planejador Estratégico de Entrada
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
              Simulador de Ganhos Digitais
            </h3>
            <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed">
              Calcule de forma empírica o volume de visitas e o ticket médio que você precisa na Kiwify ou Hotmart para atingir a sua autonomia financeira vendendo o infoproduto montado com IAs gratuitas.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Control 1: Valor Unitário do Infoproduto */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold">
                  Valor Unitário do Infoproduto (R$)
                </label>
                <span className="text-blue-400 font-mono font-black text-sm">
                  {formatBRL(ticketPrice)}
                </span>
              </div>
              <input
                type="range"
                min="10.00"
                max="100.00"
                step="1.00"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full accent-orange-500 bg-[#0a0a1a] rounded-sm appearance-none h-1.5 cursor-pointer focus:outline-none"
              />
              <div className="flex gap-2 pt-1">
                {[30, 47, 97].map((presetPrice) => (
                  <button
                    key={presetPrice}
                    onClick={() => setTicketPrice(presetPrice)}
                    className={`py-1 px-3 text-[11px] font-mono rounded border transition-all cursor-pointer ${
                      Math.abs(ticketPrice - presetPrice) < 1
                        ? "bg-orange-600/20 border-orange-500 text-orange-400 font-bold"
                        : "bg-[#0a0a15] border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                    }`}
                  >
                    R$ {presetPrice}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Tráfego de Visitas Diárias */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold">
                  Tráfego de Visitas Diárias (Orgânico + Reels/Dark)
                </label>
                <span className="text-purple-400 font-mono font-black text-sm">
                  {traffic} visualizações/dia
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-orange-500 bg-[#0a0a1a] rounded-sm appearance-none h-1.5 cursor-pointer focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-gray-500 font-mono uppercase tracking-tight">
                <span>100 visitas (Baixo)</span>
                <span>1.500 visitas (Normal)</span>
                <span>5.000 visitas (Elite)</span>
              </div>
            </div>

            {/* Control 3: Taxa de Conversão */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold">
                  Taxa de Conversão da Página de Vendas (%)
                </label>
                <span className="text-emerald-400 font-mono font-black text-sm">
                  {conversionRate.toFixed(1)}% de conversão
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-orange-500 bg-[#0a0a1a] rounded-sm appearance-none h-1.5 cursor-pointer focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-gray-500 font-mono uppercase tracking-tight leading-normal">
                <span>0.5% (E-book básico)</span>
                <span>1.5% (Médio com VSL de roteiro Claude)</span>
                <span>5.0% (Alto Tráfego Orgânico quente)</span>
              </div>
            </div>

          </div>

          {/* RESULTS BLOCK */}
          <div className="border-t border-white/5 pt-6 space-y-6">
            <h4 className="text-xs uppercase font-mono tracking-widest text-gray-500 font-black">
              Resultado da Engenharia de Funil (Mensal)
            </h4>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 bg-black/60 rounded-xl border border-white/5 flex flex-col justify-center">
                <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block">Total Visitas</span>
                <span className="text-lg md:text-xl font-bold text-white font-sans mt-1">
                  {totalVisitsMonthly.toLocaleString("pt-BR")}
                </span>
              </div>
              
              <div className="p-4 bg-black/60 rounded-xl border border-white/5 flex flex-col justify-center">
                <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider block">Vendas Pagas</span>
                <span className="text-lg md:text-xl font-bold text-purple-400 font-sans mt-1">
                  {salesCountMonthly.toLocaleString("pt-BR")}
                </span>
              </div>

              <div className="p-4 bg-orange-600/5 rounded-xl border border-orange-500/10 flex flex-col justify-center">
                <span className="text-[9px] text-orange-400/80 font-mono uppercase tracking-wider block">Total Faturado</span>
                <span className="text-lg md:text-xl font-black text-emerald-400 font-sans mt-1">
                  {formatBRL(totalMonthlyCalculated)}
                </span>
              </div>
            </div>

            {/* Lightbulb Insight */}
            <div className="flex gap-2.5 items-start p-4 bg-[#110c05] rounded-xl border border-orange-500/10 text-xs font-sans leading-relaxed text-gray-300 font-light">
              <span className="text-lg leading-none mt-0.5 select-none text-orange-400">💡</span>
              <p>
                <strong className="text-white font-semibold">A mestre do Funil:</strong> Com apenas {salesCountMonthly} compras mensais de {formatBRL(ticketPrice)} usando um produto criado em 1h com orquestração Multi-IA, você consegue colocar no seu bolso livre um salário líquido de <strong className="text-emerald-400 font-bold">{formatBRL(totalMonthlyCalculated)}/mês</strong>.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Desafio Digital 24 Horas */}
        <div className="lg:col-span-5 bg-[#050510]/40 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden backdrop-blur-md">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none rounded-full"></div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              Gamificação de Resultados
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
              Desafio Digital 24 Horas
            </h3>
            <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
              Corte o blá-blá-blá teórico. Siga o roteiro pragmático abaixo, marque cada item como completo e desbloqueie o Certificado profissional de monetização no menu de Certificação.
            </p>
          </div>

          {/* Toggle Interactive Checklist */}
          <div className="space-y-3 pt-2">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`flex gap-3 items-center p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  item.completed
                    ? "bg-purple-600/10 border-purple-500/20 text-white"
                    : "bg-black/40 border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                    item.completed
                      ? "bg-purple-600 border-purple-500 text-white"
                      : "border-white/20 bg-black/50"
                  }`}
                >
                  {item.completed && <Check size={12} className="stroke-3" />}
                </div>
                <span className={`text-xs leading-normal font-sans ${item.completed ? "line-through text-gray-300" : "font-normal"}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Progress gauge */}
          <div className="border-t border-white/5 pt-4 space-y-2">
            <div className="flex justify-between text-[11px] font-mono uppercase text-gray-500">
              <span>Status do Desafio ({completedCount}/{checklist.length})</span>
              <span className="text-purple-400 font-bold">{progressPercent}%</span>
            </div>
            
            <div className="w-full bg-[#0a0a1a] rounded h-1.5 overflow-hidden border border-white/5">
              <div
                className="bg-gradient-to-r from-purple-500 to-orange-500 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {progressPercent === 100 && (
              <div className="flex gap-2 items-center p-3 bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 rounded font-sans animate-bounce mt-2 uppercase tracking-wide">
                <Award size={14} className="text-purple-400 shrink-0" />
                <span>Excelente! Desafio Concluído. Vá e emita seu Certificado agora!</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
