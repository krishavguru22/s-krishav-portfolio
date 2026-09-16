import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  FlaskConical,
  Github,
  Linkedin,
  Menu,
  Network,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

const projects = [
  { number: '01', title: 'Python Problem Lab', description: 'A growing collection of small programs built to strengthen logic, understand patterns, and turn ideas into working code.', tags: ['Python', 'Algorithms', 'Learning'], icon: Terminal },
  { number: '02', title: 'Curiosity Engine', description: 'Exploring how simple inputs can become useful insights through experiments with data, structure, and clear thinking.', tags: ['Exploration', 'Data', 'Iteration'], icon: BrainCircuit },
  { number: '03', title: 'The Next Experiment', description: 'An open space for the next question worth asking — from systems to emerging technologies and everything between.', tags: ['Research', 'Ideas', 'In progress'], icon: FlaskConical },
];

const principles = [
  ['Learn by building', 'The fastest way I understand a concept is by making something with it.'],
  ['Stay curious', 'I like asking why, trying different approaches, and following ideas further.'],
  ['Share the process', 'Good research grows through documentation, discussion, and iteration.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">SK</span><span>S KRISHAV</span></a>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Experiments</a><a href="#mindset" onClick={closeMenu}>Mindset</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal"><div className="eyebrow"><span className="pulse-dot" /> Open to learning & collaboration</div><h1>Building my<br /><em>way forward.</em></h1><p className="hero-intro">I’m <strong>S Krishav</strong> — a first-year CSE student exploring code, technology, and the questions that lead to better ideas.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} /></a><a className="text-link" href="#contact">More about me <ChevronRight size={16} /></a></div></div>
          <div className="hero-visual reveal reveal-delay"><div className="portrait-frame"><div className="portrait-glow" /><img src="/images/ChatGPT_Image_Sep_16,_2026,_09_39_27_PM.png" alt="Portrait of S Krishav" /><div className="portrait-label"><span>01 / 01</span><span>KRISHAV — 2026</span></div></div><div className="floating-note note-top"><Sparkles size={14} /> Curious by default</div><div className="floating-note note-bottom"><span className="status-ring" /> Currently learning <strong>Python</strong></div></div>
          <div className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={15} /></div>
        </section>

        <section className="statement section-wrap" id="about"><div className="section-kicker">/ 01 — A little context</div><div className="statement-content"><h2>At the beginning of a<br /><span>long, exciting journey.</span></h2><div className="statement-body"><p>I’m currently pursuing my B.Tech in Computer Science and Engineering (CSE Core) at <strong>SRM Ramapuram</strong>. I’m not here to claim I know it all — I’m here because I want to keep learning.</p><p>From writing Python programs to exploring how technology can solve real problems, I’m building a foundation one experiment at a time.</p><a className="inline-link" href="#mindset">What drives me <ArrowUpRight size={15} /></a></div></div></section>

        <section className="work section-wrap" id="work"><div className="work-heading"><div><div className="section-kicker">/ 02 — Selected experiments</div><h2>Learning in <em>public.</em></h2></div><p>Small projects. Honest progress.<br />A lot of questions.</p></div><div className="project-grid">{projects.map(({ number, title, description, tags, icon: Icon }) => <article className="project-card" key={number}><div className="project-top"><span className="project-number">{number}</span><Icon size={22} strokeWidth={1.5} /></div><div><h3>{title}</h3><p>{description}</p></div><div className="project-footer"><div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight size={18} /></div></article>)}</div></section>

        <section className="mindset section-wrap" id="mindset"><div className="section-kicker">/ 03 — How I work</div><div className="mindset-layout"><div><h2>Progress over<br /><em>perfection.</em></h2><p className="mindset-lead">I believe the best work starts with a willingness to be a beginner.</p></div><div className="principles">{principles.map(([title, description], index) => <div className="principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Check size={17} /></div>)}</div></div></section>

        <section className="contact section-wrap" id="contact"><div className="contact-card"><div className="section-kicker">/ 04 — Start a conversation</div><h2>Have an idea worth<br /><em>exploring?</em></h2><p>I’m always open to learning from new people, discussing interesting problems, or finding a project to build together.</p><a className="button button-primary" href="mailto:skrishav@example.com">Say hello <ArrowUpRight size={16} /></a></div><div className="contact-side"><div className="orbit"><Network size={25} /><span>Let’s connect</span></div><p>Based in Chennai, India<br />Available for R&D opportunities</p></div></section>
      </main>
      <footer className="site-footer section-wrap"><div className="footer-brand"><span className="brand-mark">SK</span><span>S KRISHAV</span></div><span>© 2026 — Built with curiosity.</span><div className="socials"><a href="https://github.com/krishavguru22" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></footer>
    </div>
  );
}

export default App;
