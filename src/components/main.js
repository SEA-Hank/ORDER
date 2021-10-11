import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Header from "./header";
import ShoppingCar from "./shoppingCar";
import Thanks from "./thanks";
const Main = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Switch>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/checkout">
            <ShoppingCar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Main;
