import React from "react";

const NextSlide = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px" }}>
            <div style={{ flex: 1 }}>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower innovators, entrepreneurs, and changemakers by providing a secure, transparent, and accessible crowdfunding platform. We strive to bridge the gap between passionate creators and a community of supporters, helping ideas grow into reality.
                </p>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <img
                    src="/images/slide_img.avif"
                    alt="Helping Hands"
                    style={{ width: "50%", border: "5px solid teal", borderRadius: "10px" }}
                />
            </div>
        </div>
    );
};

export default NextSlide;
