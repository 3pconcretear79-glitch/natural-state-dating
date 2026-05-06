import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VerifiedBadge from "@/components/VerifiedBadge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <VerifiedBadge />
      <Footer />
    </main>
  );
}
