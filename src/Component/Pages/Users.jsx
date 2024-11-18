import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const [allUsers,setAllUsers]= useState([]);
  const users = useLoaderData();
  

  useEffect(()=>{
    setAllUsers (users)
    
  },[users]);

const handleDelete =(id)=>{
  console.log(id);
  fetch(`http://localhost:5000/users/${id}`,{
    method:'DELETE',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(allUsers)
  })
  .then((res)=>res.json())
  .then(()=>{setAllUsers(allUsers.filter((user)=> user._id !== id))})

}


  return (
    <div>
      <h2 className="text-center py-8 text-2xl font-semibold">All Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            users && allUsers.map((user)=><User handleDelete={handleDelete} key={user._id} user={user}/>)
        }
      </div>
    </div>
  );
};

export default Users;
