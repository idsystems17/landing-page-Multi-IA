import { useState } from "react";
import { Terminal, Sparkles, Send, Brain, Cpu, MessageSquareQuote, ChevronRight, Activity, ArrowRight, Zap, RefreshCw } from "lucide-react";

export default function RoadmapGenerator() {
  const [nicho, setNicho] = useState<string>("vendas na internet");
  const [formato, setFormato] = useState<string>("Mini-Curso Rápido na Hotmart (R$ 47 - R$ 97)");
  const [experiencia, setExperiencia] = useState<"Iniciante" | "Intermediário" | "Hardcore">("Iniciante");
  const [horas, setHoras] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [generated, setGenerated] = useState<boolean>(true);

  // Dynamic Potentials based on Nicho lengths + Formatos + Experiences
  const calculatePotential = () => {
    let baseMin = 150;
    let baseMax = 450;
    
    if (formato.includes("Hotmart")) {
      baseMin = 150 + horas * 85;
      baseMax = 450 + horas * 210;
    } else if (formato.includes("E-book")) {
      baseMin = 80 + horas * 50;
      baseMax = 250 + horas * 110;
    } else if (formato.includes("Canal Dark")) {
      baseMin = 200 + horas * 120;
      baseMax = 600 + horas * 350;
    } else {
      baseMin = 300 + horas * 150;
      baseMax = 900 + horas * 450;
    }

    if (experiencia === "Intermediário") {
      baseMin = Math.round(baseMin * 1.3);
      baseMax = Math.round(baseMax * 1.3);
    } else if (experiencia === "Hardcore") {
      baseMin = Math.round(baseMin * 1.8);
      baseMax = Math.round(baseMax * 1.8);
    }

    return {
      min: baseMin,
      max: baseMax
    };
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 850);
  };

  const potential = calculatePotential();

  const getEbookDescription = () => {
    return `Um plano de ação altamente estratégico para criar, embalar e lançar um ${formato.toLowerCase()} focado em ${nicho.toLowerCase()} em tempo recorde. O método de orquestração consiste em dividir o fluxo de produção de conteúdo entre 4 Inteligências Artificiais gratuitas e especializadas, aproveitando o que há de melhor em cada modelo: usar o ChatGPT para mapear as dores e a estrutura, o Claude.ai para redação de altíssima profundidade que soa humana, o Leonardo.ai para fazer a capa e os criativos em alta fidelidade técnica e o Google Gemini para gerar a página de checkout de alta conversão. Ideal para seu nível de dedicação de ${horas}h diárias com perfil de experiência ${experiencia}.`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div id="roadmap-generator" className="bg-[#050510]/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl relative backdrop-blur-md">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl pointer-events-none rounded-full"></div>

        {/* Section Header */}
        <div className="bg-[#070715]/90 p-6 md:p-8 border-b border-white/5 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/10 text-orange-400 border border-orange-500/15 rounded text-[10px] font-mono font-bold tracking-widest uppercase">
            <Activity size={12} className="animate-pulse" /> Inteligência em Tempo Real
          </div>
          <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase">
            Gerador de Roadmap Multi-IA
          </h3>
          <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed max-w-2xl">
            Preencha os dados do seu plano para orquestrar Inteligências Artificiais Gratuitas do seu jeito. Nossa IA gerará uma estratégia detalhada e prontamente escalável no Kiwify / Hotmart, contendo mega-prompts específicos adaptados para o seu projeto.
          </p>
        </div>

        {/* Main Grid: Inputs vs Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Project Inputs */}
          <div className="lg:col-span-5 p-6 md:p-8 space-y-6 lg:border-r border-white/10 bg-black/40">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider pb-2 border-b border-white/5 uppercase">
              <Terminal size={14} className="text-orange-500" /> Dados do Projeto
            </div>

            {/* Input 1: Nicho */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-300 font-bold">
                Seu Nicho de Mercado
              </label>
              <input
                type="text"
                placeholder="Exemplo: vendas na internet, emagrecimento, finanças"
                value={nicho}
                onChange={(e) => setNicho(e.target.value)}
                className="w-full bg-black/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 font-sans transition-all"
              />
            </div>

            {/* Input 2: Objetivo/Formato */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-300 font-bold">
                Objetivo de Faturamento / Formato
              </label>
              <select
                value={formato}
                onChange={(e) => setFormato(e.target.value)}
                className="w-full bg-black/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 font-sans transition-all cursor-pointer block"
              >
                <option value="Mini-Curso Rápido na Hotmart (R$ 47 - R$ 97)">Mini-Curso Rápido na Hotmart (R$ 47 - R$ 97)</option>
                <option value="E-book Compacto para Venda Direta (R$ 19 - R$ 29)">E-book Compacto para Venda Direta (R$ 19 - R$ 29)</option>
                <option value="Canal Dark de Alta Retenção (YouTube/TikTok/Reels)">Canal Dark de Alta Retenção (YouTube/TikTok/Reels)</option>
                <option value="Captação de Clientes SEO High-Ticket no Fiverr">Captação de Clientes SEO High-Ticket no Fiverr</option>
              </select>
            </div>

            {/* Input 3: Nível de Experiência Toggle Buttons */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-300 font-bold">
                Nível de Experiência Prática
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Iniciante", "Intermediário", "Hardcore"] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setExperiencia(level)}
                    className={`py-2.5 rounded-xl border text-[11px] font-mono uppercase font-bold transition-all cursor-pointer ${
                      experiencia === level
                        ? "bg-orange-600/15 border-orange-500 text-orange-400 font-semibold shadow-[0_0_10px_rgba(234,88,12,0.15)]"
                        : "bg-black/60 border-white/5 text-gray-400 hover:text-white"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Horas Diárias Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold">
                  Horas de dedicação por Dia
                </label>
                <span className="text-orange-500 font-mono font-bold">
                  {horas} {horas === 1 ? "hora" : "horas"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={horas}
                onChange={(e) => setHoras(Number(e.target.value))}
                className="w-full accent-orange-500 bg-[#0a0a1a] rounded-sm appearance-none h-1.5 cursor-pointer focus:outline-none"
              />
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="cursor-pointer w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white font-black text-xs py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg transform active:scale-98"
            >
              {loading ? (
                <>
                  <RefreshCw className="animate-spin" size={14} />
                  Calibrando Fluxos...
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  Gerar Plano de Renda
                </>
              )}
            </button>
          </div>

          {/* Right Column: Output Results */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-black/20 min-h-[350px]">
            {generated ? (
              <div className="space-y-6 h-full flex flex-col justify-between">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase bg-[#0d0705] border border-orange-500/20 text-orange-400 px-2.5 py-1 rounded inline-block font-bold">
                    Plano de Monetização Ativo
                  </span>

                  {/* Operational Title */}
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight font-sans">
                    Fábrica de Cursos Expresso: Orquestração Multi-IA para <span className="text-orange-400">{nicho}</span>
                  </h4>

                  {/* Estimated Potential Badge */}
                  <div className="inline-flex items-center gap-3 p-4 bg-[#0a1510] border border-emerald-500/20 rounded-xl">
                    <div className="text-left leading-tight">
                      <span className="text-[9px] uppercase font-mono text-gray-500 block font-bold">Potencial estimado</span>
                      <span className="text-sm md:text-base font-black text-emerald-400 font-mono tracking-tight leading-none">
                        R$ {potential.min.toLocaleString("pt-BR")},00 a R$ {potential.max.toLocaleString("pt-BR")},00
                      </span>
                    </div>
                  </div>

                  {/* Analytical strategic paragraph */}
                  <p className="text-gray-300 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {getEbookDescription()}
                  </p>
                </div>

                {/* Subheading + IA Badge List */}
                <div className="space-y-3 border-t border-white/5 pt-5 mt-auto">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block font-bold">
                    IAs gratuitas orquestradas neste plano:
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {["ChatGPT (Gratuito)", "Claude.ai (Gratuito)", "Leonardo.ai (Gratuito)", "Gemini (Gratuito)"].map((aiName) => (
                      <span
                        key={aiName}
                        className="bg-[#0c0c1b] border border-white/5 rounded-full px-3.5 py-1 text-[10px] font-mono text-gray-400 leading-none flex items-center gap-1.5"
                      >
                        <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                        {aiName}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <Brain size={48} className="text-orange-500/20 animate-pulse" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-300 uppercase font-mono">Pronto Para Gerar</h4>
                  <p className="text-xs text-gray-500 max-w-xs font-sans">
                    Insira as configurações e metas de faturamento nos campos ao lado para orquestrar suas IAs.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
