import React ,{useState, useEffect} from"react";
import axios from "axios";

export default function AllStudents(){
  
   

   const [students, setStudents]= useState([]);

   useEffect(()=>{
 function getStudents() {

        axios.get("http://localhost:8004/student/").then((res)=>{

        setStudents(res.data);


        }).catch((err)=>{
                alert(err);
        })
    }    
    getStudents();
    

   }, [])


  
   
   
    return (
        <div>
            <h1>All students</h1>
            <div className="list">
              
            </div>
        </div>
    )
}
