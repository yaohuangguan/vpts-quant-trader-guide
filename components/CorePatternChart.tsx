import React, { useState, useEffect, useRef } from 'react';
import { Tag } from './Card';
import { Lang } from '../types';

const Tooltip = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <div 
    className="absolute z-10 bg-slate-800 dark:bg-slate-700 text-white text-sm px-3 py-1.5 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 whitespace-nowrap border border-slate-600"
    style={{ left: x, top: y }}
  >
    {text}
    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-slate-800 dark:border-t-slate-700" />
  </div>
);

export const CorePatternChart: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [hoveredTip, setHoveredTip] = useState<{x: number, y: number, text: string} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
            setHasPlayed(true);
        }
    }, { threshold: 0.3 }); // Trigger when 30% visible

    if (containerRef.current) {
        observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [hasPlayed]);

  const t = {
    title: lang === 'zh' ? '标准五线开花模型 (真实波动)' : 'Standard Five-Line Blossom Model',
    desc: lang === 'zh' ? 'MA5/10呈现“踏浪缠绕”特征，MA5位于大阳线实体中下部，所有均线在实体中部精准汇聚。' : 'MA5/10 shows "wave twisting". All moving averages converge precisely at the center of the large bullish candle body.',
    phase1: lang === 'zh' ? 'PHASE 1: 震荡洗盘 (踏浪/金叉死叉)' : 'PHASE 1: Washout (Golden/Death Cross)',
    phase2: lang === 'zh' ? 'PHASE 2: 奇点爆发 (中轴穿线)' : 'PHASE 2: Singularity Burst (Axis Cross)',
    phase3: lang === 'zh' ? 'PHASE 3: 多头排列 (扇形发散)' : 'PHASE 3: Bullish Divergence',
    ma250: lang === 'zh' ? 'MA250 (年线): 走平支撑' : 'MA250 (Year): Support',
    ma120: lang === 'zh' ? 'MA120 (半年线): 趋势向上' : 'MA120 (Half-Year): Upward',
    ma60: lang === 'zh' ? 'MA60 (决策线): 关键支撑' : 'MA60 (Decision): Support',
    ma30: lang === 'zh' ? 'MA30 (生命线): 拐头向上' : 'MA30 (Life): Turning Up',
    ma20: lang === 'zh' ? 'MA20: 辅助线' : 'MA20: Aux',
    ma10: lang === 'zh' ? 'MA10 (操盘线): 攻击角度陡峭' : 'MA10 (Trading): Steep Attack',
    ma5: lang === 'zh' ? 'MA5 (攻击线): 踏浪上行' : 'MA5 (Attack): Riding Wave',
    death_cross: lang === 'zh' ? '死叉回踩' : 'Death Cross',
    golden_cross: lang === 'zh' ? '金叉反弹' : 'Golden Cross',
    wave_back: lang === 'zh' ? '踏浪回踩' : 'Wave Back',
    knot: lang === 'zh' ? '七线汇聚中轴' : '7-Line Convergence',
    big_yang: lang === 'zh' ? '涨幅 > 5%' : 'Gain > 5%',
    vol_double: lang === 'zh' ? '倍量/涨停' : 'Double Vol'
  };

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    const container = e.currentTarget.closest('.chart-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const elRect = e.currentTarget.getBoundingClientRect();
      setHoveredTip({
        x: elRect.left - rect.left + elRect.width / 2,
        y: elRect.top - rect.top,
        text
      });
    }
  };

  const animClass = hasPlayed ? "animate-draw-core" : "path-init";

  return (
    <div className="relative chart-container" ref={containerRef}>
      <style>{`
        @keyframes drawLineCore {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-core {
          stroke-dasharray: 2000;
          stroke-dashoffset: 0;
          animation: drawLineCore 3s ease-out forwards;
        }
        .path-init {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
        }
        .hover-target:hover {
          stroke-width: 4px;
          cursor: pointer;
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.3));
        }
        .dot-pulse {
           animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.5; r: 3; }
          50% { opacity: 1; r: 5; }
          100% { opacity: 0.5; r: 3; }
        }
      `}</style>

      {hoveredTip && <Tooltip x={hoveredTip.x} y={hoveredTip.y} text={hoveredTip.text} />}

      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-2 leading-relaxed">{t.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <Tag color="slate">MA5</Tag>
          <Tag color="yellow">MA10</Tag>
          <Tag color="purple">MA20</Tag>
          <Tag color="green">MA30</Tag>
          <Tag color="blue">MA60</Tag>
          <Tag color="amber">MA120</Tag>
          <Tag color="red">MA250</Tag>
        </div>
      </div>

      <svg viewBox="0 0 900 420" className="w-full h-auto bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 mb-6 shadow-inner transition-colors duration-300">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Phase Labels - Bumped font sizes */}
        <text x="150" y="40" textAnchor="middle" fontSize="13" className="fill-slate-500 dark:fill-slate-400 font-bold">{t.phase1}</text>
        <text x="450" y="40" textAnchor="middle" fontSize="13" className="fill-red-500 font-bold">{t.phase2}</text>
        <text x="750" y="40" textAnchor="middle" fontSize="13" className="fill-green-600 dark:fill-green-500 font-bold">{t.phase3}</text>
        
        {/* Highlight Zone */}
        <rect x="50" y="50" width="200" height="280" className="fill-blue-500/5 dark:fill-blue-500/10" rx="4" />
        <line x1="450" y1="50" x2="450" y2="350" className="stroke-red-500" strokeWidth="1" strokeDasharray="4"/>
        
        {/* Moving Averages with Tooltip Interactions */}
        <path d="M50,215 C200,210 350,205 450,200 C550,195 700,180 850,170" fill="none" className={`stroke-red-500 hover-target ${animClass}`} strokeWidth="2.5" strokeDasharray="6,3" style={{animationDelay: '0s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma250)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,210 C200,208 350,202 450,200 C550,190 700,160 850,130" fill="none" className={`stroke-amber-500 hover-target ${animClass}`} strokeWidth="2" style={{animationDelay: '0.2s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma120)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,205 C200,205 350,200 450,200 C550,180 700,130 850,90" fill="none" className={`stroke-blue-600 hover-target ${animClass}`} strokeWidth="2" style={{animationDelay: '0.4s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma60)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,200 C200,200 350,198 450,200 C550,170 700,100 850,50" fill="none" className={`stroke-green-500 hover-target ${animClass}`} strokeWidth="2" style={{animationDelay: '0.6s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma30)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,190 C100,180 150,210 200,205 C250,200 350,195 450,200 C550,150 700,70 850,30" fill="none" className={`stroke-purple-600 hover-target ${animClass}`} strokeWidth="1.5" style={{animationDelay: '0.8s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma20)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,180 C80,170 120,200 160,210 C220,220 280,185 350,190 C400,195 420,200 450,200 C520,140 680,50 850,15" fill="none" className={`stroke-yellow-500 hover-target ${animClass}`} strokeWidth="1.5" style={{animationDelay: '1.0s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma10)} onMouseLeave={() => setHoveredTip(null)} />
        <path d="M50,170 C70,150 100,190 130,220 C160,240 190,170 230,180 C270,190 310,210 360,185 C400,165 420,200 450,200 C500,120 600,40 700,70 C750,90 800,10 850,0" fill="none" className={`stroke-slate-900 dark:stroke-slate-100 hover-target ${animClass}`} strokeWidth="1.5" style={{animationDelay: '1.2s'}} onMouseEnter={(e) => handleMouseEnter(e, t.ma5)} onMouseLeave={() => setHoveredTip(null)} />

        {/* Annotations - Increased font size */}
        <circle cx="130" cy="220" r="3" className="fill-purple-600 opacity-50 dot-pulse" />
        <text x="130" y="235" fontSize="11" className="fill-purple-600 font-bold" textAnchor="middle">{t.death_cross}</text>
        
        <circle cx="230" cy="180" r="3" className="fill-slate-800 dark:fill-slate-200 opacity-50 dot-pulse" />
        <text x="230" y="170" fontSize="11" className="fill-slate-800 dark:fill-slate-200 font-bold" textAnchor="middle">{t.golden_cross}</text>
        
        <circle cx="700" cy="70" r="3" className="fill-slate-800 dark:fill-slate-200 opacity-50 dot-pulse" />
        <text x="700" y="85" fontSize="11" className="fill-slate-800 dark:fill-slate-200 font-bold" textAnchor="middle">{t.wave_back}</text>

        {/* The Knot Point */}
        <circle cx="450" cy="200" r="5" className="fill-yellow-400 stroke-black stroke-2 animate-bounce" />
        <text x="465" y="205" fontSize="13" className="fill-slate-900 dark:fill-slate-100 font-bold">{t.knot}</text>
        
        {/* The Big Candle */}
        <rect x="442" y="140" width="16" height="120" className="fill-red-500 stroke-red-700 opacity-90" strokeWidth="1" onMouseEnter={(e) => handleMouseEnter(e, 'breakout')} onMouseLeave={() => setHoveredTip(null)} />
        <text x="465" y="150" fontSize="12" className="fill-red-500 font-bold">{t.big_yang}</text>
        
        {/* Volume Bars */}
        <line x1="50" y1="360" x2="850" y2="360" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
        <rect x="100" y="370" width="8" height="20" className="fill-slate-400 dark:fill-slate-600" />
        <rect x="150" y="375" width="8" height="15" className="fill-slate-400 dark:fill-slate-600" /> 
        <rect x="442" y="320" width="16" height="70" className="fill-red-500 animate-pulse" onMouseEnter={(e) => handleMouseEnter(e, 'volume')} onMouseLeave={() => setHoveredTip(null)} />
        <text x="450" y="310" textAnchor="middle" fontSize="12" className="fill-red-500 font-bold">{t.vol_double}</text>
      </svg>
    </div>
  );
};