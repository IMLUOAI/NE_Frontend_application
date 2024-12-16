import "../App/app.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import api from "../../utils/api";
import auth from "../../utils/auth";
import { getSearchNews } from "../../utils/NewsApi";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import SuccessSignupModal from "../SuccessSignupModal/SuccessSignupModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "../../utils/token";
import MobileMenuModal from "../MobileMenuModal//MobileMenuModal";
import SavedArticlesSection from "../SavedArticlesSection/SavedArticlesSection";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";
  console.log("Is saved article page:", isSavedArticlesPage);

  const navigate = useNavigate();
  const handleOpenSigninModal = () => {
    setActiveModal("signin");
    navigate("/saved-articles");
  };
  const handleOpenSignupModal = () => setActiveModal("signup");
  const handleOpenSuccessSignupModal = () => setActiveModal("successSignup");
  const handleCloseModal = () => {
    setActiveModal("");
  };

  // modal handlers
  const handleSubmit = (request) => {
    setIsLoading(true);
    const promise = request();
    if (promise && typeof promise.then === "function") {
      return promise
        .then(() => {
          handleCloseModal();
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    } else {
      console.error("The provided request is not a promise");
      setIsLoading(false);
      return Promise.reject("Invalid request");
    }
  };

  const handleSignup = ({ email, password, username }) => {
    if (!password || !email) return Promise.reject("Invalid email or password");
    const makeRequest = () => {
      return auth.register(email, password, username).then(() => {
        setActiveModal("successSignup");
      });
    };
    return handleSubmit(makeRequest);
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
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
          handleCloseModal();
        });
    };
    return handleSubmit(makeRequest);
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
    setActiveModal("");
  };

  const handleToggleSaveArticle = (article) => {
    console.log("Article to save:", article);
    const token = getToken();
    const { source } = article;

    if (!currentUser) {
      console.log("CurrentUser is not available");
      setError("You need to be logged in to save articles");
      setActiveModal("signin");
      return;
    }
    const isSaved = savedArticles?.some(
      (saved) => saved.source?.id === source?.id
    );
    const request = !isSaved
      ? api.savedArticles(article, token)
      : api.unsaveArticle(article, token);
    return request
      .then((updatedArticle) => {
        console.log("Updated articles returned by api:", updatedArticle);
        setNewsData((prev) => {
          return isSaved
            ? prev.filter((saved) => saved.source?._id !== source?.id)
            : [...prev, updatedArticle];
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDeletedArticle = (articleId) => {
    console.log("Article to delete:", articleId);

    if (!articleId) {
      console.error("No article found for deletion.");
      return;
    }
    api
      .deleteArticle(articleId)
      .then((res) => {
        if (res.ok) {
          setSavedArticles((prev) =>
            prev.filter(
              (saved) =>
                saved.source?.id !== articleId &&
                saved.source?.name !== articleId
            )
          );
          console.log("Saved articles after filtering:", saved.source);
        }

        setNewsData((prev) =>
          prev.map((news) =>
            news.source?.id === articleId && news.source?.name === articleId
              ? { ...news, isSaved: false }
              : news
          )
        );
        console.log("New source id:", news.source?.id);
        console.log("Article deleted successfully");
      })
      .catch((err) => console.error(err));
  };
  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const fetchedNews = await getSearchNews(query);
      setHasSearched(true);
      setNewsData(fetchedNews.articles || []);
      setError("");
    } catch (err) {
      console.error("Fetching news Error:", err);
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setNewsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenMobileMenuModal = () => setIsMenuOpen(true);
  const handleCloseMobileMenuModal = () => setIsMenuOpen(false);

  // useEffects to close modals in multiple ways

  useEffect(() => {
    api
      .getNews()
      .then((data) => {
        setNewsData(data || []);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setNewsData([]);
      });
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
        console.log("Fetched user data:", user);
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    api
      .getSavedArticles()
      .then((data) => {
        console.log("Saved articles fetched:", data);
        setSavedArticles(data || []);
      })
      .catch((err) => {
        console.error("Fetching saved articles:", error);
        setSavedArticles([]);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page__section">
        <Header
          userName={currentUser?.name}
          isAuthorized={isLoggedIn}
          onSigninModal={handleOpenSigninModal}
          isMenuOpen={isMenuOpen}
          isSavedArticles={isSavedArticlesPage}
          handleOpenMobileMenuModal={handleOpenMobileMenuModal}
          onLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSearch={handleSearch}
                newsData={newsData}
                error={error}
                isLoading={isLoading}
                hasSearched={hasSearched}
                onSaveOrUnsave={handleToggleSaveArticle}
              />
            }
          />
          <Route
            path="/saved-articles"
            element={
              <SavedArticlesSection
                articles={savedArticles}
                handledDeletedArticle={handleDeletedArticle}
              />
            }
          />
        </Routes>
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
            handleOpenSigninModal={handleOpenSigninModal}
          />
        )}
        {isMenuOpen && (
          <MobileMenuModal
            isOpen={isMenuOpen}
            onClose={handleCloseMobileMenuModal}
            handleOpenSigninModal={handleOpenSigninModal}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
