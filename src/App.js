//import logo from './logo.svg';
import './App.css';
// import './Style.css'
//import './TicTacToe.css';
//import './src/FontAwesome.css';

import Topbar from './Components/Topbar.js'
import About from './Components/About.js'
import Skills from './Components/Skills.js'
import Footer from './Components/Footer.js'
import Projects from './Components/Projects.js'
 
function App() {

  return (
    <div className="App">
        <Topbar/>
        {/* <About/> */}
        {/* <Skills/> */}
        {/* <Footer/> */}
        <Projects/>
    </div>
  );
}

export default App;
