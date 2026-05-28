'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    flowerType: '',
    quantity: 1,
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Thank you! Your order has been submitted successfully. 🌸');
        setFormData({ fullName: '', email: '', phoneNumber: '', flowerType: '', quantity: 1, message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e0d8d4',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'Jost, sans-serif',
    background: '#faf7f4',
    outline: 'none',
  };

  const labelStyle = {
    fontSize: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    color: '#3f3f3d',
    marginBottom: '6px',
    display: 'block',
  };

  return (
    <div>
      {/* Header */}
      <section style={{ background: '#f5e7e6', padding: '100px 24px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e28474', marginBottom: '16px' }}>Get in Touch</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 60px)', color: '#3f3f3d', fontWeight: 300 }}>
          Contact Us
        </h1>
      </section>

      <section style={{ background: '#faf7f4', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '48px 36px', borderRadius: '8px', boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#3f3f3d', textAlign: 'center', marginBottom: '32px', fontWeight: 400 }}>
            Place Your Order
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Full Name</label>
              <input style={inputStyle} type="text" required value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })} placeholder="Enter your full name" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" required value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Phone Number</label>
              <input style={inputStyle} type="tel" required value={formData.phoneNumber}
                onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder="Enter your phone number" />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Flower Type</label>
              <select style={inputStyle} required value={formData.flowerType}
                onChange={e => setFormData({ ...formData, flowerType: e.target.value })}>
                <option value="">Select a flower type</option>
                <option value="Classic Roses">Classic Roses</option>
                <option value="Peony Perfection">Peony Perfection</option>
                <option value="Wildflower Meadow">Wildflower Meadow</option>
                <option value="Orchid Elegance">Orchid Elegance</option>
                <option value="Sunflower Joy">Sunflower Joy</option>
                <option value="Lily Grace">Lily Grace</option>
                <option value="Custom Arrangement">Custom Arrangement</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Quantity</label>
              <input style={inputStyle} type="number" min="1" max="100" required value={formData.quantity}
                onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) })} />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={labelStyle}>Special Message (Optional)</label>
              <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' as const }} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Any special requests or card message..." />
            </div>

            <button type="submit" style={{ width: '100%', background: '#e28474', color: '#fff', border: 'none', padding: '14px', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Jost, sans-serif' }}>
              Submit Order
            </button>
          </form>

          {status && (
            <p style={{ marginTop: '20px', textAlign: 'center', color: status.includes('Thank') ? '#4caf50' : '#e28474', fontSize: '14px' }}>
              {status}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
