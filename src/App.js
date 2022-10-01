import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes /*Switch*/} from 'react-router-dom';
//react-router-dom v6: Switch changed to Routes

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes /*Switch*/>
          <Route path="/" exact element={<Home/>}/> {/*component changed to element*/}
          <Route path="/projects" exact element={<Projects/>}/>
          <Route path="/about" exact element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
