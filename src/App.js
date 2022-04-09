import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,useParams} from 'react-router-dom'
import Users from './Users';
const Homepage=()=>{
  return( <div>this is home</div>)
}
const Aboutus=()=>{
  return( <div>aboutus</div>)
}
const Itemsall=()=>{
  let {name}=useParams();
  return(
    <div>
      <h1>Items</h1>
      <div>{name}</div>
    </div>
  )
}

const Items=()=>{
  return( <div>Items
    <div>
      <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  </ul>
  </div>
  </div>
  )
}

 
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
   
    <ul> <Link to="/Home">home</Link></ul>
    <ul> <Link to="/Items">Items</Link></ul>
    <ul>   <Link to="/Aboutus">Aboutus</Link></ul>
    <ul>   <Link to="/Users">Users</Link></ul>
     <Routes>
      
       <Route path="/Home" element={<Homepage/>}></Route>
       <Route path="/users" element={<Users/>}></Route>

       <Route path="/Items" element={<Items/>}></Route>
       <Route path="/Aboutus" element={<Aboutus/>}></Route>
     
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
