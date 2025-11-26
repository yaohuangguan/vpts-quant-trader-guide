import React from 'react';
import { Card, Tag } from './Card';
import { Brain, Zap, Activity, Scale, AlertTriangle, Fingerprint, RefreshCcw, TrendingDown } from 'lucide-react';
import { Lang } from '../types';

export const BrainStructure: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '大脑的三重结构与决策冲突' : 'The Triune Brain & Decision Conflict',
    hijack: lang === 'zh' ? '杏仁核劫持 (Amygdala Hijack)' : 'Amygdala Hijack',
    pfc: lang === 'zh' ? '前额叶 (理智)' : 'PFC (Logic)',
    limbic: lang === 'zh' ? '边缘系统 (本能)' : 'Limbic (Instinct)',
    hpa: lang === 'zh' ? 'HPA轴激活 (战斗或逃跑)' : 'HPA Axis (Fight or Flight)',
    desc_hijack: lang === 'zh' ? '当遭遇亏损威胁时，血液从前额叶流向肌肉。理智脑“断电”，本能脑接管。' : 'Blood flows away from PFC to muscles during threat. Logic shuts down, instinct takes over.',
    symptoms: lang === 'zh' ? '症状：冻结 (不敢止损) 或 恐慌 (底部割肉)' : 'Symptoms: Freezing (No stop-loss) or Panic Selling',
  };

  return (
    <Card highlightColor="red" className="relative overflow-hidden">
       <style>{`
        @keyframes pulse-amygdala {
            0% { transform: scale(1); fill: #ef4444; opacity: 0.5; }
            50% { transform: scale(1.5); fill: #b91c1c; opacity: 1; }
            100% { transform: scale(1); fill: #ef4444; opacity: 0.5; }
        }
        @keyframes brain-shutdown {
            0% { fill: #3b82f6; opacity: 1; }
            100% { fill: #94a3b8; opacity: 0.3; }
        }
        @keyframes blood-flow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
        }
        .anim-amygdala { animation: pulse-amygdala 1s infinite; }
        .anim-pfc { animation: brain-shutdown 3s forwards; }
        .anim-flow { stroke-dasharray: 100; animation: blood-flow 2s linear infinite; }
       `}</style>

       <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                <Brain size={18} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
       </div>

       <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Brain Visualization */}
            <div className="w-full md:w-1/2 h-48 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative p-4 flex items-center justify-center">
                <svg viewBox="0 0 200 150" className="w-full h-full">
                    {/* Brain Outline */}
                    <path d="M40,120 C20,100 20,40 60,20 C100,0 160,0 180,40 C200,80 180,120 140,130 C120,135 60,130 40,120" fill="none" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
                    
                    {/* PFC (Frontal Lobe) - Logic */}
                    <path d="M40,120 C20,100 20,40 60,20 C80,40 60,100 40,120" className="anim-pfc" />
                    <text x="30" y="70" fontSize="11" className="fill-slate-500 font-bold">{t.pfc}</text>

                    {/* Limbic System - Instinct */}
                    <circle cx="110" cy="80" r="15" className="fill-red-200 dark:fill-red-900/50" />
                    {/* Amygdala */}
                    <circle cx="110" cy="80" r="5" className="anim-amygdala" />
                    <text x="130" y="80" fontSize="11" className="fill-red-500 font-bold">{t.hijack}</text>

                    {/* HPA Axis Flow (Away from PFC) */}
                    <path d="M60,60 Q80,60 110,80" fill="none" className="stroke-red-500 anim-flow" strokeWidth="2" />
                    <path d="M110,80 Q140,100 160,140" fill="none" className="stroke-red-500 anim-flow" strokeWidth="2" />
                </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded">
                    <h5 className="font-bold text-red-700 dark:text-red-300 text-lg mb-1">{t.hpa}</h5>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {t.desc_hijack}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-base font-bold text-slate-600 dark:text-slate-400">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <span>{t.symptoms}</span>
                </div>
            </div>
       </div>
    </Card>
  );
};

