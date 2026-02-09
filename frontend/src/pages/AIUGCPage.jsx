import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { X, CheckCircle, Brain, Zap, Sparkles, TrendingUp, Video, Repeat, FileEdit } from 'lucide-react';

export const AIUGCPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[240px] pb-[160px] px-10 flex flex-col items-center text-center overflow-hidden">
        <div className="atmospheric-glow"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="text-silver-accent text-[11px] font-bold tracking-[0.4em] uppercase block mb-12">Service Category 02</span>
          <h1 className="text-7xl md:text-[120px] mb-10 leading-[0.95]">AI <span className="text-body-text">UGC</span></h1>
          <p className="text-2xl md:text-[32px] font-light text-body-text leading-relaxed max-w-3xl mx-auto font-serif italic">
            The intersection of performance and rapid iteration.
          </p>
          <div className="mt-20 h-px w-32 bg-border-main mx-auto"></div>
        </div>
      </section>

      {/* Bottleneck vs Breakthrough Section */}
      <section className="bg-secondary-bg section-spacing px-10 border-y border-border-main/30 relative overflow-hidden">
        <div className="atmospheric-glow opacity-50"></div>
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-serif italic text-white mb-24">
            Bottleneck <span className="text-body-text">vs</span> Breakthrough
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way Card */}
            <div className="bg-primary-bg/40 border border-border-main p-14 rounded-[48px] flex flex-col gap-10 transition-all">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-metadata">Traditional</span>
                <h3 className="text-4xl text-white font-serif italic">Old Way</h3>
              </div>
              <ul className="flex flex-col gap-6 text-body-text">
                <li className="flex items-center gap-4">
                  <X className="text-metadata w-5 h-5" />
                  Slow production (4-6 weeks)
                </li>
                <li className="flex items-center gap-4">
                  <X className="text-metadata w-5 h-5" />
                  High fixed talent costs
                </li>
                <li className="flex items-center gap-4">
                  <X className="text-metadata w-5 h-5" />
                  Limited testing variations
                </li>
              </ul>
            </div>

            {/* Flinza Way Card */}
            <div className="bg-cta-button border border-border-main p-14 rounded-[48px] flex flex-col gap-10 relative overflow-hidden group shadow-2xl card-hover transition-all duration-300">
              <div className="absolute top-0 right-0 bg-silver-accent text-primary-bg text-[9px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-[20px]">Innovative</div>
              <div className="flex flex-col gap-3">
                <span className="text-silver-accent text-[10px] font-bold tracking-widest uppercase">The Breakthrough</span>
                <h3 className="text-4xl text-white font-serif italic">Flinza Way</h3>
              </div>
              <ul className="flex flex-col gap-6 text-white/90">
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-silver-accent w-6 h-6" />
                  Real-time generation & scaling
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-silver-accent w-6 h-6" />
                  Fractional cost per asset
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-silver-accent w-6 h-6" />
                  Infinite demographic variations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="bg-primary-bg section-spacing px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8">
              Our <span className="text-body-text">Methodology</span>
            </h2>
            <div className="h-px w-24 bg-border-main"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary-bg p-10 rounded-[32px] relative min-h-[340px] flex flex-col justify-end border border-border-main card-hover transition-all duration-500 group">
              <span className="absolute top-6 right-8 font-serif italic text-[72px] text-border-main/20 pointer-events-none group-hover:text-silver-accent/10 transition-colors">01</span>
              <Brain className="text-silver-accent mb-6 w-8 h-8" />
              <h4 className="text-2xl text-white mb-3 font-serif italic">Strategic Input</h4>
              <p className="text-[14px] text-body-text leading-relaxed">Defining core messaging hooks and audience personas for AI synthesis.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-secondary-bg p-10 rounded-[32px] relative min-h-[340px] flex flex-col justify-end border border-border-main card-hover transition-all duration-500 group">
              <span className="absolute top-6 right-8 font-serif italic text-[72px] text-border-main/20 pointer-events-none group-hover:text-silver-accent/10 transition-colors">02</span>
              <Zap className="text-silver-accent mb-6 w-8 h-8" />
              <h4 className="text-2xl text-white mb-3 font-serif italic">Synthesis</h4>
              <p className="text-[14px] text-body-text leading-relaxed">Hyper-realistic AI model generation tailored to brand aesthetic.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-secondary-bg p-10 rounded-[32px] relative min-h-[340px] flex flex-col justify-end border border-border-main card-hover transition-all duration-500 group">
              <span className="absolute top-6 right-8 font-serif italic text-[72px] text-border-main/20 pointer-events-none group-hover:text-silver-accent/10 transition-colors">03</span>
              <Sparkles className="text-silver-accent mb-6 w-8 h-8" />
              <h4 className="text-2xl text-white mb-3 font-serif italic">Augmentation</h4>
              <p className="text-[14px] text-body-text leading-relaxed">Layering native elements, music, and captions for organic feel.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-secondary-bg p-10 rounded-[32px] relative min-h-[340px] flex flex-col justify-end border border-border-main card-hover transition-all duration-500 group">
              <span className="absolute top-6 right-8 font-serif italic text-[72px] text-border-main/20 pointer-events-none group-hover:text-silver-accent/10 transition-colors">04</span>
              <TrendingUp className="text-silver-accent mb-6 w-8 h-8" />
              <h4 className="text-2xl text-white mb-3 font-serif italic">Scale</h4>
              <p className="text-[14px] text-body-text leading-relaxed">Rapidly deploying variations based on early performance signals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-secondary-bg section-spacing px-10 border-y border-border-main relative overflow-hidden">
        <div className="atmospheric-glow opacity-30"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-serif italic text-white mb-24">
            What's <span className="text-body-text">Included</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[48px] flex flex-col gap-8 card-hover transition-all">
              <Video className="text-silver-accent w-12 h-12" />
              <h4 className="text-2xl text-white font-serif italic">15+ AI UGC Assets</h4>
              <p className="text-body-text text-[15px] leading-relaxed">High-definition vertical video assets featuring diverse AI personas perfectly matched to your brand's core demographic.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[48px] flex flex-col gap-8 card-hover transition-all">
              <Repeat className="text-silver-accent w-12 h-12" />
              <h4 className="text-2xl text-white font-serif italic">Iterative Variations</h4>
              <p className="text-body-text text-[15px] leading-relaxed">Different hook and body combinations to allow for extensive A/B testing across TikTok, Meta, and YouTube Shorts.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[48px] flex flex-col gap-8 card-hover transition-all">
              <FileEdit className="text-silver-accent w-12 h-12" />
              <h4 className="text-2xl text-white font-serif italic">Script Engineering</h4>
              <p className="text-body-text text-[15px] leading-relaxed">Performance-focused copywriting designed specifically for high-retention short-form video engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-bg section-spacing px-10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] atmospheric-glow blur-[100px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-[86px] leading-[1] font-serif italic text-white mb-16">
            Ready to <span className="text-body-text">redefine</span> <br/>your performance creative?
          </h2>
          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://calendly.com/iemtiaz911/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-button hover:bg-cta-button/90 text-white text-[13px] font-bold uppercase tracking-[0.3em] px-14 py-6 rounded-full transition-all border border-border-main shadow-2xl btn-glow-hover"
            >
              Book A Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
