import "../blocks/profile.css";
import React, { useState } from "react";
import userAvatar from "../images/IMG_4953.JPG";

const Profile = () => {
  //   const [userInfo, setUserInfo] = useState({ });s

  //   const generalInfo = `
  //     Name: ${userInfo.name}
  //     Profession: ${userInfo.profession}
  //     Technologies: ${userInfo.technologies}
  //     Bio: ${userInfo.bio}
  //     Experience: ${userInfo.experience}
  //     How I can help: ${userInfo.help}
  //       `.trim();

  //   const handleChange = (e) => {
  //     const lines = e.target.value.split("\n").map((line) => line.trim());

  //     const newUserInfo = {
  //       name: lines[0]?.replace("Name: ", "") || userInfo.name,
  //       profession: lines[1]?.replace("Profession: ", "") || userInfo.profession,
  //       technologies:
  //         lines[2]?.replace("Technologies: ", "") || userInfo.technologies,
  //       bio: lines[3]?.replace("Bio: ", "") || userInfo.bio,
  //       experience: lines[4]?.replace("Experience: ", "") || userInfo.experience,
  //       help: lines[5]?.replace("How I can help: ", "") || userInfo.help,
  //     };
  //     setUserInfo(newUserInfo);
  //   };

  return (
    <div className="profile__section">
      <img src={userAvatar} className="profile__avatar" alt="avatar" />
      <div className="profile__description">
        <h2 className="profile__title">About the Author</h2>
        <p className="profile__userInfo">
          Name:
          <span className="profile__userInfo-span">Samuel Luo</span>
          <br />
          Profession:
          <span className="profile__userInfo-span">
            Junior Software Engineer.
          </span>
          <br />
          Technologies:
          <span className="profile__userInfo-span">
            JavaScript, React, Node.js, Express, MongoDB.
          </span>
          <br />
          Bio:
          <span className="profile__userInfo-span">
            Hello! I’m Sam, a passionate junior software engineer with a keen
            interest in web development.
          </span>
          <br />
          Experience:
          <span className="profile__userInfo-span">
            During my time at TripleTen, I had the opportunity to deepen my
            knowledge of full-stack development.
          </span>
          <br />
          Help:
          <span className="profile__userInfo-span">
            I'm eagering to help potential customers turn their ideas into reality.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
