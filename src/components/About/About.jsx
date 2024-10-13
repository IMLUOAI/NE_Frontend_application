import "../About/about.css";
import userAvatar from "../../images/IMG_4953.JPG";

const About = () => {

  return (
    <div className="about__section">
      <img src={userAvatar} className="about__avatar" alt="avatar" />
      <div className="about__description">
        <h2 className="about__title">About the Author</h2>
        <ul className="about__userInfo">
          <li className="about__userInfo-list">Name: <span className="about__userInfo-list_span">Samuel Luo</span></li>
          <li className="about__userInfo-list"> Profession: <span className="about__userInfo-list_span">
            Junior Software Engineer.
          </span> </li>
          <li className="about__userInfo-list">Technologies:  <span className="about__userInfo-list_span">
            JavaScript, React, Node.js, Express, MongoDB.
          </span></li>
          <li className="about__userInfo-list">Bio: <span className="about__userInfo-list_span">
            Hello! I’m Sam, a passionate junior software engineer with a keen
            interest in web development.
          </span></li>
          <li className="about__userInfo-list" >Experience:<span className="about__userInfo-list_span">
            During my time at TripleTen, I had the opportunity to deepen my
            knowledge of full-stack development.
          </span></li>
          <li className="about__userInfo-list">Help: <span className="about__userInfo-list_span">
            I'm eagering to help potential customers turn their ideas into reality.
          </span></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
