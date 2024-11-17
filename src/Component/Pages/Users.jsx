import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [allUsers,setAllUsers]= useState([]);

  useEffect(()=>{
    const users = async ()=>{
         fetch('http://localhost:5000/users')
         .then((res)=>res.json())
         .then((data)=>setAllUsers(data))   
    }
    users()
    
  },[])


  return (
    <div>
      <h2 className="text-center py-8 text-2xl font-semibold">All Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            allUsers && allUsers.map((user)=><User key={user._id} user={user}/>)
        }
      </div>
    </div>
  );
};

export default Users;
