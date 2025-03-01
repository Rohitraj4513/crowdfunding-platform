import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Inline Styles
const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
    background: "#f8f8f8",
    height: "400px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#222",
    marginBottom: "20px",
  },
  sliderWrapper: {
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
  },
  testimonialCard: {
    background: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    textAlign: "left",
    margin: "0 auto",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
  },
  name: {
    margin: "0",
    fontSize: "1.2rem",
    color: "#222",
  },
  username: {
    margin: "0",
    fontSize: "0.9rem",
    color: "#777",
  },
  reviewText: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "10px",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#d10052",
    color: "white",
    border: "none",
    borderRadius: "50%",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 10,
  },
  prevArrow: {
    left: "-100px",
  },
  nextArrow: {
    right: "-100px",
  },
};

// Custom Left Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button style={{ ...styles.arrowButton, ...styles.prevArrow }} onClick={onClick}>
    ❮
  </button>
);

// Custom Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <button style={{ ...styles.arrowButton, ...styles.nextArrow }} onClick={onClick}>
    ❯
  </button>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true, 
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
  };

  const testimonials = [
    {
      img: "/images/ts1.jpg",
      name: "Naghma Mulla",
      username: "@nugs712",
      review:
        "We can vouch for this platform. Over the past few months, we have started fundraisers for our NGOs here. They are very easy to work with!",
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
        "Amazing experience! The process of setting up fundraisers and withdrawing funds is smooth and transparent.",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What People Are Saying</h2>
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
    </div>
  );
};

export default TestimonialSlider;
