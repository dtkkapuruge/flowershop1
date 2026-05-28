import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Coral top strip */}
      <div style={{ background: '#e28474', padding: '16px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Handcrafted with Love — Every Bouquet Tells a Story 🌸
        </p>
      </div>

      <div style={{ background: '#3f3f3d', color: '#ccc', padding: '48px 24px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#fff', marginBottom: '12px', fontWeight: 400 }}>Bloom & Petal</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#aaa' }}>Premium floral arrangements crafted for every celebration and everyday beauty.</p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: '#e28474', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</h4>
            {['Home', 'About', 'Flowers', 'Shop', 'Contact'].map(l => (
              <Link key={l} href={`/${l === 'Home' ? '' : l.toLowerCase()}`}
                style={{ display: 'block', color: '#aaa', textDecoration: 'none', fontSize: '13px', marginBottom: '8px' }}>
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#e28474', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact Us</h4>
            <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '2' }}>
              📍 123 Blossom Lane, Colombo<br />
              📞 +94 77 123 4567<br />
              📧 hello@bloomandpetal.lk
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #555', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>© {new Date().getFullYear()} Bloom & Petal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
