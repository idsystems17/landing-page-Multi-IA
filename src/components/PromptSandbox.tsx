import { Terminal, Sparkles, Brain, Cpu, MessageSquareQuote } from "lucide-react";

interface NicheOption {
  id: string;
  name: string;
  placeholderProduct: string;
}

interface GoalOption {
  id: string;
  title: string;
  provider: string;
  icon: typeof Cpu | typeof Brain | typeof MessageSquareQuote;
  color: string;
}

export default function PromptSandbox() {
  const selectedNiche = "finances";
  const selectedGoal = "chatgpt_hooks";

  // List of high quality niche options
  const niches: NicheOption[] = [
    { id: "finances", name: "Finanças e Dinheiro", placeholderProduct: "Orçamento Mestre para Famílias de Médio Ticket" },
    { id: "health", name: "Saúde e Emagrecimento", placeholderProduct: "Método Seca 21: Receitas Práticas Sem Glúten" },
    { id: "productivity", name: "Carreira e Produtividade", placeholderProduct: "O Guia Notion para Líderes de Equipes Híbridas" },
    { id: "development", name: "Desenvolvimento Pessoal", placeholderProduct: "O Código do Foco: Mindset Anti-Distração" }
  ];

  // List of goal structures representing the unique strength of our hybrid prompt engineering approach
  const goals: GoalOption[] = [
    {
      id: "chatgpt_hooks",
      title: "Ganchos Emocionais & Títulos Psicológicos",
      provider: "Otimizado para ChatGPT",
      icon: MessageSquareQuote,
      color: "from-emerald-600/20 to-green-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      id: "gemini_science",
      title: "Validação Científica de Teses & Fontes Reais",
      provider: "Otimizado para Google Gemini",
      icon: Brain,
      color: "from-blue-600/20 to-sky-500/10 text-sky-400 border-sky-500/20",
    },
    {
      id: "claude_humanizer",
      title: "Humanização de Copy & Textura de Linguagem",
      provider: "Otimizado para Claude.ai",
      icon: Cpu,
      color: "from-purple-600/20 to-violet-500/10 text-purple-400 border-purple-500/20",
    }
  ];

  const activeGoalObj = goals.find(g => g.id === selectedGoal) || goals[0];
  const activeNicheObj = niches.find(n => n.id === selectedNiche) || niches[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div id="prompt-sandbox" className="bg-black border border-white/10 rounded-sm p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden select-none pointer-events-none">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl pointer-events-none rounded-full"></div>
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles size={11} /> LABORATÓRIO DE ENGENHARIA (AMMOSTRA)
            </div>
            <h4 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2 uppercase mt-3">
              <Terminal size={18} className="text-orange-500" /> Prompts Mestre para Orquestração (Módulo 4)
            </h4>
            <p className="text-gray-400 text-xs md:text-sm font-light font-sans mt-1">
              Demonstração visual do laboratório de engenharia. Todos os prompts e fluxos estruturados avançados com scripts prontos estão bloqueados de forma segura e são entregues na íntegra no e-book.
            </p>
          </div>
          <span className="bg-orange-600/15 border border-orange-500/30 text-orange-400 px-5 py-3 rounded-sm font-mono text-[10px] uppercase tracking-wider font-bold shrink-0 text-center">
            BLOQUEADO — EXCLUSIVO PARA ALUNOS
          </span>
        </div>

        {/* Selection grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black opacity-60">
          
          {/* Section A: Choose Niche */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-gray-500 block font-bold">
              Passo 1: Selecione o seu Nicho Digital
            </span>
            <div className="flex flex-col gap-2">
              {niches.map((n) => (
                <div
                  key={n.id}
                  className={`w-full text-left p-3.5 rounded-sm border transition-all duration-200 flex flex-col gap-0.5 ${
                    selectedNiche === n.id
                      ? "bg-orange-600/10 border-orange-500/40 text-white"
                      : "bg-[#0a0a0a] border-white/5 text-gray-600"
                  }`}
                >
                  <span className="text-xs font-bold font-sans uppercase tracking-tight">{n.name}</span>
                  <span className="text-[10px] font-mono opacity-50">Ex: "{n.placeholderProduct}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Choose Tool Goal */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-gray-500 block font-bold">
              Passo 2: Objetivo Mestre de Escrita de Copy
            </span>
            <div className="flex flex-col gap-2">
              {goals.map((g) => {
                const ItemIcon = g.icon;
                const isSelected = selectedGoal === g.id;
                return (
                  <div
                    key={g.id}
                    className={`w-full text-left p-3.5 rounded-sm border transition-all duration-200 flex items-start gap-3 ${
                      isSelected
                        ? `bg-orange-600/10 border-orange-500/40 text-white`
                        : "bg-[#0a0a0a] border-white/5 text-gray-600"
                    }`}
                  >
                    <div className={`p-2 rounded-sm bg-black border border-white/5 shrink-0 ${isSelected ? "text-orange-500 border-orange-500/20" : "text-gray-500"}`}>
                      <ItemIcon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold block uppercase tracking-tight">{g.title}</span>
                      <span className="text-[10px] uppercase font-mono text-orange-400/80">{g.provider}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Display Code Editor Sandbox */}
        <div className="space-y-2 border-t border-white/5 pt-5 relative">
          <div className="flex justify-between items-center text-xs font-mono text-gray-500 bg-[#0a0a0a] px-4 py-2 rounded-t-sm border-x border-t border-white/10 select-none">
            <span className="flex items-center gap-1.5 font-semibold text-gray-400">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 inline-block opacity-40"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 inline-block opacity-40"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block opacity-40"></span>
              Orquestrador_Prompt_Mestre.py
            </span>
            <span className="uppercase text-[10px] text-red-400 tracking-wider font-bold">
              CONTEÚDO PROTEGIDO
            </span>
          </div>

          <div className="relative bg-[#050505] border-x border-b border-white/10 rounded-b-sm p-4 md:p-5 font-mono text-[11px] md:text-xs text-gray-300 leading-relaxed max-h-72 overflow-hidden select-none cursor-default">
            {/* Sneak peek of the prompt with strong blur and fade overlay */}
            <div className="opacity-20 blur-[3px] select-none select-none select-none select-none select-none">
              [INSTRUÇÃO DE PERSONA: ATUE COMO REDATOR SÊNIOR ESPECIALISTA EM ENGENHARIA SOCIAL E PSICOLOGIA COMPORTAMENTAL]
              <br />
              Tivemos um problema com nosso infoproduto intitulado: "Orçamento Mestre para Famílias de Médio Ticket" no nicho de "Finanças e Dinheiro". Queremos quebrar o padrão chato do do mercado tradicional de marketing digital que gera títulos genéricos...
              <br />
              Sua tarefa é planejar 5 variações de ganchos (Ganchos de 3 segundos) baseados nos seguintes gatilhos psicológicos descritos abaixo e rodar a rotina de auto-humanização passo a passo...
            </div>
            
            {/* Elegant overlay lock message */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-6 text-center select-none">
              <div className="h-10 w-10 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-3">
                🔒
              </div>
              <span className="text-xs font-bold font-mono uppercase text-white tracking-wider">
                Exemplo de Engenharia Oculto
              </span>
              <p className="text-[11px] text-gray-400 max-w-sm font-sans mt-1.5 leading-normal">
                Para proteger os direitos autorais e dar exclusividade aos compradores, a engenharia completa do prompt estrá disponível para cópia imediata no painel de membros após a compra.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
