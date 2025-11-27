import React from 'react';
import { Card } from './Card';
import { Anchor, Cpu, ShoppingBag, AlertTriangle, ArrowRight, BarChart2, Zap } from 'lucide-react';
import { Lang } from '../types';

export const CaseStudies: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '典型案例复盘与深度解析' : 'Typical Case Study Review & Deep Analysis',
    cases: [
        {
            id: 1,
            type: lang === 'zh' ? '案例一：周期股的大反转（海底捞月）' : 'Case 1: Cyclical Stock Reversal (Moon Salvage)',
            target: lang === 'zh' ? '某航运龙头 (2020启动)' : 'Shipping Leader (2020)',
            icon: Anchor,
            color: 'red' as const,
            pattern: lang === 'zh' ? 'MA250陡峭向下转平。MA30/60/90/120在极窄区间纠缠4个月。地量。' : 'MA250 flattens. MA30-120 entangled for 4 months. Extremely low volume.',
            trigger: lang === 'zh' ? '全球运价上涨。单日放量涨停，一阳穿五线。' : 'Global rates up. Limit-up with huge volume, crossing 5 lines.',
            result: lang === 'zh' ? '开启浩大行情，一年涨幅 > 500%。多次回踩MA30支撑。' : 'Massive trend, > 500% in a year. MA30 provided support.',
            chartType: 'reversal'
        },
        {
            id: 2,
            type: lang === 'zh' ? '案例二：科技股的中继加速（空中加油）' : 'Case 2: Tech Stock Relay (Air Refueling)',
            target: lang === 'zh' ? '某半导体设备股' : 'Semiconductor Stock',
            icon: Cpu,
            color: 'amber' as const,
            pattern: lang === 'zh' ? '首波涨30%后回调。MA30死叉MA60，但MA120向上。缩量震荡2个月，五线再粘合。' : '30% rally then dip. MA30 cross down MA60, but MA120 up. 2 months consolidation.',
            trigger: lang === 'zh' ? '行业利好。再次放量启动，MACD水上金叉。' : 'Industry news. Volume surge again. MACD Water Cross.',
            result: lang === 'zh' ? '主升浪开启，涨幅超第一波，角度更陡峭。' : 'Main wave starts, exceeding first wave, steeper angle.',
            chartType: 'relay'
        },
        {
            id: 3,
            type: lang === 'zh' ? '案例三：失败的教训（假突破）' : 'Case 3: Failed Lesson (Fake Breakout)',
            target: lang === 'zh' ? '某传统零售股' : 'Retail Stock',
            icon: ShoppingBag,
            color: 'green' as const,
            pattern: lang === 'zh' ? '五线粘合完美，但成交量未有效放大（无量）。' : 'Perfect adhesion, but no effective volume amplification.',
            trigger: lang === 'zh' ? '小幅突破均线，次日遭遇大盘暴跌。' : 'Small breakout, followed by market crash next day.',
            result: lang === 'zh' ? '击穿平台支撑。教训：覆巢之下无完卵（大势重于个股）。' : 'Support broken. Lesson: Market sentiment overrides individual setup.',
            chartType: 'fail'
        }
    ],
    labels: {
        pattern: lang === 'zh' ? '形态' : 'Pattern',
        trigger: lang === 'zh' ? '触发' : 'Trigger',
        result: lang === 'zh' ? '结果' : 'Result',
        lesson: lang === 'zh' ? '教训' : 'Lesson',
        vol: lang === 'zh' ? '量' : 'Vol'
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <style>{`
            @keyframes draw-chart-line {
                from { stroke-dashoffset: 1000; }
                to { stroke-dashoffset: 0; }
            }
            .anim-chart { stroke-dasharray: 1000; stroke-dashoffset: 0; animation: draw-chart-line 4s ease-out forwards; }
            .anim-bar-rise { animation: bar-rise 1s ease-out forwards; }
            @keyframes bar-rise { from { height: 0; } to { height: var(--h); } }
        `}</style>

        {t.cases.map((c) => (
            <Card key={c.id} highlightColor={c.color} className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-${c.color}-100 dark:bg-${c.color}-900/30 text-${c.color}-600 dark:text-${c.color}-400`}>
                        <c.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg leading-tight text-slate-900 dark:text-slate-100">{c.type}</h4>
                        <span className="text-xs font-bold text-slate-500 uppercase">{c.target}</span>
                    </div>
                </div>

                {/* Visualization */}
                <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative overflow-hidden p-2">
                    {/* SVG Charts */}
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                        {/* Common Grid */}
                        <line x1="0" y1="100" x2="200" y2="100" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
                        
                        {c.chartType === 'reversal' && (
                            <>
                                {/* MA250 Blue - Flattening */}
                                <path d="M0,20 Q100,100 200,90" fill="none" className="stroke-blue-500 opacity-50" strokeWidth="2" strokeDasharray="4" />
                                {/* Price Action - Bottom to Sky (RED for RISE) */}
                                <path d="M0,90 Q50,95 80,90 L90,60 Q120,20 200,5" fill="none" className="stroke-red-600 anim-chart" strokeWidth="2" />
                                {/* Knot */}
                                <circle cx="80" cy="90" r="10" className="fill-red-500/20 stroke-red-500 dashed" />
                                {/* Volume Burst */}
                                <rect x="85" y="105" width="10" height="15" className="fill-red-500" />
                            </>
                        )}

                        {c.chartType === 'relay' && (
                            <>
                                {/* MA120 Amber - Upward Support */}
                                <path d="M0,100 L200,60" fill="none" className="stroke-amber-500 opacity-50" strokeWidth="2" />
                                {/* Price Action - N Shape (RED for RISE) */}
                                <path d="M0,90 L50,40 L100,80 L120,75 L200,10" fill="none" className="stroke-red-600 anim-chart" strokeWidth="2" />
                                {/* Support Area */}
                                <circle cx="100" cy="80" r="5" className="fill-blue-500/20" />
                                {/* MACD Water Cross Symbol */}
                                <path d="M110,90 L130,85" stroke="red" strokeWidth="2" />
                            </>
                        )}

                        {c.chartType === 'fail' && (
                            <>
                                {/* Platform Support */}
                                <line x1="0" y1="60" x2="100" y2="60" className="stroke-slate-400 dashed" strokeDasharray="4" />
                                {/* Price Action - Trap then Dump (GREEN for FALL) */}
                                <path d="M0,60 L80,60 L90,50 L100,90 L200,110" fill="none" className="stroke-green-500 anim-chart" strokeWidth="2" />
                                {/* Trap Highlight */}
                                <circle cx="90" cy="50" r="4" className="fill-red-500 animate-ping" />
                                <text x="120" y="40" fontSize="10" className="fill-red-500 font-bold">TRAP</text>
                                {/* Low Vol */}
                                <rect x="85" y="110" width="5" height="5" className="fill-slate-400" />
                            </>
                        )}
                    </svg>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm flex-grow">
                    <div className="flex gap-2 items-start">
                        <div className="bg-slate-200 dark:bg-slate-700 p-1 rounded mt-0.5 shrink-0">
                            <BarChart2 size={12} />
                        </div>
                        <div>
                            <span className="font-bold text-slate-700 dark:text-slate-300 mr-1">{t.labels.pattern}:</span>
                            <span className="text-slate-600 dark:text-slate-400">{c.pattern}</span>
                        </div>
                    </div>

                    <div className="flex gap-2 items-start">
                        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded mt-0.5 shrink-0 text-amber-500">
                            <Zap size={12} />
                        </div>
                        <div>
                            <span className="font-bold text-slate-700 dark:text-slate-300 mr-1">{t.labels.trigger}:</span>
                            <span className="text-slate-600 dark:text-slate-400">{c.trigger}</span>
                        </div>
                    </div>

                    <div className="flex gap-2 items-start bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700">
                        <div className={`mt-0.5 shrink-0 ${c.chartType === 'fail' ? 'text-green-500' : 'text-red-500'}`}>
                            {c.chartType === 'fail' ? <AlertTriangle size={14} /> : <ArrowRight size={14} />}
                        </div>
                        <div>
                            <span className="font-bold text-slate-700 dark:text-slate-200 mr-1">
                                {c.chartType === 'fail' ? t.labels.lesson : t.labels.result}:
                            </span>
                            <span className={`font-medium ${c.chartType === 'fail' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                {c.result}
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        ))}
    </div>
  );
};