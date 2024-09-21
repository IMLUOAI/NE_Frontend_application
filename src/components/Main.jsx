import  Profile  from "./Profile";
import SearchBar from "./SearchBar"

 const Main = () => {
return (
   <main className="main">
    <section className="main__section">
     <h1 className="main__title">What's going on in the world?</h1>
 . . <h3 className="main__description">Find the latest news on any topic and save them in your personal accout</h3>
    <SearchBar />
    </section>
    <Profile />
   </main>
)
}

export default Main;