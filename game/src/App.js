import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import has from 'lodash/has';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const Stars =(props)=>{
  return(
    <div className="col-5" >
      {
        has.range(props.numberOfStars).map(i=>
        <i key={i} className="fa fa-star"></i>
        )
      }
     </div>
  );
  };
  const Button =(props)=>{
  let button;
   switch(props.answerIsCorrect){
   case true:
   button=
   <button className="btn btn-success" onClick={props.acceptAnswer}>
   <i className="fa fa-check" ></i>
   </button>;
   break;
   case false:
   button=
   <button className="btn btn-danger" >
   <i className="fa fa-times" ></i>
   </button>;
   break;
   default:
   button=
   <button className="btn btn-primary" 
                                      onClick={props.checkAnswer} 
                                       disabled={props.selectedNumbers.length===0} > 
   =
   </button>;
   break;
   }
    return(
      <div className="col-2" text-center>
          {button}
          <br ></br>
          <button className="btn btn-warning btn-sm" onClick={props.redraw}
          disabled={props.redraws === 0} >
            <i className ="fa fa-refresh"></i> {props.redraws}
          </button>
      </div>
    );  
    }
    const Answer =(props)=>{
      return(
        <div className="col-5">
        {  props.selectedNumbers.map((number,i)=>
        <span key ={i} OnClick={()=>props.unselectNumber(number)} >{number} </span>
        )}
        </div>
      );      
      }
  const Numbers =(props) =>{
  const numberClassName=(number)=>{
  if (props.usedNumber.indexOf(number) >= 0) {
  return 'used';
  }
  if (props.selectedNumbers.indexOf(number) >= 0) {
    return 'selected';
    }
  }
     return(
          <div className="card text-center">
           <div>
            {
            Numbers.list.map((number,i)=>
            <span key={i} className={numberClassName(number)}
                            onClick={()=>props.selectNumber(number)}
            >{number}
            </span>
            )}
            </div>
          </div>
        );
      };
   Numbers.list=has.range(1, 10);

   const DoneFrame = (props) => {
     return(
      <div className="text-center">
        <h2>{props.doneStatus} </h2>
        </div>
     );
   }
  class Game extends React.Component{
    static randomNumber =() => 1+ Math.floor(Math.random()*9);
  state ={
  selectedNumbers: [],
  rendomNumberOfStars: Game.randomNumber(),
  usedNumber: [4,5],
  answerIsCorrect: null,
  redraws:5,
  doneStatus: null,
  };
  selectNumber =(clickedNumber)=> {
  if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){return;}
  this.setState(prevState =>(
  {
  selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
  }));
  };
  unselectNumber=(clickedNumber) =>{
  this.setState(prevState=>({
  selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
  }));
  };
  checkAnswer = () => {
      this.setState(prevState => ({
      answerIsCorrect:prevState.rendomNumberOfStars === 
      prevState.selectedNumbers.reduce((acc, n) => acc+n, 0)
      }));
  };
  acceptAnswer = () => {
      this.setState(prevState => ({
       usedNumber:prevState.usedNumber.concat(prevState.selectedNumbers),
       selectedNumbers: [],
       answerIsCorrect : null,
       randomNumberOfStars:Game.randomNumber(),
      }));
  };

  redraw =() => {
    if(this.state.redraws===0) {return; }
   this.setState(prevState =>({
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    selectedNumbers : [],
    redraws: prevState.redraw-1,
   }));
  };
    render()
    {
    const {selectedNumbers ,
        randomNumberOfStars ,
        answerIsCorrect,
        usedNumber,
        redraws,
        doneStatus,
        }=this.state;
      return (
        <div className="container" >
          <h3> Play Nine </h3>
          <hr />
          <div className="row">
          <Stars numberOfStars={this.state.rendomNumberOfStars} />
          <Button selectedNumbers={this.state.selectedNumbers} 
                  redraws={redraws}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
          />
          <Answer selectedNumbers={this.state.selectedNumbers }
                  unselectNumber={this.unselectNumber}
          />
          </div>
          {doneStatus ? <DoneFrame doneStatus={doneStatus} /> :
        <Numbers selectedNumbers={this.state.selectedNumbers }  
        selectNumber={this.selectNumber}
        usedNumber={usedNumber} />
        }
          <br /> 
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