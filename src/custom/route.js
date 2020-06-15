import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default class Rout extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>
        <hr/>
    
        // All 3 components below would be rendered when in a homepage
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={About}/>
       
    
        <Route path="/about" component={About}/>
        
      </div>
    </Router>
    
    );
  }
  
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


