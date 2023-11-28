import Home from "./component/Home";
import NavBar from "./component/NavBar";
import SocialLinks from "./component/SocialLinks";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

function App() {
  return(
    <div>
     <NavBar></NavBar>
     <Home></Home>
     <SocialLinks></SocialLinks>
     <About></About>
     <Portfolio></Portfolio>
     <Experience></Experience>
     <Contact></Contact>
    </div>
  );
}

export default App;
