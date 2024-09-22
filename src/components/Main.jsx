import "../blocks/main.css";
import  Profile  from "./Profile";
import SearchBar from "./SearchBar"
import Header from "./Header";

 const Main = () => {
return (
   <main className="main__section">
   <Header />
    <div className="main__content">
     <h1 className="main__title">What's going on in the world?</h1>
     <h3 className="main__description">Find the latest news on any topic and save them in your personal accout</h3>
    </div>
    <SearchBar />
    <Profile />
   </main>
)
}

export default Main;