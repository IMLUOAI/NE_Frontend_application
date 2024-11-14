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
  const filteredNewsData = Array.isArray(newsData)
    ? newsData.filter((article) => article !== "undefined")
    : [];
  console.log("filtered newsData", filteredNewsData);
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
      {isLoading && <Preloader isLoading={isLoading} />}

      {hasSearched && !isLoading && (
        <div className="news__section">
          {filteredNewsData.length > 0 ? (
            <NewsSection
              newsCards={filteredNewsData}
              handleSaveOrUnsave={onSaveOrUnsave}
              isLoading={isLoading}
              error={error}
            />
          ) : (
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
