import React, { useState, useEffect } from 'react';
import { Card, Tag } from './Card';
import { Clock, Minimize2, Wallet, Sigma, TrendingUp, BarChart2, Layers, Brain, Lock, ArrowRight, Activity, ArrowDown, Cpu, Sliders, Zap, ShieldCheck, Users, RefreshCw, Scissors, Anchor, Calculator, MousePointerClick, ChevronRight, Megaphone, Coins } from 'lucide-react';
import { Lang } from '../types';

// --- 1. MA Architecture ---
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
  };

  return (
    <div className="space-y-6">
        <Card highlightColor="slate" className="relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-600 dark:text-slate-300">
                    <Clock size={18} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
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
                        <span className={`text-base font-bold mb-1 px-1.5 py-0.5 rounded-full w-full
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
                        <div className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-0.5 whitespace-nowrap">{item.name}</div>
                        <div className="text-sm leading-tight text-slate-600 dark:text-slate-400 font-medium">{item.capital}</div>
                    </div>
                ))}
            </div>
            <p className="text-xl font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded italic border-l-4 border-slate-300 dark:border-slate-600 leading-relaxed">
                {t.insight}
            </p>
        </Card>
    </div>
  );
};

// --- 3. Adhesion Morphology ---
export const AdhesionMorphology: React.FC<{ lang: Lang }> = ({ lang }) => {
    // Advanced Calculator State
    const [inputs, setInputs] = useState({
        price: '10.50',
        ma1: '10.45',
        ma2: '10.55',
        ma3: '10.48',
        ma4: '10.52',
        ma5: '10.50'
    });
    const [result, setResult] = useState({
        max: 0,
        min: 0,
        spread: 0,
        adhesion: 0
    });

    useEffect(() => {
        const values = [
            parseFloat(inputs.ma1),
            parseFloat(inputs.ma2),
            parseFloat(inputs.ma3),
            parseFloat(inputs.ma4),
            parseFloat(inputs.ma5)
        ].filter(v => !isNaN(v) && v > 0);

        if (values.length > 0) {
            const max = Math.max(...values);
            const min = Math.min(...values);
            const spread = max - min;
            // Adhesion formula: (Max - Min) / Min * 100
            const adhesion = (spread / min) * 100;
            
            setResult({
                max,
                min,
                spread,
                adhesion
            });
        }
    }, [inputs]);

    const handleChange = (field: string, val: string) => {
        setInputs(prev => ({ ...prev, [field]: val }));
    };

    const getStatus = (c: number) => {
        if (c < 2) return { t: lang === 'zh' ? '极致粘合 (超级牛股前兆)' : 'Extreme (Super Bull)', c: 'bg-red-500 text-white shadow-red-500/50' };
        if (c < 5) return { t: lang === 'zh' ? '紧密粘合 (高爆发概率)' : 'Tight (High Prob)', c: 'bg-green-500 text-white shadow-green-500/50' };
        if (c < 10) return { t: lang === 'zh' ? '松散粘合 (具备关注价值)' : 'Loose (Watch)', c: 'bg-yellow-500 text-white shadow-yellow-500/50' };
        return { t: lang === 'zh' ? '发散状态 (等待收敛)' : 'Divergent (Wait)', c: 'bg-slate-400 text-white' };
    };

    const status = getStatus(result.adhesion);

    const t = {
      title: lang === 'zh' ? '均线粘合的几何形态学与微观结构' : 'Geometric Morphology & Microstructure of MA Adhesion',
      intro: lang === 'zh' ? '“粘合”（Adhesion，又称“米黑”）是花蕾形成的孕育期，是爆发前最关键的蓄势阶段。对这一阶段的微观结构分析，决定了对后续爆发成功率的预判。' : '"Adhesion" is the incubation period of the bud, the critical accumulation phase. Micro-analysis here determines success rate.',
      def: {
          title: lang === 'zh' ? '粘合的数学定义与视觉特征' : 'Mathematical Definition & Visuals',
          formula_desc: lang === 'zh' ? '从算法角度看，粘合并非要求五条线绝对重合，而是要求其离散度降低至特定阈值以下。' : 'Algorithmically, lines don\'t need to overlap perfectly, but variance must drop below a threshold.',
      },
      braid: {
          title: lang === 'zh' ? '均线互换与编织 (The Braid)' : 'MA Exchange & The Braid',
          desc: lang === 'zh' ? '短期均线（30/60）反复穿越长期均线（120/250），形成“编织状”或“麻花状”的一系列微小金叉死叉。' : 'Short MAs weave through Long MAs, forming a braid of micro crosses.',
          insight: lang === 'zh' ? '深度洞察：这是多空双方在狭窄箱体内进行的激烈阵地争夺战。' : 'Insight: Fierce trench warfare within a narrow box.',
          fake: lang === 'zh' ? '假突破识别：粘合初期MA30上穿MA250后迅速回落，是主力“试盘”测压，非形态失败。' : 'Fakeout: MA30 spikes above MA250 then drops. MM testing pressure.'
      },
      vol: {
          title: lang === 'zh' ? '量能特征：地量法则' : 'Volume: Land Volume Rule',
          rule: lang === 'zh' ? '“无量不成结”。成交量必须极度萎缩（地量）。' : '"No volume, no knot." Volume must shrink to extreme.',
          turnover: lang === 'zh' ? '换手率 < 1%' : 'Turnover < 1%',
          psych: lang === 'zh' ? '心理暗示：抛压枯竭，想卖的卖光了。若粘合期放量，往往是出货而非吸筹。' : 'Psychology: Selling exhausted. High volume during adhesion usually means distribution.'
      },
      calc: {
          title: lang === 'zh' ? '专业粘合度计算器' : 'Pro Adhesion Calculator',
          inputs: lang === 'zh' ? '请输入下列均线的具体数值:' : 'Input Specific MA Values:',
          price: lang === 'zh' ? '当前股价' : 'Current Price',
          res_title: lang === 'zh' ? '计算结果' : 'Result',
          spread: lang === 'zh' ? '极差 (Spread)' : 'Spread',
          rate: lang === 'zh' ? '粘合系数' : 'Adhesion Rate'
      }
    };
  
    // Labels for the input fields
    const maLabels = ['MA5', 'MA10', 'MA20', 'MA30', 'MA60'];

    return (
      <div className="space-y-6">
          <style>{`
            @keyframes weave-1 { 0%, 100% { d: path("M0,40 Q50,30 100,40 T200,40"); } 50% { d: path("M0,40 Q50,50 100,40 T200,40"); } }
            @keyframes weave-2 { 0%, 100% { d: path("M0,40 Q50,50 100,40 T200,40"); } 50% { d: path("M0,40 Q50,30 100,40 T200,40"); } }
            .anim-weave-1 { animation: weave-1 3s ease-in-out infinite; }
            .anim-weave-2 { animation: weave-2 3s ease-in-out infinite; }
          `}</style>

          {/* Intro Card */}
          <Card highlightColor="blue" className="relative group">
              <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg text-blue-600 dark:text-blue-300">
                      <Activity size={18} />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
                  {t.intro}
              </p>
              
              {/* Professional Calculator */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-inner">
                  <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-800 pb-2">
                      <Calculator size={18} className="text-blue-600" />
                      {t.calc.title}
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-8">
                      {/* Inputs */}
                      <div className="flex-1">
                          <label className="block text-xs font-bold text-slate-500 mb-2">{t.calc.inputs}</label>
                          <div className="grid grid-cols-3 gap-3 mb-4">
                              {maLabels.map((label, i) => (
                                  <div key={i}>
                                      <label className="block text-[10px] text-slate-400 font-mono mb-1">{label}</label>
                                      <input 
                                        type="number" 
                                        placeholder={label}
                                        value={inputs[`ma${i+1}` as keyof typeof inputs]}
                                        onChange={(e) => handleChange(`ma${i+1}`, e.target.value)}
                                        className="w-full p-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                      />
                                  </div>
                              ))}
                              <div>
                                  <label className="block text-[10px] text-blue-400 font-mono mb-1 font-bold">{t.calc.price}</label>
                                  <input 
                                    type="number" 
                                    placeholder={t.calc.price}
                                    value={inputs.price}
                                    onChange={(e) => handleChange('price', e.target.value)}
                                    className="w-full p-2 rounded border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 font-mono text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none placeholder-blue-300"
                                  />
                              </div>
                          </div>
                      </div>

                      {/* Results */}
                      <div className="flex-1 flex flex-col justify-between bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                          <div className="relative z-10">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs text-slate-500 font-bold uppercase">{t.calc.spread}</span>
                                 <span className="font-mono font-medium text-slate-600 dark:text-slate-400">
                                     {result.max.toFixed(2)} - {result.min.toFixed(2)} = <span className="text-slate-900 dark:text-slate-100 font-bold">{result.spread.toFixed(2)}</span>
                                 </span>
                             </div>
                             <div className="flex justify-between items-end">
                                 <div>
                                     <span className="text-xs text-slate-500 font-bold uppercase block mb-1">{t.calc.rate}</span>
                                     <div className={`text-4xl font-black ${result.adhesion < 5 ? 'text-green-500' : result.adhesion < 10 ? 'text-yellow-500' : 'text-slate-400'}`}>
                                         {result.adhesion.toFixed(2)}%
                                     </div>
                                 </div>
                                 <div className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg transform transition-all duration-300 ${status.c}`}>
                                     {status.t}
                                 </div>
                             </div>
                          </div>
                          {/* Background Deco */}
                          <Calculator className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-700 opacity-50" size={100} />
                      </div>
                  </div>
              </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* The Braid */}
               <Card highlightColor="indigo">
                   <h5 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                       <Scissors size={18} className="text-indigo-500" /> {t.braid.title}
                   </h5>
                   <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-3 relative overflow-hidden flex items-center justify-center p-4">
                        <svg className="w-full h-full" viewBox="0 0 200 80">
                             {/* Long MA Flat */}
                             <path d="M0,40 L200,40" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="4" />
                             
                             {/* Weaving MAs */}
                             <path d="M0,40 Q50,30 100,40 T200,40" fill="none" className="stroke-indigo-500 anim-weave-1" strokeWidth="1.5" />
                             <path d="M0,40 Q50,50 100,40 T200,40" fill="none" className="stroke-purple-500 anim-weave-2" strokeWidth="1.5" />
                             
                             {/* Fake Breakout */}
                             <path d="M60,40 L70,10 L80,40" fill="none" className="stroke-red-500" strokeWidth="1" strokeDasharray="2" />
                             <text x="70" y="8" fontSize="6" textAnchor="middle" className="fill-red-500 font-bold">FAKE</text>
                        </svg>
                   </div>
                   <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                       <p>{t.braid.desc}</p>
                       <p className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded border-l-2 border-indigo-400 text-indigo-800 dark:text-indigo-300 text-xs">
                           {t.braid.insight}
                       </p>
                       <p className="bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-2 border-red-400 text-red-800 dark:text-red-300 text-xs">
                           {t.braid.fake}
                       </p>
                   </div>
               </Card>

               {/* Land Volume */}
               <Card highlightColor="green">
                   <h5 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                       <BarChart2 size={18} className="text-green-500" /> {t.vol.title}
                   </h5>
                   <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 mb-3 relative overflow-hidden flex items-end justify-center p-4">
                        <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">Price Flat</div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-300 dashed"></div>
                        
                        <div className="flex items-end gap-1 w-full h-full justify-center">
                             {[50, 45, 40, 35, 30, 25, 20, 15, 10, 8, 5, 5, 5, 5, 5].map((h, i) => (
                                 <div key={i} className={`w-3 rounded-t ${h < 10 ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`} style={{height: `${h}%`}}></div>
                             ))}
                        </div>
                        <div className="absolute bottom-10 text-xs font-bold text-green-600 bg-green-100 px-2 rounded">Di Liang (Land Vol)</div>
                   </div>
                   <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                       <p>{t.vol.rule}</p>
                       <div className="flex items-center gap-2">
                           <span className="font-bold text-green-600">{t.vol.turnover}</span>
                       </div>
                       <p className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs italic">
                           {t.vol.psych}
                       </p>
                   </div>
               </Card>
          </div>
      </div>
    );
};

