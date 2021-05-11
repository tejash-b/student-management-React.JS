import { useState} from "react";
import {useHistory} from "react-router-dom";

const SignIn = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    const signinClicked = () => {

        if([username,password,email].some(e => e === " "))
        {
            alert("please fill all the details");
        }
        else{
            const loginData = { username, password, email };

            fetch('http://localhost:8000/logindata',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            })
            .then(() => {
                history.push('/login'); 
            })
        }
        
    } 

    const clearClicked = () => {
        setUserName("");
        setPassword("");
        setEmail("");
    }

    return ( 
        <div className="signin">
            <input type="text "
             placeholder="Enter Name"
             required
             value={username} 
             onChange={(e) => setUserName(e.target.value)} />

            <input type="password " 
            placeholder="Enter Password"
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

            <input type="email" 
            placeholder="Enter Email" 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>

            <button onClick={() => signinClicked()}>SignIn</button>
            <button onClick={() => clearClicked()}> Clear</button>
        </div>
        
     );
}
 
export default SignIn;