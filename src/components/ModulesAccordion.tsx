import { useState } from "react";
import { ChevronDown, Sparkles, Layers, BookOpen, Video, Terminal, TrendingUp, Check } from "lucide-react";

export default function ModulesAccordion() {
  const modules = [
    {
      id: 1,
      number: "01",
      title: "Fundamentos Multi-IA",
      subtitle: "Por que usar só o ChatGPT não basta — e como combinar ChatGPT, Gemini, Claude e Leonardo.AI gratuitamente para produzir 10x mais rápido.",
      icon: Layers,
      color: "from-orange-600/20 to-red-500/10",
      accent: "text-orange-400",
      lessonsCount: 5,
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
      lessonsCount: 5,
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
      lessonsCount: 5,
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
      lessonsCount: 5,
      tag: "12 min • Médio"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-4">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase mb-3 text-center">
          <Sparkles size={12} className="text-orange-400 shrink-0" /> ACESSO PLANO PREMIUM
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

          return (
            <div
              key={mod.id}
              className="bg-black rounded-sm border border-white/5 p-5 md:p-6 transition-all duration-300 hover:border-orange-500/15"
            >
              <div className="flex items-start md:items-center gap-4">
                {/* Icon Panel */}
                <div className="p-3 rounded-sm bg-[#0a0a0a] border border-white/5 shrink-0">
                  <IconComponent className="h-6 w-6 text-orange-500" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold">
                      Módulo {mod.number}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-[#0a0a0a] border border-white/10 text-gray-400 font-mono">
                      {mod.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono">
                      {mod.lessonsCount} Aulas Liberadas no Ebook
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-tight">
                    {mod.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 max-w-2xl font-light font-sans leading-relaxed">
                    {mod.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
