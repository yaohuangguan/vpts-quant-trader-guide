
import React from 'react';
import { Card } from './Card';
import { Lang } from '../types';
import { Microscope, Layers, List, Search, Zap, Shield, MousePointerClick, ArrowUp, ArrowDown, Database, Eye, Split, FileText } from 'lucide-react';

// --- Visual Components for Terminal ---

const OrderRow = ({ price, vol, type, highlight = false, label, barPercent }: { price: string, vol: string, type: 'ask' | 'bid', highlight?: boolean, label?: string, barPercent: number }) => (
    <div className={`flex justify-between items-center text-[10px] md:text-xs font-mono py-0.5 px-2 relative group hover:bg-slate-800 transition-colors ${highlight ? 'bg-slate-800/80' : ''}`}>
        {/* Volume Bar Background */}
        <div className={`absolute top-0 right-0 h-full opacity-20 ${type === 'ask' ? 'bg-green-500' : 'bg-red-500'}`} style={{width: `${barPercent}%`}}></div>
        
        <span className={`${type === 'ask' ? 'text-green-400' : 'text-red-400'} z-10 font-bold`}>{price}</span>
        <div className="flex items-center gap-2 z-10">
            {label && <span className={`text-[9px] px-1 rounded font-bold ${label === 'WALL' || label === '压单' ? 'bg-blue-600 text-white' : 'bg-amber-600 text-white'}`}>{label}</span>}
            <span className={`text-slate-300 ${highlight ? 'text-white font-bold' : ''}`}>{vol}</span>
        </div>
    </div>
);

const TickRow = ({ time, price, vol, type, flag }: { time: string, price: string, vol: string, type: 'B' | 'S', flag?: string }) => (
    <div className={`flex justify-between items-center text-[10px] md:text-xs font-mono py-0.5 border-b border-slate-800/50 last:border-0 ${flag ? 'bg-slate-800' : ''}`}>
        <span className="text-slate-500">{time}</span>
        <span className={type === 'B' ? 'text-red-400' : 'text-green-400'}>{price}</span>
        <div className="flex items-center gap-1">
            <span className={type === 'B' ? 'text-red-400 font-bold' : 'text-green-400 font-bold'}>{vol}</span>
            <span className={`text-[9px] w-3 text-center ${type === 'B' ? 'text-red-500' : 'text-green-500'}`}>{type}</span>
            {flag && <span className="text-[9px] bg-purple-900 text-purple-300 px-1 rounded ml-1">{flag}</span>}
        </div>
    </div>
);

