import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import TechStack from '@/components/home/TechStack';
import Process from '@/components/home/Process';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <Process />
      <WhyUs />
      <CTA />
    </>
  );
}
