//import logo from './logo.svg';
import './App.css';
//import './TicTacToe.css';
//import './src/FontAwesome.css';
import Topbar from './Components/Topbar.js'
import About from './Components/About.js'
import Skills from './Components/Skills.js'
import Footer from './Components/Footer.js'
function App() {
  return (
    <div className="App">
        <Topbar/>
        <About/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;
