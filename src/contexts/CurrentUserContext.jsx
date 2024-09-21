import React, { createContext, useState } from "react";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const isLoggedIn = !!currentUser;

    return (
        <CurrentUserContext.provider value={{ isLoggedIn, currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.provider>
    )
}

export default CurrentUserContext;