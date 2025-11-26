import React from 'react';
import { Card } from './Card';
import { Wind, Zap, Anchor, Compass, Ship, Waves } from 'lucide-react';
import { Lang } from '../types';

export const ChaosOrder: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '在混沌中寻找秩序' : 'Finding Order in Chaos',
    subtitle: lang === 'zh' ? '市场哲学' : 'Market Philosophy',
    energyLaw: {
      title: lang === 'zh' ? '能量守恒定律' : 'Law of Conservation of Energy',
      content: lang === 'zh' 
        ? '“五线开花”不仅是技术分析的瑰宝，它是市场能量守恒定律的完美图示。它告诉我们，暴利不仅仅来源于对基本面的洞察，更来源于对市场成本结构的深刻理解和对人性耐心的极致考验。'
        : '"Five-Line Blossom" is not just a gem of technical analysis, but a perfect illustration of the law of conservation of market energy. It tells us that huge profits come not only from insight into fundamentals, but also from a deep understanding of market cost structures and the ultimate test of human patience.',
      tags: lang === 'zh' ? ['成本趋同', '人性考验'] : ['Cost Convergence', 'Patience Test']
    },
    orderChaos: {
      title: lang === 'zh' ? '秩序与狂欢' : 'Order & Revelry',
      content_1: lang === 'zh' ? '均线的' : 'Moving Average ',
      content_adhesion: lang === 'zh' ? '粘合' : 'Adhesion',
      content_2: lang === 'zh' ? '，是秩序的重建，是能量的压缩，是暴风雨前的宁静。' : ' is the reconstruction of order, the compression of energy, and the calm before the storm.',
      content_3: lang === 'zh' ? '均线的' : 'Moving Average ',
      content_blossom: lang === 'zh' ? '开花' : 'Blossom',
      content_4: lang === 'zh' ? '，是秩序的释放，是能量的爆发，是趋势的狂欢。' : ' is the release of order, the explosion of energy, and the carnival of trends.'
    },
    philosophy: lang === 'zh'
      ? '对于专业的投资者而言，掌握“五线开花”并不意味着预测每一次涨跌，而是意味着拥有一套识别高胜率、高盈亏比机会的系统。在这一系统中，我们尊重趋势，敬畏市场，通过严格的仓位管理和止损纪律，在概率的海洋中捕捉确定性的浪花。'
      : 'For professional investors, mastering "Five-Line Blossom" does not mean predicting every rise and fall, but possessing a system to identify high-win-rate, high-risk-reward opportunities. In this system, we respect the trend and the market, capturing waves of certainty in the ocean of probability through strict position management and stop-loss discipline.',
    final: lang === 'zh'
      ? '终极启示：由于成本的趋同，市场终将选择阻力最小的方向。'
      : 'Final Revelation: Due to cost convergence, the market will eventually choose the path of least resistance.'
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group min-h-[500px]">
      <style>{`
        @keyframes ship-rock {
            0% { transform: rotate(0deg) translateY(0); }
            25% { transform: rotate(2deg) translateY(-2px); }
            50% { transform: rotate(0deg) translateY(0); }
            75% { transform: rotate(-2deg) translateY(2px); }
            100% { transform: rotate(0deg) translateY(0); }
        }
        @keyframes star-twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes float-grid {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
        .ship-anim { animation: ship-rock 5s ease-in-out infinite; }
        .star-anim { animation: star-twinkle 3s ease-in-out infinite; }
        .rotate-astro { animation: rotate-slow 120s linear infinite; }
        .grid-flow { animation: float-grid 5s linear infinite; }
      `}</style>
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
          
          {/* DARK MODE: Star Chart / Astrolabe */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
                {/* Rotating Astrolabe Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none rotate-astro">
                     <svg viewBox="0 0 500 500" className="w-full h-full">
                         <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-400" strokeDasharray="4 4" />
                         <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-300" />
                         <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500" strokeDasharray="10 5" />
                         <path d="M250,10 L250,490 M10,250 L490,250" stroke="currentColor" strokeWidth="1" className="text-indigo-400" />
                         {/* Zodiac Symbols or Stars */}
                         {[...Array(12)].map((_, i) => (
                             <circle key={i} cx={250 + 220 * Math.cos(i * Math.PI / 6)} cy={250 + 220 * Math.sin(i * Math.PI / 6)} r="3" fill="currentColor" className="text-white" />
                         ))}
                     </svg>
                </div>

                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                   <div 
                    key={i} 
                    className="absolute bg-white rounded-full star-anim"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random() * 0.7
                    }}
                   />
                ))}
          </div>

          {/* LIGHT MODE: Sacred Geometry / Golden Ratio */}
          <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
                {/* Golden Ratio Spirals */}
                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10 pointer-events-none">
                     <svg viewBox="0 0 500 500" className="w-full h-full text-indigo-900">
                         <path d="M0,500 Q250,500 250,250 T500,0" fill="none" stroke="currentColor" strokeWidth="2" />
                         <circle cx="250" cy="250" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
                         <circle cx="250" cy="250" r="161.8" fill="none" stroke="currentColor" strokeWidth="1" />
                         <circle cx="250" cy="250" r="261.8" fill="none" stroke="currentColor" strokeWidth="1" />
                     </svg>
                </div>
                {/* Floating Grid Floor */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 perspective-grid overflow-hidden opacity-20 pointer-events-none">
                     <div className="w-full h-[200%] bg-[linear-gradient(0deg,transparent_24%,rgba(59,130,246,.3)_25%,rgba(59,130,246,.3)_26%,transparent_27%,transparent_74%,rgba(59,130,246,.3)_75%,rgba(59,130,246,.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(59,130,246,.3)_25%,rgba(59,130,246,.3)_26%,transparent_27%,transparent_74%,rgba(59,130,246,.3)_75%,rgba(59,130,246,.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px] grid-flow"></div>
                </div>
          </div>

      </div>

      <div className="relative z-10 p-8 text-slate-800 dark:text-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-slate-200 dark:border-white/20 pb-6">
            <div className="flex items-center gap-4">
                 <div className="p-3 bg-white/50 dark:bg-white/10 backdrop-blur rounded-full text-indigo-600 dark:text-white border border-slate-200 dark:border-white/20 shadow-lg">
                    <Compass size={32} className="animate-spin-slow" style={{animationDuration: '10s'}} />
                 </div>
                 <div>
                    <h2 className="text-3xl font-black drop-shadow-sm tracking-tight">{t.title}</h2>
                    <p className="text-sm text-indigo-600 dark:text-blue-200 font-mono uppercase tracking-[0.2em] font-bold">{t.subtitle}</p>
                 </div>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
                {t.energyLaw.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100/80 dark:bg-blue-500/20 backdrop-blur-md text-indigo-700 dark:text-blue-100 text-xs font-bold rounded-full border border-indigo-200 dark:border-blue-400/30">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             {/* Energy Law */}
             <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors shadow-sm">
                <h3 className="font-bold text-xl text-amber-600 dark:text-yellow-300 mb-4 flex items-center gap-2">
                    <Zap size={20} /> {t.energyLaw.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                    {t.energyLaw.content}
                </p>
             </div>
             
             {/* Order & Chaos */}
             <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors shadow-sm">
                <h3 className="font-bold text-xl text-blue-600 dark:text-blue-300 mb-4 flex items-center gap-2">
                    <Waves size={20} /> {t.orderChaos.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                    {t.orderChaos.content_1}
                    <span className="font-bold text-white bg-blue-500 px-1 rounded mx-1">{t.orderChaos.content_adhesion}</span>
                    {t.orderChaos.content_2}
                    <br/><br/>
                    {t.orderChaos.content_3}
                    <span className="font-bold text-white bg-red-500 px-1 rounded mx-1">{t.orderChaos.content_blossom}</span>
                    {t.orderChaos.content_4}
                </p>
             </div>
        </div>

        {/* Philosophy Footer with Ship */}
        <div className="bg-indigo-900/10 dark:bg-black/30 backdrop-blur-lg p-8 rounded-xl border border-white/20 dark:border-white/10 relative overflow-hidden group">
             {/* Big Background Icon */}
             <div className="absolute -right-10 -bottom-10 text-indigo-900 dark:text-white opacity-5 transform rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700">
                 <Ship size={200} />
             </div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1">
                     <div className="flex items-center gap-2 mb-4">
                        <Anchor className="text-blue-600 dark:text-blue-300 ship-anim" size={24} />
                        <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 inline-block">
                            {lang === 'zh' ? '乘风破浪' : 'Riding the Waves'}
                        </h3>
                     </div>
                     <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 italic font-medium">
                         "{t.philosophy}"
                     </p>
                 </div>
                 
                 <div className="w-full md:w-auto p-4 bg-indigo-100/50 dark:bg-blue-600/20 rounded-lg border border-indigo-200 dark:border-blue-400/30 flex items-center gap-4 shrink-0 hover:scale-105 transition-transform shadow-sm">
                     <div className="p-2 bg-yellow-500/20 rounded-full">
                        <Compass className="text-yellow-600 dark:text-yellow-400" size={24} />
                     </div>
                     <p className="font-bold text-indigo-900 dark:text-white text-base max-w-[200px]">
                         {t.final}
                     </p>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};