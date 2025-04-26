import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.updated}>Last Updated: April 24, 2025</p>

      <p style={styles.text}>
        At <strong>SkinCareAI</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our Skin Care Product Recommendation System.
      </p>

      <h2 style={styles.heading}>1. Information We Collect</h2>
      <p style={styles.text}>
        We collect the following types of data:
        <ul style={styles.ul}>
          <li><strong>Image Data:</strong> The selfie you capture for skin analysis is processed locally or temporarily stored to analyze your skin condition. We do not retain or share this image beyond the analysis session unless explicitly stated.</li>
          <li><strong>Device Information:</strong> This includes browser type, device model, and operating system to enhance platform compatibility and user experience.</li>
          <li><strong>Usage Information:</strong> Anonymous usage data such as click behavior, interaction times, and navigation patterns are collected for improvement purposes.</li>
        </ul>
      </p>

      <h2 style={styles.heading}>2. How We Use Your Information</h2>
      <p style={styles.text}>
        Your data is used to:
        <ul style={styles.ul}>
          <li>Analyze your skin conditions and provide tailored skincare product recommendations.</li>
          <li>Enhance and personalize your user experience.</li>
          <li>Improve the performance and security of the application.</li>
        </ul>
      </p>

      <h2 style={styles.heading}>3. Data Protection</h2>
      <p style={styles.text}>
        We implement robust security measures such as encryption, session timeouts, and restricted access to safeguard your data. Image data is never permanently stored unless you opt-in to save it for historical analysis (feature in future updates).
      </p>

      <h2 style={styles.heading}>4. Third-Party Services</h2>
      <p style={styles.text}>
        We may integrate third-party APIs or libraries (e.g., for AI analysis). These services do not have access to your image or personal data unless explicitly stated.
      </p>

      <h2 style={styles.heading}>5. Your Consent</h2>
      <p style={styles.text}>
        By using SkinCareAI, you agree to the terms outlined in this Privacy Policy. If you disagree with any part of the policy, we advise you not to use the application.
      </p>

      <h2 style={styles.heading}>6. Changes to the Policy</h2>
      <p style={styles.text}>
        We may update this policy periodically. Changes will be reflected on this page with a new effective date. Continued use of the service implies your acceptance of any updates.
      </p>

      <h2 style={styles.heading}>7. Contact Us</h2>
      <p style={styles.text}>
        If you have any questions or concerns about this Privacy Policy, feel free to contact us at <a href="mailto:info@skincareai.com" style={styles.link}>info@skincareai.com</a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontSize: '0.85rem',
    color: '#444',
    lineHeight: 1.8,
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  updated: {
    fontSize: '0.75rem',
    color: '#888',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '1.1rem',
    marginTop: '24px',
    color: '#333',
  },
  text: {
    marginBottom: '16px',
  },
  ul: {
    paddingLeft: '18px',
    listStyleType: 'disc',
  },
  link: {
    color: '#007acc',
    textDecoration: 'none',
  },
};

export default PrivacyPolicy;
