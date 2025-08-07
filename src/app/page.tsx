import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 프론트엔드 개발자 포트폴리오. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
