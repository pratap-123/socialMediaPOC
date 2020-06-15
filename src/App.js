import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';

import { BrowserRouter as Router, Route,  Switch,Link } from 'react-router-dom'
import Home from './custom/home';
import Details from './custom/details';


class Routee extends Component{
  render(){
    return(
      <Router>
        <div>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active"><Link class="nav-link"to={'/'}>Home</Link></li>
            <li class="nav-item"><Link class="nav-link"to={'/details'}>Details</Link></li>
          </ul>
          </nav>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/details' component={Details}/>
          </Switch>
          
        </div>
      </Router>
    );
  }

}
export default Routee;
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>

 
      
       
    </div>
  );

}







 /* class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home...</h1>
        </div>
     )
  }
}


class About extends React.Component {
  render() {
     return (
        <div>
           <h1>About...</h1>
        </div>
     )
  }
}


ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        
     </Route>
  </Router>
), document.getElementById('app'))

export default () => {
  return(
    <>
      <App />
      <Home />
      <About/>
    </>
  )
}    */



