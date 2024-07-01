import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Dishes from './pages/Dishes.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Review from './pages/Review.jsx';
import Order from './pages/Order.jsx';
import Login from './pages/Login.jsx';
import Contact from './components/Contact.jsx';
import Favorites from './pages/Favorites.jsx';
import Signup from './pages/Signup.jsx';
import NotFound from './pages/NotFound.jsx';
import {  useState } from 'react';
import MyOrders from './pages/MyOrders.jsx';
import LearnMore from './pages/LearnMore.jsx';

function App() {
  // const { login } = useContext(LoginContext);
  const [login, setLogin] = useState(true);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={login ? <Home /> : <Login />} />
            <Route path="dishes" element={<Dishes />} />
            <Route path="about" element={<About />} />
            <Route path="review" element={<Review />} />
            <Route path="order" element={<Order />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="signup" element={<Signup />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="learn-more" element={<LearnMore />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
