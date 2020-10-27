import "./App.css";
import BottomSection from "./components/BottomSection";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <MidSection />
      <BottomSection />
    </div>
  );
}

export default App;
