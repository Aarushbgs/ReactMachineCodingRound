

export default function Modal({handleclose,handleofferAccepted}) {

    const handleOutsideClick=(e)=>{
if(e.target.className==='modal'){
    handleclose();
}
    }
    return (
        <div className="modal" onClick={handleOutsideClick}>

            <div className="modal-content">
                <button
                    onClick={handleclose}
                    className="close-btn"
                >X</button>
                <div className="content">
                    Click the button below to accept our amazing offer!
                </div>

                <button
                    onClick={handleofferAccepted}
                    className="accept-btn">Accept Offer</button>
            </div>

        </div>
    )
}