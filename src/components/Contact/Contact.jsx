import React from 'react';
import './Contact.css'; // Corrected import statement for CSS file
import msj_icon from '../../assets/msj-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d1a3cbd8-5871-4449-aa6f-44229ca61ba9");
  
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
    <div className='contact'>
      <div className='contact-col'>
        <h3>Envoyez un message <img src={msj_icon} alt="" /></h3>
        <p>N’hésitez pas à nous contacter via le formulaire de contact ou à trouver nos coordonnées ci-dessous. Vos commentaires, questions et suggestions sont importants pour nous alors que nous nous efforçons de fournir un service exceptionnel à notre communauté.</p>
        <ul>
          <li><img src={mail_icon} alt='' />Contact@GreatStack.dev</li>
          <li><img src={phone_icon} alt='' />+212 653879032</li>
          <li><img src={location_icon} alt='' />AGADIR 8000</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required />
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
