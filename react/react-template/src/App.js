import React from "react";

//Keyword "class" to indicate a class and then the name of the class and then you
// need to extends React.Component in order to implemet React functions
export default class App extends React.Component { 
  
  //Render method is used to render html code
  render() {
    
    return (
      <>
       <h1>Hello React!</h1>
      </>
    )
  }
}

// You need to export the class in order to be able to import it and use it in other files