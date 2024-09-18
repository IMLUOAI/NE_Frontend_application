


return (
    <div className="page__section">
        <Header />
        <Main />
        <Footer />
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
        </Routes>
    </div>
)