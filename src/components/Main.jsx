import { Profile } from "./Profile";


 const Main = () => {
return (
   <main className="main">
    <section className="main__section">
     <h1 className="main__title">What's going on in the world?</h1>
 . . <h3 className="main__description">Find the latest news on any topic and save them in your personal accout</h3>
    <form className="main__search-bar" action="/search" method="get">
     <input type="search" name="q" placeholder="Enter topic">
        <button type="submit">Search</button>
     </input>
    </form>
    </section>
    <Profile />
   </main>
)
}

export default Main;