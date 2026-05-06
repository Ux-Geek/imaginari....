import React from 'react';

export function Maginaribrandpage() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Favela</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #2a2a27;
    --bg-card: #3a3a32;
    --olive: #b5a96a;
    --olive-dark: #8a7f50;
    --olive-muted: #6b6440;
    --text: #e8e4d4;
    --text-muted: #8a8678;
    --text-dim: #5a5850;
    --white: #f4f0e4;
    --accent: #c4b870;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
    cursor: default;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: var(--bg);
    border-bottom: 1px solid rgba(181,169,106,0.1);
  }

  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 0.08em;
    color: var(--olive);
    text-decoration: none;
  }

  .nav-search {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(181,169,106,0.15);
    border-radius: 20px;
    padding: 8px 18px;
    width: 220px;
  }

  .nav-search input {
    background: none;
    border: none;
    outline: none;
    color: var(--text-muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 300;
    width: 100%;
  }

  .nav-search input::placeholder { color: var(--text-dim); }

  .nav-icons {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    color: var(--text-muted);
    cursor: pointer;
    transition: color 0.2s;
  }
  .nav-icon:hover { color: var(--olive); }

  /* ── BRAND HERO ── */
  .brand-hero {
    margin-top: 65px;
    position: relative;
    height: 70vh;
    min-height: 480px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(to bottom, transparent 30%, rgba(42,42,39,0.7) 70%, var(--bg) 100%),
      linear-gradient(135deg, #1a2a1a 0%, #2a2a1a 40%, #1a1a2a 100%);
  }

  .hero-visual {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-texture {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(ellipse at 30% 50%, rgba(100,120,80,0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 30%, rgba(80,80,40,0.1) 0%, transparent 50%);
  }

  .hero-film-strip {
    position: absolute;
    top: 0; right: 80px;
    width: 3px;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(181,169,106,0.3) 0px,
      rgba(181,169,106,0.3) 20px,
      transparent 20px,
      transparent 30px
    );
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 0 40px 48px;
    width: 100%;
  }

  .brand-origin {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--olive-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .brand-origin::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--olive-muted);
  }

  .brand-hero-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 12vw, 140px);
    line-height: 0.9;
    color: var(--white);
    letter-spacing: 0.02em;
    margin-bottom: 16px;
  }

  .brand-hero-sub {
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 300;
    max-width: 400px;
    line-height: 1.6;
    font-style: italic;
  }

  .hero-play-btn {
    position: absolute;
    right: 40px;
    bottom: 48px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--olive);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.2s;
  }

  .hero-play-btn:hover {
    transform: scale(1.08);
    background: var(--accent);
  }

  .hero-play-btn svg {
    width: 18px;
    height: 18px;
    fill: var(--bg);
    margin-left: 3px;
  }

  /* ── STORY BAR ── */
  .story-bar {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0 40px;
    border-bottom: 1px solid rgba(181,169,106,0.12);
    margin-bottom: 0;
  }

  .story-tab {
    padding: 16px 28px;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  .story-tab.active {
    color: var(--olive);
    border-bottom-color: var(--olive);
  }

  .story-tab:hover:not(.active) {
    color: var(--text-muted);
  }

  /* ── STORY SECTION ── */
  .story-section {
    padding: 60px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    max-width: 1100px;
  }

  .story-text h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 42px;
    letter-spacing: 0.04em;
    color: var(--white);
    margin-bottom: 24px;
    line-height: 1.1;
  }

  .story-text p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 20px;
  }

  .story-text p em {
    color: var(--olive);
    font-style: normal;
    font-weight: 400;
  }

  .story-pull-quote {
    margin: 32px 0;
    padding-left: 20px;
    border-left: 2px solid var(--olive);
  }

  .story-pull-quote p {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 20px;
    line-height: 1.5;
    color: var(--text);
    margin: 0;
  }

  .story-meta {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .story-meta-item {
    display: flex;
    gap: 16px;
    align-items: baseline;
  }

  .story-meta-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    min-width: 80px;
  }

  .story-meta-value {
    font-size: 13px;
    color: var(--text-muted);
  }

  .story-visual {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .story-img-main {
    aspect-ratio: 4/5;
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-img-main .img-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #3a3a30 0%, #2a2a22 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-label {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: rgba(181,169,106,0.2);
    letter-spacing: 0.1em;
  }

  .story-img-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .story-img-small {
    aspect-ratio: 1;
    background: var(--bg-card);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-img-small .img-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #353530 0%, #252520 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-img-small .img-label {
    font-size: 24px;
  }

  /* ── PRODUCTS SECTION ── */
  .products-section {
    padding: 60px 40px;
    display: none;
  }

  .products-section.active {
    display: block;
  }

  .story-section.active {
    display: grid;
  }

  .story-section {
    display: none;
  }

  .products-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .products-header h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    letter-spacing: 0.04em;
    color: var(--white);
  }

  .products-count {
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 0.1em;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .product-card {
    cursor: pointer;
    transition: transform 0.2s;
  }

  .product-card:hover { transform: translateY(-4px); }

  .product-card-img {
    aspect-ratio: 3/4;
    background: var(--bg-card);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  .product-card-img .img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-card-img .img-placeholder.favela-1 {
    background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%);
  }

  .product-card-img .img-placeholder.favela-2 {
    background: linear-gradient(145deg, #252520 0%, #151510 100%);
  }

  .product-card-img .img-placeholder.favela-3 {
    background: linear-gradient(145deg, #202520 0%, #101510 100%);
  }

  .product-card-body {
    background: var(--olive-dark);
    border-radius: 0 0 8px 8px;
    padding: 16px 18px;
    opacity: 0.85;
  }

  .product-card-brand {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.08em;
    color: var(--bg);
    margin-bottom: 4px;
  }

  .product-card-name {
    font-size: 11px;
    color: rgba(42,42,39,0.7);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 400;
  }

  .product-card-price {
    margin-top: 8px;
    font-size: 13px;
    color: rgba(42,42,39,0.85);
    font-weight: 500;
  }

  .product-card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .btn-add {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(42,42,39,0.2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg);
    font-size: 16px;
    transition: background 0.2s;
  }

  .btn-add:hover { background: rgba(42,42,39,0.35); }

  .btn-play-sm {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(42,42,39,0.2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .btn-play-sm:hover { background: rgba(42,42,39,0.35); }

  .btn-play-sm svg {
    width: 10px;
    height: 10px;
    fill: var(--bg);
    margin-left: 2px;
  }

  /* ── RELATED BRANDS ── */
  .related-section {
    padding: 60px 40px;
    border-top: 1px solid rgba(181,169,106,0.1);
  }

  .related-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 32px;
  }

  .related-header h3 {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .related-header::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(181,169,106,0.1);
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .related-card {
    cursor: pointer;
    transition: transform 0.2s;
  }

  .related-card:hover { transform: translateY(-3px); }

  .related-card-img {
    aspect-ratio: 3/4;
    background: var(--bg-card);
    border-radius: 6px 6px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .related-card-img .img-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rc1 { background: linear-gradient(145deg, #251a1a 0%, #151010 100%); }
  .rc2 { background: linear-gradient(145deg, #1a1a25 0%, #101015 100%); }
  .rc3 { background: linear-gradient(145deg, #1a2520 0%, #101510 100%); }
  .rc4 { background: linear-gradient(145deg, #251a20 0%, #151010 100%); }

  .related-card-body {
    background: var(--olive-muted);
    border-radius: 0 0 6px 6px;
    padding: 12px 14px;
    opacity: 0.8;
  }

  .related-card-body .product-card-brand {
    font-size: 16px;
  }

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--olive-muted); border-radius: 2px; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .brand-hero-name { animation: fadeUp 0.7s ease forwards; }
  .brand-origin { animation: fadeUp 0.5s ease forwards; }
  .brand-hero-sub { animation: fadeUp 0.9s ease 0.1s both; }

` }} />
</head>
<body>

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
          <span className="img-label" data-style="font-size:16px;opacity:0.4;">RIO</span>
        </div>
      </div>
      <div className="story-img-small">
        <div className="img-placeholder">
          <span className="img-label" data-style="font-size:16px;opacity:0.4;">2019</span>
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
          <span className="img-label" data-style="font-size:32px;opacity:0.3;color:#b5a96a;">JERSEY</span>
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
          <span className="img-label" data-style="font-size:32px;opacity:0.3;color:#b5a96a;">TEE</span>
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
          <span className="img-label" data-style="font-size:32px;opacity:0.3;color:#b5a96a;">CAP</span>
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
          <span className="img-label" data-style="font-size:20px;opacity:0.25;color:#b5a96a;">COCI</span>
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
          <span className="img-label" data-style="font-size:20px;opacity:0.25;color:#b5a96a;">ICONS</span>
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
          <span className="img-label" data-style="font-size:20px;opacity:0.25;color:#b5a96a;">SURULERE</span>
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
          <span className="img-label" data-style="font-size:20px;opacity:0.25;color:#b5a96a;">—</span>
        </div>
      </div>
      <div className="related-card-body">
        <div className="product-card-brand">COMING</div>
        <div className="product-card-name">Soon</div>
      </div>
    </div>
  </div>
</section>

<script>
  function switchTab(tab, el) {
    document.querySelectorAll('.story-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    document.getElementById('tab-story').classList.remove('active');
    document.getElementById('tab-products').classList.remove('active');

    if (tab === 'story') {
      document.getElementById('tab-story').classList.add('active');
    } else {
      document.getElementById('tab-products').classList.add('active');
    }
  }
</script>

</body>
</html>

    </>
  );
}
