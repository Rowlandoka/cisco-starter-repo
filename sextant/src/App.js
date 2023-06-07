//import logo from './logo.svg';
import './App.css';
import BannerHeader from './Components/BannerHeader';
import SideMenu from './Components/SideMenu';
import ExhibitHeader from './Components/ExhibitHeader';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className='App'>
      <BannerHeader />
      <ExhibitHeader />
      <AppFooter />
    </div>
  );
}

export default App;
