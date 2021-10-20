import "./App.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Work from "./pages/Work";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/works/:filter" component={Works} />
          <Route path="/work-detail/:id" component={Work} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
