import { useState, useEffect } from "react";
import { PortfolioItem } from "../types";
import { motion } from "motion/react";
import { X, Smartphone, Check, HelpCircle, Phone, Menu, Award, Star, Clock, Heart } from "lucide-react";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  const [activeSimTab, setActiveSimTab] = useState<string>("inicio");
  const [whatsappSent, setWhatsappSent] = useState<boolean>(false);

  // Fire ViewContent specifically for this portfolio project template
  useEffect(() => {
    if (item && typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("ViewContent", {
        content_name: item.name,
        content_category: item.category,
        content_ids: [item.id],
        value: 97.00,
        currency: "BRL"
      });
    }
  }, [item]);

  // Wrapper for simulated WhatsApp clicks inside mockups
  const triggerWhatsappSim = () => {
    setWhatsappSent(true);
    if (typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("Lead", { 
        source: `simulated_whatsapp_${item.id}`,
        content_name: item.name
      });
    }
  };

  // Tracking for the real "Quero Adaptar" WhatsApp contact CTA
  const trackLead = () => {
    if (typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("Lead", { 
        source: "modal_adapt_btn",
        content_name: item?.name 
      });
    }
  };

  // Tracking for live complete demo links
  const trackInitiateCheckout = () => {
    if (typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("InitiateCheckout", { 
        source: "modal_live_demo_link",
        content_name: item?.name 
      });
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  // Simple simulator content based on the project type
  const renderSimulatedApp = () => {
    switch (item.id) {
      case "odontologia":
        return (
          <div className="flex flex-col h-full bg-slate-50 text-slate-800">
            {/* Template Header */}
            <header className="bg-white border-b border-purple-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-bold text-sm text-purple-600 flex items-center gap-1">
                ✨ {item.name.split(" - ")[0]}
              </span>
              <Menu className="w-4 h-4 text-slate-500" />
            </header>

            {/* Simulated Hero */}
            <div className={`p-5 text-white bg-gradient-to-br ${item.gradient} text-center space-y-2`}>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-medium">✨ ODONTOLOGIA ELEVADA</span>
              <h4 className="text-base font-display font-bold leading-tight">
                {item.heroSnippet}
              </h4>
              <p className="text-[11px] text-purple-100">Cuidamos de cada detalhe para você sorrir sem receio.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-1.5 px-3 bg-white text-purple-700 font-bold text-xs rounded-lg shadow-md hover:bg-slate-100 transition-all flex items-center justify-center gap-1"
              >
                <Phone className="w-3 h-3 fill-current" /> Agendar Avaliação
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-white border-b border-purple-50 text-center">
              <div className="p-1 px-2 bg-gradient-to-b from-purple-50 to-white rounded-lg">
                <span className="block text-purple-600 font-extrabold text-[13px] font-display">12+</span>
                <span className="text-[8px] text-slate-500 block uppercase tracking-wider">Especialistas</span>
              </div>
              <div className="p-1 px-2 bg-gradient-to-b from-purple-50 to-white rounded-lg">
                <span className="block text-purple-600 font-extrabold text-[13px] font-display">15k+</span>
                <span className="text-[8px] text-slate-500 block uppercase tracking-wider">Clientes</span>
              </div>
              <div className="p-1 px-2 bg-gradient-to-b from-purple-50 to-white rounded-lg">
                <span className="block text-purple-600 font-extrabold text-[13px] font-display">4.9★</span>
                <span className="text-[8px] text-slate-500 block uppercase tracking-wider">Avaliações</span>
              </div>
            </div>

            {/* Live body tabs */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <div className="flex gap-2 border-b border-purple-100 pb-2">
                <button 
                  onClick={() => setActiveSimTab("inicio")} 
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${activeSimTab === "inicio" ? "bg-purple-100 text-purple-700" : "text-slate-500"}`}
                >
                  Serviços
                </button>
                <button 
                  onClick={() => setActiveSimTab("clinica")} 
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${activeSimTab === "clinica" ? "bg-purple-100 text-purple-700" : "text-slate-500"}`}
                >
                  Sobre Nós
                </button>
              </div>

              {activeSimTab === "inicio" ? (
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono text-purple-600 tracking-wider font-extrabold block">Destaques</span>
                  
                  <div className="p-2.5 bg-white rounded-xl border border-purple-50 flex gap-2.5 items-start">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 font-bold text-xs">🦷</div>
                    <div>
                      <h5 className="font-bold text-[11px] text-slate-800">Implantes de Alta Performance</h5>
                      <p className="text-[9px] text-slate-500 mt-0.5">Recupere sua mastigação e confiança com porcelanas importadas de alta duração.</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-purple-50 flex gap-2.5 items-start">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 font-bold text-xs">✨</div>
                    <div>
                      <h5 className="font-bold text-[11px] text-slate-800">Lentes de Contato Dental</h5>
                      <p className="text-[9px] text-slate-500 mt-0.5">Transformação harmônica do formato, cor e alinhamento dos seus dentes em tempo recorde.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-[10px] text-slate-600 leading-relaxed">
                  <p>A clínica Sorriso VIP é referência nacional em odontologia estética avançada há mais de uma década. Nossa missão é prover tratamentos indolores, precisos e humanizados.</p>
                  <div className="p-2 bg-purple-50 border border-purple-100 rounded-lg text-[9px] text-purple-800">
                     📍 <strong>Localização:</strong> Av. Paulista, 1000 - São Paulo/SP
                  </div>
                </div>
              )}
            </div>
            {/* Bottom Sticky Action */}
            <div className="p-3 bg-white border-t border-purple-100 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-slate-400 block font-mono">Dúvidas?</span>
                <span className="text-[10px] text-slate-700 font-bold block">Fale com a Recepção</span>
              </div>
              <button 
                onClick={triggerWhatsappSim}
                className="py-1.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xxs rounded-full shadow flex items-center gap-1"
              >
                <span>Chamar WhatsApp</span>
              </button>
            </div>
          </div>
        );

      case "advocacia":
        return (
          <div className="flex flex-col h-full bg-stone-900 text-stone-200">
            {/* Header */}
            <header className="bg-stone-950 border-b border-amber-500/20 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-medium text-xs text-amber-400 tracking-wider flex items-center gap-1">
                ⚖️ MORAIS ADVOCACIA
              </span>
              <Menu className="w-4 h-4 text-stone-400" />
            </header>

            {/* Simulated Hero */}
            <div className={`p-5 bg-gradient-to-br ${item.gradient} text-center space-y-2 relative overflow-hidden`}>
              <span className="text-[8px] border border-amber-400/50 text-amber-300 px-2.5 py-0.5 rounded-full uppercase tracking-widest font-mono">
                AUTORIDADE JURÍDICA
              </span>
              <h4 className="text-base font-display font-bold leading-tight text-white">
                {item.heroSnippet}
              </h4>
              <p className="text-[10px] text-stone-300">Resolução inteligente de conflitos comerciais e trabalhistas.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-1.5 px-3 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs rounded-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-1"
              >
                Agende Seu Caso Online
              </button>
            </div>

            {/* Features */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <span className="text-[10px] font-mono text-amber-400 tracking-wider uppercase font-bold block">ÁREAS DE EXCELÊNCIA</span>
              
              <div className="space-y-2">
                <div className="p-2.5 bg-stone-950 border border-amber-500/10 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-amber-100">Direito Societário & Contratos</span>
                    <span className="text-[9px] text-amber-500">→</span>
                  </div>
                  <p className="text-[9px] text-stone-400 mt-1">Blindagem jurídica e constituição empresarial para acelerar seu negócio.</p>
                </div>

                <div className="p-2.5 bg-stone-950 border border-amber-500/10 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-amber-100">Assessoria Trabalhista Patronal</span>
                    <span className="text-[9px] text-amber-500">→</span>
                  </div>
                  <p className="text-[9px] text-stone-400 mt-1">Redução drástica de passivos corporativos e auditoria de contratos de trabalho.</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="p-3 bg-stone-950 border-t border-stone-800 text-center">
              <span className="text-[9px] text-stone-500 block">Atendimento imediato em todo o território nacional</span>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-1 pb-1 text-[10px] text-amber-300 hover:text-amber-400 underline font-bold"
              >
                Fale com um Especialista no WhatsApp
              </button>
            </div>
          </div>
        );

      case "moda":
        return (
          <div className="flex flex-col h-full bg-rose-50/50 text-rose-950">
            {/* Header */}
            <header className="bg-white border-b border-rose-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-bold text-xs text-rose-600 flex items-center gap-1">
                🛍️ {item.name.split(" - ")[0]}
              </span>
              <Menu className="w-4 h-4 text-rose-500" />
            </header>

            {/* Simulated Hero */}
            <div className={`p-5 text-white bg-gradient-to-br ${item.gradient} text-center space-y-2`}>
              <span className="text-[9px] bg-white/20 px-2.5 py-0.5 rounded-full font-sans font-bold uppercase tracking-widest">✨ Coleção Autoral</span>
              <h4 className="text-base font-display font-bold leading-tight">
                {item.heroSnippet}
              </h4>
              <p className="text-[10px] text-pink-100">Looks exclusivos pensados para valorizar a sua personalidade e elegância.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-1.5 px-3 bg-white text-rose-600 font-extrabold text-xs rounded-xl shadow hover:bg-rose-50 transition-all flex items-center justify-center gap-1"
              >
                🛍️ Ver Coleção & Reservar
              </button>
            </div>

            {/* Content List */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <span className="text-[10px] uppercase font-mono text-rose-600 tracking-wider font-extrabold block">Destaques da Temporada</span>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 bg-white rounded-xl border border-rose-100 text-center space-y-1">
                  <span className="text-lg">👗</span>
                  <h6 className="font-bold text-[10px] text-rose-950 leading-none">Vestido Midi Linen</h6>
                  <span className="text-[8px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-bold">R$ 189,00</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-rose-100 text-center space-y-1">
                  <span className="text-lg">👚</span>
                  <h6 className="font-bold text-[10px] text-rose-950 leading-none">Tricot Soft Touch</h6>
                  <span className="text-[8px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-bold">R$ 149,00</span>
                </div>
              </div>

              <div className="p-3 bg-rose-950 text-pink-100 rounded-xl space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-rose-400">✨</span>
                  <h6 className="text-[10px] font-bold text-white leading-none">Personal Stylist On-Line</h6>
                </div>
                <p className="text-[9px] text-rose-200 leading-tight">Chame no WhatsApp e receba sugestões exclusivas de looks e caimentos direto no seu celular.</p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-3 bg-white border-t border-rose-100 flex items-center justify-between">
              <span className="text-[9px] text-rose-600">📍 Salvador, BA</span>
              <button 
                onClick={triggerWhatsappSim}
                className="py-1 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] rounded-lg"
              >
                Chamar No WhatsApp
              </button>
            </div>
          </div>
        );

      case "farmacia":
        return (
          <div className="flex flex-col h-full bg-emerald-50 text-emerald-950">
            {/* Header */}
            <header className="bg-white border-b border-emerald-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-bold text-xs text-emerald-600 flex items-center gap-1">
                💚 {item.name.split(" - ")[0]}
              </span>
              <Menu className="w-4 h-4 text-emerald-500" />
            </header>

            {/* Simulated Hero */}
            <div className={`p-5 text-white bg-gradient-to-br ${item.gradient} text-center space-y-2`}>
              <span className="text-[10px] bg-emerald-900/40 px-2.5 py-0.5 rounded-full font-sans font-bold uppercase tracking-wide">🛡️ Manipulação Certificada</span>
              <h4 className="text-base font-display font-bold leading-tight">
                {item.heroSnippet}
              </h4>
              <p className="text-[10px] text-emerald-100">Sua saúde guiada por fórmulas precisas e tecnologia farmacêutica rigorosa.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-2 px-3 bg-white text-emerald-700 font-extrabold text-xs rounded-xl shadow hover:scale-105 transition-all flex items-center justify-center gap-1"
              >
                📲 Enviar Receita WhatsApp
              </button>
            </div>

            {/* Products */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <span className="text-[10px] uppercase font-mono text-emerald-600 tracking-widest font-extrabold block">Categorias Populares</span>
              
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded-xl border border-emerald-100 flex gap-2.5 items-center">
                  <span className="text-2xl">🧬</span>
                  <div className="flex-1">
                    <h6 className="font-bold text-[11px] text-emerald-950">Imunidade & Vitaminas</h6>
                    <p className="text-[9px] text-gray-500 leading-tight mt-0.5">Fórmulas personalizadas de Zinco, Vitamina C, D e complexos antioxidantes potentes.</p>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-emerald-100 flex gap-2.5 items-center">
                  <span className="text-2xl">🧴</span>
                  <div className="flex-1">
                    <h6 className="font-bold text-[11px] text-emerald-950">Dermocosméticos Premium</h6>
                    <p className="text-[9px] text-gray-500 leading-tight mt-0.5">Ácido hialurônico, séruns anti-idade e loções hidratantes formuladas sob medida.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Order Button */}
            <div className="p-3 bg-white border-t border-emerald-100 flex items-center justify-between">
              <span className="text-[9px] text-emerald-600 font-medium">🛵 Envio rápido em até 2 horas</span>
              <button 
                onClick={triggerWhatsappSim}
                className="py-1.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xxs rounded-md shadow flex items-center gap-1"
              >
                <span>Chamar No WhatsApp</span>
              </button>
            </div>
          </div>
        );

      case "padaria":
        return (
          <div className="flex flex-col h-full bg-amber-50/50 text-amber-950">
            {/* Header */}
            <header className="bg-white border-b border-amber-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-bold text-xs text-amber-600 flex items-center gap-1">
                🍞 {item.name.split(" - ")[0]}
              </span>
              <Menu className="w-4 h-4 text-amber-400" />
            </header>

            {/* Hero */}
            <div className={`p-5 text-white bg-gradient-to-br ${item.gradient} text-center space-y-2`}>
              <span className="text-[9px] bg-white/20 px-2.5 py-0.5 rounded-full font-mono uppercase tracking-widest font-bold">🌾 Fermentação Natural</span>
              <h4 className="text-base font-display font-bold leading-tight">
                {item.heroSnippet}
              </h4>
              <p className="text-[10px] text-amber-100">Pães livres de aditivos químicos. Fermentados por mais de 30 horas para máxima leveza.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-1.5 px-3 bg-white text-amber-700 font-extrabold text-xs rounded-xl shadow hover:bg-amber-50 transition-all flex items-center justify-center gap-1"
              >
                🥐 Ver Cesta de Encomendas
              </button>
            </div>

            {/* List */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <span className="text-[10px] font-mono text-amber-700 tracking-wider uppercase font-bold block">Próximas Fornadas 🔥</span>
              
              <div className="space-y-2">
                <div className="p-2.5 bg-white border border-amber-100 rounded-xl flex justify-between items-center">
                  <div>
                    <h6 className="font-bold text-[10px] text-amber-950 font-display">Pão Rústico Levain (Sourdough)</h6>
                    <span className="text-[8px] text-slate-500 block">Saindo quentinho às 16:30!</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 font-mono">R$ 18,90</span>
                </div>

                <div className="p-2.5 bg-white border border-amber-100 rounded-xl flex justify-between items-center">
                  <div>
                    <h6 className="font-bold text-[10px] text-amber-950 font-display">Croissant de Manteiga Francesa</h6>
                    <span className="text-[8px] text-slate-500 block">Disponível a partir das 08:00</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 font-mono">R$ 9,50</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-amber-100 text-center">
              <span className="text-[9px] text-amber-700 font-bold block">📍 Visite nosso espaço de café colonial.</span>
            </div>
          </div>
        );

      case "mercadinho":
        return (
          <div className="flex flex-col h-full bg-emerald-50/50 text-emerald-950">
            {/* Header */}
            <header className="bg-white border-b border-emerald-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
              <span className="font-display font-extrabold text-xs text-emerald-600 tracking-wider flex items-center gap-1">
                🍇 {item.name.split(" - ")[0]}
              </span>
              <Menu className="w-4 h-4 text-emerald-500" />
            </header>

            {/* Hero */}
            <div className={`p-5 text-white bg-gradient-to-br ${item.gradient} text-center space-y-2`}>
              <span className="text-[8px] bg-emerald-900/40 text-emerald-100 px-2.5 py-0.5 rounded-full font-mono font-bold tracking-widest uppercase">🥬 Feira Fresca do Dia</span>
              <h4 className="text-base font-display font-bold leading-tight">
                {item.heroSnippet}
              </h4>
              <p className="text-[10px] text-emerald-100">Feira e mercearia selecionadas a dedo. Qualidade que sua família merece.</p>
              <button 
                onClick={triggerWhatsappSim}
                className="mt-2 w-full py-1.5 px-3 bg-white text-emerald-800 font-extrabold text-xs rounded-xl shadow hover:bg-emerald-50 transition-all flex items-center justify-center gap-1"
              >
                🛒 Montar Meu Pedido de Feira
              </button>
            </div>

            {/* Content list */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <span className="text-[10px] font-mono text-emerald-700 tracking-wider uppercase font-bold block">Ofertas Imperdíveis 🎉</span>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 bg-white border border-emerald-100 text-center space-y-1 relative">
                  <span className="absolute top-1 right-1 text-[7px] font-bold bg-red-500 text-white p-0.5 px-1 rounded">-25%</span>
                  <span className="text-lg">🍅</span>
                  <h6 className="font-bold text-[9px] text-emerald-950 leading-none">Tomate Italiano (kg)</h6>
                  <span className="text-[10px] font-extrabold text-red-600 block">R$ 6,99</span>
                </div>

                <div className="p-2.5 bg-white border border-emerald-100 text-center space-y-1 relative">
                  <span className="absolute top-1 right-1 text-[7px] font-bold bg-red-500 text-white p-0.5 px-1 rounded">-15%</span>
                  <span className="text-lg">🍌</span>
                  <h6 className="font-bold text-[9px] text-emerald-950 leading-none">Banana Prata (Dúzia)</h6>
                  <span className="text-[10px] font-extrabold text-red-600 block">R$ 5,49</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-emerald-100 flex items-center justify-between">
              <span className="text-[9px] text-emerald-700 font-mono">Entrega rápida local</span>
              <button 
                onClick={triggerWhatsappSim}
                className="py-1 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[10px] rounded-lg"
              >
                Pedir Pelo WhatsApp
              </button>
            </div>
          </div>
        );

      default:
        return <div className="p-4 text-center">Nenhum modelo selecionado</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
      {/* Background glow in modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-glow-purple opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-4xl bg-zinc-950 border border-purple-500/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button top-right */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full transition-colors cursor-pointer"
          id="close-portfolio-modal"
          aria-label="Voltar para a página de vendas"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Info Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-b md:border-b-0 md:border-r border-purple-500/10">
          <div className="space-y-4">
            <span className="px-3 py-1 text-xxs font-mono rounded-full bg-purple-950/50 border border-purple-500/20 text-purple-400 font-bold uppercase inline-block">
              {item.category}
            </span>
            <h3 className="text-xl md:text-3xl font-display font-medium text-white tracking-tight">
              {item.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans mt-2">
              {item.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-[10px] tracking-widest font-mono text-purple-400 uppercase font-bold block">
                TECNOLOGIAS & REQUISITOS INCLUSOS:
              </span>
              <ul className="space-y-2">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-purple-950/20 border border-purple-500/10 rounded-xl space-y-1 mt-4">
              <span className="text-xxs font-mono text-purple-400 uppercase font-bold block">Benefício de Velocidade</span>
              <p className="text-xxs text-gray-400 leading-relaxed">
                Este modelo é programado sob medida em código estritamente limpo fornecendo pontuação máxima de performance (98+ no PageSpeed). Perfeito para tráfego pago via Google e Instagram!
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-purple-500/10 mt-6 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="p-1 px-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-xxs font-bold">OFERTA ATIVA</span>
              <span className="text-xs text-gray-400">Instalação e publicação em menos de 24h</span>
            </div>
            <a 
              href="https://wa.me/+5571992955846?text=Olar!%20Amei%20o%20modelo%20do%20site%20e%20gostaria%20de%20garantir%20este%20layout%20por%20R$97!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLead}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-center font-bold text-xs bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg"
            >
              QUERO ADAPTAR ESTE PARA O MEU NEGÓCIO
            </a>
            {item.demoUrl && (
              <a 
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-center font-bold text-xs bg-purple-950/60 border border-purple-500/20 text-purple-300 hover:bg-purple-900/40 hover:text-white hover:border-purple-500/40 transition-colors"
                id={`modal-demolink-${item.id}`}
              >
                <span>🌐 Acessar Versão ao Vivo e Completa</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Phone Simulator Panel */}
        <div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center p-6 md:p-8 overflow-hidden relative">
          {whatsappSent && (
            <div className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="p-3 bg-emerald-500/20 rounded-full text-emerald-400">
                <Check className="w-8 h-8 font-extrabold" />
              </div>
              <h4 className="text-base font-display font-bold text-white">Simulação de Contato Ativa!</h4>
              <p className="text-xs text-gray-400">No site real do seu cliente, ao clicar neste botão ele será direcionado imediatamente ao seu WhatsApp de vendas com uma mensagem pré-preenchida de alta conversão!</p>
              <button 
                onClick={() => setWhatsappSent(false)}
                className="py-1 py-1.5 px-4 bg-zinc-800 border border-zinc-700 text-white text-xxs font-bold rounded-lg hover:bg-zinc-700"
              >
                Voltar à Navegação
              </button>
            </div>
          )}

          <div className="relative w-full max-w-[270px] h-[480px] bg-black border-[4px] border-zinc-800 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
            {/* Speaker hole at the top */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 inline-block -mr-1" />
            </div>

            {/* Simulated Smartphone Info Bar */}
            <div className="px-5 pt-3.5 pb-1 bg-black text-[9px] text-zinc-400 font-mono flex justify-between z-20">
              <span>12:00</span>
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span>🔋 99%</span>
              </div>
            </div>

            {/* Inner App Screens */}
            <div className="flex-1 overflow-hidden relative">
              {renderSimulatedApp()}
            </div>

            {/* Mini instruction banner below phone */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[7px] text-zinc-400/80 font-mono bg-black/70 px-2 py-0.5 rounded-full uppercase tracking-wider text-center pointer-events-none">
              Navegue Clicando
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
