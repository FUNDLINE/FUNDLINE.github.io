import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Features from "./components/Features";
import LogoMarquee from "./components/LogoMarquee";
import CalculatorSuite from "./components/CalculatorSuite";
import ReturnsCompare from "./components/ReturnsCompare";
import GoalPlanner from "./components/GoalPlanner";
import RiskProfile from "./components/RiskProfile";
import Partners from "./components/Partners";
import Products from "./components/Products";
import AppShowcase from "./components/AppShowcase";
import Trust from "./components/Trust";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import MobileBottomBar from "./components/MobileBottomBar";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <LogoMarquee />
        <ReturnsCompare />
        <CalculatorSuite />
        <GoalPlanner />
        <RiskProfile />
        <Partners />
        <Products />
        <AppShowcase />
        <Trust />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
