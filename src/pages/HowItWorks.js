import React from "react";

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 How Our Crowdfunding Platform Works</h1>
      <p style={styles.description}>
        Crowdfunding is a powerful way to raise funds for ideas, social causes, businesses, and creative projects.
        Our platform connects campaign creators with potential donors, making fundraising simple and transparent.
      </p>

      {/* Step 1 */}
      <div style={styles.step}>
        <h2 style={styles.stepTitle}>📌 Step 1: Create a Campaign</h2>
        <ul style={styles.list}>
          <li>✅ Choose a campaign type – Personal, business, or social cause</li>
          <li>✅ Set a funding goal – The amount of money needed</li>
          <li>✅ Write a compelling story – Explain why people should donate</li>
          <li>✅ Add visuals – Upload images, videos, and documents</li>
          <li>✅ Select a fundraising duration – Set a time frame</li>
        </ul>
        <p style={styles.example}>🎯 Example: A student raises funds for college tuition.</p>
      </div>

      {/* Step 2 */}
      <div style={styles.step}>
        <h2 style={styles.stepTitle}>💰 Step 2: Choose a Funding Model</h2>
        <div style={styles.fundingModels}>
          {fundingData.map((fund, index) => (
            <div key={index} style={styles.fundingCard}>
              <h3>{fund.icon} {fund.title}</h3>
              <p>{fund.description}</p>
              <p style={styles.example}>🔹 {fund.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div style={styles.step}>
        <h2 style={styles.stepTitle}>📢 Step 3: Share & Promote Your Campaign</h2>
        <ul style={styles.list}>
          <li>✔️ Social Media Integration – Facebook, Twitter, Instagram</li>
          <li>✔️ Email Marketing – Send updates to potential donors</li>
          <li>✔️ Influencer Collaborations – Work with bloggers</li>
          <li>✔️ Community Engagement – Keep donors updated</li>
        </ul>
        <p style={styles.example}>🎯 Example: A filmmaker shares behind-the-scenes footage to attract funding.</p>
      </div>

      {/* Why Choose Us */}
      <div style={styles.whyUs}>
        <h2>🌍 Why Choose Our Crowdfunding Platform?</h2>
        <ul style={styles.list}>
          <li>✅ No hidden charges – Transparent fee structure</li>
          <li>✅ 24/7 customer support – We’re here for you</li>
          <li>✅ Fast & secure transactions – Ensuring donor trust</li>
          <li>✅ Campaign analytics – Track visits & donations</li>
          <li>✅ Community of backers – Connect with supporters</li>
        </ul>
      </div>

      <div style={styles.cta}>
        <h2>📌 Ready to Create Your Campaign?</h2>
        <button style={styles.startBtn}>Start a Campaign 🚀</button>
      </div>
    </div>
  );
};

const fundingData = [
  { icon: "1️⃣", title: "Donation-Based", description: "People donate without expecting a return.", example: "A medical fundraiser." },
  { icon: "2️⃣", title: "Reward-Based", description: "Donors receive perks or products in return.", example: "A startup offers early access to a smartwatch." },
  { icon: "3️⃣", title: "Equity-Based", description: "Investors receive company shares.", example: "A startup offers ownership stakes." },
  { icon: "4️⃣", title: "Debt Crowdfunding", description: "Supporters lend money and expect repayment.", example: "A business borrows and repays backers." }
];

// CSS Styling (Inline Styles)
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: "#ffffff",
    width: "100%",
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "40px"
  },
  title: {
    color: "#007bff",
    fontSize: "2.5rem",
    marginBottom: "10px"
  },
  description: {
    fontSize: "1.1rem",
    color: "#444",
    maxWidth: "800px",
    margin: "0 auto",
    paddingBottom: "20px"
  },
  step: {
    background: "#fff",
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "15px",
    border: "2px solid #ddd"
  },
  stepTitle: {
    color: "#222",
    fontSize: "1.8rem",
    marginBottom: "15px"
  },
  list: {
    listStyle: "none",
    padding: "0",
    fontSize: "1.1rem",
    lineHeight: "1.8"
  },
  example: {
    fontStyle: "italic",
    color: "#007bff",
    marginTop: "10px"
  },
  fundingModels: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  fundingCard: {
    background: "#ffecec",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    border: "2px solid #ff7b7b"
  },
  whyUs: {
    background: "#f0fff4",
    padding: "30px",
    borderRadius: "15px",
    marginTop: "30px",
    border: "2px solid #28a745"
  },
  cta: {
    marginTop: "30px"
  },
  startBtn: {
    background: "#28a745",
    color: "white",
    padding: "15px 25px",
    fontSize: "1.2rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background 0.3s ease"
  }
};

export default HowItWorks;
