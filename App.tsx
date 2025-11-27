
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
import { ClassicCandlePatterns } from './components/CandlestickPatterns';
import { LineChart, Target, Layers, Moon, Sun, Globe, Brain, GraduationCap, User, Wind, Film, ShoppingBag, Cpu, TrendingUp, Menu, X, ChevronRight } from 'lucide-react';
import { Lang } from './types';

// --- Custom Logo Component with 3D Tilt Interaction ---
const RolyPolyLogo = ({ className = "w-20 h-20" }: { className?: string }) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 20; 
    const rotateY = ((x - centerX) / centerX) * 20;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div 
        ref={containerRef}
        className={`group relative cursor-pointer transition-transform duration-300 ease-out ${className}`}
        style={{ transform, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
      {/* Container: Respects Theme (White in Light, Dark in Dark) */}
      <div className="logo-content w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Layer 1: Background K-Line Chart (More Obvious & Thicker) */}
          <g className="opacity-90">
             {/* Grid */}
             <line x1="10" y1="25" x2="90" y2="25" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             <line x1="10" y1="50" x2="90" y2="50" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             <line x1="10" y1="75" x2="90" y2="75" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="0.5" />
             
             {/* Candles - Bright Green/Red */}
             <rect x="15" y="40" width="10" height="20" className="fill-green-500" />
             <line x1="20" y1="35" x2="20" y2="65" className="stroke-green-500" strokeWidth="2" />
             
             <rect x="35" y="30" width="10" height="30" className="fill-red-500" />
             <line x1="40" y1="25" x2="40" y2="65" className="stroke-red-500" strokeWidth="2" />
             
             <rect x="55" y="50" width="10" height="15" className="fill-green-500" />
             <line x1="60" y1="48" x2="60" y2="70" className="stroke-green-500" strokeWidth="2" />
             
             <rect x="75" y="20" width="10" height="40" className="fill-red-500" />
             <line x1="80" y1="15" x2="80" y2="65" className="stroke-red-500" strokeWidth="2" />
             
             {/* MAs - Stronger Colors & Thickness */}
             <path d="M10,80 Q50,70 90,40" fill="none" className="stroke-red-500" strokeWidth="3" />
             <path d="M10,70 Q50,60 90,30" fill="none" className="stroke-green-500" strokeWidth="3" />
          </g>

          {/* Layer 2: Yellow Lightning Bolt (Vibrant) */}
          <g transform="translate(5, 5) scale(0.9)" style={{filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))'}}>
             <filter id="bolt-glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
             </filter>
             <path 
                d="M55,10 L30,55 L50,55 L40,90 L75,35 L55,35 Z" 
                fill="#facc15" 
                stroke="#b45309" 
                stroke-width="1.5" 
                strokeLinejoin="round"
                filter="url(#bolt-glow)"
             />
          </g>
        </svg>
      </div>
    </div>
  );
};

// Section Keys for Navigation
const SECTION_KEYS = [
    'sec_00', 'sec_01', 'sec_02', 'sec_03', 'sec_04', 'sec_05', 
    'sec_06', 'sec_kline', 'sec_07', 'sec_08', 'sec_09', 'sec_10', 'sec_11',
    'sec_12', 'sec_13', 'sec_14', 'sec_15', 'sec_16', 'sec_17',
    'sec_18', 'sec_19', 'sec_20', 'sec_21', 'sec_22', 'sec_23'
];

