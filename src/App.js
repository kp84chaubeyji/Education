import './assets/css/vendor/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/vendor/fontawesome-all.min.css';
import './assets/css/plugins/swiper-bundle.min.css';
import './assets/css/vendor/edumall-icon.css';
import './App.css';
import Navigation from './components/Header/Navigation';
import Home from './components/Homepage/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navigation />
    <Home />
    <Footer />
    </>
  );
}

export default App;
