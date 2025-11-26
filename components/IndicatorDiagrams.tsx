import React from 'react';
import { Card } from './Card';
import { TrendingUp, Activity, BarChart2, GitCommit } from 'lucide-react';
import { Lang } from '../types';

export const IndicatorDiagrams: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    macd: {
        title: lang === 'zh' ? 'MACD: 水上金叉与双回试' : 'MACD: Water Cross & Double Test',
        zero: lang === 'zh' ? '零轴共振' : 'Zero Resonance',
        refuse: lang === 'zh' ? '将死不死' : 'Refusing to Die',
        burst: lang === 'zh' ? '红柱爆发' : 'Red Burst',
        desc_zero: lang === 'zh' ? 'DIF与DEA在0轴附近粘合，最完美的五线开花形态。' : 'DIF and DEA bond near 0-axis, perfect blossom form.',
        desc_refuse: lang === 'zh' ? '快线(DIF)作势下穿慢线(DEA)，接触瞬间突然掉头向上，极强起涨信号。' : 'DIF feigns crossing down DEA, but turns up instantly. Strong buy signal.',
        desc_burst: lang === 'zh' ? '伴随开花，MACD红柱呈阶梯式放大，确认动能持续增强。' : 'Red bars expand stepwise, confirming sustained momentum.'
    },
    kdj: {
        title: lang === 'zh' ? 'KDJ: “钝化”悖论' : 'KDJ: Passivation Paradox',
        passivation: lang === 'zh' ? '钝化现象' : 'Passivation',
        action: lang === 'zh' ? '操作指引' : 'Action Guide',
        desc_pass: lang === 'zh' ? '五线强劲开花时，J值迅速冲上100并在高位钝化(Passivation)。' : 'When blossoming, J-value hits 100 and stays there (passivation).',
        desc_act: lang === 'zh' ? 'KDJ的高位钝化不是卖出信号，而是持有信号！表明市场进入极强势。仅当J值从高位有效跌破80时考虑止盈。' : 'High passivation is a HOLD signal! It means extreme strength. Sell only when J drops below 80.'
    },
    boll: {
        title: lang === 'zh' ? '布林线: 收口与张口' : 'BOLL: Squeeze & Expansion',
        squeeze: lang === 'zh' ? '收口 (Squeeze)' : 'Squeeze',
        expansion: lang === 'zh' ? '张口 (Expansion)' : 'Expansion',
        upper: lang === 'zh' ? '上轨(Upper Band)' : 'Upper Band',
        desc_sq: lang === 'zh' ? '五线粘合对应布林线上下轨极度收缩。带宽(Bandwidth)达到历史低点。' : 'MA adhesion corresponds to BOLL squeeze. Bandwidth hits historical lows.',
        desc_ex: lang === 'zh' ? '随着均线发散，布林线上下轨瞬间张开如喇叭口。股价紧贴上轨运行，这是趋势确立的佐证。' : 'As MAs diverge, BOLL opens like a trumpet. Price hugs Upper Band, confirming trend.'
    },
    rsi: {
        title: lang === 'zh' ? 'RSI: 趋势强弱哨兵' : 'RSI: Trend Sentinel',
        break: lang === 'zh' ? '突破50' : 'Break 50',
        confirm: lang === 'zh' ? '回踩确认' : 'Confirm',
        axis: lang === 'zh' ? '50中轴' : '50 Axis',
        div: lang === 'zh' ? '顶背离' : 'Divergence',
        desc_axis: lang === 'zh' ? 'RSI有效站稳50上方是多头行情的底线。' : 'RSI staying above 50 is the baseline for bullish trends.',
        desc_div: lang === 'zh' ? '股价创新高而RSI不再创新高，是离场警报。' : 'Price makes new high but RSI does not. Exit warning.'
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes barGrow {
          from { height: 0; }
          to { height: var(--h); }
        }
        .anim-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 0;
          animation: drawLine 3s ease-out forwards;
        }
        .anim-bar {
          animation: barGrow 1s ease-out forwards;
        }
        @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .pulse-target {
            animation: pulse-red 2s infinite;
        }
      `}</style>

      {/* MACD */}
      <Card highlightColor="red">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded text-red-600 dark:text-red-400">
             <Activity size={18}/>
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.macd.title}</h4>
        </div>
        
        <div className="h-36 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-3 overflow-hidden">
            {/* Zero Axis */}
            <line x1="0" y1="60" x2="100%" y2="60" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="3"/>
            <text x="5" y="55" fontSize="11" className="fill-slate-400">0 Axis</text>
            
            {/* Histogram */}
            <div className="absolute bottom-[calc(100%-60px)] left-10 flex items-end gap-1">
                 {/* Previous oscillation */}
                 {[2, 3, 1, -1, -2, -1, 0].map((h, i) => (
                     <div key={i} className={`w-2 md:w-3 ${h>0?'bg-red-400':'bg-green-400'}`} style={{height: `${Math.abs(h)*3}px`}}></div>
                 ))}
                 {/* Explosion Phase */}
                 {[2, 5, 8, 14, 20, 28, 35, 42].map((h, i) => (
                     <div key={`exp-${i}`} className="w-2 md:w-3 bg-red-500 anim-bar" style={{'--h': `${h}px`, animationDelay: `${1.5 + i*0.1}s`} as React.CSSProperties}></div>
                 ))}
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* DEA (Slow - Yellow) - Stays near 0 */}
                <path d="M10,62 C50,60 100,58 150,60 C200,60 250,55 350,30" fill="none" className="stroke-yellow-500 anim-line" strokeWidth="2" />
                
                {/* DIF (Fast - White/Black) - The "Refusing to Die" move */}
                <path d="M10,70 C50,65 100,65 130,58 C140,56 150,58 160,54 C200,40 250,15 350,5" fill="none" className="stroke-slate-800 dark:stroke-slate-100 anim-line" strokeWidth="2" />
                
                {/* The "Kiss" point - "Jiang Si Bu Si" */}
                <circle cx="145" cy="58" r="4" className="fill-red-500 animate-ping" style={{animationDelay: '1.5s'}} />
                <text x="145" y="80" fontSize="11" className="fill-red-500 font-bold" textAnchor="middle">{t.macd.refuse}</text>
            </svg>
        </div>
        
        <div className="space-y-2 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
             <p><b>● {t.macd.zero}：</b> {t.macd.desc_zero}</p>
             <p><b>● {t.macd.refuse}：</b> {t.macd.desc_refuse}</p>
             <p><b>● {t.macd.burst}：</b> {t.macd.desc_burst}</p>
        </div>
      </Card>

      {/* KDJ */}
      <Card highlightColor="purple">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded text-purple-600 dark:text-purple-400">
             <BarChart2 size={18}/>
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.kdj.title}</h4>
        </div>

        <div className="h-36 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-3 p-4">
             {/* Levels */}
             <line x1="0" y1="30" x2="100%" y2="30" className="stroke-purple-300 dark:stroke-purple-700" strokeDasharray="4" />
             <text x="5" y="25" fontSize="11" className="fill-purple-500">100 ({t.kdj.passivation})</text>
             <line x1="0" y1="90" x2="100%" y2="90" className="stroke-slate-200 dark:stroke-slate-700" />
             <text x="5" y="85" fontSize="11" className="fill-slate-400">80</text>
             
             <svg className="absolute inset-0 w-full h-full">
                 <path d="M10,110 C40,90 60,30 80,20 L120,15 L180,15 L240,15 L280,30 L320,50" fill="none" className="stroke-purple-600 dark:stroke-purple-400 anim-line" strokeWidth="2.5" />
                 
                 {/* Highlight Zone - Passivation */}
                 <rect x="80" y="5" width="160" height="25" className="fill-purple-500/10" rx="4" />
                 <text x="160" y="45" fontSize="11" className="fill-purple-600 dark:fill-purple-400 font-bold" textAnchor="middle">{lang === 'zh' ? '钝化区 = 极强持有' : 'Passivation = HOLD'}</text>
                 
                 {/* Drop signal */}
                 <circle cx="280" cy="30" r="4" className="fill-red-500 pulse-target" />
                 <text x="280" y="60" fontSize="11" className="fill-red-500 font-bold" textAnchor="middle">{lang === 'zh' ? '跌破80止盈' : 'Sell < 80'}</text>
             </svg>
        </div>
        
        <div className="space-y-2 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
             <p><b>● {t.kdj.passivation}：</b> {t.kdj.desc_pass}</p>
             <p><b>● {t.kdj.action}：</b> {t.kdj.desc_act}</p>
        </div>
      </Card>

      {/* BOLL */}
      <Card highlightColor="indigo">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded text-indigo-600 dark:text-indigo-400">
             <TrendingUp size={18}/>
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.boll.title}</h4>
        </div>
        
        <div className="h-36 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-3 overflow-hidden">
             <svg className="absolute inset-0 w-full h-full">
                 <defs>
                    <linearGradient id="bollGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.05)" />
                        <stop offset="40%" stopColor="rgba(99, 102, 241, 0.2)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
                    </linearGradient>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                        markerWidth="6" markerHeight="6"
                        orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-indigo-500" />
                    </marker>
                 </defs>
                 
                 {/* Squeeze Phase (Left) to Expansion (Right) */}
                 <path d="M0,45 Q50,55 100,55 T180,55 Q220,55 250,20 T350,5" fill="none" className="stroke-indigo-400" strokeWidth="2" />
                 <path d="M0,85 Q50,75 100,75 T180,75 Q220,75 250,110 T350,130" fill="none" className="stroke-indigo-400" strokeWidth="2" />
                 <path d="M0,65 Q50,65 100,65 T180,65 Q220,65 250,60 T350,50" fill="none" className="stroke-indigo-300 stroke-dasharray-2" strokeWidth="1" />
                 
                 <path d="M0,45 Q50,55 100,55 T180,55 Q220,55 250,20 T350,5 L350,130 Q300,120 250,110 Q220,75 180,75 T100,75 Q50,75 0,85 Z" fill="url(#bollGrad)" />

                 <line x1="140" y1="55" x2="140" y2="75" className="stroke-indigo-600" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
                 <text x="140" y="45" fontSize="11" className="fill-indigo-600 font-bold" textAnchor="middle">{t.boll.squeeze}</text>

                 <text x="300" y="90" fontSize="11" className="fill-indigo-600 font-bold" textAnchor="middle">{t.boll.expansion}</text>

                 <g className="animate-pulse">
                     <rect x="230" y="45" width="6" height="15" className="fill-red-500" />
                     <rect x="250" y="25" width="6" height="25" className="fill-red-500" />
                     <rect x="270" y="15" width="6" height="20" className="fill-red-500" />
                     <rect x="290" y="5" width="6" height="25" className="fill-red-500" />
                 </g>
             </svg>
        </div>

        <div className="space-y-2 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
             <p><b>● {t.boll.squeeze}：</b> {t.boll.desc_sq}</p>
             <p><b>● {t.boll.expansion}：</b> {t.boll.desc_ex}</p>
        </div>
      </Card>
      
      {/* RSI */}
      <Card highlightColor="blue">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded text-blue-600 dark:text-blue-400">
             <GitCommit size={18}/>
          </div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.rsi.title}</h4>
        </div>
        
         <div className="h-36 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-3 overflow-hidden">
             <line x1="0" y1="64" x2="100%" y2="64" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="3" />
             <text x="5" y="60" fontSize="11" className="fill-blue-500">50</text>
             
             <svg className="absolute inset-0 w-full h-full">
                 <path d="M10,100 L50,80 L90,64 L130,40 L160,50 L200,20 L250,25 L300,10" fill="none" className="stroke-blue-500 anim-line" strokeWidth="2" />
                 <circle cx="90" cy="64" r="3" className="fill-blue-500" />
                 <text x="95" y="75" fontSize="11" className="fill-blue-500 font-bold">{t.rsi.break}</text>
                 
                 <circle cx="160" cy="50" r="3" className="fill-green-500" />
                 <text x="160" y="65" fontSize="11" className="fill-green-500 font-bold" textAnchor="middle">{t.rsi.confirm}</text>
             </svg>
         </div>
         <div className="space-y-2 text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
             <p><b>● {t.rsi.axis}：</b> {t.rsi.desc_axis}</p>
             <p><b>● {t.rsi.div}：</b> {t.rsi.desc_div}</p>
        </div>
      </Card>
    </div>
  );
};