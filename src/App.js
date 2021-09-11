import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header/Heder";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Header/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
