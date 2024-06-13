import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import BannerBody from './components/BannerBody';
import MiddleSection from './components/MiddleSection';
import BodyFooter from './components/BodyFooter';

function App() {
  return (
    <div className="App">
		<NavBar />
		<BannerBody />
		<MiddleSection />
		<BodyFooter/>
    </div>
  );
}

export default App;
