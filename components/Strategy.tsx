import React from 'react';
import { Card } from './Card';
import { Filter, Play, PieChart, ShieldAlert, TrendingUp, CheckCircle2, AlertTriangle, ArrowUpRight, ScanLine, Radar, Clock, Calendar, MousePointerClick, Target, ArrowRight, Layers, Lock, Zap } from 'lucide-react';
import { Lang } from '../types';

export const StrategySection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    fusion: {
        title: lang === 'zh' ? '经典形态融合战法' : 'Classic Pattern Fusion Strategy',
        s1: lang === 'zh' ? '五线启动' : 'Launch',
        s2: lang === 'zh' ? '老鸭头' : 'Duck Head',
        s3: lang === 'zh' ? '美人肩' : 'Shoulder',
        t1: lang === 'zh' ? '启动期:' : 'Launch:',
        d1: lang === 'zh' ? '放量大阳 打破粘合' : 'Vol Breakout',
        t2: lang === 'zh' ? '中继期:' : 'Relay:',
        d2: lang === 'zh' ? '鼻孔缩量 回踩支撑' : 'Shrink Retrace',
        t3: lang === 'zh' ? '加速期:' : 'Accel:',
        d3: lang === 'zh' ? '高位盘整 拒绝回调' : 'High Consolidation'
    },
    screen: {
        title: lang === 'zh' ? '阿尔法牛股选股器' : 'Alpha Stock Screener',
        status: lang === 'zh' ? '实时扫描中...' : 'Scanning...',
        f1: lang === 'zh' ? '形态特征' : 'Pattern',
        v1: lang === 'zh' ? '一阳穿多线 (粘合)' : 'One Yang Cross All',
        f2: lang === 'zh' ? '筹码结构' : 'Chips',
        v2: lang === 'zh' ? '90%筹码集中度 > 15%' : '90% Conc > 15%',
        f3: lang === 'zh' ? '均线趋势' : 'MA Trend',
        v3: lang === 'zh' ? '多头排列 (5>10>20)' : 'Bullish (5>10>20)',
        f4: lang === 'zh' ? '流动性' : 'Liquidity',
        v4: lang === 'zh' ? '成交额 > 2亿' : 'Vol > 200M',
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-10">
      <style>{`
        @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); border-color: rgba(59, 130, 246, 0.8); }
        }
        .scanner-overlay {
            background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2), transparent);
            animation: scan-line 3s linear infinite;
        }
        .item-pulse {
            animation: pulse-glow 3s infinite;
        }
        @keyframes draw-path-fusion {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes fade-in-seq {
            0%, 20% { opacity: 0; transform: translateY(5px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .fusion-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-path-fusion 4s ease-in-out infinite;
        }
        .seq-appear-1 { animation: fade-in-seq 4s infinite; animation-delay: 0s; }
        .seq-appear-2 { animation: fade-in-seq 4s infinite; animation-delay: 1.5s; }
        .seq-appear-3 { animation: fade-in-seq 4s infinite; animation-delay: 3s; }
      `}</style>
      
      {/* Left: Fusion Morphology */}
      <div className="w-full md:w-3/5">
        <Card highlightColor="teal" className="h-full">
            <h4 className="font-bold text-xl mb-4 text-teal-800 dark:text-teal-400">{t.fusion.title}</h4>
            <div className="relative h-48 bg-slate-50 dark:bg-slate-900 rounded mb-4 border border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
                <svg viewBox="0 0 500 180" className="w-full h-full absolute inset-0">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />

                    <path d="M20,150 C150,140 300,100 480,20" fill="none" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" strokeDasharray="5,5" />

                    <path 
                        d="M20,150 L80,90 Q130,140 180,110 T240,90 L300,90 L340,70 L380,70 L480,10" 
                        fill="none" 
                        className="stroke-teal-500 fusion-path" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />
                    
                    <g className="seq-appear-1 opacity-0">
                        <circle cx="80" cy="90" r="4" className="fill-red-500" />
                        <text x="80" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-red-500">{t.fusion.s1}</text>
                    </g>

                    <g className="seq-appear-2 opacity-0">
                        <circle cx="180" cy="115" r="4" className="fill-blue-500" />
                        <text x="180" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-blue-500">{t.fusion.s2}</text>
                    </g>

                    <g className="seq-appear-3 opacity-0">
                        <rect x="300" y="65" width="80" height="20" className="fill-pink-500/10 stroke-pink-500" strokeDasharray="2,2" rx="4" />
                        <text x="340" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-pink-500">{t.fusion.s3}</text>
                    </g>
                </svg>

                <div className="absolute bottom-0 left-0 right-0 h-10 flex items-end gap-1 px-4 opacity-50">
                    <div className="w-10 bg-red-500 h-8 seq-appear-1"></div>
                    <div className="w-8 bg-red-400 h-6 seq-appear-1"></div>
                    <div className="w-6 bg-slate-400 h-3 seq-appear-2 ml-10"></div>
                    <div className="w-6 bg-slate-400 h-2 seq-appear-2"></div>
                    <div className="w-6 bg-red-400 h-4 seq-appear-3 ml-20"></div>
                    <div className="w-6 bg-red-400 h-5 seq-appear-3"></div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-lg text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/50">
                    <span className="font-bold text-red-600 dark:text-red-400 block mb-1 text-base">{t.fusion.t1}</span> <span className="text-base">{t.fusion.d1}</span>
                </div>
                <div className="p-2 rounded bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1 text-base">{t.fusion.t2}</span> <span className="text-base">{t.fusion.d2}</span>
                </div>
                <div className="p-2 rounded bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800/50">
                    <span className="font-bold text-pink-600 dark:text-pink-400 block mb-1 text-base">{t.fusion.t3}</span> <span className="text-base">{t.fusion.d3}</span>
                </div>
            </div>
        </Card>
      </div>

      {/* Right: Stock Screener */}
      <div className="w-full md:w-2/5">
        <div className="bg-slate-800 dark:bg-slate-900 text-white border border-slate-700 shadow-xl rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group transition-colors duration-300">
            <div className="absolute left-0 right-0 h-10 scanner-overlay z-0 pointer-events-none"></div>
            
            <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-600 pb-2 relative z-10">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Radar className="text-blue-400 w-5 h-5 animate-spin-slow" style={{animationDuration: '4s'}} />
                        <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></span>
                    </div>
                    <h4 className="font-bold text-lg">{t.screen.title}</h4>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-900/50 rounded border border-green-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm text-green-400 font-mono tracking-wider">{t.screen.status}</span>
                </div>
            </div>
            
            <div className="space-y-4 flex-grow relative z-10">
                {[
                    { l: t.screen.f1, v: t.screen.v1, c: 'text-yellow-400', b: 'border-yellow-500/30' },
                    { l: t.screen.f2, v: t.screen.v2, c: 'text-blue-400', b: 'border-blue-500/30' },
                    { l: t.screen.f3, v: t.screen.v3, c: 'text-emerald-400', b: 'border-emerald-500/30' },
                    { l: t.screen.f4, v: t.screen.v4, c: 'text-red-400', b: 'border-red-500/30' }
                ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 bg-slate-700/50 dark:bg-slate-800/50 rounded border ${item.b} item-pulse transition-all`} style={{animationDelay: `${i * 0.5}s`}}>
                        <span className="text-sm text-slate-400 uppercase tracking-wider font-bold">{item.l}</span>
                        <span className={`font-bold text-lg ${item.c}`}>{item.v}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-2 relative z-10">
                <div className="text-sm text-slate-500 font-mono text-center">
                    AI ENGINE ACTIVE • <span className="text-slate-400">WAITING FOR DATA FEED...</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const RiskManagement: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '模型融合与交易策略构建' : 'Model Fusion & Quantitative Strategy',
        subtitle: lang === 'zh' ? '从选股到执行的闭环逻辑' : 'Closed Loop: From Selection to Execution',
        flow: {
            step1: lang === 'zh' ? '阿尔法选股器' : 'Alpha Screener',
            desc1: lang === 'zh' ? '形态+筹码' : 'Pattern+Chips',
            step2: lang === 'zh' ? '趋势确认 (Confirm)' : 'Trend Confirm',
            desc2: lang === 'zh' ? '一阳穿线 · 站稳' : 'Solid Yang · Hold',
            step3: lang === 'zh' ? '自我强化 (Reinforce)' : 'Self-Reinforce',
            desc3: lang === 'zh' ? '多头排列 · 发散' : 'Bullish Array',
        },
        buy: {
            title: lang === 'zh' ? '买入规则 (Entry)' : 'Buy Rules',
            agg: lang === 'zh' ? '激进型 (14:30)' : 'Aggressive (14:30)',
            agg_desc: lang === 'zh' ? '一阳穿多线当日，量能达标，筹码集中，尾盘直接挂单。' : 'Launch day 14:30. Vol & Chips OK. Buy at close.',
            cons: lang === 'zh' ? '稳健型 (回踩)' : 'Conservative (Retrace)',
            cons_desc: lang === 'zh' ? '2-3日缩量回踩5/10日线不破，确认为加仓点。' : '2-3 days shrinking vol, dipping to MA5/10. Add here.',
            pyr: lang === 'zh' ? '金字塔建仓: 2-3-2' : 'Pyramid: 2-3-2'
        },
        stop: {
            title: lang === 'zh' ? '止损规则 (Stop Loss)' : 'Stop Loss Rules',
            logic: lang === 'zh' ? '逻辑止损' : 'Logical Stop',
            logic_d: lang === 'zh' ? '跌破启动阳线最低价 (Low)' : 'Below Launch Candle Low',
            chip: lang === 'zh' ? '筹码止损' : 'Chip Stop',
            chip_d: lang === 'zh' ? '跌破筹码峰下沿' : 'Below Chip Peak Bottom',
            time: lang === 'zh' ? '时间止损' : 'Time Stop',
            time_d: lang === 'zh' ? '7-10天未脱离成本区' : 'Stagnant > 7-10 Days'
        },
        profit: {
            title: lang === 'zh' ? '止盈规则 (Take Profit)' : 'Take Profit Rules',
            target: lang === 'zh' ? '目标位测算' : 'Target Calc',
            target_d: lang === 'zh' ? '筹码峰宽度 x 1.618' : 'Chip Width x 1.618',
            chip: lang === 'zh' ? '筹码转移' : 'Chip Transfer',
            chip_d: lang === 'zh' ? '底仓流出 > 30% 分批止盈' : 'Base Outflow > 30% Exit',
            ma: lang === 'zh' ? '均线破位' : 'MA Break',
            ma_d: lang === 'zh' ? '跌破MA20清仓' : 'Break MA20 Clear All'
        }
    };

    // Colors based on locale for Candles
    const upFill = lang === 'zh' ? 'fill-red-500' : 'fill-green-500';
    const upStroke = lang === 'zh' ? 'stroke-red-500' : 'stroke-green-500';
    const downFill = lang === 'zh' ? 'fill-green-500' : 'fill-red-500';
    const downStroke = lang === 'zh' ? 'stroke-green-500' : 'stroke-red-500';

    const Badge = ({children, color}: {children: React.ReactNode, color: string}) => (
        <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-bold mr-1 bg-${color}-100 text-${color}-700 dark:bg-${color}-900/50 dark:text-${color}-300 border border-${color}-200 dark:border-${color}-800`}>
            {children}
        </span>
    );

    return (
        <div className="space-y-8">
            <style>{`
                @keyframes flow-dash {
                    to { stroke-dashoffset: 0; }
                }
                .flow-line-anim {
                    stroke-dasharray: 10;
                    stroke-dashoffset: 100;
                    animation: flow-dash 1s linear infinite;
                }
                @keyframes pulse-node {
                    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                }
                .node-pulse { animation: pulse-node 2s infinite; }
            `}</style>

            {/* 1. Logic Flowchart - UPDATED */}
            <Card highlightColor="slate" className="relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div>
                        <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium text-lg">{t.subtitle}</p>
                    </div>
                </div>

                <div className="relative h-40 md:h-48 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-around">
                    {/* Step 1: Screener */}
                    <div className="flex flex-col items-center z-10 w-1/3">
                        <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 node-pulse border border-blue-200 dark:border-blue-800">
                            <ScanLine size={28} />
                        </div>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-lg">{t.flow.step1}</div>
                        <div className="text-xs text-slate-500 font-bold mt-1 uppercase">{t.flow.desc1}</div>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex-1 h-[2px] bg-slate-300 dark:bg-slate-700 relative mx-2">
                         <div className="absolute top-1/2 left-0 right-0 h-full -translate-y-1/2 overflow-hidden">
                            <svg width="100%" height="4" className="absolute top-0">
                                <line x1="0" y1="2" x2="100%" y2="2" className="stroke-blue-500 flow-line-anim" strokeWidth="2" />
                            </svg>
                         </div>
                         <ArrowRight className="absolute -right-2 -top-2.5 text-blue-500" size={16} />
                    </div>

                    {/* Step 2: Confirm */}
                    <div className="flex flex-col items-center z-10 w-1/3">
                        <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 border border-amber-200 dark:border-amber-800">
                            <CheckCircle2 size={28} />
                        </div>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-lg">{t.flow.step2}</div>
                        <div className="text-xs text-slate-500 font-bold mt-1 uppercase">{t.flow.desc2}</div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex-1 h-[2px] bg-slate-300 dark:bg-slate-700 relative mx-2">
                         <div className="absolute top-1/2 left-0 right-0 h-full -translate-y-1/2 overflow-hidden">
                            <svg width="100%" height="4" className="absolute top-0">
                                <line x1="0" y1="2" x2="100%" y2="2" className="stroke-green-500 flow-line-anim" strokeWidth="2" />
                            </svg>
                         </div>
                         <ArrowRight className="absolute -right-2 -top-2.5 text-green-500" size={16} />
                    </div>

                    {/* Step 3: Self-Reinforce */}
                    <div className="flex flex-col items-center z-10 w-1/3">
                        <div className="w-14 h-14 rounded-xl bg-green-500 text-white flex items-center justify-center mb-2 shadow-lg shadow-green-500/30 animate-pulse">
                            <Zap size={28} />
                        </div>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-lg">{t.flow.step3}</div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-bold mt-1 uppercase">{t.flow.desc3}</div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 1. Buy Rules */}
                <Card highlightColor="indigo" className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-300">
                            <TrendingUp size={18} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.buy.title}</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 mb-4 h-40 relative">
                        {/* Visualization of Aggressive vs Conservative */}
                        <svg viewBox="0 0 200 100" className="w-full h-full">
                             {/* MAs */}
                             <path d="M10,80 C50,75 100,60 190,20" fill="none" className="stroke-slate-400" strokeWidth="1" />
                             <path d="M10,85 C50,80 100,70 190,30" fill="none" className="stroke-blue-500" strokeWidth="1.5" />
                             
                             {/* Candle 1: Launch (Big Yang) */}
                             <rect x="50" y="40" width="10" height="40" className={`${upFill} ${upStroke}`} strokeWidth="1" />
                             <line x1="55" y1="35" x2="55" y2="80" className={upStroke} strokeWidth="1" />
                             
                             {/* Aggressive Entry Icon */}
                             <circle cx="55" cy="40" r="3" className="fill-indigo-500" />
                             <g transform="translate(65, 35)">
                                <text fontSize="8" className="fill-indigo-500 font-bold">14:30 Buy</text>
                             </g>

                             {/* Candle 2: Retrace (Small Yin) */}
                             <rect x="70" y="45" width="8" height="15" className={`${downFill} ${downStroke}`} strokeWidth="1" />
                             <line x1="74" y1="45" x2="74" y2="65" className={downStroke} strokeWidth="1" />

                             {/* Candle 3: Retrace Touch MA (Small Yin) */}
                             <rect x="85" y="55" width="8" height="10" className={`${downFill} ${downStroke}`} strokeWidth="1" />
                             <line x1="89" y1="50" x2="89" y2="70" className={downStroke} strokeWidth="1" />
                             
                             {/* Conservative Entry Icon */}
                             <circle cx="89" cy="70" r="3" className="fill-indigo-500" />
                             <text x="89" y="85" fontSize="8" className="fill-indigo-500 font-bold" textAnchor="middle">Add</text>
                        </svg>
                    </div>

                    <div className="space-y-4 text-base flex-grow">
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded border-l-4 border-indigo-500 shadow-sm">
                            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">{t.buy.agg}</span>
                            <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed block">
                                <Badge color="indigo">14:30</Badge>
                                {t.buy.agg_desc}
                            </span>
                        </div>
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded border-l-4 border-indigo-400 shadow-sm">
                            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">{t.buy.cons}</span>
                            <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed block">
                                <Badge color="indigo">MA5/10</Badge>
                                {t.buy.cons_desc}
                            </span>
                        </div>
                        <div className="text-center font-bold text-slate-500 text-sm bg-slate-100 dark:bg-slate-800 py-1 rounded">
                            {t.buy.pyr}
                        </div>
                    </div>
                </Card>

                {/* 2. Stop Loss */}
                <Card highlightColor="red" className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                            <ShieldAlert size={18} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.stop.title}</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 mb-4 h-40 relative">
                        <svg viewBox="0 0 200 100" className="w-full h-full">
                             {/* Logic Stop Line */}
                             <rect x="20" y="30" width="10" height="40" className={`${upFill} opacity-30`} />
                             <line x1="10" y1="70" x2="200" y2="70" className="stroke-red-500" strokeDasharray="3" />
                             <text x="180" y="65" fontSize="8" className="fill-red-500 font-bold">Low Stop</text>
                             
                             {/* Chip Stop Line */}
                             <rect x="0" y="50" width="15" height="30" className="fill-cyan-500 opacity-20" />
                             <line x1="0" y1="80" x2="200" y2="80" className="stroke-blue-500" strokeDasharray="3" />
                             <text x="180" y="88" fontSize="8" className="fill-blue-500 font-bold">Chip Stop</text>

                             {/* Price Drop */}
                             <path d="M40,40 L60,50 L80,30 L100,60 L120,85" fill="none" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5" />
                             <circle cx="120" cy="85" r="4" className="fill-red-500 animate-pulse" />
                             <text x="120" y="95" fontSize="10" className="fill-red-500 font-bold" textAnchor="middle">STOP</text>
                        </svg>
                    </div>

                    <div className="space-y-4 text-base flex-grow">
                        <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/10 p-2 rounded">
                             <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.stop.logic}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="red">Low</Badge>
                                    {t.stop.logic_d}
                                 </div>
                             </div>
                        </div>
                        <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/10 p-2 rounded">
                             <Layers size={18} className="text-blue-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.stop.chip}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="blue">Peak</Badge>
                                    {t.stop.chip_d}
                                 </div>
                             </div>
                        </div>
                        <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/10 p-2 rounded">
                             <Calendar size={18} className="text-amber-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.stop.time}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="amber">7-10 Days</Badge>
                                    {t.stop.time_d}
                                 </div>
                             </div>
                        </div>
                    </div>
                </Card>

                {/* 3. Take Profit */}
                <Card highlightColor="green" className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-lg text-green-600 dark:text-green-300">
                            <Target size={18} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.profit.title}</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 mb-4 h-40 relative">
                        <svg viewBox="0 0 200 100" className="w-full h-full">
                             {/* Fib Targets */}
                             <line x1="0" y1="80" x2="200" y2="80" className="stroke-slate-300 dark:stroke-slate-700" strokeDasharray="2" />
                             <text x="5" y="78" fontSize="8" className="fill-slate-400">1.0</text>
                             
                             <line x1="0" y1="20" x2="200" y2="20" className="stroke-green-500" strokeDasharray="2" />
                             <text x="5" y="18" fontSize="8" className="fill-green-500 font-bold">1.618</text>

                             {/* Price Surge */}
                             <path d="M20,80 C50,70 100,50 180,20" fill="none" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5" />
                             <circle cx="180" cy="20" r="4" className="fill-green-500" />
                             <text x="180" y="32" fontSize="10" className="fill-green-500 font-bold" textAnchor="middle">TP</text>

                             {/* Chip Outflow (Bottom) */}
                             <rect x="150" y="90" width="40" height="10" className="fill-red-500 opacity-20" />
                             <rect x="150" y="90" width="10" height="10" className="fill-red-500" /> {/* Only small part left */}
                             <text x="130" y="98" fontSize="8" className="fill-red-400 text-right">Chip Out</text>
                        </svg>
                    </div>

                    <div className="space-y-4 text-base flex-grow">
                         <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/10 p-2 rounded">
                             <Target size={18} className="text-green-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.profit.target}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="green">1.618</Badge>
                                    {t.profit.target_d}
                                 </div>
                             </div>
                        </div>
                        <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/10 p-2 rounded">
                             <Layers size={18} className="text-red-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.profit.chip}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="red">-30%</Badge>
                                    {t.profit.chip_d}
                                 </div>
                             </div>
                        </div>
                        <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/10 p-2 rounded">
                             <TrendingUp size={18} className="text-blue-500 mt-0.5 shrink-0" />
                             <div>
                                 <span className="font-bold text-slate-800 dark:text-slate-200 block text-sm mb-0.5">{t.profit.ma}</span>
                                 <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    <Badge color="blue">MA20</Badge>
                                    {t.profit.ma_d}
                                 </div>
                             </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};