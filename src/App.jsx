import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Dishes from './pages/Dishes.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Review from './pages/Review.jsx';
import Order from './pages/Order.jsx';
import Login from './pages/Login.jsx';
import Shopping from './pages/Shopping.jsx';
import Contact from './components/Contact.jsx';
import Favorites from './pages/Favorites.jsx';
import Signup from './pages/Signup.jsx';
import NotFound from './pages/NotFound.jsx';
import { useContext, useState } from 'react';
import { LoginContext } from './Context.jsx';

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
            <Route path="shopping" element={<Shopping />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
