import React, { useState, useId } from 'react';
import { ArrowRight, Check, Printer, AlertTriangle, Phone, FileText } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Option {
  label: string;
  score: number;
  finding?: string;
}

interface Question {
  q: string;
  options: Option[];
}

interface Area {
  key: string;
  name: string;
  report_name: string;
  win: string;
  plan: [string, string, string];
  questions: Question[];
}

const QUIZ_CONFIG: {
  total: number;
  attention_below: number;
  strong_from: number;
  bands: Array<{ max: number; title: string; colour: 'amber' | 'teal'; text: string }>;
  levels: Array<{ min: number; label: string }>;
  timelines: Array<{ max_areas: number; text: string }>;
  next_wins: string[];
  next_plan: [string, string, string];
  areas: Area[];
} = {
  total: 10,
  attention_below: 80,
  strong_from: 85,
  bands: [
    {
      max: 39,
      title: 'At risk',
      colour: 'amber',
      text: 'Your numbers are working against you. A few structured fixes would make a big difference quickly.',
    },
    {
      max: 64,
      title: 'Developing',
      colour: 'teal',
      text: 'The basics are in place, but gaps in reporting and control are limiting what you can see.',
    },
    {
      max: 84,
      title: 'Well managed',
      colour: 'teal',
      text: 'A solid finance function. Closing the remaining gaps would give you full control.',
    },
    {
      max: 100,
      title: 'Strong financial control',
      colour: 'teal',
      text: 'Strong foundations. The next gains are in planning, forecasting and insight.',
    },
  ],
  levels: [
    { min: 80, label: 'Strong' },
    { min: 50, label: 'Developing' },
    { min: 0, label: 'At risk' },
  ],
  timelines: [
    { max_areas: 0, text: '1–2 weeks' },
    { max_areas: 2, text: '2–4 weeks' },
    { max_areas: 3, text: '4–6 weeks' },
    { max_areas: 5, text: '6–8 weeks' },
  ],
  next_wins: [
    'Model big decisions such as hiring or expansion against your real cash before you commit.',
    'Review pricing and margins by product or service every quarter.',
    'Set KPI targets for the year and track them in your monthly pack.',
  ],
  next_plan: [
    'Set KPI targets for the year',
    'Build a 12-month budget and rolling forecast',
    'Run a quarterly scenario review',
  ],
  areas: [
    {
      key: 'close',
      name: 'Bookkeeping & Close',
      report_name: 'Bookkeeping & Month-end Close',
      win: 'Set a fixed month-end close calendar with clear owners, aiming to close by day 5.',
      plan: [
        'Reconcile every bank and card account and clear any backlog',
        'Introduce a month-end checklist with owners and dates',
        'Close the books by day 5 every month',
      ],
      questions: [
        {
          q: 'How long does your month-end close usually take?',
          options: [
            { label: 'Within 5 days', score: 3 },
            { label: '6–10 days', score: 2, finding: 'Month-end close takes 6–10 days' },
            { label: 'More than 10 days', score: 1, finding: 'Month-end close takes more than 10 days' },
            { label: 'We don’t have a regular close', score: 0, finding: 'No regular month-end close' },
          ],
        },
        {
          q: 'How often are your bank and card accounts reconciled?',
          options: [
            { label: 'Weekly', score: 3 },
            { label: 'Monthly', score: 2, finding: 'Bank accounts reconciled only once a month' },
            { label: 'Quarterly or less', score: 1, finding: 'Bank accounts reconciled quarterly or less' },
            { label: 'Not reconciled regularly', score: 0, finding: 'Bank accounts not reconciled regularly' },
          ],
        },
      ],
    },
    {
      key: 'reporting',
      name: 'Reporting',
      report_name: 'Reporting Maturity',
      win: 'Introduce monthly management accounts with a one-page summary of what changed.',
      plan: [
        'Agree the 5–8 KPIs that matter for your business model',
        'Produce the first monthly management pack with commentary',
        'Add profit by product, service or channel',
      ],
      questions: [
        {
          q: 'What financial reports do you get each month?',
          options: [
            { label: 'A management pack with KPIs and commentary', score: 3 },
            { label: 'Profit & loss and balance sheet only', score: 2, finding: 'Monthly reports have no KPIs or commentary' },
            { label: 'Only bank balances or sales figures', score: 1, finding: 'No monthly profit and loss' },
            { label: 'No regular reports', score: 0, finding: 'No regular financial reports' },
          ],
        },
        {
          q: 'Can you see profit by product, service, branch or channel?',
          options: [
            { label: 'Yes, every month', score: 3 },
            { label: 'Occasionally, when we work it out', score: 2, finding: 'Product profitability checked only occasionally' },
            { label: 'We see revenue, not profit', score: 1, finding: 'Product profitability not tracked' },
            { label: 'Not at all', score: 0, finding: 'No view of profit by product, service or channel' },
          ],
        },
      ],
    },
    {
      key: 'cash',
      name: 'Cash Flow',
      report_name: 'Cash Flow Maturity',
      win: 'Build a rolling 13-week cash flow forecast and review it every week.',
      plan: [
        'Build a 13-week cash forecast from receivables, payables and commitments',
        'Set a minimum cash level and review the forecast weekly',
        'Follow up overdue customer payments every week',
      ],
      questions: [
        {
          q: 'How far ahead can you accurately forecast cash?',
          options: [
            { label: '3 months or more', score: 3 },
            { label: 'About 1 month', score: 2, finding: 'Cash forecast covers only about a month' },
            { label: 'About a week', score: 1, finding: 'Cash visible only a week ahead' },
            { label: 'We don’t forecast', score: 0, finding: 'No rolling cash forecast' },
          ],
        },
        {
          q: 'How do you manage money owed by customers?',
          options: [
            { label: 'Tracked weekly, with follow-ups', score: 3 },
            { label: 'Checked once a month', score: 2, finding: 'Customer payments checked only monthly' },
            { label: 'Chased when cash gets tight', score: 1, finding: 'Customer payments chased only when cash is tight' },
            { label: 'Not tracked', score: 0, finding: 'Overdue customer payments not tracked' },
          ],
        },
      ],
    },
    {
      key: 'compliance',
      name: 'Compliance',
      report_name: 'Compliance Health',
      win: 'Put every VAT and Corporate Tax deadline into one compliance calendar.',
      plan: [
        'Review VAT and Corporate Tax registrations and filing history',
        'Set up a compliance calendar with preparation dates',
        'Prepare every return two weeks before its deadline',
      ],
      questions: [
        {
          q: 'How are your VAT returns usually prepared?',
          options: [
            { label: 'Ready well before the deadline', score: 3 },
            { label: 'Usually close to the deadline', score: 2, finding: 'VAT returns prepared close to the deadline' },
            { label: 'Often last-minute or late', score: 1, finding: 'VAT returns often last-minute or late' },
            { label: 'Not sure we’re compliant', score: 0, finding: 'Unsure whether VAT is fully compliant' },
          ],
        },
        {
          q: 'Where are you with UAE Corporate Tax?',
          options: [
            { label: 'Registered, with filing planned', score: 3 },
            { label: 'Registered, filing not planned yet', score: 2, finding: 'Corporate Tax filing not yet planned' },
            { label: 'Not sure what applies to us', score: 1, finding: 'Unclear on Corporate Tax obligations' },
            { label: 'Not registered yet', score: 0, finding: 'Not yet registered for Corporate Tax' },
          ],
        },
      ],
    },
    {
      key: 'controls',
      name: 'Financial Controls',
      report_name: 'Financial Controls',
      win: 'Set spending approval limits and move finance data into one system.',
      plan: [
        'Agree approval limits for spending and payments',
        'Move finance data into one cloud accounting system',
        'Run a monthly controls check: access, approvals, reconciliations',
      ],
      questions: [
        {
          q: 'How is business spending approved?',
          options: [
            { label: 'Clear approval limits at every level', score: 3 },
            { label: 'The owner approves everything', score: 2, finding: 'All spending depends on owner approval' },
            { label: 'Approved informally', score: 1, finding: 'Spending approved informally' },
            { label: 'No approval process', score: 0, finding: 'No spending approval process' },
          ],
        },
        {
          q: 'Where does your financial data live?',
          options: [
            { label: 'One cloud accounting system', score: 3 },
            { label: 'Accounting software plus spreadsheets', score: 2, finding: 'Finance data split between software and spreadsheets' },
            { label: 'Mostly spreadsheets', score: 1, finding: 'Finance runs mostly on spreadsheets' },
            { label: 'Scattered across files and chats', score: 0, finding: 'Finance data scattered across files and chats' },
          ],
        },
      ],
    },
  ],
};

