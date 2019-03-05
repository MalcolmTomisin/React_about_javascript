import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Engines</h2>
        <p>A JavaScript engine is a computer program that executes JavaScript (JS) code. The first JS engines were mere interpreters, but all relevant modern engines utilize just-in-time compilation for improved performance.
JS engines are developed by web browser vendors, 
and every major browser has one. In a browser, the JS engine runs in concert with the rendering engine via the Document Object Model (DOM).</p>
<p>The first JavaScript engine was created by Brendan Eich in 1995 for the Netscape Navigator web browser. 
  It was a rudimentary interpreter for the nascent language Eich invented. (This evolved into the SpiderMonkey engine, still used by the Firefox browser.)</p>
        <ul>
          <li>Chrome V8 from Google is the most used engine. Google Chrome and the many other Chromium-based browsers use it, 
            as do applications built with CEF, Electron, or any other framework that embeds Chromium. Other uses include the Node.js runtime system.</li>
          <li>SpiderMonkey is developed by Mozilla for use in Firefox and its forks. The GNOME Shell uses it for extension support.</li>
          <li>JavaScriptCore is Apple's engine for its Safari browser. Other WebKit-based browsers also use it.</li>
          <li>Chakra is the current engine of the Microsoft Edge browser, forked from the same-named engine of Internet Explorer. 
            However, Microsoft is now rebuilding Edge as a Chromium-based browser, so it will be using V8 instead of Chakra. Internet Explorer will continue to use its version of Chakra</li>
        </ul>
      </div>
    );
  }
}
 
export default Stuff;