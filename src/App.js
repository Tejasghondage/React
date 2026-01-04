// this is the only file where we have to do changes of have to import changes to render on the browser 
// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Tejas";
  return (
    <div className="blank">
      <h1>Welocome to {name}'s portfolio project</h1>
      <nav>
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Demo</li>
          <li>Contact</li>
          <li>Register</li>
        </ul>
      </nav>
      <div>my name is {name} i am from JSPM's Rajarshi Shahu College of enginnering thathwade .</div>
    </div>
  );
}

export default App;


/*
JSX is a JavaScript syntax extension that allows writing HTML-like code inside JavaScript.
At a time, we can return only one parent tag in JSX.
If we want to return multiple tags, we wrap them using a JavaScript framework feature called Fragment written as <> </>.

for -> htmlFor
class-> className
tag-> tabIndex
*/