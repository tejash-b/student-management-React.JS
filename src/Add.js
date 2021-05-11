
import { useState } from "react";
import {useHistory} from "react-router-dom";

const Add = () => {

    const [name,setName] = useState('');
    const [dob,setDob] = useState('');
    const [age,setAge] = useState('');
    const [classgrade,setClassgrade] = useState('');
    const [phno,setPhno] = useState('');
    const [joining,setJoining] = useState('');
    const history = useHistory();
    
    const addClick = () => {
        if([name,dob,age,classgrade,phno,joining].some(e => e=== ''))
        {
            alert("please fill all the values");
        }
        else{
            const studentData = { name,dob,age,classgrade,phno,joining };

            fetch('https://student-details-api.herokuapp.com/studentData',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentData)
            })
            .then(() => {
                history.push('/dashboard'); 
            })
        }
    }
    
    return ( 
        <div className="add">
            <h1 className="header-h1">Add Student Details</h1>
            
            <input type="text"
                placeholder="Enter Student Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="text"
                placeholder="Enter DOB"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
            <input type="text"
                placeholder="Enter Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input type="text"
                placeholder="Enter Classgrade"
                required
                value={classgrade}
                onChange={(e) => setClassgrade(e.target.value)}
            />
            <input type="text"
                placeholder="Enter phone no "
                required
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
            />
            <input type="text"
                placeholder="Enter joining year"
                required
                value={joining}
                onChange={(e) => setJoining(e.target.value)}
            />

            <button type="submit"  onClick={() => addClick()}> Add </button>
            <button id = "clear">Clear</button>
        </div>
     );
}
 
export default Add;