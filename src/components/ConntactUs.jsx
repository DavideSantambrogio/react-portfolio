import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Mostra il loader

    const userData = {
      user_name: e.target.user_name.value,
      user_surname: e.target.user_surname.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };

    emailjs
      .sendForm('service_hjqvpar', 'template_479sfav', form.current, 'JvfR3cfQwEgjSgCc2')
      .then(() => {
        return emailjs.send('service_hjqvpar', 'template_u06i0pq', userData, 'JvfR3cfQwEgjSgCc2');
      })
      .then(
        (result) => {
          console.log('Email inviata con successo:', result.text);
          alert('Email inviata con successo!');
          form.current.reset(); // Resetta il modulo dopo l'invio
          setIsLoading(false); // Nasconde il loader
        },
        (error) => {
          console.log('Errore nell\'invio dell\'email:', error.text);
          alert('Si è verificato un errore nell\'invio dell\'email.');
          setIsLoading(false); // Nasconde il loader anche in caso di errore
        }
      );
  };

  return (
    <div className="my-bg-primary">
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-5 my-bg-secondary p-5 text-white">
            <h2 className='pb-4'>Vuoi contattarmi?</h2>
            <h5 className='pb-4'>Ecco i miei recapiti</h5>
            <div className='pb-4'>
              <p>Telefono</p>
              <p className="my-text-color">+39 345 4627886</p>
            </div>
            <div className="pb-4">
              <p>E-mail</p>
              <p className="my-text-color text-decoration-underline">santambrogio.davide.97@gmail.com</p>
            </div>
          </div>
          <div className="col-7 bg-light p-5">
            <h2 className="pb-4">Inviami un messaggio</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className='d-flex gap-4'>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="user_name" name="user_name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_surname" className="form-label">Cognome</label>
                  <input type="text" className="form-control" id="user_surname" name="user_surname" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="user_email" className="form-label">Email</label>
                <input type="email" className="form-control" id="user_email" name="user_email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Messaggio</label>
                <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
              </div>

              <div>
              {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>Invia</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* CSS del loader */}
      <style>
      {`
          .loader {            
            transform: translate(-50%, -50%);
            border: 10px solid #f3f3f3; /* Light grey */
            border-top: 10px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 2.4rem;
            height: 2.4rem;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
