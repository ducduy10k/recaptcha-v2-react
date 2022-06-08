import './App.css';
import React from "react";
import ReCaptcha from "@matt-block/react-recaptcha-v2";
function App() {

  const handleSubmit = () => {
    console.log('ok')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
      </form>
      <ReCaptcha
        siteKey="6LcPi1EgAAAAAI141erLcLTPhGJyacYZW3zVaEm_"
        theme="light"
        size="normal"
        onSuccess={(captcha) => console.log(`Successful, result is ${captcha}`)}
        onExpire={() => console.log("Verification has expired, re-verify.")}
        onError={() => console.log("Something went wrong, check your conenction")}
      />
    </div>
  );
}

export default App;
