import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { WorkStack } from "@/components/site/work-stack";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { WhyUs } from "@/components/site/why-us";
import { Pricing } from "@/components/site/pricing";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Marquee } from "@/components/site/marquee";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <WorkStack />
      <Services />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Faq />
      <Marquee />
      <Footer />
    </main>
  );
}
