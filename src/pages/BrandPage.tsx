
import React from 'react';

export const BrandPage = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      

{/*  NAV  */}
<nav>
  <a href="#" className="nav-logo">MAGINARI.</a>
  <div className="nav-search">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6440" strokeWidth="2">
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  </div>
</nav>

{/*  BRAND HERO  */}
<section className="brand-hero">
  <div className="hero-bg"></div>
  <div className="hero-visual">
    <div className="hero-texture"></div>
    <div className="hero-film-strip"></div>
  </div>
  <div className="hero-content">
    <div className="brand-origin">Rio de Janeiro, Brazil — Est. 2019</div>
    <h1 className="brand-hero-name">FAVELA</h1>
    <p className="brand-hero-sub">Where the streets become the studio. Culture worn as identity.</p>
  </div>
  <button className="hero-play-btn" onclick="alert('Play brand film')">
    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  </button>
</section>

{/*  STORY / PRODUCTS TABS  */}
<div className="story-bar">
  <button className="story-tab active" onclick="switchTab('story', this)">Story</button>
  <button className="story-tab" onclick="switchTab('products', this)">Products</button>
</div>

{/*  STORY SECTION  */}
<section className="story-section active" id="tab-story">
  <div className="story-text">
    <h2>Born From The Hill</h2>
    <p>
      Favela is not a reference. It is not aesthetic borrowed from the outside.<br />
      <em>It is the inside, made wearable.</em>
    </p>
    <p>
      Founded in the comunidades of Rio de Janeiro, every piece carries the weight of a neighbourhood that has always dressed with intention — even when the world looked away.
    </p>
    <div className="story-pull-quote">
      <p>"We don't design clothes. We design evidence that we were here."</p>
    </div>
    <p>
      The retro jersey is not nostalgia. It is a document. Every stitch a street name. Every colour a memory of someone who made the hill beautiful before beauty was fashionable.
    </p>
    <div className="story-meta">
      <div className="story-meta-item">
        <span className="story-meta-label">Origin</span>
        <span className="story-meta-value">Rio de Janeiro, Brazil</span>
      </div>
      <div className="story-meta-item">
        <span className="story-meta-label">Founded</span>
        <span className="story-meta-value">2019</span>
      </div>
      <div className="story-meta-item">
        <span className="story-meta-label">Studio</span>
        <span className="story-meta-value">Exclamation Studios</span>
      </div>
      <div className="story-meta-item">
        <span className="story-meta-label">Available</span>
        <span className="story-meta-value">Exclusive drops only</span>
      </div>
    </div>
  </div>
  <div className="story-visual">
    <div className="story-img-main">
      <div className="img-placeholder">
        <span className="img-label">FAVELA</span>
      </div>
    </div>
    <div className="story-img-row">
      <div className="story-img-small">
        <div className="img-placeholder">
          <span className="img-label" style={{"fontSize":"16px","opacity":"0.4"}}>RIO</span>
        </div>
      </div>
      <div className="story-img-small">
        <div className="img-placeholder">
          <span className="img-label" style={{"fontSize":"16px","opacity":"0.4"}}>2019</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  PRODUCTS SECTION  */}
<section className="products-section" id="tab-products">
  <div className="products-header">
    <h2>The Collection</h2>
    <span className="products-count">3 pieces — Exclusive</span>
  </div>
  <div className="products-grid">

    <div className="product-card">
      <div className="product-card-img">
        <div className="img-placeholder favela-1">
          <span className="img-label" style={{"fontSize":"32px","opacity":"0.3","color":"#b5a96a"}}>JERSEY</span>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-brand">FAVELA</div>
        <div className="product-card-name">Retro Jersey — Vol. 1</div>
        <div className="product-card-price">₦ 48,000</div>
        <div className="product-card-actions">
          <button className="btn-add">+</button>
          <button className="btn-play-sm">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-card-img">
        <div className="img-placeholder favela-2">
          <span className="img-label" style={{"fontSize":"32px","opacity":"0.3","color":"#b5a96a"}}>TEE</span>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-brand">FAVELA</div>
        <div className="product-card-name">Culture Tee — Black</div>
        <div className="product-card-price">₦ 28,000</div>
        <div className="product-card-actions">
          <button className="btn-add">+</button>
          <button className="btn-play-sm">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div className="product-card">
      <div className="product-card-img">
        <div className="img-placeholder favela-3">
          <span className="img-label" style={{"fontSize":"32px","opacity":"0.3","color":"#b5a96a"}}>CAP</span>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-brand">FAVELA</div>
        <div className="product-card-name">Hill Cap — Limited</div>
        <div className="product-card-price">₦ 18,000</div>
        <div className="product-card-actions">
          <button className="btn-add">+</button>
          <button className="btn-play-sm">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

{/*  RELATED BRANDS  */}
<section className="related-section">
  <div className="related-header">
    <h3>More from MAGINARI</h3>
  </div>
  <div className="related-grid">
    <div className="related-card">
      <div className="related-card-img">
        <div className="img-placeholder rc1">
          <span className="img-label" style={{"fontSize":"20px","opacity":"0.25","color":"#b5a96a"}}>COCI</span>
        </div>
      </div>
      <div className="related-card-body">
        <div className="product-card-brand">COCI</div>
        <div className="product-card-name">Lagos, Nigeria</div>
      </div>
    </div>
    <div className="related-card">
      <div className="related-card-img">
        <div className="img-placeholder rc2">
          <span className="img-label" style={{"fontSize":"20px","opacity":"0.25","color":"#b5a96a"}}>ICONS</span>
        </div>
      </div>
      <div className="related-card-body">
        <div className="product-card-brand">ICONS</div>
        <div className="product-card-name">Accra, Ghana</div>
      </div>
    </div>
    <div className="related-card">
      <div className="related-card-img">
        <div className="img-placeholder rc3">
          <span className="img-label" style={{"fontSize":"20px","opacity":"0.25","color":"#b5a96a"}}>SURULERE</span>
        </div>
      </div>
      <div className="related-card-body">
        <div className="product-card-brand">SURULERE</div>
        <div className="product-card-name">Lagos, Nigeria</div>
      </div>
    </div>
    <div className="related-card">
      <div className="related-card-img">
        <div className="img-placeholder rc4">
          <span className="img-label" style={{"fontSize":"20px","opacity":"0.25","color":"#b5a96a"}}>—</span>
        </div>
      </div>
      <div className="related-card-body">
        <div className="product-card-brand">COMING</div>
        <div className="product-card-name">Soon</div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};
