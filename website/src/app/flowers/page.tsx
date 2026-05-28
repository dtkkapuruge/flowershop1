export default function Flowers() {
  const flowers = [
    { name: 'Classic Roses', type: 'Bouquet', price: '$85', desc: 'Deep romantic hues wrapped in elegant paper.', emoji: '🌹', bg: '#f5c8c0' },
    { name: 'Peony Perfection', type: 'Vase Arrangement', price: '$120', desc: 'Soft, lush peonies in full bloom.', emoji: '🌺', bg: '#f5e0d0' },
    { name: 'Wildflower Meadow', type: 'Hand-tied', price: '$75', desc: 'A natural, free-spirited mix of seasonal wildflowers.', emoji: '🌼', bg: '#e8f0c8' },
    { name: 'Orchid Elegance', type: 'Potted', price: '$150', desc: 'Sophisticated orchids that last for weeks.', emoji: '🪻', bg: '#e0d4f0' },
    { name: 'Sunflower Joy', type: 'Bouquet', price: '$65', desc: 'Bright, cheerful sunflowers to light up any room.', emoji: '🌻', bg: '#f5e7c0' },
    { name: 'Lily Grace', type: 'Vase Arrangement', price: '$110', desc: 'Pure white lilies arranged with delicate greens.', emoji: '🤍', bg: '#f0ece4' },
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ background: '#f5e7e6', padding: '100px 24px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '16px' }}>Our Collection</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 60px)', color: '#3f3f3d', fontWeight: 300 }}>
          Our Flowers
        </h1>
      </section>

      {/* Grid */}
      <section style={{ background: '#faf7f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {flowers.map(f => (
            <div key={f.name} style={{ background: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ height: '240px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '64px' }}>{f.emoji}</span>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ fontSize: '11px', color: '#e28474', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{f.type}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#3f3f3d', marginBottom: '8px' }}>{f.name}</h3>
                <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '12px' }}>{f.desc}</p>
                <p style={{ fontSize: '18px', color: '#e28474', fontWeight: 500 }}>{f.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
