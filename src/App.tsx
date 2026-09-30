import React from 'react';
import {
  Sparkles,
  Check,
  QrCode,
  Edit3,
  Layers,
  Printer,
  Image as ImageIcon,
  Rocket,
  ShieldCheck,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import { TechBackground } from './components/TechBackground.tsx';
import { ArtCarousel } from './components/ArtCarousel.tsx';
import { CtaButton, CHECKOUT_URL } from './components/CtaButton.tsx';

export default function App() {
  const benefits = [
    {
      title: 'Artes profissionais para plaquinhas NFC',
      description: 'Design moderno criado especificamente para exibição em balcões e mesas.',
      icon: Layers,
    },
    {
      title: 'Totalmente editáveis no Canva',
      description: 'Abra diretamente na sua conta gratuita do Canva e customize tudo com poucos cliques.',
      icon: Edit3,
    },
    {
      title: 'Personalize textos e informações',
      description: 'Altere nomes, redes sociais, telefones, chamadas e instruções de aproximação.',
      icon: Smartphone,
    },
    {
      title: 'Adicione sua própria logo',
      description: 'Insira facilmente a identidade visual da sua marca ou dos seus clientes.',
      icon: ImageIcon,
    },
    {
      title: 'Insira seu QR Code',
      description: 'Combine aproximação NFC com leitura de QR Code para máxima compatibilidade.',
      icon: QrCode,
    },
    {
      title: 'Prepare a arte para impressão',
      description: 'Arquivos já alinhados e configurados para imprimir em acrílico, MDF ou PVC.',
      icon: Printer,
    },
    {
      title: 'Ideal para quem trabalha ou quer começar a trabalhar com plaquinhas NFC',
      description: 'Economize horas de design e acelere suas entregas e vendas.',
      icon: Rocket,
    },
  ];

  const steps = [
    {
      step: '1',
      action: 'ACESSE',
      desc: 'Receba acesso ao material.',
    },
    {
      step: '2',
      action: 'EDITE',
      desc: 'Personalize as artes no Canva.',
    },
    {
      step: '3',
      action: 'USE',
      desc: 'Adicione logo, QR Code e informações necessárias para seu projeto.',
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      <TechBackground />

      {/* Top minimal brand indicator */}
      <header className="w-full pt-6 pb-2 px-4 flex justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1220]/80 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,180,255,0.1)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
          <span className="text-xs font-semibold tracking-wider text-cyan-200 uppercase">
            PACK NFC • EDITÁVEL NO CANVA
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO / PRIMEIRA DOBRA                                                  */}
        {/* ========================================================================= */}
        <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
            ARTES <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_0_25px_rgba(0,229,255,0.45)]">NFC</span> PRONTAS PARA VOCÊ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-300 drop-shadow-[0_0_25px_rgba(0,180,255,0.45)]">
              EDITAR E VENDER
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Modelos prontos para personalizar no Canva. Troque textos, logo, QR Code e informações do cliente e deixe sua arte pronta para impressão.
          </p>

          {/* Badge: 100% EDITÁVEL NO CANVA */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#091122]/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/40 mb-8 sm:mb-10">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-bold text-xs shadow-sm">
              C
            </div>
            <span className="text-sm font-bold tracking-wide text-white">
              100% EDITÁVEL NO CANVA
            </span>
          </div>

          {/* Price & Primary CTA */}
          <div className="w-full max-w-md mx-auto p-6 sm:p-7 rounded-3xl bg-[#0A101D]/80 border border-blue-500/20 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,100,255,0.12)]">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 mb-1">
              ACESSO POR APENAS
            </p>
            <div className="flex items-baseline justify-center gap-1.5 mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-300">R$</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,200,255,0.35)]">
                10,00
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mb-5">
              Pagamento único
            </p>

            <CtaButton
              text="QUERO AS ARTES POR R$ 10"
              size="large"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MOSTRUÁRIO DAS ARTES (CARROSSEL AUTOMÁTICO)                           */}
        {/* ========================================================================= */}
        <section className="py-10 sm:py-14 w-full">
          <div className="max-w-4xl mx-auto px-4 text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              VEJA ALGUMAS DAS ARTES
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Modelos prontos para você personalizar.
            </p>
          </div>

          {/* Premium Infinite Touch Carousel */}
          <ArtCarousel />
        </section>

        {/* ========================================================================= */}
        {/* 3. SEÇÃO DE BENEFÍCIOS                                                   */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              PRONTO PARA PERSONALIZAR
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {benefits.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex items-start gap-3.5 p-4 sm:p-4.5 rounded-2xl bg-[#090F1A]/85 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-200 shadow-md"
                >
                  {/* Subtle 3D Icon container */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-b from-[#13233E] to-[#0A1424] border-t border-cyan-400/30 border-b border-black flex items-center justify-center shadow-inner">
                    <Check className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. COMO FUNCIONA                                                         */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              COMO FUNCIONA
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Passo a passo simples e direto para colocar em prática
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-[#0A1222]/85 border border-blue-500/20 backdrop-blur-md shadow-lg"
              >
                {/* Step badge in 3D */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#0066FF] to-[#003899] border-t border-cyan-300/40 shadow-[0_4px_12px_rgba(0,102,255,0.4)] flex items-center justify-center text-white font-extrabold text-lg mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide mb-1.5 text-cyan-200">
                  {step.action}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SEGUNDO CTA                                                           */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0C1527] to-[#070D18] border border-cyan-500/25 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,100,255,0.15)]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-snug">
              TENHA SUAS ARTES NFC PRONTAS PARA PERSONALIZAR
            </h2>

            <div className="flex items-baseline justify-center gap-1.5 mb-1">
              <span className="text-2xl font-bold text-slate-300">R$</span>
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]">
                10,00
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6">
              Pagamento único
            </p>

            <CtaButton
              text="QUERO COMPRAR AGORA"
              size="default"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CTA FINAL (MAIS IMPACTANTE)                                           */}
        {/* ========================================================================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          {/* Enhanced ambient blue glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[400px] bg-gradient-to-r from-blue-600/30 to-cyan-500/25 blur-[120px] rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="relative p-7 sm:p-10 rounded-3xl bg-[#08101E]/90 border border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,180,255,0.15)]">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-cyan-400/20">
              Acesso Imediato
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              COMECE AGORA
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto font-normal leading-relaxed mb-6">
              Tenha artes prontas para personalizar no Canva e criar suas próprias plaquinhas NFC.
            </p>

            <div className="flex items-baseline justify-center gap-1.5 mb-1">
              <span className="text-2xl font-bold text-slate-300">R$</span>
              <span className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]">
                10,00
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6">
              Pagamento único
            </p>

            <CtaButton
              text="COMPRAR ARTES POR R$ 10"
              subtext="Pagamento único • Acesso ao material"
              size="large"
            />
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 7. RODAPÉ                                                                 */}
      {/* ========================================================================= */}
      <footer className="w-full py-8 border-t border-slate-800/80 bg-[#040609]/90 text-center px-4">
        <p className="text-sm font-semibold text-slate-300 mb-1">
          Artes NFC Editáveis no Canva
        </p>
        <p className="text-xs text-slate-400">
          © 2026. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
