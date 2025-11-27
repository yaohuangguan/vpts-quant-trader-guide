
import React, { useState, useEffect, useRef } from 'react';
import { Section } from './components/Section';
import { Introduction } from './components/Introduction';
import { CorePatternChart } from './components/CorePatternChart';
import { IndicatorDiagrams } from './components/IndicatorDiagrams';
import { TacticalVariations } from './components/TacticalVariations';
import { ChipStructure, TimeframeResonance, SystemEvolution, MarketPsychology, VolumeDynamics, AdhesionMorphology, MAArchitecture, TrendGeometry } from './components/DeepAnalysis';
import { StrategySection, RiskManagement } from './components/Strategy';
import { CaseStudies } from './components/CaseStudies';
import { CapitalPsychology } from './components/CapitalPsychology';
import { NeuroScienceSection } from './components/NeuroScience';
import { NeuroBiology } from './components/NeuroBiology';
import { PhilosophyReconstruction } from './components/PhilosophyReconstruction';
import { MindsetFramework } from './components/MindsetFramework';
import { DisciplineSystem } from './components/DisciplineRoutine';
import { ChaosOrder } from './components/ChaosOrder';
import { Assessment } from './components/Assessment';
import { TechnicalTruth } from './components/TechnicalTruth';
import { LineChart, Target, Layers, Moon, Sun, Globe, Brain, GraduationCap, User, Wind, Film, ShoppingBag, Cpu, TrendingUp } from 'lucide-react';
import { Lang } from './types';

