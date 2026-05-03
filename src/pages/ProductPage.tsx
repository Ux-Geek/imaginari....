
import React, { useState } from 'react';
import { TryOnModal } from '../components/TryOnModal';

export const ProductPage = () => {
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const mockProduct = { name: "Retro Jersey — Vol. 1", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800" };
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

{/*  BREADCRUMB  */}
<div className="breadcrumb">
  <a href="#">MAGINARI</a>
  <span>/</span>
  <a href="#">Favela</a>
  <span>/</span>
  Retro Jersey
</div>

{/*  PRODUCT LAYOUT  */}
<div className="product-layout">

  {/*  LEFT — VISUAL  */}
  <div className="product-visual">
    <div className="product-main-img">
      <div className="img-bg"></div>
      <div className="img-content">
        <span className="img-label">FAVELA</span>
        <span className="img-sublabel">Retro Jersey — Vol. 1</span>
      </div>
      <button className="play-overlay">
        <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </button>
    </div>
    <div className="product-thumbs">
      <div className="product-thumb active">
        <div className="thumb-bg t1">FRONT</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t2">BACK</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t3">DETAIL</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t4">WORN</div>
      </div>
    </div>
  </div>

  {/*  RIGHT — DETAILS  */}
  <div className="product-details">
    <div className="product-studio">Exclamation Studios — Favela</div>
    <div className="product-brand-name">FAVELA</div>
    <div className="product-name">Retro Jersey — Vol. 1</div>
    <div className="product-price">₦ 48,000 <span>Exclusive Edition</span></div>

    <div className="size-label">Select Size</div>
    <div className="size-grid">
      <button className="size-btn sold-out">XS</button>
      <button className="size-btn">S</button>
      <button className="size-btn active">M</button>
      <button className="size-btn">L</button>
      <button className="size-btn">XL</button>
      <button className="size-btn sold-out">XXL</button>
    </div>

    <div className="cta-stack">
      <button className="btn-primary">Add to Cart</button>
      <button 
        className="btn-ghost" 
        onClick={() => setIsTryOnOpen(true)}
      >
        Try it on
      </button>
      <button className="btn-secondary">♡ &nbsp; Save to Wishlist</button>
    </div>

    <div className="divider"></div>

    <div className="story-excerpt">
      <div className="story-excerpt-label">The Story Behind This Piece</div>
      <blockquote>"We don't design clothes. We design evidence that we were here."</blockquote>
      <p>The Retro Jersey is not nostalgia. It is a document. Every stitch a street name, every colour a memory of someone who made the hill beautiful before beauty was fashionable.</p>
      <a className="story-link">Read the full story</a>
    </div>

    <div className="divider"></div>

    <div className="product-meta">
      <div className="meta-row">
        <span className="meta-key">Origin</span>
        <span className="meta-val">Rio de Janeiro, Brazil</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Material</span>
        <span className="meta-val">100% Cotton — Heavyweight</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Edition</span>
        <span className="meta-val">Limited — 50 units</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Ships</span>
        <span className="meta-val">Worldwide — 7–14 days</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Studio</span>
        <span className="meta-val">Exclamation Studios</span>
      </div>
    </div>

  </div>
</div>




      <TryOnModal 
        isOpen={isTryOnOpen} 
        onClose={() => setIsTryOnOpen(false)} 
        product={mockProduct} 
      />
    </div>
  );
};
