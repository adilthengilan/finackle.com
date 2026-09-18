import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheChallenge } from './components/TheChallenge';
import { CreateValue } from './components/CreateValue';
import { Industries } from './components/Industries';
import { ConnectedFinanceFunction } from './components/ConnectedFinanceFunction';
import { MonthlyReporting } from './components/MonthlyReporting';
import { WhyFinackle } from './components/WhyFinackle';
import { WhoWeHelp } from './components/WhoWeHelp';
import { OurApproach } from './components/OurApproach';
import { About } from './components/About';
import { HealthCheckCTA } from './components/HealthCheckCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] text-[#111827] font-sans antialiased selection:bg-[#142360] selection:text-white">
      {/* 01. Navigation */}
      <Header />

      {/* 02. Hero ("Turning Financial Data into Better Business Decisions") */}
      <Hero />

      {/* 03. The Challenge (Business problems Finackle solves) */}
      <TheChallenge />

      {/* 04. How We Create Value */}
      <CreateValue />

      {/* 05. Industries (E-commerce, Restaurants & F&B, Trading & Distribution, Professional Services) */}
      <Industries />

      {/* 06. One Connected Finance Function */}
      <ConnectedFinanceFunction />

      {/* 07 & 08. Monthly Reporting (Financial Dashboard) & Questions We Help Answer */}
      <MonthlyReporting />

      {/* 09. Why Finackle (Trust Section) */}
      <WhyFinackle />

      {/* 10. Who We Help (Growing-Business Situations) */}
      <WhoWeHelp />

      {/* 11. Our Approach (Three Pillars) */}
      <OurApproach />

      {/* 12. About Finackle (Company Story & Positioning) */}
      <About />

      {/* 13 & 14. Final CTA & Contact Form (Finance Health Check) */}
      <HealthCheckCTA />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}

export default App;
