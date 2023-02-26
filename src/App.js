import './App.css';
import Home from './Props_and_destucturing/Home';
import './Card/Style.css'
import Data from './Data-Mapping/data.json'

function App() {

  return (
    <div className="App">
      <h1 className='headingStyle'>Todo App</h1>
      {Data.map((item) => <Home titleText={item.title } descText ={item.desc} />)}

      {/* <Home titleText={Data[0].title}  descText ={Data[0].desc}/>
      <Home titleText={Data[1].title}  descText ={Data[1].desc}/>
      <Home titleText={Data[2].title}  descText ={Data[2].desc}/>
      <Home titleText={Data[3].title}  descText ={Data[3].desc}/> */}
      
      
    </div>
    
  );
}

export default App;

