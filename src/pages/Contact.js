import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.description}>
          We'd love to hear from you! Reach out via email, phone, or the form below.
        </p>

        {/* Contact Info */}
        <div style={styles.info}>
          <p><strong>Email:</strong> support@crowdfund.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
        </div>

        {/* Contact Form */}
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Your Email" style={styles.input} required />
          <textarea placeholder="Your Message" rows="4" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        {/* Social Links */}
        <div style={styles.socialLinks}>
          <p>Follow us on:</p>
          <a href="#" style={styles.link}>🔵 Facebook</a>
          <a href="#" style={styles.link}>🐦 Twitter</a>
          <a href="#" style={styles.link}>📸 Instagram</a>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "30px",
  },
  box: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#222",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  info: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  socialLinks: {
    marginTop: "20px",
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "1.1rem",
    margin: "5px 0",
  },
};

// Button hover effect
styles.button[":hover"] = {
  backgroundColor: "#0056b3",
};

export default Contact;
