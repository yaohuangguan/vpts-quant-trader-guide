import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card';
import { Lang } from '../types';
import { CheckCircle2, XCircle, Trophy, RefreshCw, AlertCircle, Brain, Target, Shield, BookOpen, RotateCcw, Medal, Star, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  type: 'concept' | 'pattern' | 'indicator' | 'psychology' | 'strategy';
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

// Simple Fireworks Canvas Component
const Fireworks: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles: Particle[] = [];
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

        class Particle {
            x: number;
            y: number;
            color: string;
            velocity: { x: number, y: number };
            alpha: number;
            size: number;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                this.color = color;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5 + 2;
                this.velocity = {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                };
                this.alpha = 1;
                this.size = Math.random() * 3 + 1;
            }

            draw() {
                if(!ctx) return;
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.restore();
            }

            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.velocity.y += 0.05; // gravity
                this.velocity.x *= 0.98; // friction
                this.velocity.y *= 0.98; 
                this.alpha -= 0.01;
            }
        }

        const createFirework = (x: number, y: number) => {
             const color = colors[Math.floor(Math.random() * colors.length)];
             for(let i=0; i<30; i++) {
                 particles.push(new Particle(x, y, color));
             }
        };

        const animate = () => {
             requestAnimationFrame(animate);
             if(!ctx) return;
             ctx.fillStyle = 'rgba(0,0,0,0.1)';
             ctx.fillRect(0, 0, canvas.width, canvas.height);
             
             particles.forEach((p, i) => {
                 if(p.alpha > 0) {
                     p.update();
                     p.draw();
                 } else {
                     particles.splice(i, 1);
                 }
             });

             if(Math.random() < 0.05) {
                 createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5);
             }
        };

        animate();

        const handleResize = () => {
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
    );
};


