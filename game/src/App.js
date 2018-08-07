import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



import './App.css';

const Stars =(props)=>{
return(
  <div className="col-5" >
    <i className="fa fa-star" > </i>
    <i className="fa fa-star" > </i>
    <i className="fa fa-star" > </i> 
    <i className="fa fa-star" > </i> 
   </div>
);
}

const Button =(props)=>{
  return(
    <div className="col-2">
      <button className="btn btn-primary" > =</button>
       </div>
  );
    
  }
  
  const Answer =(props)=>{
    return(
      <div className="col-5">
        .......
         </div>
    );
      
    }
class Game extends React.Component{
  render()
  {
    return (
      <div className="row">
        <h3> Play Nine </h3>
        <hr />
        <div>
        <Stars />
        <Button />
        <Answer />
        </div>
         </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
    <div>
           <Game />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

export default App;