import React from 'react';
import { Card, Tag } from './Card';
import { ArrowDown, TrendingUp, Layers, Activity, Brain, Users, RefreshCw, Zap, BarChart2, Search, Anchor, Sigma, GitMerge, Volume2, Clock, Wallet, Minimize2, ShieldCheck, Ruler, AlertTriangle } from 'lucide-react';
import { Lang } from '../types';

export const MAArchitecture: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '时间维度的资本映射' : 'Capital Mapping in Time Dimension',
    cycles: [
        { ma: 'MA5', color: 'slate', cycle: lang === 'zh'?'周度':'Weekly', name: lang === 'zh'?'攻击线':'Attack Line', capital: lang === 'zh'?'高频交易/超短':'HFT/Scalp' },
        { ma: 'MA10', color: 'yellow', cycle: lang === 'zh'?'双周':'Bi-Weekly', name: lang === 'zh'?'防守线':'Defense Line', capital: lang === 'zh'?'活跃游资':'Hot Money' },
        { ma: 'MA20', color: 'fuchsia', cycle: lang === 'zh'?'月度':'Monthly', name: lang === 'zh'?'操盘线':'Trading Line', capital: lang === 'zh'?'波段资金':'Swing Cap' },
        { ma: 'MA30', color: 'green', cycle: lang === 'zh'?'月半':'6-Weeks', name: lang === 'zh'?'生命线':'Life Line', capital: lang === 'zh'?'稳健大户':'Large Retail' },
        { ma: 'MA60', color: 'blue', cycle: lang === 'zh'?'季度':'Quarterly', name: lang === 'zh'?'决策线':'Decision', capital: lang === 'zh'?'中线机构':'Institution' },
        { ma: 'MA90', color: 'indigo', cycle: lang === 'zh'?'半年过渡':'Transition', name: lang === 'zh'?'确认线':'Confirm', capital: lang === 'zh'?'配置型机构':'Allocators' },
        { ma: 'MA120', color: 'amber', cycle: lang === 'zh'?'半年度':'Half-Year', name: lang === 'zh'?'半年线':'Semi-Annual', capital: lang === 'zh'?'战略投资':'Strategic' },
        { ma: 'MA250', color: 'red', cycle: lang === 'zh'?'年度':'Annual', name: lang === 'zh'?'牛熊线':'Bull-Bear', capital: lang === 'zh'?'国家队/产业':'Sovereign' },
    ],
    insight: lang === 'zh' 
        ? '深度洞察：五线粘合意味着过去一年内所有层级资金的持仓成本趋于一致（成本共振）。这种“零方差”状态消除了获利抛压与割肉盘，使市场处于极度微妙的平衡——熵值最低点。'
        : 'Insight: MA convergence means cost consensus across all capital tiers over the past year. This "Zero Variance" state eliminates profit-taking and panic selling, putting the market in minimum entropy.',
    cost_title: lang === 'zh' ? '成本均质化理论' : 'Cost Homogenization',
    chaos: lang === 'zh' ? '高熵 (分散)' : 'High Entropy',
    order: lang === 'zh' ? '成本共振 (零方差)' : 'Cost Resonance',
    resistance: lang === 'zh' ? '无阻力状态' : 'Zero Resistance',
    wash: lang === 'zh' ? '获利盘清洗：低位买入者因不涨而离场。' : 'Profit Wash: Early buyers leave due to stagnation.',
    cut: lang === 'zh' ? '套牢盘割肉：高位套牢者因绝望而换手。' : 'Cut Loss: Trapped holders exit in despair.',
    status_title: lang === 'zh' ? '市场状态分类' : 'Market Status',
    status: {
        up: { 
            t: lang === 'zh'?'上涨趋势':'Up Trend', 
            d: lang === 'zh'?'抛压累积':'Selling Pressure',
            f: lang === 'zh'?'股价 > 短期成本 > 长期成本':'Price > ST Cost > LT Cost' 
        },
        down: { 
            t: lang === 'zh'?'下跌趋势':'Down Trend', 
            d: lang === 'zh'?'层层压制':'Resistance',
            f: lang === 'zh'?'股价 < 短期成本 < 长期成本':'Price < ST Cost < LT Cost'
        },
        burst: { 
            t: lang === 'zh'?'粘合爆发':'Adhesion Burst', 
            d: lang === 'zh'?'最佳买点':'Best Entry',
            f: lang === 'zh'?'股价 ≈ 短期成本 ≈ 长期成本 (σ²≈0)':'Price ≈ ST Cost ≈ LT Cost (σ²≈0)'
        },
    }
  };

  return (
    <div className="space-y-6">
        <style>{`
            @keyframes float-particle {
                0% { transform: translate(0, 0); }
                25% { transform: translate(10px, -10px); }
                50% { transform: translate(0, -20px); }
                75% { transform: translate(-10px, -10px); }
                100% { transform: translate(0, 0); }
            }
            @keyframes beam-flow {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 0; }
            }
            .particle { animation: float-particle 4s ease-in-out infinite; }
            .beam { animation: beam-flow 2s linear infinite; }
        `}</style>

        {/* 1.1 Time & Capital Mapping */}
        <Card highlightColor="slate" className="relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-600 dark:text-slate-300">
                    <Clock size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
                {t.cycles.map((item, idx) => (
                    <div key={idx} className={`p-2 rounded-lg border flex flex-col items-center text-center transition-all hover:shadow-md
                        ${item.color === 'slate' ? 'bg-slate-50/50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700' : ''}
                        ${item.color === 'yellow' ? 'bg-yellow-50/50 border-yellow-200 dark:bg-yellow-900/10 dark:border-yellow-800' : ''}
                        ${item.color === 'fuchsia' ? 'bg-fuchsia-50/50 border-fuchsia-200 dark:bg-fuchsia-900/10 dark:border-fuchsia-800' : ''}
                        ${item.color === 'green' ? 'bg-green-50/50 border-green-200 dark:bg-green-900/10 dark:border-green-800' : ''}
                        ${item.color === 'blue' ? 'bg-blue-50/50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800' : ''}
                        ${item.color === 'indigo' ? 'bg-indigo-50/50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800' : ''}
                        ${item.color === 'amber' ? 'bg-amber-50/50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800' : ''}
                        ${item.color === 'red' ? 'bg-red-50/50 border-red-200 dark:bg-red-900/10 dark:border-red-800' : ''}
                    `}>
                        <span className={`text-sm font-bold mb-1 px-1.5 py-0.5 rounded-full w-full
                            ${item.color === 'slate' ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' : ''}
                            ${item.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : ''}
                            ${item.color === 'fuchsia' ? 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900 dark:text-fuchsia-300' : ''}
                            ${item.color === 'green' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : ''}
                            ${item.color === 'blue' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : ''}
                            ${item.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' : ''}
                            ${item.color === 'amber' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300' : ''}
                            ${item.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : ''}
                        `}>{item.ma}</span>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-0.5 whitespace-nowrap">{item.cycle}</div>
                        <div className="font-bold text-base text-slate-800 dark:text-slate-200 mb-0.5 whitespace-nowrap">{item.name}</div>
                        <div className="text-xs leading-tight text-slate-600 dark:text-slate-400 font-medium">{item.capital}</div>
                    </div>
                ))}
            </div>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded italic border-l-4 border-slate-300 dark:border-slate-600 leading-relaxed">
                {t.insight}
            </p>
        </Card>

        {/* 1.2 Cost Homogenization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card highlightColor="indigo" className="relative">
                <div className="flex items-center gap-2 mb-3">
                     <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-300">
                        <Minimize2 size={18} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.cost_title}</h4>
                </div>
                
                <div className="h-40 bg-slate-900 rounded border border-slate-800 mb-4 relative overflow-hidden flex items-center justify-center p-4">
                     <svg className="w-full h-full">
                         {/* Left: Chaos (High Entropy) */}
                         <g opacity="0.6">
                             <circle cx="20" cy="30" r="2" fill="#ef4444" className="particle" style={{animationDelay: '0s'}} />
                             <circle cx="30" cy="80" r="2" fill="#22c55e" className="particle" style={{animationDelay: '1s'}} />
                             <circle cx="40" cy="50" r="2" fill="#3b82f6" className="particle" style={{animationDelay: '0.5s'}} />
                             <circle cx="25" cy="110" r="2" fill="#eab308" className="particle" style={{animationDelay: '2s'}} />
                             <circle cx="50" cy="20" r="2" fill="#a855f7" className="particle" style={{animationDelay: '1.5s'}} />
                             <text x="30" y="130" fontSize="11" fill="#64748b" textAnchor="middle">{t.chaos}</text>
                         </g>

                         {/* Funnel Arrows */}
                         <path d="M80,20 Q120,50 150,70" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.5" />
                         <path d="M80,120 Q120,90 150,70" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.5" />

                         {/* Right: Order (Low Entropy) */}
                         <line x1="150" y1="70" x2="280" y2="70" stroke="#fff" strokeWidth="3" className="beam" strokeDasharray="5" />
                         <circle cx="150" cy="70" r="4" fill="#fff" className="animate-ping" />
                         <text x="220" y="50" fontSize="11" fill="#fff" fontWeight="bold" textAnchor="middle">{t.order}</text>
                         <text x="220" y="90" fontSize="10" fill="#94a3b8" textAnchor="middle">{t.resistance}</text>
                     </svg>
                </div>
                <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-red-500 font-bold text-base">•</span><span>{t.wash}</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold text-base">•</span><span>{t.cut}</span></li>
                </ul>
            </Card>

            <Card highlightColor="pink" className="relative">
                 <div className="flex items-center gap-2 mb-3">
                     <div className="bg-pink-100 dark:bg-pink-900/30 p-1.5 rounded-lg text-pink-600 dark:text-pink-300">
                        <Wallet size={18} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.status_title}</h4>
                </div>
                
                <div className="space-y-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-400 rounded">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg text-red-700 dark:text-red-300">{t.status.up.t}</span>
                            <span className="text-base text-red-600 dark:text-red-400 font-medium">{t.status.up.d}</span>
                        </div>
                        <div className="text-base text-slate-700 dark:text-slate-300 font-bold">
                            {t.status.up.f}
                        </div>
                    </div>
                    
                    <div className="p-3 bg-green-50 dark:bg-green-900/10 border-l-4 border-green-400 rounded">
                         <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg text-green-700 dark:text-green-300">{t.status.down.t}</span>
                            <span className="text-base text-green-600 dark:text-green-400 font-medium">{t.status.down.d}</span>
                        </div>
                        <div className="text-base text-slate-700 dark:text-slate-300 font-bold">
                            {t.status.down.f}
                        </div>
                    </div>

                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-400 rounded shadow-sm ring-1 ring-indigo-100 dark:ring-indigo-800">
                         <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg text-indigo-700 dark:text-indigo-300">{t.status.burst.t}</span>
                            <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">{t.status.burst.d}</span>
                        </div>
                        <div className="text-base text-slate-800 dark:text-slate-200 font-black">
                            {t.status.burst.f}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
  );
};

