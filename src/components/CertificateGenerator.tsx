import { useState } from "react";
import { Award, CheckCircle2, AlertTriangle, RefreshCw, Printer, Sparkles, Check, BookmarkCheck } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function CertificateGenerator() {
  const [studentName, setStudentName] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<"name" | "quiz" | "certificate">("name");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "Qual Inteligência Artificial gratuita do grupo é melhor configurada para validar pesquisas acadêmicas e localizar fontes de dados legítimas para livros ou e-books?",
      options: [
        "ChatGPT",
        "Claude.ai",
        "Google Gemini (com acesso em tempo real à busca do Google)",
        "Leonardo.ai"
      ],
      correctAnswer: 2,
      explanation: "O Google Gemini possui conexão nativa e automática com o buscador do Google, garantindo verificação factual, datas precisas e rastreabilidade científica muito superior aos modelos offline padrões."
    },
    {
      id: 2,
      text: "Em que consiste o conceito chave de 'Orquestração Multi-IA' ensinado no Módulo 1?",
      options: [
        "Contratar assinaturas caras em todas as plataformas Plus e Pro disponíveis para garantir acesso rápido.",
        "Desenvolver prompts monolíticos gigantes contendo todo o roteiro em um único envio de texto.",
        "Fazer diferentes Inteligências Artificiais gratuitas trabalharem em cadeia complementar, onde uma revisa e eleva o rascunho da outra.",
        "Usar robôs do CapCut para postar vídeos virais duplicados sem edição manual."
      ],
      correctAnswer: 2,
      explanation: "A orquestração tira proveito das virtudes de cada IA gratuita (títulos no ChatGPT, fontes científicas no Gemini, textura humana no Claude) encadeadas de forma inteligente."
    },
    {
      id: 3,
      text: "No funil gerador de caixa do Módulo 5, o que é um 'Order Bump' e qual sua principal vantagem comercial?",
      options: [
        "Um banimento unilateral no Google Ads por falta de páginas de políticas.",
        "Um produto complementar de valor acessível oferecido no checkout com caixa de marcação simples, elevando o faturamento sem elevar o Custo por Clique.",
        "Uma técnica para acelerar a renderização de vídeos usando o CapCut.",
        "A garantia incondicional de reembolso por 7 dias."
      ],
      correctAnswer: 1,
      explanation: "O Order Bump permite realizar vendas adicionais na própria tela de checkout. Até 40% dos clientes clicam no botão e pagam o valor extra, escalando instantaneamente o lucro líquido."
    }
  ];

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      setErrorVisible(true);
      return;
    }

    if (selectedAnswer !== questions[currentQuestionIdx].correctAnswer) {
      setErrorVisible(true);
      return;
    }

    setErrorVisible(false);
    setSelectedAnswer(null);

    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setCurrentStep("certificate");
    }
  };

  const resetQuizCheck = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setErrorVisible(false);
    setCurrentStep("name");
  };

  const formatTodayDate = () => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div id="certificate-panel" className="bg-black border border-white/10 rounded-sm p-6 md:p-8 shadow-xl relative overflow-hidden">
        
        {/* Step 1: Input Name */}
        {currentStep === "name" && (
          <div className="space-y-6 max-w-lg mx-auto text-center py-6">
            <div className="w-16 h-16 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-sm flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold">Bônus Exclusivo Liberado</span>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                Emissor de Certificado de Maestria
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                Nossos alunos recebem uma certificação oficial de conclusão que comprova suas capacidades práticas de Engenharia de Prompts e Orquestração de IAs. Teste o emissor abaixo respondendo ao nosso quiz rápido!
              </p>
            </div>

            <div className="space-y-3 pt-4 text-left">
              <label className="block text-xs uppercase font-mono text-gray-400 tracking-wider font-semibold">
                Nome completo para imprimir no certificado:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ex: José da Silva Santos"
                className="w-full bg-[#0a0a0a] border border-white/10 focus:border-orange-500/50 rounded-sm px-4 py-3 text-white text-sm focus:outline-none placeholder-gray-600 font-medium"
              />
            </div>

            <button
              onClick={() => studentName.trim() ? setCurrentStep("quiz") : alert("Por favor, digite seu nome.")}
              disabled={!studentName.trim()}
              className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(234,88,12,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
               INICIAR QUIZ DE ORQUESTRAÇÃO <Check size={16} strokeWidth={3} />
            </button>
            <p className="text-[10px] text-gray-500 font-mono">
              Suporta verificação local imediata. Acerte 3/3 para emitir.
            </p>
          </div>
        )}

        {/* Step 2: Practical Quiz questions */}
        {currentStep === "quiz" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-900 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-orange-500 font-bold block">LABORATÓRIO TEÓRICO E PRÁTICO</span>
                <span className="text-xs text-gray-500 font-mono">Verificação de Proficiência</span>
              </div>
              <span className="text-[11px] font-mono font-bold bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-sm px-2 py-0.5">
                Questão {currentQuestionIdx + 1} de {questions.length}
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm md:text-base font-bold text-white leading-relaxed">
                {questions[currentQuestionIdx].text}
              </h4>

              <div className="space-y-2.5 pt-2">
                {questions[currentQuestionIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedAnswer(idx);
                      setErrorVisible(false);
                    }}
                    className={`cursor-pointer w-full text-left p-4 rounded-sm border text-xs md:text-sm font-medium transition-all flex items-start gap-3 ${
                      selectedAnswer === idx
                        ? "bg-orange-600/10 border-orange-500/50 text-white shadow-[0_0_12px_rgba(234,88,12,0.1)]"
                        : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
                    }`}
                  >
                    <span className={`h-5 w-5 rounded-sm border shrink-0 flex items-center justify-center text-[10px] font-bold ${
                      selectedAnswer === idx ? "bg-orange-500 text-white border-orange-500" : "bg-[#0a0a0a] border-white/10 text-gray-500"
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error or correct feedback warning bar */}
            {errorVisible && (
              <div className="p-3.5 rounded-sm bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Resposta incorreta ou incompleta!</strong> Releia a questão e tente o outro pilar do método. O certificado só é emitido para quem demonstra o domínio correto.
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                onClick={resetQuizCheck}
                className="cursor-pointer px-4 bg-[#0a0a0a] hover:bg-[#111] border border-white/5 text-gray-400 hover:text-white rounded-sm transition-all font-medium text-xs flex items-center gap-1.5"
              >
                <RefreshCw size={14} /> RECOMEÇAR
              </button>

              <button
                onClick={handleNextQuestion}
                className="cursor-pointer flex-1 bg-orange-600 hover:bg-orange-500 text-white font-extrabold py-3 rounded-sm transition-all font-sans text-xs flex items-center justify-center gap-2"
              >
                {currentQuestionIdx + 1 === questions.length ? "CONCLUIR E EMITIR CERTIFICADO" : "PRÓXIMA PERGUNTA"}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: GORGEOUS CERTIFICATE DISPLAY PANEL */}
        {currentStep === "certificate" && (
          <div className="space-y-6">
            
            {/* Visual Success Message */}
            <div className="text-center space-y-1 py-2">
              <div className="h-10 w-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                <CheckCircle2 size={22} />
              </div>
              <h4 className="text-base font-black text-white">Parabéns! Você Provou Sua Maestria!</h4>
              <p className="text-xs text-gray-400 font-light">
                Todas as 3 questões sobre fluxo lógico, tripwire e order bumps foram respondidas perfeitamente. Seu certificado está pronto.
              </p>
            </div>

            {/* Official Printable Certificate Board Card */}
            <div 
              id="certificate-print-area" 
              className="bg-white text-gray-950 p-6 md:p-10 rounded-sm border-4 border-amber-400 relative overflow-hidden shadow-2xl font-serif text-center select-none"
              style={{ backgroundImage: "radial-gradient(#fffbeb, #ffffff)" }}
            >
              
              {/* Gold borders vector look mock */}
              <div className="absolute inset-2 border border-amber-300 opacity-60 pointer-events-none"></div>
              <div className="absolute inset-4 border border-amber-400/20 pointer-events-none"></div>

              {/* Header Certificate branding */}
              <div className="flex flex-col items-center gap-1 mb-4 md:mb-6">
                <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-xs tracking-[0.2em] font-sans">
                  <Award size={18} className="text-amber-500" /> CERTIFICADO DE CONCLUSÃO
                </div>
                <div className="w-16 h-0.5 bg-amber-400 my-1"></div>
              </div>

              {/* Title core */}
              <h2 className="text-lg md:text-2xl font-serif text-gray-900 font-black italic tracking-wide mb-3 md:mb-5">
                Maestria em Inteligência Artificial & Engenharia de Prompts
              </h2>

              <p className="text-[10px] md:text-xs text-gray-500 font-sans tracking-wide leading-relaxed mb-1">
                Certifica-se para todos os efeitos de veracidade e capacitação profissional que
              </p>
              
              {/* Name field */}
              <div className="py-2 inline-block border-b-2 border-gray-800/80 mb-3 md:mb-5 min-w-[200px] md:min-w-[320px]">
                <span className="text-lg md:text-2xl font-black text-gray-900 tracking-tight block px-4 leading-none">
                  {studentName}
                </span>
              </div>

              <p className="text-[11px] md:text-xs text-gray-600 max-w-lg mx-auto leading-relaxed font-sans font-light mb-4 md:mb-6">
                concluiu com êxito todas as etapas teórico-práticas, simulações de anúncios estruturados e orquestrações de fluxo de trabalho do <strong className="font-semibold text-gray-900">Método Multi-IA</strong>, dominando as integrações funcionais do ChatGPT, Claude.ai, Google Gemini e geração cinematográfica de Leonardo.ai.
              </p>

              {/* Stamp and signatures board */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-gray-200/80 items-end">
                
                {/* Date left */}
                <div className="text-center font-sans">
                  <div className="text-[10px] md:text-xs text-gray-900 font-medium">Emissão Oficial</div>
                  <div className="text-[9px] text-gray-500 mt-1">{formatTodayDate()}</div>
                </div>

                {/* Seal center */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative flex items-center justify-center h-12 w-12 rounded-full border-2 border-amber-500 bg-amber-50 font-sans text-amber-600 font-black text-[9px] shadow-sm tracking-tighter">
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-amber-400"></div>
                     SELO VERIFICADO
                  </div>
                </div>

                {/* Key id right */}
                <div className="text-center font-sans">
                  <div className="text-[10px] md:text-xs text-gray-900 font-medium">Autenticidade</div>
                  <div className="text-[9px] font-mono text-amber-600 font-semibold tracking-wider uppercase mt-1">
                    MIA-{(studentName.length * 4821).toString()}-A7
                  </div>
                </div>

              </div>

            </div>

            {/* Quick action triggers */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={resetQuizCheck}
                className="cursor-pointer px-4 py-3 bg-[#0a0a0a] hover:bg-[#111] text-gray-300 font-medium text-xs rounded-sm transition-all border border-white/5 flex items-center justify-center gap-1.5"
              >
                Gerar Outro Nome
              </button>

              <button
                onClick={handlePrintCertificate}
                className="cursor-pointer flex-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 text-xs rounded-sm transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(245,158,11,0.2)]"
              >
                <Printer size={16} /> IMPRIMIR OU SALVAR COMO PDF
              </button>
            </div>

            <div className="text-center">
              <span className="text-[11px] text-gray-500 font-mono italic">
                *Este gerador de certificação possui validação instantânea, pronto para você printar e compartilhar em suas redes sociais ou portfólio de produtores!
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
