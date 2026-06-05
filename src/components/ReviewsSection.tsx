import { Star, Quote, Sparkles } from "lucide-react";
import { Review } from "../types";

export default function ReviewsSection() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Rafael Souza",
      role: "Coproductor & Infoprodutor de Finanças",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Eu estava gastando quase R$ 250 por mês somando as assinaturas premium de ferramentas pagas de conversação. Aprendi no Método a orquestrar as ferramentas gratuitas integradas com Inteligências Artificiais de busca livre. Em menos de 4 dias lancei meu primeiro eBook tripwire estruturado cientificamente. Vendi 12 cópias logo na primeira campanha de anúncios!",
      date: "Há 3 dias"
    },
    {
      id: 2,
      name: "Mariana Lemos",
      role: "Especialista em Organização Profissional",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "O que me conquistou foi o Módulo 5 (Funil Gerador de Caixa). Eu vendia meus produtos por R$ 37,00 secos. Apliquei a tática de Order Bump de R$ 19,90 e, para minha surpresa, quase 38% dos compradores assinalaram a caixinha extra logo de cara! Meu faturamento dobrou gastando exatamente o mesmo em cliques de tráfego do Google.",
      date: "Há 1 semana"
    },
    {
      id: 3,
      name: "Thiago Vasconcelos",
      role: "Afiliado Autoridade & Canal Dark",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Sou tímido e não queria aparecer de jeito nenhum. A metodologia de canais dark usando ferramentas de imagem avançadas e gratuitas para obter fotos fotorrealistas de estúdio e vozes articuladas em português salvou meu projeto. Coloquei vídeos de retenção alta no Instagram e TikTok e ultrapassei 25 mil views em 7 dias com o Método Multi-IA.",
      date: "Há 2 dias"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-600/25 rounded-sm text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Sparkles size={11} className="text-orange-400 animate-pulse" /> RELATOS DE QUEM SEGUIRIA O MÉTODO
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
          Alunos Que Economizaram e Multiplicaram Resultados
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl mx-auto">
          Veja como criadores comuns abandonaram mensalidades abusivas e criaram verdadeiras máquinas autônomas de infoprodutos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="group bg-[#050505] border border-white/5 rounded-sm p-6 relative hover:border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top quote icon decorators */}
            <div className="absolute right-6 top-6 text-gray-800 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
              <Quote size={32} />
            </div>

            <div className="space-y-4">
              {/* Stars row */}
              <div className="flex items-center gap-1 text-orange-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Comment copy */}
              <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed italic">
                 "{rev.comment}"
              </p>
            </div>

            {/* Profile bottom row */}
            <div className="flex items-center gap-3.5 pt-6 border-t border-white/10 mt-6 shrink-0">
              <img
                src={rev.avatar}
                alt={rev.name}
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-sm object-cover border border-white/10 shadow-sm"
              />
              <div>
                <span className="text-xs font-bold text-white block uppercase tracking-tight">{rev.name}</span>
                <span className="text-[10px] text-gray-400 font-mono block leading-relaxed">{rev.role}</span>
                <span className="text-[9px] text-gray-500 block">{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
