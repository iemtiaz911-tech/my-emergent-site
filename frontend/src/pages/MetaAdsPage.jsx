import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Sparkles, Target, BarChart3 } from 'lucide-react';

export const MetaAdsPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary-bg section-spacing px-6 flex items-center justify-center min-h-screen">
        <div className="atmospheric-glow opacity-100" style={{ top: '-15%', left: '-5%' }}></div>
        <div className="atmospheric-glow opacity-80" style={{ bottom: '-15%', right: '-5%' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-metadata font-bold text-[11px] uppercase tracking-[0.5em] mb-12 block">Paid Media Management</span>
          <h1 className="text-5xl md:text-[92px] leading-[1.05] mb-12 tracking-tight font-serif italic text-white">
            Creative-First <span className="text-body-text not-italic">Meta Advertising</span>
          </h1>
          <p className="text-body-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16">
            Premium Meta Ads management focused on high-end editorial aesthetics and data-driven performance. We bridge the gap between brand storytelling and aggressive conversion.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/iemtiaz911/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-button text-white text-[12px] font-bold uppercase tracking-[0.25em] px-16 py-7 rounded-full transition-all btn-glow-hover border border-border-main"
            >
              Book A Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Excellence Section */}
      <section className="bg-secondary-bg section-spacing px-6 relative">
        <div className="atmospheric-glow opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-metadata text-[11px] uppercase tracking-[0.4em] mb-6 block">The Core Framework</span>
              <h2 className="text-4xl md:text-6xl font-serif italic leading-tight text-white">
                Strategic Excellence <br/>
                <span className="text-body-text">Meets Visual Precision</span>
              </h2>
            </div>
            <p className="text-body-text max-w-sm pb-4 text-lg">We treat every ad account as a bespoke editorial project, ensuring brand integrity never sacrifices performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-primary-bg border border-border-main p-14 rounded-[32px] flex flex-col gap-14 group card-hover transition-all">
              <div className="flex justify-between items-start">
                <Sparkles className="text-silver-accent/40 w-12 h-12" />
                <span className="text-metadata font-serif text-2xl italic opacity-50">01</span>
              </div>
              <div>
                <h3 className="text-3xl mb-6 font-serif italic text-white">Creative Strategy</h3>
                <p className="text-[16px] leading-relaxed text-body-text">Focusing on premium visual storytelling that resonates with high-net-worth audiences through editorial-grade assets and copy.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-primary-bg border border-border-main p-14 rounded-[32px] flex flex-col gap-14 group card-hover transition-all">
              <div className="flex justify-between items-start">
                <Target className="text-silver-accent/40 w-12 h-12" />
                <span className="text-metadata font-serif text-2xl italic opacity-50">02</span>
              </div>
              <div>
                <h3 className="text-3xl mb-6 font-serif italic text-white">Precision Targeting</h3>
                <p className="text-[16px] leading-relaxed text-body-text">Reaching your ideal audience with granular segmentation and algorithmic optimization designed for sustainable premium scale.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-primary-bg border border-border-main p-14 rounded-[32px] flex flex-col gap-14 group card-hover transition-all">
              <div className="flex justify-between items-start">
                <BarChart3 className="text-silver-accent/40 w-12 h-12" />
                <span className="text-metadata font-serif text-2xl italic opacity-50">03</span>
              </div>
              <div>
                <h3 className="text-3xl mb-6 font-serif italic text-white">Data Attribution</h3>
                <p className="text-[16px] leading-relaxed text-body-text">Advanced multi-touch tracking to measure every dollar of your spend with absolute clarity and fully transparent, honest reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-bg py-32 px-6 border-y border-border-main relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          <div>
            <div className="font-serif text-white text-5xl md:text-7xl mb-6">4.8x</div>
            <div className="text-[11px] uppercase tracking-[0.35em] font-bold text-metadata">Average ROAS</div>
          </div>
          <div>
            <div className="font-serif text-white text-5xl md:text-7xl mb-6">$12M+</div>
            <div className="text-[11px] uppercase tracking-[0.35em] font-bold text-metadata">Managed Spend</div>
          </div>
          <div>
            <div className="font-serif text-white text-5xl md:text-7xl mb-6">92%</div>
            <div className="text-[11px] uppercase tracking-[0.35em] font-bold text-metadata">Client Retention</div>
          </div>
          <div>
            <div className="font-serif text-white text-5xl md:text-7xl mb-6">24h</div>
            <div className="text-[11px] uppercase tracking-[0.35em] font-bold text-metadata">Sync Frequency</div>
          </div>
        </div>
      </section>

      {/* The Methodology Section */}
      <section className="bg-primary-bg section-spacing px-6 relative overflow-hidden">
        <div className="atmospheric-glow opacity-15" style={{ top: '10%', right: '-20%' }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl mb-10 font-serif italic text-white">
            The <span className="text-body-text">Methodology</span>
          </h2>
          <p className="text-body-text text-xl mb-32 max-w-xl leading-relaxed">A refined, four-stage framework designed for consistent performance and elite brand positioning on Meta platforms.</p>

          <div className="space-y-28">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
              <span className="font-serif text-border-main text-7xl mt-1 opacity-20">01</span>
              <div className="flex-1">
                <h3 className="text-4xl mb-7 font-serif italic text-white">Audit & Infrastructure</h3>
                <p className="text-body-text text-xl leading-relaxed max-w-2xl">Deep dive into current account health, pixel setup, and Conversion API (CAPI) integration to ensure a bulletproof measurement foundation.</p>
              </div>
            </div>

            {/* Step 2 - Highlighted */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start relative p-10 md:p-16 bg-secondary-bg border border-border-main rounded-[40px]">
              <div className="atmospheric-glow opacity-20"></div>
              <span className="font-serif text-white text-7xl mt-1 relative z-10">02</span>
              <div className="flex-1 relative z-10">
                <h3 className="text-4xl mb-7 text-white font-serif italic">Creative Concepting</h3>
                <p className="text-white text-xl leading-relaxed max-w-2xl">Development of editorial-grade visual assets. We treat your ads like premium magazine spreads, focusing on aesthetics that stop the scroll and convert.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
              <span className="font-serif text-border-main text-7xl mt-1 opacity-20">03</span>
              <div className="flex-1">
                <h3 className="text-4xl mb-7 font-serif italic text-white">Aggressive Scaling</h3>
                <p className="text-body-text text-xl leading-relaxed max-w-2xl">Once a winning creative is identified, we scale horizontally and vertically, maintaining CPA targets while protecting your brand's integrity.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
              <span className="font-serif text-border-main text-7xl mt-1 opacity-20">04</span>
              <div className="flex-1">
                <h3 className="text-4xl mb-7 font-serif italic text-white">Insight Loop</h3>
                <p className="text-body-text text-xl leading-relaxed max-w-2xl">Bi-weekly reporting and deep-dive strategy sessions to iterate on high-performing assets and pivot quickly on market changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-bg section-spacing px-6 text-center border-t border-border-main relative overflow-hidden">
        <div className="atmospheric-glow opacity-30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-serif italic text-5xl md:text-[100px] mb-16 leading-[1.05] text-white">
            Ready to elevate your <span className="text-body-text">Meta performance?</span>
          </h2>
          <p className="text-body-text text-2xl mb-20 max-w-2xl mx-auto leading-relaxed">Limited availability for partner-level management. We only collaborate with brands that prioritize quality over volume.</p>
          <a 
            href="https://calendly.com/iemtiaz911/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cta-button text-white text-[15px] font-bold uppercase tracking-[0.35em] px-24 py-8 rounded-full transition-all btn-glow-hover border border-border-main"
          >
            Secure Your Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
