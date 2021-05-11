
import { useState,useEffect } from "react";
import { Table } from "semantic-ui-react";
import {useHistory} from "react-router-dom";



const Update = () => {

    const [name,setName] = useState('');
    const [students,setStudents] = useState(null);
    var [data,setData] = useState(Object);
    var details = [];
   

    const history = useHistory();

    useEffect(() =>{
        fetch('https://student-details-api.herokuapp.com/studentData')
        .then(res => {return res.json()})
        .then(data => setStudents(data))
         
    },[name,data])

    

    const clickHandel =  () => {
        console.log(name);
        if(students && name !== '') {
            if(students.find(ele => ele.name === name )) {
                // setData(students.find(ele => ele.name === name )); 
                for(var i=0;i<students.length;i++) {
                    if(students[i].name === name) {
                        details[i] = students[i];
                    }
                }
                setData(details);
            }
            else {
                console.log(name);
                setData(Object);   
                console.log('data not exist') ;
            }
        }
        else {
            alert("please fill the name");
        }
    }

    const saveClicked = (id,ind) => {

        var rIndex = ind.target.parentNode.parentNode.rowIndex;
        var t = document.getElementById('t1');
        var name = t.rows[rIndex].cells[1].textContent.trim();
        var dob = t.rows[rIndex].cells[2].textContent.trim();
        var age = t.rows[rIndex].cells[3].textContent.trim();
        var classgrade = t.rows[rIndex].cells[4].textContent.trim();
        var phno = t.rows[rIndex].cells[5].textContent.trim();
        var joining = t.rows[rIndex].cells[6].textContent.trim();

        console.log(name,'',dob,'',age,'',classgrade,'',phno,'',joining, id);
        
        const updatedData = {name,dob,age,classgrade,phno,joining};
            
        fetch('https://student-details-api.herokuapp.com/studentData/'+id ,{
            method:'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
            })
            .then(() => {
                history.push('/update'); 
            })
        // students[el].age = document.getElementById("cell1").value;
    }
    
    const deleteClicked = (id) => {
        fetch('https://student-details-api.herokuapp.com/studentData/'+id ,{
            method:'DELETE'
            })
            .then( () => {
                const del = data.filter(e => e.id !== id)
               
                setData(del);
            } )
    }


    
   
    return ( 
        <div className="update">
            <h1 className="header-h1">Update Student Details</h1>

            <input type="text"
            placeholder="enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => clickHandel()}>Search</button>
            
            <div className="table-content">
                 <Table singleLine id = "t1">
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
                    
                    {/* {Object.keys(data).map(el => {
                        {console.log(el)}
                        return (
                            <Table.Cell key={el} >{data[el]}</Table.Cell>
                        );
                    })} */}

                    {Object.keys(data).map(el => {
                      
                        return (
                            <Table.Row key={data[el].id}  >
                                <Table.Cell  > {data[el].id} </Table.Cell>
                                <Table.Cell contentEditable="true" suppressContentEditableWarning="true" > {data[el].name} </Table.Cell>

                                <Table.Cell contentEditable="true"  suppressContentEditableWarning="true"> {data[el].dob} </Table.Cell>

                                <Table.Cell contentEditable="true" suppressContentEditableWarning="true"> {data[el].age} </Table.Cell>
                                 
                                <Table.Cell  contentEditable="true" suppressContentEditableWarning="true"> {data[el].classgrade} </Table.Cell>

                                <Table.Cell  contentEditable="true" suppressContentEditableWarning="true"> {data[el].phno} </Table.Cell>

                                <Table.Cell  contentEditable="true" suppressContentEditableWarning="true"> {data[el].joining} </Table.Cell>

                                <Table.Cell  > 
                                <button onClick={(e) => saveClicked(data[el].id,e)}> Save </button> 
                                </Table.Cell>
                                <Table.Cell>
                                <button onClick={(e) => deleteClicked(data[el].id)}> Delete </button>
                                </Table.Cell>
                            </Table.Row>
                             
                        );
                    })}
                    
                    </Table.Body>
                </Table>
            </div>

        </div>
     );

}
 
export default Update;