// --- 4. Trend Geometry ---
export const TrendGeometry: React.FC<{ lang: Lang }> = ({ lang }) => {
    const [price, setPrice] = useState(12.00);
    const [ma60, setMa60] = useState(10.00);
    const [bias, setBias] = useState(0);

    useEffect(() => {
        if(ma60 > 0) {
            const b = ((price - ma60) / ma60) * 100;
            setBias(parseFloat(b.toFixed(2)));
        }
    }, [price, ma60]);

    const getStatus = (b: number) => {
        if (b < 10) return { t: lang === 'zh' ? '初期 (安全/最佳)' : 'Early (Safe/Best)', c: 'bg-green-500 text-white' };
        if (b < 20) return { t: lang === 'zh' ? '中期 (持有)' : 'Mid (Hold)', c: 'bg-blue-500 text-white' };
        return { t: lang === 'zh' ? '过热 (高风险/均值回归)' : 'Overheated (Risk)', c: 'bg-red-500 text-white' };
    };
    
    const status = getStatus(bias);

    const t = {
        title: lang === 'zh' ? '趋势几何学：多头排列的惯性保障' : 'Trend Geometry: Inertia of Bullish Alignment',
        math: {
            title: lang === 'zh' ? '多头排列的数学稳定性' : 'Mathematical Stability',
            desc: lang === 'zh' 
                ? '定义：MA(5) > MA(10) > MA(20) > MA(60)，且斜率均为正。这种结构构成“多重支撑网”。股价回踩时，获利盘惜售，空仓者进场，形成“自我强化”。'
                : 'Def: MA(5)>MA(10)>...>MA(60), slopes positive. Forms a "Support Mesh". Self-reinforcing trend.',
        },
        bias: {
             title: lang === 'zh' ? '均线发散度的监控 (BIAS)' : 'Monitoring Divergence (BIAS)',
             desc: lang === 'zh' 
                ? '过度发散意味着风险。当 BIAS(60) > 20% 时，股价偏离长期成本太远，随时可能均值回归（暴跌）。最佳交易区间是“多头排列初期”（BIAS < 10%）。'
                : 'Excessive divergence = Risk. BIAS(60) > 20% implies reversion risk. Best zone is "Early Stage" (BIAS < 10%).'
        },
        calc: {
            title: lang === 'zh' ? 'BIAS(60) 计算器' : 'BIAS(60) Calculator',
            p: lang === 'zh' ? '当前股价' : 'Current Price',
            m: lang === 'zh' ? 'MA60 价格' : 'MA60 Price'
        }
    };

    return (
        <div className="space-y-6">
            <style>{`
                @keyframes fan-out {
                    0% { d: path("M0,100 Q100,100 200,100"); }
                    100% { d: path("M0,100 Q100,50 200,var(--end)"); }
                }
                .anim-fan { animation: fan-out 2s ease-out forwards; }
                .price-bounce { animation: bounce-trend 3s infinite; }
                @keyframes bounce-trend {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(10px); }
                    100% { transform: translateY(0); }
                }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Visual Concept */}
                <Card highlightColor="blue" className="h-full">
                     <div className="flex items-center gap-2 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-blue-600 dark:text-blue-300">
                             <TrendingUp size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.math.title}</h4>
                     </div>
                     
                     <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 relative mb-4 overflow-hidden p-4">
                          <svg className="w-full h-full" viewBox="0 0 200 120">
                               {/* Fanning Lines */}
                               <path d="M0,100 Q100,100 200,100" fill="none" className="stroke-slate-300 dark:stroke-slate-600 anim-fan" style={{'--end': '90'} as React.CSSProperties} strokeWidth="1" />
                               <path d="M0,100 Q100,90 200,70" fill="none" className="stroke-blue-400 anim-fan" style={{'--end': '70'} as React.CSSProperties} strokeWidth="2" />
                               <path d="M0,100 Q100,80 200,50" fill="none" className="stroke-green-400 anim-fan" style={{'--end': '50'} as React.CSSProperties} strokeWidth="2" />
                               <path d="M0,100 Q100,70 200,20" fill="none" className="stroke-red-500 anim-fan" style={{'--end': '20'} as React.CSSProperties} strokeWidth="2" />
                               
                               {/* Self Reinforcement Text */}
                               <text x="100" y="40" fontSize="8" className="fill-slate-500 font-bold" textAnchor="middle">Self-Reinforcement</text>
                               
                               {/* Support Arrows */}
                               <path d="M100,55 L100,65" stroke="currentColor" className="text-slate-400" strokeWidth="1" />
                          </svg>
                     </div>
                     <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                         {t.math.desc}
                     </p>
                </Card>

                {/* BIAS Monitor & Calculator */}
                <Card highlightColor="amber" className="h-full">
                     <div className="flex items-center gap-2 mb-4">
                        <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded text-amber-600 dark:text-amber-300">
                             <Activity size={20} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.bias.title}</h4>
                     </div>

                     <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 mb-4">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300">
                               <Calculator size={16} /> {t.calc.title}
                          </div>
                          
                          <div className="flex gap-4 mb-4">
                               <div className="flex-1">
                                    <label className="block text-xs font-bold text-slate-500 mb-1">{t.calc.p}</label>
                                    <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono" />
                               </div>
                               <div className="flex-1">
                                    <label className="block text-xs font-bold text-slate-500 mb-1">{t.calc.m}</label>
                                    <input type="number" value={ma60} onChange={e => setMa60(Number(e.target.value))} className="w-full p-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-mono" />
                               </div>
                          </div>

                          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                               <div className="text-xs text-slate-400 font-mono">BIAS = (P-MA)/MA</div>
                               <div className="text-right">
                                   <div className={`text-2xl font-black ${bias > 20 ? 'text-red-500' : 'text-slate-800 dark:text-white'}`}>{bias}%</div>
                                   <div className={`text-xs font-bold px-2 py-0.5 rounded text-white ${status.c}`}>{status.t}</div>
                               </div>
                          </div>
                     </div>
                     
                     <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                         {t.bias.desc}
                     </p>
                </Card>
            </div>
        </div>
    );
};

// --- 6. Volume Dynamics ---
export const VolumeDynamics: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    c1: { t: lang==='zh'?'量能倍增法则':'Volume Breakout', d: lang==='zh'?'突破日成交量至少达到粘合期均量的2倍以上。':'Breakout vol > 2x Avg Vol.', w: lang==='zh'?'警惕：无量上涨大概率为假突破，主力诱多。':'Warning: No vol = Trap.' },
    c2: { t: lang==='zh'?'量堆与吸筹':'Accumulation Heap', d: lang==='zh'?'股价波动不大，但间歇性出现连续红柱放量。':'Price flat, intermittent red vol heaps.', i: lang==='zh'?'解读：主力挂大单承接抛压，“涨量跌缩”是实力的证明。':'MM absorbing selling pressure.' },
    c3: { t: lang==='zh'?'凹洞量 (洗盘)':'Concave (Washout)', d: lang==='zh'?'主力停止护盘进行“休克疗法”，市场交易陷入停滞。':'MM stops support. Shock therapy.', m: lang==='zh'?'信号：成交量萎缩至极致（凹洞）后突发爆量，是精确买点。':'Signal: Extreme shrink then Burst.' },
    labels: {
        breakout: lang === 'zh' ? 'Breakout' : 'Breakout',
        avg: lang === 'zh' ? 'Avg Vol' : 'Avg Vol',
        flat: lang === 'zh' ? 'Price Flat' : 'Price Flat',
        hide: lang === 'zh' ? '隐蔽建仓' : 'Hidden Buy',
        shrink: lang === 'zh' ? '极致缩量' : 'Extreme Shrink',
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Breakout */}
        <Card highlightColor="red">
             <div className="flex items-center gap-2 mb-3">
                 <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded text-red-600 dark:text-red-300"><BarChart2 size={18}/></div>
                 <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.c1.t}</h4>
             </div>
             <div className="h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded relative mb-3 overflow-hidden">
                  <svg className="w-full h-full">
                      {/* Price Line - Breakout */}
                      <path d="M10,80 L150,80 L200,40" fill="none" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
                      <circle cx="200" cy="40" r="3" className="fill-red-500" />
                      <text x="200" y="30" fontSize="10" className="fill-red-500 font-bold" textAnchor="middle">{t.labels.breakout}</text>
                      
                      {/* Vol Bars - Shrinking then Explosion */}
                      <line x1="10" y1="95" x2="250" y2="95" className="stroke-slate-300" strokeDasharray="3"/>
                      <text x="15" y="90" fontSize="9" className="fill-slate-400 font-bold">{t.labels.avg}</text>
                      
                      {/* Shrinking Bars */}
                      <rect x="20" y="100" width="15" height="20" className="fill-slate-300 dark:fill-slate-600" />
                      <rect x="40" y="105" width="15" height="15" className="fill-slate-300 dark:fill-slate-600" />
                      <rect x="60" y="110" width="15" height="10" className="fill-slate-300 dark:fill-slate-600" />
                      <rect x="80" y="112" width="15" height="8" className="fill-slate-300 dark:fill-slate-600" />
                      
                      {/* Explosion Bar */}
                      <rect x="190" y="70" width="20" height="50" className="fill-red-500 animate-pulse" />
                  </svg>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">● 标准：{t.c1.d}</p>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">● 警惕：{t.c1.w}</p>
        </Card>

        {/* 2. Accumulation */}
        <Card highlightColor="yellow">
             <div className="flex items-center gap-2 mb-3">
                 <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1.5 rounded text-yellow-600 dark:text-yellow-300"><Layers size={18}/></div>
                 <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.c2.t}</h4>
             </div>
             <div className="h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded relative mb-3 overflow-hidden">
                  <svg className="w-full h-full">
                      <path d="M10,60 Q120,65 250,60" fill="none" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1" strokeDasharray="4"/>
                      <text x="20" y="50" fontSize="10" className="fill-slate-400 italic">{t.labels.flat}</text>
                      
                      {/* Intermittent Red Heaps */}
                      <rect x="20" y="100" width="10" height="10" className="fill-slate-200 dark:fill-slate-700" />
                      <rect x="35" y="95" width="10" height="15" className="fill-slate-200 dark:fill-slate-700" />
                      <rect x="50" y="80" width="10" height="30" className="fill-red-400" /> {/* Heap 1 */}
                      <rect x="65" y="75" width="10" height="35" className="fill-red-400" />
                      <rect x="80" y="90" width="10" height="20" className="fill-red-400" />
                      
                      <rect x="100" y="105" width="10" height="5" className="fill-slate-200 dark:fill-slate-700" />
                      <rect x="115" y="100" width="10" height="10" className="fill-slate-200 dark:fill-slate-700" />
                      
                      <rect x="135" y="80" width="10" height="30" className="fill-red-400" /> {/* Heap 2 */}
                      <rect x="150" y="78" width="10" height="32" className="fill-red-400" />
                      
                      <rect x="170" y="105" width="10" height="5" className="fill-slate-200 dark:fill-slate-700" />
                      <text x="220" y="25" fontSize="9" className="fill-yellow-600 dark:fill-yellow-400 font-bold bg-yellow-100 px-1 rounded">{t.labels.hide}</text>
                  </svg>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">● 形态：{t.c2.d}</p>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">● 解读：{t.c2.i}</p>
        </Card>

        {/* 3. Concave */}
        <Card highlightColor="indigo">
             <div className="flex items-center gap-2 mb-3">
                 <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded text-indigo-600 dark:text-indigo-300"><Minimize2 size={18}/></div>
                 <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.c3.t}</h4>
             </div>
             <div className="h-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded relative mb-3 overflow-hidden">
                  <svg className="w-full h-full">
                       {/* U Shape Vol */}
                       <path d="M20,60 Q125,100 230,60" fill="none" className="stroke-indigo-400 stroke-dasharray-2" />
                       <text x="125" y="80" fontSize="10" className="fill-indigo-500 font-bold" textAnchor="middle">{t.labels.shrink}</text>
                       
                       <rect x="20" y="80" width="12" height="30" className="fill-slate-400" />
                       <rect x="35" y="90" width="12" height="20" className="fill-slate-400" />
                       <rect x="50" y="100" width="12" height="10" className="fill-slate-300" />
                       <rect x="65" y="105" width="12" height="5" className="fill-slate-200" />
                       <rect x="80" y="108" width="12" height="2" className="fill-slate-200" />
                       <rect x="110" y="105" width="12" height="5" className="fill-slate-200" />
                       <rect x="140" y="100" width="12" height="10" className="fill-slate-300" />
                       <rect x="155" y="80" width="12" height="30" className="fill-slate-400" />
                       
                       {/* Burst - RED */}
                       <rect x="175" y="60" width="15" height="50" className="fill-red-500 animate-pulse" />
                  </svg>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">● 机制：{t.c3.d}</p>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">● 信号：{t.c3.m}</p>
        </Card>
    </div>
  );
};

// --- 7. Chip Structure ---
export const ChipStructure: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    s1: lang === 'zh' ? '底部双峰吸筹' : 'Dual Peak Accumulation',
    s2: lang === 'zh' ? '锁仓拉升 (单峰上移)' : 'Locking Ascent',
    s3: lang === 'zh' ? '高位出货 (筹码大转移)' : 'High Distribution',
    desc1: lang === 'zh' ? '股价低位震荡，形成“双峰”结构。上方为割肉盘，下方为主力建仓的获利盘 (红)。' : 'Low price oscillation. Top: Panic sells. Bottom: MM Profit chips (Red).',
    desc2: lang === 'zh' ? '拉升途中，底部获利盘 (红) 纹丝不动 (主力锁仓)。第二个筹码峰开始分离上移，中间出现真空区。' : 'Ascent. Bottom red chips LOCKED (MM holding). Second peak moves up through vacuum.',
    desc3: lang === 'zh' ? '动画演示：底部红色获利盘逐渐消失 (主力派发)，顶部青色套牢盘急剧放大。筹码完成高位集中。' : 'Animation: Bottom red chips vanish (Distribution), top cyan trapped chips grow. High concentration.',
    labels: {
        price_low: 'Price Low',
        dual: 'Dual Peak',
        vacuum: 'Vacuum',
        locked: 'LOCKED',
        dist: 'Distribution',
        exit: 'Exiting...',
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <style>{`
            @keyframes chip-transfer {
                0% { width: 100px; opacity: 1; }
                50% { width: 10px; opacity: 0.5; }
                100% { width: 0px; opacity: 0; }
            }
            @keyframes chip-grow {
                0% { width: 0px; opacity: 0; }
                50% { width: 50px; opacity: 0.5; }
                100% { width: 120px; opacity: 1; }
            }
            .anim-chip-out { animation: chip-transfer 4s infinite alternate; }
            .anim-chip-in { animation: chip-grow 4s infinite alternate; }
            
            @keyframes peak-move-up {
                0% { transform: translateY(0); }
                100% { transform: translateY(-60px); }
            }
            .anim-peak-up { animation: peak-move-up 4s ease-in-out infinite alternate; }
        `}</style>

        {/* Stage A: Dual Peak */}
        <Card highlightColor="blue" className="bg-slate-50 dark:bg-slate-900">
             <div className="flex items-center gap-2 mb-3">
                 <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">A</div>
                 <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.s1}</h4>
             </div>
             {/* Chart container - Always Dark for Terminal Look */}
             <div className="h-52 bg-slate-900 rounded border border-slate-700 relative p-4 mb-3 flex items-end">
                 <div className="absolute top-2 left-2 text-slate-500 text-xs font-mono">{t.labels.price_low}</div>
                 
                 {/* Left Axis */}
                 <div className="h-full w-px bg-slate-700 absolute left-8 top-0"></div>
                 
                 {/* Chips: Red Profit Peaks at Bottom */}
                 <div className="flex flex-col gap-0.5 w-full pl-10">
                      {/* Top Peak (Small, Trapped/Resistance) */}
                      {[10, 20, 30, 40, 30, 20].map((w, i) => (
                          <div key={`top-${i}`} className="h-1 bg-cyan-800" style={{width: w + '%'}}></div>
                      ))}
                      <div className="h-8"></div> {/* Gap */}
                      {/* Bottom Dual Peaks (Red) */}
                      {[30, 50, 70, 80, 60, 40].map((w, i) => (
                          <div key={`b1-${i}`} className="h-1 bg-red-600" style={{width: w + '%'}}></div>
                      ))}
                      <div className="h-2"></div>
                      {[40, 60, 90, 100, 80, 50].map((w, i) => (
                          <div key={`b2-${i}`} className="h-1 bg-red-600" style={{width: w + '%'}}></div>
                      ))}
                 </div>
                 <div className="absolute right-2 bottom-10 text-cyan-400 text-xs font-mono">{t.labels.dual}</div>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.desc1}</p>
        </Card>

        {/* Stage B: Locking Ascent */}
        <Card highlightColor="red" className="bg-slate-50 dark:bg-slate-900">
             <div className="flex items-center gap-2 mb-3">
                 <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">B</div>
                 <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.s2}</h4>
             </div>
             <div className="h-52 bg-slate-900 rounded border border-slate-700 relative p-4 mb-3 flex items-end overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-slate-600 text-xs font-mono italic">{t.labels.vacuum}</div>
                 <div className="h-full w-px bg-slate-700 absolute left-8 top-0"></div>
                 
                 <div className="flex flex-col gap-0.5 w-full pl-10 h-full justify-end">
                      {/* Moving Peak */}
                      <div className="anim-peak-up absolute bottom-20 left-18 w-full">
                           {[20, 40, 60, 50, 30].map((w, i) => (
                               <div key={`m-${i}`} className="h-1 bg-red-500 mb-0.5" style={{width: w + '%'}}></div>
                           ))}
                      </div>

                      {/* Locked Bottom Peak */}
                      <div className="relative">
                          {[50, 70, 90, 100, 80, 60].map((w, i) => (
                              <div key={`l-${i}`} className="h-1 bg-red-700" style={{width: w + '%'}}></div>
                          ))}
                          <div className="absolute right-0 bottom-0 text-red-500 font-bold text-xs animate-pulse">{t.labels.locked}</div>
                      </div>
                 </div>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.desc2}</p>
        </Card>

        {/* Stage C: Distribution */}
        <Card highlightColor="slate" className="bg-slate-50 dark:bg-slate-900">
             <div className="flex items-center gap-2 mb-3">
                 <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">C</div>
                 <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.s3}</h4>
             </div>
             <div className="h-52 bg-slate-900 rounded border border-slate-700 relative p-4 mb-3 flex items-end">
                 <div className="absolute top-4 left-10 text-green-400 text-xs font-mono">{t.labels.dist}</div>
                 <div className="h-full w-px bg-slate-700 absolute left-8 top-0"></div>
                 
                 <div className="flex flex-col gap-0.5 w-full pl-10 h-full justify-between py-2">
                      {/* Top Growing Blue Chips */}
                      <div className="flex flex-col gap-0.5">
                          {[10, 20, 30, 40, 50, 60, 50, 40].map((w, i) => (
                              <div key={`t-${i}`} className="h-1 bg-cyan-500 anim-chip-in" style={{animationDelay: `${i*0.1}s`}}></div>
                          ))}
                      </div>

                      {/* Transfer Arrow */}
                      <div className="self-center opacity-30">
                          <TrendingUp size={24} className="text-slate-500 transform rotate-45" />
                      </div>

                      {/* Bottom Vanishing Red Chips */}
                      <div className="flex flex-col gap-0.5">
                           {[60, 80, 90, 100, 70, 50].map((w, i) => (
                              <div key={`b-${i}`} className="h-1 bg-red-800 anim-chip-out" style={{animationDelay: `${i*0.1}s`, width: w + '%'}}></div>
                          ))}
                           <div className="text-xs text-slate-500 text-right">{t.labels.exit}</div>
                      </div>
                 </div>
             </div>
             <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.desc3}</p>
        </Card>
    </div>
  );
};

// --- 8. Timeframe Resonance ---
export const TimeframeResonance: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        daily: {
            title: lang === 'zh' ? '日线：五线开花' : 'Daily: Blossom',
            desc: lang === 'zh' ? '均线极致粘合，大阳线（>5%）一阳穿多线，确立启动点。' : 'Extreme MA adhesion. Big Yang (>5%) crosses lines. Launch point.',
            label: lang === 'zh' ? '日线开花' : 'Daily Blossom'
        },
        weekly: {
            title: lang === 'zh' ? '周线：屠龙刀' : 'Weekly: Dragon Saber',
            desc: lang === 'zh' ? 'MA5金叉MA10。MA30与MA60接近走平并粘合（关键！）。中期大底特征。' : 'MA5 cross MA10 up. MA30/60 flatten & bond (Key). Mid-term bottom.',
            labels: {
                saber: lang === 'zh' ? '屠龙刀' : 'DRAGON SABER',
                bond: lang === 'zh' ? 'MA30/60粘合' : 'MA30/60 Bond'
            }
        },
        monthly: {
            title: lang === 'zh' ? '月线：30月线回踩信条' : 'Monthly: 30M MA Retest',
            desc: lang === 'zh' ? '月线放量突破30月均线，次月缩量回踩30月线不破。这是超级牛股的黄金起涨点。' : 'Breakout 30-Month MA with volume, retest next month without breaking. Golden launch point.',
            labels: {
                ma30: 'MA30',
                break: lang === 'zh' ? '突破' : 'Break',
                retest: lang === 'zh' ? '回踩确认' : 'Retest',
                launch: lang === 'zh' ? '起涨点' : 'Launch'
            }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Daily - Five Line Blossom */}
            <Card highlightColor="blue" className="bg-white dark:bg-slate-900 flex flex-col h-full">
                <div className="h-40 bg-slate-900 rounded border border-slate-700 relative mb-3 p-2 flex items-center justify-center">
                    <svg className="w-full h-full">
                        {/* 5 Lines Blooming */}
                        <path d="M10,80 Q50,80 100,50" stroke="#fcd34d" fill="none" strokeWidth="1" />
                        <path d="M10,80 Q50,80 100,40" stroke="#fff" fill="none" strokeWidth="1" />
                        <path d="M10,80 Q50,80 100,60" stroke="#c084fc" fill="none" strokeWidth="1" />
                        <path d="M10,80 Q50,80 100,90" stroke="#4ade80" fill="none" strokeWidth="1" />
                        <path d="M10,80 Q50,80 100,100" stroke="#60a5fa" fill="none" strokeWidth="1" />
                        {/* Big Red Yang */}
                        <rect x="80" y="30" width="10" height="60" className="fill-red-600 stroke-red-400" />
                        <text x="50" y="20" className="fill-blue-400 text-xs font-mono">{t.daily.label}</text>
                    </svg>
                </div>
                <h4 className="font-bold text-lg mb-1 text-center text-slate-900 dark:text-slate-100">{t.daily.title}</h4>
                <p className="text-sm text-slate-500 text-center">{t.daily.desc}</p>
            </Card>
            
            {/* Weekly - Dragon Saber (Tu Long Dao) */}
            <Card highlightColor="amber" className="bg-white dark:bg-slate-900 flex flex-col h-full">
                <div className="h-40 bg-slate-900 rounded border border-slate-700 relative mb-3 p-2 flex items-center justify-center">
                    <svg className="w-full h-full">
                         {/* MA30 (Green) & MA60 (Blue) Flat Bonding */}
                         <path d="M0,80 Q100,80 200,75" stroke="#4ade80" fill="none" strokeWidth="3" />
                         <path d="M0,82 Q100,82 200,78" stroke="#60a5fa" fill="none" strokeWidth="3" strokeDasharray="4" />
                         
                         {/* MA10 (Yellow) */}
                         <path d="M0,90 Q50,90 100,85 T200,60" stroke="#fcd34d" fill="none" strokeWidth="2" />
                         
                         {/* MA5 (White) Golden Cross MA10 */}
                         <path d="M0,100 Q40,95 80,75 L120,40" stroke="#fff" fill="none" strokeWidth="2" />

                         {/* Cross Point */}
                         <circle cx="80" cy="75" r="4" className="fill-red-500 animate-ping" />
                         
                         <text x="120" y="30" className="fill-amber-400 text-xs font-bold font-mono">{t.weekly.labels.saber}</text>
                         <text x="130" y="70" className="fill-green-400 text-[10px] font-mono">{t.weekly.labels.bond}</text>
                    </svg>
                </div>
                <h4 className="font-bold text-lg mb-1 text-center text-slate-900 dark:text-slate-100">{t.weekly.title}</h4>
                <p className="text-sm text-slate-500 text-center">{t.weekly.desc}</p>
            </Card>

            {/* Monthly - 30M Break & Retest */}
            <Card highlightColor="red" className="bg-white dark:bg-slate-900 flex flex-col h-full">
                <div className="h-40 bg-slate-900 rounded border border-slate-700 relative mb-3 p-2 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                         {/* MA30 (30-Month Line) - Curved Up */}
                         <path d="M10,90 Q100,80 190,60" stroke="#facc15" fill="none" strokeWidth="2" />
                         <text x="150" y="55" className="fill-yellow-400 text-[10px] font-mono font-bold">{t.monthly.labels.ma30}</text>
                         
                         {/* Candle 1: Breakout (Red) */}
                         <rect x="60" y="50" width="12" height="50" className="fill-red-600 stroke-red-400" />
                         <text x="60" y="40" className="fill-red-400 text-[9px] font-mono">{t.monthly.labels.break}</text>

                         {/* Candle 2: Retest (Small Green/Red) sitting on line */}
                         <rect x="90" y="70" width="12" height="15" className="fill-red-600 stroke-red-400" />
                         <line x1="96" y1="85" x2="96" y2="88" className="stroke-red-400" /> {/* Lower Shadow touching line */}
                         
                         {/* Launch Arrow */}
                         <path d="M110,80 L130,40" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrowhead)" />
                         <text x="110" y="95" className="fill-green-400 text-[10px] font-bold">{t.monthly.labels.retest}</text>
                         <text x="135" y="35" className="fill-green-400 text-xs font-bold animate-pulse">{t.monthly.labels.launch}</text>
                    </svg>
                </div>
                <h4 className="font-bold text-lg mb-1 text-center text-slate-900 dark:text-slate-100">{t.monthly.title}</h4>
                <p className="text-sm text-slate-500 text-center">{t.monthly.desc}</p>
            </Card>
        </div>
    );
};

// --- 13. System Evolution ---
export const SystemEvolution: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        noise: {
            title: lang === 'zh' ? '算法噪音与“骗线” (Bear Trap)' : 'Algo Noise & Bear Trap',
            desc: lang === 'zh' ? '量化算法制造瞬间跌破均线（绿色诱空），随后迅速拉起（红色诱多）。' : 'Algos fake breakdown (Green), then rally (Red).',
            action: lang === 'zh' ? '应对：收盘确认 / 3日原则' : 'Action: Close Confirm / 3-Day Rule',
            labels: {
                trap: lang === 'zh' ? '诱空陷阱' : 'Bear Trap',
                support: lang === 'zh' ? '关键支撑' : 'Support',
                recover: lang === 'zh' ? 'V型反转' : 'V-Recovery'
            }
        },
        fib: {
            title: lang === 'zh' ? '斐波那契与自适应均线' : 'Fibonacci & Adaptive MA',
            desc: lang === 'zh' ? '使用 13, 21, 34, 55 (Fib) 数列替代传统参数，形成动态支撑网。' : 'Use Fib sequence (13, 21, 34, 55) as dynamic support net.',
            adv: lang === 'zh' ? '捕捉隐秘支撑' : 'Catch Hidden Support',
            labels: {
                net: lang === 'zh' ? 'Fib支撑网' : 'Fib Net',
                touch: lang === 'zh' ? '精准回踩' : 'Touch'
            },
            benefits_title: lang === 'zh' ? '核心优势' : 'Core Benefits',
            benefits: lang === 'zh' 
                ? ['1. 过滤横盘噪音 (自适应平滑)', '2. 捕捉隐秘的自然支撑位 (非整数关口)', '3. 抢在传统均线派发前离场']
                : ['1. Filter sideways noise (Adaptive)', '2. Catch hidden natural support levels', '3. Exit before standard MA herd']
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <style>{`
                @keyframes trap-drop-v {
                    0% { height: 10px; y: 80px; fill: #22c55e; }
                    40% { height: 50px; y: 80px; fill: #22c55e; } 
                    100% { height: 50px; y: 80px; fill: #22c55e; }
                }
                @keyframes trap-recover-v {
                    0% { height: 0px; y: 130px; fill: #ef4444; opacity: 0; }
                    50% { height: 0px; y: 130px; fill: #ef4444; opacity: 0; }
                    100% { height: 80px; y: 50px; fill: #ef4444; opacity: 1; }
                }
                .anim-candle-drop { animation: trap-drop-v 4s infinite; }
                .anim-candle-rise { animation: trap-recover-v 4s infinite; }
            `}</style>

            {/* Algo Noise / Bear Trap Visualization */}
            <Card highlightColor="green" className="bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-3">
                    <Cpu size={20} className="text-green-600"/>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.noise.title}</h4>
                </div>
                <div className="h-48 bg-slate-900 rounded border border-slate-700 relative p-4 flex items-center justify-center overflow-hidden">
                     <svg className="w-full h-full" viewBox="0 0 200 150">
                         {/* Support Line */}
                         <line x1="10" y1="80" x2="190" y2="80" className="stroke-slate-400" strokeWidth="2" strokeDasharray="5,5" />
                         <text x="15" y="75" className="fill-slate-500 text-[10px] font-bold uppercase">{t.noise.labels.support}</text>

                         {/* Candles Sequence */}
                         <g transform="translate(40,0)">
                             {/* 1. Normal Volatility */}
                             <rect x="0" y="60" width="10" height="20" className="fill-red-500" />
                             <line x1="5" y1="55" x2="5" y2="85" className="stroke-red-500" strokeWidth="1" />

                             <rect x="20" y="70" width="10" height="10" className="fill-green-500" />
                             
                             {/* 2. The Trap (Green Drop) */}
                             <rect x="40" y="80" width="12" height="40" className="fill-green-500 anim-candle-drop" />
                             <text x="46" y="135" className="fill-green-400 text-[10px] font-bold" textAnchor="middle">{t.noise.labels.trap}</text>

                             {/* 3. The Recovery (Red Rise) */}
                             <rect x="60" y="50" width="12" height="80" className="fill-red-600 anim-candle-rise" />
                             <text x="66" y="45" className="fill-red-400 text-[10px] font-bold" textAnchor="middle">{t.noise.labels.recover}</text>

                             {/* 4. Follow through */}
                             <rect x="80" y="40" width="10" height="20" className="fill-red-500 opacity-50" />
                         </g>
                     </svg>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-2">{t.noise.desc}</p>
            </Card>

            {/* Fibonacci Visualization */}
            <Card highlightColor="amber" className="bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-3">
                    <Sliders size={20} className="text-amber-600"/>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.fib.title}</h4>
                </div>
                <div className="h-48 bg-slate-900 rounded border border-slate-700 relative p-4 overflow-hidden mb-3">
                     <svg className="w-full h-full" viewBox="0 0 250 150">
                         {/* Price Action Curve */}
                         <path d="M0,120 C50,110 80,130 120,80 S200,40 250,20" fill="none" className="stroke-white" strokeWidth="2" />
                         <circle cx="120" cy="80" r="3" className="fill-white animate-ping" />
                         
                         {/* Fibonacci Net */}
                         <g className="opacity-80">
                             {/* Fib 13 */}
                             <path d="M0,125 C50,115 80,125 120,85 S200,35 250,15" fill="none" className="stroke-amber-300" strokeWidth="1" />
                             <text x="220" y="15" className="fill-amber-300 text-[9px] font-mono">13</text>

                             {/* Fib 21 */}
                             <path d="M0,130 C50,120 80,135 120,95 S200,50 250,30" fill="none" className="stroke-amber-400" strokeWidth="1" />
                             <text x="220" y="30" className="fill-amber-400 text-[9px] font-mono">21</text>
                             
                             {/* Fib 34 */}
                             <path d="M0,135 C50,125 80,140 120,105 S200,65 250,50" fill="none" className="stroke-amber-500" strokeWidth="1" />
                             <text x="220" y="50" className="fill-amber-500 text-[9px] font-mono">34</text>
                             
                             {/* Fib 55 */}
                             <path d="M0,140 C50,130 80,145 120,115 S200,80 250,70" fill="none" className="stroke-amber-600" strokeWidth="1.5" strokeDasharray="3,2"/>
                             <text x="220" y="70" className="fill-amber-600 text-[9px] font-mono">55</text>
                         </g>

                         <text x="120" y="130" className="fill-amber-400 text-xs font-bold" textAnchor="middle">{t.fib.labels.net}</text>
                         <line x1="120" y1="120" x2="120" y2="105" className="stroke-amber-400" strokeWidth="1" />
                     </svg>
                </div>
                
                {/* Benefits List */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded border-l-2 border-amber-500">
                    <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase mb-1">{t.fib.benefits_title}</div>
                    <ul className="space-y-1">
                        {t.fib.benefits.map((b, i) => (
                            <li key={i} className="text-xs text-slate-700 dark:text-slate-300 font-medium flex items-start gap-1">
                                <span className="text-amber-500">•</span> {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </div>
    );
};

// --- 10. Market Psychology ---
export const MarketPsychology: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '市场心理学与庄家博弈分析' : 'Market Psychology & Analysis',
    c1: { t: lang === 'zh' ? '庄家的“磨” (The Grind)' : 'The Grind', d: lang === 'zh' ? '股价极小幅度波动 (±2%)，让散户感到绝望、无聊而卖出。' : 'Tiny volatility (±2%). Retail gets bored and sells.' },
    c2: { t: lang === 'zh' ? '散户心理误区' : 'Retail Errors', d: lang === 'zh' ? '恐惧追高 (习惯了横盘)，踏空后又在高位接盘。' : 'Fear of heights, then chasing top.' },
    c3: { t: lang === 'zh' ? '均线开花的“马太效应”' : 'Matthew Effect of Blossom', d: lang === 'zh' ? '自我实现预言：趋势确立 -> 算法扫货 -> 媒体跟进 -> 资金推升' : 'Self-fulfilling: Trend -> Algo Buy -> Media -> Capital Influx' },
    labels: {
        patience: lang === 'zh' ? '散户耐心' : 'Retail Patience',
        grind: lang === 'zh' ? '庄家持仓' : 'MM Holding',
        fear: lang === 'zh' ? '恐惧追高' : 'Fear High',
        chase: lang === 'zh' ? '高位接盘(鱼尾)' : 'Chase Top',
    },
    matthew_steps: lang === 'zh' ? [
        { t: '趋势交易者', d: '看到突破，入场买入', i: TrendingUp, c: 'text-blue-500', b: 'bg-blue-100 dark:bg-blue-900/30' },
        { t: '量化基金', d: '识别动量，算法扫货', i: Cpu, c: 'text-green-500', b: 'bg-green-100 dark:bg-green-900/30' },
        { t: '媒体报道', d: '报道强势，吸引眼球', i: Megaphone, c: 'text-purple-500', b: 'bg-purple-100 dark:bg-purple-900/30' },
        { t: '资金涌入', d: '推高股价，强化发散', i: Coins, c: 'text-amber-500', b: 'bg-amber-100 dark:bg-amber-900/30' },
    ] : [
        { t: 'Trend Traders', d: 'See breakout, Enter', i: TrendingUp, c: 'text-blue-500', b: 'bg-blue-100 dark:bg-blue-900/30' },
        { t: 'Quant Funds', d: 'Detect momentum, Algo buy', i: Cpu, c: 'text-green-500', b: 'bg-green-100 dark:bg-green-900/30' },
        { t: 'Media', d: 'Report strength, Hype', i: Megaphone, c: 'text-purple-500', b: 'bg-purple-100 dark:bg-purple-900/30' },
        { t: 'Capital Influx', d: 'Push price, Reinforce', i: Coins, c: 'text-amber-500', b: 'bg-amber-100 dark:bg-amber-900/30' },
    ],
    matthew_desc: lang === 'zh' ? '这种自我实现的预言（Self-Fulfilling Prophecy）是趋势延续的内在动力。一旦五线开花形态确立，市场会产生正向反馈循环。' : 'This Self-Fulfilling Prophecy is the internal drive of trend continuation. Once established, a positive feedback loop is created.'
  };

  return (
    <div className="space-y-6">
        <style>{`
            @keyframes battery-drain {
                0% { width: 100%; fill: #22c55e; }
                50% { width: 50%; fill: #eab308; }
                100% { width: 10%; fill: #ef4444; }
            }
            .anim-battery { animation: battery-drain 4s linear infinite; }
            
            @keyframes flow-arrow {
                0% { opacity: 0.2; transform: translateX(-5px); }
                50% { opacity: 1; transform: translateX(0); }
                100% { opacity: 0.2; transform: translateX(5px); }
            }
            .anim-flow-arrow { animation: flow-arrow 1.5s ease-in-out infinite; }
            
            @keyframes card-pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                50% { transform: scale(1.02); box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.2); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
            }
            .anim-step-1 { animation: card-pulse 2s infinite; animation-delay: 0s; }
            .anim-step-2 { animation: card-pulse 2s infinite; animation-delay: 0.5s; }
            .anim-step-3 { animation: card-pulse 2s infinite; animation-delay: 1s; }
            .anim-step-4 { animation: card-pulse 2s infinite; animation-delay: 1.5s; }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* The Grind */}
             <Card highlightColor="slate" className="bg-white dark:bg-slate-900">
                 <div className="flex items-center gap-2 mb-3">
                     <Brain size={20} className="text-slate-600"/>
                     <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.c1.t}</h4>
                 </div>
                 <div className="h-32 bg-slate-50 dark:bg-slate-800 rounded relative mb-3 p-4 flex flex-col justify-end">
                      <div className="absolute top-2 right-2 text-xs text-slate-400">Time: Weeks/Months</div>
                      
                      {/* Price Flat Line */}
                      <svg className="w-full h-12 mb-4 overflow-visible">
                          <path d="M0,10 Q20,15 40,10 T80,10 T120,10 T160,10 T200,10" fill="none" className="stroke-slate-400 stroke-2" />
                      </svg>
                      
                      {/* Patience Battery */}
                      <div className="flex items-center gap-2">
                           <span className="text-xs font-bold text-slate-500">{t.labels.patience}</span>
                           <div className="w-24 h-4 border border-slate-300 rounded relative">
                               <div className="h-full bg-green-500 anim-battery"></div>
                           </div>
                      </div>
                      <div className="absolute right-10 bottom-4 text-xs font-bold text-slate-400">{t.labels.grind}</div>
                      <div className="absolute right-10 bottom-8 w-8 h-4 bg-red-300 rounded"></div>
                 </div>
                 <p className="text-sm font-medium text-slate-700 dark:text-slate-300">● {t.c1.d}</p>
             </Card>

             {/* Retail Errors */}
             <Card highlightColor="red" className="bg-white dark:bg-slate-900">
                 <div className="flex items-center gap-2 mb-3">
                     <Users size={20} className="text-red-500"/>
                     <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.c2.t}</h4>
                 </div>
                 <div className="h-32 bg-slate-50 dark:bg-slate-800 rounded relative mb-3 p-4 flex items-center justify-center">
                      <svg className="w-full h-full overflow-visible">
                           {/* Price surging */}
                           <path d="M20,80 L60,40 L90,60 L140,20 L180,15" fill="none" className="stroke-red-500 stroke-2" />
                           
                           {/* Points */}
                           <circle cx="60" cy="40" r="3" className="fill-slate-500" />
                           <text x="60" y="30" fontSize="10" className="fill-slate-500" textAnchor="middle">{t.labels.fear}</text>
                           
                           <circle cx="180" cy="15" r="4" className="fill-red-600 animate-ping" />
                           <text x="180" y="45" fontSize="10" className="fill-red-600 font-bold" textAnchor="middle">{t.labels.chase}</text>
                           
                           <path d="M90,60 L120,80" stroke="#94a3b8" strokeDasharray="2" />
                           <text x="120" y="90" fontSize="10" fill="#94a3b8">Phantom Dip (Missed)</text>
                      </svg>
                 </div>
                 <p className="text-sm font-medium text-slate-700 dark:text-slate-300">● {t.c2.d}</p>
             </Card>
        </div>

        {/* Matthew Effect - Redesigned as Pipeline */}
        <Card highlightColor="blue" className="bg-white dark:bg-slate-900 w-full">
             <div className="flex items-center gap-2 mb-4">
                 <RefreshCw size={20} className="text-blue-500"/>
                 <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.c3.t}</h4>
             </div>
             
             {/* Linear Pipeline Visualization */}
             <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center justify-between mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                 {t.matthew_steps.map((step, i) => (
                     <React.Fragment key={i}>
                         <div className={`flex-1 flex flex-col items-center text-center p-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-sm relative z-10 anim-step-${i+1}`}>
                             <div className={`p-2 rounded-full ${step.b} ${step.c} mb-2`}>
                                 <step.i size={20} />
                             </div>
                             <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{step.t}</div>
                             <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">{step.d}</div>
                             <div className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 dark:bg-slate-700 rounded-full text-[10px] flex items-center justify-center font-bold text-slate-500 border border-white dark:border-slate-600">
                                 {i+1}
                             </div>
                         </div>
                         {i < t.matthew_steps.length - 1 && (
                             <div className="flex items-center justify-center py-2 md:py-0">
                                 <ArrowRight size={20} className="text-slate-400 dark:text-slate-500 rotate-90 md:rotate-0 anim-flow-arrow" />
                             </div>
                         )}
                     </React.Fragment>
                 ))}
             </div>

             {/* Detailed Description */}
             <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded border-l-4 border-blue-500">
                 <div className="flex items-start gap-3">
                     <Zap size={24} className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                     <div>
                         <h5 className="font-bold text-blue-800 dark:text-blue-300 text-sm uppercase tracking-wider mb-1">Self-Fulfilling Prophecy</h5>
                         <p className="text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                             {t.matthew_desc}
                         </p>
                     </div>
                 </div>
             </div>
        </Card>
    </div>
  );
};