import React, { useState, useEffect, useRef } from 'react';
import quizConfig from './quiz-config.json';

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
  plan: string[];
  questions: Question[];
}

interface Band {
  max: number;
  title: string;
  colour: string;
  text: string;
}

interface Level {
  min: number;
  label: string;
}

interface Timeline {
  max_areas: number;
  text: string;
}

interface QuizConfigType {
  total: number;
  areas: Area[];
  bands: Band[];
  levels: Level[];
  attention_below: number;
  strong_from: number;
  timelines: Timeline[];
  next_wins: string[];
  next_plan: string[];
  average?: number | null;
  average_count?: number;
}

const config: QuizConfigType = quizConfig as QuizConfigType;

export function App() {
  // ---- 1. Hero Count-Up Numbers ----
  const [cashVal, setCashVal] = useState(0);
  const [runwayVal, setRunwayVal] = useState('0.0');

  useEffect(() => {
    let start: number | null = null;
    const duration = 1500;
    const targetCash = 238;
    const targetRunway = 4.2;

    const frame = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCashVal(Math.round(targetCash * eased));
      setRunwayVal((targetRunway * eased).toFixed(1));
      if (p < 1) requestAnimationFrame(frame);
    };
    const req = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(req);
  }, []);

  // ---- 2. How We Help 4-Step Interactive Tabs ----
  const [activeStep, setActiveStep] = useState(0);
  const autoPlayRef = useRef(true);

  const stepsData = [
    {
      title: 'Bookkeeping',
      short: 'Clean, reconciled books every month',
      badge: 'Step 1 of 4 · Bookkeeping',
      heading: 'We bring every source into one place.',
      desc: 'Bank feeds, sales channels, supplier bills, payroll and receipts are connected and recorded consistently, so nothing lives in a side spreadsheet.',
      bullets: [
        'Bank and card feeds reconciled',
        'Sales and marketplace data matched',
        'One chart of accounts for the business',
      ],
      docTitle: 'Sources connected',
      docContent: (
        <div className="src">
          <div>Bank accounts <span className="st">Linked</span></div>
          <div>Sales / POS <span className="st">Linked</span></div>
          <div>Marketplace payouts <span className="st">Linked</span></div>
          <div>Supplier bills <span className="st">Linked</span></div>
          <div>Payroll / WPS <span className="st">Linked</span></div>
          <div>Receipts <small>2 missing</small></div>
        </div>
      ),
    },
    {
      title: 'Reporting',
      short: 'Monthly reports and cash visibility',
      badge: 'Step 2 of 4 · Reporting',
      heading: 'Accurate reports that tell a clear story.',
      desc: 'A monthly management pack built on reconciled numbers, with profitability, cash flow and KPIs explained in plain language.',
      bullets: [
        'Monthly P&L, balance sheet and cash flow',
        'Profit by product, branch or channel',
        '13-week cash forecast',
      ],
      docTitle: 'Management P&L · September',
      docContent: (
        <table className="tbl">
          <thead>
            <tr><th>Line</th><th className="r">Actual</th><th className="r">vs Aug</th></tr>
          </thead>
          <tbody>
            <tr><td>Revenue</td><td className="r">312,450</td><td className="r up">+9.0%</td></tr>
            <tr><td>Gross profit</td><td className="r">131,229</td><td className="r up">+6.2%</td></tr>
            <tr><td>Operating costs</td><td className="r">−86,850</td><td className="r dn">+11.4%</td></tr>
            <tr className="tot"><td>Net profit</td><td className="r">44,379</td><td className="r dn">−1.1 pts</td></tr>
          </tbody>
        </table>
      ),
    },
    {
      title: 'Compliance',
      short: 'VAT, Corporate Tax and controls',
      badge: 'Step 3 of 4 · Compliance',
      heading: 'Controls and compliance that protect the business.',
      desc: 'Approval limits, regular reconciliations, a documented close and a compliance calendar, so errors, leakage and penalties are caught before they cost you.',
      bullets: [
        'Approval matrix and segregation of duties',
        'VAT and Corporate Tax prepared ahead of time',
        'Audit-ready records every month',
      ],
      docTitle: 'Control & compliance status',
      docContent: (
        <table className="tbl">
          <thead>
            <tr><th>Item</th><th>When</th><th className="r">Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Bank reconciliation</td><td>Weekly</td><td className="r"><span className="st">On track</span></td></tr>
            <tr><td>Spend approvals</td><td>Ongoing</td><td className="r"><span className="st">Active</span></td></tr>
            <tr><td>VAT return</td><td>28 days after period end</td><td className="r"><span className="st">Prepared</span></td></tr>
            <tr><td>Corporate Tax return</td><td>Within 9 months of year-end</td><td className="r"><span className="st">Scheduled</span></td></tr>
          </tbody>
        </table>
      ),
    },
    {
      title: 'CFO advice',
      short: 'Planning and decisions with a senior view',
      badge: 'Step 4 of 4 · CFO advice',
      heading: 'Better decisions, made with confidence.',
      desc: 'With reliable numbers in place, we help you plan: pricing, hiring, expansion, stock and cost changes, tested against your real cash position.',
      bullets: [
        'Budgets, forecasts and scenarios',
        'Pricing and margin reviews',
        'A clear “can we afford it?” answer',
      ],
      docTitle: 'Scenario: hire two people',
      docContent: (
        <table className="tbl">
          <thead>
            <tr><th>Scenario</th><th className="r">Runway</th><th className="r">View</th></tr>
          </thead>
          <tbody>
            <tr><td>Current plan</td><td className="r">4.2 mo</td><td className="r"><span className="st">Comfortable</span></td></tr>
            <tr><td>+1 hire</td><td className="r">3.5 mo</td><td className="r"><span className="st">Fine</span></td></tr>
            <tr><td>+2 hires</td><td className="r">2.7 mo</td><td className="r"><span className="st w">Fix collections first</span></td></tr>
          </tbody>
        </table>
      ),
    },
  ];

  // Auto-play through steps until user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveStep((prev) => (prev + 1) % 4);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // ---- 3. The Owner's View Interactive Questions ----
  const [activeQuestion, setActiveQuestion] = useState(0);

  const ownerQuestionsData = [
    {
      num: '01',
      q: 'Which products or services are actually profitable?',
      title: 'Profit by product, service or channel',
      desc: 'We allocate direct costs, fees and discounts to each line so you see true contribution margin, not just revenue.',
      repTitle: 'Margin by product report',
      repSub: 'Included in your monthly pack',
    },
    {
      num: '02',
      q: 'Where is margin moving, and why?',
      title: 'Month-on-month margin bridge',
      desc: 'We show exactly which costs moved margin each month, from supplier prices to delivery commissions.',
      repTitle: 'Margin bridge with commentary',
      repSub: 'Included in your monthly pack',
    },
    {
      num: '03',
      q: 'How much runway do we have?',
      title: 'Cash position and 13-week forecast',
      desc: 'Your forecast combines receivables, payables and commitments, so you see pressure weeks before it arrives.',
      repTitle: '13-week cash forecast',
      repSub: 'Included in your monthly pack',
    },
    {
      num: '04',
      q: 'Can we hire, expand or change our costs?',
      title: 'Scenario planning',
      desc: 'We model the decision against your real cash and margins and give you a clear yes, not yet, or yes if.',
      repTitle: 'Scenario model and recommendation',
      repSub: 'Included in your monthly pack',
    },
    {
      num: '05',
      q: 'Are we on top of VAT and Corporate Tax?',
      title: 'Compliance calendar',
      desc: 'We map every obligation and prepare returns ahead of each deadline, with records kept audit-ready.',
      repTitle: 'Compliance status page',
      repSub: 'Included in your monthly pack',
    },
  ];

  // ---- 4. Free Finance Health Check Quiz & Report State ----
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [gateEmail, setGateEmail] = useState('');
  const [gateFirstName, setGateFirstName] = useState('');
  const [gateCompany, setGateCompany] = useState('');
  const [gateMsg, setGateMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [waPhone, setWaPhone] = useState('');
  const [waMsg, setWaMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  // Compute live score & results
  const computeReport = () => {
    let qIdx = 0;
    let sum = 0;
    let max = 0;
    let answeredCount = 0;
    const areasComputed: Array<{
      key: string;
      name: string;
      report_name: string;
      pct: number;
      level: string;
      lines: Array<{ q: string; a: string; score: number }>;
      win: string;
      plan: string[];
      order: number;
    }> = [];
    const findings: Array<{ text: string; area: string; score: number; order: number }> = [];

    config.areas.forEach((area, ai) => {
      let aSum = 0;
      let aMax = 0;
      const lines: Array<{ q: string; a: string; score: number }> = [];

      area.questions.forEach((question) => {
        const oi = answers[qIdx];
        const opt = oi !== undefined && question.options[oi] ? question.options[oi] : null;
        if (opt) answeredCount++;
        const s = opt ? opt.score : 0;
        aSum += s;
        aMax += 3;
        lines.push({ q: question.q, a: opt ? opt.label : 'Not answered', score: s });
        if (opt && opt.finding) {
          findings.push({ text: opt.finding, area: area.report_name, score: s, order: qIdx });
        }
        qIdx++;
      });

      const pct = Math.round((aSum / Math.max(1, aMax)) * 100);
      let level = config.levels[config.levels.length - 1].label;
      for (let i = 0; i < config.levels.length; i++) {
        if (pct >= config.levels[i].min) {
          level = config.levels[i].label;
          break;
        }
      }
      areasComputed.push({
        key: area.key,
        name: area.name,
        report_name: area.report_name,
        pct,
        level,
        lines,
        win: area.win,
        plan: area.plan,
        order: ai,
      });
      sum += aSum;
      max += aMax;
    });

    const score = Math.round((sum / Math.max(1, max)) * 100);
    let band = config.bands[config.bands.length - 1];
    for (let b = 0; b < config.bands.length; b++) {
      if (score <= config.bands[b].max) {
        band = config.bands[b];
        break;
      }
    }

    let strongest = areasComputed[0];
    areasComputed.forEach((a) => {
      if (a.pct > strongest.pct) strongest = a;
    });

    const weak = areasComputed
      .filter((a) => a.pct < config.attention_below)
      .sort((x, y) => x.pct - y.pct || x.order - y.order);

    findings.sort((a, b) => a.score - b.score || a.order - b.order);
    let risks = findings.filter((f) => f.score <= 1).slice(0, 3);
    if (risks.length < 3) {
      risks = risks.concat(findings.filter((f) => f.score === 2)).slice(0, 3);
    }

    const wins = weak.slice(0, 3).map((w) => ({ area: w.report_name, text: w.win }));
    for (let n = 0; wins.length < 3 && n < config.next_wins.length; n++) {
      wins.push({ area: 'Next stage', text: config.next_wins[n] });
    }

    const planAreas = weak.slice(0, 3);
    const plan: string[][] = [[], [], []];
    for (let p = 0; p < 3; p++) {
      if (planAreas.length) {
        planAreas.forEach((pa) => {
          plan[p].push(pa.plan[p]);
        });
      } else {
        plan[p].push(config.next_plan[p]);
      }
    }

    let timeline = config.timelines[config.timelines.length - 1].text;
    for (let t = 0; t < config.timelines.length; t++) {
      if (weak.length <= config.timelines[t].max_areas) {
        timeline = config.timelines[t].text;
        break;
      }
    }

    const whoText = gateCompany.trim() || gateFirstName.trim() || 'Your business';
    let summary = `${whoText} scores ${score}/100, which puts it in the “${band.title}” range. `;
    if (!weak.length) {
      summary += `All five areas are well controlled, and ${strongest.report_name} is the strongest. The next gains are in planning, forecasting and insight.`;
    } else {
      const weakNames = weak.slice(0, 3).map((w) => w.report_name);
      const joinedNames =
        weakNames.length <= 1
          ? weakNames.join('')
          : weakNames.slice(0, -1).join(', ') + ' and ' + weakNames[weakNames.length - 1];
      summary += `${strongest.report_name} is the strongest area, while ${joinedNames} ${
        weakNames.length === 1 ? 'needs' : 'need'
      } the most attention. `;
      if (risks.length) {
        summary += `The most important risk we found is: ${risks[0].text}. `;
      }
      summary += `Closing these gaps would take an estimated ${timeline}.`;
    }

    const recTitle = 'Based on your answers, we’d recommend a 30-minute Finance Health Review.';
    const countWords = ['no', 'one', 'two', 'three', 'four', 'five'];
    const recText = weak.length
      ? `We identified ${countWords[weak.length]} area${
          weak.length === 1 ? '' : 's'
        } where you could improve visibility and cash control. In the review we’ll go through this report with you and agree where to start.`
      : 'Your finance function is in good shape. In the review we’ll look at the next stage: budgeting, forecasting and decision support.';

    return {
      score,
      band,
      answeredCount,
      areas: areasComputed,
      risks,
      wins,
      plan,
      timeline,
      summary,
      recTitle,
      recText,
    };
  };

  const reportData = computeReport();
  const allAnswered = reportData.answeredCount === config.total;

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleUnlockGate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateEmail.trim() || !gateEmail.includes('@')) {
      setGateMsg({ type: 'err', text: 'Please enter a valid work email so we can send your report.' });
      return;
    }
    setGateMsg(null);
    setUnlocked(true);
    setTimeout(() => {
      document.getElementById('hsReport')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleWaFollowup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waPhone.trim()) {
      setWaMsg({ type: 'err', text: 'Please enter a phone or WhatsApp number.' });
      return;
    }
    const text = `Hello Finackle, I completed the Finance Health Check (Score: ${reportData.score}/100 - ${reportData.band.title}). Phone: ${waPhone.trim()}. Please send me WhatsApp follow-up support.`;
    window.open(`https://wa.me/971545022747?text=${encodeURIComponent(text)}`, '_blank');
    setWaMsg({ type: 'ok', text: 'Opening WhatsApp to send your request.' });
  };

  // ---- 5. Protected Contact Form State & Handler ----
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBusiness, setFormBusiness] = useState('E-commerce');
  const [formFocus, setFormFocus] = useState('Profitability');
  const [formHp, setFormHp] = useState('');
  const [formStatus, setFormStatus] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormStatus({ type: 'err', text: 'Please enter your name.' });
      return;
    }
    if (!formEmail.trim() || !formEmail.includes('@') || !formEmail.includes('.')) {
      setFormStatus({ type: 'err', text: 'Please enter a valid work email address.' });
      return;
    }

    setFormSubmitting(true);
    setFormStatus(null);

    try {
      // Backend integration via existing /api/send-enquiry.php
      const res = await fetch('/api/send-enquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'fetch',
        },
        body: JSON.stringify({
          name: formName.trim(),
          email: formEmail.trim(),
          company: formBusiness,
          service: `Finance Health Review (${formFocus})`,
          message: `Business Type: ${formBusiness}. Clarity Focus: ${formFocus}.`,
          hp_field: formHp,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data && (data.success || data.status === 'success' || data.ok)) {
        setFormStatus({
          type: 'ok',
          text: data.message || 'Thank you! Your enquiry has been sent to info@finackle.com. We reply within one business day.',
        });
        setFormName('');
        setFormEmail('');
      } else {
        const errorText =
          data?.message ||
          `Unable to submit enquiry (Server status ${res.status}). Please try again or reach our team at info@finackle.com.`;
        setFormStatus({ type: 'err', text: errorText });
      }
    } catch {
      setFormStatus({
        type: 'err',
        text: 'Network connection error. Please try again or contact us directly at info@finackle.com.',
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  // ---- 6. Scroll Reveal Observer & Section Spy ----
  const [activeNavDot, setActiveNavDot] = useState('top');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Scroll reveal
    const rvElements = document.querySelectorAll('.rv');
    rvElements.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('pre');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.remove('pre');
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rvElements.forEach((el) => observer.observe(el));
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.pre').forEach((el) => el.classList.remove('pre'));
    }, 6000);

    // Section nav spy
    const handleScroll = () => {
      const sections = ['top', 'services', 'challenge', 'how', 'who', 'process', 'about', 'quiz', 'faq', 'start'];
      let current = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = s;
        }
      }
      setActiveNavDot(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Fullscreen change listener
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <div id="finackle-app" className="finackle-wrapper">
      {/* SVG Symbol Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="arr" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="ok" viewBox="0 0 24 24">
          <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="wa" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.507 14.307l-.009.075c-.244-.122-1.442-.712-1.666-.793-.223-.082-.386-.122-.549.122-.162.245-.63.793-.772.955-.143.163-.285.183-.529.061-.244-.122-1.03-.38-1.961-1.21-.724-.645-1.213-1.442-1.356-1.686-.142-.245-.015-.377.107-.499.11-.11.244-.285.367-.428.122-.142.163-.244.244-.407.082-.163.041-.305-.02-.428-.061-.122-.549-1.323-.752-1.811-.198-.476-.4-.412-.55-.42-.142-.008-.305-.01-.468-.01-.163 0-.427.061-.65.305-.224.244-.855.835-.855 2.036 0 1.2 0.875 2.36 0.997 2.524.122.163 1.722 2.63 4.172 3.687.583.251 1.038.401 1.393.514.586.186 1.12.16 1.542.097.471-.07 1.442-.59 1.646-1.16.203-.57.203-1.058.142-1.16-.06-.102-.224-.163-.468-.285zM12.04 2c-5.464 0-9.91 4.446-9.91 9.91 0 1.75.457 3.456 1.326 4.96L2 22l5.253-1.378c1.455.794 3.097 1.218 4.787 1.218 5.464 0 9.91-4.446 9.91-9.91 0-5.464-4.446-9.91-9.91-9.91zm0 18.15c-1.48 0-2.93-.398-4.198-1.152l-.301-.18-3.12.818.833-3.042-.196-.314a8.17 8.17 0 01-1.258-4.37c0-4.516 3.674-8.19 8.24-8.19 4.566 0 8.24 3.674 8.24 8.19 0 4.516-3.674 8.19-8.24 8.19z" />
        </symbol>
      </svg>

      {/* 01. Sticky Header Navigation Bar */}
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Finackle home">
            <span className="logo-tile">
              <img src="/finackle-logo.png" alt="Finackle" width="25" height="35" onError={(e) => {
                // Fallback to stylized SVG letter if file path differs
                e.currentTarget.style.display = 'none';
              }} />
            </span>
            Finackle
          </a>
          <nav className="links" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#who">Industries</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#start">Contact</a>
          </nav>
          <div className="navr">
            <a
              className="icon-btn"
              href="https://wa.me/971545022747"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Finackle"
            >
              <svg width="20" height="20" aria-hidden="true"><use href="#wa" /></svg>
            </a>
            <a className="btn btn-ink" href="#quiz">
              <span><span className="long">Get your </span>Free Finance Health Check</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Body Content */}
      <main id="top">
        {/* 02. Hero Section */}
        <section className="hero">
          <div className="wrap">
            <div>
              <p className="tagline">Turning financial data into clarity, control &amp; better business decisions.</p>
              <h1>
                Outsourced <span className="g">finance, accounting &amp; CFO support</span> for growing businesses.
              </h1>
              <p className="lede">
                We handle your bookkeeping, VAT and Corporate Tax, payroll and monthly reporting, and give you CFO-level advice, so you always know where the business stands and what to do next.
              </p>
              <div className="ctas">
                <a className="btn btn-ink" href="#quiz">
                  Get my Free Finance Health Check <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
                </a>
                <a className="btn btn-line" href="#services">
                  View our services
                </a>
              </div>
              <nav className="svcrow" aria-label="Our services">
                <span className="svcrow-lbl">What we do</span>
                <a href="#services">Bookkeeping</a>
                <a href="#services">VAT &amp; Corporate Tax</a>
                <a href="#services">Payroll &amp; WPS</a>
                <a href="#services">Financial reporting</a>
                <a href="#services">CFO advisory</a>
              </nav>
              <div className="trust">
                <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>UAE-based</span>
                <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>CFO Advisory</span>
                <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Business Insights</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="card hero-card" aria-label="Illustrative Finackle dashboard">
                <div className="ch">
                  <div>
                    <div className="tiny">A clearer view</div>
                    <b>Your finance, in context.</b>
                  </div>
                  <span className="tagp">Demo view</span>
                </div>
                <div className="kp">
                  <div>
                    <div className="tiny">Cash position</div>
                    <b>AED <span>{cashVal}K</span></b>
                    <small>Illustrative</small>
                  </div>
                  <div>
                    <div className="tiny">Cash runway</div>
                    <b><span>{runwayVal}</span> months</b>
                    <small>Illustrative</small>
                  </div>
                </div>
                <svg className="chart" viewBox="0 0 400 140" role="img" aria-label="Illustrative monthly operating picture: actual line rising above plan">
                  <line className="gl" x1="0" y1="120" x2="400" y2="120" />
                  <line className="gl" x1="0" y1="80" x2="400" y2="80" strokeDasharray="3 6" />
                  <line className="gl" x1="0" y1="40" x2="400" y2="40" strokeDasharray="3 6" />
                  <path className="b" d="M10 100 C80 96 140 90 200 84 S320 70 390 60" />
                  <path className="a" d="M10 104 C50 98 70 88 100 92 S150 78 180 74 S230 84 260 66 S320 52 350 50 S380 36 390 32" />
                  <circle cx="390" cy="32" r="5" fill="var(--green)" />
                  <text x="6" y="136">Jun</text>
                  <text x="82" y="136">Jul</text>
                  <text x="160" y="136">Aug</text>
                  <text x="238" y="136">Sep</text>
                  <text x="316" y="136">Oct</text>
                  <text x="372" y="136">Nov</text>
                </svg>
                <div className="cbar">
                  <span>Profit, cash and next decisions, together.</span>
                  <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Services Section */}
        <section className="s" id="services" style={{ paddingTop: '40px' }}>
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">Services</span>
                <h2>Everything your finance function needs.</h2>
              </div>
              <p>Bookkeeping, tax, payroll, reporting and CFO advice for UAE businesses. Choose one service or hand us the whole finance function.</p>
            </div>
            <div className="svcs">
              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h6M8 11h6"/></svg>
                </span>
                <h3>Accounting &amp; bookkeeping</h3>
                <p>Accurate records, reconciliations, payables, receivables and a dependable month-end close.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
                </span>
                <h3>Financial reporting</h3>
                <p>P&amp;L, balance sheet, cash flow and KPIs with commentary you can act on.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                </span>
                <h3>CFO advisory</h3>
                <p>Budgets, forecasts, pricing and margin reviews, plus a senior view on big decisions.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>
                </span>
                <h3>VAT compliance</h3>
                <p>VAT registration support, return preparation and record reviews to keep you compliant.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z"/></svg>
                </span>
                <h3>Corporate Tax</h3>
                <p>Registration, computations and filing support shaped around your UAE structure.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg>
                </span>
                <h3>Payroll &amp; WPS</h3>
                <p>Payroll processing, payslips, WPS support and end-of-service calculations.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></svg>
                </span>
                <h3>Cash flow &amp; budgeting</h3>
                <p>Rolling forecasts and budgets that show liquidity ahead of time.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>

              <a className="svc rv hl" href="#start">
                <span className="si">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 17.5h7M17.5 14v7"/></svg>
                </span>
                <h3>Finance systems &amp; controls</h3>
                <p>System set-up, automation, approval workflows and a documented close.</p>
                <span className="go">Ask about this <svg width="16" height="16" aria-hidden="true"><use href="#arr"/></svg></span>
              </a>
            </div>
          </div>
        </section>

        {/* 04. Score Promo Section */}
        <section className="score-promo" aria-label="Free Finance Health Score">
          <div className="wrap">
            <div className="sp-card rv">
              <div className="sp-l">
                <span className="sp-ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>
                </span>
                <div>
                  <b>Free Finance Health Check</b>
                  <p>Answer 10 quick questions and receive a personalised Finance Health Report with your score, key risks, and practical recommendations to strengthen reporting, cash flow, and financial controls.</p>
                </div>
              </div>
              <a className="btn btn-ink" href="#quiz">
                Start my free check <svg width="18" height="18" aria-hidden="true"><use href="#arr"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* 05. The Challenge Section */}
        <section className="s" id="challenge">
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">The challenge</span>
                <h2>Growing businesses rarely lack data. They lack <span className="g">clarity</span>.</h2>
              </div>
              <p>Financial information is fragmented, processes are manual, and there is limited visibility into profitability, cash flow and performance. Without reliable reporting and structured systems, confident decisions get harder.</p>
            </div>
            <div className="probs">
              <div className="prob rv">
                <span className="pi">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="5" width="7" height="7" rx="1.5"/><rect x="6" y="14" width="7" height="7" rx="1.5"/></svg>
                </span>
                <h3>Fragmented information</h3>
                <p>Sales in one tool, bank in another, receipts in a chat thread. No single version of the truth.</p>
                <q>“Which spreadsheet is the right one?”</q>
              </div>

              <div className="prob rv">
                <span className="pi">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                </span>
                <h3>Manual processes</h3>
                <p>Copy-paste reconciliations, chasing approvals, rebuilding the same report every month.</p>
                <q>“Month-end takes us three weeks.”</q>
              </div>

              <div className="prob rv">
                <span className="pi">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><path d="M4 20 20 4"/></svg>
                </span>
                <h3>Limited visibility</h3>
                <p>Profit by product, next month’s cash, the real cost of a channel. Too often it’s a guess.</p>
                <q>“Profitable on paper, short on cash.”</q>
              </div>
            </div>
          </div>
        </section>

        {/* 06. How We Help: 4 Interactive Workflow Steps */}
        <section className="s flow-wrap" id="how">
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">How we help</span>
                <h2>From clean books to confident decisions.</h2>
              </div>
              <p>Four services that build on each other: bookkeeping, reporting, compliance and CFO advice. Select each step to see what you get.</p>
            </div>

            <div className="flow" role="tablist" aria-label="Our four services" id="flow">
              <span className="fillbar" style={{ width: `${(activeStep / 3) * 76}%` }} />
              {stepsData.map((st, i) => (
                <button
                  key={st.title}
                  type="button"
                  className={`node ${i < activeStep ? 'done' : ''}`}
                  role="tab"
                  aria-selected={activeStep === i}
                  tabIndex={activeStep === i ? 0 : -1}
                  onClick={() => {
                    autoPlayRef.current = false;
                    setActiveStep(i);
                  }}
                >
                  <span className="ring">
                    {i === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>
                    )}
                    {i === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
                    )}
                    {i === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/></svg>
                    )}
                    {i === 3 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/></svg>
                    )}
                  </span>
                  <b>{st.title}</b>
                  <small>{st.short}</small>
                </button>
              ))}
            </div>

            {/* Step Panel Details */}
            <div className="fpane">
              <div>
                <div className="tiny" style={{ color: 'var(--green-hi)' }}>{stepsData[activeStep].badge}</div>
                <h3 style={{ marginTop: '10px' }}>{stepsData[activeStep].heading}</h3>
                <p className="fp">{stepsData[activeStep].desc}</p>
                <ul>
                  {stepsData[activeStep].bullets.map((b) => (
                    <li key={b}>
                      <svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="doc">
                <div className="doc-h">
                  <b>{stepsData[activeStep].docTitle}</b>
                  <span className="st">Sample</span>
                </div>
                {stepsData[activeStep].docContent}
              </div>
            </div>
          </div>
        </section>

        {/* 07. The Owner's View Section */}
        <section className="s" id="questions">
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">The owner’s view</span>
                <h2>Questions your numbers should <span className="g">answer</span>.</h2>
              </div>
              <p>Your finance should be connected to the decisions you are making, not sitting in a folder. Pick a question.</p>
            </div>
            <div className="qgrid">
              <div className="qlist" role="tablist" aria-label="Owner questions">
                {ownerQuestionsData.map((oq, idx) => (
                  <button
                    key={oq.num}
                    type="button"
                    role="tab"
                    aria-selected={activeQuestion === idx}
                    tabIndex={activeQuestion === idx ? 0 : -1}
                    onClick={() => setActiveQuestion(idx)}
                  >
                    <span className="n">{oq.num}</span>
                    <span>{oq.q}</span>
                    <svg width="16" height="16" aria-hidden="true"><use href="#arr" /></svg>
                  </button>
                ))}
              </div>

              <div className="qans" role="tabpanel">
                <div className="tiny">How Finackle answers it</div>
                <h3>{ownerQuestionsData[activeQuestion].title}</h3>
                <p>{ownerQuestionsData[activeQuestion].desc}</p>
                <div className="rep">
                  <span className="ri">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>
                  </span>
                  <span className="rt">
                    <b>{ownerQuestionsData[activeQuestion].repTitle}</b>
                    <small>{ownerQuestionsData[activeQuestion].repSub}</small>
                  </span>
                </div>
                <a className="btn btn-ink" href="#start" style={{ alignSelf: 'flex-start' }}>
                  Get this for your business <svg width="16" height="16" aria-hidden="true"><use href="#arr" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Who We Work With / Industries Section */}
        <section className="s" id="who" style={{ paddingTop: '20px' }}>
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">Made for the way you operate</span>
                <h2>Finance that understands your <span className="g">kind of business</span>.</h2>
              </div>
              <p>Different models bring different pressures. We make the financial picture useful for the business you’re actually running.</p>
            </div>
            <div className="inds">
              <div className="ind rv">
                <h3>E-commerce</h3>
                <p>Marketplace and gateway fees, refunds, COD collections and margin by channel.</p>
                <span className="q">“Which channel actually makes money?”</span>
              </div>
              <div className="ind rv">
                <h3>F&amp;B &amp; restaurants</h3>
                <p>Daily sales, food cost, delivery commissions and branch performance.</p>
                <span className="q">“Are delivery orders helping or hurting?”</span>
              </div>
              <div className="ind rv">
                <h3>Trading &amp; distribution</h3>
                <p>Inventory, supplier payments, credit control and working capital.</p>
                <span className="q">“Why is cash tight when sales are up?”</span>
              </div>
              <div className="ind rv">
                <h3>Professional services</h3>
                <p>Project margins, utilisation, billing cycles and collections.</p>
                <span className="q">“Which clients are worth the effort?”</span>
              </div>
            </div>
          </div>
        </section>

        {/* 09. Sample Monthly Management Pack Section */}
        <section className="s" style={{ paddingTop: '20px' }}>
          <div className="wrap pack">
            <div className="rv">
              <span className="lbl">See before you commit</span>
              <h2>What lands in your inbox every month.</h2>
              <p>A short management pack built on reconciled numbers. Every page ends with what it means for you and what we suggest next.</p>
              <ul>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Profit &amp; loss with month-on-month commentary</li>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>13-week cash forecast and runway</li>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>KPIs for your business model</li>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Compliance status and upcoming deadlines</li>
              </ul>
              <a
                className="btn btn-ink"
                href="https://wa.me/971545022747?text=Hello%20Finackle%2C%20please%20send%20me%20a%20sample%20monthly%20management%20pack."
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a sample report <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
              </a>
            </div>
            <div className="pages rv" aria-label="Illustration of three pages from a sample monthly pack">
              <div className="pg pg1">
                <div className="tiny">Page 3 · Cash</div>
                <h4>13-week forecast</h4>
                <div className="mini-b">
                  <i style={{ height: '80%' }}></i>
                  <i style={{ height: '72%' }}></i>
                  <i style={{ height: '64%' }}></i>
                  <i style={{ height: '52%' }}></i>
                  <i className="lo" style={{ height: '30%' }}></i>
                  <i className="lo" style={{ height: '26%' }}></i>
                  <i style={{ height: '40%' }}></i>
                  <i style={{ height: '56%' }}></i>
                  <i style={{ height: '66%' }}></i>
                </div>
                <div className="note">Weeks 5–6 dip below your cash floor.</div>
              </div>
              <div className="pg pg2">
                <div className="tiny">Page 1 · Summary · Sample</div>
                <h4>September at a glance</h4>
                <div className="line"><span>Revenue</span><b>312,450 <span className="up">+9%</span></b></div>
                <div className="line"><span>Gross margin</span><b>42.0% <span className="dn">−0.8</span></b></div>
                <div className="line"><span>Net profit</span><b>44,379</b></div>
                <div className="line"><span>Cash runway</span><b>4.2 mo</b></div>
                <div className="note">Delivery-app fees rose 18%. Review pricing on top 10 items.</div>
              </div>
              <div className="pg pg3">
                <div className="tiny">Page 4 · Compliance</div>
                <h4>Upcoming</h4>
                <div className="line"><span>VAT return</span><span className="st">Prepared</span></div>
                <div className="line"><span>Corporate Tax</span><span className="st">Scheduled</span></div>
                <div className="line"><span>WPS payroll</span><span className="st">On track</span></div>
                <div className="line"><span>Receipts</span><span className="st w">2 missing</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. How It Starts / Process Section */}
        <section className="s proc" id="process">
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">How it starts</span>
                <h2>Clear steps, clear timelines.</h2>
              </div>
              <p>No long onboarding. You see value from the first conversation.</p>
            </div>
            <div className="steps">
              <div className="step rv">
                <span className="wk">Week 1 · Free</span>
                <h3>Free Finance Health Check &amp; Review</h3>
                <p>Take the 10-question Health Check for your personalised report, then a 30-minute review call where we go through your books, systems and reporting and share a written summary of gaps, risks and quick wins.</p>
              </div>
              <div className="step rv">
                <span className="wk">Weeks 2–4</span>
                <h3>Clean-up &amp; set-up</h3>
                <p>Reconcile what’s there, structure the chart of accounts, connect bank and sales channels, set controls and the close calendar.</p>
              </div>
              <div className="step dark rv">
                <span className="wk">Every month</span>
                <h3>Your finance rhythm</h3>
                <p>Books closed on schedule, management pack delivered, a review call, and compliance prepared ahead of deadlines.</p>
              </div>
            </div>
            <div className="need rv">
              <b>What we need from you:</b>
              <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Bank statements or read-only access</span>
              <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Sales and invoice data</span>
              <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Receipts and bills</span>
              <span><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>30 minutes a month</span>
            </div>
          </div>
        </section>

        {/* 11. Ways To Work With Us Section */}
        <section className="s">
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">Ways to work with us</span>
                <h2>Choose the support that fits your stage.</h2>
              </div>
              <p>Every engagement has an agreed scope and a fixed fee, confirmed after your free Finance Health Review.</p>
            </div>
            <div className="engs">
              <div className="eng rv">
                <span className="tiny">Project</span>
                <h3>Clean-up &amp; set-up</h3>
                <p>For books that are behind or a finance setup that no longer fits.</p>
                <ul>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Backlog reconciled</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>System and chart of accounts</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Controls and close calendar</li>
                </ul>
                <a className="btn btn-line" href="#start">Discuss a project</a>
              </div>

              <div className="eng feat rv">
                <span className="tiny">Ongoing</span>
                <h3>Monthly finance partner</h3>
                <p>Your outsourced finance function, run every month.</p>
                <ul>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Bookkeeping and reconciliations</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Management pack and review call</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>VAT, Corporate Tax and payroll support</li>
                </ul>
                <a className="btn btn-mint" href="#quiz">Start with the free Health Check</a>
              </div>

              <div className="eng rv">
                <span className="tiny">Advisory</span>
                <h3>CFO advisory</h3>
                <p>Senior perspective for bigger decisions, without a full-time CFO.</p>
                <ul>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Budgets, forecasts, scenarios</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Pricing and margin reviews</li>
                  <li><svg width="14" height="14" aria-hidden="true"><use href="#ok" /></svg>Bank and investor reporting</li>
                </ul>
                <a className="btn btn-line" href="#start">Talk to us</a>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Why Finackle / About Section */}
        <section className="s" id="about" style={{ paddingTop: '0' }}>
          <div className="wrap">
            <div className="sh">
              <div>
                <span className="lbl">Why Finackle</span>
                <h2>Built on Trust. Focused on <span className="g">Your Growth.</span></h2>
              </div>
            </div>
            <div className="trustgrid">
              <div className="tc rv">
                <span className="ti">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>
                </span>
                <b>UAE-Based Finance Partner</b>
                <p>Supporting businesses in the UAE with practical accounting, reporting, and finance solutions.</p>
              </div>

              <div className="tc rv">
                <span className="ti">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1.5 8.5 5-3 5 3-1.5-8.5"/></svg>
                </span>
                <b>Experienced Finance Professionals</b>
                <p>A team with expertise in accounting, reporting, cash flow management, and business insights.</p>
              </div>

              <div className="tc rv">
                <span className="ti">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>
                </span>
                <b>Technology-Enabled Finance</b>
                <p>Using modern finance tools and systems to improve accuracy, efficiency, and visibility.</p>
              </div>

              <div className="tc rv">
                <span className="ti">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                </span>
                <b>Confidential &amp; Secure</b>
                <p>Your financial information is handled with strict confidentiality and controlled access.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Finance Health Check Quiz & Confidential Report Section */}
        <section className="s" id="quiz" style={{ paddingTop: '0' }}>
          <div className="wrap">
            <div className="quiz" id="hs">
              {/* Left Column: Live Score & Unlock Gate */}
              <div className="qz-left">
                <span className="lbl">Free Finance Health Check</span>
                <h2>How healthy are your finances?</h2>
                <p>Answer 10 quick questions and receive a personalised Finance Health Report with your score, key risks, and practical recommendations to strengthen reporting, cash flow, and financial controls.</p>

                <div className="score" aria-live="polite">
                  <div className="big">
                    <span>{reportData.score}</span>
                    <small> / 100</small>
                  </div>
                  <div className="meter">
                    <i
                      style={{
                        width: `${reportData.score}%`,
                        backgroundColor: reportData.band.colour === 'amber' ? 'var(--amber)' : 'var(--green-hi)',
                      }}
                    />
                  </div>
                  <h4>{reportData.answeredCount === 0 ? 'Start answering' : reportData.band.title}</h4>
                  <p>
                    {reportData.answeredCount === 0
                      ? 'It takes about two minutes. Pick the answer closest to how things work today.'
                      : reportData.answeredCount < config.total
                      ? `${config.total - reportData.answeredCount} more to see your result.`
                      : reportData.band.text}
                  </p>
                  <div className="hs-progress">
                    {reportData.answeredCount} of {config.total} answered
                  </div>
                </div>

                {/* Email Gate Form to Unlock Full Report */}
                {allAnswered && !unlocked && (
                  <form className="hs-gate" onSubmit={handleUnlockGate} noValidate>
                    <h4>Your Finance Health Report is ready</h4>
                    <p>
                      We found {reportData.risks.length || 'no major'}{' '}
                      {reportData.risks.length === 1 ? 'risk' : 'risks'} and three priorities for you. Enter your work email to see your full report, including a 90-day improvement plan.
                    </p>
                    {gateMsg && (
                      <div className={`form-msg ${gateMsg.type}`} role="status">
                        {gateMsg.text}
                      </div>
                    )}
                    <label className="fl" htmlFor="hsEmail">
                      Work email
                      <input
                        id="hsEmail"
                        name="email"
                        type="email"
                        value={gateEmail}
                        onChange={(e) => setGateEmail(e.target.value)}
                        required
                        maxLength={160}
                        placeholder="you@company.com"
                      />
                    </label>
                    <div className="two">
                      <label className="fl" htmlFor="hsFirst">
                        First name <span className="opt">(optional)</span>
                        <input
                          id="hsFirst"
                          name="first_name"
                          type="text"
                          value={gateFirstName}
                          onChange={(e) => setGateFirstName(e.target.value)}
                          maxLength={60}
                        />
                      </label>
                      <label className="fl" htmlFor="hsCompany">
                        Company <span className="opt">(optional)</span>
                        <input
                          id="hsCompany"
                          name="company"
                          type="text"
                          value={gateCompany}
                          onChange={(e) => setGateCompany(e.target.value)}
                          maxLength={120}
                        />
                      </label>
                    </div>
                    <button type="submit" className="btn btn-mint" id="hsSubmit">
                      Show my free report <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
                    </button>
                    <p className="fine">We’ll also email you a copy. No spam, unsubscribe any time.</p>
                  </form>
                )}
              </div>

              {/* Right Column: 10 Questions across 5 Groups */}
              <div className="qs" id="hsQuestions">
                {(() => {
                  let globalQIndex = 0;
                  return config.areas.map((area) => (
                    <div className="qa-group" key={area.key}>
                      <div className="qa-h">{area.name}</div>
                      {area.questions.map((q) => {
                        const currentQIndex = globalQIndex++;
                        const isDone = answers[currentQIndex] !== undefined;
                        return (
                          <div
                            className={`hq ${isDone ? 'done' : ''}`}
                            role="radiogroup"
                            key={q.q}
                            aria-labelledby={`hql${currentQIndex}`}
                          >
                            <p id={`hql${currentQIndex}`}>
                              <span className="hq-n">
                                {currentQIndex < 9 ? `0${currentQIndex + 1}` : currentQIndex + 1}
                              </span>
                              {q.q}
                            </p>
                            <div className="hq-opts">
                              {q.options.map((opt, optIdx) => {
                                const isSelected = answers[currentQIndex] === optIdx;
                                return (
                                  <label
                                    key={opt.label}
                                    className={`hq-opt ${isSelected ? 'on' : ''}`}
                                    onClick={() => handleSelectOption(currentQIndex, optIdx)}
                                  >
                                    <input
                                      type="radio"
                                      name={`hq${currentQIndex}`}
                                      value={optIdx}
                                      checked={isSelected}
                                      onChange={() => handleSelectOption(currentQIndex, optIdx)}
                                    />
                                    <span>{opt.label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Generated Confidential Finance Health Report */}
            {unlocked && (
              <article className="hr" id="hsReport" tabIndex={-1}>
                <header className="hr-top">
                  <span className="hr-brand">
                    <span className="logo-tile">
                      <img src="/finackle-logo.png" alt="" width="21" height="30" />
                    </span>
                    Finackle
                  </span>
                  <span className="hr-conf">Finance Health Report · Confidential</span>
                </header>

                <div className="hr-title">
                  <div>
                    <h3>Finance Health Report</h3>
                    <p>
                      Prepared for <b>{gateCompany.trim() || gateFirstName.trim() || 'your business'}</b> ·{' '}
                      {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <div
                    className="hr-ring"
                    id="rpRing"
                    style={
                      {
                        '--p': reportData.score,
                        '--c': reportData.band.colour === 'amber' ? 'var(--amber)' : 'var(--green)',
                      } as React.CSSProperties
                    }
                  >
                    <b>{reportData.score}</b>
                    <small>/ 100</small>
                  </div>
                </div>

                <section className="hr-sec">
                  <h4><span>01</span>Executive summary</h4>
                  <p className="hr-lead">{reportData.summary}</p>
                </section>

                <section className="hr-sec">
                  <h4><span>02</span>Finance Health Score</h4>
                  <div className="hr-scoregrid">
                    <div>
                      <span className={`hr-band ${reportData.band.colour === 'amber' ? 'amber' : ''}`}>
                        {reportData.band.title}
                      </span>
                      <p className="hr-muted">{reportData.band.text}</p>
                      <div className="hr-scale" aria-hidden="true">
                        <span style={{ flex: 40 }}><i>At risk</i><em>0–39</em></span>
                        <span style={{ flex: 25 }}><i>Developing</i><em>40–64</em></span>
                        <span style={{ flex: 20 }}><i>Well managed</i><em>65–84</em></span>
                        <span style={{ flex: 16 }}><i>Strong financial control</i><em>85–100</em></span>
                        <b
                          className="hr-you"
                          style={{ left: `${Math.min(98, Math.max(2, reportData.score))}%` }}
                        >
                          You · {reportData.score}
                        </b>
                      </div>
                    </div>
                    <table className="hr-bench">
                      <tbody>
                        <tr><td>Your score</td><td><b>{reportData.score}</b>/100</td></tr>
                        <tr><td>Businesses with strong financial control</td><td><b>85+</b>/100</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="hr-sec">
                  <h4><span>03</span>Maturity by area</h4>
                  <div className="hr-areas">
                    {reportData.areas.map((ar) => (
                      <div
                        className={`hr-area ${ar.pct < config.attention_below ? 'weak' : ''}`}
                        key={ar.key}
                      >
                        <div className="hr-area-h">
                          <b>{ar.report_name}</b>
                          <span className="hr-lvl">{ar.level}</span>
                        </div>
                        <span className="hr-bar">
                          <i style={{ width: `${ar.pct}%` }}></i>
                        </span>
                        <div className="hr-area-f">
                          <span className="hr-pct">{ar.pct}%</span>
                        </div>
                        <ul className="hr-ans">
                          {ar.lines.map((ln) => (
                            <li key={ln.q}>{ln.a}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="hr-two">
                  <section className="hr-sec">
                    <h4><span>04</span>Biggest risks</h4>
                    <ul className="hr-risks">
                      {reportData.risks.length === 0 ? (
                        <li className="none">No major risks found. Every answer shows a well-run process.</li>
                      ) : (
                        reportData.risks.map((rk) => (
                          <li key={rk.text}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>
                            <div>
                              <b>{rk.text}</b>
                              <small>{rk.area}</small>
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </section>

                  <section className="hr-sec">
                    <h4><span>05</span>Top 3 priorities</h4>
                    <ol className="hr-wins">
                      {reportData.wins.map((wn) => (
                        <li key={wn.text}>
                          <div>
                            {wn.text}
                            <small>{wn.area}</small>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>

                <section className="hr-sec">
                  <h4><span>06</span>Suggested 90-day improvement plan</h4>
                  <div className="hr-plan">
                    <div>
                      <span className="tiny">Days 1–30</span>
                      <ul>
                        {reportData.plan[0].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="tiny">Days 31–60</span>
                      <ul>
                        {reportData.plan[1].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="tiny">Days 61–90</span>
                      <ul>
                        {reportData.plan[2].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="hr-time">
                    Estimated implementation: <b>{reportData.timeline}</b>
                  </p>
                </section>

                <section className="hr-rec">
                  <div>
                    <b>{reportData.recTitle}</b>
                    <p>{reportData.recText}</p>
                  </div>
                  <div className="hr-btns no-print">
                    <a className="btn btn-ink" href="#start">
                      Book my Finance Health Review <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
                    </a>
                    <button
                      type="button"
                      className="btn btn-line"
                      onClick={() => window.print()}
                    >
                      Print report
                    </button>
                  </div>
                  <form className="hr-wa no-print" onSubmit={handleWaFollowup} noValidate>
                    <label className="fl" htmlFor="rpPhone">
                      Want follow-up support on WhatsApp? Add your number.
                      <span className="hr-wa-row">
                        <input
                          id="rpPhone"
                          name="phone"
                          type="tel"
                          value={waPhone}
                          onChange={(e) => setWaPhone(e.target.value)}
                          maxLength={40}
                          placeholder="+971 5x xxx xxxx"
                        />
                        <button type="submit" className="btn btn-ink">Send</button>
                      </span>
                    </label>
                    {waMsg && (
                      <div className={`form-msg ${waMsg.type}`} role="status">
                        {waMsg.text}
                      </div>
                    )}
                  </form>
                </section>

                <p className="hr-foot">
                  This report is a quick self-assessment based on your answers, not an audit. Finackle F.Z.E. · info@finackle.com · +971 54 502 2747
                </p>
              </article>
            )}
          </div>
        </section>

        {/* 14. FAQ Section */}
        <section className="s" id="faq" style={{ paddingTop: '0' }}>
          <div className="wrap fgrid">
            <div>
              <span className="lbl">FAQ</span>
              <h2 style={{ fontSize: 'clamp(32px,4vw,46px)', lineHeight: 1.06, marginTop: '16px' }}>
                Questions before we talk
              </h2>
            </div>
            <div className="faqs">
              <details open>
                <summary>How is this different from a bookkeeper?<span className="pm" aria-hidden="true">+</span></summary>
                <p>A bookkeeper records transactions. We design and run your finance function: the structure, controls, reporting and compliance calendar, so the numbers stay reliable and useful as you grow.</p>
              </details>

              <details>
                <summary>Do you work with free zone and mainland companies?<span className="pm" aria-hidden="true">+</span></summary>
                <p>Yes. We support businesses across UAE free zones and the mainland, and shape reporting and compliance around your structure.</p>
              </details>

              <details>
                <summary>What does the Free Finance Health Check include?<span className="pm" aria-hidden="true">+</span></summary>
                <p>Two parts, both free. The 10-question Health Check gives you a personalised Finance Health Report straight away: your score, key risks, top priorities and a 90-day plan. If you like, we then go through it with you in a 30-minute Finance Health Review call and send a written summary. There is no obligation to continue.</p>
              </details>

              <details>
                <summary>Our books are behind. Can you still help?<span className="pm" aria-hidden="true">+</span></summary>
                <p>Yes. Clean-up is often where we start. We scope it with you and agree it before any work begins.</p>
              </details>

              <details>
                <summary>Which accounting software do you use?<span className="pm" aria-hidden="true">+</span></summary>
                <p>We work with leading cloud accounting systems and can build around what you already use. If you don’t have one yet, we’ll recommend the right fit for your size.</p>
              </details>

              <details>
                <summary>How do you keep our data secure?<span className="pm" aria-hidden="true">+</span></summary>
                <p>Access is limited to your assigned team, we use view-only bank access where possible, and your information is never shared without your permission.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 15. Final CTA & Working Contact Form Section */}
        <section className="s final" id="start">
          <div className="wrap fwrap">
            <div>
              <span className="lbl">Your next step</span>
              <h2>Book your free 30-minute Finance Health Review.</h2>
              <p className="intro">
                A straightforward conversation about how your finance is working today, and where more clarity and control could help.
              </p>
              <ul className="inc">
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>30-minute call with a qualified finance professional</li>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Review of your books, reporting and compliance</li>
                <li><svg width="16" height="16" aria-hidden="true"><use href="#ok" /></svg>Written summary of gaps and quick wins</li>
              </ul>
              <div className="reach">
                <div>
                  <span>
                    <small>WhatsApp / phone</small>
                    <a href="https://wa.me/971545022747" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <b>+971 54 502 2747</b>
                    </a>
                  </span>
                </div>
                <div>
                  <span>
                    <small>Email</small>
                    <a href="mailto:info@finackle.com" style={{ textDecoration: 'none' }}>
                      <b>info@finackle.com</b>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* PRESERVED PRODUCTION CONTACT FORM */}
            <form className="form" id="hc" onSubmit={handleContactSubmit} noValidate data-whatsapp="971545022747">
              <h3>Tell us a little about your business</h3>

              {formStatus && (
                <div className={`form-msg ${formStatus.type}`} id="formMsg" role="status">
                  {formStatus.text}
                </div>
              )}

              <div className="two">
                <label className="fl" htmlFor="fn">
                  Your name
                  <input
                    id="fn"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </label>
                <label className="fl" htmlFor="fe">
                  Work email
                  <input
                    id="fe"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    placeholder="you@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="fl" htmlFor="fb">
                What kind of business do you run?
                <select
                  id="fb"
                  name="business"
                  value={formBusiness}
                  onChange={(e) => setFormBusiness(e.target.value)}
                >
                  <option value="E-commerce">E-commerce</option>
                  <option value="F&B / restaurants">F&amp;B / restaurants</option>
                  <option value="Trading & distribution">Trading &amp; distribution</option>
                  <option value="Professional services">Professional services</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="fl" htmlFor="fx">
                What do you most want clarity on?
                <select
                  id="fx"
                  name="focus"
                  value={formFocus}
                  onChange={(e) => setFormFocus(e.target.value)}
                >
                  <option value="Profitability">Profitability</option>
                  <option value="Cash flow">Cash flow</option>
                  <option value="VAT / Corporate Tax">VAT / Corporate Tax</option>
                  <option value="Books that are behind">Books that are behind</option>
                  <option value="Planning a big decision">Planning a big decision</option>
                </select>
              </label>

              {/* Spam protection Honeypot */}
              <div className="hp" aria-hidden="true">
                <label>
                  Leave this empty
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formHp}
                    onChange={(e) => setFormHp(e.target.value)}
                  />
                </label>
              </div>
              <input type="hidden" name="ts" value={Date.now().toString()} />

              <button type="submit" className="btn btn-mint" id="send" disabled={formSubmitting}>
                {formSubmitting ? 'Submitting...' : 'Request my Finance Health Review'}{' '}
                <svg width="18" height="18" aria-hidden="true"><use href="#arr" /></svg>
              </button>
              <p className="fine">
                We reply within one business day. No obligation. Not ready for a call?{' '}
                <a href="#quiz">Take the 2-minute Health Check</a>.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* 16. Footer */}
      <footer>
        <div className="wrap">
          <div className="fg">
            <div style={{ maxWidth: '360px' }}>
              <a className="brand" href="#top">
                <span className="logo-tile">
                  <img src="/finackle-logo.png" alt="" width="21" height="30" />
                </span>
                Finackle
              </a>
              <p style={{ marginTop: '14px', fontSize: '15px' }}>
                Turning financial data into clarity, control and better business decisions for growing UAE businesses.
              </p>
            </div>
            <div className="fc">
              <div>
                <b>Explore</b>
                <a href="#quiz">Free Health Check</a>
                <a href="#services">Services</a>
                <a href="#who">Industries</a>
                <a href="#process">How it works</a>
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
              </div>
              <div>
                <b>Contact</b>
                <a href="mailto:info@finackle.com">info@finackle.com</a>
                <a href="https://wa.me/971545022747" target="_blank" rel="noopener noreferrer">+971 54 502 2747</a>
                <span>Ajman Free Zone, UAE</span>
              </div>
            </div>
          </div>
          <div className="fb">
            <span>© 2026 Finackle F.Z.E. All rights reserved.</span>
            <span>Finance operations · Reporting · Compliance · CFO advisory</span>
          </div>
        </div>
      </footer>

      {/* 17. Persistent Floating WhatsApp Consultation Launcher */}
      <a
        className="wa"
        href="https://wa.me/971545022747"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg width="22" height="22" aria-hidden="true"><use href="#wa" /></svg>
        <span className="txt">WhatsApp</span>
      </a>

      {/* 18. Fullscreen Toggle Button */}
      <button
        type="button"
        className="fs"
        id="fsBtn"
        aria-label={isFullscreen ? 'Exit full screen' : 'View full screen'}
        onClick={toggleFullscreen}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {isFullscreen ? (
            <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
          ) : (
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          )}
        </svg>
        <span className="txt">{isFullscreen ? 'Exit full screen' : 'Full screen'}</span>
      </button>

      {/* 19. Section Spy Navigation Dots */}
      <nav className="secnav" id="secnav" aria-label="Jump to section">
        {[
          ['top', 'Home'],
          ['services', 'Services'],
          ['challenge', 'The challenge'],
          ['how', 'How we help'],
          ['who', 'Industries'],
          ['process', 'How it works'],
          ['about', 'About'],
          ['quiz', 'Health Check'],
          ['faq', 'FAQ'],
          ['start', 'Contact'],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeNavDot === id ? 'on' : ''}
            data-s={id}
          >
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;
