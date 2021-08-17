import "./scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Headers from "./components/layouts/Headers";

function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Route path="/" component={Home} exact />
      </div>
    </Router>
  );
}

export default App;
