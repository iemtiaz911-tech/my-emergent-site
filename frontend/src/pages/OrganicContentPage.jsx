import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export const OrganicContentPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="atmospheric-glow"></div>
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <span className="metadata-text block mb-8">Service Category 01</span>
          <h1 className="font-serif italic text-white text-6xl md:text-[110px] leading-[0.95] font-light mb-8">
            Organic <span className="text-body-text">Content</span>
          </h1>
          <p className="text-body-text text-xl md:text-[32px] font-light max-w-2xl mx-auto leading-tight italic font-serif mb-12">
            Editorial quality designed to build lasting brand equity.
          </p>
          <a 
            href="https://calendly.com/iemtiaz911/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cta-button text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest transition-all btn-glow-hover border border-border-main"
          >
            Engineer Your Content
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-border-main to-transparent mx-auto"></div>
        </div>
      </header>

      {/* The Strategic Shift Section */}
      <section className="bg-secondary-bg section-spacing px-6 relative border-y border-border-main/20">
        <div className="atmospheric-glow opacity-50"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-32 text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-white">
              The Strategic <span className="text-body-text">Shift</span>
            </h2>
            <p className="text-body-text text-lg max-w-lg mx-auto">Modern digital distribution requires a departure from noise-based marketing tactics.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Legacy Approach Card */}
            <div className="bg-primary-bg p-12 rounded-[2.5rem] border border-border-main relative overflow-hidden group hover:border-silver-accent/30 transition-colors duration-500">
              <div className="relative z-10">
                <h3 className="text-white text-3xl font-serif mb-12 flex items-center gap-4 italic">
                  <X className="text-border-main w-5 h-5" />
                  Legacy Approach
                </h3>
                <ul className="space-y-10">
                  <li className="flex items-start gap-6">
                    <span className="metadata-text mt-1 opacity-50">01</span>
                    <p className="leading-relaxed text-body-text">Volume-first distribution leading to audience fatigue.</p>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="metadata-text mt-1 opacity-50">02</span>
                    <p className="leading-relaxed text-body-text">Generic templates devoid of unique brand voice.</p>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="metadata-text mt-1 opacity-50">03</span>
                    <p className="leading-relaxed text-body-text">Misaligned channels targeting vanity metrics.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Flinza Way Card */}
            <div className="bg-cta-button p-12 rounded-[2.5rem] border border-border-main/50 relative overflow-hidden group hover:border-silver-accent transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,208,207,0.1),transparent_50%)]"></div>
              <div className="relative z-10">
                <h3 className="text-white text-3xl font-serif mb-12 flex items-center gap-4 italic">
                  <CheckCircle className="text-silver-accent w-6 h-6" />
                  The Flinza Way
                </h3>
                <ul className="space-y-10">
                  <li className="flex items-start gap-6 text-white">
                    <span className="metadata-text mt-1 text-silver-accent">01</span>
                    <p className="leading-relaxed font-medium">Strategy-led content designed for high conversion.</p>
                  </li>
                  <li className="flex items-start gap-6 text-white">
                    <span className="metadata-text mt-1 text-silver-accent">02</span>
                    <p className="leading-relaxed font-medium">Editorial standards that establish authority.</p>
                  </li>
                  <li className="flex items-start gap-6 text-white">
                    <span className="metadata-text mt-1 text-silver-accent">03</span>
                    <p className="leading-relaxed font-medium">Synergistic distribution across premium touchpoints.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="bg-primary-bg section-spacing px-6 relative">
        <div className="atmospheric-glow"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
            <div>
              <span className="metadata-text mb-6 block">The Methodology</span>
              <h2 className="font-serif italic text-white text-6xl md:text-8xl">
                The <span className="text-body-text">Process</span>
              </h2>
            </div>
            <div className="border-l border-border-main pl-10">
              <p className="text-body-text text-xl leading-relaxed font-light">
                A rigorous four-phase engine designed to transform your organic presence into a compounding revenue asset.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <div className="bg-secondary-bg p-16 rounded-[2rem] border border-border-main hover:border-silver-accent transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
              <span className="metadata-text opacity-50 group-hover:opacity-100 transition-opacity">Phase 01</span>
              <div>
                <h3 className="font-serif italic text-white text-[40px] leading-tight mb-6">
                  Discovery & <br/>Strategy
                </h3>
                <p className="text-body-text leading-relaxed text-base">
                  Deep immersion into your brand DNA and market positioning to build a precision roadmap.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-secondary-bg p-16 rounded-[2rem] border border-border-main hover:border-silver-accent transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
              <span className="metadata-text opacity-50 group-hover:opacity-100 transition-opacity">Phase 02</span>
              <div>
                <h3 className="font-serif italic text-white text-[40px] leading-tight mb-6">
                  Content <br/>Engineering
                </h3>
                <p className="text-body-text leading-relaxed text-base">
                  Crafting high-value assets that resonate with sophisticated decision-makers.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-secondary-bg p-16 rounded-[2rem] border border-border-main hover:border-silver-accent transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
              <span className="metadata-text opacity-50 group-hover:opacity-100 transition-opacity">Phase 03</span>
              <div>
                <h3 className="font-serif italic text-white text-[40px] leading-tight mb-6">
                  Distribution <br/>Grid
                </h3>
                <p className="text-body-text leading-relaxed text-base">
                  Precision-targeted publishing across the channels where your audience resides.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-secondary-bg p-16 rounded-[2rem] border border-border-main hover:border-silver-accent transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
              <span className="metadata-text opacity-50 group-hover:opacity-100 transition-opacity">Phase 04</span>
              <div>
                <h3 className="font-serif italic text-white text-[40px] leading-tight mb-6">
                  Iterative <br/>Growth
                </h3>
                <p className="text-body-text leading-relaxed text-base">
                  Compounding reach through data-driven refinement and tactical optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-primary-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-secondary-bg rounded-[4rem] border border-border-main p-16 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,208,207,0.1),transparent_70%)]"></div>
            <div className="relative z-10">
              <span className="metadata-text mb-10 block">Ready to scale</span>
              <h2 className="font-serif italic text-white text-4xl md:text-7xl mb-12 max-w-4xl mx-auto leading-[1.05]">
                Build your digital <span className="text-body-text">authority.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a 
                  href="https://calendly.com/iemtiaz911/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-cta-button text-white px-14 py-5 rounded-full text-sm uppercase tracking-widest transition-all btn-glow-hover border border-border-main group"
                >
                  Schedule Strategy Session
                  <ArrowRight className="w-4 h-4 text-silver-accent group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/case-studies"
                  className="bg-transparent text-body-text px-14 py-5 rounded-full text-sm uppercase tracking-widest border border-border-main hover:border-silver-accent hover:text-white transition-all"
                >
                  View Portfolio
                </a>
              </div>
              <p className="metadata-text mt-16 opacity-40">Limited availability for Q3 intake</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
