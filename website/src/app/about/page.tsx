export default function About() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: '#f5e7e6', padding: '100px 24px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '16px' }}>Who We Are</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 60px)', color: '#3f3f3d', fontWeight: 300 }}>
          Our Story
        </h1>
      </section>

      {/* Story */}
      <section style={{ background: '#faf7f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#3f3f3d', fontWeight: 300, marginBottom: '24px' }}>
            Born from a Passion for Beauty
          </h2>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: '2', marginBottom: '24px' }}>
            Bloom & Petal began in a small studio in Colombo with a single belief: that flowers have the power to speak when words fall short. Every bouquet we create is a labour of love, thoughtfully composed to capture emotion and elevate the everyday.
          </p>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: '2' }}>
            We work with local growers to source the freshest blooms, and our team of dedicated florists brings years of artistry to every arrangement — from intimate hand-tied bouquets to grand floral installations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#3f3f3d', textAlign: 'center', fontWeight: 300, marginBottom: '56px' }}>
            What We Stand For
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: '🌱', title: 'Sustainability', desc: 'Locally sourced blooms and eco-friendly packaging.' },
              { icon: '💐', title: 'Craftsmanship', desc: 'Every arrangement hand-made by expert florists.' },
              { icon: '❤️', title: 'Emotion', desc: 'We design to move hearts and create memories.' },
              { icon: '⚡', title: 'Reliability', desc: 'Same-day delivery you can always count on.' },
            ].map(v => (
              <div key={v.title} style={{ padding: '28px 16px', border: '1px solid #f5e7e6', borderRadius: '4px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#3f3f3d', marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
