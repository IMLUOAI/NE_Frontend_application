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
  const noResults = hasSearched && !isLoading && filteredNewsData.length === 0;
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__description">
          Find the latest news on any topic and save them in your personal
          accout
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Preloader isLoading={isLoading} noResults={noResults} />

      {hasSearched && !isLoading && filteredNewsData.length > 0 && (
        <NewsSection
          newscards={filteredNewsData}
          handleSaveOrUnsave={onSaveOrUnsave}
          isLoading={isLoading}
          error={error}
        />
      )}
      <About />
    </main>
  );
};

export default Main;
