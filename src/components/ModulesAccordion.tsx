import { useState } from "react";
import { ChevronDown, Sparkles, Layers, BookOpen, Video, Terminal, TrendingUp, Check } from "lucide-react";

export default function ModulesAccordion() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const modules = [
    {
      id: 1,
      number: "01",
      title: "Fundamentos Multi-IA",
      subtitle: "O Segredo da Orquestração: Por Que Uma IA Só Não Basta. Aprenda a criar um funil de IAs gratuitas para automatizar tarefas lógicas.",
      icon: Layers,
      color: "from-orange-600/20 to-red-500/10",
      accent: "text-orange-400",
      lessons: [
        "Por que as assinaturas Pro (ChatGPT Plus/Claude Pro) são totalmente desnecessárias",
        "O Protocolo de Orquestração: distribuindo tarefas para a IA com melhor especialidade lúdica",
        "Configurando loops de auto-revisão: fazendo as ferramentas corrigirem o output umas das outras",
        "Como contornar limites de taxa e tokens com contas totalmente gratuitas",
        "Template mestre de fluxo de trabalho de orquestração estruturada"
      ],
      tag: "10 min • Fácil"
    },
    {
      id: 2,
      number: "02",
      title: "Vídeos Dark Automatizados",
      subtitle: "Canal Dark de Vídeos no YouTube/TikTok: Escala Máxima. Seja dono de um império de canais de retenção absurda sem nunca revelar seu rosto.",
      icon: Video,
      color: "from-[#ec4899]/20 to-[#a855f7]/10",
      accent: "text-pink-400",
      lessons: [
        "A Anatomia do Roteiro Viral: gerando retenção ultra-alta usando ganchos de 3 segundos",
        "Leonardo.ai Avançado: gerando imagens estéticas com prompts fotográficos e iluminação de cinema",
        "Vozes Sintéticas Ultra-Articuladas: criando narrações profissionais impossíveis de distinguir de humanos",
        "Montagem Acelerada no CapCut: aplicando ganchos visuais e legendas dinâmicas em blocos automáticos",
        "O algoritmo passo a passo para Reels, Shorts e TikTok viralizar nos primeiros 7 dias"
      ],
      tag: "15 min • Médio"
    },
    {
      id: 3,
      number: "03",
      title: "Infoprodutores de Alta Velocidade",
      subtitle: "Venda de E-books de R$ 19,90 a R$ 97,00 (O Funil Modular de Alta Conversão). Como criar produtos irresistíveis de impulso (Tripwires) com bônus estruturados.",
      icon: BookOpen,
      color: "from-[#3b82f6]/20 to-[#06b6d4]/10",
      accent: "text-blue-400",
      lessons: [
        "A Coleção Emocional do ChatGPT: gerando títulos e ganchos psicológicos impossíveis de ignorar",
        "Validação de Gemini: pesquisando teses científicas, fontes legítimas e fatos reais para criar autoridade",
        "Filtro de Humanização no Claude.ai: reescrevendo blocos robóticos com textura humana e naturalidade",
        "Implementação prática do Order Bump: como vender um produto extra direto no checkout",
        "Criação de páginas estáticas de alta velocidade de carregamento sem gastar nada"
      ],
      tag: "18 min • Fácil"
    },
    {
      id: 4,
      number: "04",
      title: "Freelancer Profissional de Elite",
      subtitle: "Prestação de Serviços High-Ticket no Fiverr e Workana. Aprenda a orquestrar propostas impecáveis em Dólar e entregar pacotes de artigos de SEO ou copy.",
      icon: Terminal,
      color: "from-[#10b981]/20 to-[#14b8a6]/10",
      accent: "text-emerald-400",
      lessons: [
        "Instruções Mestres de Persona: transformando a IA em diretores e editores de alta performance",
        "Mega-prompts de Escrita Criativa: controle rigoroso de cadência, vocabulário e formatação de texto",
        "A receita exata para fechar contratos de R$ 2.000 a R$ 5.000 mensais no mercado internacional",
        "Como automatizar a entrega de relatórios de auditoria e briefings para encantar clientes premium",
        "Pacotes Express de SEO: gerando conteúdo mestre otimizado em escala com orquestração"
      ],
      tag: "12 min • Médio"
    }
  ];

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-4">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Sparkles size={12} className="text-orange-400 animate-spin" /> ACESSO IMEDIATO
        </span>
        <h3 id="curriculum" className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
          As Aulas Práticas do E-book Interativo
        </h3>
        <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto font-sans font-light">
          Um roteiro estruturado do absoluto zero à escala máxima, sem enrolação ou teorias vazias.
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((mod) => {
          const IconComponent = mod.icon;
          const isOpen = openModule === mod.id;

          return (
            <div
              key={mod.id}
              className={`group bg-black rounded-sm border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-orange-500/50 shadow-[0_4px_25px_rgba(234,88,12,0.1)]"
                  : "border-white/5 hover:border-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.01)]"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-start md:items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
              >
                <div className="flex items-start md:items-center gap-4 flex-1">
                  {/* Icon Panel */}
                  <div className="p-3 rounded-sm bg-[#0a0a0a] border border-white/5 shrink-0">
                    <IconComponent className="h-6 w-6 text-orange-500" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold">
                        Módulo {mod.number}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-[#0a0a0a] border border-white/10 text-gray-400 font-mono">
                        {mod.tag}
                      </span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                      {mod.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-2 md:line-clamp-none max-w-2xl font-light font-sans">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                <div className="ml-3 mt-1 md:mt-0 shrink-0">
                  <div className={`p-1.5 rounded-sm border border-white/10 bg-[#0a0a0a] text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500 border-orange-500/20" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </button>

              {/* Expansible Lessons List */}
              <div
                className={`transition-all duration-300 ease-in-out border-t border-white/5 bg-[#0a0a0a]/40 ${
                  isOpen ? "max-h-[800px] opacity-100 p-5 md:p-6" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  Grade Curricular Expandida — {mod.lessons.length} Aulas Chave
                </div>
                <ul className="space-y-3">
                  {mod.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex items-center justify-center h-4 w-4 rounded-sm bg-orange-500/10 border border-orange-500/30 text-orange-500 shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                        {lesson}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-500 font-mono uppercase">
                  <span>Pronto para Copiar & Aplicar</span>
                  <span className="text-orange-500 font-bold">Recomendado focar totalmente na prática</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
