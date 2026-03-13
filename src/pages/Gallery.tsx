import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Haircuts', 'Coloring', 'Styling', 'Salon'];

  const galleryItems = [
    { id: 1, category: 'Coloring', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', title: 'Balayage Blend', desc: 'Seamless sun-kissed highlights' },
    { id: 2, category: 'Haircuts', img: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop', title: 'Textured Bob', desc: 'Modern precision cut' },
    { id: 3, category: 'Styling', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', title: 'Bridal Updo', desc: 'Elegant wedding styling' },
    { id: 4, category: 'Coloring', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop', title: 'Vibrant Copper', desc: 'Full color transformation' },
    { id: 5, category: 'Salon', img: 'https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=800&auto=format&fit=crop', title: 'Our Space', desc: 'Relaxing salon interior' },
    { id: 6, category: 'Haircuts', img: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop', title: 'Long Layers', desc: 'Volume and movement' },
    { id: 7, category: 'Styling', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop', title: 'Hollywood Waves', desc: 'Classic glamour' },
    { id: 8, category: 'Coloring', img: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop', title: 'Platinum Blonde', desc: 'Cool-toned perfection' },
    { id: 9, category: 'Salon', img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop', title: 'Styling Station', desc: 'Where the magic happens' },
  ];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
              <span className="text-accent-gold">Gallery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Portfolio</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our collection of stunning transformations and get inspired for your next visit to Bella's.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-text-muted hover:bg-primary-lighter/30 border border-border-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden group break-inside-avoid"
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0 z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 sepia-[.3] contrast-110 saturate-[.7] group-hover:sepia-0 group-hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-20">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-2">{item.category}</p>
                          <h3 className="text-white font-serif text-2xl mb-1">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                          <Maximize2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center bg-bg-secondary rounded-3xl p-12 border border-border-light"
          >
            <h2 className="text-3xl font-serif text-text-main mb-4">Inspired by what you see?</h2>
            <p className="text-text-muted mb-8 max-w-2xl mx-auto">
              Let our talented stylists create a custom look just for you. Book your appointment today and start your transformation.
            </p>
            <Link
              to="/book"
              className="btn-gradient px-8 py-4 rounded-full text-base font-medium shadow-lg inline-block"
            >
              Book Your Transformation
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
