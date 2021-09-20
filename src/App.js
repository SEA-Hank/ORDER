import "./scss/cssReset.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Category from "./components/category";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/">
            <Header />
          </Route>
          <Switch>
            <Route path="/">
              <Category />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
