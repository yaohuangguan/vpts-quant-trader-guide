
import React, { useState } from 'react';
import { Card } from './Card';
import { Clock, Zap, TrendingUp, TrendingDown, Minus, ArrowUp, ArrowDown, Activity, X } from 'lucide-react';
import { Lang } from '../types';

// Micro-Chart Component for VP Patterns
const VPMicroChart: React.FC<{ 
    pDir: 'up' | 'down' | 'flat', 
    vDir: 'up' | 'down' | 'flat', 
    color: string 
}> = ({ pDir, vDir, color }) => {
    return (
        <div className="w-16 h-12 flex flex-col justify-end gap-1">
            {/* Price Line */}
            <div className="h-6 w-full relative border-b border-slate-200 dark:border-slate-600">
                <svg viewBox="0 0 40 20" className="w-full h-full overflow-visible">
                    {pDir === 'up' && <path d="M0,20 Q20,20 40,0" fill="none" className={color} strokeWidth="2" />}
                    {pDir === 'down' && <path d="M0,0 Q20,0 40,20" fill="none" className={color} strokeWidth="2" />}
                    {pDir === 'flat' && <path d="M0,10 Q20,15 40,10" fill="none" className={color} strokeWidth="2" />}
                </svg>
            </div>
            {/* Volume Bars */}
            <div className="flex items-end justify-between h-5 w-full gap-0.5">
                {[1, 2, 3, 4, 5].map(i => {
                    let h = '30%';
                    if (vDir === 'up') h = `${20 + i * 15}%`;
                    if (vDir === 'down') h = `${100 - i * 15}%`;
                    if (vDir === 'flat') h = '40%';
                    return <div key={i} className={`w-1.5 rounded-sm ${pDir === 'up' ? 'bg-red-400' : pDir === 'down' ? 'bg-green-400' : 'bg-slate-400'}`} style={{height: h}}></div>
                })}
            </div>
        </div>
    );
};

