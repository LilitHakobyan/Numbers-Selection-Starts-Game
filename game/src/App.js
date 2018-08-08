import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Stars =(props)=>{
  const numberOfStars = 1+ Math.floor(Math.random()*9);

  let stars=[];
  for(let i=0; i<numberOfStars;i++){
    stars.push(<i key={i} className="fa fa-star"></i>)
  }
return(
  <div className="col-5" >
    {stars}
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

    const Number =(props) =>{
     let numbers=[];
      for(let i=1; i<11;i++){
      numbers.push(<span key={i} ></span>)
  }
      return(
        <div className="card text-center">
         <div>
           {numbers}
          </div>
        </div>
      )
    }
class Game extends React.Component{
  render()
  {
    return (
      <div className="container" >
        <h3> Play Nine </h3>
        <hr />
        <div className="row">
        <Stars />
        <Button />
        <Answer />
        </div>
        <br />
        <Number />
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