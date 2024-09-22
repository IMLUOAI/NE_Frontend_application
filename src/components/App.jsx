import "../blocks/app.css";
import currentUserContext from "../contexts/CurrentUserContext";
import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";

function App () {


return (
    <div className="page__section">
        <Header />
       
        <Routes>
            <Route 
            path = "/" 
            element={
            <ProtectedRoute>
                <Main 

                />
            </ProtectedRoute>
            }
                />
        <Profile />
        <Footer />
        </Routes>
    </div>
)
        }


export default App;