import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignIn from './SignIn';
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import Add from './Add';
import Update from './Update';

function App() {
  return (
    <Router>
    <div className="App">

      <div className="header">
      <h1>Student Management System</h1>
      </div>

      <div className="home-content"> 
       <NavBar />

       <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path = "/dashboard">
            <SideNav />
            <Dashboard/>
          </Route>

          <Route exact path = "/add">
            <SideNav/>
            <Add/>
          </Route>

          <Route exact path = "/update">
            <SideNav/>
            <Update/>
          </Route>
        </Switch> 

       </div>

      </div>

    </div>
    </Router>
    
  );
}

export default App;
