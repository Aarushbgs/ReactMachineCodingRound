import { useEffect, useState } from 'react';
import './App.css';
import debounceQuery from './utils'
function App() {

  const [input, setInput] = useState('');
  const [list,setList]=useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const initAPICall=async()=>{
    const url =`https://api.frontendeval.com/fake/food/${input}`;

    const data= await debounceQuery(url); 
    setList(data);
  }

  useEffect(()=>{
    if(input){
      initAPICall();
    }
  },[input])
  return (
    <div className="App">
      <h1>Debounce API Call</h1>
      <input
        type='text'
        onChange={handleInputChange}
      />

  {list&&list.length>0&&<div className='list'>
    {
    list&&list.map((item,index)=>(
      <div key={index}>{item}</div>
    ))
    }
  </div>}
    </div>
  );
}

export default App;
