import React,{ useState }from 'react';//useState is responsible for storing data inside of a component
import './App.css;
import List from "./component/List"
import AddToList from "./component/AddToList"

export interface Istate{
  fruit:{
    name:string;
    price:number;
    url:string;
    note?:string;
  }[]
}

function App() {
  const [fruit, setFruit]= useState<Istate["fruit"]>([
    {
      name: "Apple",
      url:"https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg",
      price:80,
      note:"good"
    }
  ])
  
  
  return (
    <div className="App">
      <h2>Fruit List</h2>
      <List fruit={fruit}/>
      <AddToList fruit={fruit} setFruit={setFruit}/>
    </div>
  );
  }

export default App;
