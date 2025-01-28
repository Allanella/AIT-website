import React from 'react'
import './Contacts.css'
import mess from  '../../assets/mess.png'
import gmail from '../../assets/gmail.png'
import tel from '../../assets/tel.png'
import boxx from '../../assets/boxx.png'
import loca from '../../assets/loca.png'




const Contacts = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "20828cf3-fa6c-4de8-a270-de67f074ab1a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className='contact_us'>

            <div className='ContPage'>
                <h2>Contact us</h2>


            </div>
            <div className='our_contact'>
                <h4>Send us a message <img src={mess} alt="" /></h4>
                <p>Let us know how we can help you. We'd love to hear from you</p>


                <ul>

                    <li> <img src={gmail} alt='' />Contact@ArolaInst.com </li>
                    <li> <img src={tel}  alt='' /> +256700966715  </li>
                    <li> <img src={boxx} alt='' />P.O BOX 1491</li>
                    <li> <img src={loca} alt=''/>Kampala, Uganda</li>
                </ul>
            </div>

            <div className='Inquiries'>
                <form onSubmit={onSubmit}>
                     <label>Name</label>
                     <input type='text'name='name' placeholder='Enter your name' required />
                     <label>Phone number</label>
                     <input type='tel' name='phone' placeholder='Enter your telephone number' required/>
                     <label>Write a message</label>
                    <textarea name='message' rows={6} placeholder='Enter your message here'/>
                    <button type='submit' className='Formbtn'>Submit now</button>

                      

                </form>
           <span>{result}</span>

            </div>

        </div>
    )
}

export default Contacts
