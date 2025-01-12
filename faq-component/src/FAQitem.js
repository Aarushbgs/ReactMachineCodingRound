import React, { useEffect, useState } from 'react'
import './App.css'

const FAQitem = ({faq,index}) => {
  const [isShown, setIsShow]=useState(false);

  useEffect(()=>{
    if(index===0){
      setIsShow(true);
    }
  },[])

  const handleClick =()=>{
    setIsShow((isShown)=>!isShown);
  }

  return (
    <div className='faq-box'>
      <div className='que' onClick={handleClick}>
        <button className={isShown? 'arrow':''}>> </button>
        <div>{faq.question}</div>
      </div>

      {isShown&& <div className='ans'>{faq.answer}</div>}
     
    </div>
  )
}

export default FAQitem