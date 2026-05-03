
import React from 'react';

export const StoryPage = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      

{/*  NAV  */}
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

{/*  PAGE HEADER  */}
<div className="page-header">
  <div>
    <div className="page-eyebrow">Cultural Archive</div>
    <div className="page-title">THE<br /><em>STORIES</em></div>
    <p className="page-desc">Every brand on MAGINARI exists because of a story. This is where those stories live — before the product, behind the drop, beneath the garment.</p>
  </div>
  <div className="page-header-right">
    <div className="filter-row">
      <button className="filter-pill active">All</button>
      <button className="filter-pill">Film</button>
      <button className="filter-pill">Origin</button>
      <button className="filter-pill">Drop</button>
      <button className="filter-pill">Interview</button>
    </div>
  </div>
</div>

{/*  FEATURED STORY  */}
<div className="featured-story">
  <div className="featured-img">
    <div className="featured-img-inner">
      <span className="featured-img-label">FAVELA</span>
    </div>
    <div className="featured-img-overlay"></div>
    <div className="featured-badge">Featured Story</div>
    <button className="featured-play">
      <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </button>
  </div>

  <div className="featured-text">
    <div>
      <div className="featured-meta">
        <div className="featured-brand-tag">
          <div className="featured-brand-dot"></div>
          <span className="featured-brand-name">Favela — Rio de Janeiro</span>
        </div>
      </div>
      <div className="featured-title">Born From<br />The Hill</div>
      <p className="featured-excerpt">"We don't design clothes. We design evidence that we were here."</p>
      <p className="featured-body">
        Favela is not a reference. It is not aesthetic borrowed from the outside.<br /><br />
        <em>It is the inside, made wearable.</em><br /><br />
        Founded in the comunidades of Rio de Janeiro, every piece carries the weight of a neighbourhood that has always dressed with intention — even when the world looked away. The retro jersey is not nostalgia. It is a document.
      </p>
    </div>
    <div className="featured-footer">
      <span className="featured-origin">Exclamation Studios — 2025</span>
      <a className="read-link">Read the story</a>
    </div>
  </div>
</div>

{/*  STORY GRID — RECENT  */}
<div className="story-grid-section">
  <div className="grid-header">
    <span className="grid-section-title">Recent Stories</span>
    <span className="grid-section-count">12 stories this season</span>
  </div>

  <div className="story-grid">

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-1">
          <span className="sc-img-label">FAVELA</span>
        </div>
        <span className="sc-type film">Film</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Favela</div>
        <div className="sc-title">The Making of the Retro Jersey</div>
        <p className="sc-excerpt">A documentary of the design process — from comunidade wall to finished garment. Shot entirely on the streets of Rio.</p>
        <div className="sc-footer">
          <span className="sc-origin">Rio de Janeiro</span>
          <span className="sc-read">Watch</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-2">
          <span className="sc-img-label">COCI</span>
        </div>
        <span className="sc-type origin">Origin</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Coci</div>
        <div className="sc-title">Lagos as a Living Garment</div>
        <p className="sc-excerpt">How the chaos and colour of Lagos Island became the visual language of an entire collection.</p>
        <div className="sc-footer">
          <span className="sc-origin">Lagos, Nigeria</span>
          <span className="sc-read">Read</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-3">
          <span className="sc-img-label">ICONS</span>
        </div>
        <span className="sc-type drop">Drop</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Icons</div>
        <div className="sc-title">Why the Drop Matters More Than the Product</div>
        <p className="sc-excerpt">Icons on releasing with intention — why they will never do unlimited runs and what scarcity means to cultural fashion.</p>
        <div className="sc-footer">
          <span className="sc-origin">Accra, Ghana</span>
          <span className="sc-read">Read</span>
        </div>
      </div>
    </div>

  </div>
</div>

{/*  PULL QUOTE DIVIDER  */}
<div className="pull-quote-divider">
  <div className="pq-number">01</div>
  <div className="pq-content">
    <p className="pq-text">
      "The diaspora doesn't need permission to define <em>global taste.</em> It has been doing so quietly for decades. MAGINARI just makes it visible."
    </p>
    <div className="pq-attribution">Exclamation Studios — MAGINARI Manifesto</div>
  </div>
</div>

{/*  ASYMMETRIC STORY GRID  */}
<div className="story-asymmetric">

  <div className="story-card-large">
    <div className="scl-img">
      <div className="scl-img-inner">
        <span className="scl-img-label">SURULERE</span>
      </div>
      <div className="scl-overlay"></div>
    </div>
    <div className="scl-text">
      <div>
        <div className="scl-brand">Surulere — Lagos</div>
        <div className="scl-title">The Neighbourhood That Dressed the City</div>
        <p className="scl-excerpt">
          Before Victoria Island became Lagos, Surulere was where style was born. This is the story of a neighbourhood that never needed validation — and the brand that carries that legacy forward, stitch by stitch.
        </p>
      </div>
      <div className="scl-footer">
        <span className="scl-origin">Lagos, Nigeria</span>
        <span className="scl-read">Read the story</span>
      </div>
    </div>
  </div>

  <div className="story-card-tall">
    <div className="sct-img">
      <div className="sct-img-inner">
        <span className="sct-img-label">DIASPORA</span>
      </div>
    </div>
    <div className="sct-body">
      <div className="sct-brand">MAGINARI — Editorial</div>
      <div className="sct-title">What Diaspora Fashion Really Means in 2025</div>
      <p className="sct-excerpt">Not a trend. Not a category. A force that has been shaping global culture from the margins — now moving to the centre.</p>
    </div>
  </div>

</div>

{/*  MANIFESTO CTA  */}
<div className="manifesto-cta">
  <div className="mc-left">
    <div className="mc-eyebrow">Submit Your Story</div>
    <div className="mc-title">YOUR BRAND.<br /><em>YOUR STORY.</em></div>
    <p className="mc-sub">Every culturally-driven fashion brand has a story worth telling. MAGINARI is where that story finds its audience — before the world catches up.</p>
  </div>
  <button className="btn-primary">Apply to MAGINARI</button>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div style={{"fontSize":"11px","color":"var(--text-dim)","letterSpacing":"0.1em","textAlign":"right"}}>
    Culture Envisioned.<br />
    <span style={{"color":"var(--text-ghost,#3a3830)"}}>All rights reserved.</span>
  </div>
</footer>




    </div>
  );
};
