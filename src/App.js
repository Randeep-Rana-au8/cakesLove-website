import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Redirect, Route, Switch } from "react-router-dom";
import Section from "./components/Section";
import AboutUs from "./pages/AboutUs";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Section} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contactus} />
      </Switch>
      <Footer />
      {/* <Redirect path="/" /> */}
    </div>
  );
}

export default App;
