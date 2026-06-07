import { useState, FormEvent } from "react";
import { X, ShieldCheck, CreditCard, Landmark, Check, Sparkles, AlertCircle, Copy } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrice?: number;
}

export default function CheckoutModal({ isOpen, onClose, initialPrice = 37.90 }: CheckoutModalProps) {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerCpf, setBuyerCpf] = useState("");
  const [orderBumpChecked, setOrderBumpChecked] = useState(true);
  
  // Credit card state
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const orderBumpPrice = 19.90;
  const totalPrice = orderBumpChecked ? initialPrice + orderBumpPrice : initialPrice;

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  };

  const handleCopyPixKey = () => {
    const fakePixKey = "00020101021126380014br.gov.bcb.pix0116multiia482930218290300145BR5920Metodo_Multi_IA6009SAO_PAULO62070503***6304ECE3";
    navigator.clipboard.writeText(fakePixKey).then(() => {
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2000);
    });
  };

  const handleSubmitPayment = (e: FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !buyerEmail.trim() || !buyerCpf.trim()) {
      alert("Por favor, preencha seus dados de faturamento!");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/85 animate-fade-in">
      <div className="relative bg-black border border-white/10 rounded-sm w-full max-w-xl overflow-hidden shadow-2xl">
        
        {/* Top banner / header */}
        <div className="bg-[#0a0a0a] p-5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-orange-500 h-5 w-5" />
            <div>
               <span className="text-[10px] uppercase font-mono tracking-widest text-orange-500 font-bold block leading-none">Ambiente 100% Seguro</span>
               <h4 className="text-sm font-bold text-white tracking-tight uppercase mt-1">Garantir Acesso — E-book Método Multi-IA</h4>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-sm border border-white/10 bg-[#050505] text-gray-400 hover:text-white transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Success screen */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="h-16 w-16 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-sm flex items-center justify-center mx-auto animate-bounce">
              <Check size={36} strokeWidth={3} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">Inscrição Confirmada com Sucesso!</h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-sm mx-auto">
                Parabéns! Suas chaves de acesso foram liberadas. Enviamos as instruções de login para o seu e-mail: <strong className="text-orange-500 select-all">{buyerEmail}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#0a0a0a] border border-white/10 rounded-sm max-w-sm mx-auto text-left space-y-2 text-xs">
              <div className="text-gray-400 font-bold font-mono uppercase tracking-wider">O que fazer agora?</div>
              <ul className="space-y-1.5 text-gray-300 font-light list-disc pl-4 leading-normal font-sans">
                <li>Abra sua caixa de entrada (verifique também Spam/Promoções).</li>
                <li>Assista ao bônus de Viabilidade Financeira e use os mega-prompts.</li>
                <li>Aproveite o suporte VIP para decolar seu projeto.</li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-8 rounded-sm transition-all"
            >
              FECHAR E EXPLORAR A PÁGINA
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitPayment} className="p-6 space-y-5 bg-[#050505]">
            
            {/* 1. Pricing panel summary */}
            <div className="bg-[#0a0a0a] rounded-sm p-4 flex items-center justify-between border border-white/10">
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-500">Produto Selecionado</span>
                <span className="text-xs text-white font-bold block uppercase tracking-tight">E-book Método Multi-IA (Acesso por 1 Ano)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-orange-500 block font-bold leading-normal">Total a Pagar</span>
                <span className="text-lg font-black text-white font-mono">{formatBRL(totalPrice)}</span>
              </div>
            </div>

            {/* 2. Billing fields schema */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-gray-500 tracking-wider block">Passo 1: Dados de Faturamento</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder="Nome Completo"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-orange-500/50 rounded-sm px-3 py-2.5 text-white text-xs focus:outline-none placeholder-gray-600 font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    required
                    placeholder="e-Mail Para Receber Acesso"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-orange-500/50 rounded-sm px-3 py-2.5 text-white text-xs focus:outline-none placeholder-gray-600 font-medium"
                  />
                </div>
              </div>

              <input
                type="text"
                required
                placeholder="CPF (Necessário para emissão da NFe)"
                value={buyerCpf}
                onChange={(e) => setBuyerCpf(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 focus:border-orange-500/50 rounded-sm px-3 py-2.5 text-white text-xs focus:outline-none placeholder-gray-600 font-medium"
              />
            </div>

            {/* 3. ORDER BUMP BLOCK (Fulfillment of Module 5) */}
            <div className="p-3.5 bg-orange-600/10 border border-orange-600/25 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 py-0.5 px-2 bg-orange-600 text-white text-[8px] font-black uppercase font-mono tracking-wider">
                 RECOMENDADO
              </div>
              
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={orderBumpChecked}
                  onChange={(e) => setOrderBumpChecked(e.target.checked)}
                  className="rounded-sm border-orange-500/35 text-orange-600 focus:ring-orange-500/20 bg-[#050505] mt-1 h-4 w-4"
                />
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-tight">
                    Adicionar Super Catálogo de IAs Aliadas (+ {formatBRL(orderBumpPrice)})
                  </span>
                  <p className="text-[10px] text-gray-400 font-light leading-normal">
                    Obtenha uma curadoria secreta de ferramentas premium gratuitas de áudio, voz, imagem e layouts que não requerem assinaturas caras. Adicione essa oferta opcional agora!
                  </p>
                </div>
              </label>
            </div>

            {/* 4. Payment selection tabs */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-gray-500 tracking-wider block">Passo 2: Método de Pagamento</span>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`cursor-pointer py-2.5 rounded-sm border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "pix"
                      ? "bg-orange-600/10 border-orange-500 text-orange-500"
                      : "bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <span className="font-mono text-[9px] uppercase">⚡ PIX</span>
                  <span className="text-[8px] opacity-75 font-light">Liberação Digital</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`cursor-pointer py-2.5 rounded-sm border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "card"
                      ? "bg-orange-600/10 border-orange-500 text-orange-500"
                      : "bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <CreditCard size={14} />
                  <span className="text-[8px] opacity-75 font-light">Até 12x Sem Juros</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("boleto")}
                  className={`cursor-pointer py-2.5 rounded-sm border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "boleto"
                      ? "bg-orange-600/10 border-orange-500 text-orange-500"
                      : "bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <Landmark size={14} />
                  <span className="text-[8px] opacity-75 font-light">Em até 3 dias úteis</span>
                </button>
              </div>

              {/* Tab payment details render */}
              <div className="p-4 bg-black border border-white/10 rounded-sm min-h-[140px] flex flex-col justify-center">
                
                {paymentMethod === "pix" && (
                  <div className="text-center space-y-3">
                    <div className="flex justify-center items-center gap-4 bg-[#0a0a0a] p-3 rounded-sm border border-white/10">
                      {/* Interactive mock QR code visual */}
                      <div className="bg-white p-1 rounded-sm shrink-0">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=MetodoMultiIAPixPaymentVerified2026"
                          alt="Fake Pix QR"
                          referrerPolicy="no-referrer"
                          className="h-20 w-20 object-contain animate-fade-in"
                        />
                      </div>
                      <div className="text-left space-y-1">
                        <span className="text-[10px] text-orange-500 font-bold uppercase block">⚡ Liberação Imediata</span>
                        <p className="text-[11px] text-gray-400 leading-normal font-light">
                          Escaneie o QR Code ao lado pelo aplicativo de banco ou copie a chave Pix abaixo para finalizar sua inscrição instantaneamente.
                        </p>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleCopyPixKey}
                      className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-xs font-mono bg-[#0a0a0a] hover:bg-white/5 border border-white/10 text-orange-500 font-bold transition-all"
                    >
                      {copiedPix ? "COPIADO!" : "COPIAR CÓDIGO PIX COLA"} <Copy size={12} />
                    </button>
                  </div>
                )}

                {paymentMethod === "card" && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Número do Cartão (16 dígitos)"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none placeholder-gray-600 font-mono"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Expiração (MM/AA)"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-[#050505] border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none placeholder-gray-600 font-mono"
                        />
                        <input
                          type="password"
                          maxLength={3}
                          placeholder="CVV"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full bg-[#050505] border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none placeholder-gray-600 font-mono"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 font-light flex items-center gap-1">
                      <AlertCircle size={10} /> Parcelamos em até 12x sem juros no cartão de crédito.
                    </p>
                  </div>
                )}

                {paymentMethod === "boleto" && (
                  <div className="text-center space-y-2 p-2">
                    <Landmark className="text-gray-500 mx-auto h-8 w-8" />
                    <p className="text-xs text-gray-300 font-semibold leading-normal uppercase">
                      Inscrição Via Boleto Bancário
                    </p>
                    <p className="text-[10px] text-gray-400 font-light max-w-sm mx-auto leading-normal">
                      A compensação bancária do boleto leva de 1 a 3 dias úteis. As credenciais do curso serão liberadas no seu e-mail assim que o pagamento for compensado pelo banco do emissores.
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Submit checkout buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-extrabold py-3.5 px-6 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] uppercase tracking-wider text-xs"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSANDO COMPRA SEGURA...
                  </>
                ) : (
                  <>
                     CONCLUIR INSCRIÇÃO AGORA <Sparkles size={14} />
                  </>
                )}
              </button>
              
              <div className="text-center text-[10px] text-gray-500 font-mono tracking-tight uppercase">
                Seu pagamento está 100% protegido. Certificado SSL de 256 bits ativo.
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
