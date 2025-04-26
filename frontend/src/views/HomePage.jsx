import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
     {/* Header Section */}
<section style={styles.headerSection}>
  <h1 style={styles.mainTitle}>Skin Care Product Recommendation System</h1>
  <p style={styles.subtitle}>
    Discover the best skincare products tailored to your unique skin type with AI-powered analysis based on your skin's condition!
  </p>
  <button style={styles.startButton} onClick={() => navigate('/capture')}>
    Start Analysis
  </button>
</section>

      {/* About Section */}
      <section style={styles.infoSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.benefits}>
            <h2 style={{ ...styles.sectionTitle, textAlign: 'center', color: 'black' }}>About Us</h2>
            <p style={styles.text}>
             At SkinCareAI, we believe every skin is unique. Our system uses advanced image recognition and artificial intelligence to assess your skin condition using a simple selfie.
              We analyze parameters such as skin tone, dryness, oiliness, acne, and more to generate precise recommendations tailored specifically to your needs.
              <br /><br />
              Our mission is to simplify skincare through technology. Whether you're looking to treat specific concerns or establish a daily skincare routine, our AI provides insightful tips,
              product suggestions, and preventative care strategies. We aim to make skincare accessible, personalized, and effective for everyone.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="images/cosmetics.jpg"
              alt="Skin Analysis"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
<section style={styles.featuresSection}>
  <h2 style={styles.sectionTitle}>Key Features</h2>
  <div style={styles.featuresWrapper}>
    <div style={styles.featuresContent}>
      <ul style={styles.featureList}>
        <li>
          📸 <strong style={styles.featureTitle}>Image-Based Skin Analysis</strong><br />
          <span style={styles.featureText}>
            Our system leverages advanced computer vision to analyze selfies, detecting skin tone, texture, and irregularities such as acne, pigmentation, and dryness. The analysis is fast, secure, and entirely personalized to your face, ensuring precise diagnosis every time.
          </span>
        </li>
        <li>
          🤖 <strong style={styles.featureTitle}>AI-Powered Product Recommendations</strong><br />
          <span style={styles.featureText}>
            Based on the results of your analysis, the AI engine recommends a curated list of skincare products best suited for your skin condition. These suggestions are drawn from trusted dermatology-backed brands and account for ingredients, skin type compatibility, and effectiveness.
          </span>
        </li>
        <li>
          🎯 <strong style={styles.featureTitle}>Personalized Skincare Tips</strong><br />
          <span style={styles.featureText}>
            Alongside products, you’ll receive lifestyle and skincare tips that align with your daily routine. These include hydration strategies, application sequences, and seasonal care advice to help you maintain healthy, glowing skin over time.
          </span>
        </li>
      </ul>
    </div>
    <div style={styles.imageContainer}>
      <img
        src="images/cosmetic3.jpg"
        alt="AI Features"
        style={styles.image}
      />
    </div>
  </div>
</section>
{/* Tips Section */}
<section style={styles.tipsSection}>
  <div style={styles.contentWrapper}>
    <h3 style={styles.sectionTitle}>Skincare Tips & FAQ</h3>
    <p style={styles.text}>
      Want to learn more about skincare? Check out our tips, common myths vs. facts, and expert recommendations to keep your skin healthy and glowing.
    </p>
    <Link to="/tips" style={styles.startButton}>
      Explore Tips & FAQ
    </Link>
  </div>
</section>
      
{/* Footer Section */}
<footer style={styles.footer}>
  <p>© 2025 SkinCareAI. All rights reserved.</p>
  <p>
  
  <Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link> | 
  <Link to="/terms-of-service" style={styles.link}>Terms of Service</Link>

  </p>
</footer>



    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: 1.6,
    scrollBehavior: 'smooth',
    color: '#333',
    background: 'linear-gradient(to bottom right, #f9f9f9, #e0f7fa)',
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
    fontWeight: '300',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto 24px',
    opacity: 0.95,
  },
  startButton: {
    backgroundColor: '#fff',
    color: '#007bff',
    padding: '12px 28px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  infoSection: {
    padding: '60px 20px',
    background: 'linear-gradient(120deg, #fdeef5, #ffeef4)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
    gap: '20px',
    flexWrap: 'wrap',
  },
  benefits: {
    backgroundColor: '#fff0f5',
    padding: '24px',
    borderRadius: '16px',
    textAlign: 'left',
    flex: 1,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: '0.875rem',
    fontWeight: '100',
    lineHeight: '1.7',
    color: '#444',
    margin: 0,
  },
  image: {
    width: '100%',
    maxWidth: '260px',
    height: 'auto',
    borderRadius: '14px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  featuresSection: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  featuresWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  featuresContent: {
    flex: 1,
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#f6f9fc',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '0.85rem',
    fontWeight: '100',
    lineHeight: 1.6,
    color: '#444',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  featureTitle: {
    fontWeight: '300',
    fontSize: '0.85rem',
  },
  featureText: {
    fontWeight: '100',
    fontSize: '0.75rem',
    color: '#555',
    display: 'block',
    marginTop: '2px',
    marginLeft: '24px',
  },
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '300',
    marginBottom: '24px',
    color: '#222',
  },
  footer: {
    padding: '20px 20px',
    textAlign: 'center',
    backgroundColor: 'rgba(38, 198, 218, 0.15)',  // Light blue background that complements the page
    color: '#004d40',  // Dark green text color for readability
    fontSize: '0.85rem',  // Smaller font size for the footer text
    marginTop: '40px',  // Space above the footer
  },
  link: {
    color: '#00796b',  // Slightly darker green for the links, maintaining contrast with the background
    textDecoration: 'none',  // Removing underline from links
    fontWeight: '600',  // Slightly bold for better visibility
    padding: '0 5px',  // Space between links
  },
  linkHover: {
    textDecoration: 'underline',  // Adding underline on hover for better UX
  },
  
};


export default HomePage;
