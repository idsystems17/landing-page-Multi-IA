import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "disclaimer";
}

export default function LegalModals({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const contentMap = {
    privacy: {
      title: "Política de Privacidade (Em Conformidade com a LGPD e Diretrizes do Google)",
      paragraphs: [
        "Bem-vindo ao portal oficial do Método Multi-IA. Valorizamos profundamente a transparência do mercado digital e a integridade de seus dados pessoais. Esta Política explica em detalhes quais dados coletamos, como são processados e armazenados com segurança máxima.",
        "1. Coleta de Informações: Coletamos apenas as informações voluntariamente fornecidas por você durante o preenchimento de formulários cadastrais ou simulações (como seu nome completo ao emitir o certificado e seu e-mail). Não vendemos nem compartilhamos essas informações com terceiros.",
        "2. Cookies e Rastreamento: Usamos ferramentas analíticas padrões de mercado e tags do Google Ads para monitorar tendências agregadas de tráfego, pixels de conversão e taxas de cliques práticos. Esses dados nos ajudam a aperfeiçoar a velocidade da página de vendas para maximizar seu tempo.",
        "3. Seu Controle: Você pode, a qualquer momento, limpar o cache do seu navegador ou utilizar janelas anônimas para que nenhum cookie rastreador seja salvo em seu dispositivo físico.",
        "4. Segurança: Seus dados cadastrais em transações comerciais são processados integralmente pelas principais e mais seguras plataformas de pagamento do Brasil, em conexões seguras sob criptografia SSL de 256 bits."
      ]
    },
    terms: {
      title: "Termos de Uso e Condição da Garantia Incondicional de 7 Dias",
      paragraphs: [
        "Ao acessar os laboratórios dinâmicos e materiais mestre disponibilizados nesta landing page, você concorda em cumprir e respeitar os presentes Termos de Atuação Comercial.",
        "1. Licença de Uso Individual: Nossos mega-prompts e roadmaps práticos destinam-se ao aprendizado próprio e desenvolvimento de seus infoprodutos. É permitida a cópia livre de prompts para uso comercial em seus próprios e-books ou canais dark, sendo proibida a revenda mestre da metodologia em si como criador concorrente.",
        "2. Funcionamento da Garantia Incondicional de 7 Dias: Fiel ao artigo 49 do Código de Defesa do Consumidor brasileiro e conforme prometido na copy principal, se em até 7 dias corridos a partir da inscrição você julgar que as diretrizes práticas de orquestração Multi-IA não superaram suas expectativas, você poderá reaver 100% de seu capital investido sem perguntas, estornos fictícios ou burocracia.",
        "3. Plataforma de intermediação: Todo o processamento financeiro e reembolso transacional é gerenciado diretamente pela plataforma certificada de checkout seguro, oferecendo plena proteção ao consumidor."
      ]
    },
    disclaimer: {
      title: "Aviso de Isenção de Ganhos Rápidos (Google Disclaimer)",
      paragraphs: [
        "AVISO LEGAL: Atuamos em estrita consonância com as diretrizes globais do Google contra promessas falsas de remuneração rápida livre de esforço.",
        "1. Isenção de Garantias de Receitas Simplificadas: Os números mostrados no 'Simulador de Viabilidade Financeira' baseiam-se em lógicas puramente matemáticas sobre conversão de mercado, servindo como modelo didático e plano estratégico de negócios. Não há garantia implícita de faturamento automático pelo simples fato de se inscrever.",
        "2. Aplicação Prática Obrigatória: Os resultados práticos descritos nas cópias persas de alunos dependem integralmente do tempo investido, nível de dedicação individual e aplicação sequencial do passo a passo das técnicas gratuitas detalhadas ao longo do Método.",
        "3. Suporte Contínuo: Fornecemos suporte total aos alunos por meio de nossos canais de atendimento exclusivos para garantir que você possua toda a ajuda técnica necessária ao longo da sua jornada de criação."
      ]
    }
  };

  const activeContent = contentMap[type] || contentMap.privacy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 animate-fade-in">
      <div className="relative bg-black border border-white/10 rounded-sm w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6">
        
        {/* Header control */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h4 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
            {activeContent.title}
          </h4>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-sm border border-white/10 bg-[#0a0a0a] text-gray-400 hover:text-white transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Paragraph fields */}
        <div className="space-y-4 font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
          {activeContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Footer actions */}
        <div className="border-t border-white/10 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-all shadow-[0_4px_15px_rgba(234,88,12,0.2)]"
          >
            LI E CONCORDO
          </button>
        </div>

      </div>
    </div>
  );
}
