import React from 'react';

export function Maginaristorydetail() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Favela: Born From The Hill</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg:          #2e2e2b;
  --bg-elevated: #363633;
  --bg-card:     #3c3c34;
  --olive:       #b5a96a;
  --olive-dark:  #8a7f50;
  --olive-muted: #6b6440;
  --olive-deep:  #4a4430;
  --olive-body:  #9e9460;
  --text-primary:   #f4f0e4;
  --text-secondary: #e8e4d4;
  --text-muted:     #8a8678;
  --text-dim:       #5a5850;
  --border-subtle:  rgba(181,169,106,0.08);
  --border-light:   rgba(181,169,106,0.15);
  --border-medium:  rgba(181,169,106,0.25);
}

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text-secondary);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  min-height: 100vh;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--olive-muted); border-radius: 2px; }

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--bg);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  letter-spacing: 0.06em;
  color: var(--olive);
  text-decoration: none;
}

.nav-search {
  display: flex;
  align-items: center;
  gap: 9px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 9px 20px;
  width: 240px;
}

.nav-search input {
  background: none; border: none; outline: none;
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px; font-weight: 300; width: 100%;
}
.nav-search input::placeholder { color: var(--text-dim); }

.nav-icons { display: flex; align-items: center; gap: 24px; }
.nav-icon {
  width: 19px; height: 19px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}
.nav-icon:hover { color: var(--olive); }

/* ── BREADCRUMB ── */
.breadcrumb {
  margin-top: 65px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border-subtle);
}

.breadcrumb a { color: var(--text-dim); text-decoration: none; transition: color 0.2s; }
.breadcrumb a:hover { color: var(--olive); }
.breadcrumb span { color: var(--olive-muted); }

/* ── STORY HERO ── */
.story-hero {
  padding: 56px 40px 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: flex-start;
  border-bottom: 1px solid var(--border-subtle);
}

.hero-left {}

.hero-brand-tag {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.hero-brand-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--olive);
}

.hero-brand-name {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--olive);
}

/* "What's New" heading weight from page 2 */
.hero-title {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
}

.hero-title strong {
  font-weight: 500;
  color: var(--olive);
}

.hero-excerpt {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 17px;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 480px;
  margin-bottom: 28px;
}

.hero-meta-row {
  display: flex;
  gap: 32px;
}

.hero-meta-item {}

.hero-meta-label {
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 3px;
}

.hero-meta-value {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* Right side — feed-style card from page 2 */
.hero-right {
  width: 200px;
  flex-shrink: 0;
}

.hero-feed-card {
  cursor: pointer;
}

.hero-feed-thumb {
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background: linear-gradient(145deg, #192030 0%, #0d1525 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
}

.hero-feed-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: rgba(181,169,106,0.12);
  letter-spacing: 0.1em;
}

/* Studio badge — from page 1 */
.hero-feed-badge {
  position: absolute;
  top: 10px; right: 10px;
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(181,169,106,0.45);
  background: rgba(42,42,39,0.65);
  border: 1px solid rgba(181,169,106,0.15);
  padding: 4px 8px;
  border-radius: 2px;
}

.hero-feed-brand { font-size: 15px; font-weight: 400; color: var(--text-secondary); margin-bottom: 2px; }
.hero-feed-product { font-size: 15px; font-weight: 300; color: var(--text-secondary); margin-bottom: 6px; }
.hero-feed-studio { font-size: 13px; color: var(--text-dim); }

/* Feed action row — exact from page 2 */
.feed-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}

.btn-circle {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(181,169,106,0.1);
  border: 1px solid var(--border-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  color: var(--olive);
  font-size: 17px;
  line-height: 1;
}

.btn-circle:hover { background: rgba(181,169,106,0.2); }

.btn-circle.play svg {
  width: 11px; height: 11px;
  fill: var(--olive);
  margin-left: 2px;
}

/* ── SCROLL PLAY FRAME ── */
.scroll-play-wrapper {
  position: relative;
  margin: 0;
  padding: 0 40px 0;
  overflow: hidden;
}

/* Sticky container that holds the frame */
.scroll-play-sticky {
  position: sticky;
  top: 65px;
  z-index: 10;
  padding: 32px 0;
  transition: all 0.4s ease;
}

/* The actual play frame */
.play-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16/8;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(145deg, #111520 0%, #0a0d18 50%, #080a12 100%);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Frame expands as you scroll into it */
.play-frame.expanded {
  transform: scale(1.0);
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
}

/* Cinematic lines inside frame */
.frame-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(181,169,106,0.01) 2px,
    rgba(181,169,106,0.01) 4px
  );
  pointer-events: none;
}

/* Film strip on left edge — from page 2 cinematic language */
.frame-filmstrip {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 24px;
  background: rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0;
  gap: 0;
}