export const AdhesionMorphology: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    math: {
        title: lang === 'zh' ? '粘合的数学定义' : 'Math Definition of Adhesion',
        loose: lang === 'zh' ? '松散粘合 (关注)' : 'Loose (Watch)',
        tight: lang === 'zh' ? '紧密粘合 (爆发)' : 'Tight (Burst)',
        extreme: lang === 'zh' ? '极致粘合 (大牛)' : 'Extreme (Super Bull)',
    },
    braid: {
        title: lang === 'zh' ? '均线互换与编织' : 'MA Exchange & Braid',
        fake: lang === 'zh' ? '主力试盘 (假突破)' : 'Fake Breakout (Test)',
        desc_braid: lang === 'zh' ? '短期均线反复穿越长期均线，多空激烈争夺。' : 'Short MAs cross long MAs repeatedly, intense struggle.',
        desc_fake: lang === 'zh' ? '试探上方抛压，随后回落洗盘，非形态失败。' : 'Testing overhead pressure, then washout. Not failure.',
    },
    volume: {
        title: lang === 'zh' ? '地量法则' : 'Land Volume Rule',
        shrink: lang === 'zh' ? '成交量萎缩 (地量)' : 'Vol Shrink',
        desc_no_vol: lang === 'zh' ? '无量不成结：成交量极度萎缩，市场情绪冰点。' : 'No Vol No Knot: Extreme shrinkage, freezing sentiment.',
        desc_psy: lang === 'zh' ? '心理暗示：抛压枯竭，静默期。若放量滞涨则是出货信号。' : 'Psychology: Selling exhaustion. High volume with no gain = distribution.',
    },
    trend: {
        title: lang === 'zh' ? '趋势几何学：多头排列' : 'Trend Geometry: Bullish Alignment',
        s1: lang === 'zh' ? '惯性保障 (Support Net)' : 'Inertia Guarantee',
        s2: lang === 'zh' ? '发散度监控 (Divergence)' : 'Divergence Monitor',
        desc_s1: lang === 'zh' ? '每条均线构成支撑网。价格回踩即有买盘承接，形成自我强化(Self-Reinforcement)。' : 'MAs form support net. Dips find buyers, creating self-reinforcement.',
        desc_s2: lang === 'zh' ? '乖离率(BIAS)过大意味着风险。最佳区间是多头初期(BIAS<10%)。' : 'High BIAS means risk. Best zone is early alignment (BIAS<10%).',
        safe: lang === 'zh' ? '安全区' : 'Safe',
        risk: lang === 'zh' ? '高风险' : 'Risk'
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <style>{`
            @keyframes converge {
            0% { d: path("M10,20 C100,20 200,20 290,20"); }
            50% { d: path("M10,20 C100,50 200,60 290,65"); }
            100% { d: path("M10,20 C100,50 200,60 290,65"); }
            }
            @keyframes weave-1 {
                0% { transform: translateY(0px); }
                25% { transform: translateY(5px); }
                50% { transform: translateY(0px); }
                75% { transform: translateY(-5px); }
                100% { transform: translateY(0px); }
            }
            @keyframes weave-2 {
                0% { transform: translateY(0px); }
                25% { transform: translateY(-3px); }
                50% { transform: translateY(4px); }
                75% { transform: translateY(2px); }
                100% { transform: translateY(0px); }
            }
        `}</style>

        {/* 2.1 Math Definition */}
        <Card highlightColor="blue" className="relative group">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg text-blue-600 dark:text-blue-300">
                    <Sigma size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.math.title}</h4>
            </div>
            
            <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-3 relative p-4 flex flex-col justify-center">
                {/* Visualizing Convergence */}
                <div className="relative w-full h-full">
                    <div className="absolute right-0 top-0 text-xs font-mono text-slate-500 font-medium">Adhesion %</div>
                    
                    {/* Top Line */}
                    <svg className="absolute w-full h-full overflow-visible">
                        {/* Initial Wide State (Ghost) */}
                        <path d="M0,20 C100,20 200,20 280,20" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeDasharray="4" />
                        <path d="M0,120 C100,120 200,120 280,120" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeDasharray="4" />
                        
                        {/* Converging Lines */}
                        <path d="M0,20 C80,30 180,60 280,68" fill="none" className="stroke-blue-500" strokeWidth="2" />
                        <path d="M0,45 C80,50 180,65 280,70" fill="none" className="stroke-blue-400" strokeWidth="1.5" />
                        <path d="M0,70 C80,70 180,70 280,72" fill="none" className="stroke-blue-300" strokeWidth="1.5" />
                        <path d="M0,95 C80,90 180,75 280,74" fill="none" className="stroke-blue-400" strokeWidth="1.5" />
                        <path d="M0,120 C80,110 180,80 280,76" fill="none" className="stroke-blue-500" strokeWidth="2" />
                        
                        {/* Measurement Bracket */}
                        <line x1="290" y1="68" x2="290" y2="76" className="stroke-red-500" strokeWidth="2" />
                        <line x1="285" y1="68" x2="295" y2="68" className="stroke-red-500" />
                        <line x1="285" y1="76" x2="295" y2="76" className="stroke-red-500" />
                        
                        <text x="300" y="75" fontSize="12" className="fill-red-500 font-bold">&lt; 2%</text>
                    </svg>
                </div>
            </div>
            <div className="space-y-1.5 text-lg text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <span>&lt; 10%</span> <span className="font-bold text-slate-600 dark:text-slate-400">{t.math.loose}</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    <span>&lt; 5%</span> <span className="font-bold text-blue-600 dark:text-blue-400">{t.math.tight}</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-100 dark:border-red-900/50">
                    <span className="font-bold text-red-500">&lt; 2%</span> <span className="font-bold text-red-600 dark:text-red-400">{t.math.extreme}</span>
                </div>
            </div>
        </Card>

        {/* 2.2 The Braid */}
        <Card highlightColor="purple" className="relative group">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-lg text-purple-600 dark:text-purple-300">
                    <GitMerge size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.braid.title}</h4>
            </div>

            <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-3 relative p-4 overflow-hidden">
                <svg className="w-full h-full overflow-visible">
                    <g className="opacity-80">
                        {/* Weaving Lines Animation */}
                        <path d="M0,60 Q20,50 40,70 T80,60 T120,70 T160,50 T200,60 T240,70" fill="none" className="stroke-purple-400" strokeWidth="2" style={{animation: 'weave-1 4s ease-in-out infinite'}} />
                        <path d="M0,70 Q20,80 40,60 T80,70 T120,60 T160,80 T200,70 T240,60" fill="none" className="stroke-yellow-500" strokeWidth="2" style={{animation: 'weave-2 5s ease-in-out infinite'}} />
                        <path d="M0,65 L240,65" fill="none" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="3" />
                    </g>
                    
                    {/* Test Breakout Spike */}
                    <path d="M120,60 L130,30 L140,60" fill="none" className="stroke-red-500" strokeWidth="1.5" />
                    <circle cx="130" cy="30" r="2" className="fill-red-500 animate-ping" />
                    <text x="110" y="25" fontSize="12" className="fill-red-500 font-bold">{t.braid.fake}</text>

                    <text x="200" y="90" fontSize="13" className="fill-slate-400 italic">"The Braid"</text>
                </svg>
            </div>
            <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                <li><b>● {lang === 'zh' ? '编织状' : 'Braid'}：</b> {t.braid.desc_braid}</li>
                <li><b>● {lang === 'zh' ? '假突破' : 'Fake'}：</b> {t.braid.desc_fake}</li>
            </ul>
        </Card>

        {/* 2.3 Land Volume */}
        <Card highlightColor="green" className="relative group">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-lg text-green-600 dark:text-green-300">
                    <Volume2 size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.volume.title}</h4>
            </div>

            <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-3 relative p-4 flex flex-col justify-end">
                {/* Price movement (sideways) */}
                <div className="absolute top-0 left-0 w-full h-1/2 p-2 border-b border-dashed border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500">Price (Sideways)</div>
                    <svg width="100%" height="100%">
                        <path d="M0,20 Q30,15 60,25 T120,20 T180,25 T240,20" fill="none" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5" />
                    </svg>
                </div>

                {/* Volume Bars (Shrinking) */}
                <div className="flex items-end gap-1 h-1/2 w-full pt-2">
                    {[10, 8, 7, 5, 4, 3, 2, 2, 1, 1, 1, 2, 1].map((h, i) => (
                        <div 
                            key={i} 
                            className={`flex-1 ${h < 3 ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`} 
                            style={{height: `${h * 10}%`}}
                        ></div>
                    ))}
                </div>
                
                {/* Indicators */}
                <div className="absolute bottom-10 right-2 text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                    {lang === 'zh' ? '换手率 < 1%' : 'Turnover < 1%'}
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-slate-500">{t.volume.shrink}</div>
            </div>
            <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                <li><b>● {lang === 'zh' ? '无量不成结' : 'No Vol'}：</b> {t.volume.desc_no_vol}</li>
                <li><b>● {lang === 'zh' ? '心理暗示' : 'Psy'}：</b> {t.volume.desc_psy}</li>
            </ul>
        </Card>
      </div>
    
      {/* 4. Trend Geometry (NEW) */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <div className="flex items-center gap-2 mb-6">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-1.5 rounded-lg text-teal-600 dark:text-teal-300">
                    <TrendingUp size={18} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.trend.title}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 4.1 Stability - Support Net */}
              <Card highlightColor="teal" className="relative">
                 <style>{`
                    @keyframes bounce-support {
                        0% { cy: 100; }
                        50% { cy: 60; }
                        100% { cy: 20; }
                    }
                    @keyframes path-flow {
                        0% { stroke-dashoffset: 200; }
                        100% { stroke-dashoffset: 0; }
                    }
                    .anim-bounce { animation: bounce-support 3s ease-in-out infinite; }
                    .anim-path-flow { stroke-dasharray: 200; animation: path-flow 5s linear infinite; }
                 `}</style>
                 <div className="flex justify-between items-center mb-4">
                     <h5 className="font-bold text-lg text-teal-800 dark:text-teal-200 flex items-center gap-2">
                         <ShieldCheck size={18} /> {t.trend.s1}
                     </h5>
                 </div>
                 
                 <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4 overflow-hidden">
                     <svg className="w-full h-full" viewBox="0 0 300 120">
                         {/* Parallel MAs */}
                         <path d="M0,120 C100,100 200,80 300,60" fill="none" className="stroke-teal-600 dark:stroke-teal-400 anim-path-flow" strokeWidth="2" />
                         <path d="M0,130 C100,110 200,90 300,70" fill="none" className="stroke-teal-500/70" strokeWidth="2" />
                         <path d="M0,140 C100,120 200,100 300,80" fill="none" className="stroke-teal-500/40" strokeWidth="2" />
                         
                         {/* Price Action - Bouncing */}
                         <circle cx="150" cy="80" r="4" className="fill-amber-500 anim-bounce" />
                         
                         {/* Arrows for Support */}
                         <path d="M150,90 L150,80 L145,85 M150,80 L155,85" fill="none" className="stroke-teal-500" strokeWidth="2" />
                         <text x="160" y="85" fontSize="10" className="fill-teal-500 font-bold">Support</text>
                     </svg>
                 </div>
                 <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                     {t.trend.desc_s1}
                 </p>
              </Card>

              {/* 4.2 Divergence - BIAS Risk */}
              <Card highlightColor="amber" className="relative">
                 <style>{`
                    @keyframes rubber-band {
                        0% { d: path("M150,100 L150,90"); stroke: #22c55e; }
                        50% { d: path("M150,100 L150,40"); stroke: #eab308; }
                        100% { d: path("M150,100 L150,10"); stroke: #ef4444; }
                    }
                    @keyframes bias-text {
                        0% { opacity: 0; }
                        50% { opacity: 0.5; }
                        100% { opacity: 1; }
                    }
                    .anim-rubber { animation: rubber-band 4s ease-in-out infinite alternate; }
                 `}</style>
                 <div className="flex justify-between items-center mb-4">
                     <h5 className="font-bold text-lg text-amber-800 dark:text-amber-200 flex items-center gap-2">
                         <Ruler size={18} /> {t.trend.s2}
                     </h5>
                 </div>

                 <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4 overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                         {/* MA60 Baseline */}
                         <path d="M0,110 C100,105 200,100 300,95" fill="none" className="stroke-blue-500" strokeWidth="2" strokeDasharray="4" />
                         <text x="10" y="105" fontSize="10" className="fill-blue-500">MA60 (Cost)</text>

                         {/* Price Line (Moving away) */}
                         <path d="M0,100 C80,90 150,40 300,10" fill="none" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
                         
                         {/* The Rubber Band (BIAS) */}
                         <path className="anim-rubber" strokeWidth="2" strokeDasharray="2" />
                         
                         {/* Zones */}
                         <rect x="250" y="70" width="40" height="20" className="fill-green-100 dark:fill-green-900/30" rx="2" />
                         <text x="270" y="84" fontSize="10" className="fill-green-600 font-bold" textAnchor="middle">&lt;10%</text>

                         <rect x="250" y="10" width="40" height="20" className="fill-red-100 dark:fill-red-900/30" rx="2" />
                         <text x="270" y="24" fontSize="10" className="fill-red-600 font-bold" textAnchor="middle">&gt;20%</text>

                         <path d="M220,10 L240,10 L230,25 Z" fill="red" className="animate-bounce" />
                         <text x="230" y="40" fontSize="10" className="fill-red-500 font-bold" textAnchor="middle">!</text>
                      </svg>
                 </div>
                 <p className="text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                     {t.trend.desc_s2}
                 </p>
              </Card>
          </div>
      </div>
    </div>
  );
};

