import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./home/Home"
import { Profile } from "./profile/Profile"

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
    </Router>
  );
}


export default App;
