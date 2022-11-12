import React from 'react';
import './App.css';
import {Button} from "./Button";






function App() {

  const ButtonInfo = (name:string)=> {
console.log(name)
  }

    const ButtonInfo1 = (name:string,age:number)=> {
        console.log(name,age)
    }

const ButtonName = 'YO'

    return (
        <div className="App">
          <Button name={ButtonName} callback={()=>(ButtonInfo('I am Dima'))}/>
            <Button name={ButtonName} callback={()=>(ButtonInfo1('I am Vika',18))}/>
        </div>
    )
}

export default App;


























