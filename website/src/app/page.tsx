import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #f5e7e6 0%, #faf7f4 60%)', minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '20px' }}>
            Sri Lanka&apos;s Premier Flower Studio
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 8vw, 80px)', color: '#3f3f3d', lineHeight: '1.1', fontWeight: 300, marginBottom: '28px' }}>
            Where Flowers<br /><em>Tell Stories</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#888', lineHeight: '1.8', maxWidth: '500px', margin: '0 auto 40px' }}>
            Handcrafted bouquets and arrangements for every cherished moment. From weddings to everyday beauty.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" style={{ background: '#e28474', color: '#fff', padding: '14px 36px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '2px' }}>
              Shop Now
            </Link>
            <Link href="/about" style={{ border: '1px solid #3f3f3d', color: '#3f3f3d', padding: '14px 36px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '2px' }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', textAlign: 'center' }}>
          {[
            { icon: '🌸', title: 'Fresh Daily', desc: 'Every arrangement is crafted fresh the morning of your delivery.' },
            { icon: '🚚', title: 'Same-Day Delivery', desc: 'Order before 2pm and receive your flowers the same day.' },
            { icon: '✂️', title: 'Custom Designs', desc: 'Work with our florists to design a truly personal arrangement.' },
            { icon: '💚', title: 'Sustainable', desc: 'We source locally and use eco-friendly packaging.' },
          ].map(f => (
            <div key={f.title} style={{ padding: '32px 20px', borderRadius: '4px', border: '1px solid #f5e7e6' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#3f3f3d', marginBottom: '10px', fontWeight: 500 }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.8' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Flowers */}
      <section style={{ background: '#faf7f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '12px' }}>Our Collection</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', color: '#3f3f3d', fontWeight: 300 }}>Most Loved Arrangements</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '28px' }}>
            {[
              { name: 'The Juliet', price: '$120', type: 'Bouquet', bg: '#f5c8c0' },
              { name: 'Blush & Bashful', price: '$85', type: 'Bouquet', bg: '#f5e0d0' },
              { name: 'Midnight Garden', price: '$140', type: 'Vase Arrangement', bg: '#c8d4c0' },
              { name: 'Sunday Morning', price: '$95', type: 'Hand-tied', bg: '#f5e7c0' },
            ].map(p => (
              <div key={p.name} style={{ background: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '260px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '64px' }}>🌸</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '11px', color: '#e28474', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{p.type}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#3f3f3d', marginBottom: '8px' }}>{p.name}</h3>
                  <p style={{ fontSize: '16px', color: '#e28474', fontWeight: 500 }}>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/shop" style={{ border: '1px solid #e28474', color: '#e28474', padding: '14px 40px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: '#e28474', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', color: '#fff', fontWeight: 300, marginBottom: '16px' }}>
          Order Your Custom Bouquet
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px' }}>
          Tell us your story and we'll craft something extraordinary just for you.
        </p>
        <Link href="/contact" style={{ background: '#fff', color: '#e28474', padding: '14px 40px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '2px' }}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
