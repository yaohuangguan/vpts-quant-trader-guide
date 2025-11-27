
import React from 'react';
import { Card } from './Card';
import { Clock, Maximize, Zap, TrendingUp, Compass, Activity, Layers, Disc } from 'lucide-react';
import { Lang } from '../types';

export const VPSpaceTime: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '量价时空：四维全息分析' : 'Volume-Price Space-Time: 4D Holographic Analysis',
    subtitle: lang === 'zh' ? '超越二维K线的更高维度视角' : 'Higher Dimensional Perspective Beyond 2D Charts',
    
    dimensions: [
      { 
        id: 'vol', 
        t: lang === 'zh' ? '量 (Quantity)' : 'Volume', 
        d: lang === 'zh' ? '动能之源。量在价先，是趋势的燃料。' : 'Source of Momentum. Fuel for the trend.',
        c: 'text-red-500',
        b: 'bg-red-100 dark:bg-red-900/30'
      },
      { 
        id: 'price', 
        t: lang === 'zh' ? '价 (Price)' : 'Price', 
        d: lang === 'zh' ? '价值表象。结构突破是趋势的确认。' : 'Representation of Value. Structure break confirms trend.',
        c: 'text-blue-500',
        b: 'bg-blue-100 dark:bg-blue-900/30'
      },
      { 
        id: 'space', 
        t: lang === 'zh' ? '空 (Space)' : 'Space', 
        d: lang === 'zh' ? '盈亏比。向上阻力位与向下支撑位的距离。' : 'Risk/Reward. Distance to Resistance vs Support.',
        c: 'text-green-500',
        b: 'bg-green-100 dark:bg-green-900/30'
      },
      { 
        id: 'time', 
        t: lang === 'zh' ? '时 (Time)' : 'Time', 
        d: lang === 'zh' ? '变盘窗口。斐波那契周期与季节性拐点。' : 'Turning Point. Fibonacci Cycles & Seasonality.',
        c: 'text-purple-500',
        b: 'bg-purple-100 dark:bg-purple-900/30'
      }
    ],

    resonance: {
      title: lang === 'zh' ? '时空共振 (Resonance)' : 'Space-Time Resonance',
      desc: lang === 'zh' 
        ? '当价格运行到关键的空间阻力位，同时时间刚好到达斐波那契变盘窗口（如第13/21天），若伴随成交量异常（极缩或极放），则必然发生变盘。这就是“时空之门”开启的瞬间。'
        : 'When Price hits key Resistance (Space) at the exact Fibonacci Time window (e.g., Day 13/21), accompanied by abnormal Volume, a reversal is inevitable. The "Space-Time Portal" opens.',
      formula: lang === 'zh' ? 'P(价格) + T(时间) + V(能量) = 趋势爆发' : 'P(Price) + T(Time) + V(Energy) = Trend Burst'
    },

    gann: {
      title: lang === 'zh' ? '江恩时间法则' : 'Gann Time Law',
      desc: lang === 'zh' ? '“时间是决定市场走势的最重要因素。当时间到达，价格自会跟随。”' : '"Time is the most important factor. When time is up, price will reverse."',
      rules: lang === 'zh' 
        ? ['1. 历史高低点的时间循环', '2. 斐波那契数列 (3, 5, 8, 13, 21...)', '3. 节气与月相的自然律']
        : ['1. Time cycles from historic Highs/Lows', '2. Fibonacci Sequence (3, 5, 8, 13, 21...)', '3. Solar Terms & Lunar Phases']
    }
  };

  return (
    <div className="space-y-6">
        <style>{`
            @keyframes orbit-1 { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
            @keyframes orbit-2 { from { transform: rotate(120deg) translateX(80px) rotate(-120deg); } to { transform: rotate(480deg) translateX(80px) rotate(-480deg); } }
            @keyframes orbit-3 { from { transform: rotate(240deg) translateX(100px) rotate(-240deg); } to { transform: rotate(600deg) translateX(100px) rotate(-600deg); } }
            
            @keyframes wormhole-spin { 
                0% { transform: rotate(0deg) scale(1); } 
                50% { transform: rotate(180deg) scale(1.1); } 
                100% { transform: rotate(360deg) scale(1); } 
            }
            .anim-wormhole { animation: wormhole-spin 10s linear infinite; }
            .anim-orbit-1 { animation: orbit-1 8s linear infinite; }
            .anim-orbit-2 { animation: orbit-2 12s linear infinite; }
            .anim-orbit-3 { animation: orbit-3 15s linear infinite; }
        `}</style>

        {/* 1. The 4 Dimensions Card */}
        <Card highlightColor="indigo" className="relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-300">
                    <Maximize size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{t.subtitle}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                {/* Visual: Solar System Model */}
                <div className="h-64 bg-slate-900 rounded-2xl border border-slate-700 relative flex items-center justify-center overflow-hidden shadow-inner">
                    {/* Center Sun (Trend) */}
                    <div className="absolute w-12 h-12 bg-indigo-500 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center justify-center text-white font-bold text-xs z-10 animate-pulse">
                        Trend
                    </div>
                    {/* Orbits */}
                    <div className="absolute w-[120px] h-[120px] border border-slate-700 rounded-full opacity-50"></div>
                    <div className="absolute w-[160px] h-[160px] border border-slate-700 rounded-full opacity-40"></div>
                    <div className="absolute w-[200px] h-[200px] border border-slate-700 rounded-full opacity-30"></div>

                    {/* Planets */}
                    <div className="absolute anim-orbit-1 flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-[9px] font-bold shadow-lg">V</div>
                    <div className="absolute anim-orbit-2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-[9px] font-bold shadow-lg">P</div>
                    <div className="absolute anim-orbit-3 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white text-[9px] font-bold shadow-lg">T</div>
                    
                    {/* Connecting Lines (Dynamic) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <line x1="50%" y1="50%" x2="50%" y2="0" className="stroke-indigo-400" />
                        <line x1="50%" y1="50%" x2="100%" y2="100%" className="stroke-indigo-400" />
                        <line x1="50%" y1="50%" x2="0" y2="100%" className="stroke-indigo-400" />
                    </svg>
                </div>

                {/* Dimension Details */}
                <div className="grid grid-cols-1 gap-3">
                    {t.dimensions.map((d, i) => (
                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <div className={`w-8 h-8 rounded-full ${d.b} ${d.c} flex items-center justify-center font-black shrink-0 mt-1`}>
                                {d.t.charAt(0)}
                            </div>
                            <div>
                                <h5 className={`font-bold text-sm ${d.c}`}>{d.t}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight font-medium">
                                    {d.d}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>

        {/* 2. Space-Time Wormhole */}
        <Card highlightColor="purple" className="relative overflow-hidden">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-lg text-purple-600 dark:text-purple-300">
                    <Disc size={20} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.resonance.title}</h4>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Wormhole Visual */}
                <div className="w-full md:w-1/2 h-48 bg-black rounded-xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
                    {/* Spiral */}
                    <div className="absolute w-[200%] h-[200%] anim-wormhole opacity-30">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            {[...Array(10)].map((_, i) => (
                                <circle key={i} cx="100" cy="100" r={i * 10 + 5} fill="none" stroke="url(#spiralGrad)" strokeWidth="1" strokeDasharray="10 5" />
                            ))}
                            <defs>
                                <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    
                    {/* Intersection Point */}
                    <div className="relative z-10 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,0.8)] animate-ping"></div>
                    
                    {/* Axes */}
                    <div className="absolute w-full h-px bg-purple-500/50"></div>
                    <div className="absolute h-full w-px bg-purple-500/50"></div>
                    
                    <div className="absolute bottom-2 left-2 text-xs text-purple-400 font-mono">TIME (Fibonacci)</div>
                    <div className="absolute top-2 right-2 text-xs text-blue-400 font-mono">SPACE (Resistance)</div>
                </div>

                {/* Description */}
                <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
                        {t.resonance.desc}
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700 text-center">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-sm md:text-base">
                            {t.resonance.formula}
                        </span>
                    </div>

                    <div className="space-y-1">
                        <h6 className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase flex items-center gap-1">
                            <Clock size={12} /> {t.gann.title}
                        </h6>
                        <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pl-4 list-disc marker:text-purple-500">
                            {t.gann.rules.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  );
};
