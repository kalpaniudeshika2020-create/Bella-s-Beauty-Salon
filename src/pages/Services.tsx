import { motion } from 'motion/react';
import { Scissors, Palette, Wand2, Sparkles, ArrowRight, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      id: 'cutting',
      title: 'Hair Cutting',
      icon: Scissors,
      description: 'Precision cuts tailored to your face shape, hair type, and personal style.',
      services: [
        { name: "Women's Haircut & Style", price: "From $45", desc: "Includes consultation, wash, cut, and signature blowout" },
        { name: "Men's Haircut", price: "From $25", desc: "Precision cut, wash, and styling" },
        { name: "Children's Haircut (Under 12)", price: "From $20", desc: "Gentle and patient care for your little ones" },
        { name: "Bang Trim", price: "$15", desc: "Quick maintenance between full cuts" },
        { name: "Split End Treatment Cut", price: "From $35", desc: "Removes split ends without losing length" }
      ]
    },
    {
      id: 'coloring',
      title: 'Hair Coloring',
      icon: Palette,
      description: 'From subtle enhancements to complete transformations, using premium color products.',
      services: [
        { name: "Single Process Color", price: "From $75", desc: "All-over color application for a beautiful, uniform look" },
        { name: "Partial Highlights", price: "From $95", desc: "Strategic placement for dimension and brightness" },
        { name: "Full Highlights", price: "From $130", desc: "Comprehensive highlighting for maximum impact" },
        { name: "Balayage / Ombre", price: "From $160", desc: "Hand-painted, natural-looking sun-kissed color" },
        { name: "Color Correction", price: "By Consultation", desc: "Expert correction for uneven or undesired color" },
        { name: "Gloss / Toner", price: "From $40", desc: "Adds shine and refines color tone" }
      ]
    },
    {
      id: 'styling',
      title: 'Styling & Events',
      icon: Wand2,
      description: 'Flawless styling for your everyday look or most special occasions.',
      services: [
        { name: "Signature Blowout", price: "From $40", desc: "Wash and professional blowout for volume and smoothness" },
        { name: "Silk Press", price: "From $65", desc: "Smooth, straight finish for textured hair" },
        { name: "Updo / Special Occasion", price: "From $75", desc: "Elegant styling for weddings, proms, and events" },
        { name: "Bridal Styling", price: "From $120", desc: "Includes trial session and day-of styling" },
        { name: "Curling / Flat Iron Add-on", price: "$15", desc: "Added to any cut or blowout service" }
      ]
    },
    {
      id: 'treatments',
      title: 'Treatments',
      icon: Sparkles,
      description: 'Nourishing treatments to restore health, shine, and manageability to your hair.',
      services: [
        { name: "Deep Conditioning Mask", price: "$25", desc: "Intense moisture for dry, damaged hair" },
        { name: "Keratin Smoothing Treatment", price: "From $200", desc: "Reduces frizz and curl for up to 3 months" },
        { name: "Scalp Detox Therapy", price: "$45", desc: "Exfoliates and balances the scalp environment" },
        { name: "Olaplex Bond Building", price: "$35", desc: "Repairs broken bonds for stronger, healthier hair" },
        { name: "Clarifying Treatment", price: "$20", desc: "Removes product buildup and hard water minerals" }
      ]
    }
  ];

  return (
    <div className="bg-bg-primary min-h-screen pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,110,121,0.2)_0%,transparent_50%)]"></div>
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
              <span className="text-accent-gold">Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Services</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover our comprehensive range of premium hair and beauty services, designed to help you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border-light relative overflow-hidden group"
              >
                {/* Top Gradient Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent-mauve transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-primary-lighter/50 rounded-full flex items-center justify-center text-primary mr-5">
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif text-text-main">{category.title}</h2>
                  </div>
                </div>
                
                <p className="text-text-muted mb-8 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.services.map((service, sIdx) => (
                    <div key={sIdx} className="group/item">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-lg font-medium text-text-main group-hover/item:text-primary transition-colors">{service.name}</h3>
                        <div className="flex-grow mx-4 border-b-2 border-dotted border-border-dark/30 relative top-[-6px]"></div>
                        <span className="text-lg font-serif text-primary whitespace-nowrap">{service.price}</span>
                      </div>
                      <p className="text-sm text-text-muted">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-bg-secondary rounded-2xl p-6 md:p-8 flex items-start border border-border-light"
          >
            <Info className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-medium text-text-main mb-2">Important Note About Pricing</h4>
              <p className="text-text-muted leading-relaxed">
                Prices listed are starting points. Final pricing may vary depending on hair length, thickness, condition, and the specific stylist providing the service. We offer complimentary consultations to provide accurate quotes before any service begins.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-text-main mb-6">Ready to Book Your Service?</h2>
            <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
              Schedule your appointment online or contact us directly. We look forward to welcoming you to Bella's.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="btn-gradient px-8 py-4 rounded-full text-base font-medium shadow-lg flex items-center justify-center"
              >
                📅 Book Appointment
              </Link>
              <a
                href="https://wa.me/12098745661"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border border-primary px-8 py-4 rounded-full text-base font-medium hover:bg-primary-lighter/20 transition-colors duration-300 flex items-center justify-center"
              >
                Have Questions? Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
