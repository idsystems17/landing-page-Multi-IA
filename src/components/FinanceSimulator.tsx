import { useState } from "react";
import { TrendingUp, Calculator, ArrowUpRight, DollarSign, Target, Settings, Info } from "lucide-react";

export default function FinanceSimulator() {
  const [traffic, setTraffic] = useState<number>(300); // Daily clicks
  const [conversionRate, setConversionRate] = useState<number>(1.8); // Percentage
  const [ticketPrice, setTicketPrice] = useState<number>(37.90); // Main offers: R$ 19.90 to R$ 97.00
  const [orderBumpActive, setOrderBumpActive] = useState<boolean>(true);
  const [orderBumpPrice] = useState<number>(19.90);
  const [orderBumpRate, setOrderBumpRate] = useState<number>(35); // Conversion rate of order bump among buyers
  const [upsellActive, setUpsellActive] = useState<boolean>(false);
  const [upsellPrice] = useState<number>(47.00);
  const [upsellRate, setUpsellRate] = useState<number>(15); // Conversion rate of upsell among buyers
  const [targetGoal, setTargetGoal] = useState<number>(5000); // Monthly goal

  // Calculations
  const dailySales = (traffic * (conversionRate / 100));
  
  const dailyMainRevenue = dailySales * ticketPrice;
  const dailyOrderBumpRevenue = orderBumpActive ? (dailySales * (orderBumpRate / 100) * orderBumpPrice) : 0;
  const dailyUpsellRevenue = upsellActive ? (dailySales * (upsellRate / 100) * upsellPrice) : 0;
  
  const totalDailyRevenue = dailyMainRevenue + dailyOrderBumpRevenue + dailyUpsellRevenue;
  const totalMonthlyRevenue = totalDailyRevenue * 30;
  const totalYearlyRevenue = totalDailyRevenue * 365;

  const averageTicket = dailySales > 0 ? totalDailyRevenue / dailySales : ticketPrice;
  const goalProgress = (totalMonthlyRevenue / targetGoal) * 100;

  // Format currencies in BRL nicely
  const formatBRL = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div id="simulator" className="bg-black rounded-sm border border-white/10 overflow-hidden shadow-[0_10px_50px_rgba(234,88,12,0.08)]">
        
        {/* Banner header inside card */}
        <div className="bg-[#050505] p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-500 font-mono uppercase tracking-widest font-bold">
              <Calculator size={14} /> Simulador Módulo 5
            </div>
            <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase">
              Calculadora de Viabilidade Financeira
            </h3>
            <p className="text-gray-400 text-xs md:text-sm font-light max-w-xl font-sans">
              Brinque com os números abaixo e descubra o poder de usar um funil inteligente combinado com tráfego qualificado para atingir suas metas.
            </p>
          </div>
          <div className="bg-orange-600/10 border border-orange-500/20 rounded-sm px-4 py-3 shrink-0 flex items-center gap-3">
            <div className="p-2 rounded-sm bg-orange-950/50 text-orange-500">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono text-gray-500">Valor Médio da Compra</div>
              <div className="text-base font-bold text-white font-mono">{formatBRL(averageTicket)}</div>
            </div>
          </div>
        </div>

        {/* Content body split: Controls vs Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-black">
          
          {/* LEFT COLUMN: Controls */}
          <div className="lg:col-span-7 p-6 md:p-8 space-y-6 md:border-r md:border-white/10">
            
            {/* Control 1: Daily clicks */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold flex items-center gap-1.5">
                  <ArrowUpRight size={16} className="text-orange-500" /> Tráfego Diário (Cliques)
                </label>
                <span className="text-white font-mono font-bold bg-[#0a0a0a] border border-white/10 rounded-sm px-2 py-0.5">
                  {traffic} cliques/dia
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-orange-600 bg-[#0a0a0a] rounded-sm appearance-none h-2 cursor-pointer focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono uppercase">
                <span>50 (Iniciante)</span>
                <span>500 (Intermediário)</span>
                <span>1000 (Escala)</span>
              </div>
            </div>

            {/* Control 2: Conversion rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold flex items-center gap-1.5">
                  <TrendingUp size={16} className="text-orange-500" /> Taxa de Conversão do Funil
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-white font-mono font-bold bg-[#0a0a0a] border border-white/10 rounded-sm px-2 py-0.5 text-xs">
                    {conversionRate.toFixed(1)}%
                  </span>
                  <div className="group relative">
                    <Info size={14} className="text-gray-500 hover:text-white cursor-pointer" />
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-black border border-white/10 text-gray-400 text-[10px] p-2 rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 leading-normal font-sans font-light">
                      Média do mercado é 1% a 2%. Nosso método ensina designs emocionais para elevar essa taxa.
                    </span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-orange-600 bg-[#0a0a0a] rounded-sm appearance-none h-2 cursor-pointer focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono uppercase">
                <span>0.5% (Baixo)</span>
                <span>2.0% (Saudável)</span>
                <span>5.0% (Excepcional)</span>
              </div>
            </div>

            {/* Control 3: Main pricing */}
            <div className="space-y-3">
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-300 font-bold">
                🎯 Preço do seu Infoproduto Principal (Média sugerida: R$ 37,90)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[19.90, 27.90, 37.90, 97.00].map((price) => (
                  <button
                    key={price}
                    onClick={() => setTicketPrice(price)}
                    className={`py-2 px-1 rounded-sm text-center text-xs font-mono font-bold border transition-all cursor-pointer ${
                      ticketPrice === price
                        ? "bg-orange-600/10 border-orange-500 text-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.2)]"
                        : "bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
                    }`}
                  >
                    {formatBRL(price)}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Advanced checkout options (Módulo 5 Bump/Upsell) */}
            <div className="p-4 bg-[#050505] border border-white/5 rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-gray-400 tracking-wider">
                <Settings size={12} className="text-orange-500" /> Multiplicadores de Caixa (Check-out Inteligente)
              </div>
              
              {/* Order bump toggle */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-white font-semibold flex items-center gap-1.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={orderBumpActive}
                      onChange={(e) => setOrderBumpActive(e.target.checked)}
                      className="rounded-sm border-white/10 text-orange-600 focus:ring-orange-500/20 bg-[#050505] h-4 w-4"
                    />
                    Order Bump (R$ 19,90 extra)
                  </label>
                  <p className="text-[11px] text-gray-400 font-light pl-6">
                    Módulo de conteúdo extra sugerido no momento do pagamento.
                  </p>
                </div>
                {orderBumpActive && (
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] text-orange-500 font-mono font-bold">🎯 {orderBumpRate}% aceitam</span>
                    <input
                      type="range"
                      min="20"
                      max="60"
                      step="5"
                      value={orderBumpRate}
                      onChange={(e) => setOrderBumpRate(Number(e.target.value))}
                      className="w-20 accent-orange-600 bg-[#050505] rounded progress-xs"
                    />
                  </div>
                )}
              </div>

              {/* Upsell toggle */}
              <div className="flex items-start justify-between gap-4 border-t border-white/5 pt-3">
                <div className="space-y-1">
                  <label className="text-xs text-white font-semibold flex items-center gap-1.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={upsellActive}
                      onChange={(e) => setUpsellActive(e.target.checked)}
                      className="rounded-sm border-white/10 text-orange-600 focus:ring-orange-500/20 bg-[#050505] h-4 w-4"
                    />
                    Oferta de Upsell (R$ 47,00 extra)
                  </label>
                  <p className="text-[11px] text-gray-400 font-light pl-6">
                    Página complementar aberta imediatamente após a primeira venda.
                  </p>
                </div>
                {upsellActive && (
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] text-orange-500 font-mono font-bold">🎯 {upsellRate}% aceitam</span>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="5"
                      value={upsellRate}
                      onChange={(e) => setUpsellRate(Number(e.target.value))}
                      className="w-20 accent-orange-600 bg-[#050505] rounded progress-xs"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Control 5: Target Meta Goal */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <div className="flex justify-between items-center text-xs uppercase font-mono tracking-wider">
                <label className="text-gray-300 font-bold flex items-center gap-1.5">
                  <Target size={16} className="text-orange-500" /> Sua Meta Financeira Mensal Reajustável
                </label>
                <span className="text-orange-500 font-mono font-bold bg-orange-600/10 border border-orange-500/20 rounded-sm px-2 py-0.5">
                  {formatBRL(targetGoal)} / mês
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={targetGoal}
                onChange={(e) => setTargetGoal(Number(e.target.value))}
                className="w-full accent-orange-600 bg-[#0a0a0a] rounded-sm appearance-none h-2 cursor-pointer focus:outline-none"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: Results Preview */}
          <div className="lg:col-span-5 bg-[#050505] p-6 md:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase bg-[#0a0a0a] border border-white/10 text-gray-400 px-2.5 py-1 rounded-sm inline-block">
                 Projeção de Faturamento Real
              </span>

              {/* Monthly revenue gauge */}
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase font-mono tracking-widest text-orange-500 font-medium font-bold">Faturamento Estimado Mensal</div>
                <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight animate-fade-in">
                  {formatBRL(totalMonthlyRevenue)}
                </div>
                <p className="text-xs text-gray-400 font-light font-sans">
                  Resultados baseados em {dailySales.toFixed(1)} vendas de infoprodutos por dia.
                </p>
              </div>

              {/* Meta check gauge */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex justify-between text-xs font-mono text-gray-400 uppercase">
                  <span>Progresso da sua Meta</span>
                  <span className="text-orange-500 font-bold">{goalProgress.toFixed(0)}%</span>
                </div>
                
                <div className="w-full bg-[#0a0a0a] rounded-sm h-3 overflow-hidden border border-white/10">
                  <div
                    className="bg-orange-500 h-full transition-all duration-500 rounded-sm"
                    style={{ width: `${Math.min(goalProgress, 100)}%` }}
                  ></div>
                </div>

                <div className="text-[11px] text-gray-400 bg-black rounded-sm p-3 border border-white/5 mt-2 leading-relaxed">
                  {goalProgress >= 100 ? (
                    <span className="text-orange-400 font-bold uppercase tracking-tight">
                      🎉 Parabéns! Com essa estrutura você SUPERA sua meta financeira mensal em {formatBRL(totalMonthlyRevenue - targetGoal)}! O funil está validado.
                    </span>
                  ) : (
                    <span>
                      Faltam <strong className="text-white font-mono font-bold">{formatBRL(targetGoal - totalMonthlyRevenue)}</strong> para alcançar sua meta. Tente ativar o <strong>Order Bump</strong> ou aumentar a <strong>taxa de conversão</strong> para {((targetGoal / 30 / averageTicket) / traffic * 100).toFixed(1)}% para bater o objetivo com o tráfego de hoje.
                    </span>
                  )}
                </div>
              </div>

              {/* Financial split */}
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-3">
                  <div className="text-[9px] uppercase font-mono text-gray-500">Média Diária</div>
                  <div className="text-sm font-bold text-white font-mono">{formatBRL(totalDailyRevenue)}</div>
                </div>
                <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-3">
                  <div className="text-[9px] uppercase font-mono text-gray-500">Projeção Anual</div>
                  <div className="text-sm font-bold text-orange-500 font-mono">{formatBRL(totalYearlyRevenue)}</div>
                </div>
              </div>

            </div>

            {/* Strategic lesson banner bottom */}
            <div className="mt-8 border-t border-white/10 pt-4 text-xs">
              <div className="flex gap-2.5 items-start bg-orange-950/20 border border-orange-900/30 rounded-sm p-3.5">
                <span className="p-1 rounded-sm bg-orange-950 text-orange-400 text-[10px] font-mono font-bold leading-none shrink-0 border border-orange-900/40 uppercase">
                  DICA
                </span>
                <p className="text-gray-400 leading-normal font-light">
                  Percebeu como o <strong>Order Bump</strong> de R$ 19,90 eleva o faturamento sem que você gaste um único real a mais de anúncios? Essa é a lógica de escala que ensinamos no <strong>Módulo 5</strong> do curso.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
