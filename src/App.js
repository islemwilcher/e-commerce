
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Category from "./pages/Category"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
