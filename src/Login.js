
import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [users,setUsers] = useState(null);
    const history = useHistory();
 

    useEffect( () => {
        fetch('http://localhost:8000/logindata')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[users])

    const loginClicked = () => {

        if(users != null)
        {
            console.log(users);
            for(let i=0;i<users.length;i++){
                if(users[i].username === username && users[i].password === pass)
                {
                    history.push('/dashboard');
                }
            }
        } 
    }    

    const clearClicked = () => {
        setUsername('');
        setPass('');
    }

    return ( 
       
        <div className="login">
            
            <input type="text" 
                placeholder="Enter Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}    
            />
       
            
            <input type="password" 
                placeholder="Enter Password" 
                value={pass}
                onChange={(e) => setPass(e.target.value)}     
            />
       
            <button onClick={() => { loginClicked() }}>Login</button>
            <button onClick={() => { clearClicked() }}>Clear</button>
        </div>
        
     );
}
 
export default Login;