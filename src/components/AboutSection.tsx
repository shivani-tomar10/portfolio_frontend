import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  { name: 'React / Next.js', level: 80 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'PostgreSQL / MongoDB', level: 75 },
  { name: 'Docker / AWS', level: 50 },
  { name: 'Python / Django', level: 60 },
];

const highlights = [
  { icon: Globe, label: 'Projects Built', value: '5+' },
  { icon: Smartphone, label: 'Major Projects', value: '2+' },
  { icon: Database, label: 'APIs Built', value: '20+' },
  { icon: Code2, label: 'Years Exp', value: '1+' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">
            Passionate about <span className="text-gradient">code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer currently building real-world projects
              using React, Node.js, and modern technologies. I enjoy solving problems,
              learning new skills, and turning ideas into working applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently focused on improving my backend, DSA, and system design skills.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-2xl font-bold font-display text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {skills.map(({ name, level }, i) => (
              <div key={name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'var(--gradient-neon)' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
