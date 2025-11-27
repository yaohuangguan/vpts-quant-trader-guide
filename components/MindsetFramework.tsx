import React from 'react';
import { Card } from './Card';
import { Dice5, ShieldBan, Activity, ListChecks, PlayCircle, Lock, BrainCircuit, Scale, Box, Timer, Snowflake, Dumbbell } from 'lucide-react';
import { Lang } from '../types';

export const ProbabilisticThinking: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '概率思维：赌场庄家范式' : 'Probabilistic Thinking: The Casino Paradigm',
    douglas: lang === 'zh' ? '《交易心理分析》 Mark Douglas' : 'Trading in the Zone - Mark Douglas',
    truth: lang === 'zh' ? '五大基本真理' : '5 Fundamental Truths',
    truths: [
        lang === 'zh' ? '任何事情都可能发生' : 'Anything can happen',
        lang === 'zh' ? '无需预测也能赚钱' : 'No need to predict to win',
        lang === 'zh' ? '赢输分布是随机的' : 'Random win/loss distribution',
        lang === 'zh' ? '优势只是概率更高' : 'Edge is just higher probability',
        lang === 'zh' ? '每刻都是独一无二的' : 'Every moment is unique'
    ],
    house_edge: lang === 'zh' ? '庄家优势 (Edge)' : 'House Edge',
    player: lang === 'zh' ? '玩家结果' : 'Player Result',
    casino_logic: lang === 'zh' ? '赌场不关心单把输赢，只关心大数法则' : 'Casinos ignore single hands, focus on Law of Large Numbers',
    profit: lang === 'zh' ? '净利润' : 'Net Profit'
  };

  // Create a grid of "Trade Results" visualization
  // 60% win rate simulation
  const results = [
      'W', 'L', 'L', 'W', 'W', 'W', 'L', 'W', 'L', 'W', 
      'W', 'W', 'L', 'W', 'W', 'L', 'W', 'L', 'W', 'W'
  ];

  return (
    <Card highlightColor="indigo" className="relative group">
        <style>{`
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .anim-result { animation: fade-in-up 0.5s ease-out forwards; }
        `}</style>
        
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-300">
                <Dice5 size={18} />
            </div>
            <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t.douglas}</div>
            </div>
       </div>

       <div className="flex flex-col lg:flex-row gap-8">
            {/* Visual: Casino Edge Grid */}
            <div className="w-full lg:w-1/2 bg-slate-900 rounded-xl border border-slate-800 p-5 flex flex-col shadow-inner">
                <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-mono text-xs uppercase">{t.house_edge}</span>
                    <span className="text-green-400 font-mono text-sm font-bold">Win Rate: 60%</span>
                </div>
                
                <div className="grid grid-cols-5 gap-2 mb-4">
                    {results.map((res, i) => (
                        <div 
                            key={i} 
                            className={`h-8 rounded flex items-center justify-center font-bold text-xs anim-result shadow-sm
                                ${res === 'W' 
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                                }
                            `}
                            style={{animationDelay: `${i * 0.1}s`}}
                        >
                            {res}
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-2 border-t border-slate-800 flex justify-between items-center">
                    <div className="text-xs text-slate-500 italic">Sequence is random</div>
                    <div className="bg-indigo-600 px-3 py-1 rounded text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                        {t.profit} +$$$
                    </div>
                </div>
                <div className="mt-2 text-[10px] text-slate-500 text-center">
                    {t.casino_logic}
                </div>
            </div>

            {/* Truths List */}
            <div className="w-full lg:w-1/2 space-y-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                    <h5 className="font-bold text-base text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                        <Scale size={16} /> {t.truth}
                    </h5>
                    <ul className="space-y-2.5">
                        {t.truths.map((truth, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-[10px] font-bold text-indigo-500 shrink-0 mt-0.5">{i+1}</span>
                                <span className="leading-snug">{truth}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
       </div>
    </Card>
  );
};

export const FOMOTrap: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '错失恐惧症 (FOMO) 的解剖与阻断' : 'Anatomy & Blocking of FOMO',
        pathology: lang === 'zh' ? '病理：原始匮乏恐惧' : 'Pathology: Scarcity Fear',
        path_desc: lang === 'zh' ? '边缘系统误将K线拉升识别为“猎物逃跑”。社交媒体晒单激化焦虑。' : 'Limbic system mistakes price surge for "prey escaping". Social media intensifies anxiety.',
        block: lang === 'zh' ? '阻断方案' : 'Blocking Solutions',
        timer: lang === 'zh' ? '10分钟强制冷却' : '10-Min Cool-down',
        timer_desc: lang === 'zh' ? '强迫离开屏幕。多巴胺脉冲通常在几分钟内消退，理性脑重新上线。' : 'Force screen exit. Dopamine pulse fades in mins, logic reboots.',
        list: lang === 'zh' ? '物理清单验证' : 'Physical Checklist',
        list_desc: lang === 'zh' ? '来不及勾选 = 这笔交易不属于你。宁可错过，绝不错做。' : 'Too fast to check? = Not your trade. Better miss than err.',
        belt: lang === 'zh' ? '认知重构：传送带' : 'Reframing: Conveyor Belt',
        belt_desc: lang === 'zh' ? '市场是永不停止的传送带。错过这个，还有下一个。缺的不是机会，是本金。' : 'Market is an endless conveyor belt. Missed one? Next is coming. Capital is scarce, not opps.'
    };

    return (
        <Card highlightColor="amber" className="relative overflow-hidden">
            <style>{`
                @keyframes belt-move {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .conveyor-belt {
                    animation: belt-move 8s linear infinite;
                }
            `}</style>

            <div className="flex items-center gap-2 mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-lg text-amber-600 dark:text-amber-300">
                    <Activity size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pathology & Cognitive Reframing (Visual) */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4">
                    <h5 className="font-bold text-amber-700 dark:text-amber-400 text-lg mb-2">{t.belt}</h5>
                    <div className="relative h-20 overflow-hidden bg-slate-200 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 mb-2">
                        {/* Conveyor Belt Animation */}
                        <div className="flex items-center h-full absolute left-0 conveyor-belt w-[200%]">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="w-16 h-12 mx-4 bg-white dark:bg-slate-700 border-2 border-amber-400 rounded flex items-center justify-center shadow-sm">
                                    <Box className="text-amber-500" size={20} />
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic font-medium">{t.belt_desc}</p>
                </div>

                {/* Blocking Solutions */}
                <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full h-fit text-blue-600 dark:text-blue-400">
                            <Timer size={18} />
                        </div>
                        <div>
                            <div className="font-bold text-lg text-slate-800 dark:text-slate-200">{t.timer}</div>
                            <div className="text-base text-slate-600 dark:text-slate-400 leading-tight mt-1 font-medium">{t.timer_desc}</div>
                        </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-white dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full h-fit text-green-600 dark:text-green-400">
                            <ListChecks size={18} />
                        </div>
                        <div>
                            <div className="font-bold text-lg text-slate-800 dark:text-slate-200">{t.list}</div>
                            <div className="text-base text-slate-600 dark:text-slate-400 leading-tight mt-1 font-medium">{t.list_desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export const RevengeBreaker: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '报复性交易 (Revenge) 的熔断机制' : 'Revenge Trading Circuit Breaker',
        pathology: lang === 'zh' ? '病理：多巴胺戒断 & 痛苦逃避' : 'Pathology: Dopamine Withdrawal',
        tilt: lang === 'zh' ? '上头 (Tilt) 状态' : 'Tilt State',
        tilt_desc: lang === 'zh' ? '智商下降，风险偏好极度上升。大脑急需盈利来修复自尊。' : 'IQ drops, risk appetite spikes. Brain craves win to fix ego.',
        breaker: lang === 'zh' ? '硬性熔断方案' : 'Hard Circuit Breakers',
        lock: lang === 'zh' ? '24小时禁闭令' : '24h Lockout',
        lock_trigger: lang === 'zh' ? '触发：单日亏损X% / 连亏3笔 / 咒骂摔打' : 'Trigger: Loss X% / 3 Losses / Rage',
        reset: lang === 'zh' ? '生理阻断' : 'Physio Reset',
        reset_desc: lang === 'zh' ? '冷水洗脸 (潜水反射) / 剧烈运动代谢皮质醇' : 'Cold Water (Diving Reflex) / Intense Cardio',
    };

    return (
        <Card highlightColor="red" className="relative">
            <style>{`
                 @keyframes tilt-shake {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    50% { transform: rotate(5deg); }
                    75% { transform: rotate(-5deg); }
                    100% { transform: rotate(0deg); }
                }
                .tilt-meter { animation: tilt-shake 0.5s ease-in-out infinite; }
            `}</style>

            <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                    <ShieldBan size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Pathology Visual: The Tilt Meter */}
                 <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded border border-red-100 dark:border-red-900/30 flex flex-col items-center justify-center">
                    <div className="text-sm font-bold text-red-800 dark:text-red-300 mb-2 uppercase tracking-wider">{t.tilt}</div>
                    
                    <div className="relative w-full h-4 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 w-full"></div>
                        <div className="absolute top-0 bottom-0 w-1 bg-white border border-black transform translate-x-[90%] left-0 tilt-meter" style={{left: '80%'}}></div>
                    </div>
                    <div className="flex justify-between w-full text-[10px] font-bold text-slate-500 uppercase">
                        <span>Rational</span>
                        <span>Emotional</span>
                    </div>
                    <p className="text-base font-medium text-center mt-3 text-red-700 dark:text-red-400 leading-tight">{t.tilt_desc}</p>
                 </div>

                 {/* Solutions */}
                 <div className="space-y-3">
                    <div className="p-3 bg-slate-800 text-white rounded shadow-lg flex items-center gap-4 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-slate-700 opacity-20 transform rotate-12">
                            <Lock size={80} />
                        </div>
                        <Lock size={24} className="text-red-400 shrink-0" />
                        <div>
                            <div className="font-bold text-lg text-red-400">{t.lock}</div>
                            <div className="text-sm text-slate-300 mt-1">{t.lock_trigger}</div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800 text-center">
                            <Snowflake size={16} className="mx-auto text-blue-500 mb-1" />
                            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">Cold Water</div>
                        </div>
                        <div className="flex-1 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-800 text-center">
                            <Dumbbell size={16} className="mx-auto text-green-500 mb-1" />
                            <div className="text-xs font-bold text-slate-600 dark:text-slate-300">Cardio</div>
                        </div>
                    </div>
                    <div className="text-xs text-center text-slate-500 italic">{t.reset_desc}</div>
                 </div>
            </div>
        </Card>
    );
}

export const AnalysisParalysis: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '犹豫不决与分析瘫痪' : 'Paralysis & Analysis Paralysis',
        pathology: lang === 'zh' ? '病理：完美主义陷阱' : 'Pathology: Perfectionism Trap',
        path_desc: lang === 'zh' ? '试图寻找“必胜”形态，不敢进场。' : 'Seeking "guaranteed" wins, afraid to enter.',
        therapy: lang === 'zh' ? '解药：CBT 暴露疗法' : 'Cure: CBT Exposure Therapy',
        step1: lang === 'zh' ? '微仓位' : 'Micro Pos',
        step1_d: lang === 'zh' ? '100股 / 1手' : '100 Shares / 1 Lot',
        step2: lang === 'zh' ? '强制开仓' : 'Force Open',
        step2_d: lang === 'zh' ? '无关痛痒' : 'Painless',
        step3: lang === 'zh' ? '神经脱敏' : 'Desensitize',
        step3_d: lang === 'zh' ? '重建连接' : 'Rewire',
        desc: lang === 'zh' ? '通过执行极小、无风险的交易（1手），训练大脑对“扣动扳机”动作脱敏，重建执行回路。' : 'Train the brain to desensitize "trigger pulling" via tiny (100 shares), risk-free trades.'
    };

    return (
        <Card highlightColor="green" className="flex flex-col justify-between h-full">
            <div>
                 <div className="flex items-center gap-2 mb-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-lg text-green-600 dark:text-green-300">
                        <PlayCircle size={18} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
                </div>
                
                <div className="flex items-center justify-between gap-2 relative mt-6 mb-6">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-sm text-slate-600 dark:text-slate-300 font-mono font-bold text-center leading-tight p-1">
                            {t.step1_d}
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{t.step1}</div>
                        </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="h-0.5 bg-slate-200 dark:bg-slate-700 w-8"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                         <div className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse">
                             <PlayCircle size={24} />
                         </div>
                         <div className="text-center">
                            <div className="text-sm font-bold text-green-600 dark:text-green-400">{t.step2}</div>
                            <div className="text-xs text-slate-400">{t.step2_d}</div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="h-0.5 bg-slate-200 dark:bg-slate-700 w-8"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-2 z-10 w-1/3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                            <BrainCircuit size={24} />
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{t.step3}</div>
                            <div className="text-xs text-slate-400">{t.step3_d}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/10 rounded text-base text-green-800 dark:text-green-200 border border-green-100 dark:border-green-800/30 leading-relaxed font-medium">
                <span className="font-bold">{t.therapy}：</span> {t.desc}
            </div>
        </Card>
    );
}

export const MindsetFramework: React.FC<{ lang: Lang }> = ({ lang }) => {
    return (
        <div className="space-y-6">
            <ProbabilisticThinking lang={lang} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FOMOTrap lang={lang} />
                        <RevengeBreaker lang={lang} />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <AnalysisParalysis lang={lang} />
                </div>
            </div>
        </div>
    );
};