function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}

const COUNT_WORDS = ['no', 'one', 'two', 'three', 'four', 'five'];

export const HealthScoreQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [reportUnlocked, setReportUnlocked] = useState(false);
  const [waNumber, setWaNumber] = useState('');
  const [waSubmitted, setWaSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const reportId = useId();

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qIdx]: optIdx,
    }));
  };

  // Compute stats
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === QUIZ_CONFIG.total;

  let totalScoreSum = 0;
  let totalScoreMax = 0;
  const areaSummaries: Array<{
    key: string;
    name: string;
    report_name: string;
    pct: number;
    level: string;
    win: string;
    plan: [string, string, string];
    lines: Array<{ q: string; a: string; score: number }>;
    order: number;
  }> = [];

  const findings: Array<{ text: string; area: string; score: number; order: number }> = [];

  let globalQuestionIndex = 0;
  QUIZ_CONFIG.areas.forEach((area, ai) => {
    let aSum = 0;
    let aMax = 0;
    const lines: Array<{ q: string; a: string; score: number }> = [];

    area.questions.forEach((q) => {
      const selectedOptIdx = answers[globalQuestionIndex];
      const opt = selectedOptIdx !== undefined ? q.options[selectedOptIdx] : null;
      const s = opt ? opt.score : 0;
      aSum += s;
      aMax += 3;
      lines.push({
        q: q.q,
        a: opt ? opt.label : 'Not answered',
        score: s,
      });
      if (opt && opt.finding) {
        findings.push({
          text: opt.finding,
          area: area.report_name,
          score: s,
          order: globalQuestionIndex,
        });
      }
      globalQuestionIndex++;
    });

    const pct = Math.round((aSum / Math.max(1, aMax)) * 100);
    let level = QUIZ_CONFIG.levels[QUIZ_CONFIG.levels.length - 1].label;
    for (let i = 0; i < QUIZ_CONFIG.levels.length; i++) {
      if (pct >= QUIZ_CONFIG.levels[i].min) {
        level = QUIZ_CONFIG.levels[i].label;
        break;
      }
    }

    areaSummaries.push({
      key: area.key,
      name: area.name,
      report_name: area.report_name,
      pct,
      level,
      win: area.win,
      plan: area.plan,
      lines,
      order: ai,
    });

    totalScoreSum += aSum;
    totalScoreMax += aMax;
  });

  const finalScore = Math.round((totalScoreSum / Math.max(1, totalScoreMax)) * 100);

  let currentBand = QUIZ_CONFIG.bands[QUIZ_CONFIG.bands.length - 1];
  for (let b = 0; b < QUIZ_CONFIG.bands.length; b++) {
    if (finalScore <= QUIZ_CONFIG.bands[b].max) {
      currentBand = QUIZ_CONFIG.bands[b];
      break;
    }
  }

  let strongestArea = areaSummaries[0];
  areaSummaries.forEach((a) => {
    if (a.pct > strongestArea.pct) strongestArea = a;
  });

  const weakAreas = areaSummaries
    .filter((a) => a.pct < QUIZ_CONFIG.attention_below)
    .sort((x, y) => x.pct - y.pct || x.order - y.order);

  findings.sort((a, b) => a.score - b.score || a.order - b.order);
  let topRisks = findings.filter((f) => f.score <= 1).slice(0, 3);
  if (topRisks.length < 3) {
    topRisks = topRisks.concat(findings.filter((f) => f.score === 2)).slice(0, 3);
  }

  const topWins = weakAreas.slice(0, 3).map((w) => ({ area: w.report_name, text: w.win }));
  for (let n = 0; topWins.length < 3 && n < QUIZ_CONFIG.next_wins.length; n++) {
    topWins.push({ area: 'Next stage', text: QUIZ_CONFIG.next_wins[n] });
  }

  const planAreas = weakAreas.slice(0, 3);
  const plan: [string[], string[], string[]] = [[], [], []];
  for (let p = 0; p < 3; p++) {
    if (planAreas.length) {
      planAreas.forEach((pa) => {
        plan[p].push(pa.plan[p]);
      });
    } else {
      plan[p].push(QUIZ_CONFIG.next_plan[p]);
    }
  }

  let estimatedTimeline = QUIZ_CONFIG.timelines[QUIZ_CONFIG.timelines.length - 1].text;
  for (let t = 0; t < QUIZ_CONFIG.timelines.length; t++) {
    if (weakAreas.length <= QUIZ_CONFIG.timelines[t].max_areas) {
      estimatedTimeline = QUIZ_CONFIG.timelines[t].text;
      break;
    }
  }

  const clientName = company.trim() || firstName.trim() || 'your business';
  let summaryText = `${clientName.charAt(0).toUpperCase() + clientName.slice(1)} scores ${finalScore}/100, which puts it in the "${currentBand.title}" range. `;
  if (!weakAreas.length) {
    summaryText += `All five areas are well controlled, and ${strongestArea.report_name} is the strongest. The next gains are in planning, forecasting and insight.`;
  } else {
    const weakNames = weakAreas.slice(0, 3).map((w) => w.report_name);
    summaryText += `${strongestArea.report_name} is the strongest area, while ${joinNames(weakNames)} ${weakNames.length === 1 ? 'needs' : 'need'} the most attention. `;
    if (topRisks.length) {
      summaryText += `The most important risk we found is: ${topRisks[0].text}. `;
    }
    summaryText += `Closing these gaps would take an estimated ${estimatedTimeline}.`;
  }

  const recTitle = 'Based on your answers, we’d recommend a 30-minute Finance Health Review.';
  const recText = weakAreas.length
    ? `We identified ${COUNT_WORDS[weakAreas.length] || weakAreas.length} area${weakAreas.length === 1 ? '' : 's'} where you could improve visibility and cash control. In the review we’ll go through this report with you and agree where to start.`
    : 'Your finance function is in good shape. In the review we’ll look at the next stage: budgeting, forecasting and decision support.';

  const handleUnlockReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !userEmail.includes('@')) {
      setFormError('Please enter a valid work email.');
      return;
    }
    setFormError('');
    setReportUnlocked(true);
    // Smooth scroll to report
    setTimeout(() => {
      const el = document.getElementById('finance-health-report');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waNumber.replace(/[^0-9]/g, '').length < 7) {
      return;
    }
    setWaSubmitted(true);
  };

  let globalQNum = 0;

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-[#F4F7F8] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Main Quiz Wrapper (5px radius) */}
          <div className="bg-white rounded-[5px] border border-[#D3DDE3] p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heading, Live Score Meter, Unlock Form */}
              <div className="lg:col-span-5 sticky top-28 space-y-6">
                <div>
                  <span className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-[#0B7F8A] block mb-2">
                    Free Finance Health Check
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1F38] tracking-tight leading-tight">
                    How healthy are your finances?
                  </h2>
                  <p className="mt-3 text-[15px] sm:text-[16px] text-[#3B4D66] leading-relaxed">
                    Answer 10 quick questions and receive a personalised Finance Health Report with
                    your score, key risks, and practical recommendations to strengthen reporting, cash
                    flow, and financial controls.
                  </p>
                </div>

                {/* Score Card Box (5px radius) */}
                <div className="bg-[#0C1E3C] text-white rounded-[5px] p-6 border border-white/10 shadow-lg">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold tracking-tight text-white tabular-nums">
                      {finalScore}
                    </span>
                    <span className="text-lg font-bold text-white/50">/ 100</span>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-2.5 bg-white/10 rounded-[5px] overflow-hidden mb-4">
                    <div
                      className={`h-full transition-all duration-300 ease-out rounded-[5px] ${
                        currentBand.colour === 'amber' && answeredCount > 0
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#1FD6CB]'
                      }`}
                      style={{ width: `${answeredCount === 0 ? 0 : Math.max(5, finalScore)}%` }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {answeredCount === 0
                      ? 'Start answering'
                      : isComplete
                      ? currentBand.title
                      : 'Keep going'}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-white/75 leading-relaxed mb-4">
                    {answeredCount === 0
                      ? 'It takes about two minutes. Pick the answer closest to how things work today.'
                      : isComplete
                      ? currentBand.text
                      : `${QUIZ_CONFIG.total - answeredCount} more to see your full result.`}
                  </p>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#1FD6CB] pt-2 border-t border-white/10 flex items-center justify-between">
                    <span>Progress</span>
                    <span>
                      {answeredCount} of {QUIZ_CONFIG.total} answered
                    </span>
                  </div>
                </div>

                {/* Unlock Report Form: Revealed when complete or almost complete */}
                {isComplete && (
                  <form
                    onSubmit={handleUnlockReport}
                    className="bg-[#E9F0F3] border border-[#D3DDE3] rounded-[5px] p-5 sm:p-6 space-y-4 transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-base font-bold text-[#0F1F38] tracking-tight">
                        Your Finance Health Report is ready
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#3B4D66] mt-1 leading-normal">
                        Enter your work email to see your full report: risks, priorities and a 90-day plan.
                      </p>
                    </div>

                    {formError && (
                      <div className="text-xs bg-red-100 text-red-700 p-2 rounded-[5px]">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#0F1F38] mb-1">
                        Work email <span className="text-[#0B7F8A]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-[#D3DDE3] rounded-[5px] px-3.5 py-2.5 text-sm text-[#0F1F38] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B7F8A]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0F1F38] mb-1">
                          First name <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Tariq"
                          className="w-full bg-white border border-[#D3DDE3] rounded-[5px] px-3.5 py-2.5 text-sm text-[#0F1F38] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B7F8A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0F1F38] mb-1">
                          Company <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Trading"
                          className="w-full bg-white border border-[#D3DDE3] rounded-[5px] px-3.5 py-2.5 text-sm text-[#0F1F38] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B7F8A]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1FD6CB] hover:bg-[#19b9b0] text-[#0C1E3C] py-3 px-5 rounded-[5px] text-sm font-bold tracking-tight flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      <span>Show my free report</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11.5px] text-[#5D6E86] text-center">
                      We’ll also email you a copy. No spam, unsubscribe any time.
                    </p>
                  </form>
                )}
              </div>

              {/* Right Column: 10 Questions Grouped By Area */}
              <div className="lg:col-span-7 space-y-8">
                {QUIZ_CONFIG.areas.map((area, aIdx) => (
                  <div key={area.key} className="space-y-4">
                    <div className="pb-2 border-b-2 border-[#0B7F8A]/20 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A]">
                        {area.name}
                      </span>
                      <span className="text-xs text-[#5D6E86] font-semibold">Area 0{aIdx + 1}</span>
                    </div>

                    <div className="space-y-5">
                      {area.questions.map((question) => {
                        const currentQIdx = globalQNum++;
                        const selectedVal = answers[currentQIdx];
                        const isAnswered = selectedVal !== undefined;

                        return (
                          <div
                            key={currentQIdx}
                            className={`p-4 sm:p-5 rounded-[5px] border transition-all duration-200 ${
                              isAnswered
                                ? 'bg-white border-[#0B7F8A]/40 shadow-sm'
                                : 'bg-[#F4F7F8]/70 border-[#D3DDE3]'
                            }`}
                          >
                            <p className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0F1F38] mb-3 flex items-start gap-2.5">
                              <span className="text-[12px] font-extrabold text-[#0B7F8A] bg-[#D6F3F2] px-2 py-0.5 rounded-[5px] shrink-0 mt-0.5">
                                {currentQIdx + 1 < 10 ? `0${currentQIdx + 1}` : currentQIdx + 1}
                              </span>
                              <span>{question.q}</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {question.options.map((opt, optIdx) => {
                                const isSelected = selectedVal === optIdx;
                                return (
                                  <button
                                    key={optIdx}
                                    type="button"
                                    onClick={() => handleSelectOption(currentQIdx, optIdx)}
                                    className={`text-left p-3 rounded-[5px] text-xs sm:text-[13px] font-medium transition-all duration-150 flex items-center gap-2.5 cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#0B7F8A] text-white font-semibold shadow-sm'
                                        : 'bg-white hover:bg-[#E9F0F3] text-[#3B4D66] border border-[#D3DDE3]'
                                    }`}
                                  >
                                    <div
                                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                        isSelected
                                          ? 'border-white bg-white'
                                          : 'border-gray-400 bg-white'
                                      }`}
                                    >
                                      {isSelected && (
                                        <div className="w-2 h-2 rounded-full bg-[#0B7F8A]" />
                                      )}
                                    </div>
                                    <span>{opt.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* Full Finance Health Report Article (Confidential)     */}
        {/* ---------------------------------------------------- */}
        {reportUnlocked && (
          <ScrollReveal>
            <article
              id="finance-health-report"
              className="mt-16 bg-white rounded-[5px] border border-[#D3DDE3] shadow-2xl overflow-hidden print:m-0 print:border-none print:shadow-none"
            >
              {/* Report Header */}
              <div className="bg-[#0C1E3C] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[5px] bg-[#1FD6CB] flex items-center justify-center text-[#0C1E3C] font-black text-xl">
                    F
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">Finackle</h3>
                    <p className="text-xs text-white/60">Strategic Finance & Business Insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 px-3 py-1.5 rounded-[5px]">
                    Finance Health Report · Confidential
                  </span>
                  <button
                    onClick={handlePrint}
                    className="no-print bg-[#1FD6CB] hover:bg-[#19b9b0] text-[#0C1E3C] p-2 rounded-[5px] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                    title="Print / Save PDF"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Print Report</span>
                  </button>
                </div>
              </div>

              {/* Title Block & Score Circle */}
              <div className="p-6 sm:p-10 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#F4F7F8]/40">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1F38] tracking-tight">
                    Finance Health Report
                  </h3>
                  <p className="text-sm text-[#5D6E86] mt-1 font-medium">
                    Prepared for <b className="text-[#0F1F38]">{clientName}</b> ·{' '}
                    <span>
                      {new Date().toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full border-4 border-[#0B7F8A] bg-white flex flex-col items-center justify-center shadow-inner">
                    <span className="text-2xl font-black text-[#0F1F38] leading-none">
                      {finalScore}
                    </span>
                    <span className="text-[10px] font-bold text-[#5D6E86]">/ 100</span>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-extrabold uppercase px-2.5 py-1 rounded-[5px] ${
                        currentBand.colour === 'amber'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#D6F3F2] text-[#08636D]'
                      }`}
                    >
                      {currentBand.title}
                    </span>
                    <p className="text-xs text-[#5D6E86] mt-1">Overall Health Rating</p>
                  </div>
                </div>
              </div>

              {/* Section 01: Executive Summary */}
              <div className="p-6 sm:p-10 border-b border-gray-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block mb-2">
                  01 Executive summary
                </span>
                <p className="text-base sm:text-lg text-[#0F1F38] font-normal leading-relaxed">
                  {summaryText}
                </p>
              </div>

              {/* Section 02: Finance Health Score & Benchmark Scale */}
              <div className="p-6 sm:p-10 border-b border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block mb-2">
                    02 Finance Health Score
                  </span>
                  <p className="text-sm text-[#3B4D66]">{currentBand.text}</p>
                </div>

                {/* Benchmark Bar with marker */}
                <div>
                  <div className="flex text-xs font-bold text-center gap-1 mb-2">
                    <div className="bg-amber-100 text-amber-900 py-1.5 px-2 rounded-[5px] flex-1">
                      At risk (0–39)
                    </div>
                    <div className="bg-[#E9F0F3] text-[#3B4D66] py-1.5 px-2 rounded-[5px] flex-1">
                      Developing (40–64)
                    </div>
                    <div className="bg-[#D6F3F2] text-[#08636D] py-1.5 px-2 rounded-[5px] flex-1">
                      Well managed (65–84)
                    </div>
                    <div className="bg-[#0B7F8A] text-white py-1.5 px-2 rounded-[5px] flex-1">
                      Strong (85–100)
                    </div>
                  </div>

                  <div className="relative w-full h-3 bg-gray-200 rounded-[5px] overflow-visible">
                    <div
                      className="absolute top-0 bottom-0 bg-[#0B7F8A] rounded-[5px]"
                      style={{ width: `${Math.min(100, Math.max(0, finalScore))}%` }}
                    />
                    <div
                      className="absolute -top-7 -translate-x-1/2 bg-[#0C1E3C] text-white text-[11px] font-bold px-2 py-0.5 rounded-[5px] whitespace-nowrap shadow"
                      style={{ left: `${Math.min(95, Math.max(5, finalScore))}%` }}
                    >
                      You · {finalScore}
                    </div>
                  </div>
                </div>

                {/* Benchmark Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-[5px]">
                    <tbody>
                      <tr className="border-b border-gray-100 bg-white">
                        <td className="p-3 font-semibold text-[#3B4D66]">Your score</td>
                        <td className="p-3 text-right font-extrabold text-[#0F1F38]">{finalScore} / 100</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#F4F7F8]">
                        <td className="p-3 font-semibold text-[#3B4D66]">Businesses with strong control</td>
                        <td className="p-3 text-right font-extrabold text-[#0B7F8A]">85+ / 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 03: Maturity by Area */}
              <div className="p-6 sm:p-10 border-b border-gray-100 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block mb-2">
                  03 Maturity by area
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {areaSummaries.map((area) => (
                    <div
                      key={area.key}
                      className="p-4 rounded-[5px] border border-gray-200 bg-[#F4F7F8]/50 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <b className="text-sm font-bold text-[#0F1F38]">{area.report_name}</b>
                        <span
                          className={`text-[11px] font-extrabold px-2 py-0.5 rounded-[5px] shrink-0 ${
                            area.level === 'Strong'
                              ? 'bg-emerald-100 text-emerald-800'
                              : area.level === 'Developing'
                              ? 'bg-teal-100 text-teal-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {area.level}
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold text-[#5D6E86] mb-1">
                          <span>Readiness</span>
                          <span>{area.pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-[5px] overflow-hidden">
                          <div
                            className={`h-full rounded-[5px] ${
                              area.pct >= 80 ? 'bg-emerald-500' : area.pct >= 50 ? 'bg-[#0B7F8A]' : 'bg-amber-500'
                            }`}
                            style={{ width: `${area.pct}%` }}
                          />
                        </div>
                      </div>

                      <ul className="text-xs text-[#5D6E86] space-y-1 pt-2 border-t border-gray-200/60">
                        {area.lines.map((l, li) => (
                          <li key={li} className="flex items-center gap-1.5">
                            <span className="text-[#0B7F8A]">•</span>
                            <span className="truncate">{l.a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 04 & 05: Biggest Risks & Top 3 Priorities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 border-b border-gray-100">
                {/* Biggest risks */}
                <div className="space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block">
                    04 Biggest risks
                  </span>
                  {topRisks.length === 0 ? (
                    <p className="text-sm text-[#5D6E86]">No major operational risks identified.</p>
                  ) : (
                    <ul className="space-y-3">
                      {topRisks.map((risk, ri) => (
                        <li
                          key={ri}
                          className="flex items-start gap-3 p-3 bg-red-50/60 border border-red-200/60 rounded-[5px]"
                        >
                          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <b className="text-xs sm:text-sm font-bold text-[#0F1F38] block leading-tight">
                              {risk.text}
                            </b>
                            <small className="text-[11px] text-[#5D6E86] font-semibold">
                              {risk.area}
                            </small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Top 3 priorities */}
                <div className="space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block">
                    05 Top 3 priorities
                  </span>
                  <ol className="space-y-3">
                    {topWins.map((win, wi) => (
                      <li
                        key={wi}
                        className="flex items-start gap-3 p-3 bg-[#D6F3F2]/40 border border-[#0B7F8A]/20 rounded-[5px]"
                      >
                        <span className="w-5 h-5 rounded-[5px] bg-[#0B7F8A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {wi + 1}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-[#0F1F38] leading-tight">
                            {win.text}
                          </p>
                          <small className="text-[11px] text-[#5D6E86] font-semibold">
                            {win.area}
                          </small>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Section 06: Suggested 90-day improvement plan */}
              <div className="p-6 sm:p-10 border-b border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B7F8A] block mb-1">
                    06 Suggested 90-day improvement plan
                  </span>
                  <p className="text-xs text-[#5D6E86]">
                    Estimated implementation: <b className="text-[#0F1F38]">{estimatedTimeline}</b>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#F4F7F8] border border-gray-200 rounded-[5px]">
                    <span className="text-xs font-extrabold text-[#0B7F8A] uppercase tracking-wider block mb-2">
                      Days 1–30
                    </span>
                    <ul className="text-xs sm:text-[13px] text-[#3B4D66] space-y-2">
                      {plan[0].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0B7F8A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F4F7F8] border border-gray-200 rounded-[5px]">
                    <span className="text-xs font-extrabold text-[#0B7F8A] uppercase tracking-wider block mb-2">
                      Days 31–60
                    </span>
                    <ul className="text-xs sm:text-[13px] text-[#3B4D66] space-y-2">
                      {plan[1].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0B7F8A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F4F7F8] border border-gray-200 rounded-[5px]">
                    <span className="text-xs font-extrabold text-[#0B7F8A] uppercase tracking-wider block mb-2">
                      Days 61–90
                    </span>
                    <ul className="text-xs sm:text-[13px] text-[#3B4D66] space-y-2">
                      {plan[2].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0B7F8A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recommendation Callout & WhatsApp Follow-up */}
              <div className="p-6 sm:p-10 bg-[#0C1E3C] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-xl">
                  <b className="text-lg sm:text-xl font-bold tracking-tight block mb-1">
                    {recTitle}
                  </b>
                  <p className="text-sm text-white/80 leading-relaxed">{recText}</p>
                </div>

                <div className="no-print flex flex-col sm:flex-row items-center gap-4 shrink-0">
                  <a
                    href="#health-check-form"
                    className="bg-[#1FD6CB] hover:bg-[#19b9b0] text-[#0C1E3C] font-bold py-3.5 px-6 rounded-[5px] text-sm flex items-center gap-2 transition-all shadow-md"
                  >
                    <span>Book Finance Health Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Support Row */}
              <div className="no-print p-6 bg-[#142F55] text-white border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-white/80">
                  <span>Want follow-up support on WhatsApp? Add your phone number:</span>
                </div>
                {waSubmitted ? (
                  <span className="text-xs font-bold text-[#1FD6CB] flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Number received. We will message you on WhatsApp.</span>
                  </span>
                ) : (
                  <form onSubmit={handleWaSubmit} className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      type="tel"
                      value={waNumber}
                      onChange={(e) => setWaNumber(e.target.value)}
                      placeholder="+971 5x xxx xxxx"
                      className="bg-white/10 border border-white/20 rounded-[5px] px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#1FD6CB]"
                    />
                    <button
                      type="submit"
                      className="bg-[#1FD6CB] text-[#0C1E3C] font-bold px-3.5 py-2 rounded-[5px] text-xs hover:bg-[#19b9b0] transition-colors cursor-pointer shrink-0"
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>

              {/* Confidential Footer Notice */}
              <div className="p-4 bg-gray-100 text-[11px] text-[#5D6E86] text-center border-t border-gray-200">
                This report is a quick self-assessment based on your answers, not an audit. Finackle
                F.Z.E. · info@finackle.com · +971 54 502 2747
              </div>
            </article>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
