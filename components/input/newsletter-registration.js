import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
  const inputRef = useRef();
  const [text, setText] = useState();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = inputRef.current.value;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => console.log(data))

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    // const datas = inputRef.current.value;
    // console.log(data);

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch('/api/newsletter', requestOptions)
    //     .then(response => response.json())
    //     .then(data => setText({ email : data.datas }));

    // return text;
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
