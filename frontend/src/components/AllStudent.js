import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function AllStudent(){

    const[students, setStudents] = useState([]);

useEffect(()=> {
function getStudents(){
    axios.get("http://localhost:8070/student/").then((res) => {
        setStudents(res,data);
}).catch((err) => {
    alert(err.message);
})
}
getStudents();
},[])
    return(
        <div className = "container">
            <h1>All Students</h1>
        </div>

    )
}