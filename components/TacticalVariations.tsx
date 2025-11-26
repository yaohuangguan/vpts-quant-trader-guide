import React, { useState } from 'react';
import { Card } from './Card';
import { Lang } from '../types';

const PatternSVG: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 350 220" className="w-full bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 p-2 transition-colors duration-300">
    <defs>
      <pattern id="grid-small" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-slate-50 dark:stroke-slate-800/50" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-small)" />
    <line x1="0" y1="130" x2="350" y2="130" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1" />
    {children}
  </svg>
);

// Animated Path Component
const AnimatedPath: React.FC<{ 
    d: string; 
    className?: string; 
    delay?: string; 
    strokeWidth?: string | number;
    strokeDasharray?: string;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: () => void;
}> = ({ d, className, delay = '0s', strokeWidth = 1.5, strokeDasharray, onMouseEnter, onMouseLeave }) => (
    <path 
        d={d} 
        fill="none" 
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray || "1000"}
        className={`animate-draw-tactical ${className || ''}`} 
        style={{ animationDelay: delay }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    />
);

const Tooltip = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <div 
    className="absolute z-20 bg-slate-800 dark:bg-slate-700 text-white text-sm px-3 py-1.5 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 whitespace-nowrap border border-slate-600"
    style={{ left: x, top: y }}
  >
    {text}
    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-slate-800 dark:border-t-slate-700" />
  </div>
);

// Wrapper for individual cards to handle local tooltip state
const TacticalCard: React.FC<{ 
    title: string; 
    subtitle: string; 
    desc: string; 
    highlightColor: 'amber' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' | 'pink' | 'teal';
    tag: string;
    children: React.ReactNode;
    lang: Lang;
}> = ({ title, subtitle, desc, highlightColor, tag, children, lang }) => {
    const [tooltip, setTooltip] = useState<{x: number, y: number, text: string} | null>(null);

    const handleEnter = (e: React.MouseEvent, text: string) => {
        const svg = e.currentTarget.closest('svg');
        if (svg) {
            // Get position relative to the SVG/Card container
            const card = e.currentTarget.closest('.tactical-card');
            if(card) {
                const cardRect = card.getBoundingClientRect();
                const elRect = e.currentTarget.getBoundingClientRect();
                setTooltip({
                    x: elRect.left - cardRect.left + elRect.width/2,
                    y: elRect.top - cardRect.top,
                    text
                });
            }
        }
    };

    // Inject handleEnter into children if they are valid elements
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
             // @ts-ignore - cloning specifically for our known children types
            return React.cloneElement(child, { handleTooltip: handleEnter });
        }
        return child;
    });

    return (
        <Card highlightColor={highlightColor} className="relative overflow-hidden group tactical-card">
            {tooltip && <Tooltip {...tooltip} />}
            <div className={`absolute top-0 right-0 bg-${highlightColor}-100 dark:bg-${highlightColor}-900 text-${highlightColor}-800 dark:text-${highlightColor}-200 text-sm font-bold px-3 py-1.5 rounded-bl`}>
                {tag}
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">{title} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({subtitle})</span></h4>
            <div className="text-base font-medium text-slate-700 dark:text-slate-300 mb-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded border-l-2 border-slate-300 dark:border-slate-600 leading-relaxed">
                <b>{lang === 'zh' ? '战术解析' : 'Analysis'}：</b> {desc}
            </div>
            <PatternSVG>
                {/* We render the specific SVG content passed as children */}
                {childrenWithProps}
            </PatternSVG>
        </Card>
    );
}

