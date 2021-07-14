import React ,{useState}from "react";
import axios from "axios";


export default function AddStudent(){

const [name,setName]= useState("");
const [age,setage]= useState("");
const [gender,setgender]= useState("");

function sendData(e){
  e.preventDefault();

  const newStudent = {
      name,
      age,
      gender
  }

  axios.post("http://localhost:8004/student/add", newStudent).then(()=>{
      alert("Student Added");
      setName(null);
        setage(null);
        setgender(null);
    
  }).catch((err)=>{
        alert(err)
  })




}



    return(
        <div className= "container">
                <form onSubmit={sendData}>
        <div class="mb-3">
            <label for="name" class="form-label">Student Name</label>
            <input type="text " class="form-control" id="name"  onChange={(e)=>{

                setName(e.target.value);

            }}/>
            
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Student age</label>
            <input type="text " class="form-control" id="age"  onChange={(e)=>{

                setage(e.target.value);

}}/>
            
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Student gender</label>
            <input type="text " class="form-control" id="gender"  onChange={(e)=>{

            setgender(e.target.value);

}}/>
            
        </div>
        
      
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
