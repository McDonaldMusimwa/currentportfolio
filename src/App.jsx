import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Works from './Components/Works';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact'
import Footer from './Components/UI/Footer/Footer';
//import SignUpForm from './Components/Logins/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/UI/NavBar/NavBar';


function App() {

  return (
    <Router>



      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='works' element={<Works />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='contacts' element={<Contact />}></Route>
      </Routes>

<Footer/>
    </Router >
  )
}

export default App
