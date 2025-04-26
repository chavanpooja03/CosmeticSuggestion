import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Segoe UI, sans-serif', fontSize: '0.9rem', lineHeight: '1.7', background: 'linear-gradient(to right, #f9f9f9, #eef2f3)', color: '#333' }}>
      <h1 style={{ fontSize: '2rem', color: '#003366', marginBottom: '20px' }}>Terms of Service</h1>
      <p><strong>Effective Date:</strong> April 24, 2025</p>

      <h2 style={sectionStyle}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using SkinCareAI ("the Service"), you agree to be bound by these Terms of Service ("Terms").
        If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all visitors,
        users, and others who access or use the Service.
      </p>

      <h2 style={sectionStyle}>2. Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time at our sole discretion. You are responsible
        for reviewing these Terms periodically for any changes. Your continued use of the Service following the
        posting of any changes constitutes acceptance of those changes.
      </p>

      <h2 style={sectionStyle}>3. Eligibility</h2>
      <p>
        You must be at least 13 years old to use this Service. By agreeing to these Terms, you represent and warrant
        that you are at least 13 years of age and are otherwise legally qualified to enter into and form contracts
        under applicable law.
      </p>

      <h2 style={sectionStyle}>4. User Responsibilities</h2>
      <p>
        You agree to use the Service in compliance with all applicable laws and regulations. You must not:
      </p>
      <ul>
        <li>Engage in any conduct that is illegal or fraudulent.</li>
        <li>Violate or infringe on the rights of others, including privacy, publicity, or intellectual property rights.</li>
        <li>Transmit viruses, malware, or other malicious software or content.</li>
        <li>Use automated scripts to interact with the Service.</li>
      </ul>

      <h2 style={sectionStyle}>5. Intellectual Property</h2>
      <p>
        All content, design elements, and intellectual property associated with the Service are the sole property
        of SkinCareAI and are protected under applicable copyright, trademark, and intellectual property laws.
        Unauthorized use is strictly prohibited.
      </p>

      <h2 style={sectionStyle}>6. Privacy Policy</h2>
      <p>
        Your use of the Service is governed by our <a href="/privacy-policy" style={{ color: '#0077cc' }}>Privacy Policy</a>,
        which outlines how we collect, store, and use personal information. We strongly encourage you to read it
        before using the Service.
      </p>

      <h2 style={sectionStyle}>7. Disclaimers</h2>
      <p>
        The Service is provided "AS IS" and "AS AVAILABLE" without warranty of any kind, whether express or implied.
        SkinCareAI makes no warranties regarding the accuracy, reliability, or availability of the Service.
      </p>

      <h2 style={sectionStyle}>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, SkinCareAI shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising out of or relating to your use of or inability to use the Service.
      </p>

      <h2 style={sectionStyle}>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless SkinCareAI, its directors, employees, affiliates, and agents from any
        claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your
        violation of these Terms.
      </p>

      <h2 style={sectionStyle}>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
        conflict of law rules. All disputes arising out of or in connection with these Terms shall be subject to
        the exclusive jurisdiction of the courts of India.
      </p>

      <h2 style={sectionStyle}>11. Termination</h2>
      <p>
        We may terminate or suspend your access to the Service immediately, without prior notice or liability, for
        any reason whatsoever, including without limitation if you breach these Terms. All provisions of the Terms
        which by their nature should survive termination shall survive, including ownership provisions, warranty
        disclaimers, indemnity, and limitations of liability.
      </p>

      <h2 style={sectionStyle}>12. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:support@skincareai.com" style={{ color: '#0077cc' }}>support@skincareai.com</a>.
      </p>
    </div>
  );
};

const sectionStyle = {
  fontSize: '1.2rem',
  color: '#222222',
  marginTop: '30px'
};

export default TermsOfServicePage;