const Navbar: React.FC<{ 
    lang: Lang; 
    setLang: (l: Lang) => void; 
    darkMode: boolean; 
    setDarkMode: (d: boolean) => void;
    t: any;
}> = ({ lang, setLang, darkMode, setDarkMode, t }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <style>{`
                @keyframes shimmer-gold {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                .text-gold-shimmer {
                    background: linear-gradient(
                        to right,
                        #b45309 20%,
                        #fcd34d 50%,
                        #b45309 80%
                    );
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer-gold 3s linear infinite;
                }
            `}</style>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16 md:h-20 transition-all duration-300 shadow-sm">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <RolyPolyLogo className="w-10 h-10 md:w-14 md:h-14" />
                        <span className="text-lg md:text-2xl hidden sm:block tracking-tight">
                            {lang === 'zh' ? (
                                <>
                                    <span className="text-gold-shimmer font-bold">姚记</span>
                                    <span className="text-slate-800 dark:text-slate-100 font-bold">五线开花</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-gold-shimmer font-bold">Yao's</span>
                                    <span className="text-slate-800 dark:text-slate-100 font-bold"> Blossom</span>
                                </>
                            )}
                        </span>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button 
                            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1 text-xs md:text-sm font-bold"
                        >
                            <Globe size={16} /> {lang === 'zh' ? 'EN' : '中'}
                        </button>
                        <button 
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        
                        {/* Mobile Menu Toggle */}
                        <button 
                            onClick={toggleMenu}
                            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg active:scale-95"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
                <div 
                    className={`absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                            {lang === 'zh' ? '章节导航' : 'Navigation'}
                        </h3>
                        <button onClick={toggleMenu} className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {SECTION_KEYS.map((key, index) => (
                            <button
                                key={key}
                                onClick={() => scrollToSection(key)}
                                className="w-full text-left p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                                        {index.toString().padStart(2, '0')}
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                                        {t[key]?.split('：')[0] || t[key]}
                                    </span>
                                </div>
                                <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        ))}
                    </div>
                    
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
                        {t.header_title_1} - v10.2
                    </div>
                </div>
            </div>
        </>
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
        author_name: "作者：姚柏杨 (Sam Yao)",
        author_title: "",
        sec_00: "导读",
        sec_01: "均线系统的哲学本质与五线架构",
        sec_02: "核心形态：七线汇聚与微观结构 (The Knot)",
        sec_03: "均线粘合的几何形态学与微观结构",
        sec_04: "趋势几何学：多头排列的惯性保障",
        sec_05: "指标协同效应与多维验证 (Indicator Synergy)",
        sec_06: "核心变种：全均线战术板 (Six Tactical Patterns)",
        sec_kline: "经典顶底K线形态大全 (Pattern Library)",
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
        footer: "© 2025 Quant Model Research. 版权所有 All Rights Reserved. 最终解释权归 Baiyang Yao (姚柏杨)."
    },
    en: {
        header_badge: "Deep Quant Research on Stock Trading Essence",
        header_title_1: "Five-Line Blossom",
        header_title_2: "Vol-Price Space-Time",
        header_subtitle: "Deep Trading Model Based on Micro-Chip Structure and Multi-Cycle Resonance",
        header_nav: ["Visual Guide", "Chip Structure", "Dragon Saber Resonance", "Psychology & Discipline", "Final Exam"],
        author_name: "Author: Sam Yao (姚柏杨)",
        author_title: "",
        sec_00: "Preface",
        sec_01: "Philosophical Essence & Architecture of MA Systems",
        sec_02: "Core Pattern: Seven-Line Convergence (The Knot)",
        sec_03: "Geometric Morphology of MA Adhesion",
        sec_04: "Trend Geometry: Inertia Guarantee of Bullish Alignment",
        sec_05: "Indicator Synergy & Multi-Dimensional Verification",
        sec_06: "Tactical Variations: Six Core Patterns",
        sec_kline: "Classic Top/Bottom Candlestick Patterns",
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
        footer: "© 2025 Quant Model Research. All Rights Reserved. Final interpretation by Baiyang Yao."
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

      {/* Fixed Navbar */}
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />

      {/* Main Content (Scrollable) */}
      <div className="relative z-10 pt-20"> {/* Add padding-top for fixed header */}
        <header className="relative text-center pb-16 px-6 mb-12">
            
            <div className="inline-block bg-blue-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 shadow-lg tracking-wide transform hover:scale-105 transition-transform mt-12 md:mt-16">
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
                <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
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
            <Section id="sec_00" number="00" title={t.sec_00}>
                <Introduction lang={lang} />
            </Section>

            {/* 1. MA Architecture */}
            <Section id="sec_01" number="01" title={t.sec_01}>
                <MAArchitecture lang={lang} />
            </Section>

            {/* 2. Core Pattern */}
            <Section id="sec_02" number="02" title={t.sec_02}>
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
            <Section id="sec_03" number="03" title={t.sec_03}>
                <AdhesionMorphology lang={lang} />
            </Section>

            {/* 4. Trend Geometry */}
            <Section id="sec_04" number="04" title={t.sec_04}>
                <TrendGeometry lang={lang} />
            </Section>

            {/* 5. Indicators */}
            <Section id="sec_05" number="05" title={t.sec_05}>
                <IndicatorDiagrams lang={lang} />
            </Section>

            {/* 6. Tactical Variations */}
            <Section id="sec_06" number="06" title={t.sec_06}>
                <TacticalVariations lang={lang} />
            </Section>

            {/* NEW: Classic Candle Patterns */}
            <Section id="sec_kline" number="06+" title={t.sec_kline}>
                <ClassicCandlePatterns lang={lang} />
            </Section>

            {/* 7. Volume Dynamics */}
            <Section id="sec_07" number="07" title={t.sec_07}>
                <VolumeDynamics lang={lang} />
            </Section>

            {/* 8. Chip Structure */}
            <Section id="sec_08" number="08" title={t.sec_08}>
                <ChipStructure lang={lang} />
            </Section>

            {/* 9. Timeframe Resonance */}
            <Section id="sec_09" number="09" title={t.sec_09}>
                <TimeframeResonance lang={lang} />
            </Section>

            {/* 10. Market Psychology */}
            <Section id="sec_10" number="10" title={t.sec_10}>
                <MarketPsychology lang={lang} />
            </Section>

            {/* 11. Neuroscience & Biology */}
            <Section id="sec_11" number="11" title={t.sec_11}>
                <NeuroScienceSection lang={lang} />
            </Section>

            {/* 12. Neurobiology of Selling */}
            <Section id="sec_12" number="12" title={t.sec_12}>
                <NeuroBiology lang={lang} />
            </Section>

            {/* 13. Mindset Framework */}
            <Section id="sec_13" number="13" title={t.sec_13}>
                <MindsetFramework lang={lang} />
            </Section>
            
            {/* 14. Discipline */}
            <Section id="sec_14" number="14" title={t.sec_14}>
                <DisciplineSystem lang={lang} />
            </Section>

            {/* 15. System Evolution */}
            <Section id="sec_15" number="15" title={t.sec_15}>
                <SystemEvolution lang={lang} />
            </Section>

            {/* 16. Strategy & Screener */}
            <Section id="sec_16" number="16" title={t.sec_16}>
                <StrategySection lang={lang} />
            </Section>

            {/* 17. Case Studies */}
            <Section id="sec_17" number="17" title={t.sec_17}>
                <CaseStudies lang={lang} />
            </Section>
            
            {/* 18. Capital & Psychology */}
            <Section id="sec_18" number="18" title={t.sec_18}>
                <CapitalPsychology lang={lang} />
            </Section>

            {/* 19. Risk Management */}
            <Section id="sec_19" number="19" title={t.sec_19}>
                <RiskManagement lang={lang} />
            </Section>

            {/* 20. Technical Truth */}
            <Section id="sec_20" number="20" title={t.sec_20}>
                <TechnicalTruth lang={lang} />
            </Section>

            {/* 21. Philosophy Reconstruction */}
            <Section id="sec_21" number="21" title={t.sec_21}>
                <PhilosophyReconstruction lang={lang} />
            </Section>

            {/* 22. Chaos & Order */}
            <Section id="sec_22" number="22" title={t.sec_22}>
                <ChaosOrder lang={lang} />
            </Section>

            {/* 23. Assessment */}
            <Section id="sec_23" number="23" title={t.sec_23}>
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
