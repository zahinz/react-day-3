import Login from "./containers/login";
import Dashboard from "./containers/dashboard";
import Details from "./containers/dashboard/details.js";
import CreateProduct from "./containers/createProduct";

import Header from "./components/header";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />
      <Switch>

        <Route path="/create" component={CreateProduct}/>

        <Route path="/" component={Login}/>

        <Route path="/dashboard/:id" component={Details}/>
        <Route path="/dashboard" component={Dashboard}/>


      </Switch>

    </Router>
  );
}

export default App;
