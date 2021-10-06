import logo from './logo.svg';
import './App.css';
import Myclass from './components/Myclass';
import Home from './components/Home';
import Events from './components/Events';
import SumEventTask from './components/SumEventTask';
import Counter from './components/Counter';
import Person from './components/Person';
import Todo from './components/ToDo';
import Validations from './components/Validations';
// import TodoList from './components/TodoList';

function App() {
  const title="Neosoft Technologies";
  const latestTechno=["Java","python","React","Node JS"];
  const productData=[
    {"pid":101,"pname":"Abhay","price":1000,"quantity":10,"features":"flexible"},
    {"pid":102,"pname":"Akshay","price":2000,"quantity":20,"features":"portable"},
    {"pid":103,"pname":"Shubham","price":3000,"quantity":15,"features":"accessible"},
    {"pid":104,"pname":"Mayur","price":3000,"quantity":30,"features":"efficient"},
    {"pid":105,"pname":"Balla","price":2000,"quantity":5,"features":"low cost"},
  ]
  const salary=6000; {/*Conditional rendering in app.js*/ }
  const clickHandler=(data)=>{
    alert(data);
  }
  return (
    <div className="App">
      <h1>Hello {title}</h1>
      <ul> {/* using key attribute display list */}
        {latestTechno.map((lat,ind)=>
        <li key={ind}>{lat}</li>
        )}
      </ul>
      {/* <TodoList/> */}
     {/*calling Conditional rendering in app.js using ternary*/ } 
     {salary>5000 ? 
      <Person name="Abhay" age="22" myClick={()=>clickHandler("Akshay")}>
        <div>
          Abhay Ramesh Chaskar
        </div>
      </Person> : 'Invalid'}
      <hr/>
      <Myclass />
      <Todo/>
      <Home mycourses={latestTechno} productdata={productData}/> {/* using props display list */}
      <hr/>
      <SumEventTask/>  
      <hr/>
      <Events/>
      <hr/>
      <Counter/>
      <hr/>
      <Validations/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
