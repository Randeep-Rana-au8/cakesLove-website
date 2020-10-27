import React from "react";

const Hero = () => {
  return (
    <section className="section sectionHero">
      <div className="overlay">
        <h1
          style={{
            fontSize: "10rem",
            margin: "0px",
          }}
        >
          Cakes
        </h1>
        <h2 style={{ fontSize: "2.3rem" }}>
          I don't need any occasion for cakes
        </h2>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "100px" }}>
          because cake is lub
          <span style={{ color: "red", fontSize: "23px" }}>&hearts;</span>
        </h3>
        <button className="orderButton">Order</button>
      </div>
    </section>
  );
};

export default Hero;
