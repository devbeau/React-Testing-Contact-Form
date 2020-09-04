import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName" id="firstname-label">First Name*</label>
          <input
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true, minLength: 3 })}
            aria-labelledby="firstname-label"
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" id='lastname-label'>Last Name*</label>
          <input
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
            aria-labelledby='lastname-label'
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com" id='email-label'>
            Email*
          </label>
          <input name="email" ref={register({ required: true })} aria-labelledby='email-label'/>
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" id='message-label'>Message</label>
          <textarea name="message" ref={register({ required: false })} aria-labelledby='message-label'/>
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }} data-testid='userobj'>
            {JSON.stringify(data, null, 2)}
            
          </pre>
        )}
        <input type="submit" data-testid='submit'/>
      </form>
    </div>
  );
};

export default ContactForm;
