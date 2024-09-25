import "../blocks/app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";
import auth from "../utils/auth";
import ProtectedRoute from "../utils/ProtectedRoute";
import ConfirmationModal from "./ConfirmationModal";
import CurrentUserContext from "../contexts/CurrentUserContext";
// import NewsCard from "./NewsCard";
import { setToken, getToken, removeToken } from "../utils/token";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [newsCards, setNewsCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleOpenSigninModal = () => setActiveModal("signin");
  const handleOpenSignupModal = () => setActiveModal("signup");
  const handleCloseModal = () => {
    setActiveModal("");
  }


  // modal handlers
  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
    .then(() => {
        handleCloseModal();
    })
    .catch(console.error)
    .finally(() => setIsLoading(false));
  }

  const handleSignup = ({email, password, username}) => {
    if (!password || !email) return;
    const makeRequest = () => {
     return AuthenticatorAssertionResponse.signup(email, password, username)
     .then(() => {
        handleCloseModal();
        setActiveModal("signin");
     })
    };
    handleSubmit(makeRequest);
  }

  const handleSignin = ({email, password}) => {
    if (!password || !email) { 
        return;
  }
  const makeRequest = () => {
    return auth.authorize(email, password).then((data) => {
        if (data.token) {
            setToken(data.token);
            return api.getUserInfo(data.token);
        }
    })
   .then(() => {
    handleCloseModal();
    setCurrentUser(user);
    setIsLoggedIn(true);
    navigate("/profile")
   })
  }
  handleSubmit(makeRequest);
  }

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
    setActiveModal("signin");
  }

// useEffects to close modals in multiple ways
useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

// useEffect To get Token and userInfo
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api
      .getUserInfo(jwt)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page__section">
        <Header 
        userName={currentUser?.name}
        isAuthorized={isLoggedIn}
        handleProfileClick={() => navigate("/profile")}
        onSigninModal={handleOpenSigninModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile userAvatar={currentUser?.avatar} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        {activeModal === "signup" && <SignupModal />}
        {activeModal === "signin" && <SigninModal 
        handleCloseModal={handleCloseModal}
        isOpen={activeModal === "signin"}
        handleSignin={handleSignin}
        handleOpenSigninModal={handleOpenSigninModal}
        isLoading={isLoading}  
        />}
        {showConfirmationModal && <ConfirmationModal />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
