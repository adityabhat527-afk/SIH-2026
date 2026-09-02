import React from 'react';
import type { PageId } from '../types';
import { ThreeHeroMesh } from '../components/landing/ThreeHeroMesh';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  Cpu,
  Waves,
  Mountain,
  Play,
  Compass,
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: PageId) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden pb-20">
      {/* Background Cyber Glow Grids (Emerald & Red Neon Accents) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      </div>

      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-emerald-500/20">
            <Shield className="w-4 h-4" />
          </div>
          <span className="text-lg font-black text-white font-display">
            Disaster<span className="text-emerald-400">Shield</span> AI
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">Live Telemetry: <strong className="text-emerald-400">ONLINE</strong></span>
        </div>

        <button
          onClick={() => onNavigate('login')}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition flex items-center gap-2"
        >
          <span>Launch Operations Platform</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </header>

      {/* STEP 1: Hero Section with 3D Canvas & Kinetic Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Kinetic Headlines & Reveal Cuts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              AI + IoT MULTI-HAZARD EARLY WARNING
            </div>

            {/* High-Impact Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none font-display text-white">
              PROTECT COMMUNITIES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                BEFORE DISASTER
              </span> <br />
              <span className="text-rose-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                STRIKES
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              DisasterShield AI uses Artificial Intelligence, IoT sensor network monitoring, environmental telemetry, and real-time hazard mapping to predict urban floods and landslides before impact.
            </p>

            {/* Kinetic Scroll Cuts */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                ⚡ Predict & Alert
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
                📡 Monitor IoT Telemetry
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
                💻 Code With Clarity
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('login')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all flex items-center gap-3 group"
              >
                <Play className="w-4 h-4 fill-current" />
                Launch Operations Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('dashboard')}
                className="px-8 py-4 rounded-xl glass-card text-slate-200 hover:text-white font-bold text-sm border border-slate-800 hover:border-emerald-500/40 transition flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                Preview Dashboard
              </button>
            </div>
          </motion.div>

          {/* Right Column: Dynamic 3D Hero Canvas (@react-three/fiber) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <ThreeHeroMesh />

            {/* Floating Telemetry Glassmorphism Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Global IoT Telemetry Mesh</h4>
                  <p className="text-[10px] text-slate-400">26 Active Hardware Nodes Connected</p>
                </div>
              </div>

              <div className="flex items-end gap-1 h-6 shrink-0">
                {[50, 90, 60, 100, 40, 80, 95, 60].map((val, idx) => (
                  <div
                    key={idx}
                    className="w-1 bg-emerald-400 rounded-full animate-pulse"
                    style={{
                      height: `${val}%`,
                      animationDelay: `${idx * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEP 1: Modular Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-slate-800 space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              DISASTER MANAGEMENT CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display text-white">
              Multi-Hazard Telemetry Engine
            </h2>
            <p className="text-sm text-slate-400">
              Integrated early warning protocols for urban flooding, slope movement, and citizen evacuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              onClick={() => onNavigate('dashboard')}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition cursor-pointer group"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Urban Flood Prediction Engine
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hydrodynamic stormwater drain monitoring, ultrasonic river crest measurement, and flood risk prediction over time.
              </p>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => onNavigate('dashboard')}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition cursor-pointer group"
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Landslide Instability Warning
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                TDR soil moisture saturation, MEMS dual-axis ground inclinometers, and micro-seismic slope collapse early warning.
              </p>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => onNavigate('dashboard')}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition cursor-pointer group"
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                IoT Telemetry & Evacuation Routes
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time open street maps marking dangerous waterlogged roads in red and safe shelter evacuation routes in green.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
