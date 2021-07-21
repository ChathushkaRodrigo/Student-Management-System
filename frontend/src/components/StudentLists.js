import React ,{useState, useEffect} from"react";
import axios from "axios";

export default function AllStudents(){
  
   

   const [students, setStudents]= useState([]);

   useEffect(()=>{
 function getStudents() {

        axios.get("http://localhost:8004/student/").then((res)=>{

        setStudents(res.data);
            console.log(setStudents);

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
                {students.map(home=><div>
                    
                   <h1>  name: {home.name}</h1>
                   <h4> Age: {home.age} </h4>
                    Gender : {home.gender}
                
                
                </div>)}
        


              
            </div>
        </div>
    )












}
