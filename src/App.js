import React from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./Firebase/setup";

const App = () => {
  const [Phone, setPhone] = React.useState("");
  const [user,setuser]=React.useState(null);
  const [OTP,setOTP]=React.useState("")

  const sendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, Phone, recaptcha);
      setuser(confirmation);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOTP =async()=>{
    try{
     const data = await user.confirm(OTP)
     console.log(data);
    }catch(err){
      console.error(err);
    }

  }
  return (
    <div>
      <input
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div id="recaptcha"></div>
      <button onClick={sendOTP}>Send OTP</button>
      <input onChange={(e)=>setOTP(e.target.value)} placeholder="OTP"/>
      <button onClick={verifyOTP}>verifyOTP</button>
    </div>
  );
};

export default App;
