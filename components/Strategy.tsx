
import React from 'react';
import { Card } from './Card';
import { Filter, Play, PieChart, ShieldAlert, TrendingUp, CheckCircle2, AlertTriangle, ArrowUpRight, ScanLine, Radar, Clock, Calendar, MousePointerClick, Target, ArrowRight, Layers, Lock, Zap, Skull, LogOut, BarChart2, Hash, Split, Anchor, Sun, Snowflake, Sprout, Award, Coins } from 'lucide-react';
import { Lang } from '../types';

export const StrategySection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    fusion: {
        title: lang === 'zh' ? '经典形态融合战法' : 'Classic Pattern Fusion Strategy',
        s1: lang === 'zh' ? '五线启动' : 'Launch',
        s2: lang === 'zh' ? '老鸭头' : 'Duck Head',
        s3: lang === 'zh' ? '美人肩' : 'Shoulder',
        t1: lang === 'zh' ? '启动期:' : 'Launch:',
        d1: lang === 'zh' ? '放量大阳 打破粘合' : 'Vol Breakout',
        t2: lang === 'zh' ? '中继期:' : 'Relay:',
        d2: lang === 'zh' ? '鼻孔缩量 回踩支撑' : 'Shrink Retrace',
        t3: lang === 'zh' ? '加速期:' : 'Accel:',
        d3: lang === 'zh' ? '高位盘整 拒绝回调' : 'High Consolidation'
    },
    screen: {
        title: lang === 'zh' ? '阿尔法牛股选股器' : 'Alpha Stock Screener',
        status: lang === 'zh' ? '实时扫描中...' : 'Scanning...',
        f1: lang === 'zh' ? '形态特征' : 'Pattern',
        v1: lang === 'zh' ? '一阳穿多线 (粘合)' : 'One Yang Cross All',
        f2: lang === 'zh' ? '筹码结构' : 'Chips',
        v2: lang === 'zh' ? '90%筹码集中度 < 15%' : '90% Conc < 15%',
        f3: lang === 'zh' ? '均线趋势' : 'MA Trend',
        v3: lang === 'zh' ? '多头排列 (5>10>20)' : 'Bullish (5>10>20)',
        f4: lang === 'zh' ? '流动性' : 'Liquidity',
        v4: lang === 'zh' ? '成交额 > 2亿' : 'Vol > 200M',
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-10">
      <style>{`
        @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); border-color: rgba(59, 130, 246, 0.8); }
        }
        .scanner-overlay {
            background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2), transparent);
            animation: scan-line 3s linear infinite;
        }
        .item-pulse {
            animation: pulse-glow 3s infinite;
        }
        @keyframes draw-path-fusion {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes fade-in-seq {
            0%, 20% { opacity: 0; transform: translateY(5px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .fusion-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-path-fusion 4s ease-in-out infinite;
        }
        .seq-appear-1 { animation: fade-in-seq 4s infinite; animation-delay: 0s; }
        .seq-appear-2 { animation: fade-in-seq 4s infinite; animation-delay: 1.5s; }
        .seq-appear-3 { animation: fade-in-seq 4s infinite; animation-delay: 3s; }
      `}</style>
      
      {/* Left: Fusion Morphology */}
      <div className="w-full md:w-3/5">
        <Card highlightColor="teal" className="h-full">
            <h4 className="font-bold text-lg mb-4 text-teal-800 dark:text-teal-400">{t.fusion.title}</h4>
            <div className="relative h-48 bg-slate-50 dark:bg-slate-900 rounded mb-4 border border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
                <svg viewBox="0 0 500 180" className="w-full h-full absolute inset-0">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />

                    <path d="M20,150 C150,140 300,100 480,20" fill="none" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" strokeDasharray="5,5" />

                    <path 
                        d="M20,150 L80,90 Q130,140 180,110 T240,90 L300,90 L340,70 L380,70 L480,10" 
                        fill="none" 
                        className="stroke-teal-500 fusion-path" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />
                    
                    <g className="seq-appear-1 opacity-0">
                        <circle cx="80" cy="90" r="4" className="fill-red-500" />
                        <text x="80" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-red-500">{t.fusion.s1}</text>
                    </g>

                    <g className="seq-appear-2 opacity-0">
                        <circle cx="180" cy="115" r="4" className="fill-blue-500" />
                        <text x="180" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-blue-500">{t.fusion.s2}</text>
                    </g>

                    <g className="seq-appear-3 opacity-0">
                        <rect x="300" y="65" width="80" height="20" className="fill-pink-500/10 stroke-pink-500" strokeDasharray="2,2" rx="4" />
                        <text x="340" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-pink-500">{t.fusion.s3}</text>
                    </g>
                </svg>

                <div className="absolute bottom-0 left-0 right-0 h-10 flex items-end gap-1 px-4 opacity-50">
                    <div className="w-10 bg-red-500 h-8 seq-appear-1"></div>
                    <div className="w-8 bg-red-400 h-6 seq-appear-1"></div>
                    <div className="w-6 bg-slate-400 h-3 seq-appear-2 ml-10"></div>
                    <div className="w-6 bg-slate-400 h-2 seq-appear-2"></div>
                    <div className="w-6 bg-red-400 h-4 seq-appear-3 ml-20"></div>
                    <div className="w-6 bg-red-400 h-5 seq-appear-3"></div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-sm text-slate-700 dark:text-slate-300">
                <div className="p-2 rounded bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/50">
                    <span className="font-bold text-red-600 dark:text-red-400 block mb-1 text-sm">{t.fusion.t1}</span> <span className="text-xs">{t.fusion.d1}</span>
                </div>
                <div className="p-2 rounded bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1 text-sm">{t.fusion.t2}</span> <span className="text-xs">{t.fusion.d2}</span>
                </div>
                <div className="p-2 rounded bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800/50">
                    <span className="font-bold text-pink-600 dark:text-pink-400 block mb-1 text-sm">{t.fusion.t3}</span> <span className="text-xs">{t.fusion.d3}</span>
                </div>
            </div>
        </Card>
      </div>

      {/* Right: Stock Screener */}
      <div className="w-full md:w-2/5">
        <div className="bg-slate-800 dark:bg-slate-900 text-white border border-slate-700 shadow-xl rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group transition-colors duration-300">
            <div className="absolute left-0 right-0 h-10 scanner-overlay z-0 pointer-events-none"></div>
            
            <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-600 pb-2 relative z-10">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Radar className="text-blue-400 w-5 h-5 animate-spin-slow" style={{animationDuration: '4s'}} />
                        <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></span>
                    </div>
                    <h4 className="font-bold text-base text-blue-300">{t.screen.title}</h4>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-900/50 rounded border border-green-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-400 font-mono tracking-wider">{t.screen.status}</span>
                </div>
            </div>
            
            <div className="space-y-3 flex-grow relative z-10">
                {[
                    { icon: Zap, l: t.screen.f1, v: t.screen.v1, color: 'text-amber-300', bg: 'bg-amber-900/40', border: 'border-amber-500/50' },
                    { icon: PieChart, l: t.screen.f2, v: t.screen.v2, color: 'text-cyan-300', bg: 'bg-cyan-900/40', border: 'border-cyan-500/50' },
                    { icon: TrendingUp, l: t.screen.f3, v: t.screen.v3, color: 'text-emerald-300', bg: 'bg-emerald-900/40', border: 'border-emerald-500/50' },
                    { icon: BarChart2, l: t.screen.f4, v: t.screen.v4, color: 'text-pink-300', bg: 'bg-pink-900/40', border: 'border-pink-500/50' }
                ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${item.bg} ${item.border} item-pulse transition-all transform hover:scale-[1.02]`} style={{animationDelay: `${i * 0.5}s`}}>
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded bg-slate-900/50 ${item.color}`}>
                                <item.icon size={16} />
                            </div>
                            <span className="text-xs text-slate-300 uppercase tracking-wider font-bold">{item.l}</span>
                        </div>
                        <span className={`font-bold text-sm ${item.color}`}>{item.v}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-2 relative z-10">
                <div className="text-xs text-slate-500 font-mono text-center flex items-center justify-center gap-2">
                    <Hash size={10} /> AI ENGINE ACTIVE • <span className="text-slate-400">WAITING FOR DATA FEED...</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const RiskManagement: React.FC<{ lang: Lang }> = ({ lang }) => {
  const Highlight: React.FC<{ color?: string, children: React.ReactNode }> = ({ color = "yellow", children }) => (
    <span className={`font-bold px-1 mx-1 rounded text-sm ${color === 'yellow' ? 'text-amber-600 bg-amber-100 dark:bg-amber-900/40 dark:text-amber-400' : ''} ${color === 'blue' ? 'text-blue-600 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-400' : ''} ${color === 'red' ? 'text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-400' : ''}`}>
        {children}
    </span>
  );

  const t = {
    buy: {
        title: lang === 'zh' ? '买入规则' : 'Entry Rules',
        pyramid: {
            title: lang === 'zh' ? '2-3-2 金字塔建仓' : '2-3-2 Pyramid Entry',
            step1: '20%',
            step1_d: lang === 'zh' ? '底仓 (试错)' : 'Base (Test)',
            step2: '30%',
            step2_d: lang === 'zh' ? '加仓 (确认)' : 'Add (Confirm)',
            step3: '20%',
            step3_d: lang === 'zh' ? '补仓/预备' : 'Final/Reserve'
        },
        conservative: {
            t: lang === 'zh' ? '稳健型' : 'Conservative',
            d: lang === 'zh' ? (
                <>缩量回踩<Highlight color="blue">2-3日</Highlight>。回踩<Highlight color="red">MA5/MA10</Highlight>不破，且均线发散。加仓点。</>
            ) : 'Retrace 2-3 days. Shrinking vol. Support at MA5/10. Add.'
        }
    },
    stop: {
        title: lang === 'zh' ? '止损规则' : 'Stop Loss',
        logic: { t: lang === 'zh' ? '逻辑止损' : 'Logic Stop', d: lang === 'zh' ? <>跌破启动阳线<Highlight color="red">最低价</Highlight>。诱多确认，无条件止损。</> : 'Break Launch Candle Low. Trap confirmed. Exit.' },
        chip: { t: lang === 'zh' ? '筹码止损' : 'Chip Stop', d: lang === 'zh' ? <>跌破<Highlight color="blue">筹码密集峰下沿</Highlight> (支撑变压力)。</> : 'Break Chip Peak Bottom.' },
        time: { t: lang === 'zh' ? '时间止损' : 'Time Stop', d: lang === 'zh' ? <><Highlight color="red">7-10天</Highlight>未脱离成本区，机会成本太高。</> : '7-10 Days stagnant. Opp cost too high.' }
    },
    profit: {
        title: lang === 'zh' ? '止盈规则' : 'Take Profit',
        target: { t: lang === 'zh' ? '目标测算' : 'Target', d: lang === 'zh' ? <>波浪理论：3浪目标 = <Highlight color="blue">1浪涨幅 × 1.618</Highlight>。</> : 'Elliott: Wave 3 Target = Wave 1 Rise × 1.618.' },
        chip: { 
            t: lang === 'zh' ? '筹码转移' : 'Chip Transfer', 
            d: lang === 'zh' ? (
                <>低位底仓<Highlight color="red">消失殆尽</Highlight>，高位筹码峰密集且集中度<Highlight color="red">&gt;30%</Highlight>。小心回调，分批止盈。</>
            ) : 'Base chips vanished. Top peak dense (Conc > 30%). High pullback risk. Scale out.'
        },
        ma: { t: lang === 'zh' ? '均线破位' : 'MA Break', d: lang === 'zh' ? <>有效跌破<Highlight color="blue">MA20</Highlight> (生命线)。清仓。</> : 'Break MA20 (Life Line). Clear.' },
        macd: { t: lang === 'zh' ? '量价背离' : 'Divergence', d: lang === 'zh' ? <>股价涨但<Highlight color="red">MACD红柱不增</Highlight> (背离)。走人。</> : 'Price up, MACD red shrinks. Exit.' }
    },
    intervention: {
        title: lang === 'zh' ? '科学的干预方案——打破僵局的执行协议' : 'Scientific Intervention Protocols - Breaking the Deadlock',
        scaling: {
            title: lang === 'zh' ? '分仓止盈 (Scaling Out)' : 'Scaling Out',
            subtitle: lang === 'zh' ? '神经生物学的完美妥协' : 'Neurobiological Compromise',
            amygdala: lang === 'zh' ? '安抚恐惧' : 'Soothe Fear',
            striatum: lang === 'zh' ? '满足贪婪' : 'Satisfy Greed',
            action: lang === 'zh' ? '卖出 50%' : 'Sell 50%',
            hold: lang === 'zh' ? '持有 50%' : 'Hold 50%',
            win1: lang === 'zh' ? '若跌：庆幸卖了一半' : 'If Drop: Glad I sold',
            win2: lang === 'zh' ? '若涨：庆幸还有一半' : 'If Rise: Glad I held'
        },
        ulysses: {
            title: lang === 'zh' ? '尤利西斯合约 (Ulysses Pact)' : 'Ulysses Pact',
            subtitle: lang === 'zh' ? '预承诺机制' : 'Pre-commitment',
            desc: lang === 'zh' ? '既然大脑在关键时刻会“冻结”，就提前用系统（条件单）绑住自己的手。' : 'Brain freezes under stress. Use system (Conditional Orders) to tie your hands in advance.',
            code: lang === 'zh' ? 'IF 价格 <= MA5 THEN 自动卖出' : 'IF Price <= MA5 THEN Auto Sell'
        },
    },
    reframe: {
        title: lang === 'zh' ? '认知重构 (Cognitive Reframing)' : 'Cognitive Reframing',
        farmer: {
            title: lang === 'zh' ? '利润的“收割者”思维' : 'The Harvester Mindset',
            mantra: lang === 'zh' ? '“三浪是夏天，破位是秋天。我不收割，冬天就会带走一切。”' : '"Wave 3 is Summer, Breakdown is Autumn. Harvest or Winter takes all."',
            visual: lang === 'zh' ? '季节性作物' : 'Seasonal Crops',
            desc: lang === 'zh' ? '将账户浮盈视为会腐烂的作物。目标从“赚多少”转移到“留住多少”。防守 > 进攻。' : 'Floating profit = Rotting crops. Shift goal from "Make" to "Keep". Defense > Offense.'
        },
        badge: {
            title: lang === 'zh' ? '拥抱“卖飞”' : 'Embrace "Selling Early"',
            honor: lang === 'zh' ? '职业交易员的荣誉勋章' : 'Badge of Honor',
            logic: lang === 'zh' ? '只有严格执行纪律的人，才有可能卖飞。试图卖在最高点的人，最终往往坐过山车。' : 'Only disciplined traders sell too early. Those trying to top-tick usually round-trip.',
            philosophy: lang === 'zh' ? '卖飞 = 战胜贪婪。接受“不完美”，通向“完美”执行。' : 'Selling Early = Conquering Greed. Accept imperfection to master execution.'
        }
    }
  };

  return (
    <div className="flex flex-col gap-6">
       {/* Buy Rules */}
       <Card highlightColor="green" className="bg-green-50/30 dark:bg-green-900/5 border-2 border-green-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-xl text-green-600 dark:text-green-300">
                  <Target size={20} />
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100">{t.buy.title}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pyramid Visualization */}
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-green-500 shadow-sm flex flex-col items-center">
                  <div className="font-bold text-base text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                       <Layers size={18}/> {t.buy.pyramid.title}
                  </div>
                  
                  <div className="flex flex-col items-center justify-end w-48 gap-1 mb-4">
                       <div className="w-1/3 bg-green-300 dark:bg-green-700 h-8 rounded-t flex items-center justify-center text-sm font-bold text-white shadow-sm">
                            {t.buy.pyramid.step3}
                       </div>
                       <div className="w-2/3 bg-green-500 dark:bg-green-600 h-10 flex items-center justify-center text-base font-bold text-white shadow-sm">
                            {t.buy.pyramid.step2}
                       </div>
                       <div className="w-full bg-green-700 dark:bg-green-500 h-12 rounded-b flex items-center justify-center text-lg font-bold text-white shadow-md">
                            {t.buy.pyramid.step1}
                       </div>
                  </div>

                  <div className="w-full space-y-1 text-sm text-slate-600 dark:text-slate-300 font-medium">
                       <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                           <span className="font-bold text-green-700 dark:text-green-400">20% {t.buy.pyramid.step1_d}</span>
                       </div>
                       <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                           <span className="font-bold text-green-500 dark:text-green-300">30% {t.buy.pyramid.step2_d}</span>
                       </div>
                       <div className="flex justify-between">
                           <span className="font-bold text-green-300 dark:text-green-200">20% {t.buy.pyramid.step3_d}</span>
                       </div>
                  </div>
              </div>

              {/* Conservative & Details */}
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 shadow-sm flex flex-col justify-center">
                  <div className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">{t.buy.conservative.t}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-4">{t.buy.conservative.d}</p>
                  
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-500">
                      <span className="font-bold">Total Max:</span> 70% (Keep 30% Cash)
                  </div>
              </div>
          </div>
      </Card>

      {/* Stop Rules */}
      <Card highlightColor="red" className="bg-red-50/30 dark:bg-red-900/5 border-2 border-red-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 dark:bg-red-900 p-2 rounded-xl text-red-600 dark:text-red-300">
                  <ShieldAlert size={20} />
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100">{t.stop.title}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                      <Skull className="text-red-500" size={16} />
                      <div className="font-bold text-base text-slate-800 dark:text-slate-200">{t.stop.logic.t}</div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{t.stop.logic.d}</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                      <Layers className="text-red-500" size={16} />
                      <div className="font-bold text-base text-slate-800 dark:text-slate-200">{t.stop.chip.t}</div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{t.stop.chip.d}</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                      <Clock className="text-red-500" size={16} />
                      <div className="font-bold text-base text-slate-800 dark:text-slate-200">{t.stop.time.t}</div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{t.stop.time.d}</div>
              </div>
          </div>
      </Card>

      {/* Profit Rules */}
      <Card highlightColor="blue" className="bg-blue-50/30 dark:bg-blue-900/5 border-2 border-blue-500/20 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-xl text-blue-600 dark:text-blue-300">
                  <LogOut size={20} />
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100">{t.profit.title}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border-t-4 border-blue-500 flex flex-col">
                  <span className="font-bold text-base text-slate-800 dark:text-slate-200 mb-1">{t.profit.target.t}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.profit.target.d}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border-t-4 border-indigo-500 flex flex-col">
                  <span className="font-bold text-base text-slate-800 dark:text-slate-200 mb-1">{t.profit.chip.t}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.profit.chip.d}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border-t-4 border-teal-500 flex flex-col">
                  <span className="font-bold text-base text-slate-800 dark:text-slate-200 mb-1">{t.profit.ma.t}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.profit.ma.d}</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border-t-4 border-red-500 flex flex-col">
                  <span className="font-bold text-base text-slate-800 dark:text-slate-200 mb-1">{t.profit.macd.t}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t.profit.macd.d}</span>
              </div>
          </div>
      </Card>

      {/* Scientific Intervention Protocols */}
      <Card highlightColor="purple" className="bg-purple-50/30 dark:bg-purple-900/5 border-2 border-purple-500/20 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-xl text-purple-600 dark:text-purple-300">
                  <Split size={20} />
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100">{t.intervention.title}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* 1. Scaling Out (Neuro Compromise) */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-purple-200 dark:border-slate-700 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 border-b border-purple-100 dark:border-slate-700 pb-2">
                      <div className="p-1.5 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600">
                          <Split size={16} />
                      </div>
                      <div>
                          <h5 className="font-bold text-base text-slate-800 dark:text-slate-100">{t.intervention.scaling.title}</h5>
                          <span className="text-xs text-slate-500 uppercase tracking-wide font-bold">{t.intervention.scaling.subtitle}</span>
                      </div>
                  </div>
                  
                  {/* Split Brain Visual */}
                  <div className="flex-1 flex flex-col items-center justify-center mb-4 relative">
                      <div className="flex w-full max-w-[200px] h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600">
                          <div className="w-1/2 bg-green-100 dark:bg-green-900/30 flex flex-col items-center justify-center border-r border-slate-200 dark:border-slate-600">
                              <span className="text-sm font-bold text-green-700 dark:text-green-300">{t.intervention.scaling.action}</span>
                              <span className="text-xs text-slate-500">{t.intervention.scaling.amygdala}</span>
                          </div>
                          <div className="w-1/2 bg-amber-100 dark:bg-amber-900/30 flex flex-col items-center justify-center">
                              <span className="text-sm font-bold text-amber-700 dark:text-amber-300">{t.intervention.scaling.hold}</span>
                              <span className="text-xs text-slate-500">{t.intervention.scaling.striatum}</span>
                          </div>
                      </div>
                      {/* Connection Line */}
                      <div className="absolute -bottom-3 flex gap-12 w-full justify-center">
                          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
                          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
                      </div>
                  </div>

                  <div className="text-xs space-y-2 mt-2">
                      <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/10 rounded text-green-700 dark:text-green-300 font-bold border border-green-100 dark:border-green-800/30">
                          <ArrowRight size={12} /> {t.intervention.scaling.win1}
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-900/10 rounded text-amber-700 dark:text-amber-300 font-bold border border-amber-100 dark:border-amber-800/30">
                          <ArrowUpRight size={12} /> {t.intervention.scaling.win2}
                      </div>
                  </div>
              </div>

              {/* 2. Ulysses Pact (Pre-commitment) */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-blue-200 dark:border-slate-700 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3 border-b border-blue-100 dark:border-slate-700 pb-2">
                      <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600">
                          <Anchor size={16} />
                      </div>
                      <div>
                          <h5 className="font-bold text-base text-slate-800 dark:text-slate-100">{t.intervention.ulysses.title}</h5>
                          <span className="text-xs text-slate-500 uppercase tracking-wide font-bold">{t.intervention.ulysses.subtitle}</span>
                      </div>
                  </div>

                  <div className="flex-1 bg-slate-900 rounded-lg p-3 font-mono text-sm text-green-400 mb-3 relative overflow-hidden flex items-center border border-slate-700">
                      <div className="absolute top-0 right-0 p-1 opacity-20">
                          <Lock size={40} />
                      </div>
                      <div className="z-10">
                          <div className="text-slate-500 mb-1">// Auto-Trigger</div>
                          <div>{t.intervention.ulysses.code}</div>
                          <div className="text-blue-400 mt-1">Status: ARMED</div>
                      </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {t.intervention.ulysses.desc}
                  </p>
              </div>
          </div>
      </Card>

      {/* Cognitive Reframing - New Dedicated Card */}
      <Card highlightColor="amber" className="bg-amber-50/30 dark:bg-amber-900/5 border-2 border-amber-500/20 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-xl text-amber-600 dark:text-amber-300">
                  <Sun size={20} />
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100">{t.reframe.title}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Harvester Mindset */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-amber-200 dark:border-slate-700 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-amber-100 dark:border-slate-700 pb-2">
                      <Sprout className="text-green-600 dark:text-green-400" size={18} />
                      <h5 className="font-bold text-base text-slate-800 dark:text-slate-100">{t.reframe.farmer.title}</h5>
                  </div>
                  
                  {/* Seasonal Visualization */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                      <div className="flex flex-col items-center">
                          <Sun className="text-red-500 mb-1" size={20} />
                          <span className="text-xs font-bold text-slate-500">Wave 3 (Summer)</span>
                      </div>
                      <ArrowRight size={14} className="text-slate-300" />
                      <div className="flex flex-col items-center">
                          <Coins className="text-amber-500 mb-1" size={20} />
                          <span className="text-xs font-bold text-slate-500">Breakdown (Harvest)</span>
                      </div>
                      <ArrowRight size={14} className="text-slate-300" />
                      <div className="flex flex-col items-center opacity-50">
                          <Snowflake className="text-blue-400 mb-1" size={20} />
                          <span className="text-xs font-bold text-slate-500">Winter (Rot)</span>
                      </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-200 font-bold italic mb-2">
                      {t.reframe.farmer.mantra}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t.reframe.farmer.desc}
                  </p>
              </div>

              {/* 2. Embrace Selling Early */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-indigo-200 dark:border-slate-700 flex flex-col h-full shadow-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-indigo-100 dark:border-slate-700 pb-2">
                      <Award className="text-indigo-600 dark:text-indigo-400" size={18} />
                      <h5 className="font-bold text-base text-slate-800 dark:text-slate-100">{t.reframe.badge.title}</h5>
                  </div>

                  {/* Badge Visualization */}
                  <div className="flex flex-col items-center justify-center mb-4 p-2">
                      <div className="relative">
                          <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 rounded-full"></div>
                          <Award size={48} className="text-indigo-500 dark:text-indigo-400 relative z-10" />
                      </div>
                      <div className="mt-2 text-xs font-black text-indigo-700 dark:text-indigo-300 uppercase tracking-widest border border-indigo-200 dark:border-indigo-800 px-2 py-1 rounded">
                          {t.reframe.badge.honor}
                      </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-200 font-medium mb-2 leading-relaxed">
                      {t.reframe.badge.logic}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic border-t border-indigo-50 dark:border-slate-700 pt-2 mt-auto">
                      "{t.reframe.badge.philosophy}"
                  </p>
              </div>
          </div>
      </Card>
    </div>
  );
};
