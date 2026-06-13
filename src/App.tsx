import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Clock,
  Zap,
  Star,
  Check,
  BookOpen,
  Video,
  Terminal,
  TrendingUp,
  Layers,
} from "lucide-react";

import CountdownTimer from "./components/CountdownTimer";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import LegalModals from "./components/LegalModals";
import VideoSection from "./components/VideoSection";

// @ts-ignore
import bundleMockupImg from "./assets/images/product_mockup_1780603159120.png";

export default function App() {
  const [activeLegalTab, setActiveLegalTab] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen selection:bg-orange-600 selection:text-white font-sans leading-relaxed flex flex-col">

      {/* TOPO — urgência sutil */}
      <div className="bg-orange-600 text-white text-center py-2 px-4 text-[11px] font-mono font-bold tracking-wider sticky top-0 z-50">
        Acesso completo por R$ 98,00 · Garantia de 7 dias · Sem mensalidade
      </div>

      {/* HEADER */}
      <header className="max-w-5xl mx-auto w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-orange-600 flex items-center justify-center">
            <Sparkles size={13} className="text-white" />
          </div>
          <span className="text-sm font-black tracking-tight text-white">MÉTODO MULTI-IA</span>
        </div>
        <a
          href="https://pay.kiwify.com.br/79zqIoV"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-500 text-white font-black text-[11px] py-2 px-4 rounded-sm transition-all uppercase tracking-wider"
        >
          Comprar Agora
        </a>
      </header>

      {/* 1. HERO — gancho principal */}
      <section className="max-w-3xl mx-auto px-4 pt-12 pb-16 text-center space-y-6">

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/20 rounded-sm text-xs font-mono font-bold tracking-widest uppercase">
          <Zap size={11} className="animate-pulse" /> Sem pagar mensalidade nenhuma
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight uppercase">
          Use ChatGPT, Gemini e Claude{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 italic">
            de graça
          </span>{" "}
          — e ainda gere renda com isso
        </h1>

        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
          O <strong className="text-white">Ebook Método Multi-IA</strong> te mostra exatamente quais IAs gratuitas usar, quando usar cada uma, e entrega{" "}
          <strong className="text-orange-400">prompts prontos para o seu nicho</strong>. É só copiar e colar.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <a
            href="https://pay.kiwify.com.br/79zqIoV"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-10 rounded-sm transition-all duration-300 text-base md:text-lg uppercase tracking-tight flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(234,88,12,0.35)] hover:shadow-[0_0_45px_rgba(234,88,12,0.5)] group"
          >
            QUERO MEU ACESSO AGORA — R$ 98,00
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-gray-500 flex-wrap">
          <span className="flex items-center gap-1"><ShieldCheck size={13} className="text-orange-500" /> Garantia 7 dias</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={13} className="text-orange-500" /> Acesso por 1 ano</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Zap size={13} className="text-orange-500" /> Acesso imediato</span>
        </div>

        <div className="pt-2 w-full">
          <VideoSection compact />
        </div>
      </section>

      {/* 2. DOR — gancho do scroll */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-mono uppercase text-red-400 tracking-widest">O problema</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight">
            Você usa IA mas sente que poderia tirar muito mais?
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
            A maioria das pessoas abre o ChatGPT, digita uma pergunta genérica e fica desapontada com o resultado. O problema não é a ferramenta — <strong className="text-white">é não saber combinar as IAs certas para cada tarefa.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            {[
              { stat: "R$ 0", label: "de mensalidade necessária" },
              { stat: "72h", label: "para lançar seu primeiro produto" },
              { stat: "4 IAs", label: "gratuitas trabalhando juntas" },
            ].map((item) => (
              <div key={item.label} className="bg-[#050505] border border-white/10 rounded-sm p-4 text-center">
                <span className="block text-2xl md:text-3xl font-black text-orange-500">{item.stat}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIRADA — a solução */}
      <section className="py-14 max-w-2xl mx-auto px-4 text-center space-y-6">
        <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">A solução</span>
        <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight">
          Um ebook que funciona como um assistente pessoal de IA
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
          O Método Multi-IA não é teoria. É um passo a passo prático com os prompts já escritos para você — para criar conteúdo, vender ebooks ou trabalhar como freelancer usando IAs gratuitas.
        </p>

        <div className="space-y-3 text-left">
          {[
            { icon: Layers, text: "ChatGPT para raciocinar, Gemini para pesquisar, Claude para escrever, Leonardo.AI para criar imagens — tudo grátis" },
            { icon: BookOpen, text: "Prompts prontos para o seu nicho — copie, cole e adapte em segundos" },
            { icon: TrendingUp, text: "Do zero ao seu primeiro produto digital em 1 fim de semana" },
            { icon: Terminal, text: "Funciona para quem quer criar conteúdo, vender ebooks ou prestar serviço" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 bg-[#0a0a0a] border border-white/10 rounded-sm p-4">
              <div className="bg-orange-500/10 border border-orange-500/20 p-1.5 rounded text-orange-400 shrink-0 mt-0.5">
                <Icon size={14} />
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. IMAGEM DO PRODUTO */}
      <div className="py-8 text-center">
        <img
          src={bundleMockupImg}
          alt="Ebook Método Multi-IA"
          className="h-52 md:h-64 w-auto object-contain mx-auto opacity-90"
        />
      </div>

      {/* 5. PROVA SOCIAL — depoimentos */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-14">
        <div className="max-w-5xl mx-auto px-4 text-center mb-8 space-y-2">
          <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">Quem já usou</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase">Resultados reais</h2>
        </div>
        <ReviewsSection />
      </section>

      {/* 5. CONTEÚDO — o que você leva */}
      <section className="py-14 max-w-3xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">O que está dentro</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase">4 módulos práticos</h2>
          <p className="text-gray-400 text-sm font-light">Sem enrolação. Cada módulo resolve um problema real.</p>
        </div>

        <div className="space-y-3">
          {[
            { num: "01", icon: Layers, title: "Fundamentos Multi-IA", desc: "Como combinar ChatGPT, Gemini, Claude e Leonardo.AI para produzir 10x mais rápido — sem pagar nada.", tag: "Base de tudo" },
            { num: "02", icon: Video, title: "Canal de Conteúdo Sem Aparecer", desc: "Crie um canal de vídeos no YouTube ou TikTok sem mostrar o rosto. IAs gratuitas geram roteiro, voz e imagem.", tag: "Para criadores" },
            { num: "03", icon: BookOpen, title: "Venda Ebooks de R$ 19 a R$ 97", desc: "Monte um ebook completo com IA e publique na Kiwify ou Hotmart. Do conteúdo ao checkout em 72h.", tag: "Para infoprodutores" },
            { num: "04", icon: Terminal, title: "Freelancer com IA", desc: "Preste serviços no Fiverr ou Workana usando IAs para entregar copies, artigos e roteiros de alta qualidade.", tag: "Para freelancers" },
          ].map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.num} className="flex items-start gap-4 bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-orange-500/20 transition-colors">
                <div className="p-2.5 rounded-sm bg-[#050505] border border-white/5 shrink-0">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono text-orange-500 font-bold uppercase tracking-widest">Módulo {mod.num}</span>
                    <span className="text-[10px] bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono px-2 py-0.5 rounded-sm">{mod.tag}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-tight">{mod.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PREÇO — dramático, uma vez só */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-14">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">Investimento</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase">Uma compra. Sem mensalidade.</h2>

          <div className="bg-[#050505] border-2 border-orange-600/40 rounded-sm p-8 space-y-5 shadow-[0_0_40px_rgba(234,88,12,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 py-1 px-3 bg-red-600 text-white font-black font-mono text-[9px] uppercase tracking-wider">
              40% OFF
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-500 font-mono line-through block">De R$ 163,34 por apenas:</span>
              <span className="text-lg font-black text-gray-400 font-mono uppercase block">12x de</span>
              <div className="flex items-center justify-center gap-1 leading-none">
                <span className="text-3xl font-black text-orange-500 self-start mt-3">R$</span>
                <span className="text-[9rem] md:text-[11rem] font-black text-white tracking-tighter leading-none">10,14</span>
              </div>
              <span className="text-sm text-gray-400 font-mono block pt-2">
                ou <strong className="text-emerald-400">R$ 98,00</strong> à vista no PIX
              </span>
            </div>

            <a
              href="https://pay.kiwify.com.br/79zqIoV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-base md:text-lg py-5 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(234,88,12,0.3)] uppercase tracking-tight text-center inline-block"
            >
              QUERO MEU ACESSO AGORA
            </a>

            <div className="space-y-2 text-left pt-2 border-t border-white/5">
              {[
                "Acesso imediato após o pagamento",
                "Acesso por 1 ano completo",
                "Sem mensalidade ou taxas extras",
                "Garantia incondicional de 7 dias",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                  <Check size={13} className="text-orange-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <CountdownTimer />
        </div>
      </section>

      {/* 7. GARANTIA */}
      <section className="py-14 max-w-2xl mx-auto px-4 text-center space-y-5">
        <div className="flex items-center justify-center gap-3">
          <span className="text-6xl font-black text-orange-500">7</span>
          <div className="text-left">
            <span className="block text-lg font-black text-white uppercase">dias de garantia</span>
            <span className="block text-sm text-gray-400 font-light">incondicional</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
          Se em até 7 dias você achar que o conteúdo não serve para você, devolvemos 100% do valor. Sem perguntas, sem burocracia.
        </p>
        <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-500/20 rounded-full px-5 py-2 text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
          <ShieldCheck size={14} /> Risco Zero
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center mb-8 space-y-2">
          <span className="text-xs font-mono uppercase text-orange-400 tracking-widest">Dúvidas</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase">Perguntas frequentes</h2>
        </div>
        <FAQSection />
      </section>

      {/* CTA FINAL */}
      <section className="py-16 max-w-2xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
          Quer usar IA para criar conteúdo ou gerar renda{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 italic">sem pagar mensalidade?</span>
        </h2>
        <p className="text-gray-400 text-sm font-light">Uma compra de R$ 98,00. Acesso por 1 ano. Resultado em 1 fim de semana.</p>
        <a
          href="https://pay.kiwify.com.br/79zqIoV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-black py-4 px-10 rounded-sm transition-all duration-300 text-sm uppercase tracking-tight shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_45px_rgba(234,88,12,0.5)]"
        >
          GARANTIR MEU ACESSO — R$ 98,00
        </a>
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-gray-500 flex-wrap">
          <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-orange-500" /> Garantia 7 dias</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={12} className="text-orange-500" /> Acesso 1 ano</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Zap size={12} className="text-orange-500" /> Acesso imediato</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10 py-8 px-4 text-xs text-gray-500">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-orange-600 flex items-center justify-center">
                <Sparkles size={9} className="text-white" />
              </div>
              <span className="text-xs font-black tracking-tight text-white">MÉTODO MULTI-IA</span>
            </div>
            <div className="flex gap-4 flex-wrap items-center justify-center text-[10px] font-mono font-bold tracking-wider">
              <button onClick={() => setActiveLegalTab("privacy")} className="hover:text-white transition-colors cursor-pointer">PRIVACIDADE</button>
              <span>·</span>
              <button onClick={() => setActiveLegalTab("terms")} className="hover:text-white transition-colors cursor-pointer">TERMOS</button>
              <span>·</span>
              <button onClick={() => setActiveLegalTab("disclaimer")} className="hover:text-white transition-colors cursor-pointer">DISCLAIMER</button>
            </div>
          </div>
          <div className="text-[11px] font-light leading-relaxed space-y-2">
            <p>Desenvolvido por IDSystems · idsystems17@gmail.com</p>
            <p>Os resultados variam de pessoa para pessoa conforme dedicação e aplicação. Não há garantia de lucro sem esforço.</p>
            <p>Este site não é afiliado ao Google Inc., Facebook Inc. ou TikTok Inc.</p>
          </div>
        </div>
      </footer>

      <LegalModals
        isOpen={activeLegalTab !== null}
        onClose={() => setActiveLegalTab(null)}
        type={activeLegalTab || "privacy"}
      />
    </div>
  );
}
