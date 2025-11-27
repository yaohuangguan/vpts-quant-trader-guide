
import React from 'react';
import { Card } from './Card';
import { Lang } from '../types';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PatternData {
    name: string;
    enName: string;
    type: 'top' | 'bottom';
    desc: string;
    svg: React.ReactNode;
}

// --- Helper Components for SVG Drawing ---

// Generic Candle Component
const Candle = ({ x, y, w, h_body, h_wick_top, h_wick_bottom, color, delay = '0s' }: { x: number, y: number, w: number, h_body: number, h_wick_top: number, h_wick_bottom: number, color: string, delay?: string }) => (
    <g className={`candle-anim ${color}`} style={{ animationDelay: delay }}>
        {/* Wicks - Now using stroke-current to inherit color */}
        <line x1={x + w/2} y1={y - h_wick_top} x2={x + w/2} y2={y + h_body + h_wick_bottom} className="stroke-current" strokeWidth="1.5" />
        {/* Body - Using fill-current to inherit color */}
        <rect x={x} y={y} width={w} height={Math.max(h_body, 1)} className="fill-current" />
    </g>
);

// --- Pattern Specific Visualizations ---

export const ClassicCandlePatterns: React.FC<{ lang: Lang }> = ({ lang }) => {
    // Colors based on locale (ZH: Red=Up/Green=Down, EN: Green=Up/Red=Down)
    const UP = lang === 'zh' ? 'text-red-500' : 'text-green-500';
    const DOWN = lang === 'zh' ? 'text-green-500' : 'text-red-500';
    const NEUTRAL = 'text-slate-400 dark:text-slate-500';
    
    // Stroke colors for non-candle elements
    const UP_STROKE = lang === 'zh' ? 'stroke-red-500' : 'stroke-green-500';
    const DOWN_STROKE = lang === 'zh' ? 'stroke-green-500' : 'stroke-red-500';

    const patterns: { [key: string]: PatternData[] } = {
        single: [
            {
                name: '射击之星', enName: 'Shooting Star', type: 'top',
                desc: lang === 'zh' ? '高位出现。实体极小位于下端，上影线极长（>实体2倍）。表明多头进攻受阻，空头反扑。' : 'Appears at top. Small body at bottom, very long upper shadow (>2x body). Bulls rejected.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <line x1="0" y1="80" x2="100" y2="20" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="4" />
                        {/* Trend Up Candles */}
                        <Candle x={10} y={70} w={10} h_body={15} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        <Candle x={30} y={50} w={10} h_body={20} h_wick_top={5} h_wick_bottom={5} color={UP} delay="0.2s" />
                        {/* The Star - Moved down to y=35 to fit upper shadow (25px) */}
                        <Candle x={60} y={35} w={12} h_body={8} h_wick_top={25} h_wick_bottom={0} color={DOWN} delay="0.5s" />
                    </svg>
                )
            },
            {
                name: '吊颈线', enName: 'Hanging Man', type: 'top',
                desc: lang === 'zh' ? '高位出现。实体极小位于上端，下影线极长。看似探底回升，实则主力在尝试出货，抛压已现。' : 'At top. Small body at top, long lower shadow. Looks like support, actually signifies selling pressure.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <line x1="0" y1="80" x2="100" y2="20" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="4" />
                        <Candle x={10} y={70} w={10} h_body={15} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        <Candle x={30} y={50} w={10} h_body={20} h_wick_top={5} h_wick_bottom={5} color={UP} delay="0.2s" />
                        {/* Hanging Man */}
                        <Candle x={60} y={25} w={12} h_body={8} h_wick_top={0} h_wick_bottom={25} color={DOWN} delay="0.5s" />
                    </svg>
                )
            },
            {
                name: '锤头线', enName: 'Hammer', type: 'bottom',
                desc: lang === 'zh' ? '低位出现。实体位于上端，下影线长。空头力竭，多头开始试探性反攻。' : 'At bottom. Small body at top, long lower shadow. Bears exhausted, bulls probing.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <line x1="0" y1="20" x2="100" y2="80" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="4" />
                        <Candle x={10} y={20} w={10} h_body={15} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                        <Candle x={30} y={40} w={10} h_body={20} h_wick_top={5} h_wick_bottom={5} color={DOWN} delay="0.2s" />
                        {/* Hammer - Moved up to y=60 to fit lower shadow (25px) */}
                        <Candle x={60} y={60} w={12} h_body={8} h_wick_top={0} h_wick_bottom={25} color={UP} delay="0.5s" />
                    </svg>
                )
            },
            {
                name: '倒锤头', enName: 'Inverted Hammer', type: 'bottom',
                desc: lang === 'zh' ? '低位出现。实体位于下端，上影线长。主力试盘，承接盘出现，变盘在即。' : 'At bottom. Small body at bottom, long upper shadow. MM testing supply, reversal soon.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <line x1="0" y1="20" x2="100" y2="80" className="stroke-slate-300 dark:stroke-slate-600" strokeDasharray="4" />
                        <Candle x={10} y={20} w={10} h_body={15} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                        <Candle x={30} y={40} w={10} h_body={20} h_wick_top={5} h_wick_bottom={5} color={DOWN} delay="0.2s" />
                        {/* Inverted Hammer */}
                        <Candle x={60} y={70} w={12} h_body={8} h_wick_top={25} h_wick_bottom={0} color={UP} delay="0.5s" />
                    </svg>
                )
            },
        ],
        double: [
            {
                name: '乌云盖顶', enName: 'Dark Cloud Cover', type: 'top',
                desc: lang === 'zh' ? '高位。第一根大阳线，第二根高开低走大阴线，收盘价跌破第一根阳线实体中点。' : 'Top. Big Yang, then Big Yin opening high but closing below 50% of Yang body.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={20} y={40} w={20} h_body={40} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        <Candle x={45} y={30} w={20} h_body={40} h_wick_top={5} h_wick_bottom={5} color={DOWN} delay="0.5s" />
                        <line x1={15} y1={60} x2={70} y2={60} className="stroke-slate-400" strokeDasharray="2" />
                    </svg>
                )
            },
            {
                name: '穿头破脚 (阴包阳)', enName: 'Bearish Engulfing', type: 'top',
                desc: lang === 'zh' ? '高位。第二根阴线实体完全包住第一根阳线实体。极强看跌信号。' : 'Top. Yin body completely engulfs previous Yang body. Strong sell signal.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={25} y={45} w={15} h_body={25} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        <Candle x={45} y={35} w={25} h_body={45} h_wick_top={5} h_wick_bottom={5} color={DOWN} delay="0.5s" />
                    </svg>
                )
            },
            {
                name: '刺透形态', enName: 'Piercing Line', type: 'bottom',
                desc: lang === 'zh' ? '低位。第一根大阴线，第二根低开高走大阳线，收盘价升破第一根阴线实体中点。' : 'Bottom. Big Yin, then Big Yang opening low but closing above 50% of Yin body.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={20} y={30} w={20} h_body={40} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                        <Candle x={45} y={40} w={20} h_body={40} h_wick_top={5} h_wick_bottom={5} color={UP} delay="0.5s" />
                        <line x1={15} y1={50} x2={70} y2={50} className="stroke-slate-400" strokeDasharray="2" />
                    </svg>
                )
            },
            {
                name: '旭日东升 (阳包阴)', enName: 'Bullish Engulfing', type: 'bottom',
                desc: lang === 'zh' ? '低位。第二根阳线实体完全包住第一根阴线实体。极强看涨信号。' : 'Bottom. Yang body completely engulfs previous Yin body. Strong buy signal.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={25} y={45} w={15} h_body={25} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                        <Candle x={45} y={35} w={25} h_body={45} h_wick_top={5} h_wick_bottom={5} color={UP} delay="0.5s" />
                    </svg>
                )
            },
        ],
        triple: [
            {
                name: '黄昏之星', enName: 'Evening Star', type: 'top',
                desc: lang === 'zh' ? '高位。阳线 + 跳空十字星 + 阴线。标准的反转信号。' : 'Top. Yang + Gap Star + Yin. Standard reversal signal.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* 1. Big Yang */}
                        <Candle x={10} y={40} w={15} h_body={30} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        {/* 2. Doji Star - Thin body, wicks */}
                        <Candle x={35} y={15} w={10} h_body={2} h_wick_top={5} h_wick_bottom={5} color={NEUTRAL} delay="0.3s" />
                        {/* 3. Big Yin */}
                        <Candle x={55} y={35} w={15} h_body={30} h_wick_top={5} h_wick_bottom={5} color={DOWN} delay="0.6s" />
                    </svg>
                )
            },
            {
                name: '三只乌鸦', enName: 'Three Black Crows', type: 'top',
                desc: lang === 'zh' ? '高位。连续三根阴线，收盘价逐日走低。空头气势如虹。' : 'Top. Three consecutive Yins, closing lower each day. Bears dominating.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={20} y={15} w={15} h_body={25} h_wick_top={2} h_wick_bottom={2} color={DOWN} />
                        <Candle x={40} y={35} w={15} h_body={25} h_wick_top={2} h_wick_bottom={2} color={DOWN} delay="0.3s" />
                        <Candle x={60} y={55} w={15} h_body={25} h_wick_top={2} h_wick_bottom={2} color={DOWN} delay="0.6s" />
                    </svg>
                )
            },
            {
                name: '早晨之星', enName: 'Morning Star', type: 'bottom',
                desc: lang === 'zh' ? '低位。阴线 + 跳空十字星 + 阳线。光明到来的象征。' : 'Bottom. Yin + Gap Star + Yang. Symbol of light arriving.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* 1. Big Yin */}
                        <Candle x={10} y={30} w={15} h_body={30} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                        {/* 2. Doji Star - Thin body */}
                        <Candle x={35} y={75} w={10} h_body={2} h_wick_top={5} h_wick_bottom={5} color={NEUTRAL} delay="0.3s" />
                        {/* 3. Big Yang */}
                        <Candle x={55} y={35} w={15} h_body={30} h_wick_top={5} h_wick_bottom={5} color={UP} delay="0.6s" />
                    </svg>
                )
            },
            {
                name: '红三兵', enName: 'Three Red Soldiers', type: 'bottom',
                desc: lang === 'zh' ? '低位。连续三根小阳线，重心上移。多头步步为营。' : 'Bottom. Three consecutive small Yangs, moving up. Bulls advancing steady.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={20} y={60} w={15} h_body={20} h_wick_top={2} h_wick_bottom={2} color={UP} />
                        <Candle x={40} y={45} w={15} h_body={20} h_wick_top={2} h_wick_bottom={2} color={UP} delay="0.3s" />
                        <Candle x={60} y={30} w={15} h_body={20} h_wick_top={2} h_wick_bottom={2} color={UP} delay="0.6s" />
                    </svg>
                )
            },
        ],
        morph: [
            {
                name: 'M头 (双顶)', enName: 'M-Top (Double Top)', type: 'top',
                desc: lang === 'zh' ? '两次冲击高点失败，跌破颈线。' : 'Failed twice at highs, broke neckline.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,80 L30,20 L50,60 L70,25 L90,90" fill="none" className={`${DOWN_STROKE}`} strokeWidth="3" />
                        <line x1="10" y1="60" x2="90" y2="60" className="stroke-slate-400" strokeDasharray="4" />
                    </svg>
                )
            },
            {
                name: '头肩顶', enName: 'Head & Shoulders Top', type: 'top',
                desc: lang === 'zh' ? '左肩、头部(最高)、右肩(次高)，跌破颈线。' : 'Left Shoulder, Head(High), Right Shoulder(Lower), Break Neck.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,80 L25,40 L40,80 L50,10 L60,80 L75,45 L90,90" fill="none" className={`${DOWN_STROKE}`} strokeWidth="3" />
                        <line x1="10" y1="80" x2="90" y2="80" className="stroke-slate-400" strokeDasharray="4" />
                    </svg>
                )
            },
            {
                name: 'W底 (双底)', enName: 'W-Bottom (Double Bottom)', type: 'bottom',
                desc: lang === 'zh' ? '两次探底回升，突破颈线。' : 'Tested low twice, broke neckline up.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,20 L30,80 L50,40 L70,75 L90,10" fill="none" className={`${UP_STROKE}`} strokeWidth="3" />
                        <line x1="10" y1="40" x2="90" y2="40" className="stroke-slate-400" strokeDasharray="4" />
                    </svg>
                )
            },
            {
                name: '头肩底', enName: 'Head & Shoulders Bottom', type: 'bottom',
                desc: lang === 'zh' ? '左肩、头部(最低)、右肩(次低)，突破颈线。' : 'Left, Head(Low), Right(Higher), Break Neck up.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,20 L25,60 L40,20 L50,90 L60,20 L75,55 L90,10" fill="none" className={`${UP_STROKE}`} strokeWidth="3" />
                        <line x1="10" y1="20" x2="90" y2="20" className="stroke-slate-400" strokeDasharray="4" />
                    </svg>
                )
            },
            {
                name: '岛形反转', enName: 'Island Reversal', type: 'top',
                desc: lang === 'zh' ? '左右两个缺口，中间K线如孤岛。极强的反转信号。' : 'Gaps on both sides, chart looks like an island. Strong reversal.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <Candle x={10} y={60} w={10} h_body={20} h_wick_top={5} h_wick_bottom={5} color={UP} />
                        {/* Gap Up */}
                        <Candle x={35} y={20} w={10} h_body={10} h_wick_top={5} h_wick_bottom={5} color="text-slate-400" />
                        <Candle x={50} y={15} w={10} h_body={10} h_wick_top={5} h_wick_bottom={5} color="text-slate-400" />
                        {/* Gap Down */}
                        <Candle x={75} y={60} w={10} h_body={25} h_wick_top={5} h_wick_bottom={5} color={DOWN} />
                    </svg>
                )
            },
            {
                name: '圆弧底', enName: 'Round Bottom', type: 'bottom',
                desc: lang === 'zh' ? '股价缓慢下跌，低位长期盘整，缓慢回升。' : 'Slow drop, long consolidation, slow rise.',
                svg: (
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10,10 Q50,100 90,10" fill="none" className={`${UP_STROKE}`} strokeWidth="3" strokeDasharray="4 2" />
                    </svg>
                )
            },
        ]
    };

    const PatternCard = ({ p }: { p: PatternData }) => (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-slate-300 dark:hover:border-slate-500 transition-colors shadow-sm group">
            <div className="h-32 bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center p-4 border-b border-slate-200 dark:border-slate-700">
                <style>{`
                    @keyframes grow-candle {
                        from { transform: scaleY(0); }
                        to { transform: scaleY(1); }
                    }
                    .candle-anim { transform-origin: bottom; animation: grow-candle 1s ease-out forwards; }
                `}</style>
                {p.svg}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-[10px] font-bold uppercase flex items-center gap-1 ${p.type === 'top' ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700' : 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700'}`}>
                    {p.type === 'top' ? <ArrowDown size={10} /> : <ArrowUp size={10} />}
                    {p.type === 'top' ? (lang === 'zh' ? '见顶' : 'TOP') : (lang === 'zh' ? '见底' : 'BTM')}
                </div>
            </div>
            <div className="p-4">
                <h5 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">{lang === 'zh' ? p.name : p.enName}</h5>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {p.desc}
                </p>
            </div>
        </div>
    );

    return (
        <div className="space-y-10">
            {/* Single */}
            <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2 border-l-4 border-blue-500 pl-3">
                    {lang === 'zh' ? '单K线形态 (Single Candle)' : 'Single Candle Patterns'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patterns.single.map((p, i) => <PatternCard key={i} p={p} />)}
                </div>
            </div>

            {/* Double */}
            <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                    {lang === 'zh' ? '双K线组合 (Double Candles)' : 'Double Candle Patterns'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patterns.double.map((p, i) => <PatternCard key={i} p={p} />)}
                </div>
            </div>

            {/* Triple */}
            <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2 border-l-4 border-amber-500 pl-3">
                    {lang === 'zh' ? '三K线组合 (Triple Candles)' : 'Triple Candle Patterns'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patterns.triple.map((p, i) => <PatternCard key={i} p={p} />)}
                </div>
            </div>

            {/* Morphology */}
            <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
                    {lang === 'zh' ? '形态结构 (Morphology)' : 'Chart Patterns'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {patterns.morph.map((p, i) => <PatternCard key={i} p={p} />)}
                </div>
            </div>
        </div>
    );
};
