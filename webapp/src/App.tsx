import { LangProvider } from "@/hooks/use-lang";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Wedge } from "@/components/wedge";
import { HowItWorks } from "@/components/how-it-works";
import { LiveMonitor } from "@/components/live-monitor";
import { Novelties } from "@/components/novelties";
import { Achievements } from "@/components/achievements";
import { Resources } from "@/components/resources";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

function App() {
  return (
    <LangProvider>
      <div id="top">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Wedge />
          <HowItWorks />
          <LiveMonitor />
          <Novelties />
          <Achievements />
          <Resources />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
