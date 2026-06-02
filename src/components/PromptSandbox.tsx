import { useState } from "react";
import { Copy, Check, Terminal, Sparkles, Brain, Cpu, MessageSquareQuote } from "lucide-react";

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
  promptSchema: (nicheName: string, placeholderProduct: string) => string;
}

export default function PromptSandbox() {
  const [selectedNiche, setSelectedNiche] = useState<string>("finances");
  const [selectedGoal, setSelectedGoal] = useState<string>("chatgpt_hooks");
  const [copied, setCopied] = useState<boolean>(false);

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
      promptSchema: (niche, product) => `[INSTRUÇÃO DE PERSONA: ATUE COMO REDATOR SÊNIOR ESPECIALISTA EM ENGENHARIA SOCIAL E PSICOLOGIA COMPORTAMENTAL]

Tivemos um problema com nosso infoproduto intitulado: "${product}" no nicho de "${niche}". Queremos quebrar o padrão chato do mercado tradicional de marketing digital que gera títulos genéricos. 

Sua tarefa é planejar 5 variações de ganchos (Ganchos de 3 segundos) baseados nos seguintes gatilhos psicológicos descritos abaixo:

1. GATILHO DA REVELAÇÃO CHOCANTE: Expõe uma "quase verdade" que o mercado tenta esconder e depois oferece o produto como a única saída.
2. GATILHO DO PARADOXO DO ESFORÇO: Mostra como fazer o contrário do que recomendam gera resultados 10 vezes mais rápidos.
3. GATILHO DA COMPARAÇÃO ABSURDA: Compara o gasto de continuar ignorando o conhecimento com alguma bobagem diária (exemplo: assinar o Claude Pro vs comprar um café gourmet por dia).

---
REGRAS DE CONSTRUÇÃO DO CONTEXTO:
- Sem adjetivos saturados ("incrível", "sensacional", "revolucionário").
- Linguagem fria, direta, quase acadêmica, que gera máxima credibilidade instantânea.
- Inicie cada frase rompendo o padrão lógico natural.

Qual é o seu melhor rascunho de alto nível em português para essa estrutura?`
    },
    {
      id: "gemini_science",
      title: "Validação Científica de Teses & Fontes Reais",
      provider: "Otimizado para Google Gemini",
      icon: Brain,
      color: "from-blue-600/20 to-sky-500/10 text-sky-400 border-sky-500/20",
      promptSchema: (niche, product) => `[INSTRUÇÃO DE PERSONA: ATUE COMO CHIEF RESEARCH OFFICIER (DIRETOR DE ANÁLISE CIENTÍFICA)]

Estou estruturando um e-book de conversão rápida e preciso fundamentar o capítulo central do produto "${product}" (niche: "${niche}") com pilares válidos de autoridade científica. 

Suas tarefas integradas de pesquisa são:
1. Mapeie 3 papers, ensaios acadêmicos ou descobertas médicas/técnicas amplamente aceitas relacionadas aos benefícios desse produto.
2. Extraia o termo técnico exato (exemplo: "neuroplasticidade induzida", "efeito tripwire dinâmico", "frequência de cortisol") e crie uma analogia humilde, didática e de fácil leitura para o leitor comum.
3. Crie duas caixas de texto com o título "PROVA EMPÍRICA" para eu copiar e colar diretamente no meu infoproduto, citando nomes e anos aproximados de grandes instituições globais confiáveis (exemplo: Harvard, MIT, USP, Nobel Laureates).

---
RESTRIÇÃO RIGOROSA:
- Se houver lacuna ou falta de comprovação literal, sugira alternativas saudáveis de formulação do texto para que a copy continue 100% ética e em total conformidade com as diretrizes do Google Ads contra afirmações falsas ou enganosas.
  
Execute com pesquisa detalhada.`
    },
    {
      id: "claude_humanizer",
      title: "Humanização de Copy & Textura de Linguagem",
      provider: "Otimizado para Claude.ai",
      icon: Cpu,
      color: "from-purple-600/20 to-violet-500/10 text-purple-400 border-purple-500/20",
      promptSchema: (niche, product) => `[INSTRUÇÃO DE PERSONA: ATUE COMO EDITOR EDITORIAL HOMOLOGADO DA NEW YORK TIMES (TEXTURA NATURAL E ENGAJAMENTO RÍTMICO)]

O parágrafo abaixo foi gerado por uma Inteligência Artificial padrão e soa extremamente genérico, robótico, repetitivo e artificial. Preciso que você reescreva-o usando o "Filtro de Humanização Avançada":

TEXTO ORIGINAL ROBÓTICO:
"Ao adquirir este e-book de ${product}, você estará transformando totalmente sua realidade em relação ao nicho de ${niche}. Nossa metodologia inovadora exclusiva ensinará passos simples e objetivos para você otimizar seu tempo imediatamente e obter resultados incríveis e extraordinários no ambiente online hoje."

---
PRINCÍPIOS DO FILTRO DE HUMANIZAÇÃO MULTI-IA PARA Claude.ai:
- Variabilidade de Sentenças: Alterne frases curtas de 3 palavras com frases médias. Nunca mantenha o mesmo ritmo sistemático de palavras.
- Vocabulário imperfeito: Remova palavras robóticas ("conectar", "otimizar", "através", "transformador", "fundamental", "em primeiro lugar", "além disso").
- Textura sensorial: Adicione palavras que evocam reações físicas (exemplo: "pesado", "seco", "despertar de madrugada descendo as escadas", "dor no estômago").
- Voz ativa na primeira pessoa levemente vulnerável, soando como um e-mail escrito de pressa por um colega confiável.

Escreva o texto final humanizado em português.`
    }
  ];

  const handleCopy = () => {
    const activeNicheObj = niches.find(n => n.id === selectedNiche) || niches[0];
    const activeGoalObj = goals.find(g => g.id === selectedGoal) || goals[0];
    const textToCopy = activeGoalObj.promptSchema(activeNicheObj.name, activeNicheObj.placeholderProduct);

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getActivePromptText = () => {
    const activeNicheObj = niches.find(n => n.id === selectedNiche) || niches[0];
    const activeGoalObj = goals.find(g => g.id === selectedGoal) || goals[0];
    return activeGoalObj.promptSchema(activeNicheObj.name, activeNicheObj.placeholderProduct);
  };

  const activeGoalObj = goals.find(g => g.id === selectedGoal) || goals[0];
  const GoalIcon = activeGoalObj.icon;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div id="prompt-sandbox" className="bg-black border border-white/10 rounded-sm p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl pointer-events-none rounded-full"></div>
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles size={11} className="animate-pulse" /> LABORATÓRIO INTERATIVO
            </div>
            <h4 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2 uppercase mt-3">
              <Terminal size={18} className="text-orange-500" /> Gerador Estratégico de Prompts (Módulo 4)
            </h4>
            <p className="text-gray-400 text-xs md:text-sm font-light font-sans mt-1">
              Escolha seu nicho de atuação e seu objetivo. Copie o mega-prompt personalizado e use em sua ferramenta de preferência gratuitamente!
            </p>
          </div>
          <button
            onClick={handleCopy}
            className={`cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-sm font-mono text-xs transition-all duration-300 uppercase tracking-wider font-bold shrink-0 ${
              copied
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-orange-600 text-white hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)]"
            }`}
          >
            {copied ? (
              <>
                <Check size={14} strokeWidth={3} /> COPIADO!
              </>
            ) : (
              <>
                <Copy size={14} /> COPIAR PROMPT ATUAL
              </>
            )}
          </button>
        </div>

        {/* Selection grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black">
          
          {/* Section A: Choose Niche */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-gray-500 block font-bold">
              Passo 1: Selecione o seu Nicho Digital
            </span>
            <div className="flex flex-col gap-2">
              {niches.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNiche(n.id)}
                  className={`cursor-pointer w-full text-left p-3.5 rounded-sm border transition-all duration-200 flex flex-col gap-0.5 ${
                    selectedNiche === n.id
                      ? "bg-orange-600/10 border-orange-500/55 text-white"
                      : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
                  }`}
                >
                  <span className="text-xs font-bold font-sans uppercase tracking-tight">{n.name}</span>
                  <span className="text-[10px] font-mono opacity-60">Ex: "{n.placeholderProduct}"</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section B: Choose Tool Goal */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-gray-500 block font-bold">
              Passo 2: Qual é o seu Objetivo Mestre do Trabalho?
            </span>
            <div className="flex flex-col gap-2">
              {goals.map((g) => {
                const ItemIcon = g.icon;
                const isSelected = selectedGoal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`cursor-pointer w-full text-left p-3.5 rounded-sm border transition-all duration-200 flex items-start gap-3 ${
                      isSelected
                        ? `bg-orange-600/10 border-orange-500/55 text-white shadow-[0_0_12px_rgba(234,88,12,0.06)]`
                        : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
                    }`}
                  >
                    <div className={`p-2 rounded-sm bg-black border border-white/5 shrink-0 ${isSelected ? "text-orange-500 border-orange-500/20" : "text-gray-500"}`}>
                      <ItemIcon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold block uppercase tracking-tight">{g.title}</span>
                      <span className="text-[10px] uppercase font-mono text-orange-400/80">{g.provider}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Display Code Editor Sandbox */}
        <div className="space-y-2 border-t border-white/5 pt-5">
          <div className="flex justify-between items-center text-xs font-mono text-gray-500 bg-[#0a0a0a] px-4 py-2 rounded-t-sm border-x border-t border-white/10">
            <span className="flex items-center gap-1.5 font-semibold text-gray-400">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 inline-block"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block"></span>
              Orquestrador_Prompt_Mestre.py
            </span>
            <span className="uppercase text-[10px] text-orange-400 tracking-wider font-bold">
               Nível Avançado (Pronto)
            </span>
          </div>

          <div className="relative bg-[#050505] border-x border-b border-white/10 rounded-b-sm p-4 md:p-5 overflow-x-auto font-mono text-[11px] md:text-xs text-gray-300 leading-relaxed max-h-72 whitespace-pre-wrap select-all shadow-inner">
            {getActivePromptText()}
          </div>
        </div>

      </div>
    </div>
  );
}
