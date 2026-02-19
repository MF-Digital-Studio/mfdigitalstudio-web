import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Standards } from "../components/Standards";
import { Work } from "../components/Work";
import { AboutCredibility } from "../components/AboutCredibility";
import { NeedHelp } from "../components/NeedHelp";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Standards />
      <Work />
      <AboutCredibility />
      <NeedHelp />
      <About />
      <Contact />
    </main>
  );
}

