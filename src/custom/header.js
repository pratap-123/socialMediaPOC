import React from "react";
import verizon_logo from './verizon_logo.jpg';

export default class Header extends React.Component {
  render(){
    return (
      
      <div id="header"class="">
      <div class="panel-heading"><h1 id="heading">Social Media POC</h1><a href="#" ><img src={verizon_logo} title="verizon" alt="verizon" className="verizon_logo" /></a></div>
      <p id="text">beta V1.0</p>
      <hr/>
      </div>
      



        

    );    
  }
}
