// this is the only file where we have to do changes of have to import changes to render on the browser 
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
<Navbar title="TextUtils" home="Home" about="About" disabled="Disabled  "/>
    
    <div className="container my-5">
<TextForm heading="Enter text to analize Below" />
      </div></>
  );
}

export default App;


/*
JSX is a JavaScript syntax extension that allows writing HTML-like code inside JavaScript.
At a time, we can return only one parent tag in JSX.
If we want to return multiple tags, we wrap them using a JavaScript framework feature called Fragment written as <> </>.

for -> htmlFor
className-> classNameName
tag-> tabIndex
*/