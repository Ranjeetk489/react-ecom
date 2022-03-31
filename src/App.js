
import "./App.css"; 
import SignUp from "./pages/Authentication/SignUp/SignUp"
import Header from './components/Header/Header'
import SignIn from './pages/Authentication/SignIn/SignIn'
import LandingPage from './components/LandingPage/LandingPage'
import ProductPage from './components/ProductsPage/ProductsPage'
import CartCheckout from './pages/CartCheckout/CartCheckout'
import Wishlist from './pages/Wishlist/Wishlist'

function App() {
  return (
  
    <header>
      <Header/>
     {/* <LandingPage/>
     <SignIn /> 
     <SignUp /> */}
     <Wishlist/>
    </header>
  );
}

export default App;
