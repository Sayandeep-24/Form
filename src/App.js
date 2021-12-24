import './App.css';

function App() {
    function submitHandler(event)
    {
      event.preventDefault();
      if(event.target[0].value<1 || event.target[0].value>20)
        alert("Error");
      else
       alert("No error");
    }
  
    return (<div>
      <form onSubmit={submitHandler}>
        <input type='text'>
        </input>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default App;
