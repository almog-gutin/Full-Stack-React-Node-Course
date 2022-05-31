import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/Auth.context';
import CartContextProvider from './contexts/Cart.context';

import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import HomePage from './pages/home-page/HomePage.component';
import LoginPage from './pages/login-page/LoginPage.component';
import SignupPage from './pages/signup-page/SignupPage.component';
import PageNotFound from './pages/page-not-found/PageNotFound.component';
import BookPage from './pages/book-page/BookPage.component';
import CartPage from './pages/cart-page/CartPage.component';

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <CartContextProvider>
                    <Header />

                    <Routes>
                        <Route path="" element={<HomePage />} />

                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />

                        <Route path="/books/:bookID" element={<BookPage />} />
                        <Route path="/cart" element={<CartPage />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

                    <Footer />
                </CartContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default App;
