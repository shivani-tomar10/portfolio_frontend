import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D';

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl font-bold">
            <span className="text-primary">&lt;</span>
            Shivani{' '}
            <span className="text-gradient neon-text">Tomar</span>
            <span className="text-primary">/&gt;</span>
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
            {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-primary transition after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background */}
        <Scene3D />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.15)]">

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-widest uppercase"
          >
            Full Stack Developer 
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6"
          >
            Crafting{' '}
            <span className="text-gradient neon-text">Digital</span>{' '}
            Experiences
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            I build fast, scalable, and user-friendly web applications using modern technologies.
            Focused on clean UI, performance, and real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-medium bg-primary text-black hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-medium border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/shivani-tomar10' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shivani-tomar10' },
              { icon: Mail, href: 'mailto:shivitom589@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioPage;