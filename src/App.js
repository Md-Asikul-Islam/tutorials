import './App.css';
import Home from './Props_and_destucturing/Home';
import './Card/Style.css'

function App() {
  return (
    <div className="App">
      <h1 className='headingStyle'>Todo App</h1>
      <Home titleText="call mother "  descText ="this is description number one "/>
      <Home titleText="call father "  descText ="this is description number two "/>
      <Home titleText="call brother "  descText ="this is description number Three "/>
      <Home titleText="call sister "  descText ="this is description number four "/>
      
    </div>
    
  );
}

export default App;

