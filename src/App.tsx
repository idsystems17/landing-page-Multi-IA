import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Brain,
  Video,
  Terminal,
  Gem,
  ArrowUpRight,
  BookmarkCheck,
  RotateCcw,
  BookOpen,
  MessageCircle,
  Clock,
  HelpCircle,
  FileCheck,
  Zap,
  Star,
  Shield
} from "lucide-react";

// Components
import CountdownTimer from "./components/CountdownTimer";
import ModulesAccordion from "./components/ModulesAccordion";
import FinanceSimulator from "./components/FinanceSimulator";
import RoadmapGenerator from "./components/RoadmapGenerator";
import PromptSandbox from "./components/PromptSandbox";
import CertificateGenerator from "./components/CertificateGenerator";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import LegalModals from "./components/LegalModals";
import CheckoutModal from "./components/CheckoutModal";

// Import generated assets (paths matched exactly)
const heroWorkspaceImg = "/src/assets/images/workspace_modern_1780603575092.png";
const bundleMockupImg = "/src/assets/images/product_mockup_1780603159120.png";

export default function App() {
  const [checkoutPrice, setCheckoutPrice] = useState<number>(98.00);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Legal Modals state
  const [activeLegalTab, setActiveLegalTab] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  const openCheckout = () => {
    window.open("https://pay.kiwify.com.br/79zqIoV", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen selection:bg-orange-600 selection:text-white font-sans leading-relaxed flex flex-col justify-between">
      
      {/* 1. TOP MARKETING TICKER BANNER (Urgency) */}
      <div className="bg-[#0a0a0a] border-b border-white/10 text-center py-2 px-4 shadow-md sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 flex-wrap text-[10px] md:text-xs font-mono">
          <span className="bg-orange-600 text-white px-2 py-0.5 rounded-sm font-black uppercase text-[9px] tracking-wider animate-pulse shrink-0">
             Vagas Premium
          </span>
          <span className="font-medium text-gray-400">
            Preço Promocional com <strong className="text-white">40% de Desconto Especial</strong> expira hoje!
          </span>
          <a
            href="https://pay.kiwify.com.br/79zqIoV"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-orange-500 hover:text-orange-400 font-bold inline-flex items-center gap-0.5 transition-colors pl-2"
          >
            Quero Economizar Agora <ChevronRight size={14} />
          </a>
        </div>
      </div>

      {/* 2. TRANSPARENT HEADER NAVIGATION */}
      <header className="max-w-6xl mx-auto w-full px-4 py-5 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-1.5">
          <div className="h-5 w-5 rounded-sm bg-orange-600 flex items-center justify-center shadow-md shadow-orange-600/20">
            <Sparkles size={11} className="text-white inline" />
          </div>
          <span className="font-sans text-xs font-black tracking-tighter text-white">E-BOOK MULTI-IA</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-[10px] text-gray-400 font-bold tracking-widest font-mono">
          <a href="#about" className="hover:text-orange-500 transition-colors uppercase">O PROBLEMA</a>
          <a href="#simulator" className="hover:text-orange-500 transition-colors uppercase">GERADOR DE ROADMAP</a>
          <a href="#curriculum" className="hover:text-orange-500 transition-colors uppercase">CONTEÚDO</a>
          <a href="#certificate-panel" className="hover:text-orange-500 transition-colors uppercase">CERTIFICADO</a>
        </nav>

        <a
          href="https://pay.kiwify.com.br/79zqIoV"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer bg-[#050505] border border-white/10 hover:border-orange-500 text-orange-500 hover:text-white transition-all duration-300 rounded-sm py-1.5 px-4 font-mono text-[10px] tracking-wider font-bold inline-block text-center"
        >
          GARANTIR VAGA
        </a>
      </header>

      {/* 3. CORE PERSUASIVE HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side Copywriting */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/20 rounded-sm text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles size={12} className="animate-spin text-orange-500" /> MENSALIDADES DE IA NUNCA MAIS
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tight uppercase">
            DOMINE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 italic">NOVA ERA</span> DOS INFOPRODUTOS
          </h1>

          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
            Se você acha que precisa gastar centenas de reais por mês com assinaturas do <strong>ChatGPT Plus, Claude Pro ou geradores de arte caros</strong> para ter resultados reais com Inteligência Artificial, você foi enganado. 
            O verdadeiro segredo mestre do mercado digital não é usar UMA ferramenta cara, mas saber <strong className="text-white italic">orquestrar múltiplas Inteligências Artificiais gratuitas</strong> de forma complementar e automatizada para você!
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
              <span className="block text-xl md:text-3xl font-black mb-1 font-sans">R$ 0,00</span>
              <span className="text-[9px] text-gray-500 uppercase tracking-wider block font-mono">Assinaturas</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
              <span className="block text-xl md:text-3xl font-black mb-1 font-sans">10x +</span>
              <span className="text-[9px] text-gray-500 uppercase tracking-wider block font-mono">Velocidade</span>
            </div>
            <div className="p-4 bg-orange-600/10 border border-orange-600/20 rounded-sm">
              <span className="block text-xl md:text-3xl font-black text-orange-500 mb-1 font-sans">100%</span>
              <span className="text-[9px] text-orange-400 uppercase tracking-wider block font-mono">Executável</span>
            </div>
          </div>

          <div className="space-y-3 p-5 bg-[#0a0a0a] rounded-sm border border-white/10">
            <div className="flex gap-3 items-start">
              <div className="bg-orange-500/10 border border-orange-500/20 p-1 rounded text-orange-400 mt-0.5 shrink-0">
                <BookmarkCheck size={14} />
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                <strong>Orquestração Lógica:</strong> Aprenda a fazer as melhores IAs gratuitas do mundo conversarem e refinarem o trabalho de forma autônoma.
              </p>
            </div>
            
            <div className="flex gap-3 items-start border-t border-white/5 pt-3">
              <div className="bg-orange-500/10 border border-orange-500/20 p-1 rounded text-orange-400 mt-0.5 shrink-0">
                <BookmarkCheck size={14} />
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-light">
                <strong>Tempo Recorde:</strong> Sistema cirúrgico estruturado do zero à publicação comercial de eBooks e Canais Dark rentáveis.
              </p>
            </div>
          </div>

          {/* Core Call-to-Action widget block */}
          <div className="flex flex-col sm:flex-row gap-4 items-center max-w-sm pt-2">
            <a
               href="https://pay.kiwify.com.br/79zqIoV"
               target="_blank"
               rel="noopener noreferrer"
               className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 px-6 rounded-sm transition-all duration-300 font-sans text-xs md:text-sm uppercase tracking-tighter flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_45px_rgba(234,88,12,0.5)] group transform hover:-translate-y-0.5 text-center"
            >
               QUERO DOMINAR O MERCADO AGORA
               <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-gray-500 flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-orange-500" /> Garantia de 7 Dias Inclusa
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-orange-500" /> Acesso por 1 Ano Completo
            </span>
          </div>

        </div>

        {/* Right Side Showcase Graphic/Countdown Timer */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.01)] transition-all duration-300">
            {/* Visual Glass Header Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            
            <img
              src={heroWorkspaceImg}
              alt="Workspace Orquestração Multi-IA"
              referrerPolicy="no-referrer"
              className="w-full h-56 md:h-64 object-cover transform scale-102 group-hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute bottom-4 left-4 z-20 space-y-1 bg-[#050505]/80 backdrop-blur-md rounded-sm p-3 border border-white/10">
              <span className="text-[10px] text-orange-500 uppercase font-mono font-bold tracking-widest block">AMBIENTE MESTRE</span>
              <p className="text-[11px] text-white font-medium">Orquestração complementar entre ChatGPT, Claude e Gemini</p>
            </div>
          </div>

          {/* Immersive Countdown Urgency Box */}
          <CountdownTimer />
        </div>
      </section>

      {/* 4. THE CORE TRUTH / DEEP COGNITIVE EXPOSURE (Why Multi-IA?) */}
      <section id="about" className="bg-[#0a0a0a] py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase bg-red-500/10 border border-red-500/20 text-red-500 px-2.5 py-1 rounded-sm inline-block">
               O Grande Blefe do Mercado
            </span>
            
            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
              "Você foi enganado a achar que precisa de assinaturas Pro caras..."
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              O modelo de mentores saturados é sempre o mesmo: eles tentam te vender que você necessita de R$ 110,00 mensais no ChatGPT Plus, mais R$ 110,00 no Claude Pro, e mais centenas de reais em geradores de áudio e vídeo com IA para começar a faturar.
            </p>

            <blockquote className="border-l-4 border-orange-500 pl-4 py-1.5 italic text-xs md:text-sm text-gray-300 bg-white/5 rounded-r-sm">
              "O verdadeiro segredo mestre do mercado digital não é possuir UMA ferramenta de R$ 100/mês, mas sim saber orquestrar múltiplas Inteligências Artificiais gratuitas para trabalharem integradas de forma complementar para você."
            </blockquote>

            <p className="text-gray-400 text-sm font-light">
              Com o <strong className="text-white font-semibold">Método Multi-IA</strong>, você aprenderá um fluxo passo a passo de como extrair o melhor de cada ferramenta sem gastar um centavo em assinaturas caras!
            </p>
          </div>

          {/* Interactive display showing bundle cover cover with interactive highlights */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden flex flex-col items-center">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-2xl rounded-full"></div>
            
            <img
              src={bundleMockupImg}
              alt="Mockup do Método Multi-IA Bundle"
              referrerPolicy="no-referrer"
              className="w-full max-w-xs object-contain transform hover:rotate-1 hover:scale-102 transition-transform duration-300"
            />
            
            <div className="w-full text-center space-y-2 mt-4">
              <span className="text-[11px] font-mono text-orange-500 font-bold uppercase tracking-widest block">O Que Está Incluso Hoje:</span>
              <p className="text-xs text-gray-300 font-light max-w-xs mx-auto text-center font-sans">
                 Acesso imediato por 1 Ano ao E-book Interativo contendo 4 Módulos Práticos, Mega-Prompts, Gerador de Roadmap e o Emissor de Certificado.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BONUS INTERACTIVE DYNAMIC BLOCK 1: ROADMAP GENERATOR */}
      <section className="py-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        {/* Dynamic Roadmap Generator Module */}
        <RoadmapGenerator />
      </section>

      {/* 5.5. BONUS INTERACTIVE DYNAMIC BLOCK 1.5: FINANCE SIMULATOR & DESAFIO */}
      <section className="py-6 bg-[#050505]">
        {/* Dynamic Simulator & Gamified Checklist Challenge Module */}
        <FinanceSimulator />
      </section>

      {/* 6. BONUS INTERACTIVE DYNAMIC BLOCK 2: PROMPT SANDBOX WORKBENCH */}
      <section className="py-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center px-4 mb-3">
          <span className="text-xs font-mono uppercase bg-orange-600/10 border border-orange-600/20 text-orange-400 px-2.5 py-1 rounded-sm tracking-widest inline-block">
             MÓDULO 4 LABORATÓRIO DE COMANDOS
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none mt-3">
            Simulador de Engenharia de Prompts
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto font-light mt-1.5">
            Teste uma palhinha das raras instruções ensinadas no curso. Escolha seu nicho de mercado e sinta o poder da copy final humanizada!
          </p>
        </div>

        {/* Dynamic Prompt Selector Sandbox */}
        <PromptSandbox />
      </section>

      {/* 7. DETAILED CURRICULUM ACCORDION (Content breakdown Módulo 1 to 5) */}
      <section className="py-16 bg-[#050505] border-t border-white/10">
        <ModulesAccordion />
      </section>

      {/* 8. BONUS INTERACTIVE DYNAMIC BLOCK 3: CERTIFICADO DE CONCLUSÃO PRÁTICO (With active Quiz!) */}
      <section id="certificate" className="py-12 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center px-4 mb-4">
          <span className="text-xs font-mono uppercase bg-orange-600/10 border border-orange-600/20 text-orange-400 px-2.5 py-1 rounded-sm tracking-widest inline-block">
             BÔNUS 3: PRÁTICA COM RECOMPENSA
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none mt-3">
            Emita Seu Certificado de Maestria
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto font-light mt-1.5">
            Insira seu nome completo, responda corretamente 3 perguntas práticas dos fundamentos de orquestração do curso e visualize seu certificado de conclusão pronto!
          </p>
        </div>

        {/* Quiz & Certificate Canvas Generator */}
        <CertificateGenerator />
      </section>

      {/* 9. REVIEWS / SOCIAL TESTIMONIAL EVIDENCE */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/10">
        <ReviewsSection />
      </section>

      {/* 10. GUARANTEE CONFIDENCE BLOCK (7-Day Risk Free Guard) */}
      <section className="py-16 max-w-6xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
            SUA COMPRA É <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">100% SEGURA</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-sans font-light">
            Transparência total. Sem pegadinhas, sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Acesso Imediato */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-between text-center space-y-6">
            <div className="space-y-4 flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Zap size={24} className="fill-orange-500/20" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">Acesso Imediato</h4>
              <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
                Após o pagamento, você recebe acesso instantâneo à plataforma completa de leitura e simulações.
              </p>
            </div>
            <div className="inline-flex items-center gap-1 bg-orange-600/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
              <Zap size={10} className="animate-pulse" /> Liberação Automática
            </div>
          </div>

          {/* Card 2: 7 Dias de Garantia (Highlighted) */}
          <div className="bg-[#110a05] border-2 border-orange-500/40 p-8 rounded-2xl flex flex-col items-center justify-between text-center relative overflow-hidden space-y-6 shadow-[0_0_35px_rgba(234,88,12,0.15)]">
            {/* Glowing effect inside */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-500/10 blur-2xl rounded-full"></div>
            
            <div className="space-y-4 flex flex-col items-center w-full">
              {/* Graphic Layout from the image: "DIAS DE 7 GARANTIA" inline */}
              <div className="flex items-center gap-2">
                <div className="text-right flex flex-col leading-none font-mono text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                  <span>DIAS</span>
                  <span>DE</span>
                </div>
                <span className="text-5xl font-black text-orange-500 font-sans tracking-tight leading-none">7</span>
                <div className="text-left leading-none font-mono text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                  <span>GARANTIA</span>
                </div>
              </div>

              {/* 5 stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <h4 className="text-base font-extrabold text-orange-400 uppercase tracking-wider">Garantia Incondicional</h4>
              <p className="text-gray-300 text-xs font-sans font-normal leading-relaxed">
                Se por qualquer motivo você sentir que o material não é para você, terá até 7 dias de garantia para solicitar o reembolso total do valor pago.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-1 bg-orange-500 text-white rounded-full px-5 py-1.5 text-[10px] font-mono font-black uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(234,88,12,0.3)]">
              <ShieldCheck size={11} /> Risco Zero
            </div>
          </div>

          {/* Card 3: Pagamento Seguro */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-between text-center space-y-6">
            <div className="space-y-4 flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Shield size={24} className="fill-orange-500/10" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">Pagamento Seguro</h4>
              <p className="text-gray-400 text-xs font-sans font-light leading-relaxed">
                Processado pela Kiwify, plataforma líder em pagamentos digitais no Brasil, com segurança ponta a ponta.
              </p>
            </div>
            <div className="inline-flex items-center gap-1 bg-orange-600/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
              <ShieldCheck size={10} /> Ambiente Criptografado
            </div>
          </div>

        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-12 bg-[#050505] border-t border-white/10">
        <FAQSection />
      </section>

      {/* 12. BOTTOM CONVERSION GRID / CTA TABLE */}
      <section className="bg-gradient-to-t from-orange-950/20 via-transparent to-transparent py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/15 rounded-sm text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles size={12} className="animate-pulse" /> SEU ACESSO É IMEDIATO POR 1 ANO
          </span>

          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
            Pronto Para Dominar o Mercado com Pilares de Inteligência Artificial?
          </h2>

          <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Abandone agora mesmo as mensalidades de dezenas de ferramentas absurdas. Domine a orquestração mestre sob os ensinamentos práticos do Método Multi-IA.
          </p>

          {/* Pricing tag list card inside sales offer */}
          <div className="bg-[#0a0a0a] border-2 border-orange-600/40 rounded-sm p-6 md:p-8 max-w-md mx-auto space-y-5 shadow-[0_0_35px_rgba(234,88,12,0.15)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 py-1 px-3 bg-red-600 text-white font-black font-mono text-[9px] uppercase tracking-wider">
              40% OFF HOJE
            </div>

            <div className="space-y-1">
              <span className="text-xs text-orange-500 font-bold font-mono uppercase tracking-wider block">PREÇO PROMOCIONAL POR TEMPO LIMITADO</span>
              <div className="text-xs text-gray-500 font-medium line-through font-mono uppercase">De R$ 163,34 por apenas:</div>
              <div className="py-2">
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-gray-400">12x de</span>
                <div className="flex items-center justify-center gap-1.5 leading-none">
                  <span className="text-sm font-bold text-orange-500 font-sans">R$</span>
                  <span className="text-4xl md:text-6xl font-black text-white font-sans tracking-tighter leading-none">10,14</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-bold font-mono mt-1 pt-1.5 border-t border-white/5 inline-block">
                  ou <span className="text-emerald-400">R$ 98,00</span> à vista no PIX/Cartão
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-mono block">Sem assinaturas ou taxas ocultas • Acesso imediato</span>
            </div>

            <a
               href="https://pay.kiwify.com.br/79zqIoV"
               target="_blank"
               rel="noopener noreferrer"
               className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-xs md:text-sm py-4 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] uppercase tracking-tighter text-center inline-block"
            >
               QUERO GARANTIR MINHA INSCRIÇÃO AGORA
            </a>

            {/* List of security checks beneath pricing card */}
            <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-gray-500 pt-1 border-t border-white/5">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck size={12} className="text-orange-500" /> Site Protegido
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} className="text-orange-500" /> Entrega Imediata
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 13. COMPLIANCE FOOTER & CONTACT DETAILS (100% Protects Google Ads account) */}
      <footer className="bg-[#050505] border-t border-white/10 pt-12 pb-8 px-4 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Logo element plus simple navigation targets */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-orange-600 flex items-center justify-center">
                <Sparkles size={10} className="text-white font-extrabold inline" />
              </div>
              <span className="font-sans text-xs font-black tracking-tighter text-white">MÉTODO MULTI-IA</span>
            </div>
            
            <div className="flex gap-4 md:gap-6 flex-wrap items-center justify-center text-[10px] font-mono font-bold tracking-wider">
              <button onClick={() => setActiveLegalTab("privacy")} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                POLÍTICA DE PRIVACIDADE
              </button>
              <span>•</span>
              <button onClick={() => setActiveLegalTab("terms")} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                TERMOS DE USO
              </button>
              <span>•</span>
              <button onClick={() => setActiveLegalTab("disclaimer")} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
                DISCLAIMER DE GANHOS
              </button>
            </div>
          </div>

          {/* Educational corporate credentials matching Google crawl policies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start font-light text-gray-500 leading-relaxed text-[11px]">
            <div className="space-y-2">
              <div className="text-gray-400 font-bold uppercase font-mono text-[10px]">Identificação Corporativa</div>
              <p>
                 Este ebook interativo foi Desenvolvido por IDSystems.
                <br />Atendimento por e-mail: <strong className="text-gray-400 font-bold select-all">idsystems17@gmail.com</strong>
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 font-bold uppercase font-mono text-[10px]">Aviso Legal Google Ads</div>
              <p>
                Este site não é afiliado ou homologado pelo Google Inc., Facebook Inc. ou TikTok Inc. Todas as referências e citações a papers reais do MIT, Harvard e USP servem puramente como fins de contexto acadêmico e validade de fonte conforme previstos na Lei Federal nº 9.610/98 de Direitos Autorais brasileira.
              </p>
            </div>
          </div>

          {/* Compliance statement text footer */}
          <div className="p-4 bg-[#0a0a0a] border border-white/5 text-center rounded-sm font-light text-gray-500 leading-normal">
            Os resultados práticos apresentados no conteúdo variam de pessoa para pessoa, dependendo inteiramente da dedicação mestre, nível de aplicação prática das orquestrações e testes de campanha executados por cada aluno de forma diante. Não há garantia implícita de lucro garantido sem aplicação.
          </div>

        </div>
      </footer>

      {/* RENDER MODAL DIALOGS OVERLAYS */}
      <LegalModals
        isOpen={activeLegalTab !== null}
        onClose={() => setActiveLegalTab(null)}
        type={activeLegalTab || "privacy"}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialPrice={checkoutPrice}
      />

    </div>
  );
}
