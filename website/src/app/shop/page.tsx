import Link from 'next/link';

export default function Shop() {
  const products = [
    { name: 'The Juliet', price: '$120', bg: '#f5c8c0' },
    { name: 'Blush & Bashful', price: '$85', bg: '#f5e0d0' },
    { name: 'Midnight Garden', price: '$140', bg: '#c8d4c0' },
    { name: 'Sunday Morning', price: '$95', bg: '#f5e7c0' },
    { name: 'Eternal Love', price: '$160', bg: '#e0d4f0' },
    { name: 'Golden Hour', price: '$105', bg: '#f5deb3' },
    { name: 'Spring Whisper', price: '$78', bg: '#d4eac8' },
    { name: 'Rose Garden', price: '$130', bg: '#f5c8c8' },
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ background: '#f5e7e6', padding: '100px 24px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '16px' }}>Browse & Order</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 60px)', color: '#3f3f3d', fontWeight: 300 }}>
          Our Shop
        </h1>
      </section>

      {/* Products Grid */}
      <section style={{ background: '#faf7f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {products.map(p => (
            <div key={p.name} style={{ background: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ height: '220px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '56px' }}>🌸</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#3f3f3d', marginBottom: '8px' }}>{p.name}</h3>
                <p style={{ fontSize: '18px', color: '#e28474', fontWeight: 500, marginBottom: '16px' }}>{p.price}</p>
                <Link href="/contact" style={{ display: 'block', background: '#e28474', color: '#fff', padding: '10px', textAlign: 'center', textDecoration: 'none', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '2px' }}>
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
