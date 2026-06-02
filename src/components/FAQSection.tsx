import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Eu realmente não vou precisar pagar nenhuma assinatura de Inteligência Artificial?",
      answer: "Exatamente. Todo o pilar lógico do Método Multi-IA baseia-se na orquestração complementar de ferramentas gratuitas. Você vai aprender a usar as versões gratuitas do ChatGPT, Claude.ai e Google Gemini em sinergia, obtendo resultados superiores aos de quem simplesmente copia e cola prompts genéricos em uma única ferramenta premium. Leonardo.ai e CapCut também serão utilizados em seus planos gratuitos."
    },
    {
      id: 2,
      question: "Preciso ter conhecimento avançado, saber programar ou entender de tecnologia?",
      answer: "Absolutamente não. A metodologia foi desenvolvida didaticamente passo a passo em vídeo para criadores, redatores, afiliados e profissionais liberais. Se você sabe abrir um navegador de internet, enviar mensagens e acompanhar tutoriais simples na tela, você já possui pré-requisito total para dominar a orquestração de IAs."
    },
    {
      id: 3,
      question: "Como funciona a Garantia de Reembolso Incondicional por 7 dias?",
      answer: "Seu risco é zero. Ao se inscrever hoje, você recebe acesso completo a todos os módulos, mega-prompts, simuladores e apostilas mestre. Se em até 7 dias corridos você decidir que o conteúdo não é prático o suficiente para o seu projeto, basta clicar num botão na área de membros ou enviar um único e-mail para nosso canal de suporte. Devolveremos 100% do seu investimento, sem burocracia ou constrangimento."
    },
    {
      id: 4,
      question: "Quanto tempo eu preciso me dedicar para ver os primeiros resultados?",
      answer: "Geralmente os alunos que se dedicam de 30 a 45 minutos diários conseguem concluir a orquestração inicial do seu primeiro e-book tripwire em menos de 72 horas. Os roteiros de canais dark para vídeos virais podem ser gerados e postados no mesmo dia, aplicando os moldes do Módulo 3."
    },
    {
      id: 5,
      question: "O produto final gerado pelas IAs é comercialmente exclusivo?",
      answer: "Sim. Como você aprenderá a usar múltiplos geradores independentes (um valida os fatos, um cria ideias, o outro reescreve com filtros de humanização literária), o resultado textual é 100% autêntico e livre de plágio ou detecção robótica, garantindo que você registre os direitos autorais com total segurança e profissionalismo."
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <HelpCircle size={12} /> SUPORTE E DUVIDAS
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
          Perguntas Frequentes Sobre o Método
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl mx-auto font-sans font-light">
          Tem alguma dúvida residual? Separamos as principais respostas transparentes reunidas para lhe dar máxima convicção.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-black rounded-sm border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-orange-500/40 shadow-[0_0_15px_rgba(234,88,12,0.05)]"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-xs md:text-sm font-bold font-sans text-gray-200 hover:text-white transition-colors pr-4 uppercase tracking-tight">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-sm border border-white/10 bg-[#0a0a0a] text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-orange-500 border-orange-500/20" : ""}`}>
                  <ChevronDown size={14} />
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out font-sans ${
                  isOpen ? "max-h-[300px] border-t border-white/5 p-5 opacity-100 bg-[#0a0a0a]/50" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
