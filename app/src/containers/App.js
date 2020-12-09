import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Routes from './router/Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