export const VPSpaceTime: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [activeResonance, setActiveResonance] = useState(false);

  const t = {
    title: lang === 'zh' ? '量价时空：四维全息分析' : 'Volume-Price Space-Time: 4D Analysis',
    vp_title: lang === 'zh' ? '六大核心量价关系 (VP DNA)' : '6 Core Volume-Price Relationships',
    st_title: lang === 'zh' ? '时空共振触发器 (Space-Time Trigger)' : 'Space-Time Resonance Trigger',
    patterns: [
        {
            id: 1, p: 'up', v: 'up', 
            name: lang === 'zh' ? '量增价涨' : 'Vol Up, Price Up', 
            desc: lang === 'zh' ? '【常态】健康上涨。买盘积极，多头趋势初期或中期的标准形态。' : '[Normal] Healthy trend. Active buying. Standard early/mid trend.',
            tag: lang === 'zh' ? '健康' : 'Healthy', c: 'stroke-red-500'
        },
        {
            id: 2, p: 'up', v: 'down', 
            name: lang === 'zh' ? '量缩价涨' : 'Vol Down, Price Up', 
            desc: lang === 'zh' ? '【最强】锁仓拉升。主力高度控盘，市场惜售。常见于主升浪加速段。' : '[Strongest] Locked ascent. High MM control, no selling. Main wave accel.',
            tag: lang === 'zh' ? '控盘' : 'Locked', c: 'stroke-red-600'
        },
        {
            id: 3, p: 'flat', v: 'up', 
            name: lang === 'zh' ? '量大滞涨' : 'High Vol, Flat Price', 
            desc: lang === 'zh' ? '【警戒】高位出货。巨大的成交量却推不动股价，说明主力在借机派发。' : '[Warning] Churning. Huge volume but no rise = Distribution.',
            tag: lang === 'zh' ? '出货' : 'Dump', c: 'stroke-amber-500'
        },
        {
            id: 4, p: 'down', v: 'up', 
            name: lang === 'zh' ? '量增价跌' : 'Vol Up, Price Down', 
            desc: lang === 'zh' ? '【恐慌】破位下杀。承接盘虽有但抛压更重，往往意味着支撑失效。' : '[Panic] Breakdown. Heavy selling overwhelms support.',
            tag: lang === 'zh' ? '破位' : 'Break', c: 'stroke-green-500'
        },
        {
            id: 5, p: 'down', v: 'down', 
            name: lang === 'zh' ? '量缩价跌' : 'Vol Down, Price Down', 
            desc: lang === 'zh' ? '【洗盘】良性回调。市场惜售，空头力量衰竭，等待企稳。' : '[Washout] Healthy correction. Selling exhausted. Wait for base.',
            tag: lang === 'zh' ? '洗盘' : 'Wash', c: 'stroke-green-400'
        },
        {
            id: 6, p: 'flat', v: 'down', 
            name: lang === 'zh' ? '量缩价平' : 'Vol Down, Price Flat', 
            desc: lang === 'zh' ? '【底部】筑底阶段。被遗忘的角落，变盘临界点的前夜。' : '[Bottom] Dormancy. Forgotten zone. Eve of change.',
            tag: lang === 'zh' ? '蓄势' : 'Base', c: 'stroke-slate-400'
        },
    ],
    trigger: {
        space: lang === 'zh' ? '空间 (阻力位)' : 'Space (Resistance)',
        time: lang === 'zh' ? '时间 (变盘窗)' : 'Time (Window)',
        action: lang === 'zh' ? '共振点：突破！' : 'Resonance: Breakout!',
        desc: lang === 'zh' ? '当价格运行至关键【空间】阻力位，且时间恰好到达斐波那契【时间】窗口（如第13/21天）。若此时量能异动，则产生共振。' 
                             : 'When Price hits key [Space] resistance exactly at a Fibonacci [Time] window (Day 13/21). If Volume pulses, Resonance occurs.'
    }
  };

  return (
    <div className="space-y-6">
        <style>{`
            @keyframes scan-horizontal {
                0% { transform: translateX(0%); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateX(500%); opacity: 0; } /* Adjust 500% based on relative width of parent vs bar */
            }
            @keyframes pulse-node {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
            }
            /* Optimized scan using left for simplicity in responsive layout, adding will-change */
            @keyframes scan-left-right {
                0% { left: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
            }
            .anim-scan { animation: scan-left-right 4s linear infinite; will-change: left; }
            .anim-resonance { animation: pulse-node 2s infinite; }
        `}</style>

        {/* 1. Volume-Price Logic Board */}
        <Card highlightColor="indigo">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-300">
                    <Activity size={24} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.vp_title}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.patterns.map((p) => (
                    <div key={p.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors group">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white 
                                    ${p.tag === '健康' || p.tag === 'Healthy' ? 'bg-red-500' : ''}
                                    ${p.tag === '控盘' || p.tag === 'Locked' ? 'bg-red-700' : ''}
                                    ${p.tag === '出货' || p.tag === 'Dump' ? 'bg-amber-500' : ''}
                                    ${p.tag === '破位' || p.tag === 'Break' ? 'bg-green-600' : ''}
                                    ${p.tag === '洗盘' || p.tag === 'Wash' ? 'bg-green-400' : ''}
                                    ${p.tag === '蓄势' || p.tag === 'Base' ? 'bg-slate-400' : ''}
                                `}>
                                    {p.tag}
                                </div>
                                <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">{p.name}</h5>
                            </div>
                            {/* Icons */}
                            <div className="flex gap-1 text-xs">
                                {p.p === 'up' && <ArrowUp size={14} className="text-red-500" />}
                                {p.p === 'down' && <ArrowDown size={14} className="text-green-500" />}
                                {p.p === 'flat' && <Minus size={14} className="text-slate-400" />}
                                <span className="text-slate-300">|</span>
                                {p.v === 'up' && <ArrowUp size={14} className="text-red-500" />}
                                {p.v === 'down' && <ArrowDown size={14} className="text-green-500" />}
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-center">
                            {/* Micro Chart */}
                            {/* @ts-ignore */}
                            <VPMicroChart pDir={p.p} vDir={p.v} color={p.c} />
                            
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug font-medium flex-1">
                                {p.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

        {/* 2. Space-Time Trigger Visualization */}
        <Card highlightColor="purple" className="relative overflow-hidden">
             <div className="flex items-center gap-2 mb-6 relative z-10">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-300">
                    <Clock size={24} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.st_title}</h4>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                {/* Chart Visualization */}
                <div className="w-full md:w-3/5 h-64 bg-slate-900 rounded-xl border border-slate-700 relative overflow-hidden" 
                     onMouseEnter={() => setActiveResonance(true)} 
                     onMouseLeave={() => setActiveResonance(false)}>
                    
                    {/* Grid */}
                    <div className="absolute inset-0 opacity-20" 
                         style={{backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
                    </div>

                    {/* Space Line (Resistance) */}
                    <div className="absolute top-[30%] w-full border-t border-dashed border-red-500 opacity-50"></div>
                    <div className="absolute top-[30%] right-2 text-xs text-red-500 font-bold">{t.trigger.space}</div>

                    {/* Time Line (Fibonacci Window) */}
                    <div className="absolute left-[70%] h-full border-l border-dashed border-purple-500 opacity-50"></div>
                    <div className="absolute bottom-2 left-[71%] text-xs text-purple-500 font-bold">{t.trigger.time} (Day 13)</div>

                    {/* Price Curve */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 Q100,100 150,80 T300,50 L400,20" fill="none" className="stroke-slate-100" strokeWidth="2" />
                    </svg>

                    {/* Resonance Point */}
                    <div className={`absolute top-[30%] left-[70%] w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${activeResonance ? 'anim-resonance shadow-[0_0_20px_rgba(255,255,255,1)]' : 'opacity-0'}`}></div>
                    
                    {/* Scanner Line */}
                    <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent anim-scan pointer-events-none"></div>

                    {/* Label when active */}
                    <div className={`absolute top-[20%] left-[70%] transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded transition-opacity duration-300 ${activeResonance ? 'opacity-100' : 'opacity-0'}`}>
                        {t.trigger.action}
                    </div>
                </div>

                {/* Description */}
                <div className="w-full md:w-2/5 space-y-4">
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                        {t.trigger.desc}
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500 text-sm text-slate-600 dark:text-slate-400">
                        <div className="font-bold mb-2 text-slate-800 dark:text-slate-200">Formula:</div>
                        <div className="flex flex-col gap-2 font-mono">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                                <span>P (Space)</span> <span>= Resistance</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                                <span>T (Time)</span> <span>= Fib(13, 21, 34)</span>
                            </div>
                            <div className="flex justify-between text-purple-600 dark:text-purple-400 font-bold">
                                <span>Resonance</span> <span>= EXPLOSION</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  );
};