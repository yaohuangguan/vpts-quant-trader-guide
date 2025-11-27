import React from 'react';
import { Card } from './Card';
import { Sun, Moon, BookOpen, Bell, Shield, PenTool, Award, XCircle, CheckCircle, Smartphone, Monitor, Activity } from 'lucide-react';
import { Lang } from '../types';

export const DailyRoutine: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '顶级交易员的每日例行程序' : 'Top Trader\'s Daily Routine',
    pre: {
        title: lang === 'zh' ? '盘前 (Pre-Market)' : 'Pre-Market',
        step1: lang === 'zh' ? '生理调整' : 'Physio Prep',
        desc1: lang === 'zh' ? '4-7-8呼吸法 / 降低皮质醇' : '4-7-8 Breathing / Lower Cortisol',
        step2: lang === 'zh' ? '作战计划' : 'Battle Plan',
        desc2: lang === 'zh' ? 'If-Then 剧本 / 盘前决策' : 'If-Then Scripts / Decide Early',
        step3: lang === 'zh' ? '誓言宣读' : 'The Oath',
        desc3: lang === 'zh' ? '“执行力是利润的唯一来源”' : '"Execution is the Source of Profit"'
    },
    intra: {
        title: lang === 'zh' ? '盘中 (Intra-Market)' : 'Intra-Market',
        step1: lang === 'zh' ? '正念铃声' : 'Mindfulness Bell',
        desc1: lang === 'zh' ? '每小时 HALT 自检' : 'Hourly HALT Check',
        step2: lang === 'zh' ? '环境隔离' : 'Isolation',
        desc2: lang === 'zh' ? '物理切断干扰源' : 'Cut Distractions',
        step3: lang === 'zh' ? '分离操作' : 'Separation',
        desc3: lang === 'zh' ? '看盘与下单设备物理分离' : 'Separate Analysis & Entry'
    },
    post: {
        title: lang === 'zh' ? '盘后 (Post-Market)' : 'Post-Market',
        step1: lang === 'zh' ? '即时冷却' : 'Cool Down',
        desc1: lang === 'zh' ? '不看盈亏 / 离开屏幕' : 'No P&L Check / Leave Screen',
        step2: lang === 'zh' ? '双重打分' : 'Dual Scoring',
        desc2: lang === 'zh' ? '评分执行力 vs 运气' : 'Grade Execution vs Luck',
        step3: lang === 'zh' ? '闭环反馈' : 'Feedback Loop',
        desc3: lang === 'zh' ? '重塑多巴胺回路' : 'Rewire Dopamine'
    }
  };

  return (
    <Card highlightColor="blue" className="relative">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg text-blue-600 dark:text-blue-300">
             <Sun size={24} />
        </div>
        <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100">{t.title}</h4>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
        
        <div className="space-y-12">
            {/* Pre-Market */}
            <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="hidden md:flex flex-col items-center gap-1 z-10">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 border border-amber-200 dark:border-amber-700 flex items-center justify-center">
                        <Sun size={18} />
                    </div>
                </div>
                <div className="flex-1 bg-amber-50 dark:bg-amber-900/10 rounded-lg p-6 border border-amber-100 dark:border-amber-800/30">
                    <h5 className="font-bold text-amber-700 dark:text-amber-400 text-xl mb-4 uppercase tracking-wide border-b border-amber-200 dark:border-amber-800 pb-2">{t.pre.title}</h5>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-amber-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.pre.step1}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.pre.desc1}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-amber-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.pre.step2}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.pre.desc2}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-amber-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.pre.step3}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400 italic">{t.pre.desc3}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intra-Market */}
            <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="hidden md:flex flex-col items-center gap-1 z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 border border-blue-200 dark:border-blue-700 flex items-center justify-center">
                        <Activity size={18} className="animate-pulse"/>
                    </div>
                </div>
                <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 border border-blue-100 dark:border-blue-800/30">
                    <h5 className="font-bold text-blue-700 dark:text-blue-400 text-xl mb-4 uppercase tracking-wide border-b border-blue-200 dark:border-blue-800 pb-2">{t.intra.title}</h5>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-blue-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.intra.step1}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.intra.desc1}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-blue-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.intra.step2}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.intra.desc2}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-blue-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.intra.step3}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.intra.desc3}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post-Market */}
            <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="hidden md:flex flex-col items-center gap-1 z-10">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center">
                        <Moon size={18} />
                    </div>
                </div>
                <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-6 border border-indigo-100 dark:border-indigo-800/30">
                    <h5 className="font-bold text-indigo-700 dark:text-indigo-400 text-xl mb-4 uppercase tracking-wide border-b border-indigo-200 dark:border-indigo-800 pb-2">{t.post.title}</h5>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-indigo-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.post.step1}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.post.desc1}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-indigo-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.post.step2}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.post.desc2}</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded shadow-sm border border-indigo-100 dark:border-slate-700 flex items-center justify-between">
                             <div className="font-bold text-slate-800 dark:text-slate-100 text-2xl">{t.post.step3}</div>
                             <div className="text-lg font-medium text-slate-600 dark:text-slate-400">{t.post.desc3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Card>
  );
};

