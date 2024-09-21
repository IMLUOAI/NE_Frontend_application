import currentUserContext from "../contexts/CurrentUserContext"
import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";

function app () {


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