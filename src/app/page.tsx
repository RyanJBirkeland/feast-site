import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Personas } from "@/components/Personas";
import { HowItWorks } from "@/components/HowItWorks";
import { AppPreview } from "@/components/AppPreview";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";

const LIVE = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

export default function Home() {
  if (!LIVE) return <ComingSoon />;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Personas />
        <HowItWorks />
        <AppPreview />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