export const ChipStructure: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    a: lang === 'zh' ? '底部双峰吸筹' : 'Phase A: Dual Peak Accumulation',
    b: lang === 'zh' ? '锁仓拉升 (单峰上移)' : 'Phase B: Locked Ascent (Peak Shift)',
    c: lang === 'zh' ? '高位出货 (筹码大转移)' : 'Phase C: Distribution (Chip Transfer)',
    desc_a: lang === 'zh' ? '股价低位震荡，形成“双峰”结构。上方为割肉盘，下方为主力建仓的获利盘（红）。' : 'Low oscillation forms "dual peaks". Top: Panic selling. Bottom: Accumulation (Red).',
    desc_b: lang === 'zh' ? '拉升途中，底部获利盘（红）纹丝不动（主力锁仓）。筹码峰开始上移，中间出现真空区。' : 'Ascent: Bottom profit chips (Red) stay still (Locked). Peak moves up, vacuum in middle.',
    desc_c: lang === 'zh' ? '动画演示：底部红色获利盘逐渐消失（主力派发），顶部青色套牢盘急剧放大。筹码完成高位集中。' : 'Animation: Bottom red chips vanish (Distribution), top blue chips expand. High-level concentration.',
  };

  return (
    <Card className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-slate-200 dark:border-slate-800 transition-colors duration-300">
       <style>{`
        @keyframes chip-fade-out {
          0%, 10% { width: var(--w); opacity: 0.8; }
          90%, 100% { width: 5%; opacity: 0.1; }
        }
        @keyframes chip-fade-in {
          0%, 10% { width: 5%; opacity: 0.1; }
          90%, 100% { width: var(--w); opacity: 0.9; }
        }
        @keyframes draw-path-smooth {
          0% { stroke-dashoffset: 200; opacity: 0; }
          10% { opacity: 1; }
          70% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        .chip-transfer-out {
           animation: chip-fade-out 5s ease-in-out infinite alternate;
        }
        .chip-transfer-in {
           animation: chip-fade-in 5s ease-in-out infinite alternate;
        }
        .price-line-anim {
           stroke-dasharray: 200;
           stroke-dashoffset: 200;
           animation: draw-path-smooth 4s ease-out infinite;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
        
        {/* Phase A */}
        <div className="px-2 py-2">
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">A</span> 
            {t.a}
          </h4>
          <div className="h-48 relative bg-slate-900 rounded border border-slate-800 mb-4 p-2 overflow-hidden flex">
             {/* Left: Price Schematic */}
             <div className="w-1/3 h-full relative border-r border-slate-800">
                <path d="M0,80 Q15,90 30,80 T60,70 T90,75" fill="none" className="stroke-slate-500" strokeWidth="1" />
                <div className="absolute bottom-2 left-2 text-xs font-bold text-slate-500">Price Low</div>
             </div>
             {/* Right: Chip Profile */}
             <div className="w-2/3 h-full flex flex-col justify-end gap-[1px] pl-1 relative">
                {/* Upper Peak (Trapped/Old) */}
                {[...Array(10)].map((_, i) => (
                    <div key={`top-${i}`} className="h-[2px] bg-cyan-600 opacity-60" style={{width: `${30 + Math.random() * 40}%`}}></div>
                ))}
                <div className="h-4"></div> {/* Valley */}
                {/* Lower Peak (Accumulation/Profit) */}
                {[...Array(15)].map((_, i) => (
                    <div key={`bot-${i}`} className="h-[2px] bg-red-600 opacity-90" style={{width: `${50 + Math.random() * 40}%`}}></div>
                ))}
                <div className="absolute top-1/2 right-2 text-xs text-cyan-400 font-mono">Dual Peak</div>
             </div>
          </div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">{t.desc_a}</p>
        </div>

        {/* Phase B */}
        <div className="px-2 py-2">
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 w-6 h-6 rounded-full flex items-center justify-center text-xs">B</span> 
            {t.b}
          </h4>
          <div className="h-48 relative bg-slate-900 rounded border border-slate-800 mb-4 p-2 overflow-hidden flex">
             {/* Left: Price Schematic */}
             <div className="w-1/3 h-full relative border-r border-slate-800">
                <path d="M0,75 L10,75 L30,40 L35,45 L50,10" fill="none" className="stroke-red-500 price-line-anim" strokeWidth="2" />
             </div>
             {/* Right: Chip Profile */}
             <div className="w-2/3 h-full flex flex-col justify-between gap-[1px] pl-1 relative py-2">
                {/* New Formation (Moving Up) */}
                <div className="flex flex-col gap-[1px]">
                     {[...Array(8)].map((_, i) => (
                        <div key={`mid-${i}`} className="h-[2px] bg-red-500 opacity-70" style={{width: `${20 + Math.random() * 30}%`}}></div>
                    ))}
                </div>

                {/* Vacuum Zone */}
                <div className="text-xs text-slate-600 text-center italic my-2">Vacuum</div>

                {/* Bottom Locked Chips (Still there!) */}
                <div className="flex flex-col gap-[1px]">
                    {[...Array(12)].map((_, i) => (
                        <div key={`bot-locked-${i}`} className="h-[2px] bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.8)]" style={{width: `${60 + Math.random() * 30}%`}}></div>
                    ))}
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-red-500 font-bold">LOCKED</div>
             </div>
          </div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">{t.desc_b}</p>
        </div>

        {/* Phase C */}
        <div className="px-2 py-2">
          <h4 className="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">C</span> 
            {t.c}
          </h4>
          <div className="h-48 relative bg-slate-900 rounded border border-slate-800 mb-4 p-2 overflow-hidden flex">
             {/* Left: Price Schematic */}
             <div className="w-1/3 h-full relative border-r border-slate-800">
                 <path d="M0,20 L15,10 L30,25 L45,15 L60,30" fill="none" className="stroke-green-500" strokeWidth="1.5" />
                 <div className="absolute top-2 left-2 text-xs text-green-500">Distribution</div>
             </div>
             {/* Right: Chip Profile */}
             <div className="w-2/3 h-full flex flex-col justify-between gap-[1px] pl-1 relative py-1">
                {/* Top: Massive Concentration (Retail taking over) */}
                <div className="flex flex-col gap-[1px]">
                     {[...Array(20)].map((_, i) => {
                         const width = `${60 + Math.random() * 30}%`;
                         return (
                            <div 
                                key={`top-retail-${i}`} 
                                className="h-[2px] bg-cyan-500 chip-transfer-in" 
                                style={{
                                    '--w': width, 
                                    animationDelay: `${i * 0.05}s` 
                                } as React.CSSProperties}
                            ></div>
                         );
                     })}
                </div>
                
                {/* Arrows indicating flow */}
                <div className="flex justify-center items-center h-full opacity-30">
                     <TrendingUp className="text-slate-500 rotate-180" />
                </div>

                {/* Bottom: Vanishing Profit Chips */}
                <div className="flex flex-col gap-[1px]">
                    {[...Array(10)].map((_, i) => {
                        const width = `${70 + Math.random() * 20}%`;
                        return (
                            <div 
                                key={`bot-vanish-${i}`} 
                                className="h-[2px] bg-red-800 chip-transfer-out" 
                                style={{
                                    '--w': width, 
                                    animationDelay: `${i * 0.1}s` 
                                } as React.CSSProperties}
                            ></div>
                        );
                    })}
                </div>
                <div className="absolute bottom-1 right-1 text-xs text-slate-500">Exiting...</div>
             </div>
          </div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed"><b>{lang === 'zh' ? '动画演示' : 'Animation'}：</b> {t.desc_c}</p>
        </div>

      </div>
    </Card>
  );
};

export const VolumeDynamics: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    v1: {
        title: lang === 'zh' ? '量能倍增法则' : 'Volume Doubling',
        std: lang === 'zh' ? '标准' : 'Std',
        warn: lang === 'zh' ? '警惕' : 'Warn',
        d_std: lang === 'zh' ? '突破日成交量至少达到粘合期均量的2倍以上。' : 'Breakout volume must be >2x average volume.',
        d_warn: lang === 'zh' ? '无量上涨极大概率为假突破，主力诱多。' : 'Volume-less rise is often a bull trap.',
    },
    v2: {
        title: lang === 'zh' ? '量堆与吸筹' : 'Volume Pile (Accumulation)',
        form: lang === 'zh' ? '形态' : 'Form',
        read: lang === 'zh' ? '解读' : 'Read',
        d_form: lang === 'zh' ? '股价波动不大，但间歇性出现连续红柱放量。' : 'Low price volatility, but intermittent red volume piles.',
        d_read: lang === 'zh' ? '主力挂大单承接抛压，“涨量跌缩”是实力的证明。' : 'Big orders absorbing selling pressure. "Rise on vol, fall on shrink".',
        hidden: lang === 'zh' ? '隐蔽建仓' : 'Stealth Buy'
    },
    v3: {
        title: lang === 'zh' ? '凹洞量 (洗盘)' : 'Crater Volume (Wash)',
        mech: lang === 'zh' ? '机制' : 'Mech',
        sig: lang === 'zh' ? '信号' : 'Signal',
        d_mech: lang === 'zh' ? '主力停止护盘进行“休克疗法”，市场交易陷入停滞。' : 'Market maker stops support ("Shock Therapy"), trading halts.',
        d_sig: lang === 'zh' ? '成交量萎缩至极致（凹洞）后突发爆量，是精确买点。' : 'Extreme shrinkage (Crater) followed by burst is a precise entry.',
        extreme: lang === 'zh' ? '极度缩量' : 'Extreme Low'
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <style>{`
            @keyframes bar-grow-up {
                0% { height: 0; }
                100% { height: var(--h); }
            }
            .vol-bar {
                animation: bar-grow-up 2s ease-out forwards;
            }
        `}</style>

        {/* 4.1 Breakout Volume */}
        <Card highlightColor="red" className="relative">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                    <BarChart2 size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.v1.title}</h4>
            </div>
            <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4 flex flex-col justify-end">
                {/* Price Line Overlay */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 p-4">
                    <path d="M10,80 L50,80 L90,75 L130,80 L170,40" fill="none" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="2" />
                    <circle cx="170" cy="40" r="3" className="fill-red-500" />
                    <text x="175" y="35" fontSize="12" className="fill-red-500 font-bold">Breakout</text>
                </svg>

                {/* Volume Bars */}
                <div className="flex items-end justify-between gap-1 h-20 w-full">
                    <div className="w-full bg-slate-300 dark:bg-slate-700 h-10 vol-bar" style={{'--h': '30%'} as React.CSSProperties}></div>
                    <div className="w-full bg-slate-300 dark:bg-slate-700 h-12 vol-bar" style={{'--h': '35%'} as React.CSSProperties}></div>
                    <div className="w-full bg-slate-300 dark:bg-slate-700 h-8 vol-bar" style={{'--h': '25%'} as React.CSSProperties}></div>
                    <div className="w-full bg-slate-300 dark:bg-slate-700 h-10 vol-bar" style={{'--h': '30%'} as React.CSSProperties}></div>
                    
                    {/* The Breakout Bar (Double) */}
                    <div className="w-full bg-red-500 h-24 vol-bar relative group" style={{'--h': '90%'} as React.CSSProperties}>
                         <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[9px] font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                             2x Avg
                         </div>
                    </div>
                </div>
                {/* Avg Line */}
                <div className="absolute bottom-[30%] left-4 right-4 border-t border-dashed border-slate-500 opacity-50"></div>
                <div className="absolute bottom-[32%] left-2 text-[11px] text-slate-500 font-bold">Avg Vol</div>
            </div>
            <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                <li><b>● {t.v1.std}：</b> {t.v1.d_std}</li>
                <li><b>● {t.v1.warn}：</b> {t.v1.d_warn}</li>
            </ul>
        </Card>

        {/* 4.2 Volume Pile */}
        <Card highlightColor="amber" className="relative">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-lg text-amber-600 dark:text-amber-300">
                    <Search size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.v2.title}</h4>
            </div>
             <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4 flex flex-col justify-end">
                {/* Price Line Overlay (Flat) */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 p-4">
                    <path d="M10,60 Q50,65 90,60 T170,60 T250,60" fill="none" className="stroke-slate-400" strokeWidth="1.5" strokeDasharray="4" />
                    <text x="10" y="55" fontSize="12" className="fill-slate-400 italic">Price Flat</text>
                </svg>

                {/* Volume Bars */}
                <div className="flex items-end gap-1 h-20 w-full">
                    {/* Quiet */}
                    <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-4"></div>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-5"></div>
                    
                    {/* Pile 1 */}
                    <div className="flex-1 bg-red-400 dark:bg-red-600 h-12 opacity-80"></div>
                    <div className="flex-1 bg-red-500 dark:bg-red-500 h-16"></div>
                    <div className="flex-1 bg-red-400 dark:bg-red-600 h-10 opacity-80"></div>

                    {/* Quiet */}
                    <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-4"></div>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-3"></div>

                    {/* Pile 2 */}
                    <div className="flex-1 bg-red-400 dark:bg-red-600 h-14 opacity-80"></div>
                    <div className="flex-1 bg-red-500 dark:bg-red-500 h-18"></div>
                    <div className="flex-1 bg-red-400 dark:bg-red-600 h-12 opacity-80"></div>

                     {/* Quiet */}
                     <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-4"></div>
                </div>
                <div className="absolute top-2 right-2 text-xs text-amber-600 font-bold bg-amber-100 dark:bg-amber-900/30 px-1 rounded">{t.v2.hidden}</div>
            </div>
            <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                <li><b>● {t.v2.form}：</b> {t.v2.d_form}</li>
                <li><b>● {t.v2.read}：</b> {t.v2.d_read}</li>
            </ul>
        </Card>

        {/* 4.3 Crater Volume */}
        <Card highlightColor="indigo" className="relative">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-300">
                    <Anchor size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.v3.title}</h4>
            </div>
             <div className="h-40 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4 flex flex-col justify-end">
                {/* U-Shape Curve Overlay */}
                <svg className="absolute bottom-4 left-4 right-4 w-[calc(100%-32px)] h-20 pointer-events-none z-20 overflow-visible">
                    <path d="M0,0 Q100,50 200,0" fill="none" className="stroke-indigo-500" strokeWidth="1.5" strokeDasharray="4" />
                </svg>

                {/* Volume Bars - Decreasing then Exploding */}
                <div className="flex items-end gap-1 h-20 w-full px-2">
                    <div className="flex-1 bg-slate-400 h-10"></div>
                    <div className="flex-1 bg-slate-400 h-8"></div>
                    <div className="flex-1 bg-slate-300 h-6"></div>
                    <div className="flex-1 bg-slate-300 h-4"></div>
                    <div className="flex-1 bg-slate-200 h-2"></div> {/* The Crater Bottom */}
                    <div className="flex-1 bg-slate-200 h-2"></div>
                    <div className="flex-1 bg-slate-300 h-4"></div>
                    <div className="flex-1 bg-slate-300 h-6"></div>
                    <div className="flex-1 bg-slate-400 h-10"></div>
                    {/* Explosion */}
                    <div className="flex-1 bg-green-500 h-20 vol-bar" style={{'--h': '100%'} as React.CSSProperties}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-indigo-600">{t.v3.extreme}</div>
            </div>
             <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                <li><b>● {t.v3.mech}：</b> {t.v3.d_mech}</li>
                <li><b>● {t.v3.sig}：</b> {t.v3.d_sig}</li>
            </ul>
        </Card>
    </div>
  );
};

export const TimeframeResonance: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        month: { title: 'MONTH', tag: lang === 'zh' ? '大阳定调' : 'Big Yang' },
        week: { title: 'WEEK', tag: lang === 'zh' ? '攻击金叉' : 'Attack Cross' },
        day: { title: 'DAY', tag: lang === 'zh' ? '五线开花' : '5-Line Blossom' },
        s1: { title: lang === 'zh' ? '月线前兆' : 'Monthly Omen', d: lang === 'zh' ? 'KD月线低位金叉，MACD绿柱缩短。底分型大阳线吞没前阴。' : 'KD monthly low cross, MACD green shrinks. Bullish engulfing.' },
        s2: { title: lang === 'zh' ? '周线结构' : 'Weekly Structure', d: lang === 'zh' ? '"屠龙刀"形态：MA30/60走平粘合。周线MA5必须金叉MA10/13。' : '"Dragon Saber": MA30/60 flatten. Weekly MA5 crosses MA10/13.' },
        s3: { title: lang === 'zh' ? '日线扳机' : 'Daily Trigger', d: lang === 'zh' ? '在周月共振窗口内，日线出现"五线粘合+倍量突破"，胜率最高。' : 'In resonance window, daily "Adhesion + Double Vol Breakout" has highest win rate.' },
    };

    return (
        <Card className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-slate-200 dark:border-slate-800 transition-colors duration-300">
             <style>{`
                @keyframes candle-grow {
                    0% { height: 0; y: 70; }
                    100% { height: 30px; y: 40; }
                }
                @keyframes draw-cross {
                    0% { stroke-dashoffset: 100; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes signal-flow {
                    0% { transform: translateY(-100%); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translateY(300px); opacity: 0; }
                }
                @keyframes day-explode {
                    0% { r: 0; opacity: 1; }
                    100% { r: 25; opacity: 0; }
                }
                .anim-candle { animation: candle-grow 2s ease-out infinite alternate; }
                .anim-cross { stroke-dasharray: 100; stroke-dashoffset: 0; animation: draw-cross 3s ease-in-out infinite alternate; }
                .anim-flow { animation: signal-flow 3s linear infinite; }
                .anim-explode { animation: day-explode 1.5s ease-out infinite; }
            `}</style>
            
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-3/5 relative">
                    {/* Signal Beam Container */}
                    <div className="absolute left-[120px] top-0 bottom-0 w-1 bg-gradient-to-b from-red-500/0 via-red-500/20 to-red-500/0 z-0">
                        <div className="w-full h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent anim-flow blur-sm"></div>
                    </div>

                    <svg viewBox="0 0 500 300" className="w-full h-auto bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-inner p-4 transition-colors duration-300 relative z-10 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm">
                        
                        {/* MONTH CHART */}
                        <text x="20" y="30" fontSize="13" fontWeight="bold" className="fill-slate-600 dark:fill-slate-400">{t.month.title} ({lang === 'zh' ? '趋势' : 'Trend'})</text>
                        <line x1="20" y1="80" x2="480" y2="80" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
                        {/* Animated Big Yang */}
                        <rect x="112" y="40" width="16" height="30" className="fill-red-500 stroke-red-700 anim-candle" />
                        <line x1="120" y1="35" x2="120" y2="80" className="stroke-red-600" strokeWidth="1"/>
                        <text x="145" y="60" fontSize="12" className="fill-red-500 font-bold">{t.month.tag}</text>
                        
                        {/* WEEK CHART */}
                        <text x="20" y="110" fontSize="13" fontWeight="bold" className="fill-slate-600 dark:fill-slate-400">{t.week.title} ({lang === 'zh' ? '结构' : 'Structure'})</text>
                        <line x1="20" y1="180" x2="480" y2="180" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
                        {/* Animated Cross */}
                        <path d="M80,160 C120,160 160,160 200,150" fill="none" className="stroke-blue-500 anim-cross" strokeWidth="3" opacity="0.5" />
                        <path d="M90,175 C100,170 110,160 120,150 130,140 150,130" fill="none" className="stroke-slate-900 dark:stroke-slate-100 anim-cross" strokeWidth="2" />
                        <circle cx="120" cy="150" r="4" fill="red" className="animate-pulse" />
                        <text x="145" y="155" fontSize="12" fill="red" className="font-bold">{t.week.tag}</text>
                        
                        {/* DAY CHART */}
                        <text x="20" y="210" fontSize="13" fontWeight="bold" className="fill-slate-600 dark:fill-slate-400">{t.day.title} ({lang === 'zh' ? '买点' : 'Entry'})</text>
                        {/* Animated Explosion */}
                        <path d="M80,250 C100,250 110,248 120,250 130,240 150,220" fill="none" className="stroke-red-500" strokeWidth="2" />
                        <g transform="translate(120, 250)">
                             <circle r="0" className="fill-red-500/30 stroke-red-500 anim-explode" strokeWidth="1" />
                             <circle r="0" className="fill-red-500/20 stroke-red-500 anim-explode" strokeWidth="1" style={{animationDelay: '0.5s'}} />
                        </g>
                        <text x="145" y="250" fontSize="12" className="fill-red-500 font-bold">{t.day.tag}</text>
                    </svg>
                </div>
                <div className="w-full md:w-2/5 space-y-4">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-l-red-500 shadow-sm transition-colors duration-300">
                        <div className="font-bold text-red-600 dark:text-red-400 text-sm flex items-center gap-2"><ArrowDown size={14}/> {t.s1.title}</div>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{t.s1.d}</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-l-blue-500 shadow-sm transition-colors duration-300">
                        <div className="font-bold text-blue-600 dark:text-blue-400 text-sm flex items-center gap-2"><Layers size={14}/> {t.s2.title}</div>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{t.s2.d}</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-l-green-500 shadow-sm transition-colors duration-300">
                        <div className="font-bold text-green-600 dark:text-green-400 text-sm flex items-center gap-2"><TrendingUp size={14}/> {t.s3.title}</div>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{t.s3.d}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export const MarketPsychology: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        grind: {
            title: lang === 'zh' ? '庄家的“磨” (The Grind)' : 'The Grind',
            patience: lang === 'zh' ? '散户耐心' : 'Retail Patience',
            mm: lang === 'zh' ? '庄家持仓' : 'MM Holdings',
            will: lang === 'zh' ? '消磨意志' : 'Willpower',
            cost: lang === 'zh' ? '成本固化' : 'Cost Solid',
            d_will: lang === 'zh' ? '股价极小幅度波动（±2%），让散户感到绝望、无聊而卖出。' : 'Tiny volatility (±2%) makes retail despair/bored and sell.',
            d_cost: lang === 'zh' ? '庄家在低位完成大规模建仓，确立五线粘合的成本中枢。' : 'MM completes accumulation at lows, establishing cost center.'
        },
        trap: {
            title: lang === 'zh' ? '散户心理误区' : 'Retail Traps',
            fantasy: lang === 'zh' ? '幻想回调' : 'Fantasy Dip',
            fear: lang === 'zh' ? '恐惧追高' : 'Fear Heights',
            chase: lang === 'zh' ? '高位接盘(鱼尾)' : 'Chase High',
            fomo: lang === 'zh' ? '恐惧追高' : 'Fear',
            miss: lang === 'zh' ? '踏空陷阱' : 'Miss Out',
            d_fomo: lang === 'zh' ? '习惯了横盘，突破3-5%时觉得“太高”，期待回调。' : 'Used to flat range, thinking 3-5% break is "too high".',
            d_miss: lang === 'zh' ? '真正的开花是逼空式上涨（Short Squeeze），不给上车机会。' : 'Real blossom is a short squeeze, giving no chance to enter.'
        },
        matthew: {
            title: lang === 'zh' ? '均线开花的“马太效应”' : 'Matthew Effect (Feedback Loop)',
            self: lang === 'zh' ? '自我实现预言' : 'Self-Fulfilling',
            form: lang === 'zh' ? '形态确立' : 'Form Set',
            algo: lang === 'zh' ? '量化基金扫货' : 'Algo Buy',
            media: lang === 'zh' ? '媒体/资金涌入' : 'Media/Flow',
            price: lang === 'zh' ? '股价推升' : 'Price Up',
            desc: lang === 'zh' ? '趋势交易者入场 → 量化算法扫货 → 媒体报道跟进 → 更多资金推升 → 强化发散角度' : 'Trend Traders In → Algos Buy → Media Follows → More Flow → Reinforce Divergence'
        }
    };

    return (
        <div className="space-y-6">
            <style>{`
                @keyframes grind-wave {
                    0% { transform: translateY(0); }
                    25% { transform: translateY(-2px); }
                    50% { transform: translateY(0); }
                    75% { transform: translateY(2px); }
                    100% { transform: translateY(0); }
                }
                @keyframes bar-shrink {
                    0% { height: 40px; opacity: 1; }
                    100% { height: 10px; opacity: 0.3; }
                }
                @keyframes bar-grow {
                    0% { height: 10px; opacity: 0.3; }
                    100% { height: 50px; opacity: 1; }
                }
                @keyframes dash-flow {
                    to { stroke-dashoffset: -20; }
                }
                .grind-anim { animation: grind-wave 3s ease-in-out infinite; }
                .retail-patience { animation: bar-shrink 4s linear infinite alternate; }
                .mm-accumulation { animation: bar-grow 4s linear infinite alternate; }
                .flow-line { animation: dash-flow 1s linear infinite; }
            `}</style>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 6.1 The Grind */}
                <Card highlightColor="slate" className="h-full">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-600 dark:text-slate-300">
                             <Brain size={18} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.grind.title}</h4>
                    </div>
                    <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative overflow-hidden p-4">
                        {/* Grinding Price Line */}
                        <div className="absolute top-1/2 left-0 w-full h-8 flex items-center">
                             <svg width="100%" height="100%" className="grind-anim">
                                 <path d="M0,15 Q20,10 40,15 T80,15 T120,15 T160,15 T200,15 T240,15 T280,15 T320,15" fill="none" className="stroke-slate-400" strokeWidth="2" />
                             </svg>
                        </div>
                        
                        {/* Bars comparison */}
                        <div className="flex justify-between items-end h-full pt-8 relative z-10">
                            <div className="text-center w-1/3">
                                <div className="text-sm text-slate-500 mb-1 font-bold">{t.grind.patience}</div>
                                <div className="w-8 mx-auto bg-green-400/50 rounded-t retail-patience"></div>
                            </div>
                            <div className="text-center w-1/3">
                                <div className="text-sm text-slate-500 mb-1 font-bold">{t.grind.mm}</div>
                                <div className="w-8 mx-auto bg-red-500 rounded-t mm-accumulation"></div>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 text-xs text-slate-500 font-bold">Time: Weeks/Months</div>
                    </div>
                    <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                        <li><b>● {t.grind.will}：</b> {t.grind.d_will}</li>
                        <li><b>● {t.grind.cost}：</b> {t.grind.d_cost}</li>
                    </ul>
                </Card>

                {/* 6.2 Retail Traps */}
                <Card highlightColor="red" className="h-full">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded-lg text-red-600 dark:text-red-300">
                             <Users size={18} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.trap.title}</h4>
                    </div>
                    <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-4 relative p-4">
                        <svg viewBox="0 0 300 120" className="w-full h-full">
                            {/* Grid */}
                            <line x1="0" y1="100" x2="300" y2="100" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
                            
                            {/* Fantasy Path (Dotted) */}
                            <path d="M50,100 L80,50 L120,80 L160,40" fill="none" className="stroke-slate-400 stroke-dasharray-2" strokeWidth="1.5" />
                            <text x="120" y="95" fontSize="12" className="fill-slate-400 font-bold">{t.trap.fantasy}</text>
                            
                            {/* Reality Path (Solid) */}
                            <path d="M50,100 L80,50 L120,30 L160,10 L250,5" fill="none" className="stroke-red-500" strokeWidth="2.5" />
                            
                            {/* Annotations */}
                            <circle cx="80" cy="50" r="3" className="fill-red-500" />
                            <text x="50" y="45" fontSize="12" className="fill-slate-500 dark:fill-slate-400 font-bold">{t.trap.fear}</text>
                            
                            <circle cx="250" cy="5" r="3" className="fill-red-500" />
                            <text x="210" y="20" fontSize="12" className="fill-red-500 font-bold">{t.trap.chase}</text>
                        </svg>
                    </div>
                    <ul className="text-lg font-medium text-slate-700 dark:text-slate-300 space-y-2">
                        <li><b>● {t.trap.fomo}：</b> {t.trap.d_fomo}</li>
                        <li><b>● {t.trap.miss}：</b> {t.trap.d_miss}</li>
                    </ul>
                </Card>
            </div>

            {/* 6.3 Matthew Effect */}
            <Card highlightColor="blue">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg text-blue-600 dark:text-blue-300">
                         <RefreshCw size={18} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.matthew.title}</h4>
                </div>
                
                <div className="relative h-32 md:h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center">
                     {/* Central Text */}
                     <div className="absolute z-10 text-center">
                         <div className="font-black text-sm text-blue-800 dark:text-blue-300 uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm border border-blue-100 dark:border-blue-900">
                            {t.matthew.self}
                            <br/>Self-Fulfilling
                         </div>
                     </div>

                     {/* Cycle Nodes */}
                     <div className="w-full max-w-md h-full relative">
                         {/* Top: Breakout */}
                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                             <Zap size={16} className="text-yellow-500 fill-yellow-500 mb-1" />
                             <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{t.matthew.form}</span>
                         </div>
                         
                         {/* Right: Algo/Funds */}
                         <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 flex flex-col items-center">
                             <Activity size={16} className="text-green-500 mb-1" />
                             <span className="text-xs font-bold text-slate-600 dark:text-slate-300 text-center" dangerouslySetInnerHTML={{__html: t.matthew.algo.replace(' ','<br/>')}}></span>
                         </div>

                         {/* Bottom: Media */}
                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                             <Users size={16} className="text-purple-500 mb-1" />
                             <span className="text-xs font-bold text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{__html: t.matthew.media.replace('/','<br/>')}}></span>
                         </div>

                         {/* Left: Price Up */}
                         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 flex flex-col items-center">
                             <TrendingUp size={16} className="text-red-500 mb-1" />
                             <span className="text-xs font-bold text-slate-600 dark:text-slate-300 text-center" dangerouslySetInnerHTML={{__html: t.matthew.price.replace(' ','<br/>')}}></span>
                         </div>

                         {/* Connecting Arrows (SVG) */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none">
                             <circle cx="50%" cy="50%" r="35%" fill="none" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="20" opacity="0.1" />
                             <path d="M50,10 Q80,10 90,40" vectorEffect="non-scaling-stroke" fill="none" className="stroke-blue-400 flow-line" strokeWidth="2" strokeDasharray="4" />
                             {/* Simplified visual representation of flow */}
                             <circle cx="50%" cy="50%" r="35%" fill="none" className="stroke-blue-500 flow-line" strokeWidth="1.5" strokeDasharray="5, 5" />
                         </svg>
                     </div>
                </div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-3 text-center">
                    {t.matthew.desc}
                </p>
            </Card>
        </div>
    );
};

export const SystemEvolution: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '线性系统 vs 斐波那契系统' : 'Linear vs Fibonacci System',
        subtitle: lang === 'zh' ? '市场共识与自然法则的较量' : 'Market Consensus vs Natural Law',
        linear: lang === 'zh' ? '传统线性 (30/60)' : 'Traditional (30/60)',
        fibo: lang === 'zh' ? '斐波那契 (34/55)' : 'Fibonacci (34/55)',
        fake: lang === 'zh' ? '骗线击穿' : 'Fake Breakdown',
        support: lang === 'zh' ? '精准支撑' : 'Precise Support',
        a_title: lang === 'zh' ? 'A. 传统线性系统 (MA 5/10/20/30/60)' : 'A. Linear System (MA 5/10/20/30/60)',
        a_pro: lang === 'zh' ? '优势：全市场90%散户使用，共识度高，心理支撑强。' : 'Pro: Used by 90% retail. High consensus.',
        a_con: lang === 'zh' ? '劣势：极易被量化算法针对。主力常刻意瞬间击穿30日线制造恐慌（洗盘），随后拉起。' : 'Con: Targeted by algos. Often fake breakdowns.',
        b_title: lang === 'zh' ? 'B. 斐波那契系统 (MA 13/21/34/55/89)' : 'B. Fibonacci System (MA 13/21/34/55/89)',
        b_pro: lang === 'zh' ? '优势：贴合自然波动法则。55日线往往比60日线提前5天反应，能捕捉到主力在防守位的“偷跑”买点。' : 'Pro: Natural law. MA55 reacts earlier than MA60. Catch "front-run" entries.',
        b_con: lang === 'zh' ? '劣势：若个股缺乏主力控盘，可能因缺乏群体性共振而失效。' : 'Con: May fail if stock lacks strong MM control due to lower consensus.'
    };

    return (
        <Card highlightColor="indigo">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                    <h4 className="font-bold text-xl text-indigo-900 dark:text-indigo-200 flex items-center gap-2"><Activity size={20}/> {t.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-base mt-1">{t.subtitle}</p>
                </div>
                <div className="flex gap-2">
                    <Tag color="slate">MA 5/10/20/30/60</Tag>
                    <Tag color="amber">MA 13/21/34/55/89</Tag>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-900 rounded p-4 border border-slate-100 dark:border-slate-800 h-48 relative transition-colors duration-300">
                    <div className="absolute top-2 left-2 text-xs font-bold text-slate-500 dark:text-slate-500">{t.linear}</div>
                    <path d="M10,80 C100,80 200,80 300,80" className="stroke-slate-400 dark:stroke-slate-600 block" strokeWidth="2" strokeDasharray="4" fill="none" />
                    <path d="M10,60 L50,70 L100,90 L150,75 L200,50" className="stroke-slate-900 dark:stroke-slate-100 block" strokeWidth="1.5" fill="none" />
                    <circle cx="100" cy="90" r="4" fill="red" className="block" />
                    <text x="100" y="110" fontSize="12" fill="red" textAnchor="middle" className="font-bold">{t.fake}</text>

                    <div className="absolute bottom-2 right-2 text-xs font-bold text-amber-600 dark:text-amber-400">{t.fibo}</div>
                    <svg viewBox="0 0 320 160" className="absolute top-0 left-0 w-full h-full pointer-events-none">
                         <path d="M10,140 C100,135 200,130 300,120" className="stroke-amber-500" strokeWidth="2" fill="none" />
                         <path d="M10,120 L50,130 L100,138 L150,110" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="1.5" fill="none" opacity="0.5" />
                         <circle cx="100" cy="138" r="4" className="fill-green-600" />
                         <text x="100" y="155" fontSize="12" className="fill-green-600 font-bold" textAnchor="middle">{t.support}</text>
                    </svg>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                    <div>
                        <h5 className="font-bold text-slate-700 dark:text-slate-300 text-lg mb-1">{t.a_title}</h5>
                        <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t.a_pro}<br />
                            {t.a_con}
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-amber-700 dark:text-amber-400 text-lg mb-1">{t.b_title}</h5>
                        <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t.b_pro}<br />
                            {t.b_con}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};