// Helper for Educational Cards
const ConceptCard = ({ icon: Icon, title, color, data }: { icon: any, title: string, color: string, data: { what: string, why: string, how: string } }) => (
    <div className={`bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-${color}-400 transition-all`}>
        <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800 text-${color}-600 dark:text-${color}-400`}>
            <Icon size={18} />
            <h5 className="font-bold text-base">{title}</h5>
        </div>
        <div className="space-y-3 text-sm">
            <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">What is it?</span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">{data.what}</p>
            </div>
            <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Why Important?</span>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">{data.why}</p>
            </div>
            <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">How to Use?</span>
                <div className={`text-${color}-700 dark:text-${color}-300 bg-${color}-50 dark:bg-${color}-900/10 p-2 rounded text-xs font-bold leading-snug`}>
                    {data.how}
                </div>
            </div>
        </div>
    </div>
);

export const TapeReading: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '读懂盘口：微观博弈与实战运用' : 'Reading the Tape: Microstructure & Application',
    subtitle: lang === 'zh' ? '透过10档盘口、逐笔成交与委托队列，看穿主力意图' : 'See through MM intent via L2 Book, Ticks & Queues',
    
    // New Fundamentals Section
    concepts: {
        tick: {
            title: lang === 'zh' ? '逐笔成交 (Tick-by-Tick)' : 'Tick-by-Tick (L2 Data)',
            what: lang === 'zh' ? '交易所撮合引擎的原始记录。展示每一笔真实的原子交易，包含精确的方向（主动买/卖）和单笔成交量。' : 'Raw atomic trade stream from the exchange engine. Shows exact direction (Active Buy/Sell) and volume per trade.',
            why: lang === 'zh' ? '揭示“谁在主动”。Level-1的“分时成交”通常是3秒快照（Snapshot），会将多笔小单合并显示，掩盖主力踪迹。逐笔能还原拆单真相。' : 'Reveals "Who is Aggressive". L1 "Time & Sales" are 3s snapshots that merge trades, hiding MM footprints. L2 Ticks show the truth.',
            how: lang === 'zh' ? '核心看点：扫单 (Sweep)。一笔大单瞬间吃掉卖一、卖二多个价位，说明主力急不可耐，强烈看涨。' : 'Watch for SWEEPS: One big order instantly eating Ask 1, 2, 3. Signals urgency and strong bullish intent.'
        },
        timeSales: {
            title: lang === 'zh' ? '分时成交 (Time & Sales)' : 'Time & Sales (L1 Snapshot)',
            what: lang === 'zh' ? '传统软件中的成交明细列表。通常是每3秒一次的切片数据，显示这段时间内的累计成交量和最终价格。' : 'Standard trade list in basic apps. Usually a 3-second snapshot showing cumulative volume and final price over that interval.',
            why: lang === 'zh' ? '宏观观察活跃度。但在高频交易时代，它具有“欺骗性”，容易将主力的连续小单拆解吸筹掩盖为散户行为。' : 'Good for macro activity. But "Deceptive" in HFT era. Can mask MM algorithmic accumulation (iceberg orders) as retail noise.',
            how: lang === 'zh' ? '辅助判断：结合K线位置看量能配合。若分时成交量密集放大但价格滞涨，需警惕出货。' : 'Auxiliary: Use with price action. If Time & Sales volume is huge but price stalls, beware of distribution.'
        },
        queue: {
            title: lang === 'zh' ? '委托队列 (Order Queue)' : 'Order Queue (X-Ray)',
            what: lang === 'zh' ? '对盘口挂单的“显微镜”。展示某一个价位（如卖一）上，那1000手挂单具体是由哪些订单组成的。' : 'Microscope for the Order Book. Reveals the composition of pending orders at a specific price level (e.g., Ask 1).',
            why: lang === 'zh' ? '区分“机构”与“散户”。同样是1000手压力位，是一个机构挂的？还是100个散户挂的？意义完全不同。' : 'Distinguish "Institution" vs "Retail". Is the 1000-lot wall one giant order (Strong)? Or 100 small orders (Weak)?',
            how: lang === 'zh' ? '实战技巧：若压力位由无数小单组成（散户合力），通常容易被突破；若由单一大单压盘，往往是主力刻意控制。' : 'Tactic: If resistance is a "Crowd" of small orders, it breaks easily. If it\'s a "Single Giant", MM is controlling price.'
        }
    },

    // Section Headers
    book_title: lang === 'zh' ? '1. 十档盘口 (L2 Order Book)' : '1. L2 Order Book (10 Levels)',
    tick_title: lang === 'zh' ? '2. 逐笔明细 (L2 Ticks)' : '2. L2 Ticks',
    queue_title: lang === 'zh' ? '3. 委托队列 (Queue Detail)' : '3. Order Queue X-Ray',

    // Strategies
    pad_order: {
        title: lang === 'zh' ? '垫单 (Pad Orders) / 托单' : 'Pad Orders (Buy Wall)',
        desc: lang === 'zh' ? '在买二、买三处挂巨量买单，但买一却不积极吃货。' : 'Huge buy orders at Bid 2/3, but Bid 1 is not aggressive.',
        logic: lang === 'zh' ? '【意图】诱多。主力制造“支撑很强”的假象，引诱散户在买一跟风，自己则借机在上方出货。一旦成交困难，垫单会瞬间撤销。' : '[Intent] Bait. Creating fake support to lure retail to Bid 1, while selling at Ask. Pad orders vanish if price drops.',
        action: lang === 'zh' ? '应对：若股价跌破垫单价位且垫单未撤，观察是否为真实成交。若垫单快速撤单，立即离场。' : 'Action: If pad vanishes, Exit.'
    },
    hit_order: {
        title: lang === 'zh' ? '打单 (Hit/Sweep) / 扫货' : 'Hit/Sweep Orders',
        desc: lang === 'zh' ? '大单瞬间吃掉卖一、卖二甚至卖三（连吃多档）。' : 'Large order instantly eats Ask 1, 2, even 3.',
        logic: lang === 'zh' ? '【意图】进攻。这是主力最真实的做多信号。不仅表明急于建仓，更在于提振市场信心，引导跟风盘。' : '[Intent] Attack. Most authentic Bull signal. MM is rushing to buy and igniting momentum.',
        action: lang === 'zh' ? '应对：扫货发生且伴随价格跳升时，是最佳日内追涨点。' : 'Action: Best intraday entry point.'
    },
    queue_analysis: {
        title: lang === 'zh' ? '队列分析 (Queue Analysis)' : 'Queue Analysis',
        desc: lang === 'zh' ? '拆解挂单成分：机构 vs 散户。' : 'Deconstruct Orders: Inst vs Retail.',
        logic: lang === 'zh' ? '【案例】卖一挂单1000手。若由 [900, 50, 50] 组成，为强压力（主力压盘）；若由 [10, 5, 20... x100] 组成，为弱压力（散户合力，易被冲破）。' : '[Case] Ask 1 = 1000. [900, 50, 50] = Strong Res (MM). [10, 5, 20...] = Weak Res (Retail).',
        action: lang === 'zh' ? '应对：遇到“散户单”构成的压力位，可大胆博弈突破；遇到“机构单”压盘，需等待大单吃掉后再进。' : 'Action: Bet on breakout if resistance is Retail. Wait if resistance is Institutional.'
    }
  };

  // Localized Labels for Terminal
  const L = {
      wall: lang === 'zh' ? '压单' : 'WALL',
      pad: lang === 'zh' ? '托单' : 'PAD',
      sup: lang === 'zh' ? '支撑' : 'SUP',
      res: lang === 'zh' ? '阻力' : 'RES',
      sweep: lang === 'zh' ? '扫货' : 'SWEEP',
      inst: lang === 'zh' ? '机构 (INST)' : 'INSTITUTION',
      retail: lang === 'zh' ? '散户' : 'Retail',
      pad_desc: lang === 'zh' ? '单一大单。疑似“托单”(诱多)。' : 'Single limit order. Likely "Pad" (Fake Support).',
      analysis: lang === 'zh' ? '分析：96%的成交量来自1个订单。这是典型的“垫单/托单”。注意观察价格接近时是否撤单。' : 'Analysis: 96% of volume comes from 1 order. This is a classic "Pad Order". Watch if it gets cancelled when price approaches.',
      total: lang === 'zh' ? '总量' : 'Total Vol',
      orders: lang === 'zh' ? '笔数' : 'Orders'
  }

  return (
    <Card highlightColor="slate" className="overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                <Microscope size={24} />
            </div>
            <div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{t.subtitle}</p>
            </div>
        </div>

        {/* --- NEW: Educational Fundamentals Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ConceptCard 
                icon={Database} 
                title={t.concepts.tick.title} 
                color="red"
                data={t.concepts.tick} 
            />
            <ConceptCard 
                icon={FileText} 
                title={t.concepts.timeSales.title} 
                color="blue"
                data={t.concepts.timeSales} 
            />
            <ConceptCard 
                icon={Split} 
                title={t.concepts.queue.title} 
                color="amber"
                data={t.concepts.queue} 
            />
        </div>

        {/* --- TRADING TERMINAL SIMULATION --- */}
        <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-1 md:p-4 shadow-2xl relative overflow-hidden font-mono text-sm mb-8 text-slate-300">
            {/* Glossy Header Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[450px]">
                
                {/* COLUMN 1: ORDER BOOK (10 Levels) */}
                <div className="flex-1 min-w-[240px] flex flex-col border-r border-slate-700/50 pr-0 lg:pr-4">
                    <div className="text-[10px] text-slate-500 mb-2 uppercase font-bold flex justify-between items-center bg-slate-900 p-1 rounded">
                        <span className="flex items-center gap-1"><Layers size={12} /> {t.book_title}</span>
                        <span className="text-slate-600">Stock: XYZ</span>
                    </div>
                    
                    {/* Order Book Content */}
                    <div className="flex-1 flex flex-col justify-center bg-[#1e293b]/50 rounded p-1">
                        {/* ASKS (Sell Orders) - Top Down */}
                        <div className="flex flex-col-reverse gap-px mb-1">
                            <OrderRow price="12.68" vol="45" type="ask" barPercent={5} />
                            <OrderRow price="12.67" vol="120" type="ask" barPercent={12} />
                            <OrderRow price="12.66" vol="88" type="ask" barPercent={8} />
                            <OrderRow price="12.65" vol="500" type="ask" barPercent={30} label={L.res} />
                            <OrderRow price="12.64" vol="210" type="ask" barPercent={15} />
                            <OrderRow price="12.63" vol="50" type="ask" barPercent={5} />
                            <OrderRow price="12.62" vol="3000" type="ask" barPercent={100} label={L.wall} highlight={true} /> {/* Pressure */}
                            <OrderRow price="12.61" vol="150" type="ask" barPercent={10} />
                            <OrderRow price="12.60" vol="80" type="ask" barPercent={6} />
                            <OrderRow price="12.59" vol="20" type="ask" barPercent={2} />
                        </div>
                        
                        {/* Current Price */}
                        <div className="border-y-2 border-slate-600 my-1 py-1.5 text-center bg-slate-800 flex justify-between px-4 items-center">
                            <span className="text-2xl text-white font-bold">12.59</span>
                            <span className="text-xs text-red-400 font-bold">+4.2%</span>
                        </div>

                        {/* BIDS (Buy Orders) */}
                        <div className="flex flex-col gap-px">
                            <OrderRow price="12.58" vol="150" type="bid" barPercent={10} />
                            <OrderRow price="12.57" vol="5000" type="bid" barPercent={100} label={L.pad} highlight={true} /> {/* Pad Order */}
                            <OrderRow price="12.56" vol="200" type="bid" barPercent={15} />
                            <OrderRow price="12.55" vol="50" type="bid" barPercent={4} />
                            <OrderRow price="12.54" vol="100" type="bid" barPercent={8} />
                            <OrderRow price="12.53" vol="300" type="bid" barPercent={20} />
                            <OrderRow price="12.52" vol="80" type="bid" barPercent={6} />
                            <OrderRow price="12.51" vol="40" type="bid" barPercent={3} />
                            <OrderRow price="12.50" vol="1000" type="bid" barPercent={40} label={L.sup} />
                            <OrderRow price="12.49" vol="20" type="bid" barPercent={2} />
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: TICKS (Time & Sales) */}
                <div className="flex-1 min-w-[240px] flex flex-col border-r border-slate-700/50 pr-0 lg:pr-4">
                    <div className="text-[10px] text-slate-500 mb-2 uppercase font-bold flex justify-between items-center bg-slate-900 p-1 rounded">
                        <span className="flex items-center gap-1"><List size={12} /> {t.tick_title}</span>
                        <span className="flex items-center gap-1 text-red-400"><Zap size={10}/> Live</span>
                    </div>
                    
                    <div className="flex-1 bg-[#1e293b]/50 rounded p-1 overflow-hidden relative">
                        <div className="space-y-0.5 animate-pulse-slow">
                            <TickRow time="10:30:15" price="12.59" vol="5" type="S" />
                            <TickRow time="10:30:14" price="12.59" vol="2" type="S" />
                            <TickRow time="10:30:12" price="12.59" vol="10" type="S" />
                            
                            {/* HIT ORDER / SWEEP */}
                            <div className="my-1 border-t border-b border-red-500/30 bg-red-900/20">
                                <TickRow time="10:30:10" price="12.60" vol="80" type="B" />
                                <TickRow time="10:30:10" price="12.61" vol="150" type="B" />
                                <TickRow time="10:30:10" price="12.62" vol="2000" type="B" flag={L.sweep} />
                            </div>

                            <TickRow time="10:30:08" price="12.58" vol="50" type="S" />
                            <TickRow time="10:30:05" price="12.58" vol="100" type="S" />
                            <TickRow time="10:30:02" price="12.58" vol="500" type="B" />
                            <TickRow time="10:30:01" price="12.58" vol="20" type="S" />
                            <TickRow time="10:30:00" price="12.58" vol="10" type="S" />
                            <TickRow time="10:29:58" price="12.57" vol="200" type="B" />
                            <TickRow time="10:29:55" price="12.57" vol="50" type="B" />
                            <TickRow time="10:29:50" price="12.57" vol="5" type="S" />
                        </div>
                        {/* Gradient Fade at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#1e293b] to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* COLUMN 3: QUEUE (X-RAY) */}
                <div className="flex-1 min-w-[240px] flex flex-col">
                    <div className="text-[10px] text-slate-500 mb-2 uppercase font-bold flex justify-between items-center bg-slate-900 p-1 rounded">
                        <span className="flex items-center gap-1"><Search size={12} /> {t.queue_title}</span>
                        <span className="text-blue-400">@ 12.57 (Bid 2)</span>
                    </div>

                    <div className="flex-1 bg-[#1e293b]/50 rounded p-2 overflow-y-auto custom-scrollbar border border-slate-700/50">
                        <div className="mb-2 text-xs text-slate-400 flex justify-between border-b border-slate-700 pb-1">
                            <span>{L.total}: <strong className="text-white">5000</strong></span>
                            <span>{L.orders}: <strong className="text-white">4</strong></span>
                        </div>

                        <div className="space-y-2">
                            {/* Institutional Order (The Pad) */}
                            <div className="relative pl-3 border-l-2 border-red-500 bg-red-900/10 p-2 rounded">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-red-400">{L.inst}</span>
                                    <span className="text-[10px] text-slate-500">10:25:00</span>
                                </div>
                                <div className="text-xl font-bold text-white">4800</div>
                                <div className="text-[10px] text-slate-400 mt-1">{L.pad_desc}</div>
                            </div>

                            {/* Retail Orders */}
                            <div className="relative pl-3 border-l-2 border-slate-500 bg-slate-800/30 p-2 rounded opacity-70">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-slate-400">{L.retail}</span>
                                    <span className="text-[10px] text-slate-600">10:28:15</span>
                                </div>
                                <div className="text-sm font-bold text-slate-300">100</div>
                            </div>
                            <div className="relative pl-3 border-l-2 border-slate-500 bg-slate-800/30 p-2 rounded opacity-70">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-slate-400">{L.retail}</span>
                                    <span className="text-[10px] text-slate-600">10:29:30</span>
                                </div>
                                <div className="text-sm font-bold text-slate-300">50</div>
                            </div>
                             <div className="relative pl-3 border-l-2 border-slate-500 bg-slate-800/30 p-2 rounded opacity-70">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-slate-400">{L.retail}</span>
                                    <span className="text-[10px] text-slate-600">10:29:45</span>
                                </div>
                                <div className="text-sm font-bold text-slate-300">50</div>
                            </div>
                        </div>
                        
                        <div className="mt-4 p-2 bg-blue-900/20 border border-blue-800 rounded text-[10px] text-blue-300">
                            <strong>{L.analysis}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- TACTICAL APPLICATION CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Pad Orders (Fake Support) */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-100 dark:border-slate-700">
                    <Shield size={18} className="text-blue-600 dark:text-blue-400" />
                    <h5 className="font-bold text-slate-800 dark:text-slate-200">{t.pad_order.title}</h5>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-800/50 flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-2">{t.pad_order.desc}</p>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2 opacity-90">{t.pad_order.logic}</div>
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 p-2 rounded">
                        {t.pad_order.action}
                    </div>
                </div>
            </div>

            {/* 2. Hit Orders (Aggressive Entry) */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-red-100 dark:border-slate-700">
                    <MousePointerClick size={18} className="text-red-600 dark:text-red-400" />
                    <h5 className="font-bold text-slate-800 dark:text-slate-200">{t.hit_order.title}</h5>
                </div>
                <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-800/50 flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-2">{t.hit_order.desc}</p>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2 opacity-90">{t.hit_order.logic}</div>
                    <div className="text-xs font-bold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 p-2 rounded">
                        {t.hit_order.action}
                    </div>
                </div>
            </div>

            {/* 3. Queue Analysis (Identity) */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-100 dark:border-slate-700">
                    <Search size={18} className="text-amber-600 dark:text-amber-400" />
                    <h5 className="font-bold text-slate-800 dark:text-slate-200">{t.queue_analysis.title}</h5>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50 flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-2">{t.queue_analysis.desc}</p>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-2 opacity-90">{t.queue_analysis.logic}</div>
                    <div className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/50 p-2 rounded">
                        {t.queue_analysis.action}
                    </div>
                </div>
            </div>

        </div>
    </Card>
  );
};
