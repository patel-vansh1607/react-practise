import logo from './logo.svg';
import './App.css';
import FooterComp from './components/footerComp';
import Button from './components/button';
import LoginComp from './components/LoginComp';

function App() {
  return (
    <div className="App">
      <Button />
      <LoginComp />
      <FooterComp />
    </div>
  );
}

export default App;
