import React,{useState} from 'react';
import './App.css';

function App() {
    const [error, setError]=useState();
    function submitHandler(event)
    {
      event.preventDefault();
      if(event.target[0].value<1 || event.target[0].value>20)
        setError(true)
      else
        setError(false)
    }
  
    return (<div>
      <form onSubmit={submitHandler}>
        <input type='text'>
        </input>
        <input type="submit" value="Submit" />
        </form>
        {error?<div>Error</div>:<div>No Error</div>}
      </div>
    );
}

export default App;
