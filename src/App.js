import './App.css';
import Header from './components/header/header';
import Home from './components/Home';
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import Contact from './components/contactus/contactus';
import Blog from './components/blog/blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
      <Contact />
      <Blog />
    </div>
  );
}

export default App;
