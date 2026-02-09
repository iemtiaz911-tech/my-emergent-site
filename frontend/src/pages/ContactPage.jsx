import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
// import { Globe3D } from '../components/Globe3D';
import { MapPin, ArrowRight, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Mock submission for now - will be replaced with actual backend API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32">
        <div className="atmospheric-glow"></div>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <span className="inline-block text-metadata tracking-[0.5em] text-[10px] uppercase font-bold border-b border-border-main/40 pb-3">
            Get In Touch
          </span>
          <h1 className="text-6xl md:text-[84px] font-serif italic leading-[1.05]">
            At The Frontier <br/>
            <span className="text-white">Of New Media</span>
          </h1>
          <p className="text-body-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are the team for technology companies & venture capital funds.
          </p>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.6em] text-metadata">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-border-main to-transparent"></div>
        </div>
      </section>

      {/* Contact Form + Globe Section */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Globe Placeholder */}
            <div className="relative bg-secondary-bg border border-border-main rounded-[40px] min-h-[500px] flex items-center justify-center">
              <p className="text-silver-accent text-2xl font-serif italic">Interactive 3D Globe Loading...</p>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary-bg border border-border-main p-12 rounded-[40px]">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 italic">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-primary-bg border-border-main text-white placeholder:text-body-text rounded-lg h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-primary-bg border-border-main text-white placeholder:text-body-text rounded-lg h-12"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-primary-bg border-border-main text-white placeholder:text-body-text rounded-lg h-12"
                  />
                </div>

                <div>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="bg-primary-bg border-border-main text-white h-12 rounded-lg">
                      <SelectValue placeholder="Service Interest*" />
                    </SelectTrigger>
                    <SelectContent className="bg-secondary-bg border-border-main">
                      <SelectItem value="ai-ugc" className="text-white hover:bg-white/10">AI UGC</SelectItem>
                      <SelectItem value="creative-strategy" className="text-white hover:bg-white/10">Creative Strategy</SelectItem>
                      <SelectItem value="media-buying" className="text-white hover:bg-white/10">Media Buying</SelectItem>
                      <SelectItem value="organic-content" className="text-white hover:bg-white/10">Organic Content</SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-white/10">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-primary-bg border-border-main text-white placeholder:text-body-text rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D4AF87] hover:bg-[#D4AF87]/90 text-primary-bg font-bold text-sm uppercase tracking-widest py-6 rounded-full transition-all"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <p className="text-body-text text-sm text-center mt-8">
                Prefer to schedule a call?{' '}
                <a 
                  href="https://calendly.com/iemtiaz911/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-silver-accent hover:underline"
                >
                  Book a time here
                </a>
              </p>

              <div className="flex justify-center gap-6 mt-8">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-silver-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-silver-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-body-text hover:text-silver-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stations Section */}
      <section className="section-spacing px-6 bg-secondary-bg border-y border-border-main">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-metadata text-[10px] uppercase tracking-[0.4em] block mb-4">Headquarters</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white">
              Our Global <span className="text-body-text">Stations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* London Office */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[32px] card-hover transition-all">
              <MapPin className="w-8 h-8 text-silver-accent mb-6" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4">London</h3>
              <p className="text-body-text text-sm leading-relaxed mb-8">
                12 Savile Row, Mayfair<br/>
                London W1S 3PQ<br/>
                United Kingdom
              </p>
              <button className="border border-border-main text-body-text hover:border-silver-accent hover:text-white text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2">
                Contact Office
                <ArrowRight className="w-3 h-3" />
              </button>
              <p className="text-metadata text-[9px] uppercase tracking-widest mt-6">9:00 AM GMT</p>
            </div>

            {/* New York Office */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[32px] card-hover transition-all">
              <MapPin className="w-8 h-8 text-silver-accent mb-6" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4">New York</h3>
              <p className="text-body-text text-sm leading-relaxed mb-8">
                250 Madison Street, Suite 101<br/>
                New York, NY 10013<br/>
                United States
              </p>
              <button className="border border-border-main text-body-text hover:border-silver-accent hover:text-white text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2">
                Contact Office
                <ArrowRight className="w-3 h-3" />
              </button>
              <p className="text-metadata text-[9px] uppercase tracking-widest mt-6">8:00 AM EST</p>
            </div>

            {/* India Office */}
            <div className="bg-primary-bg border border-border-main p-12 rounded-[32px] card-hover transition-all">
              <MapPin className="w-8 h-8 text-silver-accent mb-6" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4">India</h3>
              <p className="text-body-text text-sm leading-relaxed mb-8">
                Business District<br/>
                Mumbai, Maharashtra<br/>
                India
              </p>
              <button className="border border-border-main text-body-text hover:border-silver-accent hover:text-white text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2">
                Contact Office
                <ArrowRight className="w-3 h-3" />
              </button>
              <p className="text-metadata text-[9px] uppercase tracking-widest mt-6">6:30 PM IST</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
