
import React from 'react';

export const About = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      

{/*  NAV — exact from uploads  */}
<nav>
  <a href="#" className="nav-logo">MAGINARI.</a>
  <div className="nav-search">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5a5850" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input type="text" placeholder="Search" />
  </div>
  <div className="nav-icons">
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  </div>
</nav>

{/*  MANIFESTO HERO  */}
<div className="manifesto-hero">
  <span className="hero-ghost-text ghost-1">MAGI</span>
  <span className="hero-ghost-text ghost-2">NARI</span>

  <div className="hero-eyebrow">About MAGINARI</div>

  <h1 className="hero-heading">
    Not a store.<br />
    A cultural <strong>engine.</strong>
  </h1>

  <p className="hero-declaration">
    MAGINARI exists because diaspora culture has always been ahead — and the world has always been late. We are not here to follow trends. We are here to make them visible before they become trends.
  </p>
</div>

{/*  MANIFESTO TEXT  */}
<div className="manifesto-section">
  <div className="manifesto-left">
    <div className="section-label">The Manifesto</div>
    <div className="manifesto-number">01</div>
  </div>
  <div className="manifesto-right">
    <div className="manifesto-statement">
      THE MAGI SAW IT<br /><em>FIRST.</em>
    </div>
    <p className="manifesto-body">
      The Magi were not kings. They were seers. They crossed borders, read signs that others couldn't see, and arrived before the world caught up. That is MAGINARI.
    </p>
    <p className="manifesto-body">
      We are a curated discovery platform built for <em>culturally-driven fashion brands</em> whose stories have been told from the margins — not because the work wasn't worthy of the centre, but because the centre wasn't paying attention.
    </p>
    <div className="pull-quote">
      <p>"Every garment on this platform exists because a culture refused to be invisible. MAGINARI just makes sure the world sees it — before it's too late to be early."</p>
    </div>
    <p className="manifesto-body">
      Diaspora is not our category. It is our <em>source of power.</em> The creativity that emerges from living between worlds — between Lagos and London, Rio and Rotterdam, Accra and Amsterdam — produces a visual language that is more original, more layered, and more enduring than anything trend-cycle fashion can manufacture.
    </p>
  </div>
</div>

{/*  THREE PILLARS — card grid from page 1  */}
<div className="pillars-section">
  <div className="pillars-header">
    <div className="section-label">What we stand for</div>
  </div>

  <div className="pillars-grid">

    <div className="pillar-card">
      <div className="pillar-img pi-1">
        <span className="pillar-img-number">01</span>
        <span className="pillar-img-icon">Curation</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">CURATION</div>
        <p className="pillar-desc">Not everything gets in. Presence on MAGINARI signals cultural value before the market confirms it. The gatekeeping is the product.</p>
      </div>
    </div>

    <div className="pillar-card">
      <div className="pillar-img pi-2">
        <span className="pillar-img-number">02</span>
        <span className="pillar-img-icon">Story</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">STORY FIRST</div>
        <p className="pillar-desc">Every product on this platform is inseparable from its origin, its maker, and its cultural intent. Commerce is always secondary to context.</p>
      </div>
    </div>

    <div className="pillar-card">
      <div className="pillar-img pi-3">
        <span className="pillar-img-number">03</span>
        <span className="pillar-img-icon">Authority</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">AUTHORITY</div>
        <p className="pillar-desc">MAGINARI does not follow taste. It sets it. By the time the world catches up, our brands have already moved forward.</p>
      </div>
    </div>

  </div>
</div>

{/*  FEED SECTION — exact from page 2  */}
<div className="feed-section">
  <div className="feed-section-heading">What's <strong>New</strong></div>
  <div className="feed-section-sub">The latest releases from fashion brands in diaspora</div>

  <div className="toggle-row">
    <button className="toggle-btn" onclick="switchTab(this)">Story</button>
    <button className="toggle-btn active" onclick="switchTab(this)">Products</button>
  </div>

  <div className="feed-list">

    <div className="feed-item">
      <div className="feed-thumb ft-1">
        <span className="ft-text">FAVEL</span>
      </div>
      <div className="feed-info">
        <div className="feed-brand">Favela</div>
        <div className="feed-product">Retro Jersey</div>
        <div className="feed-studio">Exclamation Studios</div>
        <div className="feed-actions">
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div className="feed-item">
      <div className="feed-thumb ft-2"></div>
      <div className="feed-info">
        <div className="feed-brand">Icons</div>
        <div className="feed-product">Retro Jersey</div>
        <div className="feed-studio">Exclamation Studios</div>
        <div className="feed-actions">
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

    {/*  "This month" label exact from page 2  */}
    <div style={{"fontSize":"clamp(22px,3vw,32px)","fontWeight":"300","color":"var(--text-primary)","letterSpacing":"-0.01em","padding":"28px 0 4px"}}>This month</div>

    <div className="feed-item">
      <div className="feed-thumb ft-3">
        <span className="ft-text">COCI</span>
      </div>
      <div className="feed-info">
        <div className="feed-brand">Favela</div>
        <div className="feed-product">Retro Jersey</div>
        <div className="feed-studio">Exclamation Studios</div>
        <div className="feed-actions">
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

{/*  CHEVRON DOWN — exact from page 2  */}
<div className="chevron-down" onclick="window.scrollBy({top:400,behavior:'smooth'})">
  <svg viewBox="0 0 24 14"><polyline points="2,2 12,12 22,2"/></svg>
</div>

{/*  STUDIO SECTION  */}
<div className="studio-section">
  <div className="studio-left">
    <div className="studio-img">
      <span className="studio-img-label">EXCLAMATION</span>
      <div className="studio-badge">Exclamation Studios</div>
    </div>
  </div>
  <div className="studio-right">
    <div className="studio-eyebrow">Built by</div>
    <div className="studio-name">EXCLAMATION<br /><em>STUDIOS</em></div>
    <p className="studio-body">
      MAGINARI is a product of Exclamation Studios — a creative agency with 20 years of experience in brand identity, visual storytelling, and cultural design. We built MAGINARI because we kept seeing the same problem: extraordinary cultural fashion brands with no worthy platform to call home.
    </p>
    <div className="studio-meta">
      <div className="studio-meta-row">
        <span className="meta-key">Founded</span>
        <span className="meta-val">Exclamation Studios, Lagos</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Experience</span>
        <span className="meta-val">20 years in brand and visual design</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Speciality</span>
        <span className="meta-val">Cultural branding, editorial design</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Platform</span>
        <span className="meta-val">MAGINARI — Cultural Discovery</span>
      </div>
    </div>
  </div>
</div>

{/*  CTA  */}
<div className="cta-section">
  <div className="cta-ghost">MAGINARI</div>
  <div className="cta-eyebrow">Join the platform</div>
  <div className="cta-title">YOUR BRAND.<br /><em>YOUR STORY.</em><br />YOUR WORLD.</div>
  <p className="cta-sub">Every culturally-driven fashion brand has a story worth telling. MAGINARI is where that story finds its global audience — before the world catches up.</p>
  <div className="cta-buttons">
    <button className="btn-primary">Apply to MAGINARI</button>
    <button className="btn-ghost">Explore Brands</button>
  </div>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div style={{"fontSize":"11px","color":"var(--text-dim)","letterSpacing":"0.1em","textAlign":"right"}}>
    Culture Envisioned.<br />
    <span style={{"opacity":"0.5"}}>All rights reserved.</span>
  </div>
</footer>




    </div>
  );
};
