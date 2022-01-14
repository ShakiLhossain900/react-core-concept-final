import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['anowar', 'jafor', 'alomgir', 'salman','bappi','bobby','shakil','fah']
  const people = ['shakil', 'nayem', ' Noushin', 'rahman']
  const products = [
    {name : 'photoshop', price : '$90.99'},
    {name :'islastetor' , price :'$56.89'},
    {name: 'pdf-reader', price : '$66.77'},
    {name :'read-light', price : '$34.88'}
 
  ]

  const employees = [
    {
      name: 'modiuddin', age: '21', work:'politician', personality :'he is good person as his work and think'
    },
    {
      name :'joseph w rodway', age:'32', work:'gym person', personality:'he is good person for his work and helpful person'
    },
    {
      name : "shakil hossain", age : '23', work :'software engineer', personality : ' most beliver to himself'
    }

  ]
 

  // const nayoksname = nayoks.map(nayok => nayok)
  // console.log(nayoksname)
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Count></Count>
        <Countnumber></Countnumber>
        <Users></Users>

   
        {/* <Product name ={products[0].name} price = {products[0].price}></Product>
        <Product name = {products[1].name} price = {products[1].price}></Product>
        <Product name = {products[2].name} price = {products[2].price}></Product>
        <Product name= {products[3].name} price = {products[3].price}></Product> */}

    <ul>
      {/* <li>{nayoks[0]}</li>
      <li>{nayoks[1]}</li>
      <li>{nayoks[2]}</li>
      <li>{nayoks[3]}</li> */}
      {
        nayoks.map(nayok =><li>{nayok}</li>)
      }
    </ul>
   {
      products.map(pd =><Product product ={pd}></Product>)
   }
   {
     employees.map(em =><Employe personofemployee ={em}></Employe>)
   }

        {/* <Product product={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product>
        <Product product = {products[3]}></Product> */}
        {/* <Person name ={nayoks[0]} naika ="moushomi"></Person>
        <Person name ={nayoks[1]}  naika = "purnima"></Person>
        <Person name = {nayoks[2]} naika = "pricila"></Person>
        <Names name ={people[0]} goodside = "good Programmer" ></Names> */}
      </header>
    </div>
  );
}

function Users() {
  const [user,setUsers]=useState([])
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=> res.json())
  .then(data => setUsers(data))
  },[]);
  return(
    <div>
      <h3>Dynamic users : {user.length}</h3>
     <ul>
       {
         user.map(user =><li>{user.email}</li>)
       }
     </ul>
    </div>
  )
}


function Countnumber() {
  const button ={
   backgroundColor:'#4caf50',
   border:'none',
   color: 'white',
   padding: '20px',
   textAlign: 'center',
   textDecoration: 'none',
   display: 'inline-block',
   fontSize :'26px',
   margin:'4px 2px',
   cursor: 'pointer',
  }
  const [count , setcount] = useState(10)
  const handalnumber=()=>{
    const newnumber = count +1
    setcount(newnumber)
  }
  const handalnumberdecrase=()=>{
    const newcountnumber= count-1;
    setcount(newcountnumber)
  }
  return(
   <div>
      <h1>Count :{count}</h1>
      <button style={button} onClick={handalnumberdecrase}>-</button>
       <button style={button} onClick={handalnumber} >+</button>
   </div>
  )
  
}

function Count() {
   const button ={
   backgroundColor:'#4caf50',
   border:'none',
   color: 'white',
   padding: '20px',
   textAlign: 'center',
   textDecoration: 'none',
   display: 'inline-block',
   fontSize :'26px',
   margin:'4px 2px',
   cursor: 'pointer',
  }
  const [count,setcount] =useState(0)
  
return(
  <div>
    <h1>Count : {count}</h1>
    <button style={button} onMouseMove={()=>setcount(count-1)}>decrace</button>
    <button style={button} onClick={()=> setcount(count+1)}>Increase</button>
  </div>
)
  
}

function Employe(props) {
  const styleOfemployees ={
    boxShadow: '0 4px 8px 0 rgb(0,0,0,0.2)',
    transition:'0.3s',
    width:'auto',
    height: '200px',
    margin:'5px',
    padding: '20px',
    backgroundColor:'black',
    lineHeight: '5px'

  }
  const {name,age,work,personality} =props.personofemployee
  return(
    <div style={styleOfemployees}>
      <h4>name : {name}</h4>
      <h5>age :{age}</h5>
      <h6>work :{work}</h6>
      <p>personality :{personality}</p>

    </div>
  )
  
}
function Product(props) {
  const productstyle = {
    border: '3px solid black',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    float: 'left',
    color: 'black',
    margin:'5px',
    padding: '5px',
    width: '300px',

  }
  const {name,price} = props.product;
  return(
    <div style ={productstyle}>
       <h3>Name :{name}</h3>
       <h1>{price}</h1>
       <button>Buy Now</button>
    </div>
  )
  
}
function Person(props) {
    const personstyle = {
      border: '2px solid red',
      borderRadius: '10px',
      margin: '5px',
      padding: '10px',
      width: '600px',
      height: '200px',
      backgroundColor: 'black'
    }
  return  <div style={personstyle}>
    <h1> Name : {props.name}</h1>
    <h2>Naika : {props.naika}</h2>
    </div>
}
 
function Names(props) {
  const peoplestyle = {
    border: '2px solid ',
    margin:'10px ',
    padding: '10px',
    backgroundColor:'blue',
  }
  return<div style={peoplestyle}>
    <h1>name of person : {props.name}</h1>
    <h2>good side: {props.goodside}</h2>
    </div>
  
  
}

export default App;
