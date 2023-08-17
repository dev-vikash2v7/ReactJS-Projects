import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import ContactBar from "./Components/ContactBar/contact";

import Home from "./Sections/Home/home";
import About from "./Sections/About/about";
import Skills from "./Sections/Skills/skills";
import Projects from "./Sections/Projects/projects";


function App() {
  return (
    <div className="main">
      <Navbar/>
      
<div className='app_section_container'>
      <Home/>
     <About/>
     <Skills/>
      <Projects/> 
      </div>


  <ContactBar/>  
       <Footer/> 
    </div>
  );
}

export default App;
