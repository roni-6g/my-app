import React from 'react';
import './App.css';
import Counter from './mycomponent/Couner'
import User from './mycomponent/User'

function App() {
  const products = [
    {name: 'Photoshop', price: '$190.99'},
    {name: 'Illustration', price: '$129.99'},
    {name: 'PdfReader', price: '$90.99'},
    {name: 'Template', price: '$40.99'}
  ];
  const phoneItems = ["Oppo", "Nokia", "Symphony", "butterfly", "Iphone", "Realme", "Sony", "Laptop"]
  const phoneNames = phoneItems.map(phone => phone);
  // console.log(phoneNames);
  return (
    <div className="App">
      <Counter></Counter>
      <User></User>
      <ul>
        {
          phoneNames.map(phone => <li> {phone} </li>)
        }
      </ul>
     <ul>
       {
         products.map(pd => <li>{pd.name}</li>)
       }
     </ul>
     {
       products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
     }
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    height: '200px',
    width: '300px',
    backgroundColor: '#eee',
    borderRadius: '10px',
    margin: '20px',
    display: 'inline-block'
  }
  return(
    <div style={productStyle}>
      <h2> Name: {props.name} </h2>
      <h3> Price: {props.price} </h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
