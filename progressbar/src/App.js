import ProgressBar from './progressBar'
import './App.css';
import {useEffect,useState} from 'react';

function App() {
  const [progress,setProgress]= useState(0);

  useEffect(() => {
   const time =setInterval(()=>{
     if(progress<100){
      setProgress((p)=>p+1);
     }
   },20);
   return ()=>{
    clearInterval(time);
   }
  }, [progress])
  

  return (
    <div className="App">
      <ProgressBar
      progress={progress}
      color={`lightgreen`}
      />

<ProgressBar
      progress={progress}
      color={`lightblue`}
      />

<ProgressBar
      progress={progress}
      color={`yellow`}
      />
    </div>
  );
}

export default App;
