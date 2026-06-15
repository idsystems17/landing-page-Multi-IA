import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Zap,
  Check,
  BookOpen,
  Layers,
  ChevronRight,
  FileText,
  Users,
  Target,
  GraduationCap,
  PenLine,
  Rocket,
  BadgeCheck,
  Megaphone,
} from "lucide-react";

import CountdownTimer from "./components/CountdownTimer";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import LegalModals from "./components/LegalModals";
import VideoSection from "./components/VideoSection";

// @ts-ignore
import bundleMockupImg from "./assets/images/product_mockup_1780603159120.png";

const KIWIFY_URL = "https://pay.kiwify.com.br/79zqIoV";

export default function App() {
  const [activeLegalTab, setActiveLegalTab] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  return (
    <div className="bg-[#F8F9FA] text-[#1F2937] min-h-screen font-sans leading-relaxed flex flex-col">

      {/* ── BARRA TOPO — urgência ── */}
      <div className="bg-[#2563EB] text-white text-center py-2.5 px-4 text-[11px] font-semibold tracking-wide sticky top-0 z-50">
        ⚡ Pagamento único de R$98 · Acesso por 1 ano · Garantia incondicional de 7 dias
      </div>

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-200 sticky top-9 z-40">
        <div className="max-w-5xl mx-auto w-full px-4 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center">
              <Sparkles size={13} className="text-white" />
            </div>
            <div>
              <span className="text-sm font-display font-bold text-[#1F2937]">E-book Pronto</span>
              <span className="text-[10px] text-gray-400 ml-1.5 hidden sm:inline">Gerador com IA</span>
            </div>
          </div>

          <CountdownTimer compact />

          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-sm shrink-0"
          >
            Começar agora — R$98
          </a>
        </div>
      </header>

      {/* ── 1. HERO ── */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-16 text-center space-y-6">

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#2563EB] border border-blue-200 rounded-full text-xs font-semibold">
          <Sparkles size={11} />
          Ferramenta de IA para criar infoprodutos
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1F2937] leading-tight tracking-tight">
          Crie E-books Completos em{" "}
          <span className="text-[#2563EB]">Minutos com IA</span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Pare de perder horas olhando para a tela em branco. Informe o tema e o público — a IA escreve o e-book inteiro, capítulo por capítulo, pronto para publicar e vender na Kiwify, Hotmart ou qualquer outra plataforma.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-10 rounded-xl transition-all text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-200 group"
          >
            Gerar Meu Primeiro E-book
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 text-xs text-gray-400 flex-wrap">
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#2563EB]" /> Garantia 7 dias</span>
          <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#2563EB]" /> Acesso por 1 ano</span>
          <span className="flex items-center gap-1.5"><Zap size={13} className="text-[#2563EB]" /> Acesso imediato</span>
        </div>

        {/* Vídeo com bônus desbloqueável */}
        <div className="pt-2">
          <VideoSection compact />
        </div>
      </section>

      {/* ── 2. DOR ── */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">O problema</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-[#1F2937] leading-tight">
            Você tem a ideia. Mas travar na escrita é o que impede de publicar.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Criar um e-book do zero leva semanas. Você escreve, apaga, reescreve, perde a confiança — e no fim o projeto fica na gaveta. <strong className="text-[#1F2937]">A ideia boa existe. O conteúdo é o obstáculo.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { stat: "3 min", label: "para gerar um e-book com IA" },
              { stat: "350+", label: "palavras por capítulo" },
              { stat: "1x", label: "pagamento, sem mensalidade" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-5 text-center">
                <span className="block text-3xl font-display font-bold text-[#2563EB]">{item.stat}</span>
                <span className="text-xs text-gray-500 mt-1 block leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMO FUNCIONA ── */}
      <section className="py-16 max-w-2xl mx-auto px-4 text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Como funciona</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-[#1F2937] leading-tight">
            3 passos. Nenhum conhecimento de IA necessário.
          </h2>
        </div>

        <div className="space-y-4 text-left">
          {[
            {
              step: "01",
              icon: PenLine,
              title: "Descreva o seu e-book",
              desc: "Informe o tema, o público-alvo e o tom que você quer — casual, educativo, motivacional ou focado em vendas. Leva menos de 1 minuto.",
            },
            {
              step: "02",
              icon: Sparkles,
              title: "A IA escreve tudo",
              desc: "Título, sumário, introdução, capítulos completos com mais de 350 palavras cada, pontos-chave e uma conclusão com chamada para ação. Tudo em segundos.",
            },
            {
              step: "03",
              icon: Rocket,
              title: "Revise, copie e publique",
              desc: "Copie cada seção com um clique, personalize o que quiser e publique na Kiwify, Hotmart ou qualquer plataforma. Seu produto digital está pronto.",
            },
          ].map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-[10px] font-bold text-gray-300">{step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1F2937] mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. PARA QUEM É ── */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Para quem é</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-[#1F2937] leading-tight">
              Ideal para quem quer resultados agora
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: FileText, text: "Criar e-books para vender na Kiwify, Hotmart ou qualquer outra plataforma" },
              { icon: GraduationCap, text: "Produzir materiais educativos rapidamente" },
              { icon: Users, text: "Lançar um produto digital neste fim de semana" },
              { icon: Target, text: "Transformar qualquer ideia em conteúdo estruturado" },
              { icon: Zap, text: "Economizar horas de escrita usando inteligência artificial" },
              { icon: BookOpen, text: "Criar e-books em qualquer nicho, sem conhecimento técnico" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-200 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#2563EB]" />
                </div>
                <span className="text-sm text-[#1F2937] font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMAGEM DO PRODUTO ── */}
      <div className="py-10 text-center">
        <img
          src={bundleMockupImg}
          alt="Gerador de E-book com IA — Multi-IA"
          className="h-48 md:h-60 w-auto object-contain mx-auto"
        />
      </div>

      {/* ── 6. OBJEÇÃO: "Mas o ChatGPT não faz isso?" ── */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Uma dúvida comum</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937] leading-tight">
            "Mas o ChatGPT não faz a mesma coisa?"
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Faz — se você souber escrever o prompt certo, estruturar os capítulos, definir o formato, controlar o tom e remontar tudo manualmente. O Gerador de E-books faz tudo isso por você em um formulário de 1 minuto, com estrutura profissional já incluída: sumário, introdução, capítulos com profundidade real, pontos-chave e CTA de vendas. <strong className="text-[#1F2937]">Nenhum conhecimento de IA necessário.</strong>
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 text-left max-w-lg mx-auto text-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-400 uppercase block">ChatGPT sozinho</span>
              {["Precisa saber escrever prompts", "Estrutura manual", "Resultado genérico sem contexto", "Você monta tudo do zero"].map(t => (
                <div key={t} className="flex items-start gap-2 text-gray-500">
                  <span className="text-rose-400 mt-0.5 shrink-0">✗</span> {t}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2563EB] uppercase block">Gerador de E-books</span>
              {["Formulário simples, sem prompts", "Estrutura pronta de e-book", "Conteúdo ajustado ao seu nicho", "Capítulos prontos para copiar"].map(t => (
                <div key={t} className="flex items-start gap-2 text-[#1F2937]">
                  <span className="text-emerald-500 mt-0.5 shrink-0">✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DEPOIMENTOS ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center mb-10 space-y-2">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Quem já usou</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937]">Resultados de quem testou</h2>
        </div>
        <ReviewsSection />
      </section>

      {/* ── 8. O QUE VOCÊ LEVA ── */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">O que está incluído</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937]">Tudo que você recebe</h2>
          </div>

          <div className="space-y-4">
            {/* Produto principal */}
            <div className="bg-[#F8F9FA] border-2 border-[#2563EB] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center">
                  <BookOpen size={18} className="text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider block">Produto principal</span>
                  <h3 className="font-display font-bold text-[#1F2937]">Gerador de E-books com IA</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Formulário simples onde você informa o tema, o público-alvo, o tom e o número de capítulos. A IA gera o e-book completo: título, subtítulo, sumário, introdução, capítulos com mais de 350 palavras cada, pontos-chave por capítulo, conclusão e chamada para ação. Copie por seção ou copie o e-book inteiro de uma vez.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Título e sumário automáticos", "350+ palavras por capítulo", "Tom personalizado", "Conclusão com CTA de vendas", "Copiar tudo com 1 clique", "5, 7 ou 10 capítulos"].map(f => (
                  <div key={f} className="flex items-center gap-2 text-xs text-[#1F2937]">
                    <BadgeCheck size={13} className="text-[#2563EB] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Bônus 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Layers size={18} className="text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Bônus 1 incluso</span>
                  <h3 className="font-display font-bold text-[#1F2937]">Arsenal de IAs Gratuitas</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Catálogo com 8 ferramentas de IA gratuitas — Claude, ChatGPT, Gemini, Leonardo.AI, ElevenLabs e mais. Cada uma com superpoder, limitação e prompt inicial pronto para copiar. Turbine seu e-book com capa, revisão e divulgação profissional.
              </p>
            </div>

            {/* Bônus 2 */}
            <div className="bg-white border border-amber-200 rounded-2xl p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                NOVO
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Megaphone size={18} className="text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">Bônus 2 incluso</span>
                  <h3 className="font-display font-bold text-[#1F2937]">Como Monetizar seu E-book</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guia prático de 5 passos para transformar o e-book gerado em renda passiva: como formatar em PDF, criar uma capa profissional de graça, precificar entre R$27 e R$97, publicar na Kiwify ou Hotmart e divulgar no Instagram, Pinterest e WhatsApp — com prompts prontos para cada canal.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Formatação PDF", "Capa com IA", "Estratégia de preço", "Publicação passo a passo", "Divulgação orgânica"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PREÇO ── */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Investimento</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937]">Uma compra. Sem mensalidade.</h2>

          <div className="bg-white border-2 border-[#2563EB] rounded-2xl p-8 space-y-5 shadow-lg shadow-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 py-1 px-3 bg-[#2563EB] text-white font-bold text-[9px] uppercase tracking-wider rounded-bl-xl">
              PAGUE 1X
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 line-through block">De R$ 163,34 por apenas:</span>
              <div className="flex items-end justify-center gap-1 leading-none">
                <span className="text-2xl font-bold text-gray-400 self-start mt-3">R$</span>
                <span className="text-8xl font-display font-bold text-[#1F2937] tracking-tighter leading-none">98</span>
                <span className="text-2xl font-bold text-gray-400 self-end mb-2">,00</span>
              </div>
              <span className="text-sm text-gray-500 block pt-1">ou 12x de <strong className="text-[#2563EB]">R$10,14</strong> no cartão</span>
            </div>

            <a
              href={KIWIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base py-4 rounded-xl transition-all shadow-sm inline-block text-center"
            >
              Quero Meu Acesso Agora
            </a>

            <div className="space-y-2 text-left pt-2 border-t border-gray-100">
              {[
                "Acesso imediato após o pagamento",
                "Acesso por 1 ano completo",
                "Sem mensalidade ou taxas extras",
                "Garantia incondicional de 7 dias",
                "Bônus 1: Arsenal de IAs Gratuitas",
                "Bônus 2: Como Monetizar seu E-book",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                  <Check size={13} className="text-[#2563EB] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <CountdownTimer />
        </div>
      </section>

      {/* ── 10. GARANTIA ── */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-xl mx-auto px-4 text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto">
            <ShieldCheck size={28} className="text-[#2563EB]" />
          </div>
          <h2 className="text-2xl font-display font-bold text-[#1F2937]">Garantia incondicional de 7 dias</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Se em até 7 dias você achar que a ferramenta não serve para o seu projeto, devolvemos 100% do valor. Sem perguntas, sem burocracia, sem constrangimento.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 text-xs font-semibold text-[#2563EB]">
            <ShieldCheck size={13} /> Risco zero para você
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Dúvidas</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1F2937]">Perguntas frequentes</h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ── 12. CTA FINAL ── */}
      <section className="bg-[#2563EB] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            Chega de tela em branco.<br />Publique seu e-book esta semana.
          </h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Você tem a ideia. A IA escreve. Você publica. R$98 pagamento único.
          </p>
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-blue-50 text-[#2563EB] font-bold py-4 px-10 rounded-xl transition-all text-base shadow-lg"
          >
            Gerar Meu E-book com IA — R$98
          </a>
          <div className="flex items-center justify-center gap-5 text-xs text-blue-200 flex-wrap pt-2">
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} /> Garantia 7 dias</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> Acesso 1 ano</span>
            <span className="flex items-center gap-1.5"><Zap size={12} /> Acesso imediato</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <Sparkles size={11} className="text-white" />
              </div>
              <span className="text-sm font-display font-bold text-[#1F2937]">E-book Pronto</span>
              <span className="text-xs text-gray-400">— Gerador com IA</span>
            </div>
            <div className="flex gap-4 text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
              <button onClick={() => setActiveLegalTab("privacy")} className="hover:text-[#2563EB] transition-colors cursor-pointer">Privacidade</button>
              <span>·</span>
              <button onClick={() => setActiveLegalTab("terms")} className="hover:text-[#2563EB] transition-colors cursor-pointer">Termos</button>
              <span>·</span>
              <button onClick={() => setActiveLegalTab("disclaimer")} className="hover:text-[#2563EB] transition-colors cursor-pointer">Disclaimer</button>
            </div>
          </div>
          <div className="text-xs text-gray-400 leading-relaxed space-y-1">
            <p>Desenvolvido por IDSystems · idsystems17@gmail.com</p>
            <p>Os resultados variam conforme dedicação e aplicação. Não há garantia de lucro sem esforço.</p>
            <p>Este site não é afiliado ao Google Inc., OpenAI Inc. ou Meta Platforms Inc.</p>
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
