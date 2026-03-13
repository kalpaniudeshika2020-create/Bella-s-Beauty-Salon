import { motion, useAnimation } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MessageCircle, Scissors, Palette, Wand2, Sparkles, Baby, User, Award, Heart, Leaf, Sofa, ChevronLeft, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Really liked the way Angelica trimmed my daughter's hair and styled it after. It was $25. Will be going back.",
      author: "SC",
      role: "Local Guide · 2 months ago",
      initials: "SC"
    },
    {
      text: "Nikki is the best. She has been incredible with my son, who is a wild wiggly 2 year old, and did an amazing job on my dad's hair as well.",
      author: "Heather Rich",
      role: "Local Guide · 1 year ago",
      initials: "HR"
    },
    {
      text: "This was my second visit with Melina. She did an amazing job with the style I was asking for. She listens, suggests, and makes sure what I am asking for happens.",
      author: "Jeanne Nicoletta",
      role: "Local Guide · 5 years ago",
      initials: "JN"
    },
    {
      text: "Great service and I love my new color and hair cut. The stylists really know what they're doing. Highly recommend!",
      author: "Happy Client",
      role: "Verified Review",
      initials: "⭐"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('https://i.ibb.co/HLw2PbmT/2026-03-14-03-24-28-Bella-s-Google-Maps.png')" }}
        ></div>
        {/* Semi-transparent overlay to ensure text is readable */}
        <div className="absolute inset-0 z-0 bg-bg-primary/60"></div>
        {/* Gradient to fade smoothly into the next section */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-light/40 blur-[1px]"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-main leading-tight mb-2">
              Where Beauty
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary italic leading-tight mb-6">
              Meets Elegance
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience premium hair styling, coloring, and beauty services at Waterford's most loved salon. Let our talented stylists bring out the best version of you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/book"
                className="btn-gradient px-8 py-4 rounded-full text-base font-medium shadow-lg flex items-center justify-center"
              >
                📅 Book Appointment
              </Link>
              <a
                href="https://wa.me/12098745661?text=Hi%20Bella's!%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto border-t border-border-dark pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif text-primary mb-1">44+</p>
                <p className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Happy Reviews</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-primary mb-1">10+</p>
                <p className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif text-primary mb-1">500+</p>
                <p className="text-xs md:text-sm text-text-muted uppercase tracking-wider">Clients Served</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-light"
        >
          <div className="w-6 h-10 border-2 border-primary-light rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary-light rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">Our Premium Services</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-accent-gold"></div>
              <Sparkles className="w-5 h-5 text-accent-gold mx-4" />
              <div className="h-[1px] w-12 bg-accent-gold"></div>
            </div>
            <p className="text-lg text-text-muted">
              Indulge in a world of beauty and relaxation with our curated services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: 'Hair Cutting', desc: 'Precision cuts tailored to your face shape and personal style', price: 'From $25' },
              { icon: Palette, title: 'Hair Coloring', desc: 'From subtle highlights to bold transformations, stunning color that lasts', price: 'From $60', popular: true },
              { icon: Wand2, title: 'Hair Styling', desc: 'Special occasion styling, blowouts, and updos for every event', price: 'From $35' },
              { icon: Sparkles, title: 'Treatments', desc: 'Deep conditioning, keratin treatments, and scalp therapy', price: 'From $40' },
              { icon: Baby, title: 'Kids Haircuts', desc: 'Gentle, patient care for your little ones', price: 'From $15' },
              { icon: User, title: "Men's Grooming", desc: "Classic and modern men's cuts and grooming", price: 'From $20' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-primary rounded-2xl p-8 card-hover shadow-sm border border-border-light relative"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <div className="w-14 h-14 bg-primary-lighter rounded-full flex items-center justify-center mb-6 text-primary-dark">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-text-main mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed min-h-[3rem]">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-medium text-primary">{service.price}</span>
                  <Link to="/services" className="text-sm font-medium text-text-main hover:text-primary transition-colors flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-8 py-4 border border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Why Bella's</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">Why Clients Love Us</h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                We are committed to providing an exceptional salon experience. Our talented team combines artistry with premium products to ensure you leave feeling confident and beautiful.
              </p>
              
              <div className="space-y-8 mb-10">
                {[
                  { icon: Award, title: 'Expert Stylists', desc: 'Talented professionals like Angelica, Nikki, and Melina who listen and deliver' },
                  { icon: Heart, title: 'Personalized Service', desc: 'Every service is customized to your unique style, hair type, and preferences' },
                  { icon: Leaf, title: 'Premium Products', desc: 'We use only high-quality, professional-grade products for lasting results' },
                  { icon: Sofa, title: 'Comfortable Setting', desc: 'A warm, welcoming atmosphere where you can relax and enjoy' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-lighter/50 rounded-full flex items-center justify-center shrink-0 mr-4 text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-text-main mb-1">{feature.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-gradient px-8 py-3 rounded-full text-sm font-medium inline-block"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:ml-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/5] group bg-bg-primary">
                <img
                  src="https://i.ibb.co/9mDNY3VL/2026-03-14-03-30-11-Bella-s-Google-Maps.png"
                  alt="Bella's Salon Location"
                  className="w-full h-full object-cover transition-all duration-700 sepia-[.4] contrast-110 saturate-[.6] group-hover:sepia-0 group-hover:saturate-100"
                  referrerPolicy="no-referrer"
                />
                {/* Warm overlay to blend with the theme */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-accent-gold/40 rounded-3xl z-0 translate-x-4 translate-y-4"></div>
              
              {/* Floating Rating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border-light flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-4xl font-serif text-primary mb-1">4.5</p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-accent-gold text-accent-gold' : 'fill-accent-gold/50 text-accent-gold/50'}`} />
                    ))}
                  </div>
                </div>
                <div className="h-12 w-[1px] bg-border-dark"></div>
                <div>
                  <p className="font-medium text-text-main">Google Rating</p>
                  <p className="text-xs text-text-muted">Based on 44 reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-bg-primary to-bg-pink overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">What Our Clients Say</h2>
            <div className="flex items-center justify-center">
              <div className="h-[1px] w-12 bg-accent-gold"></div>
              <Heart className="w-5 h-5 text-accent-gold mx-4" />
              <div className="h-[1px] w-12 bg-accent-gold"></div>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative min-h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : (activeTestimonial > index ? -50 : 50),
                    pointerEvents: activeTestimonial === index ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border-light flex flex-col items-center text-center"
                >
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-text-muted italic mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-mauve text-white flex items-center justify-center font-serif text-lg mr-4">
                      {testimonial.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-serif text-lg text-text-main">{testimonial.author}</p>
                      <p className="text-xs text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center space-x-6 mt-8">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? 'bg-primary w-6' : 'bg-primary-light/50'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="section-tag">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-4">Beauty Transformations</h2>
            </div>
            <Link to="/gallery" className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center mt-4 md:mt-0">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            {/* Large item */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group bg-bg-primary">
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" alt="Hair Coloring" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-1">Hair Coloring</p>
                  <h3 className="text-white font-serif text-2xl">Balayage Transformation</h3>
                </div>
              </div>
            </div>
            
            {/* Regular item 1 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-bg-primary">
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=400&auto=format&fit=crop" alt="Haircut" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-1">Haircut</p>
                  <h3 className="text-white font-serif text-lg">Precision Bob</h3>
                </div>
              </div>
            </div>

            {/* Tall item */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group bg-bg-primary">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" alt="Highlights" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-1">Highlights</p>
                  <h3 className="text-white font-serif text-xl">Sun-kissed Look</h3>
                </div>
              </div>
            </div>

            {/* Regular item 2 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-bg-primary">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop" alt="Treatment" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-1">Treatment</p>
                  <h3 className="text-white font-serif text-lg">Keratin Smooth</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Booking Banner */}
      <section className="py-24 bg-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,110,121,0.2)_0%,transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Ready for Your Transformation?</h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book your appointment today and let our expert stylists create your perfect look.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book"
              className="btn-gradient px-8 py-4 rounded-full text-base font-medium shadow-lg flex items-center justify-center"
            >
              📅 Book Online
            </Link>
            <a
              href="tel:+12098745661"
              className="px-8 py-4 border border-white/30 text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              📞 Call (209) 874-5661
            </a>
            <a
              href="https://wa.me/12098745661"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">Find Our Salon</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border-light"
            >
              <h3 className="text-2xl font-serif text-text-main mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-lighter/50 rounded-full flex items-center justify-center shrink-0 mr-4 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main mb-1">Address</h4>
                    <p className="text-text-muted text-sm leading-relaxed">229 E St<br/>Waterford, CA 95386<br/>United States</p>
                    <p className="text-xs text-text-muted mt-2">Plus Code: J6RQ+8V Waterford, California, USA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-lighter/50 rounded-full flex items-center justify-center shrink-0 mr-4 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main mb-1">Phone</h4>
                    <a href="tel:+12098745661" className="text-text-muted text-sm hover:text-primary transition-colors">+1 (209) 874-5661</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-lighter/50 rounded-full flex items-center justify-center shrink-0 mr-4 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-medium text-text-main mb-2">Business Hours</h4>
                    <div className="space-y-2 text-sm text-text-muted">
                      <div className="flex justify-between border-b border-border-light pb-2">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-border-light pb-2">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between pb-2">
                        <span>Sunday</span>
                        <span className="font-medium text-primary">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-sm border border-border-light h-[400px] lg:h-auto"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.109278064972!2d-120.7656!3d37.6415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM4JzI5LjQiTiAxMjDCsDQ1JzU2LjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Bella's Beauty Salon Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