export const DopamineLoop: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '多巴胺回路与贪婪成瘾' : 'Dopamine Loop & Greed',
    rpe: lang === 'zh' ? '奖赏预测误差 (RPE)' : 'Reward Prediction Error',
    trap: lang === 'zh' ? '随机强化陷阱' : 'Random Reinforcement Trap',
    fomo: lang === 'zh' ? '错失恐惧症 (FOMO)' : 'FOMO',
    desc_rpe: lang === 'zh' ? '预期之外的盈利会让伏隔核分泌大量多巴胺。' : 'Unexpected gains spike dopamine in Nucleus Accumbens.',
    desc_trap: lang === 'zh' ? '新手重仓盈利 = 错误的生理奖赏。大脑会误以为“重仓=高回报”，形成赌博回路。' : 'Big win on bad risk = False Reward. Brain wires "High Risk = High Reward" (Gambling logic).',
    mirror: lang === 'zh' ? '镜像神经元激活：看到别人赚钱引发“社会性疼痛”。' : 'Mirror Neurons: Seeing others win triggers "Social Pain".',
  };

  return (
    <Card highlightColor="purple" className="relative group">
        <style>{`
            @keyframes dopamine-flow {
                0% { transform: translateY(0) scale(1); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
            }
            .particle-dopamine { animation: dopamine-flow 2s ease-out infinite; }
        `}</style>
        
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-lg text-purple-600 dark:text-purple-300">
                <Zap size={18} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Fingerprint size={100} />
                </div>
                
                <h5 className="font-bold text-purple-700 dark:text-purple-300 text-base mb-3 flex items-center gap-2">
                    <RefreshCcw size={16} /> {t.trap}
                </h5>
                
                <div className="flex justify-around items-end h-24 relative z-10">
                    {/* Trigger */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-sm text-slate-500 font-bold">Trigger</span>
                    </div>
                    {/* Action */}
                    <div className="flex flex-col items-center gap-1">
                         <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                         <span className="text-sm text-slate-500 font-bold">Trade</span>
                    </div>
                    {/* Reward (Random) */}
                    <div className="flex flex-col items-center gap-1 relative">
                         <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold animate-bounce">3</div>
                         <span className="text-sm text-slate-500 font-bold">$$$</span>
                         {/* Dopamine Particles */}
                         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full particle-dopamine" style={{animationDelay: '0s'}}></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full particle-dopamine" style={{animationDelay: '0.5s', left: '10px'}}></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full particle-dopamine" style={{animationDelay: '1s', left: '-10px'}}></div>
                         </div>
                    </div>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 font-medium mt-3 text-center">{t.desc_trap}</p>
            </div>

            <div className="space-y-3">
                <div className="p-3 rounded bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/50">
                    <h5 className="font-bold text-lg text-purple-700 dark:text-purple-300 mb-1">{t.rpe}</h5>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{t.desc_rpe}</p>
                </div>
                 <div className="p-3 rounded bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
                    <h5 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-1">{t.fomo}</h5>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{t.mirror}</p>
                </div>
            </div>
       </div>
    </Card>
  );
};

