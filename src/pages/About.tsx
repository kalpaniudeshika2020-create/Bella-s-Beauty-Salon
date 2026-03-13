import { motion } from 'motion/react';
import { Star, MapPin, Phone, Clock, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-bg-primary min-h-screen pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,110,121,0.2)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-6 uppercase tracking-wider">
              <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-accent-gold">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A trusted local beauty salon in Waterford, CA, dedicated to providing exceptional service in a warm, welcoming environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-text-main mb-6">Welcome to Your Beauty Sanctuary</h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                At Bella's, we believe that a visit to the salon should be more than just an appointment—it should be an experience. From the moment you walk through our doors in Waterford, you'll be greeted by a friendly team and a comfortable atmosphere designed to help you relax.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Our skilled stylists are passionate about their craft and dedicated to listening to your needs. Whether you're looking for a simple trim, a complete color transformation, or styling for a special occasion, we have the talent and expertise to bring your vision to life.
              </p>
              
              <div className="space-y-6 bg-bg-secondary p-8 rounded-3xl border border-border-light shadow-sm">
                <h3 className="font-serif text-2xl text-text-main mb-4">Why Clients Love Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-text-muted">Skilled stylists with a great talent for listening</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-text-muted">A nice atmosphere and comfortable setting</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-text-muted">Quality haircuts, styling, and color services</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-text-muted">Great with children and families</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group bg-bg-primary">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=800&auto=format&fit=crop"
                  alt="Bella's Salon Team"
                  className="w-full h-full object-cover transition-all duration-700 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-border-light hidden md:block max-w-[280px] z-20">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="text-text-muted italic mb-4 text-sm leading-relaxed">"Great talent, the ability to listen, nice atmosphere and comfortable setting."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center text-primary font-serif font-bold">
                    C
                  </div>
                  <div>
                    <p className="font-serif text-sm text-text-main font-medium">Happy Client</p>
                    <p className="text-xs text-text-muted">Local Guide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-text-main mb-6">Visit Us</h2>
            <p className="text-lg text-text-muted">
              We're conveniently located in Waterford, CA. Stop by or contact us to schedule your next appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border-light text-center flex flex-col items-center group hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-text-main mb-4">Location</h3>
              <p className="text-text-muted mb-2">229 E St</p>
              <p className="text-text-muted mb-4">Waterford, CA 95386</p>
              <p className="text-sm text-text-muted/60">Location Code: J6RQ+8V</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border-light text-center flex flex-col items-center group hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-text-main mb-4">Hours</h3>
              <p className="text-text-muted mb-2">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-text-muted mb-2">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-text-muted">Sunday: Closed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border-light text-center flex flex-col items-center group hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-text-main mb-4">Contact</h3>
              <p className="text-text-muted mb-4">+1 209-874-5661</p>
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="font-serif text-xl text-text-main font-medium">4.5</span>
                <Star className="w-5 h-5 fill-accent-gold text-accent-gold" />
              </div>
              <p className="text-sm text-text-muted/60">Based on 44 reviews</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
