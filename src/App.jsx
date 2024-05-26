import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "@fontsource/cascadia-code"
import ShowCards from "./Components/ShowCards";
import PenerationReport from "./Components/PenerationReport";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  
  
 
  return (
    <>
    <Navbar></Navbar>        
    <Hero></Hero>
    <ShowCards></ShowCards>
    <PenerationReport></PenerationReport>
    <Testimonials></Testimonials>
    <Contact></Contact>
    
    
    </>
  )
}

export default App;
