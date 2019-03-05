import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h4>JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme and Self.</h4>
        <p>JavaScript is one of the 3 languages all web developers must learn:
        <ul>
          <li>1. HTML to define the content of web pages</li>
          <li>2. CSS to specify the layout of web pages</li>
          <li>3. JavaScript to program the behavior of web pages</li>
        </ul>
</p>
 
        <p>Web pages are not the only place where JavaScript is used. 
Many desktop and server programs use JavaScript. Node.js is the best known. 
Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.</p>
      </div>
    );
  }
}
 
export default Home;