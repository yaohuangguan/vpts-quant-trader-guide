
import React from 'react';
import { Card } from './Card';
import { Scale, Sprout, ShoppingCart, RefreshCw, Flame, Hand, CheckCircle } from 'lucide-react';
import { Lang } from '../types';

export const PhilosophyReconstruction: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '知行合一的哲学与心理重构' : 'Philosophical & Psychological Reconstruction',
    subtitle: lang === 'zh' ? '思想的武器' : 'Weapons of the Mind',
    
    wang: {
        title: lang === 'zh' ? '王阳明：知行合一' : 'Wang Yangming: Unity of Knowledge & Action',
        concept: lang === 'zh' ? '真知即行' : 'True Knowledge is Action',
        desc: lang === 'zh' ? '“知是行之始，行是知之成”。如果你知道火是烫的，绝不会伸手。伸进去了，说明不是“真知”。' : '"Knowledge is the beginning of action; action is the completion of knowledge." If you touch fire, you don\'t truly know it\'s hot.',
        application: lang === 'zh' ? '交易映射' : 'Trading Mapping',
        app_desc: lang === 'zh' ? '跌破5日线 = 烫手。必须建立条件反射，而非权衡利弊。' : 'Break MA5 = Hot Fire. Must be a reflex, not a choice.',
    },
    stoic: {
        title: lang === 'zh' ? '斯多葛学派：控制二分法' : 'Stoicism: Dichotomy of Control',
        control: lang === 'zh' ? '完全可控' : 'Controllable',
        uncontrol: lang === 'zh' ? '完全不可控' : 'Uncontrollable',
        c_list: lang === 'zh' ? '入场、仓位、止损执行' : 'Entry, Size, Execution',
        u_list: lang === 'zh' ? '涨跌、新闻、运气' : 'Price Action, News, Luck',
        liberation: lang === 'zh' ? '精神解脱' : 'Liberation',
        lib_desc: lang === 'zh' ? '我对系统负责，不对结果负责。按纪律亏损也是成功，违纪律赚钱也是失败。' : 'Responsible for the System, not the Result. Disciplined loss is success; Undisciplined win is failure.',
    },
    identity: {
        title: lang === 'zh' ? '身份重塑：从拥有者到收割者' : 'Identity Shift: From Owner to Harvester',
        farmer: {
            t: lang === 'zh' ? '农夫理论' : 'Farmer Theory',
            old: lang === 'zh' ? '卖出 = 失去好股票' : 'Sell = Loss',
            new: lang === 'zh' ? '卖出 = 秋收 (利润入仓)' : 'Sell = Harvest (Profit)',
            d: lang === 'zh' ? '冬天来了(跌破均线)，必须收割，否则烂在地里。' : 'Winter is coming (MA Break). Harvest or rot.',
        },
        merchant: {
            t: lang === 'zh' ? '库存周转理论' : 'Inventory Turnover',
            d: lang === 'zh' ? '滞销品 (跌破5日线) 占用资金成本。卖出是为了加快资金周转 (Velocity of Capital)。' : 'Dead stock (Below MA5) has opportunity cost. Sell to increase Capital Velocity.',
        }
    }
  };

  return (
    <div className="space-y-6">
        <style>{`
            @keyframes reflex-ping {
                0% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.5); opacity: 0; }
                100% { transform: scale(1); opacity: 0; }
            }
            .anim-reflex { animation: reflex-ping 1.5s infinite; }
            @keyframes spin-slow-dashed {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .anim-spin-slow { animation: spin-slow-dashed 20s linear infinite; }
        `}</style>

        {/* Header */}
        <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 mb-2 flex items-center justify-center gap-3">
                <RefreshCw className="text-pink-600 dark:text-pink-400" size={32} />
                {t.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-mono uppercase tracking-widest text-sm">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wang Yangming */}
            <Card highlightColor="red" className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-1.5 rounded text-red-600 dark:text-red-300">
                        <Flame size={20} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.wang.title}</h4>
                </div>
                
                <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-4 flex items-center justify-center overflow-hidden p-4">
                    {/* Visual: Reflex Arc */}
                    <div className="relative flex items-center gap-6">
                        <div className="flex flex-col items-center z-10">
                            <Flame className="text-red-500 animate-pulse" size={32} />
                            <span className="text-xs font-bold text-red-500 mt-1">Fire (Signal)</span>
                        </div>
                        
                        <div className="flex-1 h-1 bg-slate-300 dark:bg-slate-600 w-24 relative overflow-visible">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full anim-reflex"></div>
                             <div className="absolute top-0 left-0 h-full bg-red-500 w-full animate-pulse"></div>
                        </div>

                        <div className="flex flex-col items-center z-10">
                            <Hand className="text-slate-700 dark:text-slate-300 transform -rotate-45" size={32} />
                            <span className="text-xs font-bold text-slate-500 mt-1">Reflex (Action)</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 flex-grow">
                    <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded border-l-4 border-red-500">
                        <h5 className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">{t.wang.concept}</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight">{t.wang.desc}</p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                        {t.wang.app_desc}
                    </p>
                </div>
            </Card>

            {/* Stoicism */}
            <Card highlightColor="blue" className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded text-blue-600 dark:text-blue-300">
                        <Scale size={20} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.stoic.title}</h4>
                </div>

                <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-4 flex items-center justify-center p-4">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                         {/* Outer Circle - Uncontrollable */}
                         <div className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-full anim-spin-slow"></div>
                         <div className="absolute top-2 text-[10px] text-slate-400 font-bold uppercase">{t.stoic.uncontrol}</div>
                         
                         {/* Inner Circle - Controllable */}
                         <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex flex-col items-center justify-center border-2 border-blue-500 z-10 shadow-lg relative">
                             <CheckCircle size={20} className="text-blue-600 dark:text-blue-400 mb-1" />
                             <span className="text-xs font-bold text-blue-800 dark:text-blue-200 text-center leading-none px-1">{t.stoic.control}</span>
                         </div>
                     </div>
                </div>

                <div className="space-y-2 flex-grow text-sm">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-1">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">{t.stoic.control}</span>
                        <span className="text-slate-500 text-sm">{t.stoic.c_list}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-1">
                        <span className="text-slate-400 font-bold">{t.stoic.uncontrol}</span>
                        <span className="text-slate-400 text-sm">{t.stoic.u_list}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic mt-2 bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        "{t.stoic.lib_desc}"
                    </p>
                </div>
            </Card>

            {/* Identity Shift */}
            <Card highlightColor="green" className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded text-green-600 dark:text-green-300">
                        <RefreshCw size={20} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.identity.title}</h4>
                </div>

                <div className="h-40 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 relative mb-4 flex items-center justify-center p-4">
                     <div className="grid grid-cols-2 gap-4 w-full h-full">
                         {/* Farmer */}
                         <div className="bg-green-100 dark:bg-green-900/20 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden group border border-green-200 dark:border-green-800/50">
                             <Sprout className="text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform" size={28} />
                             <span className="text-xs font-bold text-green-800 dark:text-green-200">{t.identity.farmer.t}</span>
                             <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
                         </div>
                         {/* Merchant */}
                         <div className="bg-amber-100 dark:bg-amber-900/20 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden group border border-amber-200 dark:border-amber-800/50">
                             <ShoppingCart className="text-amber-600 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform" size={28} />
                             <span className="text-xs font-bold text-amber-800 dark:text-amber-200">{t.identity.merchant.t}</span>
                             <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent pointer-events-none"></div>
                         </div>
                     </div>
                </div>

                <div className="space-y-3 flex-grow text-sm">
                    <div>
                        <div className="font-bold text-green-700 dark:text-green-400 flex items-center gap-1">
                            <Sprout size={14}/> {t.identity.farmer.new}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.identity.farmer.d}</p>
                    </div>
                    <div>
                        <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                            <RefreshCw size={14}/> Velocity of Capital
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.identity.merchant.d}</p>
                    </div>
                </div>
            </Card>
        </div>
    </div>
  );
};
