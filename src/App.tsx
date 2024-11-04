import { FormEvent, useState } from 'react'
import SignUpDesktop from './assets/illustration-sign-up-desktop.svg'
import SignUpMobile from './assets/illustration-sign-up-mobile.svg'
import RightIcon from "./assets/icon-success.svg";
import './App.scss'

interface ErrorInterface {
  message: string;
  status: boolean;
}

function App() {

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<ErrorInterface>({
    message: "",
    status: false
  });
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError({
          message: "Valid email required",
          status: true
      });
      return;
  }
  

    setSubmitted(true);

  }

  const reset = () =>{
    setSubmitted(false)
    setEmail('')
    setError({
      message: "",
      status: false
    })
  }

  const goBackToForm=()=>reset();

  return (
    <div className='App'>

      <main className={`${!submitted?"card__wrapper":"hidden"}`}>
          <img src={SignUpDesktop} className='hidden lg:block' alt="signup-image"/>
          <img src={SignUpMobile} className='block lg:hidden w-full sm:h-96' alt="signup-image"/>
        <section>

          <h1>Stay updated!</h1>

          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className='info__list'>
            <div>Product discovery and building what matters</div>
            <div>Measuring to ensure updates are a success</div>
            <div>And much more!</div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className='flex justify-between' htmlFor='email'><span>Email address</span> <span className='ms-auto opacity-0' data-error={error.status}>{error.message}</span></label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@company.com' data-error={error.status} />
            <button type='submit'>Subscribe to monthly newsletter</button>
          </form>
        </section>

      </main>

      <main className={`${submitted ? "step__second__card" : "hidden"}`}>
        <img src={RightIcon} />
        <h1>Thanks for subscribing!</h1>

        <p>A confirmation email has been sent to {email}.
        Please open it and click the button inside to confirm your subscription.
        </p>

        <button type="button" onClick={goBackToForm}>Dismiss message</button>
      </main>

    </div>
  )
}

export default App
