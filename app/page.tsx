import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(248,180,71,0.22),_transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.24),_transparent_65%)]" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(17,24,39,0.08),_transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(14,165,233,0.18),_transparent_65%)]" />
      </div>
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
