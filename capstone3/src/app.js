// [SECTION] Dependencies
import UserProvider from './userContext';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// [SECTION] Styles
import './styles/Reset.css';



// [SECTION] Components
import AppNavbar from './components/AppNavbar'


// [SECTION] Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Products from './pages/Products';


function App(){
    const fontStyles = (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </>
    );

	return (
		<UserProvider>
			<Router>
                <div>
                    {fontStyles}
                    <AppNavbar />
                    <Routes>
                        <Route path="/sign_up" element={<SignUp />} />
                        <Route path="/sign_in" element={<SignIn />} />
                        <Route path="/products" element={<Products />} />
                    	<Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
		</UserProvider>
	)
}

export default App;