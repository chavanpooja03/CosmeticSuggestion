// TipsPage.js
import React from 'react';

const TipsPage = () => {
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Skincare Tips & FAQ</h1>
        <p style={styles.subtitle}>
          Explore common myths, skincare tips, and expert recommendations for healthy, glowing skin!
        </p>
      </section>

      {/* Common Myths vs Facts Section */}
      <section style={styles.mythsSection}>
        <h2 style={styles.sectionTitle}>Common Skincare Myths vs Facts</h2>
        <div style={styles.mythsWrapper}>
          <div style={styles.mythBox}>
            <h3 style={styles.mythTitle}>Myth: Oily Skin Doesn’t Need Moisturizer</h3>
            <p style={styles.mythText}>
              <strong>Fact:</strong> Regardless of your skin type, you need moisturizer to keep your skin hydrated and balanced. Oily skin can still get dehydrated.
            </p>
          </div>
          <div style={styles.mythBox}>
            <h3 style={styles.mythTitle}>Myth: Sunscreen Is Only for Sunny Days</h3>
            <p style={styles.mythText}>
              <strong>Fact:</strong> UV rays affect your skin year-round, even on cloudy or rainy days. Wear sunscreen daily to protect your skin.
            </p>
          </div>
          <div style={styles.mythBox}>
            <h3 style={styles.mythTitle}>Myth: Expensive Products Are Always Better</h3>
            <p style={styles.mythText}>
              <strong>Fact:</strong> Expensive skincare doesn't always mean it's more effective. The ingredients and how they suit your skin matter more.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Skincare Tips Section */}
      <section style={styles.tipsSection}>
        <h2 style={styles.sectionTitle}>Expert Skincare Tips</h2>
        <ul style={styles.tipList}>
          <li>🌿 Always remove makeup before bed to avoid clogged pores and acne.</li>
          <li>💧 Stay hydrated! Drink plenty of water throughout the day for healthy skin.</li>
          <li>☀️ Use a broad-spectrum sunscreen daily to prevent premature aging and skin cancer.</li>
          <li>🥗 Eat a balanced diet rich in antioxidants like fruits and vegetables to protect your skin from environmental damage.</li>
          <li>🧴 Avoid touching your face frequently, as it transfers dirt and oils to your skin.</li>
          <li>🔄 Never skip your nighttime skincare routine, as your skin regenerates while you sleep.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqWrapper}>
          <div style={styles.faqItem}>
            <h3 style={styles.faqTitle}>How often should I apply sunscreen?</h3>
            <p style={styles.faqText}>Apply sunscreen every 2 hours when you're outdoors, and after swimming or sweating. Don’t forget your neck and hands!</p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqTitle}>What’s the best way to remove makeup?</h3>
            <p style={styles.faqText}>Use a gentle makeup remover or micellar water to wipe off makeup without irritating your skin. Follow with a cleanser.</p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqTitle}>How do I choose the right moisturizer for my skin type?</h3>
            <p style={styles.faqText}>Choose a lightweight, non-comedogenic moisturizer for oily skin, and a thicker, hydrating cream for dry skin.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles for the TipsPage
const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    background: 'linear-gradient(to bottom right, #f9f9f9, #e0f7fa)',
    paddingBottom: '40px', // Add padding at the bottom to prevent footer overlap
  },
  headerSection: {
    background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    padding: '80px 20px',
    textAlign: 'center',
    color: '#fff',
  },
  mainTitle: {
    fontSize: '2.5rem',
    marginBottom: '16px',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto 24px',
    opacity: 0.9,
  },
  mythsSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
  },
  mythsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  mythBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    flex: '1',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    minWidth: '250px',
    maxWidth: '300px',
  },
  mythTitle: {
    fontSize: '1.2rem',
    color: '#004d40',
    fontWeight: '600',
  },
  mythText: {
    fontSize: '1rem',
    color: '#555',
  },
  tipsSection: {
    padding: '40px 20px',
    backgroundColor: '#f0f9ff',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  tipList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.7',
    fontWeight: '300',
    textAlign: 'left',
    marginLeft: '40px',
    marginBottom: '20px',
  },
  faqSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
  },
  faqWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  faqItem: {
    backgroundColor: '#f0f9ff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  faqTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#00796b',
  },
  faqText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default TipsPage;