export const BehavioralBiases: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '行为金融学的核心偏差' : 'Core Biases in Behavioral Finance',
    lossAversion: lang === 'zh' ? '损失厌恶 (Loss Aversion)' : 'Loss Aversion',
    prospect: lang === 'zh' ? '前景理论：亏损的痛苦 = 2.5倍 盈利的快乐' : 'Prospect Theory: Pain of Loss = 2.5x Joy of Gain',
    actions: {
        profit: lang === 'zh' ? '浮盈状态' : 'In Profit',
        profit_act: lang === 'zh' ? '落袋为安 (拿不住)' : 'Sell Too Soon',
        loss: lang === 'zh' ? '浮亏状态' : 'In Loss',
        loss_act: lang === 'zh' ? '死扛 (幻想回本)' : 'Hold / Average Down',
    },
    sunk: lang === 'zh' ? '沉没成本谬误' : 'Sunk Cost Fallacy',
    recency: lang === 'zh' ? '近因效应' : 'Recency Bias',
    desc_sunk: lang === 'zh' ? '为了证明自己是“对”的，不愿离场，甚至加仓摊平。' : 'Refusing to exit to prove oneself "right", adding to losers.',
    desc_recency: lang === 'zh' ? '连胜后过度自信（加大仓位），连败后习得性无助（不敢开仓）。' : 'Overconfidence after wins, learned helplessness after losses.',
  };

  // Logic for color swapping
  const isZh = lang === 'zh';
  // If Chinese: Profit = Red, Loss = Green
  // If English: Profit = Green, Loss = Red
  const profitColorText = isZh ? 'text-red-500' : 'text-green-500';
  const profitColorBg = isZh ? 'bg-red-500' : 'bg-green-500';
  const profitColorBgSoft = isZh ? 'bg-red-50 dark:bg-red-900/10' : 'bg-green-50 dark:bg-green-900/10';
  const profitColorBorder = isZh ? 'border-red-200 dark:border-red-900/30' : 'border-green-200 dark:border-green-900/30';
  const profitColorTextDark = isZh ? 'text-red-700 dark:text-red-400' : 'text-green-700 dark:text-green-400';

  const lossColorText = isZh ? 'text-green-500' : 'text-red-500';
  const lossColorBg = isZh ? 'bg-green-500' : 'bg-red-500';
  const lossColorBgSoft = isZh ? 'bg-green-50 dark:bg-green-900/10' : 'bg-red-50 dark:bg-red-900/10';
  const lossColorBorder = isZh ? 'border-green-200 dark:border-green-900/30' : 'border-red-200 dark:border-red-900/30';
  const lossColorTextDark = isZh ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400';
  const lossShadow = isZh ? 'shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'shadow-[0_0_15px_rgba(239,68,68,0.5)]';

  return (
    <Card highlightColor="amber" className="relative">
       <div className="flex items-center gap-2 mb-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-lg text-amber-600 dark:text-amber-300">
                <TrendingDown size={18} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
       </div>

       <div className="space-y-6">
            {/* Loss Aversion Visual */}
            <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <h5 className="font-bold text-lg text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                    <Scale size={18} /> {t.lossAversion}
                </h5>
                <div className="flex items-end justify-center gap-8 h-32 pb-4 border-b border-slate-200 dark:border-slate-700 relative">
                    {/* Gain Bar */}
                    <div className="flex flex-col items-center gap-2 w-16 group">
                        <span className={`text-sm font-bold ${profitColorText}`}>+$100</span>
                        <div className={`w-full ${profitColorBg} rounded-t transition-all duration-500 h-12 opacity-80 group-hover:opacity-100`}></div>
                        <span className="text-xs text-slate-500 font-bold">Joy</span>
                    </div>
                    
                    {/* Axis */}
                    <div className="absolute bottom-4 left-0 right-0 h-[1px] bg-slate-300 dark:bg-slate-600"></div>

                    {/* Loss Bar (2.5x bigger impact visually) */}
                    <div className="flex flex-col items-center gap-2 w-16 group">
                        <span className={`text-sm font-bold ${lossColorText}`}>-$100</span>
                        <div className={`w-full ${lossColorBg} rounded-t transition-all duration-500 h-32 opacity-80 group-hover:opacity-100 ${lossShadow}`}></div>
                        <span className="text-xs text-slate-500 font-bold">Pain (2.5x)</span>
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                     <div className={`p-2 ${profitColorBgSoft} rounded text-center border ${profitColorBorder}`}>
                        <div className="text-slate-500 font-bold mb-1">{t.actions.profit}</div>
                        <div className={`font-bold ${profitColorTextDark}`}>{t.actions.profit_act}</div>
                     </div>
                     <div className={`p-2 ${lossColorBgSoft} rounded text-center border ${lossColorBorder}`}>
                        <div className="text-slate-500 font-bold mb-1">{t.actions.loss}</div>
                        <div className={`font-bold ${lossColorTextDark}`}>{t.actions.loss_act}</div>
                     </div>
                </div>
            </div>

            {/* Other Biases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                    <h5 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1">{t.sunk}</h5>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{t.desc_sunk}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                    <h5 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1">{t.recency}</h5>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{t.desc_recency}</p>
                </div>
            </div>
       </div>
    </Card>
  );
};

export const NeuroScienceSection: React.FC<{ lang: Lang }> = ({ lang }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BrainStructure lang={lang} />
                <DopamineLoop lang={lang} />
            </div>
            <BehavioralBiases lang={lang} />
        </div>
    );
};