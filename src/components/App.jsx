import "../blocks/app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";
import auth from "../utils/auth";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import SuccessSignupModal from "./SuccessSignupModal";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "../utils/token";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);


  const navigate = useNavigate();
  const handleOpenSigninModal = () => setActiveModal("signin");
  const handleOpenSignupModal = () => setActiveModal("signup");
  const handleOpenSuccessSignupModal = () => setActiveModal("successSignup");
  const handleCloseModal = () => {
    setActiveModal("");
  };

  // modal handlers
  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleSignup = ({ email, password, username }) => {
    if (!password || !email) return;
    const makeRequest = () => {
      return auth.signup(email, password, username).then(() => {
        handleCloseModal();
        setActiveModal("signin");
        setActiveModal("successSignup");
      });
    };
    handleSubmit(makeRequest);
  };

  const handleSignin = ({ email, password }) => {
    if (!password || !email) {
      return;
    }
    const makeRequest = () => {
      return auth
        .authorize(email, password)
        .then((data) => {
          if (data.token) {
            setToken(data.token);
            return api.getUserInfo(data.token);
          }
        })
        .then(() => {
          handleCloseModal();
          setCurrentUser(user);
          setIsLoggedIn(true);
        });
    };
    handleSubmit(makeRequest);
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
    setActiveModal("signin");
  };
  
  const handleSearch = () => {
    setHasSearched(true);
    setIsLoading(true);
    setNewsData([]);
 
    setTimeout(async () => {
      const fetchSearchResults = await getNews(query);

      setNewsData(fetchSearchResults);
      setIsLoading(false);

    }, 2000);
  
   };


 
  // useEffects to close modals in multiple ways
  
  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await getNews();
      setNewsData(response.articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (currentUser) {
    fetchNews();
    }
  }, [currentUser]);



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
        <div className="page__background-wrapper">
        <Header
            userName={currentUser?.name}
            isAuthorized={isLoggedIn}
            onSigninModal={handleOpenSigninModal}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={
        <Main
        handleSearch={handleSearch}
        newsData={newsData}
        error={error}
        isLoading={isLoading}
        hasSearched={hasSearched}
           />  } />
              </Routes> 
        </div>
        <Footer />
        {activeModal === "signup" && (
          <SignupModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "signup"}
            handleSignup={handleSignup}
            isLoading={isLoading}
            handleOpenSigninModal={handleOpenSigninModal}
            handleOpenSuccessSignupModal={handleOpenSuccessSignupModal}
          />
        )}
        {activeModal === "signin" && (
          <SigninModal
            isOpen={activeModal === "signin"}
            handleCloseModal={handleCloseModal}
            handleSignin={handleSignin}
            handleOpenSignupModal={handleOpenSignupModal}
            isLoading={isLoading}
          />
        )}
        {activeModal === "successSignup" && (
          <SuccessSignupModal
            isOpen={activeModal === "successSignup"}
            handleCloseModal={handleCloseModal}
            handleSignin={handleSignin}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
