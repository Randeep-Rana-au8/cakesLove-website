import "./App.css";
import BottomSection from "./components/BottomSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MidSection />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
