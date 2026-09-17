import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FinanceSupport } from "./components/FinanceSupport";
import { Services } from "./components/Services";
import { Reporting } from "./components/Reporting";
import { Process } from "./components/Process";
import { Insights } from "./components/Insights";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F7FA] font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden text-gray-900">
      <Header />
      <main>
        <Hero />
        <FinanceSupport />
        <Services />
        <Reporting />
        <Process />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}
