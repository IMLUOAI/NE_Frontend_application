import "../blocks/profile.css";

const Profile = ({userAvatar}) => {


    return (
        <div className="profile__section">
        <div >
            <img src={userAvatar} className="profile__avatar" alt="avatar"/>
        </div >
        <div className="profile__content">
        <h1 className="profile__title">About the Author</h1>
        <h3 className="profile__description">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</h3>
        <h3 className="profile__description">You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers</h3>
        </div>
        </div>
    )
}

export default Profile;