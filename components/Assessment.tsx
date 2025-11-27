
import React, { useState, useEffect, useRef } from 'react';
import { Card } from './Card';
import { Lang } from '../types';
import { CheckCircle2, XCircle, Trophy, RefreshCw, AlertCircle, Brain, Target, Shield, BookOpen, RotateCcw, Medal, Star, Sparkles, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  type: 'concept' | 'pattern' | 'indicator' | 'psychology' | 'strategy' | 'logic' | 'philosophy' | 'chip';
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

// Simple Fireworks Canvas Component
const Fireworks: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const activeRef = useRef(true);
    
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
             ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas instead of overlay for fade out effect
             
             particles.forEach((p, i) => {
                 if(p.alpha > 0) {
                     p.update();
                     p.draw();
                 } else {
                     particles.splice(i, 1);
                 }
             });

             // Only create new fireworks if active
             if(activeRef.current && Math.random() < 0.05) {
                 createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5);
             }
        };

        animate();

        // Stop creating fireworks after 5 seconds
        const timeout = setTimeout(() => {
            activeRef.current = false;
        }, 5000);

        const handleResize = () => {
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
    );
};


// --- Round 1: Foundation & New Concepts ---
const getSet1 = (lang: Lang): Question[] => [
    // 1. Core Concept
    {
      id: 1, type: 'concept',
      q: lang === 'zh' ? '五线开花的核心物理学本质是什么？' : 'Core physics essence of Five-Line Blossom?',
      options: [
        lang === 'zh' ? '神奇的预测' : 'Prediction',
        lang === 'zh' ? '成本趋同（低熵）导致的能量守恒爆发' : 'Energy burst from cost convergence (Low Entropy)',
        lang === 'zh' ? '庄家画图' : 'MM Drawing',
        lang === 'zh' ? '内幕消息' : 'Insider Info'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '均线粘合代表市场各周期持仓成本一致，方差趋于0，是能量压缩的极限。' : 'Adhesion means cost consensus across cycles, variance nears 0, energy compressed.'
    },
    // 2. VP Space-Time (New)
    {
      id: 2, type: 'logic',
      q: lang === 'zh' ? '在量价时空分析中，“量缩价涨”通常意味着？' : 'In VP Analysis, "Vol Down, Price Up" usually means?',
      options: [
        lang === 'zh' ? '买盘不足，即将下跌' : 'No buyers, drop soon',
        lang === 'zh' ? '主力高度控盘（锁仓），最强势的主升浪特征' : 'High MM control (Locked), Strongest Main Wave',
        lang === 'zh' ? '散户在买' : 'Retail buying',
        lang === 'zh' ? '市场没有人气' : 'No popularity'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '既然价格涨了却不需要成交量，说明抛压极小，筹码被主力锁定。' : 'Price rising without volume means no selling pressure. Chips are locked by MM.'
    },
    // 3. Strategy: Old Duck Head (New)
    {
      id: 3, type: 'pattern',
      q: lang === 'zh' ? '“老鸭头”形态中，“鸭鼻孔”处的关键特征是？' : 'Key feature of the "Nostril" in Old Duck Head?',
      options: [
        lang === 'zh' ? '放巨量突破' : 'Huge Vol Breakout',
        lang === 'zh' ? '跌破MA60' : 'Break MA60',
        lang === 'zh' ? '极致缩量（芝麻量），回踩MA60不破' : 'Extreme Low Vol (Sesame), Retest MA60 Hold',
        lang === 'zh' ? 'MACD金叉' : 'MACD Cross'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '鼻孔缩量代表洗盘结束，主力并未出逃。' : 'Shrinking vol at nostril means washout complete, MM stayed.'
    },
    // 4. Strategy: Beauty Shoulder (New)
    {
      id: 4, type: 'pattern',
      q: lang === 'zh' ? '“美人肩”与“老鸭头”的最大区别在于？' : 'Difference between "Beauty Shoulder" & "Duck Head"?',
      options: [
        lang === 'zh' ? '美人肩更弱' : 'Shoulder is weaker',
        lang === 'zh' ? '美人肩不回踩MA60，在高位缩量盘整（拒绝深跌）' : 'Shoulder refuses deep drop (No MA60 touch), tight high consolidation',
        lang === 'zh' ? '美人肩成交量更大' : 'Shoulder has more vol',
        lang === 'zh' ? '没有区别' : 'No difference'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '美人肩是极强势的上升中继，主力甚至不愿意给散户低位回补的机会。' : 'Beauty Shoulder is ultra-strong relay. MM refuses to give cheap chips.'
    },
    // 5. Candle Pattern (New)
    {
      id: 5, type: 'pattern',
      q: lang === 'zh' ? '高位出现“射击之星”（长上影线），预示着？' : '"Shooting Star" at high level signals?',
      options: [
        lang === 'zh' ? '仙人指路 (看涨)' : 'Bullish Guide',
        lang === 'zh' ? '多头进攻受阻，空头反扑 (看跌)' : 'Bulls rejected, Bears counter (Bearish)',
        lang === 'zh' ? '中继形态' : 'Relay',
        lang === 'zh' ? '底部确认' : 'Bottom Confirmed'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '长上影线意味着日内多头曾尝试拉升但失败，收盘被打回原形。' : 'Long upper shadow means Bulls tried to push but failed. Bears won the day.'
    },
    // 6. VP Space-Time (New)
    {
      id: 6, type: 'logic',
      q: lang === 'zh' ? '“量大滞涨”（高位巨量不涨）的本质是？' : 'Essence of "High Vol, Flat Price" at top?',
      options: [
        lang === 'zh' ? '主力吸筹' : 'Accumulation',
        lang === 'zh' ? '换手充分，利好' : 'Good turnover',
        lang === 'zh' ? '主力借机派发 (出货)' : 'Distribution (MM Dumping)',
        lang === 'zh' ? '散户吓跑了' : 'Retail scared'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '这么大的买盘进去，价格却不涨，说明有人在源源不断地砸盘（供给>需求）。' : 'Huge buying but no price rise means someone is dumping endlessly (Supply > Demand).'
    },
    // 7. Foundation
    {
      id: 7, type: 'pattern',
      q: lang === 'zh' ? '“一阳穿多线”的最佳形态，五线汇聚点应位于阳线实体的？' : 'Best "One Yang Crosses All" has the knot at?',
      options: [
        lang === 'zh' ? '顶部' : 'Top',
        lang === 'zh' ? '中轴 (中心)' : 'Axis (Center)',
        lang === 'zh' ? '底部' : 'Bottom',
        lang === 'zh' ? '外部' : 'Outside'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '中轴穿线代表着日内多空力量的彻底反转和成本的瞬间置换。' : 'Axis crossing represents total reversal of intraday forces.'
    },
    // 8. Candle Pattern (New)
    {
      id: 8, type: 'pattern',
      q: lang === 'zh' ? '“穿头破脚”（阴包阳）出现在高位是？' : '"Bearish Engulfing" at top is?',
      options: [
        lang === 'zh' ? '极强看跌信号' : 'Strong Bearish Signal',
        lang === 'zh' ? '洗盘' : 'Washout',
        lang === 'zh' ? '看涨信号' : 'Bullish Signal',
        lang === 'zh' ? '无意义' : 'Meaningless'
      ],
      correct: 0,
      explanation: lang === 'zh' ? '阴线实体完全吞噬了前一天的阳线，说明空头动能彻底压倒多头。' : 'Yin body engulfs Yang, Bears completely overwhelmed Bulls.'
    },
    // 9. VP Space-Time (New)
    {
      id: 9, type: 'logic',
      q: lang === 'zh' ? '“时空共振”触发的条件通常是？' : 'Condition for "Space-Time Resonance"?',
      options: [
        lang === 'zh' ? '价格随意波动' : 'Random',
        lang === 'zh' ? '价格触及关键阻力位(空间) + 斐波那契时间窗(时间)' : 'Price hits Resistance (Space) + Fib Window (Time)',
        lang === 'zh' ? '只看时间' : 'Time only',
        lang === 'zh' ? '只看价格' : 'Price only'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '时空交汇点往往是变盘点。若此时量能配合，则共振发生。' : 'Intersection of Price Level and Time Window is the pivot point.'
    },
    // 10. Candle Pattern (New)
    {
      id: 10, type: 'pattern',
      q: lang === 'zh' ? '“早晨之星”由哪三根K线组成？' : 'Composition of "Morning Star"?',
      options: [
        lang === 'zh' ? '阳线+阴线+阳线' : 'Yang+Yin+Yang',
        lang === 'zh' ? '阴线 + 跳空十字星 + 大阳线' : 'Yin + Gap Star + Big Yang',
        lang === 'zh' ? '三根阴线' : '3 Yins',
        lang === 'zh' ? '三根阳线' : '3 Yangs'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '黑暗（阴线）之后是犹豫（星），随后光明到来（阳线）。' : 'Darkness (Yin) -> Indecision (Star) -> Light (Yang).'
    },
    // 11. Strategy (New)
    {
      id: 11, type: 'pattern',
      q: lang === 'zh' ? '“鸭嘴”张开（老鸭头爆发）时，均线系统应该？' : 'When "Duck Mouth" opens, MAs should?',
      options: [
        lang === 'zh' ? '死叉向下' : 'Dead Cross Down',
        lang === 'zh' ? '粘合不动' : 'Stay Bonded',
        lang === 'zh' ? 'MA5金叉MA10，呈扇形向上发散' : 'MA5 Cross MA10 Up, Fan Out',
        lang === 'zh' ? '混乱无序' : 'Chaos'
      ],
      correct: 2,
      explanation: lang === 'zh' ? '鸭嘴张开越大，说明短期爆发力越强，主升浪开启。' : 'Wider mouth = Stronger burst. Main wave start.'
    },
    // 12. Foundation
    {
      id: 12, type: 'concept',
      q: lang === 'zh' ? '均线“粘合”的量化定义通常涉及？' : 'Quant definition of "Adhesion"?',
      options: [
        lang === 'zh' ? '完全重合' : 'Overlap perfectly',
        lang === 'zh' ? '均线间极差(Spread)极小' : 'Minimal Spread',
        lang === 'zh' ? '均线数值大' : 'High Values',
        lang === 'zh' ? '均线交叉' : 'Crossing'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '粘合计算的是Max(MA)-Min(MA)的离散程度。' : 'Adhesion is about minimizing the variance/spread.'
    },
    // 13. Foundation
    {
      id: 13, type: 'concept',
      q: lang === 'zh' ? 'MA60（决策线）的主要作用是？' : 'Role of MA60 (Decision Line)?',
      options: [
        lang === 'zh' ? '超短线买卖' : 'Scalping',
        lang === 'zh' ? '中线趋势的生命线与防守位' : 'Mid-term Trend Lifeline & Defense',
        lang === 'zh' ? '没有什么用' : 'Useless',
        lang === 'zh' ? '预测明天' : 'Predict tomorrow'
      ],
      correct: 1,
      explanation: lang === 'zh' ? 'MA60是机构操盘的底线，有效跌破通常意味着波段结束。' : 'MA60 is the inst. baseline. Breaking it usually ends the swing.'
    },
    // 14. Candle Pattern (New)
    {
      id: 14, type: 'pattern',
      q: lang === 'zh' ? '“吊颈线”出现在高位，虽然下影线很长，但实际上是？' : '"Hanging Man" at top has long lower shadow, but implies?',
      options: [
        lang === 'zh' ? '强力支撑' : 'Strong Support',
        lang === 'zh' ? '诱多出货 (看跌)' : 'Bull Trap / Distribution (Bearish)',
        lang === 'zh' ? '上涨中继' : 'Relay',
        lang === 'zh' ? '洗盘' : 'Washout'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '看似探底回升，实则主力在盘中制造恐慌并趁机派发，抛压已现。' : 'Looks like support, but shows selling pressure exist. Often a trap.'
    },
    // 15. VP Space-Time (New)
    {
      id: 15, type: 'logic',
      q: lang === 'zh' ? '“量增价跌”通常发生在？' : '"Vol Up, Price Down" usually happens at?',
      options: [
        lang === 'zh' ? '底部吸筹' : 'Accumulation',
        lang === 'zh' ? '破位恐慌杀跌' : 'Panic Breakdown',
        lang === 'zh' ? '洗盘' : 'Washout',
        lang === 'zh' ? '主升浪' : 'Main Wave'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '放量下跌说明恐慌盘涌出，且承接盘不足以止住跌势，支撑失效。' : 'High vol drop means panic selling overwhelming support.'
    },
    // 16. Foundation
    {
      id: 16, type: 'psychology',
      q: lang === 'zh' ? '多巴胺在交易中的主要作用是？' : 'Dopamine\'s role in trading?',
      options: [
        lang === 'zh' ? '产生快乐' : 'Joy',
        lang === 'zh' ? '奖赏预测（预期成瘾）' : 'Reward Prediction (Expectation Addiction)',
        lang === 'zh' ? '缓解痛苦' : 'Relieve Pain',
        lang === 'zh' ? '冷静思考' : 'Calm Logic'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '多巴胺是对“不确定性奖励”的预期，而非奖励本身。' : 'Dopamine drives the pursuit of uncertain rewards.'
    },
    // 17. Foundation
    {
      id: 17, type: 'chip',
      q: lang === 'zh' ? '底部筹码密集，且红色获利盘比例很高，意味着？' : 'Bottom chips dense, high Red Profit ratio means?',
      options: [
        lang === 'zh' ? '主力被套' : 'MM Trapped',
        lang === 'zh' ? '吸筹完成，具备上攻基础' : 'Accumulation Done, Ready to Launch',
        lang === 'zh' ? '即将暴跌' : 'Crash soon',
        lang === 'zh' ? '散户很多' : 'Many Retail'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '获利盘锁定良好且未抛售，说明主力控盘度高。' : 'High profit chips holding means high control by MM.'
    },
    // 18. Strategy (New)
    {
      id: 18, type: 'pattern',
      q: lang === 'zh' ? '在“美人肩”形态中，成交量应该呈现什么状态？' : 'Volume status in "Beauty Shoulder"?',
      options: [
        lang === 'zh' ? '持续放大' : 'Increasing',
        lang === 'zh' ? '极致缩量 (惜售)' : 'Extreme Shrinkage (Holding)',
        lang === 'zh' ? '忽大忽小' : 'Volatile',
        lang === 'zh' ? '没有要求' : 'None'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '缩量盘整说明市场惜售，主力只需少量资金即可拉升。' : 'Low volume means no one wants to sell. Easy to pump.'
    },
    // 19. Candle Pattern (New)
    {
      id: 19, type: 'pattern',
      q: lang === 'zh' ? '“红三兵”出现在低位，意味着？' : '"Three Red Soldiers" at bottom means?',
      options: [
        lang === 'zh' ? '诱多' : 'Trap',
        lang === 'zh' ? '多头步步为营，趋势反转' : 'Bulls advancing, Trend Reversal',
        lang === 'zh' ? '即将回调' : 'Pullback',
        lang === 'zh' ? '空头陷阱' : 'Bear Trap'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '连续三根阳线重心上移，显示多头力量稳步增强。' : '3 consecutive Yangs moving up shows steady Bull strength.'
    },
    // 20. Foundation
    {
      id: 20, type: 'strategy',
      q: lang === 'zh' ? '“完美的亏损”是指？' : '"Perfect Loss" means?',
      options: [
        lang === 'zh' ? '亏很少' : 'Small loss',
        lang === 'zh' ? '严格按计划执行了止损' : 'Executed Stop-Loss as Planned',
        lang === 'zh' ? '运气不好' : 'Bad luck',
        lang === 'zh' ? '没有亏损' : 'No loss'
      ],
      correct: 1,
      explanation: lang === 'zh' ? '交易的核心是执行力。只要按系统执行了，无论盈亏都是成功的交易。' : 'Execution is key. Following the system makes it a success regardless of P&L.'
    }
];

// --- Round 2: Advanced (Pattern & Psychology) ---
const getSet2 = (lang: Lang): Question[] => [
    {
        id: 21, type: 'indicator',
        q: lang === 'zh' ? 'MACD“将死不死”形态的含义是？' : 'Meaning of MACD "Refusing to Die"?',
        options: [
          lang === 'zh' ? '看跌' : 'Bearish',
          lang === 'zh' ? '极强起涨信号 (空中加油)' : 'Strong Launch (Air Refueling)',
          lang === 'zh' ? '震荡' : 'Choppy',
          lang === 'zh' ? '背离' : 'Divergence'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '快线DIF欲下穿DEA但未穿即拉起，显示多头力量极强。' : 'DIF turns up before crossing, showing immense strength.'
    },
    {
        id: 22, type: 'pattern',
        q: lang === 'zh' ? '“凹洞量”出现后，必须伴随什么才确认启动？' : 'After "Concave Vol", what confirms launch?',
        options: [
            lang === 'zh' ? '继续缩量' : 'More shrinking',
            lang === 'zh' ? '突发爆量（阳线）' : 'Sudden Burst (Yang)',
            lang === 'zh' ? '大阴线' : 'Big Yin',
            lang === 'zh' ? '十字星' : 'Doji'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '有量才有价。爆量阳线是主力重新进场的信号。' : 'Volume confirms price. Burst Yang signals MM return.'
    },
    {
        id: 23, type: 'concept',
        q: lang === 'zh' ? '筹码“真空区”通常意味着股价会？' : 'In a "Chip Vacuum", price usually?',
        options: [
            lang === 'zh' ? '加速通过 (阻力小)' : 'Accelerate (Low Resistance)',
            lang === 'zh' ? '受阻回落' : 'Get rejected',
            lang === 'zh' ? '横盘震荡' : 'Consolidate',
            lang === 'zh' ? '吸筹' : 'Accumulate'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '没有套牢盘的区域，抛压极小，易涨难跌。' : 'No trapped chips means low selling pressure.'
    },
    {
        id: 24, type: 'strategy',
        q: lang === 'zh' ? '“逻辑止损”的依据是？' : 'Basis of "Logic Stop"?',
        options: [
            lang === 'zh' ? '跌破5%' : 'Down 5%',
            lang === 'zh' ? '跌破启动阳线最低价' : 'Break Launch Candle Low',
            lang === 'zh' ? '均线死叉' : 'MA Cross',
            lang === 'zh' ? '情绪崩溃' : 'Panic'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '启动阳线是逻辑起点，跌破它说明假设证伪。' : 'Breaking the launch candle falsifies the trade thesis.'
    },
    {
        id: 25, type: 'pattern',
        q: lang === 'zh' ? '周线屠龙刀中，MA30和MA60的状态必须是？' : 'In Dragon Saber, MA30 & MA60 must be?',
        options: [
            lang === 'zh' ? '向下发散' : 'Diverging Down',
            lang === 'zh' ? '走平并粘合' : 'Flat & Bonded',
            lang === 'zh' ? '大角度向上' : 'Steep Up',
            lang === 'zh' ? '无要求' : 'Any'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '长期均线走平粘合是蓄势待发的关键特征。' : 'Long-term bonding indicates potential energy buildup.'
    },
    {
        id: 26, type: 'indicator',
        q: lang === 'zh' ? 'RSI回踩50不破，技术含义是？' : 'RSI retracing to 50 & holding means?',
        options: [
            lang === 'zh' ? '多头趋势确认' : 'Bull Trend Confirmed',
            lang === 'zh' ? '趋势结束' : 'Trend Over',
            lang === 'zh' ? '转为空头' : 'Turn Bearish',
            lang === 'zh' ? '超买' : 'Overbought'
        ],
        correct: 0,
        explanation: lang === 'zh' ? '50是强弱分界。回踩确认是多头趋势延续的标志。' : '50 is the boundary. Holding it confirms bull trend.'
    },
    {
        id: 27, type: 'strategy',
        q: lang === 'zh' ? '防范“假突破”的最佳手段是？' : 'Best defense against Fake Breakout?',
        options: [
            lang === 'zh' ? '盘中追入' : 'Intraday Chase',
            lang === 'zh' ? '收盘确认 + 量能配合' : 'Close Confirm + Vol',
            lang === 'zh' ? '听消息' : 'News',
            lang === 'zh' ? '看指标金叉' : 'Golden Cross'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '收盘价最真实，量能验证主力意图。' : 'Close price is truth; Volume verifies intent.'
    },
    {
        id: 28, type: 'pattern',
        q: lang === 'zh' ? '股价沿着MA5攀升（不破），属于什么行情？' : 'Price surfing MA5 (no break) is?',
        options: [
            lang === 'zh' ? '极强逼空 (主升浪)' : 'Extreme Squeeze (Main Wave)',
            lang === 'zh' ? '震荡洗盘' : 'Washout',
            lang === 'zh' ? '筑底' : 'Bottoming',
            lang === 'zh' ? '出货' : 'Distribution'
        ],
        correct: 0,
        explanation: lang === 'zh' ? 'MA5是攻击线，贴线运行说明市场情绪极度亢奋。' : 'MA5 is the Attack Line. Surfing it means max momentum.'
    },
    {
        id: 29, type: 'strategy',
        q: lang === 'zh' ? '波浪理论中，第3浪的目标通常是第1浪的？' : 'Wave 3 target is usually Wave 1 x ?',
        options: [
            lang === 'zh' ? '1倍' : '1x',
            lang === 'zh' ? '1.618倍' : '1.618x',
            lang === 'zh' ? '0.618倍' : '0.618x',
            lang === 'zh' ? '2倍' : '2x'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '黄金分割扩展位。' : 'Golden Ratio Extension.'
    },
    {
        id: 30, type: 'pattern',
        q: lang === 'zh' ? '“空中加油”失败的信号是？' : '"Air Refueling" Failure Signal?',
        options: [
            lang === 'zh' ? '缩量回调' : 'Shrink Retrace',
            lang === 'zh' ? '放量跌破MA60' : 'High Vol Break MA60',
            lang === 'zh' ? 'MACD金叉' : 'MACD Cross',
            lang === 'zh' ? '小阴线' : 'Small Yin'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '放量跌破支撑说明主力出逃，加油变漏油。' : 'Volume break of support means MM exit.'
    },
    {
        id: 31, type: 'concept',
        q: lang === 'zh' ? '高位“筹码分布”呈现什么状态最危险？' : 'Dangerous High-Level Chip Profile?',
        options: [
            lang === 'zh' ? '底部筹码密集' : 'Bottom Dense',
            lang === 'zh' ? '底部筹码消失，顶部单峰密集' : 'Bottom Gone, Top Dense',
            lang === 'zh' ? '双峰' : 'Dual Peak',
            lang === 'zh' ? '发散' : 'Dispersed'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '底仓消失说明主力已完成派发，顶部密集全是散户接盘。' : 'Base chips gone = MM exited. Top dense = Retail bagholders.'
    },
    {
        id: 32, type: 'pattern',
        q: lang === 'zh' ? '粘合期理想的换手率是？' : 'Ideal Turnover during Adhesion?',
        options: [
            lang === 'zh' ? '> 10%' : '> 10%',
            lang === 'zh' ? '< 1%' : '< 1%',
            lang === 'zh' ? '5%左右' : '~5%',
            lang === 'zh' ? '逐步放大' : 'Increasing'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '地量地价，低换手代表筹码锁定良好。' : 'Low turnover means locked chips and exhaustion.'
    },
    {
        id: 33, type: 'pattern',
        q: lang === 'zh' ? '“回头望月”确认洗盘结束的K线是？' : 'Candle confirming "Looking Back"?',
        options: [
            lang === 'zh' ? '大阴线' : 'Big Yin',
            lang === 'zh' ? '反包阳线 (穿MA5/10)' : 'Engulfing Yang (Cross MA5/10)',
            lang === 'zh' ? '十字星' : 'Doji',
            lang === 'zh' ? '小阳线' : 'Small Yang'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '阳线反包修复了均线形态，确认多头回归。' : 'Engulfing candle repairs MA structure, confirming Bull return.'
    },
    {
        id: 34, type: 'indicator',
        q: lang === 'zh' ? '月线KDJ金叉的最安全位置是？' : 'Safest Monthly KDJ Cross location?',
        options: [
            lang === 'zh' ? '高位 (>80)' : 'High (>80)',
            lang === 'zh' ? '中位 (50)' : 'Mid (50)',
            lang === 'zh' ? '低位 (20左右)' : 'Low (~20)',
            lang === 'zh' ? '随意' : 'Any'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '低位金叉代表长期大底，安全边际最高。' : 'Low cross signals major long-term bottom.'
    },
    {
        id: 35, type: 'strategy',
        q: lang === 'zh' ? '“3日确认原则”主要用于？' : '"3-Day Rule" used for?',
        options: [
            lang === 'zh' ? '止盈' : 'Take Profit',
            lang === 'zh' ? '过滤假突破' : 'Filter Fakeouts',
            lang === 'zh' ? '抄底' : 'Bottom Fishing',
            lang === 'zh' ? '加仓' : 'Adding'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '真突破通常能站稳3天，这是过滤噪音的经验法则。' : 'True breakouts hold for 3 days. Filters noise.'
    },
    {
        id: 36, type: 'pattern',
        q: lang === 'zh' ? '“海底捞月”形态通常出现在什么背景下？' : 'Context for "Moon Salvage"?',
        options: [
            lang === 'zh' ? '牛市高潮' : 'Bull Climax',
            lang === 'zh' ? '长期熊市末期 (MA250走平)' : 'Bear End (MA250 Flat)',
            lang === 'zh' ? '震荡市' : 'Chop',
            lang === 'zh' ? '下跌中继' : 'Drop Relay'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '长期均线走平意味着下跌动能衰竭，主力开始长期吸筹。' : 'Flattening long MAs mean bearish momentum exhausted.'
    },
    {
        id: 37, type: 'psychology',
        q: lang === 'zh' ? '“恐高悖论”是指？' : '"Fear of Heights Paradox"?',
        options: [
            lang === 'zh' ? '怕高处掉下来' : 'Fear of falling',
            lang === 'zh' ? '因回避5%涨幅错失50%主升浪' : 'Miss 50% gain to avoid 5% risk',
            lang === 'zh' ? '喜欢买低价股' : 'Like cheap stocks',
            lang === 'zh' ? '恐慌抛售' : 'Panic sell'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '看似安全的低位股往往不涨，看似危险的高位股往往更强。' : 'Safe-looking lows dont rise; Risky-looking highs go higher.'
    },
    {
        id: 38, type: 'psychology',
        q: lang === 'zh' ? '阻断FOMO的最有效物理方法？' : 'Physical block for FOMO?',
        options: [
            lang === 'zh' ? '深呼吸' : 'Breathe',
            lang === 'zh' ? '强制离开屏幕10分钟' : 'Force Screen Exit 10m',
            lang === 'zh' ? '立即下单' : 'Buy Now',
            lang === 'zh' ? '看新闻' : 'News'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '等待多巴胺脉冲消退，让理智脑重新上线。' : 'Wait for dopamine pulse to fade, let logic reboot.'
    },
    {
        id: 39, type: 'strategy',
        q: lang === 'zh' ? '“筹码止损”是基于什么逻辑？' : 'Logic of "Chip Stop"?',
        options: [
            lang === 'zh' ? '亏损金额' : 'Loss Amount',
            lang === 'zh' ? '跌破筹码密集峰下沿 (支撑变压力)' : 'Break Chip Peak Bottom',
            lang === 'zh' ? '时间' : 'Time',
            lang === 'zh' ? '均线' : 'MA'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '密集峰下沿是主力成本防线，击穿意味着防守失败。' : 'Peak bottom is MM cost defense. Break = Failure.'
    },
    {
        id: 40, type: 'strategy',
        q: lang === 'zh' ? '量价背离（价升量缩+红柱缩短）时的操作？' : 'Divergence (Price Up, Vol/MACD Down). Action?',
        options: [
            lang === 'zh' ? '加仓' : 'Add',
            lang === 'zh' ? '止盈/减仓' : 'Take Profit / Reduce',
            lang === 'zh' ? '持股不动' : 'Hold',
            lang === 'zh' ? '做多' : 'Long'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '上涨动能衰竭，是见顶的强烈信号。' : 'Momentum fading while price rises signals a top.'
    }
];

// --- Round 3: Mastery (Logic & Strategy) ---
const getSet3 = (lang: Lang): Question[] => [
    {
        id: 41, type: 'pattern',
        q: lang === 'zh' ? '“海底捞月”形态中，MA250 (年线) 必须呈现什么状态？' : 'In "Moon Salvage", MA250 must be?',
        options: [
            lang === 'zh' ? '大角度向上 (牛市)' : 'Steep Up',
            lang === 'zh' ? '陡峭向下 (熊市主跌)' : 'Steep Down (Bear)',
            lang === 'zh' ? '由陡峭向下逐渐走平 (筑底)' : 'Flattening from steep down (Bottoming)',
            lang === 'zh' ? '没有特定要求' : 'No requirement'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '核心逻辑是长期下跌动能衰竭。若MA250依然陡峭向下，任何突破都是反弹而非反转。' : 'Key logic is exhaustion of long-term bearish momentum. If MA250 is steep down, breakout is a trap.'
    },
    {
        id: 42, type: 'logic',
        q: lang === 'zh' ? '股价突破MA250年线，但MA30和MA60依然向下发散。此时大概率是？' : 'Price breaks MA250, but MA30/60 diverging down. Likely?',
        options: [
            lang === 'zh' ? '牛市起点' : 'Bull Start',
            lang === 'zh' ? '假突破 (熊市反弹)' : 'Fakeout (Bear Bounce)',
            lang === 'zh' ? '空中加油' : 'Air Refueling',
            lang === 'zh' ? '金蟾蜍' : 'Golden Toad'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '中长期趋势未扭转（MA向下），突破年线往往是用来诱多的“骗线”。' : 'Trend is still down. Breaking MA250 here is usually a trap to lure bulls.'
    },
    {
        id: 43, type: 'strategy',
        q: lang === 'zh' ? '2-3-2建仓法中，何时才能加码中间的“30%”？' : 'In 2-3-2, when to add the "30%"?',
        options: [
            lang === 'zh' ? '股价下跌摊平亏损时' : 'Averaging down on loss',
            lang === 'zh' ? '底仓浮盈且确认突破/支撑有效时' : 'Base is profitable & Breakout/Support confirmed',
            lang === 'zh' ? '随时可以' : 'Anytime',
            lang === 'zh' ? '被套牢时' : 'When trapped'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '绝对禁止摊平亏损。只在市场证明你是对的时候（浮盈）加仓。' : 'Never average down. Only add to winners when the market proves you right.'
    },
    {
        id: 44, type: 'chip',
        q: lang === 'zh' ? '股价拉升30%后，底部红色获利盘完全消失，顶部出现巨大单峰。意味着？' : 'Price up 30%, base red chips vanish, massive top peak appears. Meaning?',
        options: [
            lang === 'zh' ? '锁仓拉升 (持有)' : 'Locking Ascent (Hold)',
            lang === 'zh' ? '主力完成派发 (出货)' : 'MM Distribution Complete (Exit)',
            lang === 'zh' ? '空中加油 (加仓)' : 'Air Refueling (Add)',
            lang === 'zh' ? '洗盘' : 'Washout'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '底仓消失说明主力已经把筹码倒给了高位接盘的散户，极度危险。' : 'Base chips gone = MM sold out. Top dense = Retail holding the bag. Extreme danger.'
    },
    {
        id: 45, type: 'pattern',
        q: lang === 'zh' ? '周线“屠龙刀”形态的决定性条件是？' : 'The decisive condition for Weekly "Dragon Saber"?',
        options: [
            lang === 'zh' ? 'MA5金叉MA10' : 'MA5 Cross MA10',
            lang === 'zh' ? 'MA30与MA60走平并粘合' : 'MA30 & MA60 Flat & Bonded',
            lang === 'zh' ? '成交量巨大' : 'Huge Volume',
            lang === 'zh' ? 'KDJ金叉' : 'KDJ Cross'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '短期金叉常有，但中期均线(30/60)的粘合才代表周线级别的共振大底。' : 'Short crosses are common. Mid-term MA bonding signals the true weekly cyclical bottom.'
    },
    {
        id: 46, type: 'psychology',
        q: lang === 'zh' ? '如果你完美执行了交易系统（如跌破止损），但随后股价反转大涨。你应该？' : 'You executed stop-loss perfectly, but price immediately reversed up. You should?',
        options: [
            lang === 'zh' ? '感到后悔并自责' : 'Feel regret and blame self',
            lang === 'zh' ? '立刻全仓追回' : 'Chase back all-in',
            lang === 'zh' ? '给自己打高分 (因为执行了纪律)' : 'Grade yourself "A" (Disciplined Execution)',
            lang === 'zh' ? '修改系统删除止损' : 'Remove stops from system'
        ],
        correct: 2,
        explanation: lang === 'zh' ? '结果不可控（斯多葛控制二分法）。执行了纪律就是成功，卖飞是系统的成本。' : 'Result is uncontrollable. Execution is success. Being shaken out is a system cost.'
    },
    {
        id: 47, type: 'logic',
        q: lang === 'zh' ? '逻辑题：为何“粘合期”出现巨量震荡（非突破）通常是坏事？' : 'Logic: Why Huge Volatility/Volume during "Adhesion" (no breakout) usually bad?',
        options: [
            lang === 'zh' ? '说明主力在吸筹' : 'MM Accumulating',
            lang === 'zh' ? '说明分歧巨大，主力可能在借机出货' : 'Huge divergence, MM likely dumping',
            lang === 'zh' ? '说明即将暴涨' : 'Launch imminent',
            lang === 'zh' ? '能量守恒' : 'Energy Conservation'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '根据“地量法则”，粘合期必须缩量静默。放量滞涨意味着有人在拼命卖。' : 'Adhesion requires silence (Low Vol). High vol without price rise = Distribution.'
    },
    {
        id: 48, type: 'strategy',
        q: lang === 'zh' ? '“时间止损”逻辑：若股价在买入后10天内既不涨也不跌（横盘），应如何操作？' : 'Time Stop: Price flat 10 days after buy. Action?',
        options: [
            lang === 'zh' ? '继续死守等待' : 'Hold and wait forever',
            lang === 'zh' ? '离场 (机会成本过高)' : 'Exit (Opportunity Cost too high)',
            lang === 'zh' ? '加仓摊低成本' : 'Add more',
            lang === 'zh' ? '忽略' : 'Ignore'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '资金有时间价值。长时间未脱离成本区说明判断时机错误，应释放资金。' : 'Capital has time value. Stagnation means wrong timing. Free up the capital.'
    },
    {
        id: 49, type: 'logic',
        q: lang === 'zh' ? '逻辑题：为何主力在主升浪前常制造“深坑”（挖坑洗盘）？' : 'Logic: Why MM creates a "Pit" (Washout) before Main Wave?',
        options: [
            lang === 'zh' ? '主力资金不足' : 'MM out of money',
            lang === 'zh' ? '制造恐慌清洗浮筹，同时降低自身拉升成本' : 'Create panic to wash weak hands & lower own cost',
            lang === 'zh' ? '技术图形坏了' : 'Chart broken',
            lang === 'zh' ? '这是熊市信号' : 'Bear signal'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '利用散户的恐惧心理，逼出最后的带血筹码，让车更轻。' : 'Using fear to force out final weak holders, making the ascent lighter.'
    },
    {
        id: 50, type: 'concept',
        q: lang === 'zh' ? '均线系统中的“13, 21, 34, 55”参数来自于？' : 'MA parameters "13, 21, 34, 55" come from?',
        options: [
            lang === 'zh' ? '随机数' : 'Random',
            lang === 'zh' ? '斐波那契数列 (自然生长规律)' : 'Fibonacci Sequence (Natural Growth)',
            lang === 'zh' ? '机构专用密码' : 'Inst. Password',
            lang === 'zh' ? '江恩理论' : 'Gann'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '斐波那契均线更能贴合市场自然的波动韵律，捕捉隐性支撑。' : 'Fib MAs fit natural market rhythms better than integer MAs.'
    },
    {
        id: 51, type: 'strategy',
        q: lang === 'zh' ? '“条件单” (Ulysses Pact) 的主要作用是克服哪种生理反应？' : 'Conditional Orders (Ulysses Pact) overcome which physio response?',
        options: [
            lang === 'zh' ? '贪婪' : 'Greed',
            lang === 'zh' ? '杏仁核劫持导致的“冻结”' : '"Freeze" caused by Amygdala Hijack',
            lang === 'zh' ? '困倦' : 'Sleepiness',
            lang === 'zh' ? '兴奋' : 'Excitement'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '大跌时大脑会空白（冻结）。条件单能绕过大脑，机械执行纪律。' : 'Crash freezes the brain. Auto-orders bypass the brain to ensure execution.'
    },
    {
        id: 52, type: 'pattern',
        q: lang === 'zh' ? '“空中加油”形态中，回踩哪个均线不破是关键？' : 'In "Air Refueling", key support is usually?',
        options: [
            lang === 'zh' ? 'MA5' : 'MA5',
            lang === 'zh' ? 'MA60 (决策线) 或 MA30' : 'MA60 (Decision) or MA30',
            lang === 'zh' ? 'MA250' : 'MA250',
            lang === 'zh' ? '跌破所有均线' : 'Break all'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '中长期均线（30/60）是趋势的防守线。回踩不破说明趋势未坏。' : 'Mid-term MAs defend the trend. Holding them keeps the trend alive.'
    },
    {
        id: 53, type: 'philosophy',
        q: lang === 'zh' ? '根据“农夫理论” (Identity Shift)，跌破5日线意味着什么？' : 'Farmer Theory: Breaking MA5 means?',
        options: [
            lang === 'zh' ? '失去了一个好股票' : 'Lost a good stock',
            lang === 'zh' ? '冬天来了，必须收割作物 (无论是否成熟)' : 'Winter is here. Must harvest (Profit or not)',
            lang === 'zh' ? '加仓机会' : 'Buy dip',
            lang === 'zh' ? '运气不好' : 'Bad luck'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '不收割，作物就会烂在地里（利润回撤）。这是自然规律，无关个人情感。' : 'Harvest or rot. It is nature, not emotion.'
    },
    {
        id: 54, type: 'logic',
        q: lang === 'zh' ? '逻辑题：一根放量大阳线突破，但收盘留下了长长的上影线 (射击之星)。次日低开。怎么看？' : 'Logic: Vol Breakout but Long Upper Shadow (Shooting Star). Next day Gap Down. View?',
        options: [
            lang === 'zh' ? '仙人指路 (买入)' : 'Bullish Guide (Buy)',
            lang === 'zh' ? '多头力竭，主力诱多 (离场)' : 'Bulls exhausted, Trap (Exit)',
            lang === 'zh' ? '正常洗盘' : 'Normal washout',
            lang === 'zh' ? '无意义' : 'Meaningless'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '突破失败，抛压极大。次日低开确认了空头占据优势。' : 'Failed breakout, huge selling. Gap down confirms bears won.'
    },
    {
        id: 55, type: 'psychology',
        q: lang === 'zh' ? '为什么“微仓位” (100股) 训练能治疗“分析瘫痪”？' : 'Why "Micro Pos" (100 shares) cures "Analysis Paralysis"?',
        options: [
            lang === 'zh' ? '能赚很多钱' : 'Makes money',
            lang === 'zh' ? '降低了恐惧阈值，对“扣动扳机”进行神经脱敏' : 'Lowers fear threshold, desensitizing the "Trigger Pull"',
            lang === 'zh' ? '不需要分析' : 'No analysis',
            lang === 'zh' ? '运气好' : 'Luck'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '通过无痛的重复操作，重建大脑的行动回路，克服对失败的恐惧。' : 'Painless repetition rewires the brain to act without fear.'
    },
    {
        id: 56, type: 'logic',
        q: lang === 'zh' ? '本模型认为“预测市场”重要吗？' : 'Does this model value "Prediction"?',
        options: [
            lang === 'zh' ? '非常重要，必须预测准' : 'Very important',
            lang === 'zh' ? '不重要。重要的是识别当下的“确认信号”并跟随' : 'No. Identifying current "Confirmed Signals" & Following is key',
            lang === 'zh' ? '需要内幕消息' : 'Need insider info',
            lang === 'zh' ? '靠运气' : 'Luck'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '五线开花是跟随系统，不是预测系统。应对重于预测。' : 'We follow the structure, we don\'t guess the future. Reaction > Prediction.'
    },
    {
        id: 57, type: 'chip',
        q: lang === 'zh' ? '“双峰填谷”现象：上下两个筹码峰逐渐消失，中间形成一个新的密集峰。这代表？' : '"Dual Peaks Fill Valley": Top/Bottom peaks vanish, Mid peak forms. Means?',
        options: [
            lang === 'zh' ? '出货' : 'Distribution',
            lang === 'zh' ? '筹码在新的价格区间完成了充分换手 (新平台确立)' : 'Full turnover at new price level (New Base Established)',
            lang === 'zh' ? '崩盘' : 'Crash',
            lang === 'zh' ? '没有意义' : 'Meaningless'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '这是成本的重新通过一。若随后的方向向上，则是强有力的支撑。' : 'Cost unification. A strong base if trend goes up.'
    },
    {
        id: 58, type: 'strategy',
        q: lang === 'zh' ? '关于本指南的“分仓止盈”，哪项描述符合“神经生物学妥协”？' : 'Which fits "Neuro Compromise" in Scaling Out?',
        options: [
            lang === 'zh' ? '全部卖出以消除恐惧' : 'Sell All',
            lang === 'zh' ? '卖一半留一半：既安抚了杏仁核(恐惧)，又满足了纹状体(贪婪)' : 'Sell Half/Hold Half: Soothe Amygdala(Fear) & Satisfy Striatum(Greed)',
            lang === 'zh' ? '一股不卖' : 'Hold All',
            lang === 'zh' ? '随机卖' : 'Random'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '无论涨跌，大脑都能找到“赢”的感觉，从而避免后悔。' : 'Win-win for the brain regardless of outcome, eliminating regret.'
    },
    {
        id: 59, type: 'pattern',
        q: lang === 'zh' ? '在“系统演进”中，如何应对算法交易制造的“瞬间跌破”噪音？' : 'How to handle Algo "Flash Crash" noise?',
        options: [
            lang === 'zh' ? '立刻卖出' : 'Sell limit',
            lang === 'zh' ? '改为“收盘价确认”或使用自适应均线(AMA)' : 'Use "Close Price Confirm" or Adaptive MA (AMA)',
            lang === 'zh' ? '不看盘' : 'Ignore',
            lang === 'zh' ? '加杠杆' : 'Leverage'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '盘中刺破常是诱空，收盘价和自适应参数能过滤高频噪音。' : 'Intraday spikes are often traps. Close price filters HFT noise.'
    },
    {
        id: 60, type: 'logic',
        q: lang === 'zh' ? '终极逻辑：为什么“五线粘合”必然会导致变盘？' : 'Ultimate Logic: Why "Adhesion" MUST lead to a move?',
        options: [
            lang === 'zh' ? '主力没钱了' : 'MM broke',
            lang === 'zh' ? '熵值降至最低 (能量守恒)。低波动的平衡极其脆弱，必然被打破。' : 'Entropy minimal (Energy Conservation). Fragile balance must break.',
            lang === 'zh' ? '散户都在买' : 'Retail buying',
            lang === 'zh' ? '交易所规定' : 'Exchange rules'
        ],
        correct: 1,
        explanation: lang === 'zh' ? '物理学定律：能量不会消失。极度压缩的波动率（粘合）必然转化为剧烈的趋势释放。' : 'Physics: Energy is conserved. Compressed volatility must explode into trend.'
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
    subtitle: lang === 'zh' ? '验证你的交易体系与执行力' : 'Verify Your System & Execution',
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
      strategy: lang === 'zh' ? '策略风控' : 'Strategy',
      logic: lang === 'zh' ? '逻辑推理' : 'Logic',
      philosophy: lang === 'zh' ? '哲学思维' : 'Philosophy',
      chip: lang === 'zh' ? '筹码结构' : 'Chip Structure'
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
    const passed = score >= 15; // Hardcoded 15 threshold
    
    if (percentage >= 90) return { t: t.perfect, c: 'text-green-500', icon: Trophy, passed };
    if (passed) return { t: t.pass, c: 'text-blue-500', icon: CheckCircle2, passed };
    return { t: t.fail, c: 'text-red-500', icon: XCircle, passed };
  };

  const IconMap = {
    concept: BookOpen,
    pattern: Target,
    indicator: AlertCircle,
    psychology: Brain,
    strategy: Shield,
    logic: Brain,
    philosophy: Sparkles,
    chip: Target
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
  // @ts-ignore
  const QIcon = IconMap[q.type] || Target;

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
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">
                            {selectedOption === q.correct ? '🎉 Correct!' : '🤔 Explanation'}
                        </div>
                        <p className="text-slate-800 dark:text-slate-200 font-medium">
                            {q.explanation}
                        </p>
                    </div>
                    <button 
                        onClick={nextQuestion}
                        className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2 whitespace-nowrap"
                    >
                        {currentQ < questions.length - 1 ? t.next : t.finish} <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        )}
    </Card>
  );
};
