import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';
import logo from '../imports/WEBSITE_LOGO.png';
import portfolioImage1 from '../imports/pexels-filiamariss-9386220.jpg';
import portfolioImage2 from '../imports/pexels-reiez-35042461.jpg';
import portfolioImage3 from '../imports/pexels-deepak-sharma-503041381-35327986.jpg';
import portfolioImage4 from '../imports/pexels-justinagyarko-34260120.jpg';
import portfolioImage5 from '../imports/vidit-goswami-Zi_NOBHIk9A-unsplash.jpg';
import { Heart, Building2, PartyPopper, Plane, Sparkles, ClipboardCheck, X, Star, Gem, Crown, Facebook, Instagram, Mail, Phone, MapPin, Music2 } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [showConsultation, setShowConsultation] = useState(false);
  const [budgetType, setBudgetType] = useState('');
  const [customBudget, setCustomBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="size-full overflow-y-auto bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Eventors" className="h-36 w-36 object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#booking" className="text-gray-300 hover:text-white transition">Booking</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition">Portfolio</a>
              <a href="#contact" className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 border border-purple-400/30">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-black">
        {/* Hero Content with Background */}
        <div className="relative h-[450px] flex items-center px-4 overflow-hidden">
          {/* Background Image with Gradient */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1775476793931-cb484f197760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbHV4dXJ5JTIwZXZlbnQlMjBwYXJ0eSUyMGNlbGVicmF0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzc3NTU4ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Event background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black from-40% via-black/80 via-60% to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                You Celebrate,<br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">We Handle the Rest.</span>
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-400">
                Transforming your vision into extraordinary experiences with seamless execution
              </p>
              <div className="flex gap-4">
                <a href="#booking" className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 border border-purple-400/30">
                  Get Started
                  <span>→</span>
                </a>
                <a href="#portfolio" className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-all duration-300">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Event Image Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                url: 'https://images.unsplash.com/photo-1721786838067-5055a7832518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBldmVudCUyMGRlY29yYXRpb24lMjBzZXR1cHxlbnwxfHx8fDE3Nzc1MzUzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Mehndi event decoration'
              },
              {
                url: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGNlbGVicmF0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzc3NTM1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Birthday party celebration'
              },
              {
                url: 'https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjB2ZW51ZSUyMHNldHVwfGVufDF8fHx8MTc3NzUzNTIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Corporate event venue'
              },
              {
                url: 'https://images.unsplash.com/photo-1759519238029-689e99c6d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBncmFuZCUyMHdlZGRpbmclMjB2ZW51ZSUyMGRlY29yYXRpb258ZW58MXx8fHwxNzc3NTM1MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Grand wedding ballroom'
              },
              {
                url: 'https://images.unsplash.com/photo-1758810742903-535dc084c96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBzaG93ZXIlMjBwYXJ0eSUyMGRlY29yYXRpb24lMjB2ZW51ZXxlbnwxfHx8fDE3Nzc1MzUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Bridal shower decoration'
              },
              {
                url: 'https://images.unsplash.com/photo-1767070806009-152054f6edd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjB0YWJsZSUyMHNldHRpbmclMjBiYWxsb29ucyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzc3NTM1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Party table setting'
              },
              {
                url: 'https://images.unsplash.com/photo-1771147372627-7fffe86cf00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbSUyMGNvbmZlcmVuY2UlMjBzZXR1cHxlbnwxfHx8fDE3Nzc1MzU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Corporate meeting room'
              },
              {
                url: 'https://images.unsplash.com/photo-1768851142314-c4ebf49ad45b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwaGFsbCUyMGRlY29yYXRlZCUyMHRhYmxlc3xlbnwxfHx8fDE3Nzc1MzU0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
                alt: 'Wedding reception hall'
              }
            ].map((image, index) => (
              <div key={index} className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Weddings',
                description: 'Create the wedding of your dreams with our comprehensive planning services, from venue selection to the last dance.',
                icon: Heart,
                color: 'text-pink-500'
              },
              {
                title: 'Corporate Events',
                description: 'Professional event management for conferences, product launches, team building, and corporate celebrations.',
                icon: Building2,
                color: 'text-blue-500'
              },
              {
                title: 'Social Gatherings',
                description: 'Birthday parties, anniversaries, baby showers, and other special celebrations designed to perfection.',
                icon: PartyPopper,
                color: 'text-purple-500'
              },
              {
                title: 'Destination Events',
                description: 'Coordinate stunning events in exotic locations with seamless logistics and local expertise.',
                icon: Plane,
                color: 'text-cyan-500'
              },
              {
                title: 'Luxury Experiences',
                description: 'Exclusive, high-end events with premium vendors and unforgettable personalized touches.',
                icon: Sparkles,
                color: 'text-yellow-500'
              },
              {
                title: 'Full-Service Planning',
                description: 'Complete event management from concept to execution, ensuring every detail is perfect.',
                icon: ClipboardCheck,
                color: 'text-green-500'
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group">
                  <div className="mb-4">
                    <IconComponent className={`w-12 h-12 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Booking Section */}
      <section id="booking" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Book Your Event</h2>
            <p className="text-xl text-gray-400">Quick booking for your special occasion</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - Booking Form */}
              <div>
                <h3 className="text-2xl mb-6">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Event Type</label>
                    <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Anniversary</option>
                      <option>Conference</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Event Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Number of Guests</label>
                    <input
                      type="number"
                      placeholder="Expected attendees"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Budget Range</label>
                    <select
                      value={budgetType}
                      onChange={(e) => setBudgetType(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="PKR 10,000 - 50,000">PKR 10,000 - 50,000</option>
                      <option value="PKR 50,000 - 100,000">PKR 50,000 - 100,000</option>
                      <option value="PKR 100,000 - 250,000">PKR 100,000 - 250,000</option>
                      <option value="PKR 250,000 - 500,000">PKR 250,000 - 500,000</option>
                      <option value="PKR 500,000 - 1,000,000">PKR 500,000 - 1,000,000</option>
                      <option value="Custom Budget">Custom Budget</option>
                    </select>
                    {budgetType === 'Custom Budget' && (
                      <input
                        type="text"
                        placeholder="Enter your budget amount (PKR)"
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 mt-3"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact & Additional Info */}
              <div>
                <h3 className="text-2xl mb-6">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Preferred Venue</label>
                    <input
                      type="text"
                      placeholder="Location or leave blank for suggestions"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 mb-2">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Tell us about your vision, special requests, or any specific requirements..."
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <button className="flex-1 relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 border border-purple-400/30 text-lg">
                Book Now
              </button>
              <button onClick={() => setShowConsultation(true)} className="flex-1 relative bg-white/10 backdrop-blur-xl border border-white/20 text-white py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-all duration-300 text-lg">
                Request Consultation
              </button>
            </div>

            {/* Popular Event Packages */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl mb-6 text-center">Popular Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 text-center">
                  <div className="flex justify-center mb-3">
                    <Star className="w-10 h-10 text-blue-400" />
                  </div>
                  <h4 className="text-xl mb-2">Essential</h4>
                  <p className="text-gray-400 text-sm mb-3">Perfect for intimate gatherings</p>
                  <div className="text-2xl text-purple-400">PKR 10K - 100K</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">POPULAR</div>
                  <div className="flex justify-center mb-3">
                    <Gem className="w-10 h-10 text-purple-400" />
                  </div>
                  <h4 className="text-xl mb-2">Premium</h4>
                  <p className="text-gray-400 text-sm mb-3">Most chosen package</p>
                  <div className="text-2xl text-purple-400">PKR 100K - 500K</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 text-center">
                  <div className="flex justify-center mb-3">
                    <Crown className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h4 className="text-xl mb-2">Luxury</h4>
                  <p className="text-gray-400 text-sm mb-3">Ultimate event experience</p>
                  <div className="text-2xl text-purple-400">PKR 500K - 1M+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">About <span className="text-purple-500">The Eventors</span></h2>
              <p className="text-lg text-gray-300 mb-4">
                With over 15 years of experience in the event planning industry, we've had the privilege of creating thousands of memorable events for clients around the world.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Our team of dedicated professionals brings creativity, precision, and passion to every project. We believe that every event should be as unique as the people celebrating it.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From the initial consultation to the final farewell, we're committed to exceeding your expectations and creating moments that will be cherished for a lifetime.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="text-4xl mb-2 text-purple-500">2000+</div>
                  <div className="text-gray-400">Events Planned</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="text-4xl mb-2 text-purple-500">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="text-4xl mb-2 text-purple-500">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwZXZlbnQlMjBwbGFubmluZyUyMHdlZGRpbmd8ZW58MXx8fHwxNzc2ODUyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wedding reception"
                className="w-full h-full object-cover rounded-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-400">A glimpse of our recent celebrations</p>
          </div>

          <div>
            {/* First Row - 3 Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  url: portfolioImage1,
                  alt: 'Elegant wedding decor',
                  title: 'Bridal Showers'
                },
                {
                  url: portfolioImage2,
                  alt: 'Outdoor ceremony',
                  title: 'Corporate Parties'
                },
                {
                  url: portfolioImage3,
                  alt: 'Floral arrangements',
                  title: 'Mehndi'
                }
              ].map((image, index) => (
                <div key={index} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {image.title && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-3xl font-bold z-10">{image.title}</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Second Row - 2 Centered Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  url: portfolioImage4,
                  alt: 'Wedding reception tables',
                  title: 'Birthday Parties'
                },
                {
                  url: portfolioImage5,
                  alt: 'Elegant event setup',
                  title: 'Weddings'
                }
              ].map((image, index) => (
                <div key={index} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {image.title && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-3xl font-bold z-10">{image.title}</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah & Michael',
                event: 'Wedding',
                quote: 'The Eventors made our dream wedding a reality. Every detail was perfect, and we could actually enjoy our day without worrying about anything!'
              },
              {
                name: 'Tech Corp Inc.',
                event: 'Corporate Conference',
                quote: 'Professional, organized, and creative. They handled our 500-person conference flawlessly. Highly recommended for corporate events.'
              },
              {
                name: 'Jennifer L.',
                event: '50th Birthday Party',
                quote: 'From the stunning decor to the seamless coordination, my birthday celebration exceeded all expectations. Thank you for making it so special!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
                <div className="text-3xl text-purple-500 mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Let's Plan Your Event</h2>
            <p className="text-xl text-gray-400">Get in touch to start creating your perfect celebration</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-gray-300 mb-2">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="social">Social Gathering</option>
                  <option value="destination">Destination Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Tell us about your event *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-white placeholder-gray-500"
                placeholder="Share your vision, date, guest count, and any special requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 border border-purple-400/30 text-lg"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo and Contact Info */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Logo and Tagline */}
            <div className="mb-6 md:mb-0">
              <img src={logo} alt="The Eventors" className="h-56 w-56 object-contain mb-2" />
              <p className="text-gray-400 text-sm">Creating unforgettable moments since 2011</p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm">info@theeventors.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs text-gray-400">Phone</div>
                  <div className="text-sm">+92 300 1234567</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs text-gray-400">Office</div>
                  <div className="text-sm">123 Main Street</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2026 The Eventors. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-400" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                <Music2 className="w-5 h-5 text-gray-400 hover:text-purple-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {showConsultation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.3)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex justify-between items-center">
              <h2 className="text-3xl">Request Consultation</h2>
              <button
                onClick={() => setShowConsultation(false)}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-400 mb-6">
                Leave your contact details and our team will reach out to you to discuss your event requirements.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 border border-purple-400/30"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConsultation(false)}
                    className="flex-1 bg-white/10 border border-white/20 text-white py-3 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}