import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, CheckCircle2, Clock, Calendar, ShieldCheck, Send } from 'lucide-react';

export const HealthCheckCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="health-check" className="py-24 px-6 md:px-12 bg-[#13215D] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#142360]/40 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section 15: Final CTA Banner */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#142360] to-[#13215D] rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-2xl mb-20 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14CBC9]" />
              Structured Finance Review
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Book Your Finance Health Check
            </h2>

            <p className="text-slate-100 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
              A structured review of your reporting, cash flow visibility, and finance processes to identify opportunities for better decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#health-check-form"
                className="w-full sm:w-auto bg-white text-[#142360] px-8 py-4 rounded-full font-bold hover:bg-[#EEF2FB] transition-all shadow-lg flex items-center justify-center gap-2 text-base"
              >
                Book Your Finance Health Check
                <ArrowRight className="w-4 h-4 text-[#142360]" />
              </a>
              <a 
                href="#finance-function"
                className="w-full sm:w-auto bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-base backdrop-blur-sm"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 16: Simplified Contact Form */}
        <div id="health-check-form" className="scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Value Proposition */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#EEF2FB] text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                  <Calendar className="w-3.5 h-3.5 text-blue-200" />
                  Direct Scheduling
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                  Start the Conversation With an Experienced Finance Team
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  No sales pitches or rigid contracts. Tell us about your business, where the numbers feel cloudy, and we will outline how better visibility can start.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Review of Current Reporting</h4>
                      <p className="text-xs text-slate-300">We assess what your monthly reports currently tell you vs. what you need to know.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Cash & Margin Visibility Check</h4>
                      <p className="text-xs text-slate-300">Identify whether operating margins and working capital cycles are clearly tracked.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Confidential & Practical</h4>
                      <p className="text-xs text-slate-300">Your commercial numbers remain secure and discussions are strictly confidential.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Simplified Low-Friction Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-[#13215D] shadow-2xl border border-[#E5EAF2]">
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#13215D] mb-2">
                        Finance Health Check Requested
                      </h4>
                      <p className="text-[#667085] text-sm max-w-md mx-auto mb-8 leading-relaxed">
                        Thank you, {formData.fullName}. A member of our strategic finance advisory team will contact you shortly to confirm a convenient time to connect.
                      </p>
                      <button 
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ fullName: '', companyName: '', email: '', phone: '', message: '' });
                        }}
                        className="bg-[#142360] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#13215D] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="mb-2">
                        <h4 className="text-2xl font-bold text-[#13215D] mb-1">
                          Book Your Finance Health Check
                        </h4>
                        <p className="text-xs text-[#667085]">
                          Fill in your details below and our team will get in touch within one business day.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold text-[#13215D] uppercase tracking-wider mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text"
                            required
                            placeholder="e.g. John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] text-sm text-[#13215D] focus:outline-none focus:border-[#142360] focus:ring-2 focus:ring-[#142360]/10 bg-[#F6F8FC]"
                          />
                        </div>

                        {/* Company Name */}
                        <div>
                          <label className="block text-xs font-bold text-[#13215D] uppercase tracking-wider mb-2">
                            Company Name
                          </label>
                          <input 
                            type="text"
                            placeholder="e.g. Acme Trading LLC"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] text-sm text-[#13215D] focus:outline-none focus:border-[#142360] focus:ring-2 focus:ring-[#142360]/10 bg-[#F6F8FC]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-[#13215D] uppercase tracking-wider mb-2">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] text-sm text-[#13215D] focus:outline-none focus:border-[#142360] focus:ring-2 focus:ring-[#142360]/10 bg-[#F6F8FC]"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-[#13215D] uppercase tracking-wider mb-2">
                            Phone Number
                          </label>
                          <input 
                            type="tel"
                            placeholder="+971 50 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] text-sm text-[#13215D] focus:outline-none focus:border-[#142360] focus:ring-2 focus:ring-[#142360]/10 bg-[#F6F8FC]"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-[#13215D] uppercase tracking-wider mb-2">
                          Message / Key Questions You Want to Answer
                        </label>
                        <textarea 
                          rows={3}
                          placeholder="Tell us briefly about your current finance setup or questions you are trying to solve..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E5EAF2] text-sm text-[#13215D] focus:outline-none focus:border-[#142360] focus:ring-2 focus:ring-[#142360]/10 bg-[#F6F8FC]"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-[#142360] text-white py-4 px-8 rounded-full font-bold hover:bg-[#1a2e7c] transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-black/20 mt-2"
                      >
                        Book Your Finance Health Check
                        <Send className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] text-[#667085] text-center mt-3 font-medium">
                        Strict confidentiality guaranteed. We will not share your contact details.
                      </p>
                    </form>
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
