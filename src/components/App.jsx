


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
        </Routes>
    </div>
)