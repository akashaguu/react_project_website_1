
import "./ContactModals.css"


function contactModal({setModal}) {
    
  return (
    
    <div class="form1">
      <div className='closebutton' onClick={() =>setModal(false)}>X</div>
      <h2>Contact form</h2>
      <input type='text' placeholder='name' className='forms'></input>
      
      <input type='email' placeholder='Email' className='forms'></input>
      
      <input  placeholder='Phone number' className='forms'></input>
      <input className='message' type='textarea' placeholder='Message' ></input>
      <button className='b1'>submit</button>
    </div>
  )
}

export default contactModal
