import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-background">
      <Navbar />

       
      <HeroSection/>
    </main>
  );
}