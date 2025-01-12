import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isShow, setisShow] = useState(false);
  const [isOfferAccepted, setisOfferAccepted] = useState(false);

  const handleOpenModal = () => {
    setisShow(true);
  }

  const handleclose=()=>{
    setisShow(false);
  }

  const handleofferAccepted=()=>{
    setisOfferAccepted(true);
    setisShow(false);
  }

  return (
    <>
      <div className="show-offer">
        {
          !isOfferAccepted&&<button
          onClick={handleOpenModal}
          className="offer-btn"
        >Show offer</button>
        }

        {
          isOfferAccepted&&<div>offer Accepted</div>
        }
      </div>
      {
        isShow && <Modal  handleclose={handleclose} handleofferAccepted={handleofferAccepted}/>
      }
    </>
  );
}

export default App;
