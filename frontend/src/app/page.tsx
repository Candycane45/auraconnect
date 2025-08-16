import CallToAction from "@/Components/CallToAction/CallToAction";
import Footer from "@/Components/Footer/Footer";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Navbar from "@/Components/Navbar/Navbar";
import NearbyEvents from "@/Components/NearbyEvent/NearbyEvents";
import StatsSection from "@/Components/StatsSection/StatsSection";
import Testimonials from "@/Components/Testimonials/Testimonials";
import TrendingEvents from "@/Components/TrendingEvents/TrendingEvents";

export default function Home() {
  return (
    <div className="display-full">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TrendingEvents />
      <NearbyEvents />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
