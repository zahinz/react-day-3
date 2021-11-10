import Login from "./containers/login";
import Dashboard from "./containers/dashboard";
import Details from "./containers/dashboard/details.js";
import CreateProduct from "./containers/createProduct";

import Header from "./components/header";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>

      <Header />
      <Switch>

        <Route path="/create" exact component={CreateProduct}/>

        <Route path="/" exact component={Login}/>

        <Route path="/dashboard/:id" exact component={Details}/>
        <Route path="/dashboard" exact component={Dashboard}/>


      </Switch>

    </Router>
  );
}

export default App;
