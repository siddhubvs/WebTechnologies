import React from 'react';
import './App.css';
import Product from './product';
const prods=[
  {name: 'Master Widget', price:'$150.00'},
  {name: 'Master Wudget', price:'$175.00'},
  {name: 'Sub Widget', price:'$50.00'},
  {name: 'Sub Wudget', price:'$60.00'}
]
const App =()=>{
  return (
  <div>
      {prods.map(prod=>(<Product name={prod.name} price={prod.price}/>))}
</div>
  )};
export default App;
