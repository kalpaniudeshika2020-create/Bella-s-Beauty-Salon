import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Clock, User, Mail, Scissors, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Book() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    }, 1000);
  };

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
              <span className="text-accent-gold">Book Appointment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Schedule Your Visit</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready for your next appointment? Book with Bella's today through our appointment form or contact us directly on WhatsApp for fast scheduling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-border-light"
            >
              <h2 className="text-3xl font-serif text-text-main mb-8">Request an Appointment</h2>
              
              {isSubmitted ? (
                <div className="bg-primary-lighter/30 p-10 rounded-3xl text-center border border-primary-lighter">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif text-text-main mb-4">Request Received!</h3>
                  <p className="text-text-muted mb-8">
                    Thank you for requesting an appointment at Bella's. We will contact you shortly to confirm your booking.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-gradient px-8 py-3 rounded-full text-sm font-medium shadow-md"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-primary/50" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-primary/50" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none"
                          placeholder="(209) 555-0123"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-primary/50" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text-muted mb-2">Selected Service</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Scissors className="h-5 w-5 text-primary/50" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none appearance-none"
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="haircut-women">Women's Haircut</option>
                          <option value="haircut-men">Men's Haircut</option>
                          <option value="haircut-child">Children's Haircut</option>
                          <option value="color-single">Single Process Color</option>
                          <option value="color-highlights">Highlights / Balayage</option>
                          <option value="styling">Blowout & Styling</option>
                          <option value="treatment">Beauty Treatment</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-text-muted mb-2">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-primary/50" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none text-text-main"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-text-muted mb-2">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-primary/50" />
                        </div>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-3.5 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none appearance-none"
                        >
                          <option value="" disabled>Select a time</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 3PM)</option>
                          <option value="late">Late Afternoon (3PM - 5PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-text-muted mb-2">Additional Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      className="block w-full p-4 border border-border-light rounded-xl bg-bg-secondary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us more about what you're looking for..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gradient py-4 px-4 rounded-xl text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-primary-lighter/20 p-8 rounded-3xl border border-primary-lighter/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-serif text-text-main mb-4 relative z-10">Fast Booking</h3>
                <p className="text-text-muted mb-8 leading-relaxed relative z-10">
                  Prefer to chat? Message us directly on WhatsApp for instant booking and quick answers to your questions.
                </p>
                <a
                  href="https://wa.me/12098745661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center py-4 px-4 rounded-xl shadow-md text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300 relative z-10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Bella's now
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border-light shadow-sm">
                <h3 className="text-2xl font-serif text-text-main mb-4">Call Us</h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  You can also reach us by phone during our business hours to schedule your appointment.
                </p>
                <a
                  href="tel:+12098745661"
                  className="w-full flex justify-center items-center py-4 px-4 border-2 border-primary rounded-xl text-base font-medium text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 209-874-5661
                </a>
              </div>

              <div className="bg-bg-secondary p-8 rounded-3xl border border-border-light">
                <h3 className="text-xl font-serif text-text-main mb-4">Cancellation Policy</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We kindly ask for at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to accommodate other clients who may be waiting for a booking.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
