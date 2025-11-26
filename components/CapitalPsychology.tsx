import React from 'react';
import { Card } from './Card';
import { Scale, TrendingUp, ShieldCheck, Brain, Target, Lock, Zap, Anchor, PieChart } from 'lucide-react';
import { Lang } from '../types';

export const CapitalPsychology: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '资金管理与心理博弈' : 'Capital Management & Psychology',
    kelly: {
      title: lang === 'zh' ? '凯利公式与金字塔建仓' : 'Kelly Criterion & Pyramid Sizing',
      formula: 'f = (bp - q) / b',
      desc: lang === 'zh' ? '鉴于本模型胜率~60%，盈亏比>3:1，建议仓位：' : 'Given ~60% Win Rate, >3:1 RR, suggested sizing:',
      base: lang === 'zh' ? '底仓 30% (启动日)' : 'Base 30% (Launch Day)',
      add: lang === 'zh' ? '加仓 30% (回踩确认)' : 'Add 30% (Confirm)',
      risk: lang === 'zh' ? '单股风控 < 30%' : 'Max Risk < 30% / Stock'
    },
    psy: {
      title: lang === 'zh' ? '克服“恐高”与“贪婪”' : 'Overcoming Fear of Heights & Greed',
      fear_title: lang === 'zh' ? '恐高悖论' : 'Fear Paradox',
      fear_desc: lang === 'zh' ? '不敢买入已涨5%的鱼头，却错失后续50%的鱼身。' : 'Skipping 5% gain (Head) misses the 50% trend (Body).',
      greed_title: lang === 'zh' ? '知行合一' : 'Execution',
      greed_desc: lang === 'zh' ? '利用条件单自动止盈止损，剔除情绪干扰。' : 'Use conditional orders to remove emotion.'
    },
    synthesis: {
      title: lang === 'zh' ? '四维一体：主力X光机' : '4-Dimension Synthesis: MM X-Ray',
      chips: lang === 'zh' ? '1. 筹码集中 < 15%' : '1. Chips Conc < 15%',
      adhesion: lang === 'zh' ? '2. 五线粘合' : '2. MA Adhesion',
      signal: lang === 'zh' ? '3. 一阳穿多线' : '3. One Yang Crosses All',
      trend: lang === 'zh' ? '4. 多头排列' : '4. Bullish Alignment',
      summary: lang === 'zh' ? '逻辑严密的深度交易系统，解决“骗线”与“滞后”难题。' : 'A rigorous system solving "Fakeouts" and "Lag".'
    }
  };

  // Determine colors and text based on locale
  // ZH: Red for rise (Fish body), Green for fall/neutral
  // EN: Green for rise (Fish body), Red for fall
  const fishFill = lang === 'zh' ? 'fill-red-500' : 'fill-green-500';
  const fishStroke = lang === 'zh' ? 'stroke-red-500' : 'stroke-green-500';
  const fishTextFill = lang === 'zh' ? 'fill-red-600' : 'fill-green-600';
  const txtTooHigh = lang === 'zh' ? '太高了! (+5%)' : 'Too High! (+5%)';
  const txtRightSide = lang === 'zh' ? '右侧交易 (主升浪)' : 'RIGHT SIDE TRADING';
  const txtFishBody = lang === 'zh' ? '鱼身行情 (+50%)' : 'The Fish Body (+50%)';

  return (
    <div className="space-y-8">
      <style>{`
        @keyframes stack-up {
          0% { height: 0; opacity: 0; }
          100% { height: var(--h); opacity: 1; }
        }
        @keyframes fish-body-grow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.2); opacity: 0; }
        }
        .anim-stack { animation: stack-up 1.5s ease-out forwards; }
        .anim-path-fish { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: fish-body-grow 3s ease-out forwards; }
        .pulse-circle { animation: pulse-ring 2s infinite; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Kelly Pyramid */}
        <Card highlightColor="blue" className="h-full">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-300">
                    <Scale size={24} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.kelly.title}</h4>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Visual */}
                <div className="w-full md:w-1/2 h-64 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative flex flex-col justify-end items-center p-4">
                     {/* Max Cap Line */}
                     <div className="absolute top-4 w-full border-t border-dashed border-red-400"></div>
                     <div className="absolute top-1 right-2 text-xs text-red-500 font-bold">{t.kelly.risk}</div>

                     {/* Add Position */}
                     <div className="w-3/4 bg-blue-400 dark:bg-blue-500 rounded-t-lg border-x border-t border-blue-500 dark:border-blue-400 anim-stack relative flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{'--h': '80px'} as React.CSSProperties}>
                        {t.kelly.add}
                     </div>
                     {/* Base Position */}
                     <div className="w-full bg-slate-700 dark:bg-slate-600 rounded-b-lg border border-slate-600 dark:border-slate-500 anim-stack relative flex items-center justify-center text-white font-bold text-lg shadow-lg z-10" style={{'--h': '80px'} as React.CSSProperties}>
                        {t.kelly.base}
                     </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                        <div className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-1">Kelly Formula</div>
                        <div className="text-xl font-bold text-slate-800 dark:text-slate-200 font-mono">{t.kelly.formula}</div>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {t.kelly.desc}
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-base text-slate-600 dark:text-slate-400">
                            <div className="w-2 h-2 bg-slate-700 rounded-full"></div> {t.kelly.base}
                        </li>
                        <li className="flex items-center gap-2 text-base text-slate-600 dark:text-slate-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> {t.kelly.add}
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        {/* 2. Psychology Paradox */}
        <Card highlightColor="amber" className="h-full">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600 dark:text-amber-300">
                    <Brain size={24} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.psy.title}</h4>
            </div>

            <div className="relative h-48 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-6 p-4 overflow-hidden">
                <svg viewBox="0 0 300 120" className="w-full h-full">
                    {/* Grid */}
                    <line x1="0" y1="100" x2="300" y2="100" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                    
                    {/* The Path */}
                    <path d="M0,100 L40,100 L60,85" fill="none" className="stroke-slate-400" strokeWidth="2" /> {/* Base */}
                    <path d="M60,85 L80,90" fill="none" className="stroke-slate-400" strokeWidth="2" /> {/* Dip */}
                    <path d="M80,90 C120,40 180,20 280,10" fill="none" className={`${fishStroke} anim-path-fish`} strokeWidth="4" /> {/* Main Wave */}

                    {/* Fear Zone */}
                    <circle cx="60" cy="85" r="4" className="fill-amber-500" />
                    <text x="60" y="70" fontSize="10" className="fill-amber-600 font-bold" textAnchor="middle">{txtTooHigh}</text>
                    
                    {/* The Fish Body */}
                    <rect x="90" y="20" width="180" height="80" className={`${fishFill} opacity-10`} rx="10" />
                    <text x="180" y="50" fontSize="14" className={`${fishTextFill} font-bold`} textAnchor="middle">{txtRightSide}</text>
                    <text x="180" y="70" fontSize="12" className={fishTextFill} textAnchor="middle">{txtFishBody}</text>
                </svg>
            </div>

            <div className="space-y-4">
                 <div className="flex gap-3">
                     <Target className="text-amber-500 shrink-0 mt-1" size={20} />
                     <div>
                         <h5 className="font-bold text-lg text-slate-800 dark:text-slate-200">{t.psy.fear_title}</h5>
                         <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.psy.fear_desc}</p>
                     </div>
                 </div>
                 <div className="flex gap-3">
                     <Lock className="text-blue-500 shrink-0 mt-1" size={20} />
                     <div>
                         <h5 className="font-bold text-lg text-slate-800 dark:text-slate-200">{t.psy.greed_title}</h5>
                         <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.psy.greed_desc}</p>
                     </div>
                 </div>
            </div>
        </Card>
      </div>

      {/* 3. Synthesis */}
      <Card highlightColor="indigo" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
              <ShieldCheck size={120} />
          </div>
          
          <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-300">
                    <Zap size={24} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.synthesis.title}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative z-10">
              {[
                  { t: t.synthesis.chips, i: PieChart, c: 'text-blue-500', b: 'border-blue-200 bg-blue-50 dark:bg-blue-900/20' },
                  { t: t.synthesis.adhesion, i: Anchor, c: 'text-purple-500', b: 'border-purple-200 bg-purple-50 dark:bg-purple-900/20' },
                  { t: t.synthesis.signal, i: Zap, c: 'text-red-500', b: 'border-red-200 bg-red-50 dark:bg-red-900/20' },
                  { t: t.synthesis.trend, i: TrendingUp, c: 'text-green-500', b: 'border-green-200 bg-green-50 dark:bg-green-900/20' },
              ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${item.b} flex flex-col items-center text-center transition-transform hover:scale-105`}>
                      <item.i size={32} className={`mb-3 ${item.c}`} />
                      <span className="font-bold text-lg text-slate-700 dark:text-slate-200">{item.t}</span>
                  </div>
              ))}
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-xl text-center shadow-lg relative z-10">
              <p className="text-xl font-bold tracking-wide">
                  "{t.synthesis.summary}"
              </p>
          </div>
      </Card>
    </div>
  );
};