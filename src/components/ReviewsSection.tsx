import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Camila Rodrigues",
    role: "Infoprodutora — Nicho Organização",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Sempre quis criar um e-book mas ficava travada na escrita. Com o gerador, coloquei o tema 'Organização para Mães que Trabalham', escolhi o tom casual e em 2 minutos tinha 7 capítulos completos. Publiquei na Kiwify e já vendi na primeira semana.",
  },
  {
    id: 2,
    name: "Lucas Mendes",
    role: "Consultor de Marketing Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Testei com ceticismo — achei que ia sair aquele texto genérico de IA. Me surpreendi. O conteúdo veio estruturado, com profundidade real em cada capítulo e um CTA no final que eu nem precisei ajustar. Já usei para 4 nichos diferentes.",
  },
  {
    id: 3,
    name: "Patrícia Alves",
    role: "Professora — Nicho Educação Financeira",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: "Não entendo nada de IA e não precisei entender. Preenchi o formulário em 1 minuto, cliquei em gerar e recebi um e-book completo sobre educação financeira para iniciantes. Mais prático impossível. Recomendo para qualquer pessoa com uma ideia na cabeça.",
  },
];

export default function ReviewsSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote size={20} className="text-gray-200" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100">
              <img
                src={rev.avatar}
                alt={rev.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div>
                <span className="text-xs font-semibold text-[#1F2937] block">{rev.name}</span>
                <span className="text-[10px] text-gray-400 block">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
