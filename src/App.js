import React,{useState} from 'react';
import './App.css';
import Products from './Products/Products';
function App() {

const [products, setProducts] = useState([
  {title:"mahdi",number:0},
  {title:"ali",number:0}
])
  return (
    <div className='container'>
      {products.map((item,index)=>(
        <>
        <div key={index}>
          
<Products name={item.title} test={"salam"} />

          </div> 
               </>
      ))}
    </div>
  );
}

export default App;
