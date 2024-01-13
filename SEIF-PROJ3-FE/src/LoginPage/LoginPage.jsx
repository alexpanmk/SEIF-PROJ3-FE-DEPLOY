import { Link } from "react-router-dom";
import { useState } from 'react'
import { getLoginDetails, loginUser } from "../../service/users"
import { hashDataWithSaltRounds, storeToken } from '../../util/security';
import SignUpPage from "../SignUpPage/SignUpPage";

export default function LoginPage() {
    const [formState, setFormState] = useState({});

    function handleChange(evt) {
        var currForm = formState;
        currForm[evt.target.name] = evt.target.value;
        setFormState(currForm);
      };

    async function handleSubmit(evt) {
        try { 
            evt.preventDefault();
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            // highlight-start
            const formData = {...formState};
            delete formData.error;
            delete formData.confirm;
            // highlight-end
            console.log(formData)
            // Determine if input is email or username
            const emailOrUsername = formData.emailOrUsername;
            const isEmail = emailOrUsername.includes('@');
            const credentials = isEmail ? { email: emailOrUsername } : { username: emailOrUsername };
            // get user hash password from database
            console.log("Logging in with:", credentials);
            const loginDetails = await getLoginDetails(credentials);
            console.log(loginDetails);

            const hashedPassword = hashDataWithSaltRounds(formData.password, loginDetails.salt, loginDetails.iterations);
            formData.password = hashedPassword;
            
            const token = await loginUser(formData);
            // store token in localStorage
            storeToken(token);
            // Baby step!          
          } catch(e) {
            console.log(e);
          }
    }
  
    return (
    <main>
        <h1>Welcome to Elysio</h1>
        <div>
            <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email/Username</label>
                <input 
                    type="text" 
                    name="emailOrUsername" 
                    onChange={handleChange} 
                    placeholder="Enter Email or Username" 
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;</p>
        </div>
      <Link to="/signup">Sign Up</Link>
    </main>
  );
}