import "../blocks/profile.css";
import React, { useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    avatar: "",
    name: "Sam",
    profession: "Junior Software Engineer",
    technologies: "JavaScript, React, Node.js, Express, MongoDB",
    bio: "Hello! I’m Sam, a passionate junior software engineer with a keen interest in web development.",
    experience:
      "During my time at TripleTen, I had the opportunity to deepen my knowledge of full-stack development.",
    help: "I'm eager to help potential customers turn their ideas into reality.",
  });

  const combinedInfo = `
  Name: ${userInfo.name}
  Profession: ${userInfo.profession}
  Technologies: ${userInfo.technologies}
  Bio: ${userInfo.bio}
  Experience: ${userInfo.experience}
  How I can help: ${userInfo.help}
    `.trim();

  const handleChange = (e) => {
    const input = e.target.value;
    const lines = input.split("\n").map((line) => line.trim());

    const newUserInfo = {
      avatar: userInfo.avatar,
      name: lines[0]?.replace("Name: ", "").trim() || userInfo.name,
      profession:
        lines[1]?.replace("Profession: ", "").trim() || userInfo.profession,
      technologies:
        lines[2]?.replace("Technologies: ", "").trim() || userInfo.technologies,
      bio: lines[3]?.replace("Bio: ", "").trim() || userInfo.bio,
      experience:
        lines[4]?.replace("Experience: ", "").trim() || userInfo.experience,
      help: lines[5]?.replace("How I can help: ", "").trim() || userInfo.help,
    };
    setUserInfo(newUserInfo);
  };

  return (
    <div className="profile__section">
      <img src={userInfo.avatar} className="profile__avatar" alt="avatar" />
      <div className="profile__description">
        <h2 className="profile__title">About the Author</h2>
        <textarea
          value={combinedInfo}
          onChange={handleChange}
          rows={20}
          className="profile__textarea"
        />
      </div>
    </div>
  );
};

export default Profile;
