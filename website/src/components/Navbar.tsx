'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/flowers', label: 'Flowers' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ background: '#faf7f4', borderBottom: '1px solid #f0e8e6', position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Announcement bar */}
      <div style={{ background: '#e28474', color: '#fff', textAlign: 'center', padding: '8px', fontSize: '12px', letterSpacing: '2px' }}>
        FREE DELIVERY ON ORDERS OVER $75 🌸
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', color: '#3f3f3d', fontWeight: 400, letterSpacing: '2px' }}>
            Bloom <span style={{ color: '#e28474' }}>&</span> Petal
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '36px' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none', color: '#3f3f3d', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', display: 'none' }} className="hamburger">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#faf7f4', padding: '16px 24px', borderTop: '1px solid #f0e8e6' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', textDecoration: 'none', color: '#3f3f3d', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #f0e8e6' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
