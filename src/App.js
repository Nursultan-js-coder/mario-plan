import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react"
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetail from "./components/projects/ProjectDetail";
import Layout from "./Layout";
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/projects/CreateProject";
function App() {

  return (
    <Router>
      <div className="App">
     
      <Navbar/>
      <Layout>
      <Switch>
      <Route exact path="/" component={Dashboard} ></Route>
      <Route  path="/project/:id"component={ProjectDetail} ></Route>
      <Route  path="/signin"component={SignIn} ></Route>
      <Route  path="/signup"component={SignUp} ></Route>
      <Route  path="/create"component={CreateProject} ></Route>
      </Switch>
      </Layout>
    </div>
    </Router>
  );
}

export default App;
