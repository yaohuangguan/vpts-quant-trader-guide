
import React from 'react';
import { Card } from './Card';
import { Sigma, TrendingUp, Activity, BarChart2, ArrowDown, Brain, Microscope } from 'lucide-react';
import { Lang } from '../types';

export const TechnicalTruth: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '量化与技术分析的客观真理' : 'Objective Truth of Quant & Technical Analysis',
    subtitle: lang === 'zh' ? '“知”的数学基础' : 'The Mathematical Basis of "Knowing"',
    
    elliott: {
        title: lang === 'zh' ? '艾略特波浪：趋势耗尽的数学必然性' : 'Elliott Wave: Mathematical Necessity of Exhaustion',
        desc: lang === 'zh' ? '根据拉尔夫·纳尔逊·艾略特（Ralph Nelson Elliott）的理论，一个完整的驱动趋势由五个波浪组成。' : 'According to Elliott, a complete motive trend consists of 5 waves.',
        p1: lang === 'zh' ? '第3浪的性质：通常是幅度最大、动能最强、成交量最活跃的一浪。大众投资者广泛参与，情绪达到高潮。' : 'Wave 3 is usually the largest, most powerful, and most active volume wise. Mass participation.',
        p2: lang === 'zh' ? '“三浪上涨”后的危机：当观察到明显三浪时，市场处于危险临界点。若是3浪末端，面临4浪回撤（回吐38%-50%）；若是5浪末端，面临ABC大级别反转。' : 'Crisis after "3 Waves": Either Wave 4 retracement (giving back 38-50%) or Major Reversal after Wave 5.',
        conclusion: lang === 'zh' ? '概率最优解：随着趋势延续，反转概率递增。此时持仓是用极大回撤风险博取极小尾部利润 (Risk/Reward恶化)。' : 'Optimal Prob: As trend extends, reversal prob increases. Holding now risks huge drawdown for tiny tail profit.',
    },
    ma5: {
        title: lang === 'zh' ? '五日均线 (MA5)：短期动能的“生命线”' : '5-Day MA: The Lifeline of Short-term Momentum',
        physics: lang === 'zh' ? '均值回归 (Mean Reversion) 的物理机制' : 'Physics of Mean Reversion',
        logic: lang === 'zh' ? '在强劲的单边趋势中，价格应始终运行在MA5之上，表明新资金愿意溢价吸筹。' : 'In strong trends, price must stay above MA5, showing new money paying premium.',
        breakdown: lang === 'zh' ? '“跌破”的微观含义：收盘低于MA5意味着过去一周买入者平均陷入浮亏。心理从“贪婪”转为“恐惧”。短期套牢盘急于解套形成抛压。' : 'Micro-meaning of "Break": Close < MA5 means past week buyers are underwater. Greed turns to Fear. Overhang created.',
        stats: lang === 'zh' ? '统计显著性：对于高波动资产，跌破5日线往往是动量崩溃 (Momentum Crash) 的第一张多米诺骨牌。此时不卖，就是站在了统计学规律的对立面。' : 'Stat Significance: Breaking MA5 is often the first domino of a Momentum Crash. Not selling opposes statistical laws.',
    },
    vsa: {
        title: lang === 'zh' ? '高位大阴线：机构派发的微观足迹' : 'High-Level Big Yin: Micro-Footprint of Distribution',
        climax: lang === 'zh' ? '成交量价分析 (VSA) 与聪明钱的撤退' : 'VSA & Smart Money Retreat',
        nature: lang === 'zh' ? '高位巨量的本质：三浪末端伴随巨量的长阴线，绝非散户出逃，而是机构 (Smart Money) 利用散户疯狂买盘进行大规模派发 (Distribution)。' : 'Nature of High Vol: Big Yin with huge volume at top is Smart Money dumping into Retail buying frenzy.',
        reversal: lang === 'zh' ? '供需反转：大阴线意味着特定时间窗口内供给彻底压倒需求。筹码从“强手”转移到了“弱手”。' : 'Supply/Demand Flip: Supply overwhelmed Demand. Chips moved from Strong Hands to Weak Hands.',
        validity: lang === 'zh' ? '看跌吞没 (Bearish Engulfing) 在高位出现时，预测反转准确率可达60-70%。' : 'Bearish Engulfing at highs has 60-70% accuracy for reversal.',
    }
  };

  // Localized text for SVGs
  const svgT = {
      fractal: lang === 'zh' ? '分形结构' : 'Fractal Structure',
      wave3Prop: lang === 'zh' ? '第3浪特性' : 'Wave 3 Properties',
      risk1: lang === 'zh' ? '风险1' : 'Risk 1',
      main: lang === 'zh' ? '3 (主升浪)' : '3 (Main)',
      risk2: lang === 'zh' ? '风险2 (顶)' : 'Risk 2 (Top)',
      crash: lang === 'zh' ? 'ABC 崩盘' : 'ABC Crash',
      dangerTitle: lang === 'zh' ? '3浪末端风险' : 'Danger at 3rd Wave Top',
      
      ma5: lang === 'zh' ? 'MA5' : 'MA5',
      breakLogic: lang === 'zh' ? '跌破逻辑' : 'The Breakdown Logic',
      momentumCrash: lang === 'zh' ? '动能崩溃' : 'Momentum Crash',
      reversion: lang === 'zh' ? '(均值回归)' : '(Mean Reversion)',
      
      engulfing: lang === 'zh' ? '看跌吞没' : 'Engulfing',
      smartMoney: lang === 'zh' ? '聪明钱离场' : 'Smart Money Exit',
      supplyDemand: lang === 'zh' ? '供需关系' : 'Supply/Demand',
      winRate: lang === 'zh' ? '胜率' : 'Win Rate',
  };

  return (
    <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 mb-2 flex items-center justify-center gap-3">
                <Sigma className="text-indigo-600 dark:text-indigo-400" size={32} />
                {t.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-mono uppercase tracking-widest text-sm">{t.subtitle}</p>
        </div>

        {/* 1. Elliott Wave */}
        <Card highlightColor="indigo" className="bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-300">
                    <Activity size={20} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.elliott.title}</h4>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-1/2 h-60 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 relative p-4 overflow-hidden">
                    <div className="absolute top-2 right-2 text-xs text-slate-400 font-mono">{svgT.fractal}</div>
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                        {/* Grid */}
                        <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 30" fill="none" className="stroke-slate-200 dark:stroke-slate-700/50" strokeWidth="0.5"/>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                        {/* Waves */}
                        <path d="M10,130 L50,90" stroke="currentColor" className="text-indigo-400" strokeWidth="2" /> {/* 1 */}
                        <text x="30" y="100" className="fill-indigo-400 text-xs font-bold">1</text>
                        <path d="M50,90 L70,110" stroke="currentColor" className="text-indigo-300" strokeWidth="2" strokeDasharray="4" /> {/* 2 */}
                        
                        <path d="M70,110 L150,30" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400" strokeWidth="3" /> {/* 3 (Main) */}
                        <text x="110" y="60" className="fill-indigo-600 dark:fill-indigo-400 text-sm font-bold">{svgT.main}</text>
                        
                        {/* Danger Zone 1 */}
                        <circle cx="150" cy="30" r="6" className="fill-red-500/20 animate-pulse" />
                        <text x="130" y="20" className="fill-red-500 text-xs font-bold">{svgT.risk1}</text>

                        <path d="M150,30 L180,60" stroke="currentColor" className="text-indigo-300" strokeWidth="2" strokeDasharray="4" /> {/* 4 */}
                        
                        <path d="M180,60 L240,10" stroke="currentColor" className="text-indigo-500" strokeWidth="2" /> {/* 5 */}
                        
                        {/* Danger Zone 2 */}
                        <circle cx="240" cy="10" r="8" className="fill-red-500/30 animate-pulse" />
                        <text x="250" y="20" className="fill-red-500 text-xs font-bold">{svgT.risk2}</text>

                        <path d="M240,10 L260,50 L270,40 L290,90" stroke="currentColor" className="text-red-500" strokeWidth="2" strokeDasharray="2" /> {/* ABC */}
                        <text x="270" y="70" className="fill-red-500 text-xs font-bold">{svgT.crash}</text>
                    </svg>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-4">
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
                        {t.elliott.desc}
                    </p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded border-l-4 border-indigo-500">
                        <h5 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm mb-1">{svgT.wave3Prop}</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t.elliott.p1}</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded border-l-4 border-red-500">
                        <h5 className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">{svgT.dangerTitle}</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{t.elliott.p2}</p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm italic border-t border-slate-200 dark:border-slate-700 pt-2">
                        {t.elliott.conclusion}
                    </p>
                </div>
            </div>
        </Card>

        {/* 2. MA5 Mean Reversion */}
        <Card highlightColor="blue" className="bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg text-blue-600 dark:text-blue-300">
                    <TrendingUp size={20} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.ma5.title}</h4>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5 space-y-3 order-2 md:order-1">
                    <h5 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <Brain size={16} className="text-blue-500"/> {t.ma5.physics}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t.ma5.logic}
                    </p>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                        <div className="text-xs font-bold text-red-500 mb-1 uppercase">{svgT.breakLogic}</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {t.ma5.breakdown}
                        </p>
                    </div>
                    <p className="text-sm text-slate-500 italic border-l-2 border-blue-300 pl-2">
                        {t.ma5.stats}
                    </p>
                </div>

                <div className="w-full md:w-3/5 h-56 bg-slate-900 rounded border border-slate-700 relative p-4 overflow-hidden order-1 md:order-2">
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                        {/* MA5 Curve */}
                        <path d="M10,120 Q100,110 150,60 T280,20" fill="none" className="stroke-white" strokeWidth="2" />
                        <text x="260" y="15" className="fill-white text-xs font-bold">{svgT.ma5}</text>

                        {/* Candles Riding */}
                        <g className="opacity-90">
                            <rect x="30" y="105" width="10" height="20" className="fill-red-500" />
                            <rect x="50" y="95" width="10" height="25" className="fill-red-500" />
                            <rect x="70" y="85" width="10" height="20" className="fill-red-500" />
                            <rect x="90" y="70" width="10" height="30" className="fill-red-500" />
                            <rect x="110" y="55" width="10" height="35" className="fill-red-500" />
                            <rect x="130" y="45" width="10" height="20" className="fill-red-500" />
                            
                            {/* The Breakdown Candle */}
                            <rect x="150" y="35" width="12" height="10" className="fill-red-500" /> {/* High open */}
                            <rect x="170" y="35" width="14" height="60" className="fill-green-500 stroke-white stroke-2 animate-pulse" />
                            <line x1="177" y1="30" x2="177" y2="100" className="stroke-green-500" />
                        </g>

                        {/* Momentum Crash Arrow */}
                        <path d="M180,50 L220,90" stroke="red" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="4" />
                        <text x="190" y="110" className="fill-red-400 text-xs font-bold">{svgT.momentumCrash}</text>
                        <text x="190" y="125" className="fill-slate-400 text-[10px]">{svgT.reversion}</text>
                    </svg>
                </div>
            </div>
        </Card>

        {/* 3. VSA Selling Climax */}
        <Card highlightColor="red" className="bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                    <BarChart2 size={20} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.vsa.title}</h4>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Visual */}
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    {/* Price Action SVG */}
                    <div className="h-40 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 relative flex items-end justify-center p-4">
                        <svg className="w-full h-full" viewBox="0 0 150 100">
                            {/* Previous Candles */}
                            <rect x="40" y="60" width="15" height="40" className="fill-red-400 opacity-50" />
                            <rect x="60" y="40" width="15" height="50" className="fill-red-400 opacity-50" />
                            
                            {/* Bearish Engulfing */}
                            <rect x="90" y="10" width="15" height="20" className="fill-red-500" /> {/* Trap up */}
                            <rect x="110" y="10" width="20" height="80" className="fill-green-600 stroke-green-800 stroke-1" />
                            <text x="140" y="40" className="text-[10px] font-bold fill-slate-500" textAnchor="middle" transform="rotate(90, 140, 40)">{svgT.engulfing}</text>
                        </svg>
                        <div className="absolute top-2 right-2 text-red-500 animate-bounce"><ArrowDown size={20}/></div>
                    </div>
                    
                    {/* Volume SVG */}
                    <div className="h-16 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 relative flex items-end justify-center px-4 pb-1">
                        <svg className="w-full h-full" viewBox="0 0 150 60">
                            <rect x="40" y="30" width="15" height="30" className="fill-slate-300" />
                            <rect x="60" y="25" width="15" height="35" className="fill-slate-300" />
                            <rect x="90" y="20" width="15" height="40" className="fill-red-300" />
                            {/* Climax Volume */}
                            <rect x="110" y="5" width="20" height="55" className="fill-green-600 animate-pulse" />
                        </svg>
                        <text className="absolute top-1 right-2 text-xs text-green-600 font-bold">{svgT.smartMoney}</text>
                    </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3 space-y-3">
                    <h5 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
                        <Microscope size={16} className="text-red-500"/> {t.vsa.climax}
                    </h5>
                    
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {t.vsa.nature}
                    </p>
                    
                    <div className="flex gap-4 mt-2">
                        <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                            <div className="text-xs font-bold text-slate-500 mb-1">{svgT.supplyDemand}</div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{t.vsa.reversal}</p>
                        </div>
                        <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                            <div className="text-xs font-bold text-slate-500 mb-1">{svgT.winRate}</div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{t.vsa.validity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  );
};
