import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

var style={
  color:'red',
  backgroundColor:'blue',
}
function App() {
  const nayoks =['razzak','salman','kobir','alom','johir' , 'rohim']
  const Products=[
    {name:'potoshop', price:'$90.0'},
    {name:'Illustrator', price:'$60.0'},
    {name:'pdf writer', price:'$10'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a react parson</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            Products.map(pd =><li><Product Product={pd}></Product> </li>)
          }

        </ul>
       
      </header>
    </div>
  );
}
function Counter(){
  const [count , setCount] = useState(20);
  // const handleIncrease=() => setCount(count + 1 );
  return(
    <div>
      <h1>count : {count}</h1>
      <button onClick={() =>setCount(count - 1) }> Decrease</button>
      <button onClick={() => setCount(count + 1 )}> Increase</button>
    </div>
  )
}
function Users(){
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setUsers(data))
  }

  )
  return (
    <div>
      <h3>user : {users.length} </h3>
        <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
        </ul>
     
    </div>
  )
}
function Person(props){
  const parsonStyle={
    border:'2px solid blue',
    margin:'5px',
  }
  return <div style={parsonStyle}>
    <h1> name :{props.hero}</h1>
  </div>
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    height:'250px',
    backgroundColor:'lightgray',
    weight:'200px',
    float:'left',
  }
  const {name , price} =props.Product;
  console.log(name , price);
  return(
    <div style={productStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button> Buy now</button>
    </div>
  )
}

export default App;
