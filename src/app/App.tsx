import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Standards } from "./components/Standards";
import { Work } from "./components/Work";
import { NeedHelp } from "./components/NeedHelp";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <main>
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        <Header />
        <Hero />
        <Services />
        <Standards />
        <Work />
        <NeedHelp />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}