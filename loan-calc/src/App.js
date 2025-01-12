import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);


  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === 'principle') {
      setPrinciple(value);
    } else if (id === 'interest') {
      setInterest(value);
    } else {
      setYears(value);
    }
  }

const calculateEMI=()=>{
  let r=interest;
  if(principle&&r&&years){
    r=r/12/100;
    const calcPow=Math.pow(1+r,years*12);
    const amount=principle*((r*calcPow)/(calcPow-1));
    setEmi(amount);
  }
}

  useEffect(() => {
    calculateEMI();
  }, [principle, interest, years])
  return (
    <div className="loan-calc">
      <h1>Mortgage Calculator</h1>

      <div className='inputes'>
        <p>Principle</p>
        <input
          onChange={handleChange}
          type='number' id='principle' />

        <p>Interest</p>
        <input onChange={handleChange} type='number' id='interest' />

        <p>Year</p>
        <input onChange={handleChange} type='number' id='year' />
      </div>

      <div className='output'>Your EMI is {Math.round(emi)}</div>

    </div>
  );
}

export default App;
