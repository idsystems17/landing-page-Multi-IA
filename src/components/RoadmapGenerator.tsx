import { Terminal, Sparkles, Brain, ChevronRight, Activity, Zap } from "lucide-react";

export default function RoadmapGenerator() {
  const nicho: string = "vendas na internet";
  const formato: string = "E-book Compacto para Venda Direta (R$ 19 - R$ 29)";
  const experiencia: string = "Iniciante";
  const horas: number = 2;

  // Static Potentials based on the selected Ebook format and Iniciante level
  const potential = {
    min: 180,
    max: 470
  };

  const getEbookDescription = () => {
    return `Um plano de ação altamente estratégico para criar, embalar e lançar um ebook compacto focado em vendas na internet em tempo recorde. O método de orquestração consiste em dividir o fluxo de produção de conteúdo entre Inteligências Artificiais gratuitas e especializadas, aproveitando o que há de melhor em cada modelo: usar a IA conversacional para mapear as dores e a estrutura, a IA de redação para modelagem de copy com altíssima qualidade e tom humano, as ferramentas de arte digital para gerar capas em alta fidelidade estética e o seu modelo de pesquisa preferencial para validar fatos históricos relevantes. Ideal para seu nível de dedicação de 2h diárias com perfil de experiência Iniciante.`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div id="roadmap-generator" className="bg-[#050510]/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl relative backdrop-blur-md">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl pointer-events-none rounded-full"></div>

        {/* Section Header */}
        <div className="bg-[#070715]/90 p-6 md:p-8 border-b border-white/5 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/10 text-orange-400 border border-orange-500/15 rounded text-[10px] font-mono font-bold tracking-widest uppercase">
            <Activity size={12} className="shrink-0" /> EXEMPLO DE ROTEIRO DE SUCESSO
          </div>
          <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase">
            Gerador de Prompts Prontos
          </h3>
          <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed max-w-2xl">
            Amostra estática do gerador inteligente. Informe seu nicho e receba prompts personalizados prontos para usar — no ChatGPT, Gemini, Claude ou Leonardo.AI — é só copiar, colar e ver a mágica acontecer.
          </p>
        </div>

        {/* Main Grid: Inputs vs Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 pointer-events-none select-none">
          
          {/* Left Column: Project Inputs */}
          <div className="lg:col-span-5 p-6 md:p-8 space-y-6 lg:border-r border-white/10 bg-black/40 opacity-75">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                <Terminal size={14} className="text-orange-500" /> Parâmetros do Projeto
              </div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-red-500/10 text-red-400 px-2 py-0.5 border border-red-500/20 rounded">
                Amostra Estática
              </span>
            </div>

            {/* Input 1: Nicho */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 font-bold">
                Seu Nicho de Mercado
              </label>
              <div className="w-full bg-black/80 border border-white/5 rounded-xl px-4 py-3.5 text-xs text-gray-300 font-sans cursor-default">
                {nicho}
              </div>
            </div>

            {/* Input 2: Objetivo/Formato */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 font-bold">
                Objetivo de Faturamento / Formato
              </label>
              <div className="w-full bg-black/80 border border-white/5 rounded-xl px-4 py-3.5 text-xs text-gray-300 font-sans cursor-default">
                {formato}
              </div>
            </div>

            {/* Input 3: Nível de Experiência Toggle Buttons */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 font-bold">
                Nível de Experiência Prática
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Iniciante", "Intermediário", "Hardcore"] as const).map((level) => (
                  <div
                    key={level}
                    className={`text-center py-2.5 rounded-xl border text-[11px] font-mono uppercase font-bold transition-all ${
                      experiencia === level
                        ? "bg-orange-600/10 border-orange-500/30 text-orange-400"
                        : "bg-black/40 border-white/5 text-gray-600"
                    }`}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>

            {/* Input 4: Horas Diárias Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-400 font-bold">
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
                disabled
                className="w-full accent-orange-500 bg-[#0a0a1a] rounded-sm appearance-none h-1.5 focus:outline-none cursor-default"
              />
            </div>

            {/* Static Informational Lock Badge */}
            <div className="w-full bg-[#110505] border border-red-500/10 text-red-400 font-bold text-xs py-4 px-6 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider">
              <Zap size={14} />
              BLOQUEADO — DISPONÍVEL NO E-BOOK
            </div>
          </div>

          {/* Right Column: Output Results */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-black/20 min-h-[350px]">
            <div className="space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase bg-[#0d0705] border border-orange-500/20 text-orange-400 px-2.5 py-1 rounded inline-block font-bold">
                  Plano de Monetização Ativo (Exemplo Prático)
                </span>

                {/* Operational Title */}
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight font-sans">
                  Fábrica de Infoprodutos: Orquestração Multi-IA para <span className="text-orange-400">{nicho}</span>
                </h4>

                {/* Estimated Potential Badge */}
                <div className="inline-flex items-center gap-3 p-4 bg-[#0a1510] border border-emerald-500/20 rounded-xl">
                  <div className="text-left leading-tight">
                    <span className="text-[9px] uppercase font-mono text-gray-500 block font-bold">Potencial estimado</span>
                    <span className="text-sm md:text-base font-black text-emerald-400 font-mono tracking-tight leading-none">
                      R$ {potential.min.toLocaleString("pt-BR")},00 a R$ {potential.max.toLocaleString("pt-BR")},00 / mês
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
                  IAs gratuitas orquestradas neste plano de exemplo:
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    "IA de Copywriting (Grátis • ChatGPT 4o gratuito)",
                    "IA de Redação (Grátis • Claude gratuito)",
                    "IA de Arte Estética (Grátis • Leonardo.AI gratuito)",
                    "IA de Pesquisa Factual (Grátis • Gemini gratuito / Perplexity gratuito)"
                  ].map((aiName) => (
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
          </div>

        </div>

      </div>
    </div>
  );
}
