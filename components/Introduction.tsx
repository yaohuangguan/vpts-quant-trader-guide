import React from 'react';
import { Card } from './Card';
import { Brain, Compass, Zap, Scale, Gavel, Microscope, Heart, BookOpen } from 'lucide-react';
import { Lang } from '../types';

export const Introduction: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = {
    title: lang === 'zh' ? '导读：股市操盘的终极心法' : 'Preface: The Ultimate Art of Trading',
    desc: lang === 'zh' 
      ? '本指南并非简单的K线教程，而是一套融合了哲学辨证、趋势几何学、市场玄学、量能动力学、生物神经科学、市场心理学及行为金融学的全方位实战体系。' 
      : 'This guide is not a simple chart tutorial, but a comprehensive combat system integrating Philosophy, Trend Geometry, Metaphysics, Volume Dynamics, Neuroscience, Market Psychology, and Behavioral Finance.',
    target: lang === 'zh'
      ? '旨在重塑交易员的底层认知架构，涵盖技术分析（术）、资金管理（法）与心态控制（道）。无论你是初入市的新手，还是久经沙场的老手，这都是你战胜人性、制胜市场的必修课。此指南不仅只在A股有效，美股、港股也有效，因为其研究的是量价时空和人性的本质。股市是由情绪和流动性驱动的。'
      : 'Designed to reshape the trader\'s cognitive framework, covering Technical Analysis (Skill), Money Management (Method), and Mindset (Tao). Essential for mastering the market. This guide is effective not only for A-shares, but also for US and HK stocks, as it studies the essence of volume, price, time, space, and human nature. The stock market is driven by sentiment and liquidity.',
    modules: [
      { i: Compass, t: lang === 'zh' ? '趋势几何' : 'Geometry', d: lang === 'zh' ? '均线形态与时空结构' : 'MA Patterns & Space-Time' },
      { i: Zap, t: lang === 'zh' ? '量能动力' : 'Dynamics', d: lang === 'zh' ? '成交量与资金博弈' : 'Volume & Capital Flow' },
      { i: Microscope, t: lang === 'zh' ? '市场心理' : 'Market Psych', d: lang === 'zh' ? '筹码分布与群体博弈' : 'Chip Structure & Crowd Game' },
      { i: Brain, t: lang === 'zh' ? '神经科学' : 'Neuro', d: lang === 'zh' ? '多巴胺回路与决策' : 'Dopamine & Decision' },
      { i: Scale, t: lang === 'zh' ? '资金管理' : 'Capital', d: lang === 'zh' ? '凯利公式与风控' : 'Kelly & Risk Control' },
      { i: Heart, t: lang === 'zh' ? '心态哲学' : 'Philosophy', d: lang === 'zh' ? '混沌秩序与道心' : 'Chaos Order & Tao' },
      { i: Gavel, t: lang === 'zh' ? '铁血纪律' : 'Discipline', d: lang === 'zh' ? '知行合一的执行力' : 'Execution & Routine' },
      { i: BookOpen, t: lang === 'zh' ? '玄学智慧' : 'Metaphysics', d: lang === 'zh' ? '自然法则与周期' : 'Natural Laws & Cycles' },
    ]
  };

  return (
    <Card highlightColor="indigo" className="relative overflow-hidden mb-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">{t.title}</h2>
        <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
          {t.desc}
        </p>
        <div className="w-16 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto italic">
          "{t.target}"
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.modules.map((m, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mb-2 group-hover:scale-110 transition-transform">
                <m.i size={20} />
              </div>
              <div className="font-bold text-slate-800 dark:text-slate-200">{m.t}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{m.d}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};