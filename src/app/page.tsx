import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Personas } from "@/components/Personas";
import { HowItWorks } from "@/components/HowItWorks";
import { AppPreview } from "@/components/AppPreview";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
export default function Home() {

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