.filmstrip-hole {
  width: 10px; height: 8px;
  border-radius: 1px;
  background: rgba(181,169,106,0.15);
  border: 1px solid rgba(181,169,106,0.08);
  flex-shrink: 0;
}

/* Frame content */
.frame-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.frame-brand-ghost {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(60px, 10vw, 120px);
  color: rgba(181,169,106,0.06);
  letter-spacing: 0.08em;
  line-height: 1;
  user-select: none;
}

/* Play button in frame — olive circle from page 2 */
.frame-play-btn {
  position: absolute;
  width: 64px; height: 64px;
  border-radius: 50%;
  background: var(--olive);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s, background 0.2s;
  box-shadow: 0 0 0 0 rgba(181,169,106,0.3);
  animation: pulse 2.5s ease infinite;
}

.frame-play-btn:hover {
  transform: scale(1.12);
  background: #c4b870;
  animation: none;
}

.frame-play-btn svg {
  width: 22px; height: 22px;
  fill: var(--bg);
  margin-left: 4px;
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(181,169,106,0.35); }
  60%  { box-shadow: 0 0 0 18px rgba(181,169,106,0); }
  100% { box-shadow: 0 0 0 0 rgba(181,169,106,0); }
}

/* Frame bottom info bar */
.frame-info-bar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 20px 32px 20px 40px;
  background: linear-gradient(to top, rgba(10,12,18,0.95) 0%, transparent 100%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.frame-info-left {}

.frame-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.06em;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.frame-subtitle {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.frame-duration {
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  font-family: 'DM Sans', sans-serif;
}

/* Progress bar on frame */
.frame-progress {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: rgba(181,169,106,0.12);
}

.frame-progress-fill {
  height: 100%;
  background: var(--olive);
  width: 0%;
  transition: width 0.3s ease;
}

/* Scroll progress indicator */
.scroll-progress {
  position: absolute;
  right: -24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.scroll-progress-track {
  width: 2px;
  height: 80px;
  background: var(--border-subtle);
  border-radius: 1px;
  position: relative;
}

.scroll-progress-fill {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  background: var(--olive);
  border-radius: 1px;
  height: 0%;
  transition: height 0.2s ease;
}

/* ── STORY BODY ── */
.story-body {
  padding: 64px 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  border-bottom: 1px solid var(--border-subtle);
}

.story-sidebar {}

.sidebar-sticky {
  position: sticky;
  top: 100px;
}

/* Section label from page 2 */
.sidebar-label {
  font-size: clamp(18px, 2.5vw, 26px);
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}

.sidebar-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.sidebar-meta-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-subtle);
}

.sidebar-meta-row:last-child { border-bottom: none; }

.sidebar-key {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.sidebar-val {
  font-size: 12px;
  color: var(--text-muted);
  text-align: right;
}

/* Toggle — exact from page 2 */
.toggle-row {
  display: flex;
  margin-bottom: 0;
}

.toggle-btn {
  padding: 9px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-dim);
  transition: all 0.2s;
}

.toggle-btn:first-child { border-radius: 20px 0 0 20px; }
.toggle-btn:last-child  { border-radius: 0 20px 20px 0; border-left: none; }
.toggle-btn.active { background: var(--olive-muted); border-color: var(--olive-muted); color: var(--text-primary); }

.story-content {}

.story-para {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-muted);
  font-weight: 300;
  margin-bottom: 24px;
}

.story-para em {
  color: var(--olive);
  font-style: normal;
  font-weight: 400;
}

.pull-quote {
  margin: 36px 0;
  padding-left: 20px;
  border-left: 2px solid var(--olive-muted);
}

