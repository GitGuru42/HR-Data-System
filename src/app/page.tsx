import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeOffer from '@/components/WhatWeOffer';
import Problems from '@/components/Problems';
import Solution from '@/components/Solution';
import Architecture from '@/components/Architecture';
import Benefits from '@/components/Benefits';
import Implementation from '@/components/Implementation';
import Pricing from '@/components/Pricing';
import Advantages from '@/components/Advantages';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhatWeOffer />
      <Problems />
      <Solution />
      <Architecture />
      <Benefits />
      <Implementation />
      <Pricing />
      <Advantages />
      <Contact />
    </main>
  );
}
