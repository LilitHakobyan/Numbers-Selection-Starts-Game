import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Stars =(props)=>{
  const numberOfStars = 1+ Math.floor(Math.random()*9);

return(
  <div className="col-5" >
    {
      _.range(numberOfStars).map(i=>
      <i key={i} className="fa fa-star"></i>
      )
    }
   </div>
);
};

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
       <span>5</span>
         </div>
    );
      
    }

    const Numbers =(props) =>{
      return(
           <div className="card text-center">
            <div>
             {
             Numbers.list.map((number,i)=>
             <span key={i} >{number}</span>
             )}
             </div>
           </div>
         );
       };
    Numbers.list=_.range(1, 10);

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
        <Numbers />
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