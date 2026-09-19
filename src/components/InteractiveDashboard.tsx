import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, TrendingUp, AlertTriangle, CheckCircle2, Sparkles, Sliders, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

type DashboardTab = 'monthly-report' | 'decision-support';
type Scenario = 'base' | 'collections' | 'hiring';

export const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('monthly-report');
  const [activeScenario, setActiveScenario] = useState<Scenario>('base');
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

  // Data for Monthly Report
  const monthlyData = [
    { month: 'Aug', cashIn: 150, cashOut: 120 },
    { month: 'Sep', cashIn: 162, cashOut: 134 },
    { month: 'Oct', cashIn: 180, cashOut: 145 },
    { month: 'Nov', cashIn: 194, cashOut: 155 },
    { month: 'Dec', cashIn: 208, cashOut: 166 },
    { month: 'Jan', cashIn: 220, cashOut: 176 },
  ];

  // Scenario data for Decision Support
  const scenarioData: Record<Scenario, { runway: string; netCash: string; label: string; note: string; cashIn: number[]; cashOut: number[] }> = {
    base: {
      runway: '4.2 months',
      netCash: '+AED 44K / mo',
      label: 'Base Operations',
      note: 'Current organic trajectory with 6.4% month-on-month cash accumulation.',
      cashIn: [150, 162, 180, 194, 208, 220],
      cashOut: [120, 134, 145, 155, 166, 176],
    },
    collections: {
      runway: '5.0 months',
      netCash: '+AED 82K in Q3',
      label: 'Accelerated Collections',
      note: 'Targeting 2 overdue invoices (>60 days) injects AED 38K immediate liquidity.',
      cashIn: [150, 188, 205, 210, 222, 235],
      cashOut: [120, 134, 145, 155, 166, 176],
    },
    hiring: {
      runway: '3.6 months',
      netCash: '+AED 20K / mo',
      label: 'Add 2 Team Members',
      note: 'Expanding team adds AED 24K fixed monthly payroll; runway remains above 3-month safety threshold.',
      cashIn: [150, 162, 185, 205, 225, 245],
      cashOut: [120, 134, 169, 179, 190, 200],
    },
  };

  // SVG Chart Dimensions
  const chartHeight = 180;
  const chartWidth = 520;
  const paddingX = 40;
  const paddingY = 25;
  const maxY = 260;

  const getCoordinates = (val: number, index: number) => {
    const x = paddingX + (index * (chartWidth - paddingX * 2)) / (months.length - 1);
    const y = chartHeight - paddingY - (val / maxY) * (chartHeight - paddingY * 2);
    return { x, y };
  };

  const currentDataset = activeTab === 'monthly-report' 
    ? {
        cashIn: monthlyData.map(d => d.cashIn),
        cashOut: monthlyData.map(d => d.cashOut),
      }
    : {
        cashIn: scenarioData[activeScenario].cashIn,
        cashOut: scenarioData[activeScenario].cashOut,
      };

  const cashInPoints = currentDataset.cashIn.map((val, idx) => getCoordinates(val, idx));
  const cashOutPoints = currentDataset.cashOut.map((val, idx) => getCoordinates(val, idx));

  const cashInPath = cashInPoints.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x},${pt.y}`, '');
  const cashOutPath = cashOutPoints.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x},${pt.y}`, '');

  return (
    <div className="mb-20">
      <ScrollReveal>
        {/* Main Dashboard Window Container with Clean Drop Shadow & Border */}
        <div className="bg-white rounded-3xl border border-[#E5EAF2] shadow-[0_15px_50px_rgba(19,33,93,0.07)] overflow-hidden transition-all duration-300">
          
          {/* Body Section with Tab Transition */}
          <div className="p-6 md:p-10">
            {/* Header with Switcher matching screenshot layout */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#13215D] tracking-tight mb-2">
                  {activeTab === 'monthly-report' ? 'Cash flow and runway' : 'Decision Support & Strategic Roadmap'}
                </h3>
                <p className="text-sm md:text-base text-[#667085] font-normal mb-3">
                  {activeTab === 'monthly-report'
                    ? 'Understand what is coming in, what is going out, and how much time your cash provides.'
                    : 'Translating month-end variances into specific commercial actions that protect cash and support sustainable growth.'}
                </p>
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${
                  activeTab === 'monthly-report'
                    ? 'bg-[#1acbc9]/15 text-[#13215D] border-[#1acbc9]/25'
                    : 'bg-[#142360] text-white border-[#142360]'
                }`}>
                  {activeTab === 'monthly-report' ? (
                    'CASH VISIBILITY'
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-[#1acbc9]" />
                      ACTION-ORIENTED FINANCE
                    </>
                  )}
                </div>
              </div>

              {/* Integrated Switcher */}
              <div className="inline-flex p-1 bg-[#EEF2FB] rounded-full border border-[#E5EAF2] text-xs font-bold relative shrink-0">
                <button
                  onClick={() => setActiveTab('monthly-report')}
                  className={`relative z-10 px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                    activeTab === 'monthly-report' ? 'text-[#13215D]' : 'text-[#667085] hover:text-[#13215D]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#1acbc9]"></span>
                  Monthly Report
                </button>

                <button
                  onClick={() => setActiveTab('decision-support')}
                  className={`relative z-10 px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                    activeTab === 'decision-support' ? 'text-white' : 'text-[#667085] hover:text-[#13215D]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Decision Support
                </button>

                <motion.div
                  className={`absolute inset-y-1 rounded-full ${
                    activeTab === 'monthly-report'
                      ? 'bg-white shadow-xs left-1 right-1/2'
                      : 'bg-[#142360] shadow-xs left-1/2 right-1'
                  }`}
                  layout
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'monthly-report' ? (
                /* =================== TAB 1: MONTHLY REPORT =================== */
                <motion.div
                  key="monthly-report"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top 3 Metric Cards matching screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                    
                    {/* Card 1: Cash Balance */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5EAF2] shadow-2xs hover:shadow-sm transition-all">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#667085] mb-2">
                        CASH BALANCE
                      </p>
                      <div className="text-3xl md:text-4xl font-black text-[#13215D] tracking-tight mb-2">
                        AED 238K
                      </div>
                      <div className="flex items-center text-xs font-bold text-[#148377] gap-1">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>↑ 6.4% this month</span>
                      </div>
                    </div>

                    {/* Card 2: Runway */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5EAF2] shadow-2xs hover:shadow-sm transition-all">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#667085] mb-2">
                        RUNWAY
                      </p>
                      <div className="text-3xl md:text-4xl font-black text-[#13215D] tracking-tight mb-2">
                        4.2 months
                      </div>
                      <div className="text-xs font-bold text-[#148377]">
                        payroll covered
                      </div>
                    </div>

                    {/* Card 3: Next 30 Days */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5EAF2] shadow-2xs hover:shadow-sm transition-all">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#667085] mb-2">
                        NEXT 30 DAYS
                      </p>
                      <div className="text-3xl md:text-4xl font-black text-[#13215D] tracking-tight mb-2">
                        AED 64K
                      </div>
                      <div className="text-xs font-bold text-[#d97706]">
                        committed outflows
                      </div>
                    </div>

                  </div>

                  {/* Lower 2 Panels: Cash Movement & Receivables Ageing */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Lower Left: Cash Movement Chart */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-7 border border-[#E5EAF2] shadow-2xs flex flex-col justify-between">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#13215D]">
                            CASH MOVEMENT
                          </h4>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-[#667085]">
                          <span className="hidden sm:inline uppercase text-[10px] tracking-wider text-[#667085]/80">AED THOUSANDS · NEXT 6 MONTHS</span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1acbc9]"></span>
                            <span>Cash in</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93b]"></span>
                            <span>Cash out</span>
                          </div>
                        </div>
                      </div>

                      {/* SVG Line Chart */}
                      <div className="relative w-full h-[180px] select-none">
                        {/* Y-axis grid markers */}
                        <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[10px] font-medium text-[#667085]/60 pr-2">
                          <span>250</span>
                          <span>200</span>
                          <span>150</span>
                          <span>100</span>
                          <span>50</span>
                        </div>

                        <svg className="w-full h-full pl-6 overflow-visible" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                          {/* Horizontal dotted grid lines */}
                          {[50, 100, 150, 200, 250].map((level) => {
                            const y = chartHeight - paddingY - (level / maxY) * (chartHeight - paddingY * 2);
                            return (
                              <line
                                key={level}
                                x1={paddingX}
                                y1={y}
                                x2={chartWidth - paddingX}
                                y2={y}
                                stroke="#E5EAF2"
                                strokeDasharray="3 3"
                                strokeWidth="1"
                              />
                            );
                          })}

                          {/* Cash Out Line (Amber) */}
                          <motion.path
                            d={cashOutPath}
                            fill="none"
                            stroke="#e5a93b"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                          />

                          {/* Cash In Line (Teal) */}
                          <motion.path
                            d={cashInPath}
                            fill="none"
                            stroke="#1acbc9"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                          />

                          {/* Node Dots on Cash Out Line */}
                          {cashOutPoints.map((pt, idx) => (
                            <circle
                              key={`out-${idx}`}
                              cx={pt.x}
                              cy={pt.y}
                              r={hoveredMonth === idx ? 5.5 : 4}
                              fill="#e5a93b"
                              className="transition-all duration-150 cursor-pointer"
                            />
                          ))}

                          {/* Node Dots on Cash In Line */}
                          {cashInPoints.map((pt, idx) => (
                            <circle
                              key={`in-${idx}`}
                              cx={pt.x}
                              cy={pt.y}
                              r={hoveredMonth === idx ? 5.5 : 4}
                              fill="#1acbc9"
                              className="transition-all duration-150 cursor-pointer"
                            />
                          ))}
                        </svg>

                        {/* X-axis Month Labels */}
                        <div className="flex justify-between pl-10 pr-4 mt-2 text-[11px] font-bold text-[#667085]">
                          {months.map((m, idx) => (
                            <button
                              key={m}
                              onMouseEnter={() => setHoveredMonth(idx)}
                              onMouseLeave={() => setHoveredMonth(null)}
                              className={`transition-colors ${hoveredMonth === idx ? 'text-[#13215D]' : ''}`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tooltip banner when hovering a month */}
                      {hoveredMonth !== null && (
                        <div className="mt-4 p-2.5 rounded-xl bg-[#EEF2FB] border border-[#E5EAF2] text-[11px] font-semibold text-[#13215D] flex justify-between items-center">
                          <span>Month: {months[hoveredMonth]}</span>
                          <span className="text-[#148377]">Cash In: AED {monthlyData[hoveredMonth].cashIn}K</span>
                          <span className="text-[#d97706]">Cash Out: AED {monthlyData[hoveredMonth].cashOut}K</span>
                          <span className="font-bold">Net: +AED {monthlyData[hoveredMonth].cashIn - monthlyData[hoveredMonth].cashOut}K</span>
                        </div>
                      )}
                    </div>

                    {/* Lower Right: Receivables Ageing matching screenshot */}
                    <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-7 border border-[#E5EAF2] shadow-2xs flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#13215D] mb-5">
                          RECEIVABLES AGEING
                        </h4>

                        <div className="space-y-4">
                          {/* Current: AED 124K */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#13215D] mb-1.5">
                              <span>Current</span>
                              <span>AED 124K</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#F0F3F8] rounded-full overflow-hidden">
                              <div className="h-full bg-[#1acbc9] rounded-full w-[85%] transition-all duration-500"></div>
                            </div>
                          </div>

                          {/* 1-30 days: AED 48K */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#13215D] mb-1.5">
                              <span>1-30 days</span>
                              <span>AED 48K</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#F0F3F8] rounded-full overflow-hidden">
                              <div className="h-full bg-[#1acbc9]/70 rounded-full w-[35%] transition-all duration-500"></div>
                            </div>
                          </div>

                          {/* 31-60 days: AED 27K */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#13215D] mb-1.5">
                              <span>31-60 days</span>
                              <span>AED 27K</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#F0F3F8] rounded-full overflow-hidden">
                              <div className="h-full bg-[#e5a93b]/70 rounded-full w-[20%] transition-all duration-500"></div>
                            </div>
                          </div>

                          {/* 60+ days: AED 11K */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#13215D] mb-1.5">
                              <span>60+ days</span>
                              <span>AED 11K</span>
                            </div>
                            <div className="h-2.5 w-full bg-[#F0F3F8] rounded-full overflow-hidden">
                              <div className="h-full bg-red-400 rounded-full w-[10%] transition-all duration-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Alert Box matching screenshot */}
                      <div className="mt-6 p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 text-xs font-bold text-[#92400E]">
                          <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
                          <span>Follow up on 2 invoices over 60 days</span>
                        </div>
                        <button
                          onClick={() => setActiveTab('decision-support')}
                          className="text-[11px] font-extrabold text-[#13215D] hover:underline flex items-center gap-1 shrink-0"
                        >
                          Take Action <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ) : (
                /* =================== TAB 2: DECISION SUPPORT =================== */
                <motion.div
                  key="decision-support"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top 3 Action Cards (Connected directly to the monthly numbers) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                    
                    {/* Action 1: Cash Recovery */}
                    <div className="bg-white rounded-2xl p-6 border-2 border-[#1acbc9]/40 shadow-xs relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#148377]">
                          ACTION: AGING RECEIVABLES
                        </p>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Immediate</span>
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-[#13215D] tracking-tight mb-2">
                        Recover AED 38K
                      </div>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        Expediting 2 overdue accounts extends working capital runway by <strong>+0.8 months</strong> without outside financing.
                      </p>
                    </div>

                    {/* Action 2: Headcount Capacity */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5EAF2] shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#142360]">
                          ACTION: HIRING PRUDENCE
                        </p>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">Planned Q4</span>
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-[#13215D] tracking-tight mb-2">
                        Afford 1-2 Hires
                      </div>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        At 4.2 months runway, adding AED 24K fixed payroll keeps cash reserve above the safe 3.5-month threshold.
                      </p>
                    </div>

                    {/* Action 3: Margin Defense */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5EAF2] shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#d97706]">
                          ACTION: PRICING GOVERNANCE
                        </p>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700">In Progress</span>
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-[#13215D] tracking-tight mb-2">
                        +4.5% Rate Review
                      </div>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        Vendor cost adjustments lowered gross margin by 1.1 points. A selective price adjustment restores 35% target margin.
                      </p>
                    </div>

                  </div>

                  {/* Decision Simulation Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Scenario Planner */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-7 border border-[#E5EAF2] shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#13215D] flex items-center gap-2">
                            <Sliders className="w-3.5 h-3.5 text-[#142360]" />
                            SCENARIO STRESS TEST
                          </h4>
                          <span className="text-[11px] font-semibold text-[#667085]">Select an assumption</span>
                        </div>

                        {/* Scenario Switcher Tabs */}
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {(['base', 'collections', 'hiring'] as Scenario[]).map((sc) => (
                            <button
                              key={sc}
                              onClick={() => setActiveScenario(sc)}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                activeScenario === sc
                                  ? 'bg-[#142360] text-white border-[#142360] shadow-sm'
                                  : 'bg-[#F6F8FC] hover:bg-white text-[#13215D] border-[#E5EAF2]'
                              }`}
                            >
                              <div className="text-[11px] font-extrabold uppercase mb-1">{scenarioData[sc].label}</div>
                              <div className={`text-xs font-bold ${activeScenario === sc ? 'text-[#1acbc9]' : 'text-[#667085]'}`}>
                                {scenarioData[sc].runway}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Scenario Narrative Box */}
                        <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#E5EAF2] mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#13215D]">{scenarioData[activeScenario].label} Impact</span>
                            <span className="text-xs font-bold text-[#148377]">{scenarioData[activeScenario].netCash}</span>
                          </div>
                          <p className="text-xs text-[#667085] leading-relaxed">
                            {scenarioData[activeScenario].note}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E5EAF2] flex justify-between items-center text-xs">
                        <span className="text-[#667085]">Forward 6-Month Projected Runway:</span>
                        <span className="font-extrabold text-[#13215D] text-sm">{scenarioData[activeScenario].runway}</span>
                      </div>
                    </div>

                    {/* Lower Right: Decision Support Checklist */}
                    <div className="lg:col-span-5 bg-[#13215D] text-white rounded-2xl p-6 md:p-7 shadow-xl shadow-black/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                            MONTHLY DECISION CADENCE
                          </h4>
                          <span className="text-[10px] font-bold text-[#1acbc9] bg-white/10 px-2.5 py-0.5 rounded-full">
                            July Action Plan
                          </span>
                        </div>

                        <ul className="space-y-3.5 mb-6">
                          <li className="flex items-start gap-3 text-xs font-medium leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#1acbc9] shrink-0 mt-0.5" />
                            <span>Notify commercial sales team on 2 invoices &gt;60 days to collect AED 11K</span>
                          </li>
                          <li className="flex items-start gap-3 text-xs font-medium leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#1acbc9] shrink-0 mt-0.5" />
                            <span>Confirm Q4 hiring budget with 4.2-month runway guardrail</span>
                          </li>
                          <li className="flex items-start gap-3 text-xs font-medium leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#1acbc9] shrink-0 mt-0.5" />
                            <span>Benchmark vendor rate increases to insulate product gross margin</span>
                          </li>
                          <li className="flex items-start gap-3 text-xs font-medium leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#1acbc9] shrink-0 mt-0.5" />
                            <span>Review payment gateway deductions vs. bank settle amounts</span>
                          </li>
                        </ul>
                      </div>

                      <a
                        href="#health-check-form"
                        className="w-full bg-white text-[#13215D] hover:bg-[#EEF2FB] py-3 rounded-full text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                      >
                        Review Your Business Decisions <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sub-footer Note exactly as shown in the screenshot */}
            <div className="mt-8 pt-4 border-t border-[#E5EAF2] flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-[#667085]">
              <p>Illustrative sample data for demonstration purposes</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1acbc9]"></span> Reconciled Cash
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#142360]"></span> Monthly Decision Support
                </span>
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>
    </div>
  );
};
