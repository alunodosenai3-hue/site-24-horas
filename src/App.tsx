import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  Gift, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  Star, 
  MessageSquare, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Sparkles, 
  Check, 
  Award,
  ArrowRight,
  Smartphone,
  MousePointerClick,
  ExternalLink
} from "lucide-react";

import { PORTFOLIO_ITEMS, REVIEWS, BENEFITS, BONUSES } from "./data";
import Timer from "./components/Timer";
import FAQAccordion from "./components/FAQAccordion";

export default function App() {
  // On page load, track general view event (PASSO 7)
  useEffect(() => {
    if (typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("ViewContent", { page: "landing_sales" });
    }
  }, []);

  // Smooth scroll helper to offer section
  const scrollToOffer = () => {
    document.getElementById("secao-oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  // WhatsApp click handler for the bottom CTA
  const handleOfferWhatsApp = () => {
    // Dispatch purchase track event (PASSO 5)
    if (typeof (window as any).sendMetaEvent === "function") {
      (window as any).sendMetaEvent("Purchase", {
        value: 97.00,
        currency: "BRL"
      });
    }

    const text = encodeURIComponent(
      "Olá Lucas! Vi a página de vendas e quero garantir a Oferta Especial do site profissional em até 24 horas por apenas R$ 97,00, com suporte grátis e os 3 PDFs bônus inclusos!"
    );
    window.open(`https://wa.me/5571992955846?text=${text}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#05020c] font-sans antialiased text-gray-200 overflow-x-hidden bg-grid-pattern">
      
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-10 left-10 w-[280px] md:w-[500px] h-[280px] md:h-[500px] rounded-full blur-glow-purple opacity-40 pointer-events-none" />
      <div className="absolute top-[40%] right-5 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full blur-glow-cyan opacity-20 pointer-events-none" />
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-glow-purple opacity-30 pointer-events-none" />

      {/* Floating Sparkle Elements */}
      <div className="hidden lg:block absolute top-[15%] left-[12%] animate-float pointer-events-none">
        <Sparkles className="w-10 h-10 text-purple-400 opacity-20" />
      </div>
      <div className="hidden lg:block absolute top-[45%] right-[15%] animate-float pointer-events-none [animation-delay:2s]">
        <Zap className="w-8 h-8 text-pink-500 opacity-20" />
      </div>

      {/* ────────────────────────────────────────────────────────
          MINI TOP FLOATING BRAND HEADER
          ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#05020c]/70 backdrop-blur-md border-b border-purple-500/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 px-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-display font-extrabold text-xs tracking-wider">
              24H
            </span>
            <span className="font-display font-bold text-sm text-white tracking-tight">
              Agência Web <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Premium</span>
            </span>
          </div>

          <button
            onClick={scrollToOffer}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-950/50 border border-purple-500/20 text-purple-300 rounded-full font-bold text-xxs tracking-wider hover:bg-purple-900/20 hover:border-purple-500/40 transition-colors"
          >
            GARANTIR OFERTA <span className="inline-block animate-pulse text-pink-400">🔥</span>
          </button>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────
          1ª SEÇÃO — HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Hero Copy - Left 7 columns */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative z-10">
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/20 text-purple-300 text-xxs tracking-widest uppercase font-mono font-extrabold mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              SITES DE ALTA CONVERSÃO EM 1 DIA
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-white tracking-tight">
              Receba Seu Site Profissional em{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-500 bg-clip-text text-transparent underline decoration-purple-500/30">
                Até 24 Horas
              </span>{" "}
              e Comece a Atrair Clientes Todos os Dias
            </h1>

            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Criamos páginas profissionais, modernas e extremamente rápidas para empresas, autônomos e empreendedores que desejam vender mais na internet. Prontas no celular com design cinematográfico.
            </p>

            {/* CTA Container with indicators */}
            <div className="pt-3 flex flex-col items-center lg:items-start gap-4">
              <button
                onClick={scrollToOffer}
                className="shimmer-btn px-8 py-4.5 rounded-2xl font-display font-extrabold text-sm md:text-base text-white tracking-wider cursor-pointer transform hover:scale-[1.03] transition-transform flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.4)]"
              >
                QUERO MEU SITE PROFISSIONAL
                <ArrowRight className="w-5 h-5 antialiased" />
              </button>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-xxs font-mono text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <Check className="w-3.5 h-3.5" /> 100% Garantido
                </span>
                <span className="flex items-center gap-1">
                  🛡️ Pagamento só na Entrega
                </span>
                <span className="flex items-center gap-1">
                  ⭐ Suporte Técnico Grátis
                </span>
              </div>
            </div>
          </div>

          {/* Majestic Hero Demo Graphic - Right 5 columns */}
          <div className="lg:col-span-5 flex justify-center relative z-10 w-full">
            {/* Ambient Back Glow and decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Simulated Desktop Preview Card & Floating elements */}
            <div className="relative w-full max-w-[340px] md:max-w-[400px]">
              
              {/* Core site wireframe container with layout preview */}
              <div className="glass-panel rounded-2xl p-3 border border-purple-500/20 shadow-2xl overflow-hidden relative group">
                {/* Simulated window bar */}
                <div className="flex justify-between items-center pb-2 border-b border-purple-500/10 mb-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 block" />
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-purple-950/40 text-[8px] font-mono text-purple-300">
                    meunegocio.com.br
                  </span>
                  <div className="w-3 h-3" />
                </div>

                {/* Simulated Layout Body inside the preview card */}
                <div className="space-y-2 font-mono">
                  {/* Fake Header */}
                  <div className="h-4 bg-purple-950/50 rounded flex justify-between items-center px-2">
                    <span className="text-[7px] text-purple-300 font-bold">VIP CO.</span>
                    <span className="w-4 h-1 px-1 bg-purple-500/30 rounded" />
                  </div>
                  {/* Fake Banner */}
                  <div className="h-16 bg-gradient-to-r from-purple-900/60 to-pink-900/40 rounded-lg flex flex-col justify-center px-3 space-y-1">
                    <div className="w-2/3 h-2 bg-purple-400 rounded" />
                    <div className="w-4/5 h-1.5 bg-gray-500 rounded" />
                    <div className="w-12 h-3 bg-emerald-500 rounded-sm mt-1" />
                  </div>
                  {/* Fake Grid cards */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-1.5 bg-purple-950/30 rounded border border-purple-500/5 space-y-1">
                      <div className="w-4 h-4 bg-purple-600/20 rounded flex items-center justify-center text-[8px]">🎯</div>
                      <div className="w-4/5 h-1.5 bg-gray-400 rounded" />
                    </div>
                    <div className="p-1.5 bg-purple-950/30 rounded border border-purple-500/5 space-y-1">
                      <div className="w-4 h-4 bg-purple-600/20 rounded flex items-center justify-center text-[8px]">📈</div>
                      <div className="w-4/5 h-1.5 bg-gray-400 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element 1: Delivery badge */}
              <div className="absolute -top-3 -left-4 glass-panel p-2.5 px-3.5 rounded-xl border border-purple-500/30 shadow-lg text-left flex items-center gap-2 animate-float animate-delay-1000">
                <span className="text-base">🚀</span>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 font-bold block uppercase leading-none">ATIVADO EM</span>
                  <span className="text-xxs text-white font-extrabold leading-none">24 Horas</span>
                </div>
              </div>

              {/* Floating element 2: Reviews indicator */}
              <div className="absolute -bottom-4 -right-4 glass-panel p-2.5 px-3.5 rounded-xl border border-pink-500/20 shadow-lg text-left flex items-center gap-2 animate-float [animation-delay:3s]">
                <div className="flex flex-col">
                  <div className="flex gap-0.5 text-yellow-400">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <Star className="w-2.5 h-2.5 fill-current" />
                  </div>
                  <span className="text-[10px] text-white font-extrabold leading-tight">100% de Satisfação</span>
                  <span className="text-[8px] text-gray-400 leading-tight">Avaliado por clientes reais</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2ª SEÇÃO — O QUE VOCÊ VAI RECEBER
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-purple-950/10 border-y border-purple-500/5 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] tracking-widest font-mono text-pink-500 font-extrabold uppercase block">
              PACOTE COMPLETO
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
              Veja Tudo o Que Você Vai Receber
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto">
              Desenvolvemos toda a infraestrutura para você decolar de vez na internet sem precisar quebrar a cabeça.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { text: "Site profissional moderno com design sob medida", icon: "✨" },
              { text: "Botão integrado do WhatsApp de conversão rápida", icon: "💬" },
              { text: "Botão integrado de alta expansão para o Instagram", icon: "📸" },
              { text: "Botão integrado para acelerar seu Google Meu Negócio", icon: "📍" },
              { text: "Site super leve e rápido desenvolvido com tecnologia otimizada", icon: "⚡" },
              { text: "Hospedagem de alta estabilidade e velocidade inclusa", icon: "🌐" },
              { text: "Subdomínio integrado de uso imediato e gratuito", icon: "🔗" },
              { text: "Entrega expressa completa em até 24 Horas", icon: "⏰" }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-start gap-3.5 border border-purple-500/10 text-left"
              >
                <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-xs md:text-sm text-gray-300 font-medium pt-1.5">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3ª SEÇÃO — BENEFÍCIOS (Por que escolher)
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] tracking-widest font-mono text-purple-400 font-extrabold uppercase block">
            DIFERENCIAIS REAIS
          </span>
          <h2 className="font-display font-medium text-2xl md:text-4xl text-white tracking-tight">
            Por Que Escolher Nosso Serviço?
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto">
            Garantimos o processo mais seguro, transparente e recompensador do mercado.
          </p>
        </div>

        {/* Timeline style grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Subtle connecting decoration line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent -translate-x-1/2" />

          {BENEFITS.map((ben, idx) => (
            <div 
              key={ben.id} 
              id={`benefit-${ben.id}`}
              className="glass-panel p-5 md:p-6 rounded-2xl flex gap-4 border border-purple-900/30 text-left relative group hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Index custom bullet badge */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#160c2d] border border-purple-500/30 flex items-center justify-center font-mono text-xs text-purple-400 font-extrabold shadow-md">
                {idx + 1}
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-sm md:text-base text-gray-100 group-hover:text-purple-300 transition-colors">
                  {ben.title}
                </h3>
                <p className="text-xxs md:text-xs text-gray-400 leading-relaxed">
                  {ben.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4ª SEÇÃO — BÔNUS
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#090514]/80 border-t border-purple-500/5 px-4 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] tracking-widest font-mono text-pink-500 font-extrabold uppercase px-3 py-1 bg-pink-950/30 border border-pink-500/20 rounded-full inline-block">
              VALOR EXTRA GRATUITO
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
              Você Ainda Recebe 3 Bônus Exclusivos
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-sm mx-auto">
              Guias táticos fundamentais para ajudar você a turbinar as vendas da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BONUSES.map((bn) => (
              <div 
                key={bn.id}
                id={`bonus-card-${bn.id}`}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-pink-500/10 shadow-[0_4px_20px_-10px_rgba(236,72,153,0.1)] relative group text-left"
              >
                {/* Visual Glow Spotlight inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-xl">
                      <Gift className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-pink-400 font-bold tracking-widest uppercase">
                      BÔNUS EXCLUSIVO
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-sm md:text-base text-gray-100 group-hover:text-pink-300 transition-colors">
                      {bn.title}
                    </h3>
                    <p className="text-xxs md:text-xs text-gray-400 leading-relaxed">
                      {bn.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-purple-500/5 flex items-center justify-between text-xxs font-mono relative z-10">
                  <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> GRÁTIS INCLUSO
                  </span>
                  <span className="text-gray-500 line-through">De R$ 49,90</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6ª SEÇÃO — PORTFÓLIO (Grid com 6 Modelos de Sites)
          (Localizada convenientemente acima do preço principal para provar valor!)
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] tracking-widest font-mono text-purple-400 font-extrabold uppercase block">
            DEMONSTRAÇÃO INTERATIVA
          </span>
          <h2 className="font-display font-medium text-2xl md:text-4xl text-white tracking-tight">
            Exemplos de Sites Que Você Pode Receber
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto">
            Clique em "Ver Modelo" para abrir a demonstração completa e ao vivo destes projetos criados com foco total em conversão e velocidade.
          </p>
        </div>

        {/* 6 Models Portfolio Grid (3 cols on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id}
              id={`portfolio-item-${item.id}`}
              className="glass-panel rounded-2xl overflow-hidden border border-purple-500/10 flex flex-col justify-between group hover:border-purple-500/35 transition-all duration-300 shadow-md text-left"
            >
              {/* Cover block linking straight to live site demo */}
              <a 
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof (window as any).sendMetaEvent === "function") {
                    (window as any).sendMetaEvent("InitiateCheckout", { 
                      source: "catalog_cover_click", 
                      content_name: item.name 
                    });
                  }
                }}
                className={`h-36 bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer group/cover`}
              >
                {/* Floating abstract decorative grid elements */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Hover overlay for direct external link */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/cover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                  <span className="text-xxs font-bold text-purple-300 flex items-center gap-1 bg-[#05020c]/85 px-3 py-1.5 border border-purple-500/20 rounded-full shadow-lg">
                    <ExternalLink className="w-3.5 h-3.5" /> Ver Site Demo 🌐
                  </span>
                </div>

                <span className="px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-xxs font-mono text-white/90 font-bold self-start border border-white/10">
                  {item.category}
                </span>

                <div className="relative z-10">
                  <h4 className="text-sm font-display font-bold text-white tracking-tight leading-tight group-hover/cover:translate-x-1 transition-transform">
                    {item.name.split(" - ")[0]}
                  </h4>
                  <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5 font-mono">
                    {item.name.split(" - ")[1] || "Website Profissional"}
                  </p>
                </div>
              </a>

              {/* Description Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xxs md:text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof (window as any).sendMetaEvent === "function") {
                      (window as any).sendMetaEvent("InitiateCheckout", { 
                        source: "catalog_view_model", 
                        content_name: item.name 
                      });
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-purple-950/40 hover:bg-purple-600 border border-purple-500/25 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                  <span>Ver Modelo</span>
                  <MousePointerClick className="w-3 h-3 text-purple-400 animate-pulse" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5ª SEÇÃO — OFERTA PRINCIPAL
          ──────────────────────────────────────────────────────── */}
      <section id="secao-oferta" className="py-20 bg-gradient-to-b from-[#05020c] via-[#0e0724] to-[#05020c] border-y border-purple-500/10 px-4 relative overflow-hidden">
        
        {/* Glow behind the offer card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full blur-glow-purple opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          
          <div className="space-y-4">
            <span className="px-4 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-extrabold text-xxs font-mono tracking-widest uppercase rounded-full inline-block">
              🔥 VALOR IMPEDÍVEL
            </span>

            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Oferta Especial Por Tempo Limitado
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              Garanta seu site profissional em até 24 horas, incluindo 3 bônus exclusivos e pagamento somente após o projeto entregue e aprovado!
            </p>
          </div>

          {/* Core Urgency countdown box */}
          <div className="flex justify-center">
            <Timer />
          </div>

          {/* Pricing Highlight Card */}
          <div className="max-w-lg mx-auto bg-gradient-to-b from-purple-950/40 to-slate-950/90 border-2 border-purple-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.2)] text-left relative overflow-hidden">
            
            {/* Corner badge "Pagamento Único" */}
            <div className="absolute top-0 right-0 p-1.5 px-4 bg-purple-600 text-[10px] text-white font-extrabold tracking-wider rounded-bl-xl uppercase">
              PAGAMENTO ÚNICO
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider block">O SEU SUCESSO COBRADO DE FORMA HONESTA:</span>
                <h3 className="font-display font-bold text-lg text-white">Pacote do Site Completo + 3 Bônus</h3>
              </div>

              {/* Items checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xxs md:text-xs">
                {[
                  "Site profissional moderno",
                  "WhatsApp integrado",
                  "Instagram integrado",
                  "Google Negócio integrado",
                  "Site ultra veloz em HTML/JS",
                  "Hospedagem inclusa",
                  "Subdomínio incluso",
                  "Entrega super rápida",
                  "Consultoria estratégica",
                  "3 PDFs bônus",
                  "Pagamento somente na entrega"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price visual emphasis */}
              <div className="pt-6 border-t border-purple-500/10 flex flex-col items-center sm:items-start space-y-1">
                <span className="text-xxs font-mono text-gray-400 line-through">Preço normal: R$ 349,00</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 uppercase font-mono">Por apenas</span>
                  <span className="text-3xl md:text-5xl font-mono font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                    R$ 97,00
                  </span>
                </div>
                <span className="text-[10px] md:text-xxs text-emerald-400 font-mono font-bold uppercase tracking-wider block">
                  ✨ Pagamento único • Sem mensalidade obrigatória
                </span>
              </div>

              {/* Large CTA Button */}
              <button
                onClick={handleOfferWhatsApp}
                className="w-full py-4.5 rounded-2xl font-display font-extrabold text-sm md:text-base text-stone-950 bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-200 hover:to-amber-300 transition-all cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.4)] text-center block"
              >
                QUERO GARANTIR MINHA OFERTA
              </button>

              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-mono">
                🔓 PAGAMENTO 100% SEGURO SOMENTE NA ENTREGA NO FINAL/PROJETO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7ª SEÇÃO — DEPOIMENTOS (Avaliações Google Reviews)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/30 border border-blue-500/20 rounded-full">
            {/* Google Reviews Style Header */}
            <span className="text-[11px] font-sans font-extrabold text-white">Google Reviews</span>
            <div className="flex gap-0.5 text-yellow-500">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
          </div>

          <h2 className="font-display font-medium text-2xl md:text-4xl text-white tracking-tight">
            Clientes Satisfeitos
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto">
            Veja a opinião espontânea deixada no Google por empresários e profissionais que mudaram de patamar com nossos sites.
          </p>
        </div>

        {/* 6 Google Reviews styled cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="glass-panel p-5.5 rounded-2xl border border-purple-500/5 bg-[#090514]/60 flex flex-col justify-between hover:border-blue-500/10 hover:shadow-[0_4px_30px_rgba(59,130,246,0.05)] transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Generates a nice styled gradient background avatar */}
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-xs text-white`}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs md:text-sm text-gray-100 leading-snug">{rev.name}</h4>
                      <p className="text-[10px] text-gray-400 leading-none">{rev.role}</p>
                    </div>
                  </div>

                  <span className="text-[9px] text-[#4285F4] bg-[#4285F4]/10 p-1 px-1.5 font-bold font-sans rounded">
                    Google
                  </span>
                </div>

                {/* Rating score stars */}
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5 text-yellow-500">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono pl-1">{rev.date}</span>
                </div>

                <p className="text-xxs md:text-xs text-gray-300 leading-relaxed font-sans italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Google Verified Seal subtle layout */}
              <div className="pt-4 mt-4 border-t border-purple-500/5 flex items-center gap-1.5 text-[10px] text-gray-500 uppercase font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Avaliação Verificada
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8ª SEÇÃO — GARANTIA (7 Dias Suporte e Manutenção)
          ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-6 md:p-8 border border-yellow-500/20 bg-[#160e28]/50 shadow-[0_0_20px_rgba(234,179,8,0.05)] text-center max-w-2xl mx-auto space-y-5 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="p-3.5 bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 rounded-full inline-block animate-float">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <h2 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
              7 Dias de Manutenção Grátis
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
              Após a entrega do seu site pronto, você ainda recebe 7 dias de suporte e manutenção totalmente grátis para realizar pequenos ajustes iniciais, alterações de foto ou telefone sem qualquer custo adicional.
            </p>

            <span className="text-[10px] uppercase font-mono text-yellow-400 tracking-wider font-extrabold block">
              🛡️ COMPROMISSO E SUPORTE DE VERDADE
            </span>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          9ª SEÇÃO — FAQ (Perguntas Frequentes)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] tracking-widest font-mono text-purple-400 font-extrabold uppercase block">
            DÚVIDAS SANADAS
          </span>
          <h2 className="font-display font-medium text-2xl md:text-4xl text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-sm mx-auto">
            Reunimos os principais questionamentos de nossos novos parceiros para dar clareza total ao seu pedido.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* ────────────────────────────────────────────────────────
          10ª SEÇÃO — RODAPÉ & SOCIAL CHANNELS
          ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#020006] py-16 px-4 border-t border-purple-500/10 text-center relative overflow-hidden text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand details col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1 px-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-white font-mono font-extrabold text-[11px]">
                24H
              </span>
              <span className="font-display font-bold text-base text-white tracking-tight">
                Agência Web Premium
              </span>
            </div>
            
            <p className="text-xxs md:text-xs text-gray-500 leading-relaxed max-w-xs">
              Criamos soluções tecnológicas rápidas e de alta performance que colocam pequenas marcas, profissionais autônomos e empresas locais nas melhores posições de vendas da internet.
            </p>

            <p className="text-xxs text-gray-600">
              © 2026 Agência Web — Programação Web & Serviços de Marketing Digital. Todos os direitos reservados.
            </p>
          </div>

          {/* Social connections col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Canais Oficiais:
            </h4>
            
            <div className="flex flex-wrap gap-2.5">
              <a 
                href="https://www.instagram.com/lucasmoraisgpt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 px-3 bg-purple-950/20 border border-purple-500/10 text-gray-300 hover:text-white hover:border-purple-500/40 rounded-xl text-xxs font-mono flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a 
                href="https://wa.me/+5571992955846" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => {
                  if (typeof (window as any).sendMetaEvent === "function") {
                    (window as any).sendMetaEvent("Lead", { source: "footer_whatsapp_link" });
                  }
                }}
                className="p-2 px-3 bg-purple-950/20 border border-purple-500/10 text-gray-300 hover:text-white hover:border-purple-500/40 rounded-xl text-xxs font-mono flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a 
                href="https://share.google/TISFi4lsgRVrR1Myu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 px-3 bg-purple-950/20 border border-purple-500/10 text-gray-300 hover:text-white hover:border-purple-500/40 rounded-xl text-xxs font-mono flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Google Meu Negócio</span>
              </a>

              <a 
                href="https://www.facebook.com/lucasmoraisgpt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 px-3 bg-purple-950/20 border border-purple-500/10 text-gray-300 hover:text-white hover:border-purple-500/40 rounded-xl text-xxs font-mono flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-500" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick contact direct coordinates col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              Contato Rápido:
            </h4>

            <ul className="space-y-2.5 text-xxs font-mono text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <a href="tel:+5571992955846" className="hover:text-white transition-colors">71 99295-5846</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <a href="mailto:alunodosenai3@gmail.com" className="hover:text-white transition-colors">alunodosenai3@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}
