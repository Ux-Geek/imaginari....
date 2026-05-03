
import React from 'react';

export const StoryDetail = () => {
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

{/*  BREADCRUMB  */}
<div className="breadcrumb">
  <a href="#">MAGINARI</a>
  <span>/</span>
  <a href="#">Stories</a>
  <span>/</span>
  <a href="#">Favela</a>
  <span>/</span>
  Born From The Hill
</div>

{/*  STORY HERO  */}
<div className="story-hero">
  <div className="hero-left">
    <div className="hero-brand-tag">
      <div className="hero-brand-dot"></div>
      <span className="hero-brand-name">Favela — Rio de Janeiro</span>
    </div>
    <h1 className="hero-title">Born From <strong>The Hill</strong></h1>
    <p className="hero-excerpt">"We don't design clothes. We design evidence that we were here."</p>
    <div className="hero-meta-row">
      <div className="hero-meta-item">
        <div className="hero-meta-label">Origin</div>
        <div className="hero-meta-value">Rio de Janeiro, Brazil</div>
      </div>
      <div className="hero-meta-item">
        <div className="hero-meta-label">Studio</div>
        <div className="hero-meta-value">Exclamation Studios</div>
      </div>
      <div className="hero-meta-item">
        <div className="hero-meta-label">Type</div>
        <div className="hero-meta-value">Film + Editorial</div>
      </div>
      <div className="hero-meta-item">
        <div className="hero-meta-label">Duration</div>
        <div className="hero-meta-value">8:24</div>
      </div>
    </div>
  </div>

  {/*  Feed card — exact from page 2  */}
  <div className="hero-right">
    <div className="hero-feed-card">
      <div className="hero-feed-thumb">
        <div className="hero-feed-badge">Exclamation Studios</div>
        <span className="hero-feed-label">FAVELA</span>
      </div>
      <div className="hero-feed-brand">Favela</div>
      <div className="hero-feed-product">Retro Jersey</div>
      <div className="hero-feed-studio">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-circle">+</button>
        <button className="btn-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>
</div>

{/*  SCROLL PLAY FRAME  */}
<div className="scroll-play-wrapper" id="play-wrapper">
  <div className="scroll-play-sticky" id="play-sticky">
    <div className="play-frame" id="play-frame" onclick="togglePlay()">
      <div className="frame-lines"></div>

      {/*  Film strip left edge  */}
      <div className="frame-filmstrip" id="filmstrip">
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
        <div className="filmstrip-hole"></div>
      </div>

      <div className="frame-content">
        <div className="frame-brand-ghost">FAVELA</div>
        <button className="frame-play-btn" id="frame-play-btn">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>

      <div className="frame-info-bar">
        <div className="frame-info-left">
          <div className="frame-title">BORN FROM THE HILL</div>
          <div className="frame-subtitle">Favela — Brand Film — 2025</div>
        </div>
        <div className="frame-duration">8:24</div>
      </div>

      <div className="frame-progress">
        <div className="frame-progress-fill" id="progress-fill"></div>
      </div>
    </div>
  </div>
</div>

{/*  STORY BODY  */}
<div className="story-body">

  <div className="story-sidebar">
    <div className="sidebar-sticky">
      <div className="sidebar-label">The Story</div>
      <div className="sidebar-meta">
        <div className="sidebar-meta-row">
          <span className="sidebar-key">Brand</span>
          <span className="sidebar-val">Favela</span>
        </div>
        <div className="sidebar-meta-row">
          <span className="sidebar-key">Origin</span>
          <span className="sidebar-val">Rio de Janeiro</span>
        </div>
        <div className="sidebar-meta-row">
          <span className="sidebar-key">Founded</span>
          <span className="sidebar-val">2019</span>
        </div>
        <div className="sidebar-meta-row">
          <span className="sidebar-key">Drops</span>
          <span className="sidebar-val">3 exclusive</span>
        </div>
        <div className="sidebar-meta-row">
          <span className="sidebar-key">Studio</span>
          <span className="sidebar-val">Exclamation Studios</span>
        </div>
      </div>

      {/*  Toggle from page 2  */}
      <div className="toggle-row">
        <button className="toggle-btn" onclick="switchTab(this)">Story</button>
        <button className="toggle-btn active" onclick="switchTab(this)">Products</button>
      </div>
    </div>
  </div>

  <div className="story-content">

    <p className="story-para">
      Favela is not a reference. It is not aesthetic borrowed from the outside looking in. It is not the romanticisation of hardship, nor the commodification of a community that never asked to be a trend.
    </p>

    <p className="story-para">
      <em>It is the inside, made wearable.</em>
    </p>

    <div className="pull-quote">
      <p>"Every stitch is a street name. Every colour is a memory of someone who made the hill beautiful before beauty was fashionable."</p>
    </div>

    <p className="story-para">
      Founded in 2019 in the comunidades of Rio de Janeiro, Favela began as a document — a record of a neighbourhood that has always dressed with intention. The founders grew up watching people create extraordinary visual language from almost nothing. Shirts made from off-cuts. Jerseys modified in back rooms. Colour combinations that had no name in any fashion magazine but existed with complete authority on the streets of the hill.
    </p>

    {/*  Inline image — card from page 1  */}
    <div className="story-inline-img sii-1">
      <span className="story-inline-label">RIO / 2019</span>
    </div>
    <div className="story-caption">Comunidade, Rio de Janeiro — 2019</div>

    <p className="story-para">
      The Retro Jersey is the first piece. It is not nostalgic — it is archaeological. It goes back to recover something that was never properly documented and brings it forward into a form the world can finally see, hold, and wear.
    </p>

    <p className="story-para">
      <em>Fifty units. That is all.</em> Not because of artificial scarcity. Because the hill does not mass-produce. It makes things one at a time, with care, with context, with the weight of knowing that what you are making means something to someone who will never appear in a campaign but whose life is the reason the campaign exists at all.
    </p>

    <div className="pull-quote">
      <p>"We are not designing for the market. We are designing for the memory of everyone who wore this neighbourhood before it had a name anyone wanted to use."</p>
    </div>

    {/*  Second inline image  */}
    <div className="story-inline-img sii-2">
      <span className="story-inline-label">FAVELA / JERSEY</span>
    </div>
    <div className="story-caption">Retro Jersey Vol. 1 — Favela, 2025</div>

    <p className="story-para">
      MAGINARI carries Favela because what they are doing is the definition of what this platform exists to make visible. Before the world catches up — this is the work. This is the story. This is the hill, made wearable.
    </p>

  </div>
</div>

{/*  CHEVRON DOWN — exact from page 2  */}
<div className="chevron-down" onclick="window.scrollBy({top:400,behavior:'smooth'})">
  <svg viewBox="0 0 24 14"><polyline points="2,2 12,12 22,2"/></svg>
</div>

{/*  RELATED PRODUCTS — card grid from page 1  */}
<div className="related-section">
  <div className="related-heading">From <strong>Favela</strong></div>

  <div className="card-grid">

    <div className="brand-card">
      <div className="bc-img bc-1">
        <div className="bc-badge">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
        </div>
        <span className="bc-img-label">JERSEY</span>
      </div>
      <div className="bc-body">
        <div className="bc-name">FAVELA</div>
        <div className="bc-origin">Retro Jersey — Vol. 1</div>
        <div className="bc-actions">
          <span className="bc-price">₦ 48,000</span>
          <div className="btn-sm-pair">
            <button className="btn-sm">+</button>
            <button className="btn-sm play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="brand-card">
      <div className="bc-img bc-2">
        <span className="bc-img-label">TEE</span>
      </div>
      <div className="bc-body">
        <div className="bc-name">FAVELA</div>
        <div className="bc-origin">Culture Tee — Black</div>
        <div className="bc-actions">
          <span className="bc-price">₦ 28,000</span>
          <div className="btn-sm-pair">
            <button className="btn-sm">+</button>
            <button className="btn-sm play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="brand-card">
      <div className="bc-img bc-3">
        <span className="bc-img-label">CAP</span>
      </div>
      <div className="bc-body">
        <div className="bc-name">FAVELA</div>
        <div className="bc-origin">Hill Cap — Limited</div>
        <div className="bc-actions">
          <span className="bc-price">₦ 18,000</span>
          <div className="btn-sm-pair">
            <button className="btn-sm">+</button>
            <button className="btn-sm play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div style={{"fontSize":"11px","color":"var(--text-dim)","letterSpacing":"0.1em","textAlign":"right"}}>
    Culture Envisioned.
  </div>
</footer>




    </div>
  );
};