// --- Custom Logo Component with 3D Tilt Interaction ---
const RolyPolyLogo = () => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate position relative to center (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Logic: "Depress" where mouse is.
    // If mouse is top (y < center), rotateX should be positive (top goes back).
    // If mouse is right (x > center), rotateY should be negative (right goes back - verify coordinate system).
    // Standard CSS: rotateY(90deg) moves right side away. So positive rotateY moves right side into screen.
    // We want the side under mouse to go INTO screen.
    
    const rotateX = ((y - centerY) / centerY) * -25; // Invert Y for correct tilt feel
    const rotateY = ((x - centerX) / centerX) * 25;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div 
        ref={containerRef}
        className="group relative w-20 h-20 cursor-pointer transition-transform duration-200 ease-out"
        style={{ transform, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
      {/* Container: Respects Theme (White in Light, Dark in Dark) */}
      <div className="logo-content w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Layer 1: Background K-Line Chart (More Obvious) */}
          <g className="opacity-80">
             {/* Grid */}
             <line x1="10" y1="25" x2="90" y2="25" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             <line x1="10" y1="50" x2="90" y2="50" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             <line x1="10" y1="75" x2="90" y2="75" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             
             {/* Candles */}
             <rect x="20" y="40" width="8" height="20" className="fill-green-500" />
             <line x1="24" y1="35" x2="24" y2="65" className="stroke-green-500" strokeWidth="1" />
             
             <rect x="35" y="30" width="8" height="30" className="fill-red-500" />
             <line x1="39" y1="25" x2="39" y2="65" className="stroke-red-500" strokeWidth="1" />
             
             <rect x="50" y="50" width="8" height="15" className="fill-green-500" />
             
             <rect x="65" y="20" width="8" height="40" className="fill-red-500" />
             <line x1="69" y1="15" x2="69" y2="65" className="stroke-red-500" strokeWidth="1" />
             
             {/* MAs - Stronger Colors */}
             <path d="M10,80 Q50,70 90,40" fill="none" className="stroke-red-500" strokeWidth="2" />
             <path d="M10,70 Q50,60 90,30" fill="none" className="stroke-green-500" strokeWidth="2" />
          </g>

          {/* Layer 2: Yellow Lightning Bolt (Vibrant) */}
          <g transform="translate(5, 5) scale(0.9)" style={{filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.3))'}}>
             <filter id="bolt-glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
             </filter>
             <path 
                d="M55,10 L30,55 L50,55 L40,90 L75,35 L55,35 Z" 
                fill="#facc15" 
                stroke="#b45309" 
                strokeWidth="2" 
                strokeLinejoin="round"
                filter="url(#bolt-glow)"
             />
          </g>
        </svg>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<Lang>('zh');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const titles = {
    zh: {
        header_badge: "股票核心操盘本质深度量化研究",
        header_title_1: "五线开花",
        header_title_2: "量价时空",
        header_subtitle: "基于筹码微观结构与多周期共振的深度交易模型",
        header_nav: ["可视化指南", "筹码结构", "屠龙刀共振", "交易心理与纪律", "实战考核"],
        author_name: "姚柏杨 (Sam Yao)",
        author_title: "",
        sec_00: "导读",
        sec_01: "均线系统的哲学本质与五线架构",
        sec_02: "核心形态：七线汇聚与微观结构 (The Knot)",
        sec_03: "均线粘合的几何形态学与微观结构",
        sec_04: "趋势几何学：多头排列的惯性保障",
        sec_05: "指标协同效应与多维验证 (Indicator Synergy)",
        sec_06: "核心变种：全均线战术板 (Six Tactical Patterns)",
        sec_07: "量能动力学与验证机制",
        sec_08: "筹码微观结构：吸筹-锁仓-出货",
        sec_09: "全周期共振：信号传递链",
        sec_10: "市场心理学与庄家博弈分析",
        sec_11: "交易心理的生物学与神经科学基础",
        sec_12: "惜售心理的神经生物学机制——“行”的生理障碍",
        sec_13: "思维框架：概率思维与情绪阻断",
        sec_14: "纪律的实操：常规、日志与系统",
        sec_15: "系统演进：五线开花在算法交易时代的演变",
        sec_16: "综合战法与阿尔法选股器 (Strategy & Screener)",
        sec_17: "典型案例复盘与深度解析",
        sec_18: "资金管理与心理博弈 (Capital & Psychology)",
        sec_19: "买卖止盈止损交易策略",
        sec_20: "量化与技术分析的客观真理——“知”的数学基础",
        sec_21: "知行合一的哲学与心理重构——思想的武器",
        sec_22: "在混沌中寻找秩序",
        sec_23: "最终考核：交易员认证测试",
        one_yang: {
            title: "一阳多线：四大强度判定标准 (判定胜负手)",
            items: [
                { t: "力度硬指标", c: "阳线涨幅至少 >5%，若是涨停板且封板坚决则为最强信号。成交量必须有效放大（量比>2），且收盘价接近全天最高点（光头阳线）。" },
                { t: "必破生命线", c: "收盘价必须站稳 60日(决策线) 之上。且要求30日、60日线已结束下行，处于走平或微翘状态，形成“金叉托举”之势。" },
                { t: "中轴穿线", c: "五线汇聚点最好位于大阳线实体的正中间（中轴线）。这意味着多空成本在日内完成彻底交换，阳线实体充当了撬动行情的“杠杆支点”。" },
                { t: "多头排列", c: "一阳穿线只是开始。爆发后3-5天内，股价不应回补阳线实体一半以下，且均线系统必须迅速形成标准多头排列 (5>10>20>30>60)。" }
            ]
        },
        wind: {
            title: "风口，天时地利人和：最强驱动力",
            desc: "只有有了利好消息和天时，才能大大增加成功率。技术形态是干柴，板块风口是烈火。",
            items: [
                { t: "Q4 年底", c: "传媒娱乐", i: Film },
                { t: "春节前夕", c: "消费/旅游", i: ShoppingBag },
                { t: "年中 (6-7月)", c: "硬核科技", i: Cpu },
                { t: "大盘突破时", c: "金融科技", i: TrendingUp }
            ],
            conclusion: "在大的时间背景下（天时），叠加五线极致粘合（地利）与筹码高度集中（人和），多头排列才更有爆发力和持续性。"
        },
        footer: "© 2025 Quant Model Research. 最终解释权由金沐资本及Baiyang Yao姚柏杨所有."
    },
    en: {
        header_badge: "Deep Quant Research on Stock Trading Essence",
        header_title_1: "Five-Line Blossom",
        header_title_2: "Vol-Price Space-Time",
        header_subtitle: "Deep Trading Model Based on Micro-Chip Structure and Multi-Cycle Resonance",
        header_nav: ["Visual Guide", "Chip Structure", "Dragon Saber Resonance", "Psychology & Discipline", "Final Exam"],
        author_name: "Sam Yao (姚柏杨)",
        author_title: "",
        sec_00: "Preface",
        sec_01: "Philosophical Essence & Architecture of MA Systems",
        sec_02: "Core Pattern: Seven-Line Convergence (The Knot)",
        sec_03: "Geometric Morphology of MA Adhesion",
        sec_04: "Trend Geometry: Inertia Guarantee of Bullish Alignment",
        sec_05: "Indicator Synergy & Multi-Dimensional Verification",
        sec_06: "Tactical Variations: Six Core Patterns",
        sec_07: "Volume Dynamics & Verification Mechanisms",
        sec_08: "Micro-Chip Structure: Accumulation-Lock-Distribution",
        sec_09: "Timeframe Resonance: Signal Chain",
        sec_10: "Market Psychology & Market Maker Game Theory",
        sec_11: "Biology & Neuroscience Foundation of Trading Psychology",
        sec_12: "Neurobiology of Reluctance to Sell: Barriers to 'Action'",
        sec_13: "Mindset Framework: Probabilistic Thinking & Emotional Blocking",
        sec_14: "Discipline in Practice: Routine, Journaling & Systems",
        sec_15: "System Evolution: Blossom in Algorithmic Age",
        sec_16: "Comprehensive Strategy & Alpha Screener",
        sec_17: "Typical Case Study Review & Deep Analysis",
        sec_18: "Capital Management & Psychology",
        sec_19: "Buy/Sell/Stop/Profit Trading Strategies",
        sec_20: "Objective Truth of Quant & Technical Analysis",
        sec_21: "Philosophy & Psychology Reconstruction: Unity of Knowledge & Action",
        sec_22: "Conclusion: Finding Order in Chaos",
        sec_23: "Final Assessment: Trader Certification",
        one_yang: {
            title: "One Yang Crosses Multiple Lines: 4 Strength Criteria",
            items: [
                { t: "Strength Indicator", c: "Yang candle gain >5% (Limit up is best). Volume must surge (Vol Ratio > 2). Close near daily high." },
                { t: "Break Life Line", c: "Close price must stand firmly above MA60. MA30/60 must stop falling and flatten or turn up." },
                { t: "Axis Crossing", c: "Convergence point should be at the center of the candle body. Daily cost exchange completes here." },
                { t: "Bullish Arrangement", c: "Within 3-5 days after breakout, price shouldn't retrace >50% of the candle. MAs must form bullish alignment (5>10>20>30>60)." }
            ]
        },
        wind: {
            title: "Wind Gap & Timing: The Ultimate Driver",
            desc: "Only with favorable news and timing can success rates increase. Technicals are the wood; Sector Momentum is the fire.",
            items: [
                { t: "Q4 / Year End", c: "Media & Ent", i: Film },
                { t: "Pre-CNY", c: "Food/Travel", i: ShoppingBag },
                { t: "Mid-Year", c: "Hard Tech", i: Cpu },
                { t: "Index Breakout", c: "Fintech", i: TrendingUp }
            ],
            conclusion: "Under the grand context (Timing), superimposed with extreme MA adhesion (Location) and high chip concentration (Harmony), creates the most explosive trend."
        },
        footer: "© 2025 Quant Model Research. All rights reserved by Jinmu Capital & Baiyang Yao."
    }
  };

  const t = titles[lang];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 
        Global Background Layer (Fixed)
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Base Solid Color */}
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"></div>

          {/* Dark Mode Gradient Blob */}
          <div className="hidden dark:block absolute inset-0 opacity-40">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(30,41,59,0.8),_rgba(15,23,42,1))]"></div>
          </div>
          
          {/* Light Mode Gradient Blobs */}
          <div className="dark:hidden absolute inset-0 opacity-60">
              <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse-slow"></div>
              <div className="absolute top-[40%] -right-[10%] w-[50%] h-[70%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Universal Particles */}
          <div className="absolute inset-0">
             {[...Array(30)].map((_, i) => (
                 <div 
                    key={i}
                    className="absolute rounded-full bg-blue-400/30 dark:bg-indigo-400/20 blur-[1px] animate-float-slow"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        animationDuration: `${Math.random() * 15 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                 />
             ))}
          </div>
      </div>
      
      <style>{`
        @keyframes float-slow {
            0% { transform: translateY(0) translateX(0); opacity: 0.2; }
            50% { transform: translateY(-40px) translateX(20px); opacity: 0.6; }
            100% { transform: translateY(0) translateX(0); opacity: 0.2; }
        }
        @keyframes pulse-slow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
            100% { opacity: 0.4; transform: scale(1); }
        }
        .animate-float-slow { animation: float-slow linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>

      {/* Main Content (Scrollable) */}
      <div className="relative z-10">
        <header className="relative text-center pt-16 pb-16 px-6 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm mb-12 transition-colors duration-300">
            {/* Logo Left - With 3D Tilt */}
            <div className="absolute top-6 left-6 z-50">
                <RolyPolyLogo />
            </div>

            {/* Controls Right */}
            <div className="absolute top-6 right-6 flex gap-3 z-50">
                <button 
                    onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1 text-sm font-bold shadow-sm"
                    aria-label="Toggle Language"
                >
                    <Globe size={18} /> {lang === 'zh' ? 'EN' : '中'}
                </button>
                <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                aria-label="Toggle Dark Mode"
                >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <div className="inline-block bg-blue-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 shadow-lg tracking-wide transform hover:scale-105 transition-transform mt-4 md:mt-0">
            {t.header_badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight drop-shadow-sm">
            {t.header_title_1} <span className="text-blue-600">&</span> {t.header_title_2}
            <br />
            <span className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 mt-3 block">
                {t.header_subtitle}
            </span>
            </h1>

            {/* Author Info */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                    <User size={16} className="text-slate-500 dark:text-slate-400" />
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-base md:text-lg">
                        {t.author_name}
                    </span>
                    {t.author_title && (
                      <>
                        <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
                        <span className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xs md:max-w-none leading-tight md:leading-normal">
                            {t.author_title}
                        </span>
                      </>
                    )}
                </div>
            </div>

            <p className="text-slate-500 dark:text-slate-400 max-w-4xl mx-auto font-medium flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-lg md:text-xl">
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><LineChart size={20}/> {t.header_nav[0]}</span> 
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Layers size={20}/> {t.header_nav[1]}</span> 
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Target size={20}/> {t.header_nav[2]}</span>
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Brain size={20}/> {t.header_nav[3]}</span>
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold"><GraduationCap size={20}/> {t.header_nav[4]}</span>
            </p>
        </header>

        {/* Increased max-width to 7xl for 10% wider layout */}
        <main className="container mx-auto max-w-7xl px-4 pb-20">
            {/* 00. Introduction */}
            <Section number="00" title={t.sec_00}>
                <Introduction lang={lang} />
            </Section>

            {/* 1. MA Architecture */}
            <Section number="01" title={t.sec_01}>
                <MAArchitecture lang={lang} />
            </Section>

            {/* 2. Core Pattern */}
            <Section number="02" title={t.sec_02}>
                <CorePatternChart lang={lang} />
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6 transition-colors duration-300">
                    <h4 className="text-amber-800 dark:text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
                        <div className="bg-amber-100 dark:bg-amber-900/40 p-1 rounded">
                        <Target className="w-6 h-6" />
                        </div>
                        {t.one_yang.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                        {t.one_yang.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shrink-0 mt-0.5">{i+1}</div>
                                <div>
                                    <div className="font-bold text-slate-800 dark:text-slate-200 text-xl">{item.t}</div>
                                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-1 font-medium">{item.c}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Sentiment / Wind Gap */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 transition-colors duration-300">
                    <h4 className="text-indigo-800 dark:text-indigo-400 font-bold mb-4 flex items-center gap-2 text-xl">
                        <div className="bg-indigo-100 dark:bg-indigo-900/40 p-1 rounded">
                            <Wind className="w-6 h-6" />
                        </div>
                        {t.wind.title}
                    </h4>
                    
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                        {t.wind.desc}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {t.wind.items.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded border border-indigo-100 dark:border-indigo-700/50 flex flex-col items-center text-center shadow-sm transition-transform hover:scale-105">
                                <div className="text-indigo-500 mb-2">
                                    <item.i size={24} />
                                </div>
                                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{item.t}</div>
                                <div className="text-base font-bold text-slate-800 dark:text-slate-200">{item.c}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded border-l-4 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-medium italic text-sm md:text-base">
                        {t.wind.conclusion}
                    </div>
                </div>
            </Section>

            {/* 3. Adhesion Morphology */}
            <Section number="03" title={t.sec_03}>
                <AdhesionMorphology lang={lang} />
            </Section>

            {/* 4. Trend Geometry */}
            <Section number="04" title={t.sec_04}>
                <TrendGeometry lang={lang} />
            </Section>

            {/* 5. Indicators */}
            <Section number="05" title={t.sec_05}>
                <IndicatorDiagrams lang={lang} />
            </Section>

            {/* 6. Tactical Variations */}
            <Section number="06" title={t.sec_06}>
                <TacticalVariations lang={lang} />
            </Section>

            {/* 7. Volume Dynamics */}
            <Section number="07" title={t.sec_07}>
                <VolumeDynamics lang={lang} />
            </Section>

            {/* 8. Chip Structure */}
            <Section number="08" title={t.sec_08}>
                <ChipStructure lang={lang} />
            </Section>

            {/* 9. Timeframe Resonance */}
            <Section number="09" title={t.sec_09}>
                <TimeframeResonance lang={lang} />
            </Section>

            {/* 10. Market Psychology */}
            <Section number="10" title={t.sec_10}>
                <MarketPsychology lang={lang} />
            </Section>

            {/* 11. Neuroscience & Biology */}
            <Section number="11" title={t.sec_11}>
                <NeuroScienceSection lang={lang} />
            </Section>

            {/* 12. Neurobiology of Selling */}
            <Section number="12" title={t.sec_12}>
                <NeuroBiology lang={lang} />
            </Section>

            {/* 13. Mindset Framework */}
            <Section number="13" title={t.sec_13}>
                <MindsetFramework lang={lang} />
            </Section>
            
            {/* 14. Discipline */}
            <Section number="14" title={t.sec_14}>
                <DisciplineSystem lang={lang} />
            </Section>

            {/* 15. System Evolution */}
            <Section number="15" title={t.sec_15}>
                <SystemEvolution lang={lang} />
            </Section>

            {/* 16. Strategy & Screener */}
            <Section number="16" title={t.sec_16}>
                <StrategySection lang={lang} />
            </Section>

            {/* 17. Case Studies (Moved from 20) */}
            <Section number="17" title={t.sec_17}>
                <CaseStudies lang={lang} />
            </Section>
            
            {/* 18. Capital & Psychology (Moved from 21) */}
            <Section number="18" title={t.sec_18}>
                <CapitalPsychology lang={lang} />
            </Section>

            {/* 19. Risk Management -> RULES (Old 17) */}
            <Section number="19" title={t.sec_19}>
                <RiskManagement lang={lang} />
            </Section>

            {/* 20. Technical Truth (Old 18) */}
            <Section number="20" title={t.sec_20}>
                <TechnicalTruth lang={lang} />
            </Section>

            {/* 21. Philosophy Reconstruction (Old 19) */}
            <Section number="21" title={t.sec_21}>
                <PhilosophyReconstruction lang={lang} />
            </Section>

            {/* 22. Chaos & Order */}
            <Section number="22" title={t.sec_22}>
                <ChaosOrder lang={lang} />
            </Section>

            {/* 23. Assessment */}
            <Section number="23" title={t.sec_23}>
                <Assessment lang={lang} />
                <div className="text-center text-slate-500 dark:text-slate-500 text-xl mt-12 pb-10 font-medium">
                    {t.footer}
                </div>
            </Section>
        </main>
      </div>
    </div>
  );
};

export default App;