// --- Question Bank Set 1 (Basic/Core) ---
const getSet1 = (lang: Lang): Question[] => [
    {
      id: 1, type: 'concept',
      q: lang === 'zh' ? '五线开花的核心本质是什么？' : 'What is the core essence of Five-Line Blossom?',
      options: [
        lang === 'zh' ? '一种预测股价涨跌的神奇算法' : 'A magic algorithm to predict prices',
        lang === 'zh' ? '基于均线交叉的短线投机技巧' : 'Short-term speculation based on MA crossover',
        lang === 'zh' ? '市场持仓成本趋同（低熵）导致的能量爆发' : 'Energy burst caused by cost convergence (Low Entropy)',
        lang === 'zh' ? '一种利用内幕消息的跟庄手段' : 'Following insider information'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '均线粘合代表市场各周期持仓成本一致，方差趋于0，是变盘的前兆。' : 'MA adhesion means cost consensus across cycles, variance nears 0.'
    },
    {
      id: 2, type: 'pattern',
      q: lang === 'zh' ? '在“金蟾蜍”形态中，最佳买点通常出现在？' : 'In "Golden Toad", best entry is?',
      options: [
        lang === 'zh' ? '左眼形成时' : 'Left Eye formation',
        lang === 'zh' ? '两眼中间的回调低点' : 'Dip between eyes',
        lang === 'zh' ? '右眼放量突破时' : 'Right Eye volume breakout',
        lang === 'zh' ? '跌破60日线时' : 'Breaking below MA60'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '右眼突破确认了主力洗盘结束和再次拉升的意图。' : 'Right eye breakout confirms washout completion and relaunch.'
    },
    {
      id: 3, type: 'indicator',
      q: lang === 'zh' ? '当KDJ指标的J值长期维持在100附近（钝化），意味着？' : 'When KDJ J-value stays near 100 (Passivation), it means?',
      options: [
        lang === 'zh' ? '严重超买，必须立即卖出' : 'Overbought, must sell',
        lang === 'zh' ? '指标失效，无法参考' : 'Indicator broken',
        lang === 'zh' ? '极强多头趋势，应当持有' : 'Extreme bull trend, HOLD',
        lang === 'zh' ? '即将发生暴跌' : 'Crash imminent'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '高位钝化是强势特征，只有当J值有效跌破80时才考虑止盈。' : 'High passivation indicates strength. Exit only when J drops below 80.'
    },
    {
      id: 4, type: 'psychology',
      q: lang === 'zh' ? 'FOMO（错失恐惧症）的生理根源主要与大脑哪个部位有关？' : 'FOMO is rooted in which brain part?',
      options: [
        lang === 'zh' ? '前额叶皮层 (PFC)' : 'Prefrontal Cortex',
        lang === 'zh' ? '边缘系统 (Limbic System)' : 'Limbic System',
        lang === 'zh' ? '小脑' : 'Cerebellum',
        lang === 'zh' ? '脑干' : 'Brainstem'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '边缘系统负责本能和情绪，将“错过机会”识别为“生存威胁”。' : 'Limbic system treats "missed opportunity" as a survival threat.'
    },
    {
      id: 5, type: 'strategy',
      q: lang === 'zh' ? '金字塔建仓法的推荐比例通常是？' : 'Recommended ratio for Pyramid Entry?',
      options: [
        lang === 'zh' ? '5-3-2 (底仓重)' : '5-3-2 (Heavy Base)',
        lang === 'zh' ? '2-3-5 (倒金字塔)' : '2-3-5 (Inverted)',
        lang === 'zh' ? '2-3-2 (试错-加仓-确认)' : '2-3-2 (Test-Add-Confirm)',
        lang === 'zh' ? '3-3-4 (均分)' : '3-3-4 (Even)'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '20%底仓试错，30%突破加仓，20%回踩确认，保留30%机动。' : '20% test, 30% breakout, 20% confirm, 30% reserve.'
    },
    {
      id: 6, type: 'pattern',
      q: lang === 'zh' ? '“断头铡刀”形态的主要特征是？' : 'Key feature of "Guillotine" pattern?',
      options: [
        lang === 'zh' ? '一根大阳线穿过多条均线' : 'Big Yang crosses MAs',
        lang === 'zh' ? '一根大阴线同时切断多条均线' : 'Big Yin cuts multiple MAs',
        lang === 'zh' ? '均线多头排列' : 'Bullish MA alignment',
        lang === 'zh' ? '成交量极度萎缩' : 'Extreme low volume'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '高位放量阴线切断均线，意味着多头趋势的毁灭性破坏。' : 'High volume Yin cutting MAs signals destruction of bull trend.'
    },
    {
      id: 7, type: 'concept',
      q: lang === 'zh' ? 'MA60（决策线）的主要战术意义是？' : 'Tactical role of MA60 (Decision Line)?',
      options: [
        lang === 'zh' ? '短线进出的依据' : 'Short-term entry/exit',
        lang === 'zh' ? '机构操盘的中期生命线' : 'Institutional Mid-term Lifeline',
        lang === 'zh' ? '牛熊分界线' : 'Bull/Bear Divider',
        lang === 'zh' ? '没有任何意义' : 'Meaningless'
      ],
      correct: 1,
      explanation: lang === 'zh' ? 'MA60是中线机构的成本防守线，一旦有效跌破往往意味着波段结束。' : 'MA60 is the cost defense line for institutions.'
    },
    {
      id: 8, type: 'indicator',
      q: lang === 'zh' ? 'MACD“将死不死”形态预示着？' : 'MACD "Refusing to Die" signals?',
      options: [
        lang === 'zh' ? '行情结束' : 'Trend Over',
        lang === 'zh' ? '极强的空中加油起涨信号' : 'Strong "Air Refueling" Launch',
        lang === 'zh' ? '震荡行情' : 'Choppy Market',
        lang === 'zh' ? '底部背离' : 'Bottom Divergence'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '快线DIF欲下穿DEA但未穿过即掉头向上，表明多头极度强势。' : 'DIF turns up before crossing DEA, showing extreme bullish strength.'
    },
    {
      id: 9, type: 'psychology',
      q: lang === 'zh' ? '前景理论（Prospect Theory）指出，亏损的痛苦是盈利快乐的？' : 'Prospect Theory: Pain of loss is _x Joy of gain?',
      options: [
        lang === 'zh' ? '1倍' : '1x',
        lang === 'zh' ? '2.5倍' : '2.5x',
        lang === 'zh' ? '0.5倍' : '0.5x',
        lang === 'zh' ? '10倍' : '10x'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '这是“损失厌恶”的量化表达，解释了为什么散户拿不住盈利单。' : 'Quantifies "Loss Aversion", explaining why retail sells winners early.'
    },
    {
      id: 10, type: 'concept',
      q: lang === 'zh' ? '“地量法则”中，突破前的成交量特征通常是？' : 'In "Land Volume Rule", volume before breakout is?',
      options: [
        lang === 'zh' ? '极度放大' : 'Extremely High',
        lang === 'zh' ? '忽大忽小' : 'Volatile',
        lang === 'zh' ? '极度萎缩（芝麻量）' : 'Extreme Shrinkage (Sesame)',
        lang === 'zh' ? '维持平均水平' : 'Average'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '无量不成结。缩量代表抛压枯竭，是主力控盘度极高的表现。' : 'No vol, no knot. Shrinkage means selling exhaustion.'
    },
    {
      id: 11, type: 'strategy',
      q: lang === 'zh' ? '硬性止损的“时间止损”通常设定为？' : '"Time Stop" is usually set to?',
      options: [
        lang === 'zh' ? '1-2天' : '1-2 Days',
        lang === 'zh' ? '7-10天未脱离成本区' : '7-10 Days Stagnant',
        lang === 'zh' ? '一个月' : '1 Month',
        lang === 'zh' ? '不设时间限制' : 'No Limit'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '买入后长期不涨说明逻辑证伪或资金意愿不强，应离场机会成本。' : 'Stagnation means thesis failure or low interest. Exit for opportunity cost.'
    },
    {
      id: 12, type: 'concept',
      q: lang === 'zh' ? '筹码分布中，Phase B（锁仓拉升）的特征是？' : 'Feature of Chip Phase B (Locked Ascent)?',
      options: [
        lang === 'zh' ? '底部获利筹码迅速消失' : 'Bottom chips vanish',
        lang === 'zh' ? '顶部出现大量套牢盘' : 'Top trapped chips appear',
        lang === 'zh' ? '底部获利筹码纹丝不动' : 'Bottom chips stay still',
        lang === 'zh' ? '筹码呈双峰分布' : 'Dual peak distribution'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '主力在拉升过程中不卖出，底部红色筹码锁定，表明志在长远。' : 'MM holds during ascent, bottom red chips locked, aiming higher.'
    },
    {
      id: 13, type: 'psychology',
      q: lang === 'zh' ? '遭遇“报复性交易”冲动时的最佳阻断方案是？' : 'Best block for "Revenge Trading"?',
      options: [
        lang === 'zh' ? '立即加倍仓位试图回本' : 'Double down immediately',
        lang === 'zh' ? '物理离开屏幕，24小时禁闭' : 'Leave screen, 24h lockout',
        lang === 'zh' ? '换一个股票交易' : 'Switch stock',
        lang === 'zh' ? '盯着分时图寻找反转' : 'Stare at tick chart'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '上头状态下智商下降，必须物理隔离切断多巴胺回路。' : 'IQ drops when tilted. Must physically sever dopamine loop.'
    },
    {
      id: 14, type: 'concept',
      q: lang === 'zh' ? '“屠龙刀”形态是指哪个周期的共振？' : '"Dragon Saber" pattern refers to resonance of?',
      options: [
        lang === 'zh' ? '日线级别' : 'Daily',
        lang === 'zh' ? '周线级别 (MA30/60走平)' : 'Weekly (MA30/60 flat)',
        lang === 'zh' ? '月线级别' : 'Monthly',
        lang === 'zh' ? '分钟级别' : 'Minute'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '周线级别的均线粘合与金叉，往往预示着中期大行情。' : 'Weekly adhesion/cross often signals major mid-term trend.'
    },
    {
      id: 15, type: 'pattern',
      q: lang === 'zh' ? '“空中加油”形态的关键是回踩哪条均线不破？' : 'Key to "Air Refueling" is holding which MA?',
      options: [
        lang === 'zh' ? 'MA5' : 'MA5',
        lang === 'zh' ? 'MA10' : 'MA10',
        lang === 'zh' ? 'MA20' : 'MA20',
        lang === 'zh' ? 'MA60 (决策线)' : 'MA60'
      ],
      correct: 3,
      explanation: lang === 'zh' ? '急跌缩量回踩MA60不破，随后放量拉起，是典型的趋势中继。' : 'Shrink-vol dip to MA60 holding, then surge, is typical relay.'
    },
    {
      id: 16, type: 'strategy',
      q: lang === 'zh' ? '移动止盈策略中，对于强势股通常参考哪条线？' : 'Trailing stop for strong stocks usually tracks?',
      options: [
        lang === 'zh' ? '5日线' : 'MA5',
        lang === 'zh' ? '20日线' : 'MA20',
        lang === 'zh' ? '60日线' : 'MA60',
        lang === 'zh' ? '120日线' : 'MA120'
      ],
      correct: 0,
      explanation: lang === 'zh' ? '极强势股（主升浪）不应有效跌破MA5，跌破即减仓。' : 'Super strong stocks shouldn\'t break MA5. Break = Reduce.'
    },
    {
      id: 17, type: 'psychology',
      q: lang === 'zh' ? '“沉没成本谬误”会导致交易者？' : '"Sunk Cost Fallacy" causes traders to?',
      options: [
        lang === 'zh' ? '及时止损' : 'Stop loss early',
        lang === 'zh' ? '死扛亏损单甚至加仓摊平' : 'Hold losers / Average down',
        lang === 'zh' ? '理性分析' : 'Analyze rationally',
        lang === 'zh' ? '获利了结' : 'Take profit'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '因为不愿承认之前的投入（亏损）是浪费，从而投入更多资金去“挽救”。' : 'Refusing to admit loss was waste, putting more money to "save" it.'
    },
    {
      id: 18, type: 'indicator',
      q: lang === 'zh' ? '布林线（BOLL）“张口”通常发生在？' : 'BOLL "Expansion" usually happens during?',
      options: [
        lang === 'zh' ? '盘整期' : 'Consolidation',
        lang === 'zh' ? '下跌中继' : 'Downtrend Relay',
        lang === 'zh' ? '均线粘合后的爆发期' : 'Burst after Adhesion',
        lang === 'zh' ? '抄底时' : 'Bottom fishing'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '随着价格剧烈波动，布林线上轨和下轨迅速张开，确认趋势爆发。' : 'Price volatility forces bands open, confirming burst.'
    },
    {
      id: 19, type: 'concept',
      q: lang === 'zh' ? '概率思维的核心真理之一是？' : 'A core truth of Probabilistic Thinking?',
      options: [
        lang === 'zh' ? '我必须知道下一刻会发生什么才能赚钱' : 'Must know what happens next to win',
        lang === 'zh' ? '任何事情都可能发生' : 'Anything can happen',
        lang === 'zh' ? '这笔交易注定会赢' : 'This trade is destined to win',
        lang === 'zh' ? '市场总是错的' : 'Market is always wrong'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '接受不确定性，放弃预测，专注于执行高概率的系统。' : 'Accept uncertainty, stop predicting, focus on system execution.'
    },
    {
      id: 20, type: 'concept',
      q: lang === 'zh' ? '根据“马太效应”，均线开花后为何会加速？' : 'Per "Matthew Effect", why does blossom accelerate?',
      options: [
        lang === 'zh' ? '因为散户在卖出' : 'Retail selling',
        lang === 'zh' ? '因为基本面突然变好了' : 'Fundamentals improved',
        lang === 'zh' ? '自我实现预言引发多路资金接力（量化、媒体、跟风）' : 'Self-fulfilling prophecy triggers relay (Algo, Media, Followers)',
        lang === 'zh' ? '巧合而已' : 'Coincidence'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '趋势一旦确立，会吸引各路资金正向反馈，强化趋势，直到熵值极大。' : 'Trend attracts positive feedback loops, reinforcing it until entropy peaks.'
    }
];

// --- Question Bank Set 2 (Advanced/Tactical) ---
const getSet2 = (lang: Lang): Question[] => [
    {
        id: 21, type: 'pattern',
        q: lang === 'zh' ? '“老鸭头”形态中，鸭鼻孔处对应的量能特征必须是？' : 'In "Duck Head" pattern, volume at the "Nostril" must be?',
        options: [
          lang === 'zh' ? '天量' : 'Sky High Volume',
          lang === 'zh' ? '地量 (极度萎缩)' : 'Extreme Low Volume',
          lang === 'zh' ? '温和放量' : 'Moderate Volume',
          lang === 'zh' ? '不确定' : 'Uncertain'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '鸭鼻孔处为洗盘阶段，主力控盘的表现是缩量回踩，越缩越好。' : 'Nostril is washout. Shrinking volume confirms MM control.'
    },
    {
        id: 22, type: 'indicator',
        q: lang === 'zh' ? '在使用MACD判断顶背离时，最有效的信号是？' : 'Most effective signal for MACD Top Divergence?',
        options: [
            lang === 'zh' ? '红柱面积一次比一次小，股价创新高' : 'Red bar area shrinks while price hits new high',
            lang === 'zh' ? '红柱面积变大，股价创新高' : 'Red bar area grows with price',
            lang === 'zh' ? '快慢线在0轴下方金叉' : 'DIF/DEA cross below 0',
            lang === 'zh' ? '绿柱消失' : 'Green bars vanish'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '量价背离是动能衰竭的铁证。股价新高但MACD红柱（动能）萎缩。' : 'Price makes new high but momentum (red bars) shrinks. Reliable exit signal.'
    },
    {
        id: 23, type: 'strategy',
        q: lang === 'zh' ? '“一阳穿三线”后，如果次日出现缩量小阴线回踩，应该？' : 'After "One Yang Crosses Three", next day is small shrinkage Yin. You should?',
        options: [
            lang === 'zh' ? '立即止损卖出' : 'Sell immediately',
            lang === 'zh' ? '视作洗盘，在回踩5日线时加仓' : 'Treat as washout, add at MA5',
            lang === 'zh' ? '全仓追涨' : 'All-in buy',
            lang === 'zh' ? '清仓观望' : 'Clear position'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '缩量回踩不破启动阳线实体一半，是确认支撑，为绝佳买点（2-3-2法则中的加仓点）。' : 'Shrinkage retracement verifying support is a classic add point.'
    },
    {
        id: 24, type: 'psychology',
        q: lang === 'zh' ? '当连续亏损导致“习得性无助”时，交易者通常会表现出？' : 'After streak losses cause "Learned Helplessness", traders tend to?',
        options: [
            lang === 'zh' ? '疯狂交易' : 'Trade crazily',
            lang === 'zh' ? '看到完美信号也不敢下单' : 'Freeze even at perfect signals',
            lang === 'zh' ? '自信满满' : 'Overconfident',
            lang === 'zh' ? '立即充值' : 'Deposit more'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '习得性无助会让大脑认为“无论做什么都是错的”，从而丧失执行力。' : 'Brain believes "anything I do is wrong", losing execution ability.'
    },
    {
        id: 25, type: 'concept',
        q: lang === 'zh' ? '在筹码理论中，什么是“真空区”？' : 'In Chip Theory, what is a "Vacuum Zone"?',
        options: [
            lang === 'zh' ? '没有成交量的区域' : 'No volume zone',
            lang === 'zh' ? '两个筹码峰之间的无筹码地带' : 'Gap between two chip peaks',
            lang === 'zh' ? '跌停板区域' : 'Limit down zone',
            lang === 'zh' ? '高换手区域' : 'High turnover zone'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '真空区没有套牢盘阻力，股价穿越该区域时阻力最小，速度最快。' : 'No trapped chips in vacuum, so price moves through it with least resistance.'
    },
    {
        id: 26, type: 'pattern',
        q: lang === 'zh' ? '“回头望月”形态通常发生在什么趋势中？' : '"Looking Back" pattern occurs in which trend?',
        options: [
            lang === 'zh' ? '下跌趋势初期' : 'Early downtrend',
            lang === 'zh' ? '上升趋势中途的洗盘' : 'Washout during uptrend',
            lang === 'zh' ? '熊市末期' : 'Late bear market',
            lang === 'zh' ? '横盘震荡' : 'Sideways'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '它是上升中继形态。急跌回踩后迅速拉起，MA5/10保持向上。' : 'Trend relay pattern. Sharp dip then surge, MAs stay up.'
    },
    {
        id: 27, type: 'indicator',
        q: lang === 'zh' ? 'RSI指标突破50中轴线，通常被视为？' : 'RSI breaking above 50 axis is seen as?',
        options: [
            lang === 'zh' ? '进入多头疆域' : 'Entering Bull Territory',
            lang === 'zh' ? '超买信号' : 'Overbought',
            lang === 'zh' ? '超卖信号' : 'Oversold',
            lang === 'zh' ? '背离信号' : 'Divergence'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '50是RSI的多空分水岭。站稳50上方说明多方力量占优。' : '50 is the bull/bear divider. Above 50 means bulls dominate.'
    },
    {
        id: 28, type: 'concept',
        q: lang === 'zh' ? '为什么说“五线粘合”是熵值最低的状态？' : 'Why is "MA Adhesion" the lowest entropy state?',
        options: [
            lang === 'zh' ? '因为交易量最大' : 'Max volume',
            lang === 'zh' ? '因为市场意见最分歧' : 'Max divergence',
            lang === 'zh' ? '因为所有周期的成本和预期趋于一致，系统最有序' : 'Cost/Expectation consensus, max order',
            lang === 'zh' ? '因为没有波动' : 'No volatility'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '有序度最高（熵最低），意味着能量被极致压缩，即将爆发。' : 'Max order (min entropy) means energy compressed, ready to burst.'
    },
    {
        id: 29, type: 'strategy',
        q: lang === 'zh' ? '量化选股时，“90%筹码集中度 < 10%”说明什么？' : 'In screening, "90% Chip Conc < 10%" means?',
        options: [
            lang === 'zh' ? '筹码非常分散，散户多' : 'Chips scattered, many retail',
            lang === 'zh' ? '筹码高度集中，主力控盘' : 'Highly concentrated, MM controlled',
            lang === 'zh' ? '股票流动性好' : 'High liquidity',
            lang === 'zh' ? '即将退市' : 'Delisting'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '集中度数值越小，说明筹码分布越密集，主力收集越充分。' : 'Lower concentration % means tighter chip distribution (Better MM control).'
    },
    {
        id: 30, type: 'psychology',
        q: lang === 'zh' ? '“赌徒谬误”在交易中的典型表现是？' : '"Gambler\'s Fallacy" in trading is?',
        options: [
            lang === 'zh' ? '连亏多次后认为下一把“必赢”' : 'Lost many times, next MUST win',
            lang === 'zh' ? '坚持止损' : 'Sticking to stop loss',
            lang === 'zh' ? '顺势而为' : 'Trend following',
            lang === 'zh' ? '不预测行情' : 'Not predicting'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '市场没有记忆。每一次交易都是独立的概率事件。' : 'Market has no memory. Every trade is independent.'
    },
    {
        id: 31, type: 'pattern',
        q: lang === 'zh' ? '“金蜘蛛”形态的三条均线通常是？' : 'Which 3 MAs form the "Golden Spider"?',
        options: [
            lang === 'zh' ? 'MA5, MA10, MA20' : 'MA5, MA10, MA20',
            lang === 'zh' ? 'MA30, MA60, MA90' : 'MA30, MA60, MA90',
            lang === 'zh' ? 'MA120, MA250, MA500' : 'MA120, MA250, MA500',
            lang === 'zh' ? '任意三条' : 'Any three'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '短期均线MA5/10/20在极小区间内同时金叉，形成强烈的向上共振。' : 'Short MAs 5/10/20 cross at one point, creating strong resonance.'
    },
    {
        id: 32, type: 'concept',
        q: lang === 'zh' ? '斐波那契数列在均线系统中常用的参数是？' : 'Common Fibonacci MA parameters?',
        options: [
            lang === 'zh' ? '5, 10, 20, 30' : '5, 10, 20, 30',
            lang === 'zh' ? '13, 21, 34, 55' : '13, 21, 34, 55',
            lang === 'zh' ? '6, 12, 18, 24' : '6, 12, 18, 24',
            lang === 'zh' ? '50, 100, 200' : '50, 100, 200'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '13, 21, 34, 55, 89 是符合自然生长法则的参数，常用于捕捉主力防守位。' : '13, 21, 34, 55 align with natural laws, often identifying hidden support.'
    },
    {
        id: 33, type: 'strategy',
        q: lang === 'zh' ? '盘前“If-Then”剧本的作用是？' : 'Purpose of pre-market "If-Then" scripts?',
        options: [
            lang === 'zh' ? '预测股价精确点位' : 'Predict exact price',
            lang === 'zh' ? '节省看盘时间' : 'Save time',
            lang === 'zh' ? '减少盘中情绪化决策，预设应对方案' : 'Reduce emotional decisions, preset reactions',
            lang === 'zh' ? '向别人炫耀' : 'Show off'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '提前规划“如果高开怎么办，如果低走怎么办”，将决策前置，执行时只需机械操作。' : 'Pre-planning removes emotion. "If X happens, I do Y".'
    },
    {
        id: 34, type: 'indicator',
        q: lang === 'zh' ? '布林线带宽（Bandwidth）达到历史极低值时，预示着？' : 'BOLL Bandwidth at historical low signals?',
        options: [
            lang === 'zh' ? '市场已死' : 'Market dead',
            lang === 'zh' ? '变盘在即（暴涨或暴跌）' : 'Big move imminent (Up or Down)',
            lang === 'zh' ? '继续横盘' : 'More sideways',
            lang === 'zh' ? '适合高抛低吸' : 'Good for swing'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '极致的收敛必然带来极致的发散。这是波动率循环的必然规律。' : 'Extreme squeeze leads to extreme expansion. Volatility cycle.'
    },
    {
        id: 35, type: 'pattern',
        q: lang === 'zh' ? '“美人肩”形态本质上是一种什么行为？' : 'Essence of "Shoulder" pattern?',
        options: [
            lang === 'zh' ? '主力出货' : 'Distribution',
            lang === 'zh' ? '强势洗盘（拒绝回调）' : 'Strong Wash (Refusing to dip)',
            lang === 'zh' ? '底部反转' : 'Bottom reversal',
            lang === 'zh' ? '顶部反转' : 'Top reversal'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '股价在上升途中高位强势震荡，不愿深跌，均线粘合后再次向上，如美人的肩膀。' : 'Price consolidates high, refusing to drop deep, MAs bond then surge.'
    },
    {
        id: 36, type: 'strategy',
        q: lang === 'zh' ? 'HALT自检中的“H”代表？' : '"H" in HALT check means?',
        options: [
            lang === 'zh' ? 'Happy (快乐)' : 'Happy',
            lang === 'zh' ? 'Hungry (饥饿)' : 'Hungry',
            lang === 'zh' ? 'High (兴奋)' : 'High',
            lang === 'zh' ? 'Hesitant (犹豫)' : 'Hesitant'
        ],
        correct: 1,
        explanation: lang === 'zh' ? 'Hungry（饥饿）、Angry（愤怒）、Lonely（孤独）、Tired（疲惫）都会严重削弱意志力。' : 'Hungry, Angry, Lonely, Tired compromise willpower.'
    },
    {
        id: 37, type: 'concept',
        q: lang === 'zh' ? '“成本共振”是指？' : '"Cost Resonance" means?',
        options: [
            lang === 'zh' ? '散户亏损一致' : 'Retail loss same',
            lang === 'zh' ? '庄家成本最低' : 'MM cost lowest',
            lang === 'zh' ? '短、中、长期持仓者的成本趋于同一个价位' : 'Short/Mid/Long term costs converge to one price',
            lang === 'zh' ? '交易手续费' : 'Trading fees'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '当所有人的成本都一样时，获利盘和套牢盘都消失了，阻力最小。' : 'When everyone\'s cost is same, no profit/trapped chips. Least resistance.'
    },
    {
        id: 38, type: 'psychology',
        q: lang === 'zh' ? '为什么“冷水洗脸”能阻断报复性交易？' : 'Why "Cold Water Face" stops revenge trading?',
        options: [
            lang === 'zh' ? '让人清醒' : 'Wakes you up',
            lang === 'zh' ? '触发“潜水反射”，强制降低心率，激活副交感神经' : 'Triggers "Diving Reflex", lowers heart rate, activates parasympathetic',
            lang === 'zh' ? '洗掉晦气' : 'Washes bad luck',
            lang === 'zh' ? '惩罚自己' : 'Self punishment'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '这是生物学层面的强制重启（Hard Reset），能生理性地平复激动情绪。' : 'Biological hard reset. Physiologically calms down emotion.'
    },
    {
        id: 39, type: 'concept',
        q: lang === 'zh' ? 'MA250（年线）走平意味着？' : 'MA250 (Year Line) flattening means?',
        options: [
            lang === 'zh' ? '牛市结束' : 'Bull market over',
            lang === 'zh' ? '长期熊市可能结束，大底构筑中' : 'Long bear market ending, major bottom forming',
            lang === 'zh' ? '没什么含义' : 'Meaningless',
            lang === 'zh' ? '短期波动剧烈' : 'High short-term vol'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '年线代表长期趋势。由跌转平，说明长线空头力量耗尽，战略建仓期到来。' : 'Long term trend shifting. Bear exhausted, strategic entry time.'
    },
    {
        id: 40, type: 'strategy',
        q: lang === 'zh' ? '对于“假突破”的防范，最好的办法是？' : 'Best defense against "Fake Breakout"?',
        options: [
            lang === 'zh' ? '不仅看价格，更要看成交量配合（量能倍增）和收盘确认' : 'Check Volume (Double) and Close Price confirmation',
            lang === 'zh' ? '只买最低价' : 'Buy only at low',
            lang === 'zh' ? '听消息' : 'Listen to news',
            lang === 'zh' ? '不设止损' : 'No stop loss'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '真突破必须伴随真金白银的放量（换手）以及收盘站稳。无量突破多为诱多。' : 'Real breakout needs real volume and solid close. Volume-less is trap.'
    }
];

// --- Question Bank Set 3 (Mastery/Philosophy) ---
const getSet3 = (lang: Lang): Question[] => [
    {
        id: 41, type: 'concept',
        q: lang === 'zh' ? '“五线开花”模型中，能量守恒定律体现在？' : 'Where is Energy Conservation in "Blossom" model?',
        options: [
            lang === 'zh' ? '赚钱的人等于亏钱的人' : 'Winners = Losers',
            lang === 'zh' ? '长时间的横盘震荡（势能积累）转化为短时间的剧烈拉升（动能释放）' : 'Long consolidation (Potential) converts to sharp rise (Kinetic)',
            lang === 'zh' ? '成交量守恒' : 'Volume conservation',
            lang === 'zh' ? '资金守恒' : 'Money conservation'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '横有多长，竖有多高。粘合时间越久，积蓄的能量越大，爆发力越强。' : 'Longer the flat base, higher the rise. Adhesion stores energy.'
    },
    {
        id: 42, type: 'psychology',
        q: lang === 'zh' ? '多巴胺（Dopamine）在交易中的作用机制是？' : 'Role of Dopamine in trading?',
        options: [
            lang === 'zh' ? '产生快乐' : 'Creates pleasure',
            lang === 'zh' ? '产生“想要”的渴望（动机），而非“喜欢”的快乐' : 'Creates "Craving/Wanting" (Motivation), not "Liking"',
            lang === 'zh' ? '产生恐惧' : 'Creates fear',
            lang === 'zh' ? '产生困意' : 'Creates sleepiness'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '多巴胺驱动我们去追逐随机奖励（如赌博），它是上瘾的元凶。' : 'Dopamine drives us to chase random rewards. It causes addiction.'
    },
    {
        id: 43, type: 'strategy',
        q: lang === 'zh' ? '什么是“阿尔法选股器”中的核心过滤条件？' : 'Core filter in "Alpha Screener"?',
        options: [
            lang === 'zh' ? '市盈率 < 10' : 'PE < 10',
            lang === 'zh' ? '均线多头排列 + 筹码集中 + 倍量突破' : 'Bullish MAs + Chip Conc + Double Vol Breakout',
            lang === 'zh' ? '价格最低' : 'Lowest price',
            lang === 'zh' ? '分红最高' : 'Highest dividend'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '这是技术面选股的“三位一体”：趋势（均线）、主力（筹码）、资金（量能）。' : 'The Trinity: Trend (MA), MM (Chips), Money (Volume).'
    },
    {
        id: 44, type: 'pattern',
        q: lang === 'zh' ? '在“海底捞月”形态中，MA250扮演什么角色？' : 'Role of MA250 in "Moon Salvage"?',
        options: [
            lang === 'zh' ? '压力线' : 'Resistance',
            lang === 'zh' ? '被短期均线金叉穿越的长期趋势基准' : 'Long-term benchmark crossed by short MAs',
            lang === 'zh' ? '止损线' : 'Stop loss',
            lang === 'zh' ? '无关紧要' : 'Irrelevant'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '短期均线组强势上穿走平的年线，标志着大级别反转的开始。' : 'Short MAs crossing flat Year Line signals major reversal.'
    },
    {
        id: 45, type: 'indicator',
        q: lang === 'zh' ? '关于KD指标的“月线金叉”，正确的是？' : 'About KD "Monthly Cross"?',
        options: [
            lang === 'zh' ? '滞后太严重，没用' : 'Too lagging, useless',
            lang === 'zh' ? '大级别行情的极佳确认信号' : 'Excellent confirmation for major trend',
            lang === 'zh' ? '只适合短线' : 'Only for short term',
            lang === 'zh' ? '不仅看金叉，还要看死叉' : 'Check death cross too'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '月线级别的信号非常稳定。月线KD低位金叉往往对应倍数级的大行情。' : 'Monthly signals are stable. Low KD monthly cross = huge trend.'
    },
    {
        id: 46, type: 'strategy',
        q: lang === 'zh' ? '如果你因遵守纪律而止损，但随后股价反弹了，你应该？' : 'You cut loss by discipline, but price rebounded. You should?',
        options: [
            lang === 'zh' ? '后悔不已，发誓下次不止损' : 'Regret, swear no stop-loss next time',
            lang === 'zh' ? '给自己打满分（执行力），因为长期看这是正确的' : 'Give yourself an "A" (Execution). Correct in long run.',
            lang === 'zh' ? '立即追高买回' : 'Chase buy immediately',
            lang === 'zh' ? '痛骂庄家' : 'Curse the MM'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '结果不重要，过程（执行系统）才重要。错误的盈利是毒药，正确的亏损是学费。' : 'Process > Result. Bad profit is poison; Good loss is tuition.'
    },
    {
        id: 47, type: 'concept',
        q: lang === 'zh' ? '为什么“均线粘合”会被量化算法（Algo）针对？' : 'Why Algos target "MA Adhesion"?',
        options: [
            lang === 'zh' ? '因为算法看不懂' : 'Algos can\'t see it',
            lang === 'zh' ? '因为这是散户共识，算法会刻意制造假跌破（挖坑）来触发散户止损' : 'Retail consensus. Algos fake breakdown (Dig Pit) to trigger stops.',
            lang === 'zh' ? '因为成交量太小' : 'Volume too low',
            lang === 'zh' ? '算法只做高频' : 'Algos only HFT'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '市场是博弈的。最明显的形态往往伴随着最凶狠的洗盘。' : 'Market is a game. Obvious patterns invite vicious washouts.'
    },
    {
        id: 48, type: 'psychology',
        q: lang === 'zh' ? '交易日志中最重要的部分是？' : 'Most important part of Trading Journal?',
        options: [
            lang === 'zh' ? '赚了多少钱' : 'Profit amount',
            lang === 'zh' ? '记录当时的心理状态和是否违规' : 'Mental state and Rule compliance',
            lang === 'zh' ? '代码和价格' : 'Ticker and Price',
            lang === 'zh' ? '新闻消息' : 'News'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '日志是用来复盘人性的，不是记流水账。只有诚实记录心理，才能进化。' : 'Journal is for reviewing humanity, not numbers. Honest mental tracking evolves you.'
    },
    {
        id: 49, type: 'pattern',
        q: lang === 'zh' ? '“一阳穿线”时，阳线实体的位置最好是？' : 'For "One Yang Crosses", candle body position best be?',
        options: [
            lang === 'zh' ? '均线在实体上方' : 'MAs above body',
            lang === 'zh' ? '均线在实体下方' : 'MAs below body',
            lang === 'zh' ? '均线汇聚点在实体正中间（中轴穿线）' : 'Convergence point at exact center (Axis)',
            lang === 'zh' ? '无所谓' : 'Doesn\'t matter'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '中轴穿线代表多空力量的彻底反转，杠杆效应最强。' : 'Axis crossing represents total reversal of forces. Strongest leverage.'
    },
    {
        id: 50, type: 'strategy',
        q: lang === 'zh' ? '在盘中“环境隔离”是指？' : 'Intra-market "Isolation" means?',
        options: [
            lang === 'zh' ? '把自己关在小黑屋' : 'Lock in dark room',
            lang === 'zh' ? '物理切断干扰源（手机、社交软件），只关注信号' : 'Cut distractions (Phone, Social), focus on signals',
            lang === 'zh' ? '不看大盘' : 'Ignore market index',
            lang === 'zh' ? '带耳塞' : 'Wear earplugs'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '专注力是交易员最宝贵的资源。任何干扰都可能导致情绪波动。' : 'Focus is scarce resource. Distractions cause emotional tilt.'
    },
    {
        id: 51, type: 'concept',
        q: lang === 'zh' ? '关于“双系统博弈”，斐波那契系统的优势在于？' : 'Advantage of Fibonacci system in "Dual System"?',
        options: [
            lang === 'zh' ? '更准确' : 'More accurate',
            lang === 'zh' ? '使用人数少，不易被针对，且贴合自然波动' : 'Less crowded, harder to target, natural fit',
            lang === 'zh' ? '简单好记' : 'Simple',
            lang === 'zh' ? '是机构专用的' : 'Institutional only'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '传统均线（5/10/20）太拥挤。斐波那契（13/21/34）常能捕捉到“偷跑”的买点。' : 'Traditional MAs crowded. Fibonacci catches "front-run" entries.'
    },
    {
        id: 52, type: 'indicator',
        q: lang === 'zh' ? '成交量放量滞涨（高位放量不涨），通常意味着？' : 'High volume but price stagnation (High level) means?',
        options: [
            lang === 'zh' ? '主力吸筹' : 'Accumulation',
            lang === 'zh' ? '主力出货（派发）' : 'Distribution',
            lang === 'zh' ? '洗盘' : 'Washout',
            lang === 'zh' ? '换庄' : 'New MM'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '在这个位置，主力利用买盘热情，边拉边卖，导致成交量巨大但价格推不动。' : 'MM selling into strength. Huge volume, no price gain = Distribution.'
    },
    {
        id: 53, type: 'strategy',
        q: lang === 'zh' ? '“背离止盈”法的核心逻辑是？' : 'Core logic of "Divergence Exit"?',
        options: [
            lang === 'zh' ? '赚够了就跑' : 'Run with profit',
            lang === 'zh' ? '价格创新高但动能（量能/指标）跟不上，说明上涨不可持续' : 'New high price but lagging momentum/vol. Unsustainable.',
            lang === 'zh' ? '听消息卖出' : 'Sell on news',
            lang === 'zh' ? '亏损了就卖' : 'Sell on loss'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '量价背离是物理定律。没有燃料（量/动能），火箭（价格）飞不远。' : 'Physics. No fuel (Vol/Momentum), rocket (Price) falls.'
    },
    {
        id: 54, type: 'concept',
        q: lang === 'zh' ? '“均线”本质上是什么的数学表达？' : '"Moving Average" is math expression of?',
        options: [
            lang === 'zh' ? '未来的价格' : 'Future price',
            lang === 'zh' ? '过去N天市场参与者的平均持仓成本' : 'Avg holding cost of participants over N days',
            lang === 'zh' ? '随机曲线' : 'Random curve',
            lang === 'zh' ? '主力意图' : 'MM intention'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '均线不是线条，是真金白银堆出来的成本线。跌破均线意味着该周期的参与者全部亏损。' : 'MA is Cost Line. Breaking MA means participants of that cycle are losing.'
    },
    {
        id: 55, type: 'pattern',
        q: lang === 'zh' ? '五线开花后，哪种走势最强？' : 'After Blossom, which move is strongest?',
        options: [
            lang === 'zh' ? '沿着MA5陡峭上行（踏浪）' : 'Steep climb along MA5 (Surfing)',
            lang === 'zh' ? '回踩MA20' : 'Dip to MA20',
            lang === 'zh' ? '横盘整理' : 'Sideways',
            lang === 'zh' ? '跌破启动价' : 'Break launch price'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '沿着MA5单边上行是逼空行情的特征，说明市场极度惜售，买力强劲。' : 'Climbing MA5 is Short Squeeze. Extreme strength.'
    },
    {
        id: 56, type: 'psychology',
        q: lang === 'zh' ? '如何利用“镜像神经元”对抗FOMO？' : 'How to use "Mirror Neurons" against FOMO?',
        options: [
            lang === 'zh' ? '多看别人赚钱的图' : 'Watch others win',
            lang === 'zh' ? '屏蔽晒单信息，切断社会性比较' : 'Block profit screenshots, cut social comparison',
            lang === 'zh' ? '去论坛吵架' : 'Argue in forums',
            lang === 'zh' ? '跟单' : 'Copy trade'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '看到别人赚钱，大脑会模拟同样的快乐，并产生“我没赚到=我亏了”的错觉。屏蔽是最好的防御。' : 'Seeing wins triggers "Social Pain". Blocking removes the trigger.'
    },
    {
        id: 57, type: 'concept',
        q: lang === 'zh' ? '在混沌理论中，我们寻找的是？' : 'In Chaos Theory, we look for?',
        options: [
            lang === 'zh' ? '绝对的确定性' : 'Absolute certainty',
            lang === 'zh' ? '混沌边缘的有序结构（分形）' : 'Ordered structure at edge of chaos (Fractal)',
            lang === 'zh' ? '完全的随机' : 'Total randomness',
            lang === 'zh' ? '蝴蝶效应' : 'Butterfly effect'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '均线开花就是市场在混沌波动中涌现出的一种高度有序的自组织结构。' : 'Blossom is a self-organized ordered structure emerging from chaos.'
    },
    {
        id: 58, type: 'strategy',
        q: lang === 'zh' ? '对于“凹洞量”后的操作，正确的是？' : 'Action after "Crater Volume"?',
        options: [
            lang === 'zh' ? '缩量时立即买入' : 'Buy immediately at low vol',
            lang === 'zh' ? '等待再次放量启动的瞬间介入' : 'Enter when volume surges again',
            lang === 'zh' ? '卖出' : 'Sell',
            lang === 'zh' ? '不再关注' : 'Ignore'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '凹洞代表洗盘结束，但只有再次放量才代表主力重新发动攻势。' : 'Crater = Wash done. Surge = Attack restart. Buy the surge.'
    },
    {
        id: 59, type: 'concept',
        q: lang === 'zh' ? '五线开花模型是否保证100%赚钱？' : 'Does "Blossom" guarantee 100% win?',
        options: [
            lang === 'zh' ? '是，绝对赚钱' : 'Yes, absolutely',
            lang === 'zh' ? '否，它只是提高了胜率和盈亏比的概率优势' : 'No, just probability edge (Win Rate/RR)',
            lang === 'zh' ? '看运气' : 'Luck',
            lang === 'zh' ? '只有牛市赚钱' : 'Only in bull market'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '没有任何系统是圣杯。它只是让你站在大概率的一边。' : 'No Holy Grail. It just puts you on the side of probability.'
    },
    {
        id: 60, type: 'psychology',
        q: lang === 'zh' ? '顶级交易员的终极目标是？' : 'Ultimate goal of top traders?',
        options: [
            lang === 'zh' ? '一夜暴富' : 'Get rich quick',
            lang === 'zh' ? '战胜市场' : 'Beat market',
            lang === 'zh' ? '达到“无心”之境，完美执行系统，不以物喜不以己悲' : 'State of "No Mind", Perfect Execution, Detached',
            lang === 'zh' ? '成为网红' : 'Be famous'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '交易的最高境界是修心。利润只是正确行为的副产品。' : 'Highest level is mind mastery. Profit is byproduct of right action.'
    }
];

export const Assessment: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [currentRound, setCurrentRound] = useState<1 | 2 | 3>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showMedal, setShowMedal] = useState(false);

  // Initialize questions based on round and language
  useEffect(() => {
    let qBank: Question[] = [];
    switch(currentRound) {
        case 1: qBank = getSet1(lang); break;
        case 2: qBank = getSet2(lang); break;
        case 3: qBank = getSet3(lang); break;
        default: qBank = getSet1(lang);
    }
    setQuestions(qBank);
  }, [lang, currentRound]);

  const t = {
    title: lang === 'zh' ? `交易员核心能力考核 (第 ${currentRound} 轮)` : `Trader Core Competency Assessment (Round ${currentRound})`,
    subtitle: lang === 'zh' ? '20道关卡 · 验证你的交易体系' : '20 Levels · Verify Your System',
    score: lang === 'zh' ? '当前得分' : 'Score',
    q: lang === 'zh' ? '问题' : 'Question',
    next: lang === 'zh' ? '下一题' : 'Next',
    finish: lang === 'zh' ? '查看成绩' : 'Finish',
    retrySame: lang === 'zh' ? '重试本套题' : 'Retry This Set',
    newChallenge: lang === 'zh' ? '下一轮挑战 (更难)' : 'Next Round (Harder)',
    claimMedal: lang === 'zh' ? '领取毕业勋章' : 'Claim Medal',
    resultTitle: lang === 'zh' ? '考核结果' : 'Assessment Result',
    perfect: lang === 'zh' ? '宗师级！你完全掌握了五线开花的精髓。' : 'Grandmaster! You have mastered the essence.',
    pass: lang === 'zh' ? '合格交易员。虽然有些小瑕疵，但体系已成型。' : 'Qualified Trader. Minor flaws, but system is solid.',
    fail: lang === 'zh' ? '基础未牢。建议重新研读指南，切勿实盘。' : 'Foundation Weak. Re-read the guide. Do not trade real money.',
    fail_barrier: lang === 'zh' ? '必须答对15题以上才能进入下一轮。' : 'Must score 15+ to proceed.',
    medal_title: lang === 'zh' ? '五线开花 · 认证交易员' : 'Certified Trader: Blossom',
    medal_desc: lang === 'zh' ? '你已通过所有考核，具备了在市场中独立生存的能力。' : 'You have passed all tests and are ready to survive the market.',
    types: {
      concept: lang === 'zh' ? '核心概念' : 'Concept',
      pattern: lang === 'zh' ? '形态识别' : 'Pattern',
      indicator: lang === 'zh' ? '指标应用' : 'Indicator',
      psychology: lang === 'zh' ? '交易心理' : 'Psychology',
      strategy: lang === 'zh' ? '策略风控' : 'Strategy'
    }
  };

  const handleNextRound = () => {
      if (currentRound < 3) {
          setCurrentRound((currentRound + 1) as 1 | 2 | 3);
          restartGame();
      } else {
          setShowMedal(true);
      }
  };

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === questions[currentQ].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowMedal(false);
  };

  const getResult = () => {
    const percentage = (score / questions.length) * 100;
    const passed = score >= 15;
    
    if (percentage >= 90) return { t: t.perfect, c: 'text-green-500', icon: Trophy, passed };
    if (passed) return { t: t.pass, c: 'text-blue-500', icon: CheckCircle2, passed };
    return { t: t.fail, c: 'text-red-500', icon: XCircle, passed };
  };

  const IconMap = {
    concept: BookOpen,
    pattern: Target,
    indicator: AlertCircle,
    psychology: Brain,
    strategy: Shield
  };

  if (showMedal) {
      return (
          <>
            <Fireworks />
            <Card highlightColor="amber" className="text-center p-10 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 animate-bounce">
                    <div className="relative">
                        <Medal size={150} className="text-amber-400 drop-shadow-lg" />
                        <Star size={40} className="text-yellow-200 absolute top-10 left-1/2 transform -translate-x-1/2 animate-pulse" fill="currentColor" />
                    </div>
                </div>

                <h2 className="text-4xl font-black text-amber-600 dark:text-amber-400 mb-4 mt-6 animate-pulse">{t.medal_title}</h2>
                <p className="text-xl font-bold text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
                    {t.medal_desc}
                </p>

                <div className="flex gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="text-yellow-400 animate-spin" style={{animationDuration: `${2+i}s`}} />
                    ))}
                </div>
                
                <button 
                onClick={() => {setCurrentRound(1); restartGame();}}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                >
                <RotateCcw size={20} /> Restart Journey
                </button>
            </Card>
          </>
      )
  }

  if (showResult) {
    const res = getResult();
    return (
      <Card highlightColor={res.passed ? 'blue' : 'red'} className="text-center p-10 flex flex-col items-center justify-center min-h-[400px]">
        <res.icon size={80} className={`mb-6 ${res.c} ${res.passed ? 'animate-bounce' : 'animate-pulse'}`} />
        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-2">{t.resultTitle}</h2>
        <div className={`text-6xl font-black mb-6 ${res.c}`}>{score} / {questions.length}</div>
        <p className="text-xl font-bold text-slate-600 dark:text-slate-300 mb-8 max-w-lg">{res.t}</p>
        
        {!res.passed && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 px-4 py-2 rounded-lg font-bold mb-6 animate-pulse">
                {t.fail_barrier}
            </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
            <button 
            onClick={restartGame}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full font-bold transition-all transform hover:scale-105 shadow-sm"
            >
            <RotateCcw size={20} /> {t.retrySame}
            </button>

            {res.passed && (
                <button 
                onClick={handleNextRound}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg min-w-[200px]"
                >
                <Medal size={20} /> 
                {currentRound === 3 ? t.claimMedal : t.newChallenge}
                </button>
            )}
        </div>
      </Card>
    );
  }

  // Safety check if questions haven't loaded yet
  if (questions.length === 0) return null;

  const q = questions[currentQ];
  const QIcon = IconMap[q.type];

  return (
    <Card highlightColor="slate" className="relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
                <h4 className="font-bold text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Trophy className="text-yellow-500" /> {t.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <div className="text-xs font-bold text-slate-400 uppercase">{t.q}</div>
                    <div className="text-xl font-black text-slate-700 dark:text-slate-200">
                        {currentQ + 1} <span className="text-sm text-slate-400 font-normal">/ {questions.length}</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-slate-400 uppercase">{t.score}</div>
                    <div className="text-xl font-black text-blue-600 dark:text-blue-400">{score}</div>
                </div>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
            <div 
                className="h-full bg-blue-500 transition-all duration-500 ease-out" 
                style={{width: `${((currentQ) / questions.length) * 100}%`}}
            ></div>
        </div>

        {/* Question Area */}
        <div className="mb-8 min-h-[100px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold mb-4">
                <QIcon size={14} /> {t.types[q.type]}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
                {q.q}
            </h3>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 mb-8">
            {q.options.map((opt, idx) => {
                // Ensure text color is dark in light mode when unselected/hovering
                let btnClass = "p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 relative ";
                
                if (isAnswered) {
                    if (idx === q.correct) {
                        btnClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                    } else if (idx === selectedOption) {
                        btnClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                    } else {
                        btnClass += "border-slate-200 dark:border-slate-800 text-slate-400 opacity-50";
                    }
                } else {
                    btnClass += "border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 text-slate-700 dark:text-slate-300 cursor-pointer";
                }

                return (
                    <button 
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={isAnswered}
                        className={btnClass}
                    >
                        <span className="inline-block w-6 font-bold opacity-50">{String.fromCharCode(65 + idx)}.</span> {opt}
                        {isAnswered && idx === q.correct && <CheckCircle2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />}
                        {isAnswered && idx === selectedOption && idx !== q.correct && <XCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />}
                    </button>
                )
            })}
        </div>

        {/* Explanation & Next Button */}
        {isAnswered && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex-1">
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">解析 / Analysis</div>
                        <p className="text-slate-800 dark:text-slate-200 font-medium">{q.explanation}</p>
                    </div>
                    <button 
                        onClick={nextQuestion}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md transition-transform hover:scale-105 whitespace-nowrap"
                    >
                        {currentQ === questions.length - 1 ? t.finish : t.next}
                    </button>
                </div>
            </div>
        )}
    </Card>
  );
};
