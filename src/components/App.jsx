import "../blocks/app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import NewsSection from "./NewsSection";
import About from "./About";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";
import auth from "../utils/auth";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import ProtectedRoute from "../utils/ProtectedRoute";
import SuccessSignupModal from "./SuccessSignupModal";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "../utils/token";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const [results, setResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false);

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
    setLoading(true);
    setResults([]);
 
    setTimeout(async () => {
      const fetchSearchResults = await getNews(query);

      setResults(fetchSearchResults);
      setLoading(false);

    }, 2000);
  
   };

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 3);
    setIsExpanded(true);
  }
  
 const  handleShowLess = () => {
    setVisibleItems(3);
    setIsExpanded(false);
  }
  
  const toggleShowMore = () => {
   isExpanded ? handleShowLess() : handleShowMore();
  }

  // useEffects to close modals in multiple ways

  useEffect(() => {
    const getData = async () => {
      try {
        const articles = await fetchNews();
        setData(articles);
        localStorage.setItem('newsData', JSON.stringify(articles));
      } catch (error) {
        setError(error.message);
      } finally{
        setIsLoading(false);
      } 
    }
    const storedData = localStorage.getItem('newsData');
    if (storedData) {
      setData(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      getData();
    }
}, []);




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
      {/* <div className="page__section">
        <div className="page__background-wrapper"> */}
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
        loading={loading}
        results={results}
        hasSearched={hasSearched}
           />  } />
            <Route path="/" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <NewsSection 
                    data={data}
                    visibleItems={visibleItems}
                    toggleShowMore={toggleShowMore}
                    isExpanded={isExpanded}
        
                    />
                </ProtectedRoute>
            }
            />
             <Route path="/" element={
                    <About  />
            }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes> 

        {/* </div> */}
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
      {/* </div> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
