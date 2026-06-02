import { useState } from "react";
import { ChevronDown, Sparkles, Layers, BookOpen, Video, Terminal, TrendingUp, Check } from "lucide-react";

export default function ModulesAccordion() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const modules = [
    {
      id: 1,
      number: "01",
      title: "Fundamentos da Orquestração Multi-IA",
      subtitle: "Fazer as melhores IAs gratuitas trabalharem integradas de forma autônoma.",
      icon: Layers,
      color: "from-orange-600/20 to-red-500/10",
      accent: "text-orange-400",
      lessons: [
        "Por que as assinaturas Pro (ChatGPT Plus/Claude Pro) são desnecessárias se você souber integrá-los",
        "O Protocolo de Orquestração: distribuindo tarefas lógicas para a IA com melhor especialidade",
        "Configurando loops de auto-revisão: fazendo o Claude refinar o output do Gemini de forma automática",
        "Como contornar limites de taxa e tokens com contas totalmente gratuitas",
        "Template mestre de fluxo de trabalho de orquestração estruturada"
      ],
      tag: "Fundação"
    },
    {
      id: 2,
      number: "02",
      title: "e-Books de Rápida Conversão (Estratégia Tripwire)",
      subtitle: "Estruture e redija infoprodutos magnéticos de rápida decisão de compra.",
      icon: BookOpen,
      color: "from-indigo-600/20 to-purple-500/10",
      accent: "text-indigo-400",
      lessons: [
        "A Coleção Emocional do ChatGPT: gerando títulos e ganchos psicológicos impossíveis de ignorar",
        "Validação de Gemini: pesquisando teses científicas, fontes legítimas e fatos reais para criar autoridade",
        "Filtro de Humanização no Claude.ai: reescrevendo blocos robóticos com textura humana e ganchos narrativos",
        "Design Automatizado: gerando layouts profissionais em segundos sem contratar designers",
        "Engenharia reversa de e-books campeões de vendas do nicho de saúde, finanças e marketing"
      ],
      tag: "Escrita de Elite"
    },
    {
      id: 3,
      number: "03",
      title: "Máquina de Vídeos Virais e Canais Dark",
      subtitle: "Aprenda a criar roteiros magnéticos e artes ultra-fotorrealistas para vender sem aparecer.",
      icon: Video,
      color: "from-violet-600/20 to-fuchsia-500/10",
      accent: "text-fuchsia-400",
      lessons: [
        "A Anatomia do Roteiro Viral: gerando retenção alta usando as fases gancho-história-oferta",
        "Leonardo.ai Avançado: gerando imagens estéticas com prompts fotográficos, luz de estúdio e ângulos dinâmicos",
        "Vozes Sintéticas Ultra-Articuladas: criando narrações profissionais impossíveis de distinguir de humanos",
        "Montagem Acelerada no CapCut: aplicando ganchos visuais e legendas dinâmicas de alta retenção",
        "A receita de postagem para TikTok, Reels e YouTube Shorts para viralizar nos primeiros 7 dias"
      ],
      tag: "Audiovisual Dark"
    },
    {
      id: 4,
      number: "04",
      title: "Gerador Estratégico de Prompts & Roadmaps",
      subtitle: "Sua biblioteca particular de mega-prompts prontos para copiar, colar e produzir.",
      icon: Terminal,
      color: "from-emerald-600/20 to-teal-500/10",
      accent: "text-emerald-400",
      lessons: [
        "Instruções Mestres de Persona: transformando a IA em diretores e editores de alta qualidade",
        "Mega-prompts de Escrita Criativa: controle rigoroso de cadência, vocabulário e formatação de texto",
        "O Criador de Roadmaps de Aprendizado: monte guias práticos e bônus em PDF em menos de 10 minutos",
        "Depuração de prompts: como calibrar a temperatura e parâmetros ocultos das ferramentas",
        "Atualizações contínuas: lista atualizada de novos comandos para os novos motores das IAs"
      ],
      tag: "Códigos de Operação"
    },
    {
      id: 5,
      number: "05",
      title: "O Funil Gerador de Caixa",
      subtitle: "A fórmula exata de cadastrar produtos de R$ 19,90 a R$ 97,00 e triplicar o ticket médio.",
      icon: TrendingUp,
      color: "from-amber-600/20 to-yellow-500/10",
      accent: "text-amber-400",
      lessons: [
        "Configurando o produto na plataforma de vendas: Kiwify, Hotmart ou Monetizze em 15 minutos",
        "A oferta irresistível de R$ 19,90 a R$ 97,00 (O segredo do funil tripwire de alta conversão)",
        "Implementação prática do Order Bump: como adicionar um produto complementar no checkout e vender mais",
        "A Engenharia do Upsell Instantâneo: oferecendo a continuação perfeita após o pagamento",
        "Análise de métricas fundamentais: CPC, CTR do anúncio e ROI líquido para investir R$ 10 e voltar R$ 30"
      ],
      tag: "Vendas e Escala"
    }
  ];

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-4">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Sparkles size={12} className="text-orange-400 animate-spin" /> MAESTRIA PASSO A PASSO
        </span>
        <h3 id="curriculum" className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
          O Que Você Vai Dominar No Método
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
