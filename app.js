class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey ProGrads`,
          React.createElement(`div`,null,`Let's rock and roll`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);