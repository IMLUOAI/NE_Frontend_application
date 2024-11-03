import "../Main/main.css";
import About from "../About/About";
import SearchBar from "../SearchBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";
import Preloader from "../Preloader/Preloader";

const Main = ({
  newsData,
  error,
  handleSearch,
  isLoading,
  hasSearched,
  onSaveOrUnsave,
}) => {
  console.log("newsData", newsData);
  return (
    <main className="main__section">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <h3 className="main__description">
          Find the latest news on any topic and save them in your personal
          accout
        </h3>
        <SearchBar onSearch={handleSearch} />
      </div>
      {hasSearched && (
        <div className="news__section">
          <Preloader isLoading={isLoading} />
          {!isLoading && Array.isArray(newsData) && newsData.length > 0 && (
            <NewsSection
              newsCards={newsData}
              handleSaveOrUnsave={onSaveOrUnsave}
              isLoading={isLoading}
              error={error}
            />
          )}
          {!isLoading && Array.isArray(newsData) && newsData.length === 0 && (
            <h3 className="preloader__title">Nothing found</h3>
          )}
        </div>
      )}
      <div className="about__section">
        <About />
      </div>
    </main>
  );
};

export default Main;