.pull-quote p {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 19px;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Inline image — card language from page 1 */
.story-inline-img {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  margin: 36px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sii-1 { background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%); }
.sii-2 { background: linear-gradient(145deg, #252520 0%, #151510 100%); }

.story-inline-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 56px;
  color: rgba(181,169,106,0.08);
  letter-spacing: 0.1em;
}

/* Inline caption */
.story-caption {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-top: -28px;
  margin-bottom: 36px;
  padding-left: 2px;
}

/* ── RELATED PRODUCTS — card grid from page 1 ── */
.related-section {
  padding: 64px 40px;
  border-bottom: 1px solid var(--border-subtle);
}

/* "This month" style from page 2 */
.related-heading {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}

.related-heading strong {
  font-weight: 500;
  color: var(--olive);
}

/* Card grid — exact from page 1 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.brand-card {
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s;
}

.brand-card:hover { transform: translateY(-5px); }

.bc-img {
  aspect-ratio: 1 / 0.85;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.bc-1 { background: linear-gradient(160deg, #192030 0%, #0d1525 100%); }
.bc-2 { background: linear-gradient(160deg, #252515 0%, #151510 100%); }
.bc-3 { background: linear-gradient(160deg, #111115 0%, #080810 100%); }

.bc-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 44px;
  color: rgba(181,169,106,0.1);
  letter-spacing: 0.1em;
}

/* Studio badge from page 1 */
.bc-badge {
  position: absolute;
  top: 10px; right: 10px;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(42,42,39,0.55);
  border: 1px solid rgba(181,169,106,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bc-badge svg {
  width: 13px; height: 13px;
  fill: none;
  stroke: rgba(181,169,106,0.45);
  strokeWidth: 1.5;
}

/* Olive card body — exact from page 1 */
.bc-body {
  background: var(--olive-body);
  border-radius: 0 0 10px 10px;
  padding: 16px 16px 20px;
  opacity: 0.9;
}

.bc-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.1em;
  color: #2a2a25;
  line-height: 1;
  margin-bottom: 4px;
}

.bc-origin {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(42,42,35,0.5);
  margin-bottom: 10px;
}

.bc-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid rgba(42,42,35,0.1);
}

.bc-price {
  font-size: 13px;
  color: rgba(42,42,35,0.65);
  font-weight: 400;
}

.btn-sm-pair { display: flex; gap: 7px; }

.btn-sm {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: rgba(42,42,35,0.14);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  color: rgba(42,42,35,0.55);
  font-size: 15px;
}

.btn-sm:hover { background: rgba(42,42,35,0.26); }

.btn-sm.play svg {
  width: 9px; height: 9px;
  fill: rgba(42,42,35,0.55);
  margin-left: 2px;
}

/* ── CHEVRON DOWN — exact from page 2 ── */
.chevron-down {
  display: flex;
  justify-content: center;
  padding: 28px 0 44px;
  cursor: pointer;
}

.chevron-down svg {
  width: 24px; height: 14px;
  stroke: var(--text-dim);
  fill: none;
  strokeWidth: 1.5;
  transition: stroke 0.2s, transform 0.2s;
}

.chevron-down:hover svg { stroke: var(--olive); transform: translateY(3px); }

/* ── FOOTER ── */
footer {
  padding: 40px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-muted);
}

.footer-sub { font-size: 11px; letter-spacing: 0.12em; color: var(--text-dim); margin-top: 3px; }

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.story-hero { animation: fadeUp 0.6s ease both; }
` }} />
</head>
<body>

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
  <div data-style="font-size:11px;color:var(--text-dim);letter-spacing:0.1em;text-align:right;">
    Culture Envisioned.
  </div>
</footer>

<script>
  // ── SCROLL PLAY FRAME BEHAVIOUR ──
  const wrapper    = document.getElementById('play-wrapper');
  const frame      = document.getElementById('play-frame');
  const playBtn    = document.getElementById('frame-play-btn');
  const progressFill = document.getElementById('progress-fill');

  let isPlaying = false;
  let progressInterval = null;
  let progressVal = 0;

  // On scroll — frame responds to scroll position
  window.addEventListener('scroll', () => {
    const rect = wrapper.getBoundingClientRect();
    const windowH = window.innerHeight;

    // How far into the frame are we
    const scrolledIn = Math.max(0, windowH - rect.top);
    const totalHeight = rect.height;
    const progress = Math.min(1, scrolledIn / totalHeight);

    // Frame scale grows as you scroll into it
    const scale = 0.92 + (progress * 0.08);
    frame.style.transform = `scale(${scale})`;
    frame.style.boxShadow = `0 ${8 + progress * 32}px ${24 + progress * 60}px rgba(0,0,0,${0.3 + progress * 0.3})`;

    // Filmstrip opacity builds with scroll
    const filmstrip = document.getElementById('filmstrip');
    filmstrip.style.opacity = 0.3 + progress * 0.7;

    // Auto-activate play hint when fully visible
    if (progress > 0.6 && !isPlaying) {
      playBtn.style.transform = 'scale(1.05)';
    } else if (!isPlaying) {
      playBtn.style.transform = 'scale(1)';
    }
  });

  // Toggle play state
  function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" data-style="width:22px;height:22px;fill:#2a2a27;"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
      playBtn.style.background = '#c4b870';
      startProgress();
    } else {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" data-style="width:22px;height:22px;fill:#2a2a27;margin-left:4px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
      playBtn.style.background = 'var(--olive)';
      stopProgress();
    }
  }

  function startProgress() {
    progressInterval = setInterval(() => {
      progressVal = Math.min(100, progressVal + 0.15);
      progressFill.style.width = progressVal + '%';
      if (progressVal >= 100) {
        stopProgress();
        isPlaying = false;
        progressVal = 0;
        playBtn.innerHTML = `<svg viewBox="0 0 24 24" data-style="width:22px;height:22px;fill:#2a2a27;margin-left:4px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
        playBtn.style.background = 'var(--olive)';
      }
    }, 100);
  }

  function stopProgress() {
    clearInterval(progressInterval);
  }

  // Toggle tabs
  function switchTab(el) {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }
</script>

</body>
</html>

    </>
  );
}