export const MindfulnessTools: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '盘中正念工具' : 'Intra-Market Mindfulness Tools',
        halt: {
            title: 'HALT Check',
            h: 'Hungry',
            a: 'Angry',
            l: 'Lonely',
            t: 'Tired',
            desc: lang === 'zh' ? '每小时自问：我现在处于哪种状态？' : 'Ask Hourly: Which state am I in?'
        },
        separation: {
            title: lang === 'zh' ? '物理分离 (摩擦力法则)' : 'Physical Separation (Friction)',
            analysis: lang === 'zh' ? '看盘 (分析)' : 'Analysis',
            exec: lang === 'zh' ? '下单 (执行)' : 'Execution',
            desc: lang === 'zh' ? '增加物理阻力，防止冲动交易' : 'Add friction to prevent impulse'
        }
    };

    return (
        <Card highlightColor="teal">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-1.5 rounded-lg text-teal-600 dark:text-teal-300">
                     <Bell size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* HALT Monitor */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-sm text-slate-700 dark:text-slate-300">{t.halt.title}</h5>
                        <div className="text-[10px] font-medium text-slate-500">{t.halt.desc}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-center border border-red-100 dark:border-red-900/30">
                            <span className="font-black text-red-400 text-lg">H</span>
                            <span className="block text-[10px] text-red-600 dark:text-red-300 font-bold">{t.halt.h}</span>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-center border border-red-100 dark:border-red-900/30">
                            <span className="font-black text-red-400 text-lg">A</span>
                             <span className="block text-[10px] text-red-600 dark:text-red-300 font-bold">{t.halt.a}</span>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-center border border-red-100 dark:border-red-900/30">
                            <span className="font-black text-red-400 text-lg">L</span>
                             <span className="block text-[10px] text-red-600 dark:text-red-300 font-bold">{t.halt.l}</span>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded text-center border border-red-100 dark:border-red-900/30">
                            <span className="font-black text-red-400 text-lg">T</span>
                             <span className="block text-[10px] text-red-600 dark:text-red-300 font-bold">{t.halt.t}</span>
                        </div>
                    </div>
                </div>

                {/* Separation */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-sm text-slate-700 dark:text-slate-300">{t.separation.title}</h5>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <Monitor size={32} className="text-blue-500" />
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{t.separation.analysis}</span>
                        </div>
                        
                        <div className="h-0.5 flex-1 bg-slate-300 dark:bg-slate-700 relative">
                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-1 border border-red-400 rounded-full">
                                 <Shield size={12} className="text-red-500" />
                             </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                             <Smartphone size={32} className="text-green-500" />
                             <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{t.separation.exec}</span>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-slate-500 mt-4 italic font-medium">
                        "{t.separation.desc}"
                    </p>
                </div>
            </div>
        </Card>
    );
};

export const ScoreCard: React.FC<{ lang: Lang }> = ({ lang }) => {
    const t = {
        title: lang === 'zh' ? '盘后双重打分' : 'Dual Scoring System',
        desc: lang === 'zh' ? '不仅记录盈亏，更要评价执行力。' : 'Score Execution, not just P&L.',
        perfectLoss: {
            title: lang === 'zh' ? '完美的亏损' : 'Perfect Loss',
            desc: lang === 'zh' ? '按计划止损' : 'Stop-loss executed',
            grade: 'A',
            color: 'green'
        },
        badProfit: {
            title: lang === 'zh' ? '糟糕的盈利' : 'Bad Profit',
            desc: lang === 'zh' ? '违规抗单获利' : 'Rule-break gain',
            grade: 'F',
            color: 'red'
        }
    };

    return (
        <Card highlightColor="purple">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-lg text-purple-600 dark:text-purple-300">
                     <BookOpen size={18} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.title}</h4>
            </div>
            
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">{t.desc}</p>

            <div className="grid grid-cols-2 gap-6">
                {/* Perfect Loss */}
                <div className="border-2 border-green-500/20 bg-green-50 dark:bg-green-900/10 rounded-xl p-4 flex flex-col items-center relative overflow-hidden group hover:border-green-500 transition-colors">
                    <div className="absolute top-2 right-2 text-green-500 opacity-20 group-hover:opacity-100 transition-opacity">
                        <CheckCircle size={24} />
                    </div>
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">{t.perfectLoss.title}</div>
                    <div className="text-5xl font-black text-green-500 mb-2">{t.perfectLoss.grade}</div>
                    <div className="text-[10px] text-green-700 dark:text-green-300 font-medium bg-green-200 dark:bg-green-900/50 px-2 py-1 rounded">
                        {t.perfectLoss.desc}
                    </div>
                </div>

                {/* Bad Profit */}
                <div className="border-2 border-red-500/20 bg-red-50 dark:bg-red-900/10 rounded-xl p-4 flex flex-col items-center relative overflow-hidden group hover:border-red-500 transition-colors">
                    <div className="absolute top-2 right-2 text-red-500 opacity-20 group-hover:opacity-100 transition-opacity">
                        <XCircle size={24} />
                    </div>
                    <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">{t.badProfit.title}</div>
                    <div className="text-5xl font-black text-red-500 mb-2">{t.badProfit.grade}</div>
                    <div className="text-[10px] text-red-700 dark:text-red-300 font-medium bg-red-200 dark:bg-red-900/50 px-2 py-1 rounded">
                        {t.badProfit.desc}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export const DisciplineSystem: React.FC<{ lang: Lang }> = ({ lang }) => {
    return (
        <div className="space-y-6">
            <DailyRoutine lang={lang} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MindfulnessTools lang={lang} />
                <ScoreCard lang={lang} />
            </div>
        </div>
    );
};