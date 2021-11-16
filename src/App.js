
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from './pages/Product'
import Regester from "./pages/Regester";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:category' component={Products} />
          <Route path='/product/:id' component={Product} />
          <Route exact path='/regester' component={Regester} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
