import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Preciso saber escrever para usar o Gerador de E-book?",
    answer: "Não. Você só informa o tema, o público-alvo e o tom que quer — a IA escreve todo o conteúdo. Introdução, capítulos com mais de 350 palavras cada, pontos-chave e conclusão. Você revisa, personaliza se quiser e publica. Nenhuma habilidade de escrita é necessária."
  },
  {
    id: 2,
    question: "O e-book gerado pela IA é original? Posso vender normalmente?",
    answer: "Sim. O conteúdo é gerado especificamente para o seu tema, nicho e tom escolhidos — cada e-book é único. Você tem total liberdade para revisar, personalizar e comercializar na Kiwify, Hotmart ou qualquer plataforma de infoprodutos."
  },
  {
    id: 3,
    question: "Funciona para qualquer nicho ou área de conhecimento?",
    answer: "Sim, para qualquer área. Emagrecimento, finanças pessoais, culinária, tecnologia, autoajuda, educação, relacionamentos, pets — qualquer tema pode ser transformado em e-book. O gerador se adapta ao público e ao tom que você escolher."
  },
  {
    id: 4,
    question: "Já tenho ChatGPT. Por que usar o Gerador de E-books?",
    answer: "O ChatGPT é uma ferramenta geral — para usá-lo bem para e-books, você precisa saber escrever prompts, estruturar capítulos, definir o formato certo. Nosso gerador já faz tudo isso por você: formulário simples, estrutura profissional de e-book (sumário, introdução, capítulos com profundidade, conclusão e CTA), pronto para copiar e publicar. Nenhum conhecimento de IA necessário."
  },
  {
    id: 5,
    question: "Como funciona o pagamento único?",
    answer: "Você paga R$98 uma única vez e tem acesso à ferramenta por 1 ano completo, sem mensalidade, sem cobrança recorrente. Nenhuma surpresa na fatura depois."
  },
  {
    id: 6,
    question: "Quanto tempo leva para gerar um e-book completo?",
    answer: "Em média de 30 segundos a 2 minutos, dependendo do número de capítulos escolhido. Você preenche o formulário, clica em gerar e recebe o e-book completo na tela — pronto para copiar, personalizar e publicar."
  },
  {
    id: 7,
    question: "Como funciona a garantia de 7 dias?",
    answer: "Seu risco é zero. Se em até 7 dias corridos você achar que a ferramenta não serve para o seu projeto, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="space-y-2">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen ? "border-[#2563EB]/30 shadow-sm" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-[#1F2937] pr-4 leading-snug">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  isOpen ? "bg-[#2563EB] border-[#2563EB] text-white rotate-180" : "border-gray-300 text-gray-400"
                }`}>
                  <ChevronDown size={13} />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
