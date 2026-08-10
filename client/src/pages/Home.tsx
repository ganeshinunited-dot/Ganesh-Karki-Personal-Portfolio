// Editorial Signal: asymmetric editorial layout, charcoal / warm white / cyan palette, content-led motion.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const heroVisual = "/manus-storage/ganesh-karki-founder-portrait_f347b2c3.png";
const chatnpVisual = "/manus-storage/chatnp-atmosphere_dc0133b8.png";
const visionTexture = "/manus-storage/nepal-global-texture_9d26d24d.png";
const brandMark = "/manus-storage/ganesh-brand-mark_bcd15dcc.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  { number: "01", title: "Product", text: "Strategy, product thinking, MVP development, and feature planning." },
  { number: "02", title: "Technology", text: "React, Next.js, Tailwind CSS, JavaScript / TypeScript, GitHub, deployment, and AI integrations." },
  { number: "03", title: "Design", text: "UI design, UX thinking, interactive interfaces, and product experience." },
  { number: "04", title: "Startup", text: "Market research, business planning, fundraising preparation, investor outreach, and startup strategy." },
];

const journey = [
  { label: "Founder", title: "KarkTech", body: "Building technology products and exploring AI opportunities for Nepal." },
  { label: "Builder", title: "ChatNp", body: "Designing and developing a Nepal-focused AI product." },
  { label: "Independent", title: "Product Builder", body: "Working across design, development, experimentation, deployment, and startup building." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Ganesh Karki home">
          <img src={brandMark} alt="Abstract Ganesh Karki brand mark" className="brand-mark" />
          <span className="brand-wordmark">GANESH <b>KARKI</b></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s Talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="signal-dot" /> Founder &amp; Product Builder <span className="eyebrow-place">/ Nepal</span></p>
            <h1>I build products from Nepal for the <em>next generation</em> of the internet.</h1>
            <p className="hero-subcopy">I&apos;m Ganesh Karki — founder of KarkTech and builder of ChatNp, a Nepal-focused AI platform.</p>
            <div className="hero-actions">
              <a className="button button--light" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Chat / connect <ArrowUpRight size={16} /></a>
            </div>
            <a className="karktech-link" href="https://karktech.tech" target="_blank" rel="noreferrer">View KarkTech <ExternalLink size={13} /></a>
          </div>
          <div className="hero-visual hero-visual--portrait reveal-up" aria-label="Portrait of Ganesh Karki, founder and product builder">
            <img src={heroVisual} alt="Ganesh Karki, founder of KarkTech and builder of ChatNp" />
            <div className="hero-route-stamp"><span>ORIGIN / NEPAL</span><i /><span>BUILD / 01</span></div><div className="hero-caption"><span>01 / 05</span><span>Ganesh Karki / Founder</span></div>
          </div>
          <div className="hero-index" aria-hidden="true">GK<span>—</span>01</div>
        </section>

        <section id="about" className="about section-pad section-light">
          <div className="section-marker"><span>01</span><span>About the builder</span></div>
          <div className="about-grid">
            <h2>A builder with a founder&apos;s mindset.</h2>
            <div className="about-copy">
              <p className="lead">I&apos;m Ganesh Karki, a founder and product builder from Nepal. I enjoy turning ideas into real products — from defining the problem and designing the experience to writing code, deploying the product, and figuring out how to take it forward.</p>
              <p>My current focus is KarkTech and ChatNp, where I&apos;m exploring how AI can become more useful, relevant, and accessible for Nepal.</p>
              <div className="about-note"><span className="note-line" /> Not just shipping code. Taking an idea all the way through.</div>
            </div>
          </div>
        </section>

        <section className="capabilities section-pad">
          <div className="section-marker"><span>02</span><span>How I work</span></div>
          <div className="section-heading-row"><h2>Useful across the<br /><em>whole product.</em></h2><p>Product, design, technology, and the messy work in between. I like staying close to the problem.</p></div>
          <div className="capability-list">{capabilities.map((cap) => <article className="capability" key={cap.number}><span className="cap-number">{cap.number}</span><h3>{cap.title}</h3><p>{cap.text}</p><ArrowUpRight className="cap-arrow" size={19} /></article>)}</div>
        </section>

        <section id="work" className="work section-pad section-ink">
          <div className="section-marker section-marker--ink"><span>03</span><span>Featured work</span></div>
          <div className="project-head"><div><p className="eyebrow eyebrow--cyan">Main product / KarkTech</p><h2>ChatNp</h2></div><span className="status-tag"><i /> In development</span></div>
          <div className="project-card">
            <div className="project-info"><p className="project-kicker">Founder / Product Builder</p><div className="build-status"><span>Currently building</span><i /><span>KarkTech / ChatNp</span></div><p className="project-description">A Nepal-focused AI platform built around Nepali language, culture, knowledge, and everyday use cases.</p><a className="button button--cyan" href="https://karktech.tech" target="_blank" rel="noreferrer">Explore ChatNp <ArrowUpRight size={17} /></a><div className="project-meta"><div><span>Problem</span><p>Global AI products are not always designed for Nepal&apos;s language, culture, businesses, and information needs.</p></div><div><span>Opportunity</span><p>Build AI experiences that understand and serve Nepal more naturally.</p></div></div></div>
            <div className="project-image"><img src={chatnpVisual} alt="Abstract product atmosphere for ChatNp" /><div className="image-annotation"><span>CHATNP / 001</span><span>NEPALI × AI</span></div><span className="image-label">A useful AI, closer to home</span></div>
          </div>
          <div className="building-log"><span className="log-title">Things I&apos;m building</span><div className="log-items"><span><Check size={14} /> ChatNp</span><span><Check size={14} /> KarkTech website</span><span><Check size={14} /> AI experiments</span><span><Check size={14} /> Product prototypes</span></div></div>
        </section>

        <section className="philosophy section-pad section-light"><div className="section-marker"><span>04</span><span>Builder&apos;s note</span></div><div className="philosophy-inner"><p className="eyebrow">A working philosophy</p><h2>“I don&apos;t want to just use technology. <em>I want to build it.</em>”</h2><p>The best way to understand technology is to build with it. I like experimenting, breaking things, fixing them, and turning rough ideas into products people can actually use.</p></div></section>

        <section id="vision" className="vision section-pad"><div className="vision-text"><div className="section-marker"><span>05</span><span>Long-term direction</span></div><div className="vision-status"><span>Long-term vision</span><i /><span>Not yet achieved</span></div><p className="eyebrow">The bigger vision</p><h2>Technology from Nepal, with a <em>much bigger map</em> in mind.</h2><p>The ambition is to build products that begin with the needs of Nepal and can eventually become useful beyond Nepal. This is a direction, not a claim about where the work is today.</p><div className="route"><span>01 Nepal</span><span>02 South Asia</span><span>03 Global</span></div></div><div className="vision-art"><img src={visionTexture} alt="Abstract contour texture suggesting a journey from Nepal to the world" /><div className="vision-art-label">A route, not a result <span>→</span></div><div className="route-line"><span /><span /><span /></div></div></section>

        <section className="journey section-pad section-light"><div className="section-marker"><span>06</span><span>The journey so far</span></div><h2>Still early. Already building.</h2><div className="journey-list">{journey.map((item, index) => <article className="journey-item" key={item.title}><span className="journey-index">0{index + 1}</span><div><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.body}</p></div><ArrowUpRight size={18} /></article>)}</div></section>

        <section className="partner section-pad section-ink"><div className="partner-copy"><p className="eyebrow eyebrow--cyan">For the right people</p><h2>Building the future of AI in Nepal.</h2><p>KarkTech is currently developing its next stage of products and exploring opportunities to work with investors, partners, and people who believe Nepal can build globally relevant technology.</p></div><a className="button button--cyan" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a></section>

        <section id="contact" className="contact section-pad"><div className="section-marker"><span>07</span><span>Open line</span></div><div className="contact-grid"><div><p className="eyebrow">Have a good reason to talk?</p><h2>Let&apos;s build<br /><em>something.</em></h2></div><div className="contact-copy"><p>Whether you&apos;re interested in ChatNp, KarkTech, technology, partnerships, or simply want to talk about building from Nepal — I&apos;d love to hear from you.</p><div className="contact-links"><a href="mailto:hello@karktech.tech"><Mail size={17} /> Email me <ArrowUpRight size={15} /></a><span className="contact-muted"><Linkedin size={17} /> LinkedIn <small>link to be added</small></span><span className="contact-muted"><Github size={17} /> GitHub <small>link to be added</small></span><a href="https://karktech.tech" target="_blank" rel="noreferrer"><ExternalLink size={17} /> KarkTech <ArrowUpRight size={15} /></a></div></div></div></section>

        <section className="final-cta section-pad section-light"><p className="eyebrow">The work continues</p><h2>Still building.</h2><p>From Nepal, with a much bigger map in mind.</p><a className="button button--dark" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a></section>
      </main>

      <footer className="footer"><div><a className="brand brand--footer" href="#top"><img src={brandMark} alt="" className="brand-mark" /><span className="brand-wordmark">GANESH <b>KARKI</b></span></a><p>Founder &amp; Product Builder<br />Building from Nepal</p></div><div className="footer-links">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><p className="copyright">© 2026 Ganesh Karki</p></footer>
    </div>
  );
}
