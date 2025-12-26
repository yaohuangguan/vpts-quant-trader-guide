
import React from 'react';
import { Card } from './Card';
import { Lang } from '../types';
import { Sunrise, Sunset, Clock, AlertTriangle, BarChart2, Lock, Unlock, TrendingUp, TrendingDown, Search, MousePointerClick, XCircle, List, Info } from 'lucide-react';

const ScenarioCard = ({ title, signal, logic, action, color }: { title: string, signal: string, logic: string, action: string, color: string }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-${color}-400 transition-all shadow-sm`}>
        <div className={`flex items-center justify-between mb-2 pb-2 border-b border-slate-100 dark:border-slate-700`}>
            <h5 className={`font-bold text-sm text-${color}-600 dark:text-${color}-400`}>{title}</h5>
            <div className={`text-[10px] px-2 py-0.5 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 font-bold`}>
                {signal}
            </div>
        </div>
        <div className="space-y-2 text-xs">
            <div>
                <span className="text-slate-400 font-bold block mb-0.5">Logic (逻辑):</span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">{logic}</p>
            </div>
            <div>
                <span className="text-slate-400 font-bold block mb-0.5">Action (应对):</span>
                <div className={`bg-${color}-50 dark:bg-${color}-900/10 p-1.5 rounded text-${color}-800 dark:text-${color}-200 font-medium`}>
                    {action}
                </div>
            </div>
        </div>
    </div>
);

export const CallAuction: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '竞价系统：主力意图的“开卷考试”' : 'Call Auction: The "Open Book Exam" of MM Intent',
        intro: lang === 'zh' 
            ? '竞价是全天交易的“定调”。通过“最大成交量原则”撮合，主力在此阶段的挂单、撤单和最终定价，往往比盘中更能暴露真实意图。' 
            : 'Auction sets the tone. Through "Max Volume Matching", MM\'s orders, cancellations, and final pricing here often reveal more truth than intraday noise.',
        
        pre: {
            title: lang === 'zh' ? '盘前竞价 (Opening Call)' : 'Pre-market (Opening Call)',
            time: '09:15 - 09:25',
            phase1: {
                t: '09:15 - 09:20',
                status: lang === 'zh' ? '可撤单 (谎言期)' : 'Cancelable (Lying Phase)',
                desc: lang === 'zh' ? '主力常挂涨停板诱多，随后撤单。' : 'MM places Limit Up bait, then cancels.'
            },
            phase2: {
                t: '09:20 - 09:25',
                status: lang === 'zh' ? '不可撤 (真实期)' : 'Locked (Truth Phase)',
                desc: lang === 'zh' ? '所见即所得。真正的博弈。' : 'WYSIWYG. The real game.'
            },
            scenarios: [
                {
                    t: lang === 'zh' ? '诱多撤单' : 'Bait & Switch',
                    s: lang === 'zh' ? '9:19 涨停消失' : '9:19 Limit Up Vanishes',
                    l: lang === 'zh' ? '9:15-9:19挂巨量涨停单吸引跟风，9:19:50瞬间撤单，价格回落。这是典型的主力诱多，意在出货。' : 'Huge buy orders 9:15-9:19, cancelled at 9:19:50. Classic Trap to lure retail before dumping.',
                    a: lang === 'zh' ? '坚决回避，开盘大概率低开低走。' : 'Avoid. Likely opens low and drops.'
                },
                {
                    t: lang === 'zh' ? '最后突袭' : 'Last Minute Attack',
                    s: lang === 'zh' ? '9:24 抢筹' : '9:24 Snatch',
                    l: lang === 'zh' ? '9:20前平淡无奇，9:24突然出现大单将价格拉高。说明主力急于拿货，且不想让别人跟进。' : 'Flat before 9:20. Sudden spike at 9:24. MM wants chips urgently and quietly.',
                    a: lang === 'zh' ? '极强信号，可挂高价跟随。' : 'Strong Signal. Follow aggressively.'
                },
                {
                    t: lang === 'zh' ? '核按钮' : 'Nuclear Button',
                    s: lang === 'zh' ? '低开 + 巨量' : 'Gap Down + Huge Vol',
                    l: lang === 'zh' ? '9:25成交量巨大但价格大幅低开。说明昨晚有大利空或主力恐慌性出逃。' : 'Huge volume matched at deep gap down. News panic or MM fleeing at all costs.',
                    a: lang === 'zh' ? '即使反抽也是离场机会，勿抄底。' : 'Do not buy dip. Exit on bounce.'
                }
            ]
        },
        
        post: {
            title: lang === 'zh' ? '盘后竞价 (Closing Call)' : 'Post-market (Closing Call)',
            time: '14:57 - 15:00',
            phase: {
                t: '3 Minutes',
                status: lang === 'zh' ? '全封闭 / 不可撤' : 'Locked / Irrevocable',
                desc: lang === 'zh' ? '决定收盘价，影响次日情绪。' : 'Determines Close. Affects next day.'
            },
            scenarios: [
                {
                    t: lang === 'zh' ? '偷袭拉尾盘' : 'Sneak Attack (Pull-up)',
                    s: lang === 'zh' ? '直线上冲' : 'Straight Up',
                    l: lang === 'zh' ? '全天低迷，最后3分钟突然拉升。1. 做图(维护均线/K线) 2. 资金不足，以此节省成本。' : 'Weak all day, spikes in last 3m. 1. Painting the chart (Fixing MA/Candle). 2. MM weak, saving money.',
                    a: lang === 'zh' ? '非奸即盗。次日大概率低开，除非有突发利好。' : 'Suspicious. Likely gaps down tomorrow unless breaking news.'
                },
                {
                    t: lang === 'zh' ? '砸尾盘' : 'Smashing (Dive)',
                    s: lang === 'zh' ? '直线跳水' : 'Straight Down',
                    l: lang === 'zh' ? '1. 避险（周末/节前） 2. 刻意打压股价（吸筹前兆，制造恐慌）。需结合位置判断。' : '1. Risk off (Weekend). 2. Intentional suppression (Pre-accumulation). Context matters.',
                    a: lang === 'zh' ? '高位砸盘离场；低位砸盘可能是黄金坑。' : 'High level: Exit. Low level: Potential Gold Pit.'
                }
            ]
        },

        term: {
            title: lang === 'zh' ? '竞价核心数据详解' : 'Auction Data Decoder',
            visualTitle: lang === 'zh' ? '看懂竞价红绿柱 (实战)' : 'Decoding Auction Bars (Practical)',
            items: [
                { l: lang === 'zh' ? '匹配价 (Price)' : 'Price', v: '8.36', c: 'text-red-500', d: lang === 'zh' ? '当前撮合价。红字>昨收，绿字<昨收。' : 'Current match price.' },
                { l: lang === 'zh' ? '竞价量 (Match Vol)' : 'Match Vol', v: '17750', c: 'text-yellow-500', d: lang === 'zh' ? '【量柱高度】能成交的手数。量越大，主力意愿越强。' : '[Bar Height] Volume matched. Bigger = Stronger Intent.' },
                { l: lang === 'zh' ? '未匹配 (Unmatched)' : 'Unmatched', v: '351', c: 'text-blue-400', d: lang === 'zh' ? '【剩单】多空力量差。红色(买剩)助涨，绿色(卖剩)助跌。' : '[Surplus] Red=Buy Surplus (Bullish), Green=Sell Surplus (Bearish).' },
                { l: lang === 'zh' ? '竞昨比 (Ratio)' : 'Auc/Yest Ratio', v: '2.54%', c: 'text-purple-400', d: lang === 'zh' ? '竞价量/昨全天量。>1%活跃，>5%主力抢筹。' : 'Auc/Yest Vol. >5% = Aggressive MM.' },
            ],
            logic: {
                red: { 
                    t: lang === 'zh' ? '红柱：主力进攻' : 'Red Bar: Attack', 
                    d: lang === 'zh' ? '匹配价上涨 (红)。若红柱持续长高，且未匹配量为红色（买单过剩），是强烈做多信号。' : 'Price Up. Growing Red Bar + Red Unmatched = Strong Buy.' 
                },
                green: { 
                    t: lang === 'zh' ? '绿柱：主力出逃' : 'Green Bar: Flee', 
                    d: lang === 'zh' ? '匹配价下跌 (绿)。若绿柱持续长高，且未匹配量为绿色（卖单过剩），是核按钮信号。' : 'Price Down. Growing Green Bar + Green Unmatched = Panic Sell.' 
                }
            }
        }
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Intro */}
            <Card highlightColor="slate" className="bg-slate-50 dark:bg-slate-900 border-l-4 border-slate-500">
                <div className="flex items-start gap-4">
                    <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-full mt-1">
                        <Search size={24} className="text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-2">{t.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            {t.intro}
                        </p>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Opening Call (Sunrise) */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600 dark:text-amber-400">
                            <Sunrise size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{t.pre.title}</h3>
                        <span className="text-sm font-mono font-bold bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded text-amber-700 dark:text-amber-300 ml-auto">{t.pre.time}</span>
                    </div>

                    {/* Timeline Visual */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 relative overflow-hidden">
                        <div className="flex justify-between items-center relative z-10">
                            {/* Phase 1 */}
                            <div className="flex-1 text-center border-r border-slate-700 pr-2 opacity-70">
                                <div className="text-xs text-slate-400 mb-1">{t.pre.phase1.t}</div>
                                <div className="flex items-center justify-center gap-1 text-red-400 font-bold text-sm mb-1">
                                    <Unlock size={12} /> {t.pre.phase1.status}
                                </div>
                                <div className="text-[10px] text-slate-500 leading-tight">{t.pre.phase1.desc}</div>
                            </div>
                            
                            {/* Critical Point */}
                            <div className="w-16 flex flex-col items-center justify-center z-20">
                                <div className="w-0.5 h-full bg-red-500 absolute top-0 bottom-0 opacity-50"></div>
                                <div className="bg-red-600 text-white text-[10px] font-bold px-1 py-0.5 rounded z-10">09:20</div>
                            </div>

                            {/* Phase 2 */}
                            <div className="flex-1 text-center pl-2">
                                <div className="text-xs text-slate-400 mb-1">{t.pre.phase2.t}</div>
                                <div className="flex items-center justify-center gap-1 text-green-400 font-bold text-sm mb-1">
                                    <Lock size={12} /> {t.pre.phase2.status}
                                </div>
                                <div className="text-[10px] text-slate-500 leading-tight">{t.pre.phase2.desc}</div>
                            </div>
                        </div>
                    </div>

                    {/* Scenarios */}
                    <div className="space-y-3">
                        {t.pre.scenarios.map((s, i) => (
                            <ScenarioCard 
                                key={i}
                                title={s.t}
                                signal={s.s}
                                logic={s.l}
                                action={s.a}
                                color={i === 1 ? "red" : i === 0 ? "amber" : "green"}
                            />
                        ))}
                    </div>
                </div>

                {/* 2. Closing Call (Sunset) */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                            <Sunset size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{t.post.title}</h3>
                        <span className="text-sm font-mono font-bold bg-indigo-100 dark:bg-indigo-900/50 px-2 py-1 rounded text-indigo-700 dark:text-indigo-300 ml-auto">{t.post.time}</span>
                    </div>

                    {/* Timeline Visual */}
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-900/20 to-slate-900"></div>
                        <div className="text-center relative z-10">
                            <div className="flex items-center justify-center gap-2 text-indigo-400 mb-2">
                                <Clock size={20} className="animate-spin-slow" />
                                <span className="font-bold text-lg">Final 3 Mins</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white font-bold bg-indigo-600 px-3 py-1 rounded-full shadow-lg shadow-indigo-500/30">
                                <Lock size={14} /> {t.post.phase.status}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-2">{t.post.phase.desc}</div>
                        </div>
                    </div>

                    {/* Scenarios */}
                    <div className="space-y-3">
                        {t.post.scenarios.map((s, i) => (
                            <ScenarioCard 
                                key={i}
                                title={s.t}
                                signal={s.s}
                                logic={s.l}
                                action={s.a}
                                color={i === 0 ? "pink" : "blue"}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Terminology & Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                {/* Terminology Table */}
                <Card highlightColor="slate">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                            <List size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.term.title}</h4>
                    </div>
                    <div className="space-y-3">
                        {t.term.items.map((item, i) => (
                            <div key={i} className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0">
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{item.l}</div>
                                    <div className={`font-mono text-sm font-bold ${item.c || 'text-slate-800 dark:text-slate-200'}`}>{item.v}</div>
                                </div>
                                <div className="flex-1 text-xs text-slate-600 dark:text-slate-400 text-right leading-tight max-w-[60%]">
                                    {item.d}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Visual Logic - Redesigned to match Screenshot */}
                <Card highlightColor="blue">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-300">
                            <Info size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.term.visualTitle}</h4>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left: Simulation Chart */}
                        <div className="w-full md:w-1/2 bg-[#0f172a] rounded-lg border border-slate-700 p-4 relative font-mono text-xs">
                            {/* Chart Area */}
                            <div className="h-32 flex items-end justify-between gap-1 mb-2 border-b border-slate-700 pb-1 px-2 relative">
                                {/* Grid lines */}
                                <div className="absolute top-1/4 w-full h-px bg-slate-800/50"></div>
                                <div className="absolute top-2/4 w-full h-px bg-slate-800/50"></div>
                                <div className="absolute top-3/4 w-full h-px bg-slate-800/50"></div>

                                {/* Bars */}
                                <div className="w-2 bg-red-500/30 h-4"></div>
                                <div className="w-2 bg-red-500/50 h-8"></div>
                                <div className="w-2 bg-red-500/70 h-12"></div>
                                <div className="w-2 bg-red-500 h-20 relative group">
                                    {/* Hover Effect Tooltip (Simulated) */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-36 bg-slate-800/90 border border-slate-600 rounded p-2 text-[10px] text-slate-300 z-10 shadow-xl hidden group-hover:block pointer-events-none">
                                        <div className="flex justify-between"><span>时间:</span><span>09:24:58</span></div>
                                        <div className="flex justify-between text-red-400"><span>匹配价:</span><span>8.36</span></div>
                                        <div className="flex justify-between text-yellow-400"><span>竞价量:</span><span>17750</span></div>
                                        <div className="flex justify-between text-blue-400"><span>未匹配:</span><span>351</span></div>
                                    </div>
                                    {/* Cursor Line */}
                                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50 h-[200px] -translate-y-full hidden group-hover:block"></div>
                                </div>
                                <div className="w-2 bg-red-500 h-24"></div>
                                <div className="w-2 bg-red-500 h-28"></div>
                            </div>
                            <div className="flex justify-between text-slate-500 px-2">
                                <span>09:15</span>
                                <span>09:20</span>
                                <span>09:25</span>
                            </div>
                            <div className="mt-2 text-center text-slate-400 text-[10px]">
                                {lang === 'zh' ? '↑ 鼠标悬停查看详细数据' : '↑ Hover to see details'}
                            </div>
                        </div>

                        {/* Right: Explanation */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1 h-full bg-red-500 rounded"></div>
                                <div>
                                    <h5 className="font-bold text-red-600 dark:text-red-400 text-sm">{t.term.logic.red.t}</h5>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                                        {t.term.logic.red.d}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 h-full bg-green-500 rounded"></div>
                                <div>
                                    <h5 className="font-bold text-green-600 dark:text-green-400 text-sm">{t.term.logic.green.t}</h5>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                                        {t.term.logic.green.d}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
