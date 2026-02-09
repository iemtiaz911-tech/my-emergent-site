import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[240px] pb-[160px] px-10 flex flex-col items-center text-center overflow-hidden">
        <div className="atmospheric-glow"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          <span className="inline-block text-metadata tracking-[0.5em] text-[10px] uppercase font-bold border-b border-border-main/40 pb-3">
            Engineering Conversions For Ecom Brands
          </span>
          <h1 className="text-6xl md:text-[84px] leading-[1.05] tracking-tight">
            Most Agencies Create Content.<br/>
            <span className="italic text-body-text">We Engineer Conversions.</span>
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-body-text max-w-3xl mx-auto leading-relaxed">
            High-performance assets, AI-enabled UGC, and Meta engineering that transforms attention into measurable capital.
          </p>
          <div className="pt-10 flex flex-col items-center gap-8">
            <a 
              href="https://calendly.com/iemtiaz911/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-button text-white px-12 py-6 rounded-full text-lg font-bold tracking-tight active:scale-95 transition-all btn-glow-hover border border-border-main"
            >
              Start Your Growth Engine
            </a>
            <p className="text-metadata text-[10px] uppercase tracking-[0.4em] font-medium">Trusted by 50+ Global E-commerce Entities</p>
          </div>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.6em] text-metadata">Explore</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-border-main to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border-main bg-secondary-bg/30">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center space-y-4">
              <span className="font-serif text-5xl md:text-6xl text-white font-light">$100M+</span>
              <span className="text-metadata text-[10px] uppercase tracking-[0.3em]">Ad Spend Managed</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="font-serif text-5xl md:text-6xl text-white font-light">4.5x</span>
              <span className="text-metadata text-[10px] uppercase tracking-[0.3em]">Avg Account ROAS</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="font-serif text-5xl md:text-6xl text-white font-light">50+</span>
              <span className="text-metadata text-[10px] uppercase tracking-[0.3em]">Scale-Up Brands</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="font-serif text-5xl md:text-6xl text-white font-light">$500M+</span>
              <span className="text-metadata text-[10px] uppercase tracking-[0.3em]">Revenue Generated</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Arsenal Section */}
      <section id="arsenal" className="section-spacing px-6 relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-silver-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif italic">The <span className="text-body-text not-italic">Arsenal</span></h2>
              <p className="text-body-text text-xl max-w-xl leading-relaxed">A data-first methodology for creative production and mathematical media buying.</p>
            </div>
            <Link 
              to="/case-studies"
              className="text-white flex items-center gap-4 font-bold text-[10px] uppercase tracking-[0.3em] group border-b border-border-main pb-3 hover:border-silver-accent transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4 text-body-text group-hover:translate-x-1 group-hover:text-silver-accent transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Creative Strategy Card */}
            <div className="group bg-secondary-bg border border-border-main p-12 rounded-[40px] hover:border-silver-accent transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
              <div className="mb-10 overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  alt="Creative Strategy" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  src="https://images.unsplash.com/photo-1758876022473-d3d8513f15d3"
                />
              </div>
              <span className="text-metadata text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Core Strategy</span>
              <h3 className="font-serif text-4xl text-white mb-6 italic">Creative Strategy</h3>
              <p className="text-body-text leading-relaxed mb-10 text-base">Engineering high-converting hooks and narratives that stop the scroll and drive intense purchase intent.</p>
              <div className="w-full h-px bg-border-main/30 mb-10"></div>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  Competitor Deconstruction
                </li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  Avatar Deep-Dives
                </li>
              </ul>
            </div>

            {/* AI UGC Production Card */}
            <div className="group bg-secondary-bg border border-border-main p-12 rounded-[40px] hover:border-silver-accent transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
              <div className="mb-10 overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  alt="AI UGC Production" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  src="https://images.unsplash.com/photo-1764664035163-f8f29058e557"
                />
              </div>
              <span className="text-metadata text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Next-Gen Content</span>
              <h3 className="font-serif text-4xl text-white mb-6 italic">AI UGC Production</h3>
              <p className="text-body-text leading-relaxed mb-10 text-base">Scale your content output effortlessly with AI-enhanced content that feels authentic yet professional.</p>
              <div className="w-full h-px bg-border-main/30 mb-10"></div>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  Rapid Iteration Testing
                </li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  Creator Management
                </li>
              </ul>
            </div>

            {/* Media Engineering Card */}
            <div className="group bg-secondary-bg border border-border-main p-12 rounded-[40px] hover:border-silver-accent transition-all duration-700 hover:-translate-y-3 relative overflow-hidden">
              <div className="mb-10 overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  alt="Paid Media Engineering" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  src="https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff"
                />
              </div>
              <span className="text-metadata text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Growth Engine</span>
              <h3 className="font-serif text-4xl text-white mb-6 italic">Media Engineering</h3>
              <p className="text-body-text leading-relaxed mb-10 text-base">Precision-led Meta and Google Ads management focusing on lifetime value and incremental scale.</p>
              <div className="w-full h-px bg-border-main/30 mb-10"></div>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  Account Architecture
                </li>
                <li className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-body-text">
                  <CheckCircle className="w-5 h-5 text-metadata" />
                  LTV-Driven Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary-bg relative overflow-hidden border-y border-border-main">
        <div className="atmospheric-glow opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
            Stop Guessing. <br/>
            <span className="text-body-text not-italic">Start Engineering Scale.</span>
          </h2>
          <p className="text-body-text text-xl max-w-2xl mx-auto leading-relaxed">
            We only partner with 3 new brands per quarter to ensure elite-level attention. Secure your slot for the upcoming season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <a 
              href="https://calendly.com/iemtiaz911/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-button text-white px-12 py-5 rounded-full text-lg font-bold w-full sm:w-auto transition-all btn-glow-hover border border-border-main"
            >
              Book Discovery Call
            </a>
            <Link 
              to="/case-studies"
              className="bg-transparent text-body-text px-12 py-5 rounded-full text-lg font-bold w-full sm:w-auto transition-all duration-300 border border-border-main hover:border-silver-accent hover:text-white"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
