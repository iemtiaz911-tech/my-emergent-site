import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChevronLeft, ChevronRight, Play, VolumeX, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

export const CaseStudiesPage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metricKey, setMetricKey] = useState(0);

  const counter1 = useCounterAnimation(230, { prefix: '+', suffix: '%' });
  const counter2 = useCounterAnimation(180, { prefix: '+', suffix: '%' });
  const counter3 = useCounterAnimation(154, { prefix: '+', suffix: '%' });

  const videos = [
    {
      url: 'https://customer-assets.emergentagent.com/job_creative-engine-16/artifacts/ag4s7r8d_IMG_7390.mp4',
      category: 'E-COMMERCE',
      company: 'Fashion Brand',
      metric: '+230% Revenue Growth',
      timeline: '6-MONTH CAMPAIGN',
      thumbnail: 'https://images.unsplash.com/photo-1758876022473-d3d8513f15d3',
      counterRef: counter1
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_creative-engine-16/artifacts/biuuucwi_WhatsApp%20Video%202026-02-06%20at%205.40.28%20AM.mp4',
      category: 'TECH STARTUP',
      company: 'SaaS Platform',
      metric: '+180% User Acquisition',
      timeline: '4-MONTH SPRINT',
      thumbnail: 'https://images.unsplash.com/photo-1764664035163-f8f29058e557',
      counterRef: counter2
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_creative-engine-16/artifacts/9u0g0az4_WhatsApp%20Video%202026-02-06%20at%202.29.43%20AM.mp4',
      category: 'RETAIL',
      company: 'Jewelry Brand',
      metric: '+154% YoY Growth',
      timeline: '3-MONTH SPRINT',
      thumbnail: 'https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff',
      counterRef: counter3
    }
  ];

  useEffect(() => {
    setMetricKey(prev => prev + 1);
  }, [currentVideo]);

  const handlePrevious = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    const videoElement = document.getElementById('case-study-video');
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const videoElement = document.getElementById('case-study-video');
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentVideoData = videos[currentVideo];

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32">
        <div className="atmospheric-glow"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-body-text text-[12px] font-bold tracking-[0.25em] uppercase mb-10 block">Proven Performance</span>
          <h1 className="font-serif text-6xl md:text-[100px] leading-[0.9] mb-8 font-light tracking-tight text-white">
            Case Studies<span className="text-body-text italic">.</span>
          </h1>
          <p className="font-serif italic text-body-text text-2xl md:text-[32px] font-light max-w-2xl mx-auto leading-relaxed opacity-80 mb-8">
            A precise showcase of engineering and <span className="text-white">editorial design</span> excellence.
          </p>
          <a 
            href="https://calendly.com/iemtiaz911/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta-button text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-all duration-300 btn-glow-hover border border-border-main"
          >
            Engineer Your Growth
          </a>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-30">
          <ChevronRight className="text-silver-accent w-8 h-8 rotate-90" />
        </div>
      </header>

      {/* Video Section */}
      <section className="bg-secondary-bg section-spacing relative overflow-hidden border-t border-border-main/30">
        <div className="atmospheric-glow opacity-30"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-body-text text-[11px] font-bold tracking-[0.25em] uppercase block mb-4">THE FOUNDERS' VERDICT</span>
            <h2 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-4 italic">Hear From Our Partners</h2>
            <p className="text-body-text text-[15px] tracking-wide">Real results from real brands.</p>
          </div>

          <div className="relative flex items-center">
            {/* Previous Button */}
            <button 
              onClick={handlePrevious}
              className="hidden lg:flex absolute -left-20 size-14 items-center justify-center rounded-full bg-cta-button border border-border-main text-white hover:border-silver-accent transition-all group shrink-0 z-10"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-primary-bg border border-border-main rounded-lg overflow-hidden group">
              <video
                id="case-study-video"
                key={currentVideo}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                poster={currentVideoData.thumbnail}
              >
                <source src={currentVideoData.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <div 
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-all"
                >
                  <div className="size-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Info Card */}
              <div className="absolute top-8 left-8 bg-secondary-bg/85 backdrop-blur-md border border-border-main px-6 py-5 rounded-lg flex items-center gap-8 shadow-2xl">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-body-text uppercase mb-1">{currentVideoData.category}</span>
                  <span className="text-white text-lg font-medium font-serif italic">{currentVideoData.company}</span>
                </div>
                <div className="h-10 w-px bg-border-main/50"></div>
                <div className="flex flex-col">
                  <span key={metricKey} ref={currentVideoData.counterRef} className="text-silver-accent text-sm font-bold mb-0.5">+0%</span>
                  <span className="text-[9px] font-bold tracking-[0.25em] text-body-text uppercase">{currentVideoData.timeline}</span>
                </div>
              </div>

              {/* Mute Toggle */}
              <button 
                onClick={handleMuteToggle}
                className="absolute bottom-8 right-8 size-10 rounded-full bg-secondary-bg/80 backdrop-blur-md flex items-center justify-center text-white border border-border-main/30 hover:bg-white/10 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="hidden lg:flex absolute -right-20 size-14 items-center justify-center rounded-full bg-cta-button border border-border-main text-white hover:border-silver-accent transition-all group shrink-0 z-10"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideo(index);
                  setIsPlaying(false);
                }}
                className={`size-1.5 rounded-full transition-all ${
                  index === currentVideo ? 'bg-silver-accent' : 'bg-border-main hover:bg-silver-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-bg border-y border-border-main/20 section-spacing relative overflow-hidden">
        <div className="atmospheric-glow opacity-20"></div>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-serif text-white text-4xl md:text-6xl font-medium leading-[1] mb-8 italic">
              Ready to define your <span className="text-body-text not-italic">next chapter?</span>
            </h2>
            <p className="text-body-text text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Partner with us to create digital products that exceed expectations and drive verified performance results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://calendly.com/iemtiaz911/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-button text-white px-12 py-6 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl btn-glow-hover border border-border-main text-center"
            >
              Book Discovery Call
            </a>
            <Link 
              to="/"
              className="border border-border-main text-body-text px-12 py-6 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:border-silver-accent hover:text-white transition-all text-center"
            >
              View Methodology
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