export const TacticalVariations: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    c1: { title: lang==='zh'?'黄金开花':'Golden Blossom', sub: lang==='zh'?'海底捞月':'Moon Salvage', tag: lang==='zh'?'底部反转':'Bottom Reversal', d: lang==='zh'?'长期熊市末期，MA250(红)逐渐走平。底部中短期均线(5/10/20)形成多头排列，强势向上穿越长期均线。':'End of bear market, MA250 flattens. Short-term MAs form bullish alignment and cross upward strongly.' },
    c2: { title: lang==='zh'?'大牛有形':'Bull Form', sub: lang==='zh'?'空中加油':'Air Refueling', tag: lang==='zh'?'趋势中继':'Trend Relay', d: lang==='zh'?'上升趋势中，主力利用急跌制造恐慌。关键在于回踩MA60(蓝)不破，且缩量，随后放量拉升。':'Uptrend panic dump. Key: Retrace to MA60 without breaking, low volume, then surge.' },
    c3: { title: lang==='zh'?'金蟾蜍':'Golden Toad', sub: lang==='zh'?'稳健攻击':'Steady Attack', tag: lang==='zh'?'二次启动':'Second Launch', d: lang==='zh'?'MA60持续向上。短期均线形成两个小高点（左眼、右眼），右眼突破时成交量放大是最佳买点。':'MA60 up. Short MAs form two small peaks (eyes). Breakout on right eye with volume is entry.' },
    c4: { title: lang==='zh'?'死亡开花':'Death Blossom', sub: lang==='zh'?'断头铡刀':'Guillotine', tag: lang==='zh'?'顶部反转':'Top Reversal', d: lang==='zh'?'高位诱多后图穷匕见。一根放量阴线同时切断多条均线，意味着主力不计成本出逃，多头防线崩溃。':'Bull trap at highs. One heavy vol bearish candle cuts multiple MAs. MM exiting at all costs.' },
    c5: { title: lang==='zh'?'金蜘蛛':'Golden Spider', sub: 'Golden Spider', tag: lang==='zh'?'急涨形态':'Surge Pattern', d: lang==='zh'?'三条短期均线(MA5/10/20)在极短时间内金叉汇聚于一点。均线由粘合突然发散。一根放量大阳线实体贯穿三线交汇点。':'Three short MAs converge and cross at one point instantly. Sudden divergence. Big Yang candle pierces the knot.' },
    c6: { title: lang==='zh'?'回头望月':'Looking Back', sub: 'Looking Back', tag: lang==='zh'?'稳健确认':'Confirmation', d: lang==='zh'?'多头排列中，股价回踩。MA5/10保持平行向上。一根大阳线同时反包上穿MA5和MA10，确立洗盘结束。':'Bullish trend retrace. MA5/10 parallel up. Big Yang engulfs and crosses MA5/10 again. Washout done.' }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <style>{`
        @keyframes drawLineTactical {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-tactical {
          stroke-dasharray: 2000;
          stroke-dashoffset: 0;
          animation: drawLineTactical 2.5s ease-out forwards;
        }
        .hover-target {
           transition: stroke-width 0.2s;
        }
        .hover-target:hover {
          stroke-width: 3px;
          cursor: crosshair;
        }
      `}</style>

      {/* 1. Golden Flower */}
      <TacticalCard 
        title={t.c1.title}
        subtitle={t.c1.sub}
        tag={t.c1.tag}
        highlightColor="amber"
        desc={t.c1.d}
        lang={lang}
      >
        <g>
            {/* MA250 - Long Term Res/Support (Trending down then flat) */}
            <AnimatedPath d="M10,80 C100,90 200,95 340,95" className="stroke-red-500 hover-target" strokeDasharray="6,3" strokeWidth="2" delay="0s" onMouseEnter={(e: any) => e.target.parentElement.parentElement.parentElement.parentElement.dispatchEvent(new CustomEvent('tooltip', {detail: {x: 0, y:0, text: 'MA250'}}))} />
            
            {/* Short/Medium MAs rising from bottom */}
            {/* MA60 */}
            <AnimatedPath d="M10,180 C100,160 200,130 340,110" className="stroke-blue-600 hover-target" delay="0.1s" />
            {/* MA30 */}
            <AnimatedPath d="M10,190 C100,165 200,120 340,70" className="stroke-green-500 hover-target" delay="0.2s" />
            {/* MA20 */}
            <AnimatedPath d="M10,200 C100,170 200,110 340,60" className="stroke-purple-600 hover-target" delay="0.3s" />
            {/* MA10 */}
            <AnimatedPath d="M10,210 C100,175 200,100 340,40" className="stroke-yellow-500 hover-target" delay="0.4s" />
            {/* MA5 */}
            <AnimatedPath d="M10,220 C100,180 200,90 340,20" className="stroke-slate-900 dark:stroke-slate-100 hover-target" delay="0.5s" />
            
            {/* Candle - Breakout at crossing point */}
            <rect x="180" y="80" width="12" height="60" className="fill-red-500 stroke-red-600 animate-pulse" />
            <line x1="186" y1="75" x2="186" y2="145" className="stroke-red-600" strokeWidth="1" />
            <text x="195" y="85" fontSize="11" className="fill-red-500 font-bold">{lang === 'zh' ? '一阳穿线' : 'Cross'}</text>
            <circle cx="186" cy="95" r="3" className="fill-white stroke-red-500" />
        </g>
      </TacticalCard>

      {/* 2. Air Refueling */}
      <TacticalCard 
        title={t.c2.title}
        subtitle={t.c2.sub}
        tag={t.c2.tag}
        highlightColor="blue"
        desc={t.c2.d}
        lang={lang}
      >
         <g>
            <AnimatedPath d="M10,180 C150,160 250,140 340,120" className="stroke-amber-500 hover-target" delay="0s" />
            <AnimatedPath d="M10,150 C150,130 250,100 340,70" className="stroke-blue-600 hover-target" strokeWidth="2" delay="0.1s" />
            <AnimatedPath d="M10,130 C150,100 250,80 340,50" className="stroke-green-500 hover-target" delay="0.2s" />
            <AnimatedPath d="M10,110 C80,80 140,60 180,90 220,70 340,30" className="stroke-yellow-500 hover-target" delay="0.3s" />
            <AnimatedPath d="M10,100 L80,50 L140,40 L180,75 L240,30 L340,10" className="stroke-slate-900 dark:stroke-slate-100 hover-target" delay="0.4s" />
            
            <circle cx="180" cy="75" r="5" className="fill-blue-500/20 stroke-blue-600 animate-ping" />
            <text x="175" y="105" fontSize="11" className="fill-blue-600 dark:fill-blue-400 font-bold" textAnchor="middle">{lang === 'zh' ? '回踩MA60' : 'Test MA60'}</text>
            
            <rect x="180" y="145" width="6" height="15" className="fill-green-300 dark:fill-green-400/50" />
            <rect x="230" y="135" width="8" height="25" className="fill-red-300 dark:fill-red-400/50" />

            {/* Added: Refueling Candle */}
            <rect x="200" y="55" width="10" height="30" className="fill-red-500 stroke-red-600 animate-pulse" />
            <line x1="205" y1="50" x2="205" y2="90" className="stroke-red-600" strokeWidth="1" />
            <text x="205" y="45" fontSize="11" className="fill-red-500 font-bold" textAnchor="middle">{lang === 'zh' ? '再次启动' : 'Launch'}</text>
         </g>
      </TacticalCard>

      {/* 3. Golden Toad */}
      <TacticalCard 
        title={t.c3.title}
        subtitle={t.c3.sub}
        tag={t.c3.tag}
        highlightColor="yellow"
        desc={t.c3.d}
        lang={lang}
      >
        <g>
            <AnimatedPath d="M10,180 C150,170 340,160" className="stroke-amber-500 hover-target" delay="0s" />
            <AnimatedPath d="M10,150 C150,140 250,120 340,100" className="stroke-blue-600 hover-target" strokeWidth="2" delay="0.1s" />
            <AnimatedPath d="M10,130 C100,120 200,110 340,80" className="stroke-green-500 hover-target" delay="0.2s" />
            <AnimatedPath d="M10,120 C50,80 100,110 150,120 200,80 250,100 340,40" className="stroke-yellow-500 hover-target" delay="0.3s" />
            <AnimatedPath d="M10,115 C50,75 100,105 150,115 200,75 250,95 340,35" className="stroke-slate-900 dark:stroke-slate-100 hover-target" delay="0.4s" />

            <circle cx="75" cy="85" r="3" className="fill-amber-400 stroke-slate-900" />
            <text x="75" y="75" fontSize="11" className="font-bold fill-slate-700 dark:fill-slate-300 text-center" textAnchor="middle">{lang === 'zh' ? '左眼' : 'L-Eye'}</text>
            <circle cx="215" cy="85" r="3" className="fill-amber-400 stroke-slate-900" />
            <text x="215" y="75" fontSize="11" className="font-bold fill-slate-700 dark:fill-slate-300 text-center" textAnchor="middle">{lang === 'zh' ? '右眼' : 'R-Eye'}</text>

            {/* Added: Right Eye Breakout Candle */}
            <rect x="225" y="55" width="10" height="35" className="fill-red-500 stroke-red-600 animate-pulse" />
            <line x1="230" y1="50" x2="230" y2="95" className="stroke-red-600" strokeWidth="1" />
            <text x="235" y="50" fontSize="11" className="fill-red-500 font-bold">{lang === 'zh' ? '突破' : 'Brk'}</text>
        </g>
      </TacticalCard>

      {/* 4. Death Flower */}
      <TacticalCard 
        title={t.c4.title}
        subtitle={t.c4.sub}
        tag={t.c4.tag}
        highlightColor="red"
        desc={t.c4.d}
        lang={lang}
      >
        <g>
            <AnimatedPath d="M10,150 C150,140 340,130" className="stroke-amber-500 hover-target" delay="0s" />
            <AnimatedPath d="M10,120 C150,100 250,90 340,85" className="stroke-blue-600 hover-target" delay="0.1s" />
            <AnimatedPath d="M10,90 C100,60 200,50 340,100" className="stroke-green-500 hover-target" delay="0.2s" />
            <AnimatedPath d="M10,60 C100,30 180,40 250,110 340,140" className="stroke-yellow-500 hover-target" delay="0.3s" />
            <AnimatedPath d="M10,40 C80,20 160,30 200,120 340,180" className="stroke-slate-900 dark:stroke-slate-100 hover-target" delay="0.4s" />
            
            <rect x="195" y="30" width="12" height="110" className="fill-green-600 stroke-green-700" strokeWidth="1" />
            <text x="215" y="60" fontSize="11" className="fill-green-600 dark:fill-green-400 font-bold">{lang === 'zh' ? '断头铡刀' : 'Guillotine'}</text>
            <rect x="195" y="145" width="12" height="30" className="fill-green-400 dark:fill-green-500" />
        </g>
      </TacticalCard>

      {/* 5. Golden Spider */}
      <TacticalCard 
        title={t.c5.title}
        subtitle={t.c5.sub}
        tag={t.c5.tag}
        highlightColor="pink"
        desc={t.c5.d}
        lang={lang}
      >
        <g>
            {/* 3 lines converging at approx 175, 110. Colors updated to MA20(Purple), MA10(Yellow), MA5(Slate/White) */}
            {/* MA20 Purple */}
            <AnimatedPath d="M10,160 C100,140 175,110 250,80 340,60" className="stroke-purple-600 hover-target" delay="0s" />
            {/* MA10 Yellow */}
            <AnimatedPath d="M10,140 C100,130 175,110 250,70 340,40" className="stroke-yellow-500 hover-target" strokeWidth="2" delay="0.1s" />
            {/* MA5 White/Slate */}
            <AnimatedPath d="M10,110 C100,110 175,110 250,50 340,20" className="stroke-slate-900 dark:stroke-slate-100 hover-target" delay="0.2s" />
            
            {/* The Breakout Candle */}
            <rect x="170" y="85" width="10" height="50" className="fill-pink-500 stroke-pink-600" />
            <line x1="175" y1="80" x2="175" y2="140" className="stroke-pink-600" strokeWidth="1" />
            
            {/* Annotation */}
            <circle cx="175" cy="110" r="15" className="stroke-pink-500 fill-none animate-ping opacity-50" strokeWidth="2" />
            <text x="185" y="100" fontSize="11" className="fill-pink-500 font-bold">{lang === 'zh' ? '阳线贯穿' : 'Pierce'}</text>
        </g>
      </TacticalCard>

      {/* 6. Looking Back */}
      <TacticalCard 
        title={t.c6.title}
        subtitle={t.c6.sub}
        tag={t.c6.tag}
        highlightColor="teal"
        desc={t.c6.d}
        lang={lang}
      >
        <g>
            {/* Long term trend up */}
            <AnimatedPath d="M10,180 C120,170 240,160 340,150" className="stroke-blue-600 hover-target" delay="0s" />
            <AnimatedPath d="M10,165 C120,155 240,145 340,135" className="stroke-green-500 hover-target" delay="0.1s" />
            <AnimatedPath d="M10,150 C120,140 240,130 340,120" className="stroke-purple-600 hover-target" delay="0.2s" />
            
            {/* MA10 Yellow - Steady up */}
            <AnimatedPath d="M10,130 C100,110 200,90 340,60" className="stroke-yellow-500 hover-target" strokeWidth="2" delay="0.3s" />
            
            {/* MA5 White - Parallel above MA10 */}
            <AnimatedPath d="M10,110 C100,90 200,70 340,40" className="stroke-slate-900 dark:stroke-slate-100 hover-target" strokeWidth="2" delay="0.4s" />
            
            {/* Candles representing the dip */}
            <rect x="130" y="60" width="8" height="15" className="fill-red-500 stroke-red-600" /> 
            <rect x="145" y="70" width="8" height="20" className="fill-green-500 stroke-green-600" />
            <rect x="160" y="85" width="8" height="20" className="fill-green-500 stroke-green-600" />

            {/* The Reversal Candle - Crossing both lines */}
            <rect x="180" y="65" width="12" height="40" className="fill-red-500 stroke-red-600" />
            <line x1="186" y1="60" x2="186" y2="110" className="stroke-red-600" strokeWidth="1" />

            <text x="186" y="55" fontSize="11" className="fill-red-500 font-bold" textAnchor="middle">{lang === 'zh' ? '一阳穿双线' : 'Cross Double'}</text>
            
            {/* Highlight */}
            <circle cx="186" cy="85" r="15" className="stroke-teal-500 fill-none stroke-dasharray-2 animate-pulse" strokeWidth="1" />
        </g>
      </TacticalCard>
    </div>
  );
};