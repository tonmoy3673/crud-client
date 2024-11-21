import { createContext, useState } from "react";

const contextApi = createContext();
const contextProvider = ({children})=>{
    const [users,setUsers]= useState([]);

    fetch('http://localhost:5000/users',{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json'
        }
        
    })
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
console.log(users);
}
