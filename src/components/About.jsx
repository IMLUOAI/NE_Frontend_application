import "../blocks/about.css";
import userAvatar from "../images/IMG_4953.JPG";

const About = () => {

  return (
    <div className="about__section">
      <img src={userAvatar} className="about__avatar" alt="avatar" />
      <div className="about__description">
        <h2 className="about__title">About the Author</h2>
        <p className="about__userInfo">
          Name:
          <span className="about__userInfo-span">Samuel Luo</span>
          <br />
          Profession:
          <span className="about__userInfo-span">
            Junior Software Engineer.
          </span>
          <br />
          Technologies:
          <span className="about__userInfo-span">
            JavaScript, React, Node.js, Express, MongoDB.
          </span>
          <br />
          Bio:
          <span className="about__userInfo-span">
            Hello! I’m Sam, a passionate junior software engineer with a keen
            interest in web development.
          </span>
          <br />
          Experience:
          <span className="about__userInfo-span">
            During my time at TripleTen, I had the opportunity to deepen my
            knowledge of full-stack development.
          </span>
          <br />
          Help:
          <span className="about__userInfo-span">
            I'm eagering to help potential customers turn their ideas into reality.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
