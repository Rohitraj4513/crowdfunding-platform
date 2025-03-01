import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  container: {
    padding: "120px 30px",
    textAlign: "center",
    background: "#f8f8f8",
    
  },
  title: {
    fontSize: "2.5rem",
    color: "#222",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "40px",
  },
  sliderWrapper: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  testimonialCard: {
    background: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#222",
  },
  username: {
    fontSize: "0.9rem",
    color: "#777",
  },
  reviewText: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "10px",
  },
  storySection: {
    marginTop: "80px",
    textAlign: "center",
  },
  storyWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  storyCard: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },
  storyCardReversed: {
    flexDirection: "row-reverse",
  },
  image: {
    width: "50%",
    borderRadius: "10px",
  },
  textContainer: {
    width: "50%",
    padding: "20px",
    textAlign: "left",
  },
  storyTitle: {
    fontSize: "2rem",
    color: "#d10052",
    marginBottom: "10px",
  },
  storyText: {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
  },

  image: {
    width: "40%",  // Reduce from 50% to 40%
    maxWidth: "250px",  // Set a max width limit
    height: "auto",
    borderRadius: "10px",
  },
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const testimonials = [
    {
      img: "/images/ts1.jpg",
      name: "Naghma Mulla",
      username: "@nugs712",
      review:
        "We can vouch for this platform. Over the past few months, we have started fundraisers here. The process is smooth, and the support is amazing!",
    },
    {
      img: "/images/ts2.jpg",
      name: "John Doe",
      username: "@johndoe",
      review:
        "This crowdfunding platform has changed lives. Easy to use and great support. Highly recommend!",
    },
    {
      img: "/images/st3.jpg",
      name: "Sarah Lee",
      username: "@sarahlee",
      review:
        "I never thought I could raise funds so quickly. The process of setting up fundraisers and withdrawing funds is seamless!",
    },
  ];

  const successStories = [
    {
      img: "/images/cmp1.jpeg",
      title: "A Community Comes Together",
      text: "Maria lost her home to a fire and raised enough funds in just days! She is forever grateful to the community for helping her rebuild her life.",
    },
    {
      img: "/images/cmp2.png",
      title: "Startup Success",
      text: "Jason launched his tech startup with $50,000 raised through our platform. Now, his business is thriving and making a difference!",
    },
    {
      img: "/images/cmp3.jpeg",
      title: "Life-Saving Medical Fundraiser",
      text: "Liam, a child needing heart surgery, got over $100,000 in donations! His family is thankful for the generosity of strangers.",
    },

    
  ];

  return (
    <div style={styles.container}>
      {/* Testimonials Section */}
      <h2 style={styles.title}>What People Are Saying</h2>
      <p style={styles.subtitle}>Hear from people who have used our platform.</p>
      <div style={styles.sliderWrapper}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.profile}>
                <img src={testimonial.img} alt={testimonial.name} style={styles.avatar} />
                <div>
                  <h4 style={styles.name}>{testimonial.name}</h4>
                  <p style={styles.username}>{testimonial.username}</p>
                </div>
              </div>
              <p style={styles.reviewText}>{testimonial.review}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Success Stories Section */}
      <div style={styles.storySection}>
        <h2 style={styles.title}>🌟 Success Stories 🌟</h2>
        <p style={styles.subtitle}>Real people. Real impact. See how we’ve changed lives.</p>

        <div style={styles.storyWrapper}>
          {successStories.map((story, index) => (
            <div
              key={index}
              style={{
                ...styles.storyCard,
                ...(index % 2 === 1 ? styles.storyCardReversed : {}),
              }}
            >
              <img src={story.img} alt={story.title} style={styles.image} />
              <div style={styles.textContainer}>
                <h2 style={styles.storyTitle}>{story.title}</h2>
                <p style={styles.storyText}>{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
