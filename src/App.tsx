/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  HeartPulse, 
  Plane, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  Activity, 
  Zap,
  Navigation,
  AlertTriangle,
  TrendingUp,
  Volume2,
  VolumeX
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Scenes ---

const IntroScene = () => (
  <div className="relative flex flex-col items-center justify-center h-full text-slate-900 bg-slate-50 p-8 text-center overflow-hidden">
    {/* Cinematic background elements */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 5, 0],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent"
    />
    
    <div className="mb-6 z-10">
      <div className="relative inline-block mb-6">
        <ShieldCheck size={100} className="text-blue-600 mx-auto" />
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-blue-400 blur-2xl opacity-20"
        />
      </div>
      <h1 className="text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
        智保视界
      </h1>
      <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] w-12 bg-blue-600/30" />
        <p className="text-sm text-blue-600 font-medium tracking-[0.3em] uppercase">动态保障的未来</p>
        <div className="h-[1px] w-12 bg-blue-600/30" />
      </div>
    </div>

    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: "200px" }}
      transition={{ delay: 1, duration: 1.5 }}
      className="absolute bottom-24 h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent"
    />
  </div>
);

const UBICarScene = () => {
  const [speed, setSpeed] = useState(60);
  const [premium, setPremium] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = 40 + Math.random() * 60;
      setSpeed(newSpeed);
      // Premium goes up with speed
      setPremium(100 + (newSpeed - 40) * 0.8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full bg-white overflow-hidden p-8 flex flex-col justify-between">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="flex justify-between items-start z-10">
        <div>
          <h2 className="text-blue-600 font-mono text-sm tracking-widest mb-1 uppercase">产品 01</h2>
          <h3 className="text-3xl font-bold text-slate-900">UBI 车险</h3>
          <p className="text-slate-500 text-sm mt-1">基于驾驶行为的动态定价</p>
        </div>
        <div className="text-right">
          <div className="text-[21pt] text-slate-400 font-mono uppercase">实时保费</div>
          <div className="text-4xl font-mono text-blue-600 font-bold">¥{premium.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center gap-12 z-10">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle cx="128" cy="128" r="120" fill="none" stroke="#f1f5f9" strokeWidth="8" />
            <motion.circle 
              cx="128" cy="128" r="120" fill="none" stroke="#3b82f6" strokeWidth="8" 
              strokeDasharray="754"
              animate={{ strokeDashoffset: 754 - (speed / 120) * 754 }}
              transition={{ duration: 1 }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-5xl font-mono text-slate-900 font-bold">{Math.round(speed)}</span>
            <span className="text-xs text-slate-400 uppercase">km/h</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-64">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase">急刹车</span>
            </div>
            <div className="text-2xl font-mono text-slate-900">02 <span className="text-xs text-slate-400">次</span></div>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Navigation size={16} />
              <span className="text-xs font-bold uppercase">里程</span>
            </div>
            <div className="text-2xl font-mono text-slate-900">1,240 <span className="text-xs text-slate-400">公里</span></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 z-10">
        <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <Car className="text-blue-600 animate-pulse" />
        <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
           <motion.div 
            className="h-full bg-blue-500"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </div>
      </div>
    </div>
  );
};

const HealthScene = () => {
  return (
    <div className="relative h-full w-full bg-[#f8fafc] overflow-hidden p-8 flex flex-col justify-between">
      <div className="flex justify-between items-start z-10">
        <div>
          <h2 className="text-rose-500 font-mono text-sm tracking-widest mb-1 uppercase">产品 02</h2>
          <h3 className="text-3xl font-bold text-slate-900">个人健康险</h3>
          <p className="text-slate-500 text-sm mt-1">基于生活习惯的差异化费率</p>
        </div>
        <div className="bg-rose-50 border border-rose-100 px-4 py-2 rounded-full flex items-center gap-2">
          <HeartPulse className="text-rose-500" size={20} />
          <span className="text-rose-700 font-bold">健康评分: 88</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6 items-center z-10">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
        >
          <Activity className="text-blue-500 mb-4" size={32} />
          <span className="text-xs text-slate-400 uppercase font-bold mb-1">每日步数</span>
          <span className="text-3xl font-bold text-slate-900">12,450</span>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              className="h-full bg-blue-500"
            />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center scale-110 z-20"
        >
          <TrendingUp className="text-rose-500 mb-4" size={32} />
          <span className="text-xs text-slate-400 uppercase font-bold mb-1">保费折扣</span>
          <span className="text-4xl font-bold text-rose-600">-15%</span>
          <p className="text-[10px] text-slate-400 mt-2 text-center">基于过去30天的活动数据</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
        >
          <ShieldCheck className="text-emerald-500 mb-4" size={32} />
          <span className="text-xs text-slate-400 uppercase font-bold mb-1">睡眠质量</span>
          <span className="text-3xl font-bold text-slate-900">7h 45m</span>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              className="h-full bg-emerald-500"
            />
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between text-slate-400 text-xs border-t border-slate-100 pt-4">
        <span>正在同步健康数据...</span>
        <span>最后更新：刚刚</span>
      </div>
    </div>
  );
};

const DroneScene = () => {
  return (
    <div className="relative h-full w-full bg-cyan-50 overflow-hidden p-8 flex flex-col justify-between">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="flex justify-between items-start z-10">
        <div>
          <h2 className="text-cyan-600 font-mono text-sm tracking-widest mb-1 uppercase">产品 03</h2>
          <h3 className="text-3xl font-bold text-slate-900">低空科技险</h3>
          <p className="text-slate-500 text-sm mt-1">基于场景的风险定价</p>
        </div>
        <div className="text-right">
          <div className="text-[21pt] text-slate-400 font-mono uppercase">当前风险等级</div>
          <div className="flex items-center gap-2 justify-end">
            <AlertTriangle className="text-amber-600" size={20} />
            <span className="text-2xl font-mono text-amber-600 font-bold">中等</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center z-10">
        <div className="relative w-[500px] h-[280px] border border-cyan-200 rounded-xl bg-white/60 backdrop-blur-sm overflow-hidden shadow-sm -translate-y-12">
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Plane size={64} className="text-cyan-600" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-600/20 blur-sm rounded-full" />
            </motion.div>
          </div>
          
          {/* Trajectory lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path 
              d="M 50 150 Q 150 50 250 150 T 450 150"
              fill="none"
              stroke="rgba(8, 145, 178, 0.2)"
              strokeWidth="2"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </svg>

          {/* Risk Zones */}
          <div className="absolute top-4 right-4 bg-rose-50 border border-rose-200 p-2 rounded text-[10px] text-rose-600 font-bold uppercase">
            高密度区域
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-4 gap-4">
          {[
            { label: '高度', val: '120m' },
            { label: '风速', val: '12km/h' },
            { label: '电量', val: '84%' },
            { label: '信号', val: '强' }
          ].map((item, i) => (
            <div key={i} className="bg-white/80 border border-slate-100 p-2 rounded shadow-sm">
              <div className="text-[10px] text-slate-400 uppercase">{item.label}</div>
              <div className="text-sm font-bold text-slate-700">{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-cyan-600 text-xs z-10">
        <div className="w-2 h-2 bg-cyan-600 rounded-full animate-ping" />
        <span>追踪飞行轨迹 ID: #DR-9921</span>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [bgMusic] = useState(() => {
    const audio = new Audio("https://assets.mixkit.co/music/preview/mixkit-technology-corporate-98.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.onerror = (e) => {
      console.error("Audio element error:", e);
      // Fallback or silent failure
    };
    return audio;
  });

  const scenes = [
    { 
      id: 'intro', 
      component: <IntroScene />,
      narration: "欢迎来到智保视界，探索动态保险的未来。"
    },
    { 
      id: 'car', 
      component: <UBICarScene />,
      narration: "UBI 车险，基于驾驶行为实时定价，让安全更有价值。"
    },
    { 
      id: 'health', 
      component: <HealthScene />,
      narration: "个人健康险，同步生活习惯，让健康换取折扣。"
    },
    { 
      id: 'drone', 
      component: <DroneScene />,
      narration: "低空科技险，精准评估场景风险，守护科技创新。"
    },
  ];

  // Background Music Control
  useEffect(() => {
    if (!isMuted && isPlaying) {
      bgMusic.play().catch(e => console.log("Audio play blocked", e));
    } else {
      bgMusic.pause();
    }
    return () => bgMusic.pause();
  }, [isMuted, isPlaying, bgMusic]);

  // Voice Narration Logic
  useEffect(() => {
    if (isMuted || !isPlaying) {
      window.speechSynthesis.cancel();
      return;
    }

    const speak = () => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(scenes[currentScene].narration);
      utterance.lang = 'zh-CN';
      utterance.rate = 1.1;
      utterance.pitch = 1;
      
      // Duck background music volume during narration
      bgMusic.volume = 0.1;
      
      utterance.onend = () => {
        bgMusic.volume = 0.3;
      };

      // Try to find a good Chinese voice
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const zhVoice = voices.find(v => v.lang.includes('zh') && v.name.includes('Google')) || 
                        voices.find(v => v.lang.includes('zh'));
        if (zhVoice) utterance.voice = zhVoice;
        window.speechSynthesis.speak(utterance);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = setVoice;
      } else {
        setVoice();
      }
    };

    const timeout = setTimeout(speak, 500);
    return () => {
      clearTimeout(timeout);
      window.speechSynthesis.cancel();
      bgMusic.volume = 0.3;
    };
  }, [currentScene, isMuted, isPlaying, bgMusic]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, currentScene === 0 ? 4500 : 7500); // 4.5s for intro, 7.5s for others

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, scenes.length]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={scenes[currentScene].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {scenes[currentScene].component}
          </motion.div>
        </AnimatePresence>

        {/* Play Button Overlay when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-blue-600"
            >
              <Play size={48} fill="currentColor" />
            </button>
          </div>
        )}


        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-50">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            
            <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <button 
              onClick={() => setCurrentScene(0)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <RotateCcw size={20} />
            </button>

            <div className="text-slate-600 font-mono text-xs">
              00:{String(currentScene * 7).padStart(2, '0')} / 00:30
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentScene(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentScene === i ? "bg-blue-500 w-8" : "bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute top-6 right-6 flex items-center gap-2 opacity-40 pointer-events-none z-50">
          <div className="text-[10px] font-bold tracking-widest text-slate-900 uppercase">InsureVision AI</div>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
