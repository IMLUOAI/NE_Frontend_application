import "../blocks/app.css";
import React, {useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";
import Footer from "./Footer";
import ProtectedRoute from "../utils/ProtectedRoute";
import ConfirmationModal from "./ConfirmationModal";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App () {
    const [activeModal, setActiveModal] = useState("")
    const [currentUser, setCurrentUser] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

return (
    <CurrentUserContext.Provider value={{ currentUser }} > 
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
                <Route
                path="/profile"
                element={
                <ProtectedRoute>
        <Profile 
        userAvatar={currentUser?.avatar}
        />
        </ProtectedRoute>
        }
        />
        <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
        <Footer />
        {activeModal === "sign up" && (
            <SignupModal />
        )}
         {activeModal === "sign in" && (
            <SigninModal />
        )}
         {showConfirmationModal && (
            <ConfirmationModal />
        )}
    </div>
    </CurrentUserContext.Provider>
)
        }


export default App;