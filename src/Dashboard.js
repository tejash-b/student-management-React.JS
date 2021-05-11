
import { useState,useEffect } from "react";

import React from "react";
import {  Table } from "semantic-ui-react";


const Dashboard = () => {

    const [name,setName] = useState('');
    const [students,setStudents] = useState([]);
    const [data,setData] = useState([]);
   
    var temp = [];

    useEffect( () => {
        fetch('http://localhost:8005/studentData')
        .then(res => { return res.json() })
        .then(data =>{ 
            setStudents(data);
            setData(data);
        })
    },[])

 

    const clickHandel = () => {

        if( name !== "")
        {
           
            if(data.find(el => el.name === name ))
            {
                for(var i=0;i<data.length;i++) {
                    if(data[i].name === name) {
                        temp[i] = data[i];  
                    }
                    else{
                        continue;
                    }
                    
                }
                setStudents(temp);
               
            }
            else{
                console.log("data not exist");
                setStudents([]);
            }
            
        }
        else{
            alert("please fill the name");
        }
    }

    return ( 
        <div className="dashboard">
            <h1 className="header-h1">Search Student Details</h1>
       
            <input type="text"
                placeholder="enter student name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => clickHandel()}>Search</button>
          
            
            <div className="table-content">
            <Table singleLine>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>DOB</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Classgrade</Table.HeaderCell>
                        <Table.HeaderCell>Phone No</Table.HeaderCell>
                        <Table.HeaderCell>Joining Year</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {students.map(el => {
                        return (
                        <Table.Row key={el.id}>
                            <Table.Cell>{el.id}</Table.Cell>
                            <Table.Cell>{el.name} </Table.Cell>
                            <Table.Cell>{el.dob}</Table.Cell>
                            <Table.Cell>{el.age}</Table.Cell>
                            <Table.Cell>{el.classgrade}</Table.Cell>
                            <Table.Cell>{el.phno}</Table.Cell>
                            <Table.Cell>{el.joining}</Table.Cell>
                        </Table.Row>
                        );
                    })}
                    </Table.Body>
                </Table>
                </div>
           

        </div>
     );
}
 
export default Dashboard;