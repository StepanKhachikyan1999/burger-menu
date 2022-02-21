import React ,{useState}from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import SignUp from "./components/SignUp"



function App() {

  const [isMobile,setIsMobile] = useState(false)

  return (
    <div style={{height:"100vh"}}  onClick={() => setIsMobile(false)}>

    
      <Router>
      <Navbar isMobile={isMobile} setIsMobile={setIsMobile}/>

      <Switch>

        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About />
        </Route>

        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>

        <Route path="/skills" component={Skills} exact>
          <Skills />
        </Route>

        <Route path="/signup" component={SignUp} exact>
          <SignUp />
        </Route>
      </Switch>
      </Router>
      
      </div>
        );
}

export default App;
