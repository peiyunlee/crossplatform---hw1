import "./App.css";
import Header from "./components/Header";
import Primary from "./components/Primary";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Primary />
        <SelectedWorks />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
