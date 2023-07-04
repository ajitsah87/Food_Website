import React from "react";
import "./about.css";
function About() {
  return (
    <>
      <div className="a-wrapper "id="about">
        <img src="img/A-image.jpg" alt="" />
        <div className="a-info">
          {" "}
          <h1>About Foodado</h1>
          <p>
            Welcome to Foodado, a haven for food enthusiasts and passionate
            photographers! We are dedicated to capturing the beauty and artistry
            of culinary delights through captivating visuals. <br /> 
            With a keen eye for detail and a love for all things delicious, we
            bring the art of food photography to life. Join us on this
            gastronomic journey as we showcase delectable dishes from around the
            world, enticing your taste buds and inspiring your culinary
            adventures.
          </p>
          <h3 className="a-details">Education:</h3>
          <p>
            We have honed our skills through extensive training and education in
            the art of food photography, mastering the techniques to create
            stunning images that tantalize the senses. Our team has attended
            specialized workshops and courses, learning from industry
            professionals and refining our knowledge of lighting, composition,
            and styling, ensuring every photograph tells a mouthwatering story.
          </p>
          <h3 className="a-details">Awards & Nominations:</h3>
          <p>
            Our dedication to excellence has been recognized by esteemed
            organizations in the food and photography industry. We are proud
            recipients of multiple awards and nominations for our outstanding
            work in capturing the essence of culinary experiences. We strive to
            continue pushing boundaries and setting new standards in the
            industry, seeking recognition for our creativity, innovation, and
            passion for capturing the art of food.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
