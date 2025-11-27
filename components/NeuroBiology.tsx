
import React from 'react';
import { Card } from './Card';
import { Scale, Zap, GitBranch, Snowflake, Brain, Eye, Lock, ArrowDown, ArrowUp, ToggleRight, Power } from 'lucide-react';
import { Lang } from '../types';

export const NeuroBiology: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '惜售心理的神经生物学机制' : 'Neurobiology of Reluctance to Sell',
    subtitle: lang === 'zh' ? '“行”的生理障碍' : 'Physiological Barriers to "Action"',
    
    endowment: {
        title: lang === 'zh' ? '禀赋效应 (Endowment Effect)' : 'Endowment Effect',
        sub: lang === 'zh' ? '所有权的认知扭曲' : 'Cognitive Distortion of Ownership',
        desc: lang === 'zh' ? '一旦拥有某项资产，大脑会产生“虚拟所有权”，不仅评估价值高于市场公允价，还会选择性忽略风险。' : 'Once owned, brain creates "virtual ownership", valuing it higher than market and ignoring risks.',
        loss: lang === 'zh' ? '损失厌恶延伸：失去的痛苦 = 2.5倍 得到的快乐' : 'Loss Aversion: Pain of Loss = 2.5x Joy of Gain',
        visual: lang === 'zh' ? '估值天平失衡' : 'Valuation Imbalance'
    },
    dopamine: {
        title: lang === 'zh' ? '多巴胺预期回路 (Dopamine RPE)' : 'Dopamine Prediction Error',
        sub: lang === 'zh' ? 'FOMO的核心本质：预期成瘾' : 'Core of FOMO: Expectation Addiction',
        desc: lang === 'zh' ? '多巴胺是“预期”分子而非快乐分子。持仓时的“不确定性”让大脑沉浸在高浓度多巴胺浴中。' : 'Dopamine is for "Expectation" not Joy. Uncertainty of holding bathes brain in dopamine.',
        crash: lang === 'zh' ? '卖出 = 多巴胺崩塌 (戒断反应)' : 'Selling = Dopamine Crash (Withdrawal)',
        withdraw: lang === 'zh' ? '不确定性 = 快感' : 'Uncertainty = Pleasure'
    },
    regret: {
        title: lang === 'zh' ? '后悔厌恶 (Regret Aversion)' : 'Regret Aversion',
        sub: lang === 'zh' ? '反事实思维的折磨' : 'Torture of Counterfactual Thinking',
        desc: lang === 'zh' ? '大脑自动模拟平行宇宙：卖飞(踏空)的痛苦 > 持仓下跌的痛苦。' : 'Brain simulates parallel universes: Pain of selling too early > Pain of holding loss.',
        status: lang === 'zh' ? '现状偏差：不操作以避免责任' : 'Status Quo Bias: Inaction'
    },
    amygdala: {
        title: lang === 'zh' ? '杏仁核劫持 (Amygdala Hijack)' : 'Amygdala Hijack',
        sub: lang === 'zh' ? '执行瞬间的冻结反应' : 'Freeze Response at Execution',
        desc: lang === 'zh' ? '面对复杂决策冲突（卖还是不卖？），前额叶（理智）下线，杏仁核（本能）接管，触发“冻结”反应。' : 'Complex conflict shuts down PFC (Logic). Amygdala (Instinct) takes over, triggering "Freeze".',
        system: lang === 'zh' ? '系统过载保护' : 'System Overload'
    }
  };

  // SVG Text Localization
  const svgT = {
      endowment: {
          stock: lang === 'zh' ? '我的持仓' : 'My Stock',
          cash: lang === 'zh' ? '现金' : 'Cash'
      },
      dopamine: {
          uncertainty: lang === 'zh' ? '不确定性' : 'Uncertainty',
          high: lang === 'zh' ? '(多巴胺激增)' : '(High Dopamine)',
          sold: lang === 'zh' ? '卖出' : 'Sold',
          crash: lang === 'zh' ? '(崩塌)' : '(Crash)'
      },
      regret: {
          ifSell: lang === 'zh' ? '若卖出...' : 'If Sell...',
          regret: lang === 'zh' ? '后悔!' : 'Regret!',
          missed: lang === 'zh' ? '(踏空)' : '(Missed Gains)',
          ifHold: lang === 'zh' ? '若持有...' : 'If Hold...',
          pain: lang === 'zh' ? '痛苦!' : 'Pain!',
          loss: lang === 'zh' ? '(浮亏)' : '(Loss)'
      },
      amygdala: {
          logic: lang === 'zh' ? '理智 (前额叶)' : 'LOGIC (PFC)',
          off: lang === 'zh' ? '断开' : 'OFF',
          instinct: lang === 'zh' ? '本能 (杏仁核)' : 'INSTINCT (Amygdala)',
          active: lang === 'zh' ? '接管' : 'ACTIVE'
      }
  };

  return (
    <div className="space-y-6">
        <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 mb-2 flex items-center justify-center gap-3">
                <Brain className="text-purple-600 dark:text-purple-400" size={32} />
                {t.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-mono uppercase tracking-widest text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Endowment Effect - Balance Scale */}
            <Card highlightColor="blue" className="relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded text-blue-600 dark:text-blue-300">
                        <Lock size={20} />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.endowment.title}</h4>
                </div>
                <div className="text-sm font-bold text-slate-400 mb-4 uppercase">{t.endowment.sub}</div>
                
                {/* Visual: Balance Scale */}
                <div className="h-40 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 relative mb-4 p-2 flex justify-center items-end">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                        {/* Base */}
                        <rect x="95" y="80" width="10" height="20" className="fill-slate-400" />
                        <rect x="70" y="95" width="60" height="5" className="fill-slate-400" />
                        
                        {/* Beam (Tilted heavily to left) */}
                        <line x1="20" y1="40" x2="180" y2="20" className="stroke-slate-500" strokeWidth="3" />
                        <circle cx="100" cy="30" r="3" className="fill-slate-600" />

                        {/* Left Pan (Heavy - My Stock) */}
                        <line x1="20" y1="40" x2="20" y2="70" className="stroke-slate-400" />
                        <path d="M5,70 L35,70 L20,80 Z" className="fill-slate-400" />
                        <circle cx="20" cy="65" r="15" className="fill-blue-500" />
                        <text x="20" y="68" textAnchor="middle" fontSize="10" className="fill-white font-bold">{svgT.endowment.stock}</text>

                        {/* Right Pan (Light - Cash) */}
                        <line x1="180" y1="20" x2="180" y2="50" className="stroke-slate-400" />
                        <path d="M165,50 L195,50 L180,60 Z" className="fill-slate-400" />
                        <rect x="170" y="40" width="20" height="12" className="fill-green-500" />
                        <text x="180" y="49" textAnchor="middle" fontSize="10" className="fill-white font-bold">{svgT.endowment.cash}</text>
                        
                        {/* Inequality Sign */}
                        <text x="100" y="60" textAnchor="middle" fontSize="20" className="fill-slate-400 font-bold">&gt;</text>
                    </svg>
                </div>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {t.endowment.desc}
                </p>
            </Card>

            {/* 2. Dopamine RPE - Anticipation vs Reality Chart */}
            <Card highlightColor="purple" className="relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded text-purple-600 dark:text-purple-300">
                        <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.dopamine.title}</h4>
                </div>
                <div className="text-sm font-bold text-slate-400 mb-4 uppercase">{t.dopamine.sub}</div>

                {/* Visual: Dopamine Curve */}
                <div className="h-40 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 relative mb-4 p-4 overflow-hidden">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                        {/* Axes */}
                        <line x1="10" y1="90" x2="190" y2="90" className="stroke-slate-300" strokeWidth="1" />
                        <line x1="10" y1="10" x2="10" y2="90" className="stroke-slate-300" strokeWidth="1" />
                        
                        {/* Curve */}
                        <path d="M10,80 Q50,20 100,20" fill="none" className="stroke-purple-500" strokeWidth="3" />
                        <line x1="100" y1="20" x2="100" y2="90" className="stroke-slate-400" strokeDasharray="3" />
                        <path d="M100,20 L110,85 L190,85" fill="none" className="stroke-red-500" strokeWidth="3" />

                        {/* Labels */}
                        <text x="50" y="40" fontSize="10" className="fill-purple-600 font-bold">{svgT.dopamine.uncertainty}</text>
                        <text x="50" y="52" fontSize="9" className="fill-purple-600 font-bold">{svgT.dopamine.high}</text>
                        
                        <text x="145" y="70" textAnchor="middle" fontSize="10" className="fill-red-500 font-bold">{svgT.dopamine.sold}</text>
                        <text x="145" y="82" textAnchor="middle" fontSize="9" className="fill-red-500 font-bold">{svgT.dopamine.crash}</text>
                    </svg>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {t.dopamine.desc}
                </p>
            </Card>

            {/* 3. Regret Aversion - Parallel Universes */}
            <Card highlightColor="amber" className="relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded text-amber-600 dark:text-amber-300">
                        <GitBranch size={20} />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.regret.title}</h4>
                </div>
                <div className="text-sm font-bold text-slate-400 mb-4 uppercase">{t.regret.sub}</div>

                {/* Visual: Split Screen Scenarios */}
                <div className="h-40 rounded border border-slate-200 dark:border-slate-700 relative mb-4 flex overflow-hidden">
                    {/* Scenario A: Sell -> Price Up (Regret) */}
                    <div className="w-1/2 bg-slate-100 dark:bg-slate-800 p-2 flex flex-col items-center justify-center border-r border-slate-300 dark:border-slate-600">
                        <div className="text-xs font-bold text-slate-500 mb-2">{svgT.regret.ifSell}</div>
                        <ArrowUp size={32} className="text-red-500 animate-bounce" />
                        <div className="text-sm font-bold text-red-500 mt-1">{svgT.regret.regret}</div>
                        <div className="text-[10px] text-slate-400">{svgT.regret.missed}</div>
                    </div>
                    
                    {/* Scenario B: Hold -> Price Down (Pain) */}
                    <div className="w-1/2 bg-slate-100 dark:bg-slate-800 p-2 flex flex-col items-center justify-center">
                        <div className="text-xs font-bold text-slate-500 mb-2">{svgT.regret.ifHold}</div>
                        <ArrowDown size={32} className="text-green-500 animate-bounce" />
                        <div className="text-sm font-bold text-green-500 mt-1">{svgT.regret.pain}</div>
                        <div className="text-[10px] text-slate-400">{svgT.regret.loss}</div>
                    </div>

                    {/* Paralysis Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 border border-slate-300 rounded-full p-2 shadow-lg">
                        <div className="text-2xl">😱</div>
                    </div>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {t.regret.desc}
                </p>
            </Card>

            {/* 4. Amygdala Hijack - Control Panel */}
            <Card highlightColor="red" className="relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded text-red-600 dark:text-red-300">
                        <Snowflake size={20} />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.amygdala.title}</h4>
                </div>
                <div className="text-sm font-bold text-slate-400 mb-4 uppercase">{t.amygdala.sub}</div>

                {/* Visual: System Control Panel */}
                <div className="h-40 bg-slate-900 rounded border border-slate-700 relative mb-4 p-4 flex flex-col justify-center gap-4">
                    {/* Logic Switch - OFF */}
                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-700 opacity-50">
                        <div className="flex items-center gap-2">
                            <Brain size={20} className="text-slate-400" />
                            <span className="text-sm font-bold text-slate-400">{svgT.amygdala.logic}</span>
                        </div>
                        <div className="flex items-center gap-1 text-red-500 text-sm font-bold">
                            <Power size={14} /> {svgT.amygdala.off}
                        </div>
                    </div>

                    {/* Fear Switch - OVERRIDE */}
                    <div className="flex items-center justify-between bg-red-900/30 p-3 rounded border border-red-500 animate-pulse">
                        <div className="flex items-center gap-2">
                            <Eye size={20} className="text-red-500" />
                            <span className="text-sm font-bold text-red-500">{svgT.amygdala.instinct}</span>
                        </div>
                        <div className="flex items-center gap-1 text-red-500 text-sm font-bold">
                            <AlertTriangle size={14} /> {svgT.amygdala.active}
                        </div>
                    </div>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {t.amygdala.desc}
                </p>
            </Card>
        </div>
    </div>
  );
};

function AlertTriangle({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    )
}
