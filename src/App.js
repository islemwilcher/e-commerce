
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Regester from "./pages/Regester";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:title' component={Products} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/regester' component={Regester} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
